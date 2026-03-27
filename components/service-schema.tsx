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
          "name": "Wall Plastering Johannesburg",
          "description": "Interior and exterior wall plastering for residential and commercial properties in Johannesburg — smooth cement plaster finishes by NHBRC registered contractors"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Ceiling Plastering Johannesburg",
          "description": "Professional ceiling plastering, repairs and re-skimming services for homes and offices across Johannesburg and Gauteng"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Skimming & Skim Coating",
          "description": "Smooth skim coating and wall skimming services in Johannesburg — perfect preparation for painting and wallpaper application"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Plaster Repairs Johannesburg",
          "description": "Crack repair, damp-damaged plaster restoration and patch plastering for walls and ceilings in Johannesburg and Gauteng"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Exterior Rendering Johannesburg",
          "description": "Exterior wall rendering and sand-cement plastering for weatherproofing and curb appeal on Gauteng properties"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Rhinolite Plastering",
          "description": "Rhinolite skim plaster application for ultra-smooth wall finishes on residential and commercial interiors in Johannesburg"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Commercial Plastering Gauteng",
          "description": "Large-scale plastering and rendering for commercial buildings, apartment complexes and industrial properties across Gauteng"
        }
      }
    ],
    'painting': [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Interior House Painting Johannesburg",
          "description": "Professional interior painting for homes in Johannesburg — walls, ceilings and trim with premium paints and flawless finishes across Gauteng"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Exterior House Painting Johannesburg",
          "description": "Durable exterior house painting in Johannesburg using weather-resistant coatings for lasting protection against Gauteng UV and storms"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Commercial Painting Contractors Johannesburg",
          "description": "Commercial and industrial painting services in Johannesburg — offices, retail spaces, warehouses and multi-storey buildings across Gauteng"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Residential Painting Services",
          "description": "Complete residential painting packages for Johannesburg homeowners including interior, exterior, walls, ceilings and woodwork"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Ceiling & Trim Painting",
          "description": "Specialist ceiling painting, skirting board and door frame finishing for a polished look in residential and commercial properties"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Colour Consultation & Design",
          "description": "Expert colour consultation and paint specification services to help Johannesburg homeowners choose the perfect palette"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Textured & Decorative Finishes",
          "description": "Decorative wall finishes, feature walls and textured coatings for unique interiors in Johannesburg homes and commercial spaces"
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
          "name": "Floor Tiling Johannesburg",
          "description": "Professional floor tiling installation for residential and commercial properties in Johannesburg — ceramic, porcelain and natural stone tiles across Gauteng"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Wall Tiling Johannesburg",
          "description": "Interior and exterior wall tiling for bathrooms, kitchens and feature walls in Johannesburg with precision cutting and waterproof grouting"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Bathroom Tiling Johannesburg",
          "description": "Complete bathroom tiling services in Johannesburg including floor-to-ceiling tiles, shower tiling, waterproofing and mosaic accents"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Kitchen Tiling Johannesburg",
          "description": "Kitchen floor and splashback tiling in Johannesburg — porcelain, ceramic and natural stone installation for modern and classic designs"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Outdoor Tiling Johannesburg",
          "description": "Non-slip outdoor tiling for patios, pool surrounds, driveways and entertainment areas using frost-resistant and UV-stable tiles"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Commercial Tiling Gauteng",
          "description": "Large-scale commercial tiling for offices, retail spaces, restaurants and industrial facilities across Johannesburg and Gauteng"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Decorative & Mosaic Tiling",
          "description": "Custom mosaic and decorative tile installation for feature walls, borders and artistic tiling designs in Johannesburg homes and businesses"
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
          "name": "Roof Installation Johannesburg",
          "description": "Complete new roof installation for residential and commercial properties in Johannesburg including IBR, corrugated and tile roofing"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Roof Repairs Johannesburg",
          "description": "Professional roof leak repairs, ridge cap replacement and storm damage repairs across Johannesburg and Gauteng"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Roof Replacement",
          "description": "Full roof replacement and reroofing services for aging or damaged roofs in Johannesburg"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Roof Painting",
          "description": "Roof painting and coating for IBR, corrugated and tile roofs to extend lifespan and improve appearance"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "IBR & Corrugated Roofing",
          "description": "IBR and corrugated metal roof sheeting installation and repair for residential and commercial properties"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Tile Roofing",
          "description": "Concrete and clay tile roof installation, repairs and re-tiling services in Johannesburg"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Roof Truss Installation",
          "description": "Timber and steel roof truss fabrication and installation for new builds and extensions in Gauteng"
        }
      }
    ],
    'waterproofing': [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Roof Waterproofing Johannesburg",
          "description": "Torch-on membrane, liquid rubber and bitumen waterproofing for flat roofs, tiled roofs and IBR roofs across Johannesburg and Gauteng"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Basement Waterproofing",
          "description": "Below-ground waterproofing, tanking and sealing for basements and cellars to prevent water ingress and structural damage"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Damp Proofing & Rising Damp Treatment",
          "description": "Chemical damp proof course injection and rising damp treatment for residential and commercial properties in Johannesburg"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Bathroom Waterproofing",
          "description": "Waterproof membrane application for bathrooms, showers and wet areas to prevent leaks and moisture damage"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Pool Waterproofing",
          "description": "Swimming pool waterproofing and re-sealing services using specialist pool membrane systems"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Exterior Wall Waterproofing",
          "description": "External wall waterproofing and damp proofing to protect against rain penetration and lateral damp in Gauteng properties"
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
    'extensions': [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Room Additions Johannesburg",
          "description": "Extra bedroom, bathroom, kitchen or living room additions to existing homes in Johannesburg — NHBRC registered, council-approved plans included"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Second Storey Extensions Johannesburg",
          "description": "Add a full second floor to your single-storey home in Johannesburg with structural engineering, foundation assessment and NHBRC compliance"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Granny Flat Construction Johannesburg",
          "description": "Self-contained granny flat building in Johannesburg — separate entrance, kitchen, bathroom and bedroom with full council approval"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Garage Conversions Johannesburg",
          "description": "Convert your garage into a liveable room, home office or rental unit in Johannesburg — insulation, flooring, plumbing and electrical included"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Kitchen Extensions Johannesburg",
          "description": "Extend your kitchen with open-plan living spaces, additional cabinetry and modern finishes across Johannesburg and Gauteng"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Home Office Extensions",
          "description": "Purpose-built home office extensions with insulation, electrical points, data cabling and separate entrance options for Gauteng homeowners"
        }
      }
    ]
  }

  return features[serviceSlug] || []
}