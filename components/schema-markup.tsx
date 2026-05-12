import { Locale } from '@/i18n.config'
import { BUSINESS_INFO } from '@/lib/business-info'

const SITE_URL = 'https://www.sinqobileconstruction.co.za'
const ORG_ID = `${SITE_URL}/#organization`
const FOUNDER_ID = `${SITE_URL}/#founder`
const WEBSITE_ID = `${SITE_URL}/#website`

// Construction expertise — drives knowsAbout signals for Knowledge Graph
const CORE_EXPERTISE = [
  'NHBRC Registered Building',
  'SANS 10400 Compliance',
  'Residential Construction',
  'Commercial Building',
  'Home Renovations',
  'Kitchen Renovations',
  'Bathroom Renovations',
  'Plastering & Skimming',
  'Interior & Exterior Painting',
  'Brick Paving & Driveway Paving',
  'Tiling Installation',
  'Plumbing Services',
  'Roofing & Waterproofing',
  'Concrete Foundations',
  'Home Extensions',
  'Construction Project Management',
  'Building Regulations South Africa',
]

const SOCIAL_PROFILES = [
  'https://www.google.com/maps?cid=12743093499437970359',
  'https://www.facebook.com/sinqobileconstruction',
  'https://www.instagram.com/sinqobileconstruction',
]

const PAYMENT_METHODS = ['Cash', 'Credit Card', 'Bank Transfer', 'EFT']
const SERVICE_AREAS_CITIES = [
  { name: 'Johannesburg', lat: -26.2041, lng: 28.0473 },
  { name: 'Sandton', lat: -26.1076, lng: 28.0567 },
  { name: 'Randburg', lat: -26.0939, lng: 27.9772 },
  { name: 'Bryanston', lat: -26.0525, lng: 28.0231 },
  { name: 'Fourways', lat: -26.0274, lng: 28.0106 },
  { name: 'Midrand', lat: -25.9986, lng: 28.1378 },
  { name: 'Centurion', lat: -25.8603, lng: 28.1894 },
  { name: 'Pretoria', lat: -25.7479, lng: 28.2293 },
  { name: 'Roodepoort', lat: -26.1625, lng: 27.8725 },
]

const SERVICE_CATALOG = [
  { name: 'New Home Construction', slug: 'building' },
  { name: 'Home Renovations', slug: 'renovation' },
  { name: 'Plastering & Skimming', slug: 'plastering' },
  { name: 'Interior & Exterior Painting', slug: 'painting' },
  { name: 'Brick Paving & Driveway Paving', slug: 'paving' },
  { name: 'Wall & Floor Tiling', slug: 'tiling' },
  { name: 'Plumbing Services', slug: 'plumbing' },
  { name: 'Roofing Installation & Repairs', slug: 'roofing' },
  { name: 'Waterproofing', slug: 'waterproofing' },
  { name: 'Concrete Work', slug: 'concrete' },
  { name: 'Home Extensions', slug: 'extensions' },
]

interface SchemaMarkupProps {
  type:
    | 'organization'
    | 'localBusiness'
    | 'service'
    | 'breadcrumb'
    | 'faq'
    | 'website'
    | 'howto'
    | 'article'
    | 'review'
    | 'videoObject'
    | 'itemList'
    | 'person'
    | 'quotation'
  lang: Locale
  data?: any
}

export default function SchemaMarkup({ type, lang, data }: SchemaMarkupProps) {
  const schema = buildSchema(type, lang, data)
  if (!schema) return null

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

function buildSchema(type: SchemaMarkupProps['type'], lang: Locale, data?: any) {
  switch (type) {
    case 'organization':
      return buildOrganization(lang)
    case 'localBusiness':
      return buildLocalBusiness(lang)
    case 'website':
      return buildWebSite(lang)
    case 'service':
      return buildService(lang, data)
    case 'breadcrumb':
      return buildBreadcrumb(data)
    case 'faq':
      return buildFaq(data)
    case 'howto':
      return buildHowTo(data)
    case 'article':
      return buildArticle(lang, data)
    case 'review':
      return buildReview(data)
    case 'videoObject':
      return buildVideoObject(data)
    case 'itemList':
      return buildItemList(data)
    case 'person':
      return buildPerson(lang, data)
    case 'quotation':
      return buildQuotation(data)
    default:
      return null
  }
}

// ============================================================================
// Organization — high-level corporate entity with deep knowsAbout signals
// ============================================================================
function buildOrganization(lang: Locale) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ORG_ID,
    name: 'Sinqobile Construction',
    alternateName: ['Sinqobile Construction Pty Ltd', 'Sinqobile Construction - Dingwayo Reason Ndlovu'],
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/logo.svg`,
      width: 512,
      height: 512,
      caption: 'Sinqobile Construction logo',
    },
    image: `${SITE_URL}/og-image.jpg`,
    description:
      'NHBRC registered construction company in Johannesburg, Gauteng. Specialists in new home construction, renovations, plastering, painting, paving, tiling, plumbing, roofing, and home extensions across the Greater Johannesburg, Sandton, Pretoria, and Centurion metropolitan area.',
    foundingDate: '2010',
    founder: { '@id': FOUNDER_ID },
    knowsAbout: CORE_EXPERTISE,
    knowsLanguage: ['en', 'af', 'zu', 'st'],
    slogan: 'Built to last. Built with pride.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS_INFO.address.street,
      addressLocality: BUSINESS_INFO.address.city,
      addressRegion: BUSINESS_INFO.address.province,
      postalCode: BUSINESS_INFO.address.postalCode,
      addressCountry: 'ZA',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: BUSINESS_INFO.contact.phone,
        contactType: 'customer service',
        email: BUSINESS_INFO.contact.email,
        areaServed: 'ZA',
        availableLanguage: ['English', 'Afrikaans', 'Zulu', 'Sotho'],
        contactOption: ['TollFree', 'HearingImpairedSupported'],
        hoursAvailable: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '07:00',
            closes: '17:00',
          },
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: 'Saturday',
            opens: '08:00',
            closes: '13:00',
          },
        ],
      },
    ],
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'Professional Registration',
        name: 'NHBRC Registered Builder',
        recognizedBy: {
          '@type': 'GovernmentOrganization',
          name: 'National Home Builders Registration Council',
          url: 'https://www.nhbrc.org.za',
        },
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Construction Services',
      itemListElement: SERVICE_CATALOG.map((service, index) => ({
        '@type': 'OfferCatalog',
        position: index + 1,
        name: service.name,
        url: `${SITE_URL}/${lang}/services/${service.slug}`,
      })),
    },
    sameAs: SOCIAL_PROFILES,
  }
}

// ============================================================================
// LocalBusiness — composite type with rich review/rating/area data
// ============================================================================
function buildLocalBusiness(lang: Locale) {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'GeneralContractor', 'HomeAndConstructionBusiness'],
    '@id': `${SITE_URL}/#localbusiness`,
    name: 'Sinqobile Construction',
    alternateName: 'Sinqobile Construction Pty Ltd',
    url: SITE_URL,
    logo: `${SITE_URL}/logo.svg`,
    image: [
      `${SITE_URL}/og-image.jpg`,
      `${SITE_URL}/images/founder-portrait.jpg`,
      `${SITE_URL}/images/team-on-site.jpg`,
    ],
    description:
      'NHBRC registered construction company serving Gauteng since 2010. 4.9-star rated with 127+ verified reviews. Building, renovations, plastering, painting, paving, tiling, plumbing, and roofing across Johannesburg, Sandton, Pretoria, Midrand, Centurion, Randburg, Fourways, and Roodepoort.',
    parentOrganization: { '@id': ORG_ID },
    founder: { '@id': FOUNDER_ID },
    foundingDate: '2010',
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      minValue: 10,
      maxValue: 50,
    },
    knowsAbout: CORE_EXPERTISE,
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS_INFO.address.street,
      addressLocality: BUSINESS_INFO.address.city,
      addressRegion: BUSINESS_INFO.address.province,
      postalCode: BUSINESS_INFO.address.postalCode,
      addressCountry: 'ZA',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BUSINESS_INFO.coordinates.latitude,
      longitude: BUSINESS_INFO.coordinates.longitude,
    },
    hasMap: 'https://www.google.com/maps?cid=12743093499437970359',
    telephone: BUSINESS_INFO.contact.phone,
    email: BUSINESS_INFO.contact.email,
    priceRange: 'R400 - R500000',
    currenciesAccepted: 'ZAR',
    paymentAccepted: PAYMENT_METHODS,
    areaServed: [
      {
        '@type': 'AdministrativeArea',
        name: 'Gauteng',
        containedInPlace: {
          '@type': 'Country',
          name: 'South Africa',
        },
      },
      ...SERVICE_AREAS_CITIES.map((city) => ({
        '@type': 'City',
        name: city.name,
        geo: {
          '@type': 'GeoCoordinates',
          latitude: city.lat,
          longitude: city.lng,
        },
      })),
    ],
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: BUSINESS_INFO.coordinates.latitude,
        longitude: BUSINESS_INFO.coordinates.longitude,
      },
      geoRadius: '50000',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '07:00',
        closes: '17:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '08:00',
        closes: '13:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Sunday',
        opens: '00:00',
        closes: '00:00',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '127',
      bestRating: '5',
      worstRating: '1',
    },
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'Professional Registration',
        name: 'NHBRC Registered Builder',
        recognizedBy: {
          '@type': 'GovernmentOrganization',
          name: 'National Home Builders Registration Council',
          url: 'https://www.nhbrc.org.za',
        },
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Construction & Renovation Services',
      itemListElement: SERVICE_CATALOG.map((service, index) => ({
        '@type': 'Offer',
        position: index + 1,
        itemOffered: {
          '@type': 'Service',
          name: service.name,
          serviceType: service.name,
          url: `${SITE_URL}/${lang}/services/${service.slug}`,
          provider: { '@id': ORG_ID },
        },
      })),
    },
    additionalProperty: [
      { '@type': 'PropertyValue', name: 'Years in Business', value: '15+' },
      { '@type': 'PropertyValue', name: 'Projects Completed', value: '500+' },
      { '@type': 'PropertyValue', name: 'NHBRC Registered', value: 'Yes' },
      { '@type': 'PropertyValue', name: 'Insured', value: 'Yes' },
      { '@type': 'PropertyValue', name: 'Languages Spoken', value: 'English, Afrikaans, Zulu, Sotho' },
      { '@type': 'PropertyValue', name: 'Free Quotes', value: 'Yes' },
      { '@type': 'PropertyValue', name: 'Emergency Service', value: 'Yes' },
    ],
    sameAs: SOCIAL_PROFILES,
  }
}

// ============================================================================
// WebSite — with SearchAction sitelinks search box
// ============================================================================
function buildWebSite(lang: Locale) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: SITE_URL,
    name: 'Sinqobile Construction',
    alternateName: 'Sinqobile',
    description:
      'NHBRC registered construction services in Johannesburg, Gauteng. Building, renovations, plastering, painting, paving, tiling, plumbing, roofing.',
    publisher: { '@id': ORG_ID },
    inLanguage: ['en', 'af', 'zu', 'st'],
    potentialAction: [
      {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${SITE_URL}/${lang}/search?q={search_term_string}`,
        },
        'query-input': 'required name=search_term_string',
      },
      {
        '@type': 'ReserveAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${SITE_URL}/${lang}/contact`,
        },
        name: 'Request a Free Quote',
      },
    ],
  }
}

// ============================================================================
// Service — with speakable, BusinessAudience, mainEntityOfPage, dateModified
// ============================================================================
function buildService(lang: Locale, data?: any) {
  if (!data) return null

  const serviceUrl = `${SITE_URL}/${lang}/services/${data.slug || ''}`

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${serviceUrl}#service`,
    name: data.serviceName || data.name,
    description: data.description,
    serviceType: data.serviceName || data.name,
    url: serviceUrl,
    inLanguage: lang,
    provider: { '@id': ORG_ID },
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Gauteng' },
      ...SERVICE_AREAS_CITIES.map((city) => ({ '@type': 'City', name: city.name })),
    ],
    audience: {
      '@type': 'BusinessAudience',
      audienceType: data.audienceType ||
        'Homeowners, property developers, commercial property managers, landlords, and estate agents in Gauteng',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': serviceUrl,
    },
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['main h1', '[data-speakable]', '.service-summary'],
    },
    ...(data.dateModified && { dateModified: data.dateModified }),
    ...(data.priceRange && {
      offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'ZAR',
        lowPrice: data.priceRange.min,
        highPrice: data.priceRange.max,
        availability: 'https://schema.org/InStock',
      },
    }),
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '127',
      bestRating: '5',
      worstRating: '1',
    },
    ...(data.features && Array.isArray(data.features) && {
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: `${data.serviceName || data.name} Services`,
        itemListElement: data.features.map((feature: any, index: number) => ({
          '@type': 'Offer',
          position: index + 1,
          itemOffered: {
            '@type': 'Service',
            name: typeof feature === 'string' ? feature : feature.name,
            description: typeof feature === 'string' ? undefined : feature.description,
            inLanguage: lang,
            provider: { '@id': ORG_ID },
          },
        })),
      },
    }),
  }
}

// ============================================================================
// BreadcrumbList
// ============================================================================
function buildBreadcrumb(data?: any) {
  if (!data?.items) return null

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: data.items.map((item: any, index: number) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

// ============================================================================
// FAQPage — with speakable on answers (voice search)
// ============================================================================
function buildFaq(data?: any) {
  if (!data?.questions) return null

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['[itemprop="acceptedAnswer"]', '.faq-answer'],
    },
    mainEntity: data.questions.map((q: any) => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: q.answer,
        author: { '@id': ORG_ID },
      },
    })),
  }
}

// ============================================================================
// HowTo — for DIY/guide blog posts. Drives "How to" rich results.
// ============================================================================
function buildHowTo(data?: any) {
  if (!data?.name || !data?.steps) return null

  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: data.name,
    description: data.description,
    image: data.image ? `${SITE_URL}${data.image}` : undefined,
    totalTime: data.totalTime, // e.g., "PT2H"
    estimatedCost: data.estimatedCost && {
      '@type': 'MonetaryAmount',
      currency: 'ZAR',
      value: data.estimatedCost,
    },
    supply: data.supplies?.map((s: string) => ({
      '@type': 'HowToSupply',
      name: s,
    })),
    tool: data.tools?.map((t: string) => ({
      '@type': 'HowToTool',
      name: t,
    })),
    step: data.steps.map((step: any, index: number) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
      ...(step.image && { image: `${SITE_URL}${step.image}` }),
      ...(step.url && { url: step.url }),
    })),
    author: { '@id': ORG_ID },
    publisher: { '@id': ORG_ID },
  }
}

// ============================================================================
// Article / BlogPosting — full E-E-A-T with author depth, articleBody, etc.
// ============================================================================
function buildArticle(lang: Locale, data?: any) {
  if (!data) return null

  const articleUrl = `${SITE_URL}/${lang}/blog/${data.slug}`

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${articleUrl}#article`,
    headline: data.title,
    alternativeHeadline: data.subtitle,
    description: data.excerpt || data.description,
    image: {
      '@type': 'ImageObject',
      url: data.image?.startsWith('http') ? data.image : `${SITE_URL}${data.image}`,
      width: 1200,
      height: 630,
    },
    datePublished: data.date || data.datePublished,
    dateModified: data.dateModified || data.date,
    dateCreated: data.dateCreated || data.date,
    author: data.authorPerson || {
      '@type': 'Person',
      '@id': FOUNDER_ID,
      name: data.author || 'Dingwayo Reason Ndlovu',
      url: `${SITE_URL}/${lang}/about`,
      jobTitle: 'Founder & NHBRC Registered Builder',
      worksFor: { '@id': ORG_ID },
      knowsAbout: CORE_EXPERTISE,
    },
    publisher: { '@id': ORG_ID },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': articleUrl,
    },
    url: articleUrl,
    inLanguage: lang,
    keywords: Array.isArray(data.keywords) ? data.keywords.join(', ') : data.keywords,
    articleSection: data.category,
    wordCount: data.wordCount,
    isAccessibleForFree: true,
    ...(data.content && { articleBody: stripHtml(data.content).slice(0, 5000) }),
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', '.article-summary', '[data-speakable]'],
    },
    about: data.about,
    citation: data.citations,
  }
}

// ============================================================================
// Individual Review — different from AggregateRating, drives star snippets
// ============================================================================
function buildReview(data?: any) {
  if (!data) return null

  return {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@type': data.serviceType || 'LocalBusiness',
      '@id': `${SITE_URL}/#localbusiness`,
      name: data.serviceName || 'Sinqobile Construction',
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: data.rating,
      bestRating: 5,
      worstRating: 1,
    },
    author: {
      '@type': 'Person',
      name: data.author,
    },
    reviewBody: data.text || data.reviewBody,
    datePublished: data.date || data.datePublished,
    publisher: { '@id': ORG_ID },
  }
}

// ============================================================================
// VideoObject — for project walkthroughs and testimonials
// ============================================================================
function buildVideoObject(data?: any) {
  if (!data) return null

  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: data.name,
    description: data.description,
    thumbnailUrl: data.thumbnailUrl?.startsWith('http')
      ? data.thumbnailUrl
      : `${SITE_URL}${data.thumbnailUrl}`,
    uploadDate: data.uploadDate,
    duration: data.duration,
    contentUrl: data.contentUrl,
    embedUrl: data.embedUrl,
    publisher: { '@id': ORG_ID },
    ...(data.transcript && { transcript: data.transcript }),
  }
}

// ============================================================================
// ItemList — for listing pages (services hub, areas hub, blog hub)
// ============================================================================
function buildItemList(data?: any) {
  if (!data?.items) return null

  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: data.name,
    description: data.description,
    numberOfItems: data.items.length,
    itemListElement: data.items.map((item: any, index: number) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: item.url,
      name: item.name,
      ...(item.description && { description: item.description }),
      ...(item.image && {
        image: item.image.startsWith('http') ? item.image : `${SITE_URL}${item.image}`,
      }),
    })),
  }
}

// ============================================================================
// Person — founder with full credentials
// ============================================================================
function buildPerson(lang: Locale, data?: any) {
  const person = data || {
    name: 'Dingwayo Reason Ndlovu',
    jobTitle: 'Founder & Managing Director',
    image: '/images/dingwayo-ndlovu.jpg',
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': FOUNDER_ID,
    name: person.name,
    jobTitle: person.jobTitle,
    description:
      person.description ||
      'NHBRC registered builder with 15+ years experience in residential and commercial construction across Gauteng. Founder of Sinqobile Construction in 2010.',
    image: person.image?.startsWith('http') ? person.image : `${SITE_URL}${person.image}`,
    url: `${SITE_URL}/${lang}/about`,
    worksFor: { '@id': ORG_ID },
    affiliation: { '@id': ORG_ID },
    knowsAbout: CORE_EXPERTISE,
    knowsLanguage: ['English', 'Zulu', 'Sotho'],
    nationality: { '@type': 'Country', name: 'South Africa' },
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'Professional Registration',
        name: 'NHBRC Registered Builder',
        recognizedBy: {
          '@type': 'GovernmentOrganization',
          name: 'National Home Builders Registration Council',
          url: 'https://www.nhbrc.org.za',
        },
      },
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Sandton',
      addressRegion: 'Gauteng',
      addressCountry: 'ZA',
    },
    sameAs: person.sameAs,
  }
}

// ============================================================================
// Quotation — for cost calculator results, drives price rich snippets
// ============================================================================
function buildQuotation(data?: any) {
  if (!data) return null

  return {
    '@context': 'https://schema.org',
    '@type': 'Quotation',
    text: data.text,
    spokenByCharacter: {
      '@type': 'Person',
      name: data.spokenBy || 'Dingwayo Reason Ndlovu',
    },
    isBasedOn: {
      '@type': 'Service',
      name: data.serviceName,
      provider: { '@id': ORG_ID },
    },
  }
}

function stripHtml(html: string): string {
  return html
    .replace(/<[^>]*>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}
