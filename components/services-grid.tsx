import React from 'react'
import Link from 'next/link'
import { Locale } from '@/i18n.config'
import { getFeaturedServices } from '@/lib/enhanced-services-data'

interface ServicesGridProps {
  dict: any
  lang: Locale
}

const ServicesGrid = ({ dict, lang }: ServicesGridProps) => {
  const featuredServices = getFeaturedServices()

  return (
    <section className="py-20 bg-lightBackground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
            {dict.services.title}
          </h2>
          <p className="text-secondary text-lg max-w-2xl mx-auto">
            {dict.services.description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredServices.map((service) => {
            const Icon = service.icon
            const serviceInfo = dict.services.items[service.slug] || (dict as any).extendedServices?.[service.slug]
            
            return (
              <div
                key={service.slug}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-6 group"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-lightBackground rounded-full flex items-center justify-center group-hover:bg-primary transition-colors">
                    <Icon className="text-primary group-hover:text-white" size={32} />
                  </div>
                </div>
                <h3 className="font-heading text-xl font-semibold text-primary mb-2 text-center">
                  {serviceInfo?.name || service.name}
                </h3>
                <p className="text-secondary text-sm leading-relaxed text-center mb-4">
                  {serviceInfo?.description || service.description}
                </p>
                <div className="text-center">
                  <span className="text-xs text-gray-500">{service.imageCount} projects completed</span>
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            href={`/${lang}/services`}
            className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            View All Services (19+ total)
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ServicesGrid