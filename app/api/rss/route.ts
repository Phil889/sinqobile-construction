import { NextResponse } from 'next/server'
import { blogPosts } from '@/lib/blog-data'

export const dynamic = 'force-dynamic'
export const revalidate = 3600

const SITE_URL = 'https://www.sinqobileconstruction.co.za'
const DEFAULT_LANG = 'en'

export async function GET() {
  const items = blogPosts
    .slice()
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 50)
    .map((post) => {
      const url = `${SITE_URL}/${DEFAULT_LANG}/blog/${post.slug}`
      const pubDate = new Date(post.dateModified || post.date).toUTCString()
      const description = escapeXml(post.excerpt)
      const title = escapeXml(post.title)
      const category = escapeXml(post.category)
      const author = escapeXml(post.author)

      return `
    <item>
      <title>${title}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${description}</description>
      <author>info@sinqobileconstruction.co.za (${author})</author>
      <category>${category}</category>
      <pubDate>${pubDate}</pubDate>
      <content:encoded><![CDATA[${post.excerpt}]]></content:encoded>
    </item>`
    })
    .join('')

  const lastBuildDate = new Date().toUTCString()

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
  xmlns:content="http://purl.org/rss/1.0/modules/content/"
  xmlns:atom="http://www.w3.org/2005/Atom"
  xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>Sinqobile Construction Blog — Building &amp; Renovation Insights</title>
    <link>${SITE_URL}/${DEFAULT_LANG}/blog</link>
    <atom:link href="${SITE_URL}/api/rss" rel="self" type="application/rss+xml" />
    <description>Construction tips, building cost guides, and home renovation insights from Johannesburg's NHBRC-registered builders. Practical advice for homeowners in Gauteng.</description>
    <language>en-ZA</language>
    <copyright>Copyright ${new Date().getFullYear()} Sinqobile Construction</copyright>
    <managingEditor>info@sinqobileconstruction.co.za (Dingwayo Reason Ndlovu)</managingEditor>
    <webMaster>info@sinqobileconstruction.co.za (Sinqobile Construction)</webMaster>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <ttl>60</ttl>
    <category>Construction</category>
    <category>Home Renovation</category>
    <category>Building &amp; Architecture</category>
    <image>
      <url>${SITE_URL}/logo.svg</url>
      <title>Sinqobile Construction</title>
      <link>${SITE_URL}</link>
      <width>512</width>
      <height>512</height>
    </image>${items}
  </channel>
</rss>`

  return new NextResponse(rss, {
    status: 200,
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, must-revalidate',
    },
  })
}

function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}
