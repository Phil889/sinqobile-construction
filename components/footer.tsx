import React from 'react'
import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, ExternalLink } from 'lucide-react'
import { Locale } from '@/i18n.config'
import { servicesData } from '@/lib/services-data'
import { BUSINESS_INFO } from '@/lib/business-info'

interface FooterProps {
  dict: any
  lang: Locale
}

const Footer = ({ dict, lang }: FooterProps) => {
  return (
    <footer className="bg-secondary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Logo & Mission */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded flex items-center justify-center p-1">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 48 48"
                  className="w-full h-full"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* House/Building Structure */}
                  <path
                    d="M24 8 L8 20 L8 40 L40 40 L40 20 Z"
                    fill="#FFFFFF"
                    stroke="#FFFFFF"
                    strokeWidth="1.5"
                    strokeLinejoin="miter"
                  />
                  
                  {/* Roof */}
                  <path
                    d="M24 6 L6 18 L8 20 L24 10 L40 20 L42 18 Z"
                    fill="#1a1a1a"
                    stroke="#FFFFFF"
                    strokeWidth="1.5"
                    strokeLinejoin="miter"
                  />
                  
                  {/* Door */}
                  <rect
                    x="19"
                    y="28"
                    width="10"
                    height="12"
                    fill="#1a1a1a"
                    stroke="#FFFFFF"
                    strokeWidth="1"
                  />
                  
                  {/* Windows */}
                  <rect
                    x="12"
                    y="24"
                    width="5"
                    height="5"
                    fill="#1a1a1a"
                    stroke="#FFFFFF"
                    strokeWidth="1"
                  />
                  <rect
                    x="31"
                    y="24"
                    width="5"
                    height="5"
                    fill="#1a1a1a"
                    stroke="#FFFFFF"
                    strokeWidth="1"
                  />
                  
                  {/* Construction tools - hammer */}
                  <line
                    x1="14"
                    y1="34"
                    x2="17"
                    y2="37"
                    stroke="#1a1a1a"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <rect
                    x="16"
                    y="32"
                    width="3"
                    height="2"
                    fill="#1a1a1a"
                    transform="rotate(45 17.5 33)"
                  />
                </svg>
              </div>
              <span className="font-heading font-bold text-xl text-white">
                Sinqobile Construction
              </span>
            </div>
            <p className="text-white text-sm leading-relaxed">
              {dict.footer.mission}
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-lg text-white">
              {dict.footer.quickLinks}
            </h3>
            <ul className="space-y-2">
              <li><Link href={`/${lang}`} className="text-white hover:text-gray-300 transition-colors">{dict.navigation.home}</Link></li>
              <li><Link href={`/${lang}/about`} className="text-white hover:text-gray-300 transition-colors">{dict.navigation.about}</Link></li>
              <li><Link href={`/${lang}/our-work`} className="text-white hover:text-gray-300 transition-colors">{dict.navigation.work}</Link></li>
              <li><Link href={`/${lang}/contact`} className="text-white hover:text-gray-300 transition-colors">{dict.navigation.contact}</Link></li>
              <li><Link href={`/${lang}/faq`} className="text-white hover:text-gray-300 transition-colors">{dict.navigation.faq}</Link></li>
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-lg text-white">
              {dict.footer.ourServices}
            </h3>
            <ul className="space-y-2">
              {servicesData.map((service) => (
                <li key={service.slug}>
                  <Link 
                    href={`/${lang}/services/${service.slug}`}
                    className="text-white hover:text-gray-300 transition-colors"
                  >
                    {dict.services.items[service.slug]?.name || service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-lg text-white">
              {dict.footer.contactInfo}
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-primary" />
                <div className="flex flex-col">
                  <a href="tel:+27828688396" className="text-white hover:text-gray-300 transition-colors">
                    +27 82 868 8396
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-primary" />
                <a href="mailto:info@sinqobileconstruction.co.za" className="text-white hover:text-gray-300 transition-colors">
                  info@sinqobileconstruction.co.za
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-primary mt-1 flex-shrink-0" />
                <div>
                  <a
                    href="https://www.google.com/maps?cid=12743093499437970359"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-gray-300 transition-colors inline-flex items-center gap-1"
                  >
                    <span>{BUSINESS_INFO.fullAddress}</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock size={16} className="text-primary mt-1 flex-shrink-0" />
                <div className="text-white text-sm">
                  <p>{dict.footer.businessHours.weekdays}</p>
                  <p>{dict.footer.businessHours.saturday}</p>
                  <p>{dict.footer.businessHours.sunday}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 mt-8 pt-8">
          <div className="text-center mb-4">
            <p className="text-yellow-400 text-sm font-semibold">
              {dict.callOutBanner.message}
            </p>
          </div>
          <p className="text-gray-300 text-sm text-center">
            {dict.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer