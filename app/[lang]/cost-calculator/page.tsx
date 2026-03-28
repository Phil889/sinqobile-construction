import React from 'react'
import type { Metadata } from 'next'
import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionaries'
import Breadcrumb from '@/components/breadcrumb'
import CostCalculator from '@/components/cost-calculator'
import { Calculator, CheckCircle, Shield, Clock, Award } from 'lucide-react'
import Link from 'next/link'

interface CostCalculatorPageProps {
  params: { lang: Locale }
}

// v2 Workflow: Research-driven metadata for Cost Calculator (unique lead magnet — no competitor has multi-service calculator)
export async function generateMetadata({
  params: { lang },
}: CostCalculatorPageProps): Promise<Metadata> {
  const titles: Record<string, string> = {
    en: 'Free Construction Cost Calculator Johannesburg | Sinqobile Construction',
    af: 'Gratis Boukostekalkulator Johannesburg | Sinqobile Construction',
    zu: 'Isibali Sezindleko Zokwakha eGoli | Sinqobile Construction',
    st: 'Setshebelisoa sa Litjeho tsa Kaho | Sinqobile Construction',
  }
  const descriptions: Record<string, string> = {
    en: 'Get instant construction cost estimates for Johannesburg & Gauteng. Free calculator for building, renovation, roofing, paving & more — based on 500+ completed projects. NHBRC registered.',
    af: 'Kry onmiddellike boukosteramings vir Johannesburg & Gauteng. Gratis kalkulator vir bou, renovasie, dakwerk, plaveisel & meer — gebaseer op 500+ projekte. NHBRC geregistreer.',
    zu: 'Thola izindleko zokwakha ngokushesha eGoli neGauteng. Isibali samahhala sokwakha, ukuvuselela, uphahla nokunye — ngamaphrojekthi angu-500+.',
    st: 'Fumana litjeho tsa kaho kapele Johannesburg le Gauteng. Setshebelisoa sa mahala sa kaho, ntjhafatso, marulelo le tse ling — mesebetsi e 500+.',
  }
  return {
    title: titles[lang] || titles.en,
    description: descriptions[lang] || descriptions.en,
    alternates: {
      canonical: `/${lang}/cost-calculator`,
      languages: {
        'en': '/en/cost-calculator',
        'af': '/af/cost-calculator',
        'zu': '/zu/cost-calculator',
        'st': '/st/cost-calculator',
        'x-default': '/en/cost-calculator',
      },
    },
    openGraph: {
      title: titles[lang] || titles.en,
      description: descriptions[lang] || descriptions.en,
      url: `/${lang}/cost-calculator`,
      siteName: 'Sinqobile Construction',
      type: 'website',
      images: [{
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Free Construction Cost Calculator | Sinqobile Construction Johannesburg',
      }],
    },
  }
}

export default async function CostCalculatorPage({ params: { lang } }: CostCalculatorPageProps) {
  const dict = await getDictionary(lang)
  const t = (dict as any).pages?.costCalculator || {}
  
  // Fallback to prevent errors if translations are missing
  if (!t.title) {
    return <div className="pt-20 p-8 text-center">Loading translations...</div>
  }

  // WebApplication schema — v2 research: no competitor has this for a calculator page
  const webAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Sinqobile Construction Cost Calculator',
    description: 'Free interactive construction cost calculator for building, renovation, roofing, paving and more in Johannesburg & Gauteng, South Africa.',
    url: `https://www.sinqobileconstruction.co.za/${lang}/cost-calculator`,
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'All',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'ZAR' },
    provider: {
      '@type': 'LocalBusiness',
      name: 'Sinqobile Construction',
      address: { '@type': 'PostalAddress', addressLocality: 'Johannesburg', addressRegion: 'Gauteng', addressCountry: 'ZA' },
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <Breadcrumb
        items={[
          { label: dict.navigation.calculator, href: `/${lang}/cost-calculator` }
        ]}
        lang={lang}
        dict={dict}
      />
      <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
              <Calculator className="text-primary" size={32} />
            </div>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            {t.title}
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-4">
            {t.subtitle}
          </p>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            {t.description}
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 bg-lightBackground">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl font-bold text-center text-secondary mb-12">
            {t.howItWorks.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {t.howItWorks.steps.map((step: any, index: number) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-secondary">{index + 1}</span>
                </div>
                <h3 className="font-semibold text-secondary mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <CostCalculator lang={lang} dict={dict} />
          </div>
        </div>
      </section>

      {/* Why Use Our Calculator */}
      <section className="py-16 bg-lightBackground">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl font-bold text-center text-secondary mb-12">
            {t.whyUse.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {t.whyUse.benefits.map((benefit: any, index: number) => {
              const icons = [Clock, CheckCircle, Shield, Award]
              const Icon = icons[index]
              return (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md text-center">
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-accent" size={32} />
                  </div>
                  <h3 className="font-semibold text-secondary mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Important Information */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl font-bold text-center text-secondary mb-8">
              {t.understanding.title}
            </h2>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg text-secondary mb-3 flex items-center">
                    <CheckCircle className="text-accent mr-2" size={20} />
                    {t.understanding.included.title}
                  </h3>
                  <ul className="space-y-2 text-gray-700 ml-7">
                    {t.understanding.included.items.map((item: string, index: number) => (
                      <li key={index}>• {item}</li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <h3 className="font-semibold text-lg text-secondary mb-3 flex items-center">
                    <Calculator className="text-accent mr-2" size={20} />
                    {t.understanding.factors.title}
                  </h3>
                  <ul className="space-y-2 text-gray-700 ml-7">
                    {t.understanding.factors.items.map((item: string, index: number) => (
                      <li key={index}>• {item}</li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <h3 className="font-semibold text-lg text-secondary mb-3">
                    {t.understanding.accurateQuote.title}
                  </h3>
                  <p className="text-gray-700 mb-4">
                    {t.understanding.accurateQuote.description}
                  </p>
                  <ul className="space-y-2 text-gray-700 ml-4 mb-6">
                    {t.understanding.accurateQuote.benefits.map((benefit: string, index: number) => (
                      <li key={index}>✓ {benefit}</li>
                    ))}
                  </ul>
                  <Link
                    href={`/${lang}/contact`}
                    className="inline-block bg-primary hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                  >
                    {t.understanding.accurateQuote.button}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 bg-lightBackground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-2xl font-bold text-center text-secondary mb-8">
              {t.whyChoose.title}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {t.whyChoose.stats.map((stat: any, index: number) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                  <div className="text-3xl font-bold text-accent mb-2">{stat.value}</div>
                  <div className="text-sm text-secondary">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            {t.cta.title}
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            {t.cta.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/${lang}/contact`}
              className="inline-block bg-accent hover:bg-yellow-500 text-secondary px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              {t.cta.requestQuote}
            </Link>
            <a
              href="tel:+27828688396"
              className="inline-block border-2 border-white hover:bg-white hover:text-primary text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              {t.cta.call}
            </a>
          </div>
        </div>
      </section>
      </div>
    </>
  )
}