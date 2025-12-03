import React from 'react'
import { getDictionary } from '@/lib/dictionaries'
import { Locale } from '@/i18n.config'
import { enhancedServices, getFeaturedServices, getServicesByCategory } from '@/lib/enhanced-services-data'
import { CheckCircle, ArrowRight, Phone } from 'lucide-react'
import Link from 'next/link'
import Breadcrumb from '@/components/breadcrumb'

export default async function ServicesPage({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  const dict = await getDictionary(lang)
  const featuredServices = getFeaturedServices()
  const additionalServices = getServicesByCategory(false)

  return (
    <div className="pt-20">
      <Breadcrumb
        items={[
          { label: dict.navigation.services, href: `/${lang}/services` }
        ]}
        lang={lang}
        dict={dict}
      />
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            {(dict as any).pages.services.heroTitle}
          </h1>
          <div className="inline-block bg-yellow-400 text-secondary px-6 py-3 rounded-lg font-bold mb-6">
            <span className="text-lg">{(dict as any).callOutBanner.message}</span>
          </div>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            {(dict as any).pages.services.heroSubtitle}
          </p>
          <a
            href="tel:+27828688396"
            className="inline-flex items-center space-x-2 bg-white text-secondary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            <Phone size={20} />
            <span>{(dict as any).pages.services.getFreeQuote}</span>
          </a>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
              {(dict as any).pages.services.coreServicesTitle}
            </h2>
            <p className="text-secondary text-lg max-w-2xl mx-auto">
              {(dict as any).pages.services.coreServicesSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredServices.map((service) => {
              const IconComponent = service.icon
              const serviceDict = dict.services.items[service.slug as keyof typeof dict.services.items] ||
                                (dict as any).extendedServices?.[service.slug]
              
              return (
                <div key={service.slug} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow group">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-lightBackground rounded-full flex items-center justify-center group-hover:bg-primary transition-colors">
                      <IconComponent className="text-primary group-hover:text-white" size={32} />
                    </div>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-primary text-center mb-3">
                    {serviceDict?.name || service.name}
                  </h3>
                  <p className="text-secondary text-center mb-4">
                    {serviceDict?.description || service.description}
                  </p>
                  <div className="text-center">
                    <span className="text-sm text-gray-500">{service.imageCount} {(dict as any).pages.services.projectsCompleted}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-lightBackground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
              {(dict as any).pages.services.additionalServicesTitle}
            </h2>
            <p className="text-secondary text-lg max-w-2xl mx-auto">
              {(dict as any).pages.services.additionalServicesSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service) => {
              const IconComponent = service.icon
              const serviceDict = dict.services.items[service.slug as keyof typeof dict.services.items] ||
                                (dict as any).extendedServices?.[service.slug]
              
              return (
                <div key={service.slug} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-center space-x-4 mb-3">
                    <div className="w-12 h-12 bg-lightBackground rounded-lg flex items-center justify-center">
                      <IconComponent className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-bold text-primary">
                        {serviceDict?.name || service.name}
                      </h3>
                      <span className="text-sm text-gray-500">{service.imageCount} {(dict as any).pages.services.projects}</span>
                    </div>
                  </div>
                  <p className="text-secondary text-sm">
                    {serviceDict?.description || service.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
              {(dict as any).pages.services.process.title}
            </h2>
            <p className="text-secondary text-lg max-w-2xl mx-auto">
              {(dict as any).pages.services.processSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {(dict as any).pages.services.process.steps.map((step: any, index: number) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto font-bold text-xl">
                    {index + 1}
                  </div>
                  {index < (dict as any).pages.services.process.steps.length - 1 && (
                    <ArrowRight className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-gray-300" size={24} />
                  )}
                </div>
                <h3 className="font-heading text-lg font-bold text-primary mb-2">
                  {step.title}
                </h3>
                <p className="text-secondary text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-lightBackground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-6">
                {(dict as any).pages.services.serviceAreasTitle}
              </h2>
              <p className="text-secondary text-lg mb-6">
                {(dict as any).pages.services.serviceAreasDescription}
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  'Johannesburg', 'Pretoria', 'Sandton', 'Midrand',
                  'Centurion', 'Randburg', 'Fourways', 'Boksburg',
                  'Edenvale', 'Kempton Park', 'Roodepoort', 'Soweto'
                ].map((area) => (
                  <div key={area} className="flex items-center space-x-2">
                    <CheckCircle className="text-accent" size={16} />
                    <span className="text-secondary">{area}</span>
                  </div>
                ))}
              </div>
              <Link
                href={`/${lang}/areas`}
                className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                {(dict as any).pages.services.viewAllServiceAreas}
              </Link>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="font-heading text-2xl font-bold text-primary mb-6">
                {(dict as any).pages.services.whyChooseTitle}
              </h3>
              <ul className="space-y-4">
                {(dict as any).pages.services.whyChooseBenefits.map((benefit: string, index: number) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="text-accent flex-shrink-0" size={20} />
                    <span className="text-secondary">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            {(dict as any).pages.services.cta.title}
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            {(dict as any).pages.services.cta.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+27828688396"
              className="inline-flex items-center justify-center space-x-2 bg-accent text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
            >
              <Phone size={20} />
              <span>{(dict as any).pages.services.callNow}</span>
            </a>
            <Link
              href={`/${lang}/contact`}
              className="inline-flex items-center justify-center space-x-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors"
            >
              <span>{(dict as any).pages.services.cta.button}</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}