import React from 'react';

interface LocalBusinessSchemaProps {
  areaName: string;
  areaSlug: string;
  description: string;
  rating: number;
  reviewCount: number;
  projectCount: number;
  lang: string;
}

export default function LocalBusinessSchema({
  areaName,
  areaSlug,
  description,
  rating,
  reviewCount,
  projectCount,
  lang
}: LocalBusinessSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `https://mdbuilders.co.za/${lang}/areas/${areaSlug}#business`,
    "name": `Sinqobile Construction - ${areaName}`,
    "image": "https://mdbuilders.co.za/og-image.jpg",
    "description": description,
    "url": `https://mdbuilders.co.za/${lang}/areas/${areaSlug}`,
    "telephone": "+27719334063",
    "priceRange": "R400 - R500000",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": areaName,
      "addressRegion": "Gauteng",
      "addressCountry": "ZA"
    },
    "geo": getGeoCoordinates(areaSlug),
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        ...getGeoCoordinates(areaSlug)
      },
      "geoRadius": "25000"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": rating.toString(),
      "reviewCount": reviewCount.toString(),
      "bestRating": "5",
      "worstRating": "1"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "07:00",
        "closes": "17:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "08:00",
        "closes": "13:00"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/mdbuilders",
      "https://www.instagram.com/mdbuilders"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Construction Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Building & Construction",
            "description": "Professional building and construction services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Renovations",
            "description": "Home and commercial renovation services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Plastering",
            "description": "Expert plastering and skimming services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Painting",
            "description": "Interior and exterior painting services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Paving",
            "description": "Driveway and patio paving services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Tiling",
            "description": "Floor and wall tiling services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Plumbing",
            "description": "Plumbing installation and repair services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Roofing",
            "description": "Roof installation and repair services"
          }
        }
      ]
    },
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "name": "Projects Completed",
        "value": projectCount.toString()
      },
      {
        "@type": "PropertyValue",
        "name": "Years in Business",
        "value": "15"
      },
      {
        "@type": "PropertyValue",
        "name": "Licensed",
        "value": "NHBRC Registered"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function getGeoCoordinates(areaSlug: string): { latitude: string; longitude: string } {
  const coordinates: Record<string, { latitude: string; longitude: string }> = {
    'johannesburg': { latitude: '-26.2041', longitude: '28.0473' },
    'sandton': { latitude: '-26.1076', longitude: '28.0567' },
    'pretoria': { latitude: '-25.7479', longitude: '28.2293' },
    'centurion': { latitude: '-25.8601', longitude: '28.1889' },
    'midrand': { latitude: '-25.9895', longitude: '28.1288' },
    'randburg': { latitude: '-26.0936', longitude: '27.9820' },
    'fourways': { latitude: '-26.0125', longitude: '28.0084' },
    'roodepoort': { latitude: '-26.1625', longitude: '27.8725' }
  };

  return coordinates[areaSlug] || coordinates['johannesburg'];
}