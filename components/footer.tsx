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
              <div className="w-10 h-10 bg-white rounded flex items-center justify-center">
                <span className="text-primary font-bold text-xl">MD</span>
              </div>
              <span className="font-heading font-bold text-xl text-white">
                MD Builders
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
                <a href="tel:0719334063" className="text-white hover:text-gray-300 transition-colors">
                  {dict.contact.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-primary" />
                <a href="mailto:meshackdlamini32@gmail.com" className="text-white hover:text-gray-300 transition-colors">
                  meshackdlamini32@gmail.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-primary mt-1 flex-shrink-0" />
                <div>
                  <a
                    href={`https://www.google.com/maps?q=${BUSINESS_INFO.coordinates.latitude},${BUSINESS_INFO.coordinates.longitude}`}
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
                  <p>{BUSINESS_INFO.businessHours.weekdays}</p>
                  <p>{BUSINESS_INFO.businessHours.saturday}</p>
                  <p>{BUSINESS_INFO.businessHours.sunday}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 mt-8 pt-8">
          <div className="text-center mb-4">
            <p className="text-yellow-400 text-sm font-semibold">
              ⚠️ R400 Call-Out Fee applies to all consultations and quotes
            </p>
          </div>
          <p className="text-gray-300 text-sm text-center">
            © 2024 MD Builders. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer