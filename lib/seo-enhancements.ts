/**
 * SEO Enhancements for Sinqobile Construction
 * 
 * This module provides advanced SEO utilities including dynamic meta tags,
 * structured data generation, and SEO scoring.
 */

import { Locale } from '@/i18n.config'

export interface SEOMetadata {
  title: string
  description: string
  keywords: string[]
  canonical: string
  ogTitle?: string
  ogDescription?: string
  ogImage?: string
  ogType?: string
  twitterCard?: string
  twitterTitle?: string
  twitterDescription?: string
  twitterImage?: string
  alternateLanguages?: { lang: Locale; url: string }[]
}

export interface StructuredData {
  '@context': string
  '@type': string
  [key: string]: any
}

/**
 * Generate comprehensive SEO metadata for a page
 */
export function generateSEOMetadata(params: {
  title: string
  description: string
  keywords?: string[]
  path: string
  lang: Locale
  image?: string
  type?: string
}): SEOMetadata {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.sinqobileconstruction.co.za'
  const canonical = `${baseUrl}/${params.lang}${params.path}`
  
  const defaultKeywords = [
    'construction',
    'builders',
    'renovation',
    'Gauteng',
    'Johannesburg',
    'Sandton',
    'home improvement'
  ]

  const keywords = params.keywords || defaultKeywords
  const ogImage = params.image || `${baseUrl}/og-image.jpg`

  return {
    title: params.title,
    description: params.description,
    keywords,
    canonical,
    ogTitle: params.title,
    ogDescription: params.description,
    ogImage,
    ogType: params.type || 'website',
    twitterCard: 'summary_large_image',
    twitterTitle: params.title,
    twitterDescription: params.description,
    twitterImage: ogImage,
    alternateLanguages: [
      { lang: 'en', url: `${baseUrl}/en${params.path}` },
      { lang: 'af', url: `${baseUrl}/af${params.path}` },
      { lang: 'st', url: `${baseUrl}/st${params.path}` },
      { lang: 'zu', url: `${baseUrl}/zu${params.path}` }
    ]
  }
}

/**
 * Generate LocalBusiness structured data
 */
export function generateLocalBusinessSchema(lang: Locale): StructuredData {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://www.sinqobileconstruction.co.za/#organization',
    name: 'Sinqobile Construction',
    alternateName: 'Sinqobile Construction - Dingwayo Reason Ndlovu',
    description: 'Professional construction company in Johannesburg & Gauteng. Building, renovations, plastering, painting, paving, tiling, and plumbing services.',
    url: `https://www.sinqobileconstruction.co.za/${lang}`,
    telephone: '+27-82-868-8396',
    email: 'sinqobileconstruction@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '47 Bryanston Drive',
      addressLocality: 'Bryanston',
      addressRegion: 'Gauteng',
      postalCode: '2021',
      addressCountry: 'ZA'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -26.0667,
      longitude: 28.0167
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '17:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '08:00',
        closes: '13:00'
      }
    ],
    priceRange: 'R400 - R20000',
    image: 'https://www.sinqobileconstruction.co.za/og-image.jpg',
    logo: 'https://www.sinqobileconstruction.co.za/logo.svg',
    sameAs: [
      'https://www.facebook.com/sinqobileconstruction',
      'https://www.instagram.com/sinqobileconstruction',
      'https://www.linkedin.com/company/sinqobileconstruction'
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '127',
      bestRating: '5',
      worstRating: '1'
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Johannesburg'
      },
      {
        '@type': 'City',
        name: 'Sandton'
      },
      {
        '@type': 'City',
        name: 'Pretoria'
      },
      {
        '@type': 'City',
        name: 'Midrand'
      }
    ]
  }
}

/**
 * Generate Service structured data
 */
export function generateServiceSchema(service: {
  name: string
  description: string
  price?: { min: number; max: number }
  url: string
}): StructuredData {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    provider: {
      '@type': 'LocalBusiness',
      name: 'Sinqobile Construction',
      url: 'https://www.sinqobileconstruction.co.za'
    },
    areaServed: {
      '@type': 'State',
      name: 'Gauteng'
    },
    url: service.url,
    ...(service.price && {
      offers: {
        '@type': 'Offer',
        priceCurrency: 'ZAR',
        price: (service.price.min + service.price.max) / 2,
        priceSpecification: {
          '@type': 'PriceSpecification',
          minPrice: service.price.min,
          maxPrice: service.price.max,
          priceCurrency: 'ZAR'
        }
      }
    })
  }
}

/**
 * Generate FAQ structured data
 */
export function generateFAQSchema(faqs: { question: string; answer: string }[]): StructuredData {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  }
}

/**
 * Generate Review structured data
 */
export function generateReviewSchema(review: {
  author: string
  rating: number
  reviewBody: string
  datePublished: string
}): StructuredData {
  return {
    '@context': 'https://schema.org',
    '@type': 'Review',
    author: {
      '@type': 'Person',
      name: review.author
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: review.rating,
      bestRating: 5,
      worstRating: 1
    },
    reviewBody: review.reviewBody,
    datePublished: review.datePublished,
    itemReviewed: {
      '@type': 'LocalBusiness',
      name: 'Sinqobile Construction',
      url: 'https://www.sinqobileconstruction.co.za'
    }
  }
}

/**
 * Generate Article structured data for blog posts
 */
export function generateArticleSchema(article: {
  title: string
  description: string
  author: string
  datePublished: string
  dateModified?: string
  image: string
  url: string
}): StructuredData {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    image: article.image,
    author: {
      '@type': 'Person',
      name: article.author
    },
    publisher: {
      '@type': 'Organization',
      name: 'Sinqobile Construction',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.sinqobileconstruction.co.za/logo.svg'
      }
    },
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    url: article.url
  }
}

/**
 * Calculate SEO score for a page
 */
export function calculateSEOScore(params: {
  title: string
  description: string
  headings: string[]
  images: { alt: string; src: string }[]
  links: { internal: number; external: number }
  wordCount: number
  hasStructuredData: boolean
  hasCanonical: boolean
  hasMetaRobots: boolean
  loadTime: number
}): {
  score: number
  issues: string[]
  recommendations: string[]
} {
  let score = 100
  const issues: string[] = []
  const recommendations: string[] = []

  // Title checks
  if (!params.title) {
    score -= 15
    issues.push('Missing page title')
  } else if (params.title.length < 30) {
    score -= 5
    recommendations.push('Title is too short (< 30 characters)')
  } else if (params.title.length > 60) {
    score -= 5
    recommendations.push('Title is too long (> 60 characters)')
  }

  // Description checks
  if (!params.description) {
    score -= 15
    issues.push('Missing meta description')
  } else if (params.description.length < 120) {
    score -= 5
    recommendations.push('Description is too short (< 120 characters)')
  } else if (params.description.length > 160) {
    score -= 5
    recommendations.push('Description is too long (> 160 characters)')
  }

  // Heading checks
  if (params.headings.length === 0) {
    score -= 10
    issues.push('No headings found')
  } else if (!params.headings[0]) {
    score -= 5
    issues.push('Missing H1 heading')
  }

  // Image checks
  const imagesWithoutAlt = params.images.filter(img => !img.alt).length
  if (imagesWithoutAlt > 0) {
    score -= Math.min(10, imagesWithoutAlt * 2)
    issues.push(`${imagesWithoutAlt} images missing alt text`)
  }

  // Link checks
  if (params.links.internal < 3) {
    score -= 5
    recommendations.push('Add more internal links (< 3 found)')
  }
  if (params.links.external === 0) {
    score -= 3
    recommendations.push('Consider adding relevant external links')
  }

  // Content checks
  if (params.wordCount < 300) {
    score -= 10
    issues.push('Content is too short (< 300 words)')
  } else if (params.wordCount < 500) {
    score -= 5
    recommendations.push('Consider adding more content (< 500 words)')
  }

  // Technical SEO checks
  if (!params.hasStructuredData) {
    score -= 10
    recommendations.push('Add structured data (Schema.org)')
  }
  if (!params.hasCanonical) {
    score -= 5
    issues.push('Missing canonical URL')
  }
  if (!params.hasMetaRobots) {
    score -= 3
    recommendations.push('Add meta robots tag')
  }

  // Performance checks
  if (params.loadTime > 3000) {
    score -= 10
    issues.push('Page load time is too slow (> 3s)')
  } else if (params.loadTime > 2000) {
    score -= 5
    recommendations.push('Optimize page load time (> 2s)')
  }

  return {
    score: Math.max(0, score),
    issues,
    recommendations
  }
}

/**
 * Generate XML sitemap entry
 */
export function generateSitemapEntry(params: {
  url: string
  lastModified?: Date
  changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
  priority?: number
  alternateLanguages?: { lang: Locale; url: string }[]
}): string {
  const lastmod = params.lastModified?.toISOString().split('T')[0] || new Date().toISOString().split('T')[0]
  const changefreq = params.changeFrequency || 'weekly'
  const priority = params.priority || 0.5

  let xml = `
  <url>
    <loc>${params.url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>`

  if (params.alternateLanguages) {
    params.alternateLanguages.forEach(alt => {
      xml += `
    <xhtml:link rel="alternate" hreflang="${alt.lang}" href="${alt.url}" />`
    })
  }

  xml += `
  </url>`

  return xml
}

/**
 * Generate robots.txt content
 */
export function generateRobotsTxt(params: {
  sitemapUrl: string
  disallowPaths?: string[]
  allowPaths?: string[]
}): string {
  let content = `User-agent: *\n`

  if (params.disallowPaths) {
    params.disallowPaths.forEach(path => {
      content += `Disallow: ${path}\n`
    })
  }

  if (params.allowPaths) {
    params.allowPaths.forEach(path => {
      content += `Allow: ${path}\n`
    })
  }

  content += `\nSitemap: ${params.sitemapUrl}\n`

  return content
}

/**
 * Extract keywords from content
 */
export function extractKeywords(content: string, limit: number = 10): string[] {
  // Remove common words
  const stopWords = new Set([
    'the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for',
    'of', 'with', 'by', 'from', 'as', 'is', 'was', 'are', 'were', 'been',
    'be', 'have', 'has', 'had', 'do', 'does', 'did', 'will', 'would', 'could',
    'should', 'may', 'might', 'must', 'can', 'this', 'that', 'these', 'those'
  ])

  // Extract words
  const words = content
    .toLowerCase()
    .replace(/[^\w\s]/g, ' ')
    .split(/\s+/)
    .filter(word => word.length > 3 && !stopWords.has(word))

  // Count frequency
  const frequency: Record<string, number> = {}
  words.forEach(word => {
    frequency[word] = (frequency[word] || 0) + 1
  })

  // Sort by frequency and return top keywords
  return Object.entries(frequency)
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit)
    .map(([word]) => word)
}

/**
 * Optimize image alt text for SEO
 */
export function generateImageAlt(params: {
  filename: string
  context?: string
  location?: string
  service?: string
}): string {
  // Extract meaningful parts from filename
  const parts = params.filename
    .replace(/\.(jpg|jpeg|png|webp|avif)$/i, '')
    .split(/[-_]/)
    .filter(part => part.length > 2)

  let alt = parts.join(' ')

  // Add context
  if (params.service) {
    alt = `${params.service} ${alt}`
  }

  if (params.location) {
    alt += ` in ${params.location}`
  }

  if (params.context) {
    alt += ` - ${params.context}`
  }

  // Capitalize first letter
  alt = alt.charAt(0).toUpperCase() + alt.slice(1)

  return alt
}