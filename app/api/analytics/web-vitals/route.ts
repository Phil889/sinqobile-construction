import { NextRequest, NextResponse } from 'next/server'

/**
 * Web Vitals collection endpoint
 *
 * Receives Core Web Vitals (LCP, FID, CLS, FCP, TTFB, INP) from the client
 * and logs them. Extend with database persistence as needed.
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const userAgent = request.headers.get('user-agent') || 'unknown'
    const country = request.headers.get('x-vercel-ip-country') || 'unknown'

    const metric = {
      name: body.name,
      value: body.value,
      id: body.id,
      delta: body.delta,
      rating: body.rating,
      navigationType: body.navigationType,
      url: body.url,
      timestamp: Date.now(),
      userAgent,
      country,
    }

    // Log to stdout — captured by Vercel runtime logs / your APM
    // Extend with: database write, analytics service, etc.
    console.log('[web-vitals]', JSON.stringify(metric))

    return NextResponse.json({ received: true }, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Invalid payload' },
      { status: 400 }
    )
  }
}
