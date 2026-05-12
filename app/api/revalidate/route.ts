import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath, revalidateTag } from 'next/cache'

/**
 * On-demand revalidation endpoint
 *
 * Usage:
 *   POST /api/revalidate
 *   Headers: { 'x-revalidate-secret': process.env.REVALIDATE_SECRET }
 *   Body: { path?: string, tag?: string, paths?: string[], tags?: string[] }
 *
 * Examples:
 *   { "path": "/en/blog/my-post" }
 *   { "tag": "blog" }
 *   { "paths": ["/en/blog/post-1", "/af/blog/post-1"], "tags": ["blog"] }
 */
export async function POST(request: NextRequest) {
  const secret = request.headers.get('x-revalidate-secret')
  const expected = process.env.REVALIDATE_SECRET

  if (!expected) {
    return NextResponse.json(
      { error: 'REVALIDATE_SECRET not configured on server' },
      { status: 500 }
    )
  }

  if (secret !== expected) {
    return NextResponse.json({ error: 'Invalid secret' }, { status: 401 })
  }

  try {
    const body = await request.json().catch(() => ({}))
    const { path, tag, paths = [], tags = [] } = body as {
      path?: string
      tag?: string
      paths?: string[]
      tags?: string[]
    }

    const revalidatedPaths: string[] = []
    const revalidatedTags: string[] = []

    if (path) {
      revalidatePath(path)
      revalidatedPaths.push(path)
    }
    if (tag) {
      revalidateTag(tag)
      revalidatedTags.push(tag)
    }
    for (const p of paths) {
      revalidatePath(p)
      revalidatedPaths.push(p)
    }
    for (const t of tags) {
      revalidateTag(t)
      revalidatedTags.push(t)
    }

    return NextResponse.json({
      revalidated: true,
      now: Date.now(),
      paths: revalidatedPaths,
      tags: revalidatedTags,
    })
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Revalidation failed' },
      { status: 500 }
    )
  }
}

// Allow GET for simple cron-based revalidation pings
export async function GET(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get('secret')
  const path = request.nextUrl.searchParams.get('path')
  const tag = request.nextUrl.searchParams.get('tag')

  const expected = process.env.REVALIDATE_SECRET
  if (!expected || secret !== expected) {
    return NextResponse.json({ error: 'Invalid secret' }, { status: 401 })
  }

  if (path) revalidatePath(path)
  if (tag) revalidateTag(tag)

  return NextResponse.json({
    revalidated: true,
    now: Date.now(),
    path: path || null,
    tag: tag || null,
  })
}
