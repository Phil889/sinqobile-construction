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

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false)
      }
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isMenuOpen])

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
            <div className="w-12 h-12 bg-accent rounded flex items-center justify-center p-1.5">
              <svg
                width="40"
                height="40"
                viewBox="0 0 48 48"
                className="w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* House/Building Structure */}
                <path
                  d="M24 8 L8 20 L8 40 L40 40 L40 20 Z"
                  fill="#1a1a1a"
                  stroke="#1a1a1a"
                  strokeWidth="1.5"
                  strokeLinejoin="miter"
                />
                
                {/* Roof */}
                <path
                  d="M24 6 L6 18 L8 20 L24 10 L40 20 L42 18 Z"
                  fill="#FFD600"
                  stroke="#1a1a1a"
                  strokeWidth="1.5"
                  strokeLinejoin="miter"
                />
                
                {/* Door */}
                <rect
                  x="19"
                  y="28"
                  width="10"
                  height="12"
                  fill="#FFD600"
                  stroke="#1a1a1a"
                  strokeWidth="1"
                />
                
                {/* Windows */}
                <rect
                  x="12"
                  y="24"
                  width="5"
                  height="5"
                  fill="#FFD600"
                  stroke="#1a1a1a"
                  strokeWidth="1"
                />
                <rect
                  x="31"
                  y="24"
                  width="5"
                  height="5"
                  fill="#FFD600"
                  stroke="#1a1a1a"
                  strokeWidth="1"
                />
                
                {/* Construction tools - hammer */}
                <line
                  x1="14"
                  y1="34"
                  x2="17"
                  y2="37"
                  stroke="#FFD600"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <rect
                  x="16"
                  y="32"
                  width="3"
                  height="2"
                  fill="#FFD600"
                  transform="rotate(45 17.5 33)"
                />
              </svg>
            </div>
            <span className="font-heading font-bold text-xl text-accent">
              Sinqobile Construction
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
              text={`${dict.contact.callNow}: +27 82 868 8396`}
            />

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-secondary hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded p-1"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="bg-background border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link, index) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-secondary hover:text-accent hover:bg-lightBackground transition-all font-medium px-4 py-3 rounded-lg mx-2 focus:outline-none focus:ring-2 focus:ring-primary"
                  onClick={() => setIsMenuOpen(false)}
                  style={{
                    animationDelay: `${index * 50}ms`,
                    animation: isMenuOpen ? 'slideIn 0.3s ease-out forwards' : 'none'
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header