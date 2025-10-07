'use client'

import React, { useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import { Locale, i18n } from '@/i18n.config'
import { languages } from '@/lib/i18n'

interface LanguageSwitcherProps {
  currentLang: Locale
}

const LanguageSwitcher = ({ currentLang }: LanguageSwitcherProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const redirectedPathName = (locale: Locale) => {
    if (!pathname) return `/${locale}`
    const segments = pathname.split('/')
    segments[1] = locale
    return segments.join('/')
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 text-secondary hover:text-primary transition-colors"
      >
        <span className="text-lg">{languages[currentLang]?.flag || '🇿🇦'}</span>
        <span className="hidden sm:inline font-medium">{languages[currentLang]?.name || 'English'}</span>
        <ChevronDown size={16} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
          {i18n.locales.map((locale) => (
            <Link
              key={locale}
              href={redirectedPathName(locale)}
              className={`block px-4 py-2 text-sm hover:bg-lightBackground transition-colors ${
                locale === currentLang ? 'bg-lightBackground text-primary font-medium' : 'text-secondary'
              }`}
              onClick={() => setIsOpen(false)}
            >
              <span className="mr-3">{languages[locale]?.flag || '🇿🇦'}</span>
              {languages[locale]?.name || locale}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default LanguageSwitcher