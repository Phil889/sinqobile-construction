import { MetadataRoute } from 'next'
import { i18n } from '@/i18n.config'
import { blogPosts } from '@/lib/blog-data'

// Actual content modification dates (not build timestamps)
const routeDates: Record<string, string> = {
  '': '2026-03-28',
  '/about': '2026-03-28',
  '/services': '2026-03-28',
  '/services/building': '2026-03-28',
  '/services/plastering': '2026-03-29',
  '/services/painting': '2026-03-29',
  '/services/paving': '2026-03-28',
  '/services/tiling': '2026-03-29',
  '/services/plumbing': '2026-03-28',
  '/services/concrete': '2026-03-28',
  '/services/waterproofing': '2026-03-29',
  '/services/extensions': '2026-03-29',
  '/services/fencing': '2026-03-29',
  '/services/flooring': '2026-03-29',
  '/services/installation': '2026-03-29',
  '/services/renovation': '2026-03-28',
  '/services/repairs': '2026-03-29',
  '/services/roofing': '2026-03-28',
  '/services/brickwork': '2026-03-29',
  '/services/maintenance': '2026-03-29',
  '/services/landscaping': '2026-03-29',
  '/services/electrical': '2026-03-29',
  '/our-work': '2026-03-28',
  '/cost-calculator': '2026-03-28',
  '/blog': '2026-03-30',
  '/contact': '2026-03-28',
  '/faq': '2026-03-28',
  '/areas': '2026-03-28',
  '/areas/johannesburg': '2026-03-29',
  '/areas/sandton': '2026-03-29',
  '/areas/pretoria': '2026-03-29',
  '/areas/centurion': '2026-03-29',
  '/areas/midrand': '2026-03-29',
  '/areas/randburg': '2026-03-29',
  '/areas/fourways': '2026-03-29',
  '/areas/roodepoort': '2026-03-29',
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.sinqobileconstruction.co.za'

  const routes = Object.keys(routeDates)

  const sitemapEntries: MetadataRoute.Sitemap = []

  // Add routes for each language
  i18n.locales.forEach((locale) => {
    routes.forEach((route) => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(routeDates[route]),
        alternates: {
          languages: {
            ...Object.fromEntries(
              i18n.locales.map((lang) => [
                lang,
                `${baseUrl}/${lang}${route}`
              ])
            ),
            'x-default': `${baseUrl}/en${route}`,
          }
        }
      })
    })

    // Add blog posts for each language
    blogPosts.forEach((post) => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}/blog/${post.slug}`,
        lastModified: new Date(post.dateModified || post.date),
        alternates: {
          languages: {
            ...Object.fromEntries(
              i18n.locales.map((lang) => [
                lang,
                `${baseUrl}/${lang}/blog/${post.slug}`
              ])
            ),
            'x-default': `${baseUrl}/en/blog/${post.slug}`,
          }
        }
      })
    })
  })

  return sitemapEntries
}
