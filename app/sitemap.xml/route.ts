import { NextRequest, NextResponse } from 'next/server'
import { i18n } from '@/i18n.config'
import { blogPosts } from '@/lib/blog-data'
import { enhancedServices } from '@/lib/enhanced-services-data'

export const dynamic = 'force-dynamic'
export const revalidate = 0

const BASE_URL = 'https://www.sinqobileconstruction.co.za'
const DEFAULT_LOCALE = 'en'

const AREAS = [
  'johannesburg',
  'sandton',
  'pretoria',
  'centurion',
  'midrand',
  'randburg',
  'fourways',
  'roodepoort',
]

const STATIC_PAGES = [
  { path: '', changefreq: 'weekly', priority: 1.0, lastmod: '2026-04-15' },
  { path: '/about', changefreq: 'monthly', priority: 0.8, lastmod: '2026-04-01' },
  { path: '/services', changefreq: 'weekly', priority: 0.9, lastmod: '2026-04-10' },
  { path: '/our-work', changefreq: 'weekly', priority: 0.7, lastmod: '2026-04-10' },
  { path: '/cost-calculator', changefreq: 'monthly', priority: 0.8, lastmod: '2026-04-01' },
  { path: '/contact', changefreq: 'monthly', priority: 0.7, lastmod: '2026-04-01' },
  { path: '/faq', changefreq: 'monthly', priority: 0.6, lastmod: '2026-04-01' },
  { path: '/areas', changefreq: 'monthly', priority: 0.7, lastmod: '2026-04-01' },
  { path: '/blog', changefreq: 'daily', priority: 0.8, lastmod: new Date().toISOString().slice(0, 10) },
]

const SITEMAP_SECTIONS = ['pages', 'services', 'areas', 'blog'] as const
type SitemapSection = (typeof SITEMAP_SECTIONS)[number]

export async function GET(request: NextRequest) {
  const type = request.nextUrl.searchParams.get('type') as SitemapSection | null

  if (type && SITEMAP_SECTIONS.includes(type)) {
    return buildSubSitemap(type)
  }

  return buildSitemapIndex()
}

function buildSitemapIndex() {
  const now = new Date().toISOString()
  const entries = SITEMAP_SECTIONS.map(
    (section) => `
  <sitemap>
    <loc>${BASE_URL}/sitemap.xml?type=${section}</loc>
    <lastmod>${now}</lastmod>
  </sitemap>`
  ).join('')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${entries}
</sitemapindex>`

  return xmlResponse(xml)
}

function buildSubSitemap(section: SitemapSection) {
  let urls: SitemapEntry[] = []
  switch (section) {
    case 'pages':
      urls = buildPagesUrls()
      break
    case 'services':
      urls = buildServicesUrls()
      break
    case 'areas':
      urls = buildAreasUrls()
      break
    case 'blog':
      urls = buildBlogUrls()
      break
  }

  const xml = renderUrlSet(urls)
  return xmlResponse(xml)
}

interface SitemapEntry {
  loc: string
  lastmod?: string
  changefreq?: string
  priority?: number
  alternates: Record<string, string>
}

function buildPagesUrls(): SitemapEntry[] {
  const entries: SitemapEntry[] = []
  for (const locale of i18n.locales) {
    for (const page of STATIC_PAGES) {
      entries.push({
        loc: `${BASE_URL}/${locale}${page.path}`,
        lastmod: page.lastmod,
        changefreq: page.changefreq,
        priority: page.priority,
        alternates: buildLocaleAlternates(page.path),
      })
    }
  }
  return entries
}

function buildServicesUrls(): SitemapEntry[] {
  const entries: SitemapEntry[] = []
  for (const locale of i18n.locales) {
    for (const service of enhancedServices) {
      entries.push({
        loc: `${BASE_URL}/${locale}/services/${service.slug}`,
        lastmod: '2026-04-10',
        changefreq: 'monthly',
        priority: service.featured ? 0.9 : 0.7,
        alternates: buildLocaleAlternates(`/services/${service.slug}`),
      })
    }
  }
  return entries
}

function buildAreasUrls(): SitemapEntry[] {
  const entries: SitemapEntry[] = []
  for (const locale of i18n.locales) {
    for (const area of AREAS) {
      entries.push({
        loc: `${BASE_URL}/${locale}/areas/${area}`,
        lastmod: '2026-04-05',
        changefreq: 'monthly',
        priority: 0.8,
        alternates: buildLocaleAlternates(`/areas/${area}`),
      })
    }
  }
  return entries
}

function buildBlogUrls(): SitemapEntry[] {
  const entries: SitemapEntry[] = []
  for (const locale of i18n.locales) {
    for (const post of blogPosts) {
      entries.push({
        loc: `${BASE_URL}/${locale}/blog/${post.slug}`,
        lastmod: post.dateModified || post.date,
        changefreq: 'weekly',
        priority: 0.7,
        alternates: buildLocaleAlternates(`/blog/${post.slug}`),
      })
    }
  }
  return entries
}

function buildLocaleAlternates(path: string): Record<string, string> {
  const alternates: Record<string, string> = {}
  for (const locale of i18n.locales) {
    alternates[locale] = `${BASE_URL}/${locale}${path}`
  }
  alternates['x-default'] = `${BASE_URL}/${DEFAULT_LOCALE}${path}`
  return alternates
}

function renderUrlSet(urls: SitemapEntry[]): string {
  const body = urls
    .map(
      (url) => `
  <url>
    <loc>${escapeXml(url.loc)}</loc>${
        url.lastmod ? `\n    <lastmod>${url.lastmod}</lastmod>` : ''
      }${
        url.changefreq ? `\n    <changefreq>${url.changefreq}</changefreq>` : ''
      }${
        url.priority !== undefined ? `\n    <priority>${url.priority.toFixed(1)}</priority>` : ''
      }
${Object.entries(url.alternates)
  .map(
    ([hreflang, href]) =>
      `    <xhtml:link rel="alternate" hreflang="${hreflang}" href="${escapeXml(href)}" />`
  )
  .join('\n')}
  </url>`
    )
    .join('')

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${body}
</urlset>`
}

function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

function xmlResponse(xml: string) {
  return new NextResponse(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, must-revalidate',
      'X-Robots-Tag': 'noindex',
    },
  })
}
