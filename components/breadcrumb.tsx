'use client'

import React from 'react'
import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'
import { Locale } from '@/i18n.config'

export interface BreadcrumbItem {
  label: string
  href: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  lang: Locale
  dict: any
}

const Breadcrumb = ({ items, lang, dict }: BreadcrumbProps) => {
  // Generate schema markup for breadcrumbs
  const schemaMarkup = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': dict?.navigation?.home || 'Home',
        'item': `https://mdbuilders.co.za/${lang}`
      },
      ...items.map((item, index) => ({
        '@type': 'ListItem',
        'position': index + 2,
        'name': item.label,
        'item': `https://mdbuilders.co.za${item.href}`
      }))
    ]
  }

  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />

      {/* Visual Breadcrumb */}
      <nav aria-label="Breadcrumb" className="bg-lightBackground py-3">
        <div className="container mx-auto px-4">
          <ol className="flex items-center space-x-2 text-sm">
            {/* Home Link */}
            <li>
              <Link
                href={`/${lang}`}
                className="flex items-center text-secondary hover:text-primary transition-colors"
                aria-label={dict?.navigation?.home || 'Home'}
              >
                <Home size={16} className="mr-1" />
                <span className="hidden sm:inline">{dict?.navigation?.home || 'Home'}</span>
              </Link>
            </li>

            {/* Breadcrumb Items */}
            {items.map((item, index) => {
              const isLast = index === items.length - 1

              return (
                <li key={item.href} className="flex items-center">
                  <ChevronRight size={16} className="text-gray-400 mx-1" />
                  {isLast ? (
                    <span className="text-primary font-medium" aria-current="page">
                      {item.label}
                    </span>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-secondary hover:text-primary transition-colors"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              )
            })}
          </ol>
        </div>
      </nav>
    </>
  )
}

export default Breadcrumb