import { MetadataRoute } from 'next'
import { i18n } from '@/i18n.config'
import { blogPosts } from '@/lib/blog-data'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://mdbuilders.co.za'
  
  const routes = [
    '',
    '/about',
    '/services',
    '/services/building',
    '/services/plastering',
    '/services/painting',
    '/services/paving',
    '/services/tiling',
    '/services/plumbing',
    '/our-work',
    '/cost-calculator',
    '/blog',
    '/contact',
    '/faq',
    '/areas'
  ]

  const sitemap: MetadataRoute.Sitemap = []

  // Add routes for each language
  i18n.locales.forEach((locale) => {
    routes.forEach((route) => {
      sitemap.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'daily' : route === '/blog' ? 'weekly' : 'monthly',
        priority: route === '' ? 1.0 : route.includes('/services/') ? 0.8 : route === '/blog' ? 0.7 : 0.6,
        alternates: {
          languages: Object.fromEntries(
            i18n.locales.map((lang) => [
              lang,
              `${baseUrl}/${lang}${route}`
            ])
          )
        }
      })
    })

    // Add blog posts for each language
    blogPosts.forEach((post) => {
      sitemap.push({
        url: `${baseUrl}/${locale}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: 'monthly',
        priority: 0.6,
        alternates: {
          languages: Object.fromEntries(
            i18n.locales.map((lang) => [
              lang,
              `${baseUrl}/${lang}/blog/${post.slug}`
            ])
          )
        }
      })
    })
  })

  return sitemap
}