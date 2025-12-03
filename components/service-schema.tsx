import React from 'react'

interface ServiceSchemaProps {
  serviceName: string
  serviceSlug: string
  description: string
  priceRange: string
  lang: string
}

export default function ServiceSchema({
  serviceName,
  serviceSlug,
  description,
  priceRange,
  lang
}: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `https://mdbuilders.co.za/${lang}/services/${serviceSlug}#service`,
    "name": serviceName,
    "description": description,
    "provider": {
      "@type": "LocalBusiness",
      "@id": "https://mdbuilders.co.za/#organization",
      "name": "Sinqobile Construction",
      "image": "https://mdbuilders.co.za/og-image.jpg",
      "telephone": "+27719334063",
      "priceRange": priceRange,
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "Gauteng",
        "addressCountry": "ZA"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "-26.2041",
        "longitude": "28.0473"
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Johannesburg"
        },
        {
          "@type": "City",
          "name": "Sandton"
        },
        {
          "@type": "City",
          "name": "Pretoria"
        },
        {
          "@type": "City",
          "name": "Centurion"
        },
        {
          "@type": "City",
          "name": "Midrand"
        },
        {
          "@type": "City",
          "name": "Randburg"
        },
        {
          "@type": "City",
          "name": "Fourways"
        },
        {
          "@type": "City",
          "name": "Roodepoort"
        }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "150",
        "bestRating": "5",
        "worstRating": "1"
      }
    },
    "serviceType": serviceName,
    "url": `https://mdbuilders.co.za/${lang}/services/${serviceSlug}`,
    "offers": {
      "@type": "Offer",
      "priceRange": priceRange,
      "priceCurrency": "ZAR",
      "availability": "https://schema.org/InStock",
      "availableAtOrFrom": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressRegion": "Gauteng",
          "addressCountry": "ZA"
        }
      }
    },
    "areaServed": {
      "@type": "State",
      "name": "Gauteng"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `${serviceName} Services`,
      "itemListElement": getServiceFeatures(serviceSlug)
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

function getServiceFeatures(serviceSlug: string) {
  const features: Record<string, any[]> = {
    'building-construction': [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "New Home Construction",
          "description": "Complete new home building services"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Home Extensions",
          "description": "Room additions and home extensions"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Commercial Building",
          "description": "Commercial construction projects"
        }
      }
    ],
    'renovations': [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Kitchen Renovations",
          "description": "Complete kitchen remodeling"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Bathroom Renovations",
          "description": "Bathroom upgrades and remodeling"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Whole Home Renovations",
          "description": "Complete home renovation services"
        }
      }
    ],
    'plastering': [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Wall Plastering",
          "description": "Interior and exterior wall plastering"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Ceiling Plastering",
          "description": "Ceiling repairs and plastering"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Skimming",
          "description": "Professional skimming services"
        }
      }
    ],
    'painting': [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Interior Painting",
          "description": "Professional interior painting"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Exterior Painting",
          "description": "Exterior house painting"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Commercial Painting",
          "description": "Commercial property painting"
        }
      }
    ],
    'paving': [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Driveway Paving",
          "description": "Driveway installation and paving"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Patio Paving",
          "description": "Patio and outdoor area paving"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Walkway Paving",
          "description": "Walkway and pathway paving"
        }
      }
    ],
    'tiling': [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Floor Tiling",
          "description": "Professional floor tiling services"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Wall Tiling",
          "description": "Bathroom and kitchen wall tiling"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Outdoor Tiling",
          "description": "Outdoor and patio tiling"
        }
      }
    ],
    'plumbing': [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Plumbing Installation",
          "description": "New plumbing installations"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Plumbing Repairs",
          "description": "Emergency and routine plumbing repairs"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Drain Cleaning",
          "description": "Drain and sewer cleaning services"
        }
      }
    ],
    'roofing': [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Roof Installation",
          "description": "New roof installation services"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Roof Repairs",
          "description": "Roof leak repairs and maintenance"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Roof Replacement",
          "description": "Complete roof replacement"
        }
      }
    ]
  }

  return features[serviceSlug] || []
}