'use client'

import React from 'react'
import { Locale } from '@/i18n.config'
import { Phone, MessageCircle } from 'lucide-react'
import Script from 'next/script'

interface FAQClientProps {
  lang: Locale
  dict: any
}

export default function FAQClient({ lang, dict }: FAQClientProps) {
  const faqCategories = dict.pages.faq.categories

  // Generate FAQ schema markup
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqCategories.flatMap((category: any) =>
      category.items.map((item: any) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer
        }
      }))
    )
  }

  return (
    <div className="pt-20">
      {/* FAQ Schema Markup */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            {dict.pages.faq.heroTitle}
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            {dict.pages.faq.heroSubtitle}
          </p>
          <p className="text-lg">
            {dict.pages.faq.stillHaveQuestions.subtitle}
          </p>
        </div>
      </section>

      {/* FAQ Content — uses <details>/<summary> for server-rendered, crawlable answers */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {faqCategories.map((category: any, categoryIndex: number) => (
              <div key={categoryIndex} className="mb-12">
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary mb-8 text-center">
                  {category.title}
                </h2>

                <div className="space-y-4">
                  {category.items.map((item: any, itemIndex: number) => (
                    <details
                      key={itemIndex}
                      className="bg-white rounded-lg shadow-md overflow-hidden group"
                    >
                      <summary className="px-6 py-4 cursor-pointer flex items-center justify-between hover:bg-gray-50 transition-colors list-none [&::-webkit-details-marker]:hidden">
                        <h3 className="font-semibold text-secondary pr-4">
                          {item.question}
                        </h3>
                        <svg
                          className="text-primary flex-shrink-0 w-6 h-6 transition-transform group-open:rotate-180"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </summary>
                      <div className="px-6 pb-4">
                        <div className="border-t border-gray-200 pt-4">
                          <p className="text-secondary leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-lightBackground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <div className="text-secondary">{dict.pages.costCalculator.whyChoose.stats[0].label}</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-secondary">{dict.pages.costCalculator.whyChoose.stats[1].label}</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-secondary">{dict.pages.costCalculator.whyChoose.stats[3].label}</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-secondary">{dict.pages.contact.info.emergency}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            {dict.pages.faq.stillHaveQuestions.title}
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            {dict.pages.faq.stillHaveQuestions.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+27828688396"
              className="inline-flex items-center justify-center space-x-2 bg-accent text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
            >
              <Phone size={20} />
              <span>{dict.contact.call}: {dict.contact.phone}</span>
            </a>

            <a
              href={`/${lang}/contact`}
              className="inline-flex items-center justify-center space-x-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors"
            >
              <MessageCircle size={20} />
              <span>{dict.pages.contact.form.submit}</span>
            </a>

            <a
              href="https://wa.me/27828688396"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              <MessageCircle size={20} />
              <span>{dict.mobileCTA.whatsapp}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Service Areas CTA */}
      <section className="py-16 bg-lightBackground">
        <div className="container mx-auto px-4 text-center">
          <h3 className="font-heading text-2xl font-bold text-primary mb-4">
            {dict.pages.services.serviceAreasTitle}
          </h3>
          <p className="text-secondary mb-6">
            {dict.aboutPage.serviceAreas.description}
          </p>
          <a
            href={`/${lang}/areas`}
            className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            {dict.pages.services.viewAllServiceAreas}
          </a>
        </div>
      </section>
    </div>
  )
}
