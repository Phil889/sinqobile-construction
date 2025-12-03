'use client'

import React, { useState, useEffect, useRef } from 'react'
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
  const dropdownRef = useRef<HTMLDivElement>(null)

  const redirectedPathName = (locale: Locale) => {
    if (!pathname) return `/${locale}`
    const segments = pathname.split('/')
    segments[1] = locale
    return segments.join('/')
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  // Handle keyboard navigation
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      setIsOpen(false)
    }
  }

  return (
    <div className="relative" ref={dropdownRef} onKeyDown={handleKeyDown}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            setIsOpen(!isOpen)
          }
        }}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label="Select language"
        className="flex items-center space-x-2 text-secondary hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded px-2 py-1"
      >
        <span className="text-lg" aria-hidden="true">{languages[currentLang]?.flag || '🇿🇦'}</span>
        <span className="hidden sm:inline font-medium">{languages[currentLang]?.name || 'English'}</span>
        <ChevronDown size={16} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
      </button>

      {isOpen && (
        <div
          className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
          role="menu"
          aria-orientation="vertical"
        >
          {i18n.locales.map((locale) => (
            <Link
              key={locale}
              href={redirectedPathName(locale)}
              role="menuitem"
              className={`block px-4 py-2 text-sm hover:bg-lightBackground transition-colors focus:outline-none focus:bg-lightBackground ${
                locale === currentLang ? 'bg-lightBackground text-primary font-medium' : 'text-secondary'
              }`}
              onClick={() => setIsOpen(false)}
              aria-current={locale === currentLang ? 'true' : undefined}
            >
              <span className="mr-3" aria-hidden="true">{languages[locale]?.flag || '🇿🇦'}</span>
              {languages[locale]?.name || locale}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default LanguageSwitcher