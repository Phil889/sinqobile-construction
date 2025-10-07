'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Phone } from 'lucide-react'
import { Locale } from '@/i18n.config'
import LanguageSwitcher from './language-switcher'
import TrackedPhoneButton from './tracked-phone-button'

interface HeaderProps {
  dict: any
  lang: Locale
}

const Header = ({ dict, lang }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: dict.navigation.home, href: `/${lang}` },
    { name: dict.navigation.about, href: `/${lang}/about` },
    { name: dict.navigation.services, href: `/${lang}/services` },
    { name: dict.navigation.work, href: `/${lang}/our-work` },
    { name: dict.navigation.calculator, href: `/${lang}/cost-calculator` },
    { name: dict.navigation.blog, href: `/${lang}/blog` },
    { name: dict.navigation.contact, href: `/${lang}/contact` },
    { name: dict.navigation.faq, href: `/${lang}/faq` },
  ]

  return (
    <header 
      className={`fixed w-full top-0 z-50 bg-background transition-all duration-300 ${
        isScrolled ? 'shadow-lg' : ''
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href={`/${lang}`} className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-accent rounded flex items-center justify-center p-1">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                className="w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Construction hard hat */}
                <path
                  d="M20 8 L28 16 L28 18 L12 18 L12 16 Z"
                  fill="#FFD600"
                  stroke="#1a1a1a"
                  strokeWidth="1"
                />
                <ellipse
                  cx="20"
                  cy="18"
                  rx="9"
                  ry="3"
                  fill="#FFD600"
                  stroke="#1a1a1a"
                  strokeWidth="1"
                />
                
                {/* MD Text */}
                <text
                  x="20"
                  y="32"
                  fontFamily="Arial, sans-serif"
                  fontSize="12"
                  fontWeight="bold"
                  fill="#1a1a1a"
                  textAnchor="middle"
                >
                  MD
                </text>
              </svg>
            </div>
            <span className="font-heading font-bold text-xl text-accent">
              MD Builders
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-secondary hover:text-accent transition-colors font-medium"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Language Switcher & Call Button */}
          <div className="flex items-center space-x-4">
            <LanguageSwitcher currentLang={lang} />
            
            <TrackedPhoneButton
              className="bg-primary text-white px-4 py-2 rounded-lg font-medium hover:bg-orange-700 transition-colors flex items-center space-x-2"
              text={`${dict.contact.callNow}: 071 933 4063`}
            />

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-secondary"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden bg-background border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-secondary hover:text-accent transition-colors font-medium px-4 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header