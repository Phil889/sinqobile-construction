import { Locale } from '@/i18n.config'
import { BUSINESS_INFO } from '@/lib/business-info'

interface SchemaMarkupProps {
  type: 'organization' | 'localBusiness' | 'service' | 'breadcrumb' | 'faq' | 'website'
  lang: Locale
  data?: any
}

export default function SchemaMarkup({ type, lang, data }: SchemaMarkupProps) {
  const getSchema = () => {
    switch (type) {
      case 'organization':
        return {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          '@id': 'https://www.sinqobileconstruction.co.za/#organization',
          name: 'Sinqobile Construction',
          alternateName: 'Sinqobile Construction - Dingwayo Reason Ndlovu',
          url: 'https://www.sinqobileconstruction.co.za',
          logo: 'https://www.sinqobileconstruction.co.za/logo.png',
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: BUSINESS_INFO.contact.phone,
            contactType: 'customer service',
            areaServed: 'ZA',
            availableLanguage: ['English', 'Afrikaans', 'Zulu', 'Sotho']
          },
          sameAs: [
            'https://www.google.com/maps?cid=12743093499437970359',
            'https://www.facebook.com/sinqobileconstruction',
            'https://www.instagram.com/sinqobileconstruction'
          ]
        }

      case 'localBusiness':
        return {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': 'https://www.sinqobileconstruction.co.za/#localbusiness',
          name: 'Sinqobile Construction',
          image: 'https://www.sinqobileconstruction.co.za/logo.png',
          description: 'Professional construction and building services in Gauteng. Building, plastering, painting, paving, tiling, and plumbing.',
          address: {
            '@type': 'PostalAddress',
            streetAddress: BUSINESS_INFO.address.street,
            addressLocality: BUSINESS_INFO.address.city,
            addressRegion: BUSINESS_INFO.address.province,
            postalCode: BUSINESS_INFO.address.postalCode,
            addressCountry: 'ZA'
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: BUSINESS_INFO.coordinates.latitude,
            longitude: BUSINESS_INFO.coordinates.longitude
          },
          telephone: BUSINESS_INFO.contact.phone,
          email: BUSINESS_INFO.contact.email,
          priceRange: 'R5000-R500000',
          paymentAccepted: ['Cash', 'Credit Card', 'Bank Transfer', 'EFT'],
          areaServed: [
            { '@type': 'City', name: 'Johannesburg' },
            { '@type': 'City', name: 'Sandton' },
            { '@type': 'City', name: 'Randburg' },
            { '@type': 'City', name: 'Bryanston' },
            { '@type': 'City', name: 'Fourways' },
            { '@type': 'City', name: 'Midrand' },
            { '@type': 'City', name: 'Centurion' },
            { '@type': 'City', name: 'Pretoria' }
          ],
          openingHoursSpecification: [
            {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
              opens: '07:00',
              closes: '17:00'
            },
            {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: 'Saturday',
              opens: '08:00',
              closes: '13:00'
            }
          ],
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.9',
            reviewCount: '127'
          },
          founder: {
            '@type': 'Person',
            '@id': 'https://www.sinqobileconstruction.co.za/#founder',
            name: 'Dingwayo Reason Ndlovu'
          }
        }

      case 'service':
        return {
          '@context': 'https://schema.org',
          '@type': 'Service',
          serviceType: data?.serviceName,
          provider: {
            '@type': 'LocalBusiness',
            name: 'Sinqobile Construction'
          },
          areaServed: {
            '@type': 'State',
            name: 'Gauteng'
          },
          description: data?.description,
          offers: {
            '@type': 'Offer',
            availability: 'https://schema.org/InStock'
          }
        }

      case 'breadcrumb':
        return {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: data?.items.map((item: any, index: number) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: item.url
          }))
        }

      case 'faq':
        return {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: data?.questions.map((q: any) => ({
            '@type': 'Question',
            name: q.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: q.answer
            }
          }))
        }

      case 'website':
        return {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          '@id': 'https://www.sinqobileconstruction.co.za/#website',
          url: 'https://www.sinqobileconstruction.co.za',
          name: 'Sinqobile Construction',
          description: 'Professional Construction Services in Gauteng',
          publisher: {
            '@type': 'Organization',
            '@id': 'https://www.sinqobileconstruction.co.za/#organization'
          },
          inLanguage: ['en', 'af', 'zu', 'st']
        }
    }
  }

  const schema = getSchema()

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}