import { Locale } from '@/i18n.config'
import { BUSINESS_INFO } from '@/lib/business-info'

interface SchemaMarkupProps {
  type: 'organization' | 'localBusiness' | 'service' | 'breadcrumb'
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
          name: 'MD Builders',
          alternateName: 'MD Builders - Meshack Dlamini',
          url: `https://mdbuilders.co.za/${lang}`,
          logo: 'https://mdbuilders.co.za/logo.png',
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+27-71-933-4063',
            contactType: 'customer service',
            areaServed: 'ZA',
            availableLanguage: ['English', 'Afrikaans', 'Zulu', 'Sotho']
          },
          sameAs: [
            'https://facebook.com/mdbuilders',
            'https://instagram.com/mdbuilders'
          ]
        }

      case 'localBusiness':
        return {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': 'https://mdbuilders.co.za',
          name: 'MD Builders',
          image: 'https://mdbuilders.co.za/logo.png',
          description: 'Professional construction and handyman services in Gauteng. Building, plastering, painting, paving, tiling, and plumbing.',
          address: {
            '@type': 'PostalAddress',
            streetAddress: BUSINESS_INFO.address.street,
            addressLocality: BUSINESS_INFO.address.suburb,
            addressRegion: BUSINESS_INFO.address.province,
            postalCode: BUSINESS_INFO.address.postalCode,
            addressCountry: 'ZA'
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: BUSINESS_INFO.coordinates.latitude,
            longitude: BUSINESS_INFO.coordinates.longitude
          },
          telephone: '+27719334063',
          email: 'meshackdlamini32@gmail.com',
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
          openingHoursSpecification: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            opens: '07:00',
            closes: '18:00'
          },
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.9',
            reviewCount: '127'
          },
          founder: {
            '@type': 'Person',
            name: 'Meshack Dlamini'
          }
        }

      case 'service':
        return {
          '@context': 'https://schema.org',
          '@type': 'Service',
          serviceType: data?.serviceName,
          provider: {
            '@type': 'LocalBusiness',
            name: 'MD Builders'
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