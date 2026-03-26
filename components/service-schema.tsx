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
    "@id": `https://www.sinqobileconstruction.co.za/${lang}/services/${serviceSlug}#service`,
    "name": serviceName,
    "description": description,
    "provider": {
      "@type": "LocalBusiness",
      "@id": "https://www.sinqobileconstruction.co.za/#organization",
      "name": "Sinqobile Construction",
      "image": "https://www.sinqobileconstruction.co.za/og-image.jpg",
      "telephone": "+27828688396",
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
        "reviewCount": "127",
        "bestRating": "5",
        "worstRating": "1"
      }
    },
    "serviceType": serviceName,
    "url": `https://www.sinqobileconstruction.co.za/${lang}/services/${serviceSlug}`,
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
    'building': [
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
    'renovation': [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Kitchen Renovations Johannesburg",
          "description": "Complete kitchen renovation and remodeling services in Johannesburg including cabinetry, countertops, flooring and modern design"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Bathroom Renovations Johannesburg",
          "description": "Full bathroom renovation services including tiling, plumbing, vanities and modern bathroom design across Gauteng"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Whole Home Renovations",
          "description": "Complete house renovation and remodeling services from design to completion for residential properties"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Bedroom & Living Area Renovations",
          "description": "Living room and bedroom renovation services including open-plan conversions, flooring, lighting and modern finishes"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Office & Commercial Renovations",
          "description": "Commercial property renovation services in Johannesburg including office fit-outs and retail renovations"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Property Renovation for Resale",
          "description": "Investment property renovation to increase resale value with strategic upgrades for maximum ROI"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Renovation Project Management",
          "description": "End-to-end renovation project management including design consultation, contractor coordination and budget management"
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
          "description": "Professional driveway paving installation in Johannesburg"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Patio Paving",
          "description": "Patio and entertainment area paving"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Walkway Paving",
          "description": "Walkway and pathway paving installation"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Pool Area Paving",
          "description": "Slip-resistant pool surround paving"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Entrance Paving",
          "description": "Decorative entrance and forecourt paving"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Commercial Paving",
          "description": "Commercial and industrial parking area paving in Gauteng"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Brick Paving",
          "description": "Clay and concrete brick paving installation"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Interlocking Paving",
          "description": "Interlocking paver systems for driveways and walkways"
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
          "name": "Geyser Installation & Repair",
          "description": "Electric and solar geyser installation, replacement and repair services in Johannesburg"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Emergency Plumbing",
          "description": "24/7 emergency plumber in Johannesburg for burst pipes, water leaks and plumbing failures"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Drain Cleaning & Unblocking",
          "description": "Blocked drain clearing, sewer cleaning and drain jetting services in Johannesburg"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Burst Pipe Repair",
          "description": "Fast burst pipe detection and repair across Johannesburg with 24/7 emergency response"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Leak Detection",
          "description": "Professional water leak detection services in Johannesburg for residential and commercial properties"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Plumbing Installations",
          "description": "New plumbing installations for bathrooms, kitchens and full residential or commercial properties"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Plumbing Repairs & Maintenance",
          "description": "Routine and emergency plumbing repairs — taps, toilets, pipes, valves and water pressure issues"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Bathroom & Kitchen Plumbing",
          "description": "Complete bathroom and kitchen plumbing fit-outs for new builds and renovations in Johannesburg"
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
    ],
    'concrete': [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Concrete Foundations",
          "description": "Raft foundations, strip foundations and excavation for residential and commercial buildings in Johannesburg"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Concrete Slabs",
          "description": "Reinforced concrete slabs, surface beds and suspended slabs for new builds and extensions in Gauteng"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Concrete Driveways",
          "description": "Durable concrete driveway installation and repair for residential properties in Johannesburg"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Reinforced Concrete Structures",
          "description": "Reinforced concrete beams, columns, staircases and retaining walls engineered to SANS standards"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Concrete Floors",
          "description": "Industrial concrete flooring, screeded floors and polished concrete for commercial and residential properties"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Concrete Retaining Walls",
          "description": "Structural concrete retaining walls and boundary walls for sloped sites across Johannesburg and Gauteng"
        }
      }
    ]
  }

  return features[serviceSlug] || []
}