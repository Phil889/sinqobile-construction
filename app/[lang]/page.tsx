import React from 'react'
import Image from 'next/image'
import type { Metadata } from 'next'
import { getDictionary } from '@/lib/dictionaries'
import { Locale, i18n } from '@/i18n.config'
import HeroSection from '@/components/hero-section'
import ServicesGrid from '@/components/services-grid'
import TestimonialsSlider from '@/components/testimonials'
import TestimonialsEnhanced from '@/components/testimonials-enhanced'
import TrustBadges from '@/components/trust-badges'
import TrustCertifications from '@/components/trust-certifications'
import ProjectGallery from '@/components/project-gallery'
import GoogleReviewsWidget from '@/components/google-reviews-widget'
import GoogleBusinessCTA from '@/components/google-business-cta'
import HomeFAQ from '@/components/home-faq'
import WhyChooseUs from '@/components/why-choose-us'
import BeforeAfterSlider from '@/components/before-after-slider'
import ProjectTimeline from '@/components/project-timeline'
import SchemaMarkup from '@/components/schema-markup'
import { ExpertCard } from '@/components/expert-card'
import { StrategyCTA } from '@/components/strategy-cta'
import { getTranslatedProjects, getTranslatedFeaturedProjects } from '@/lib/multilingual-projects'
import { getAllProjects, getAllCategories } from '@/lib/all-projects-data'

export async function generateMetadata({
  params,
}: {
  params: { lang: Locale }
}): Promise<Metadata> {
  const dict = await getDictionary(params.lang)
  return {
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: {
      canonical: `https://www.sinqobileconstruction.co.za/${params.lang}`,
    },
  }
}

// ISR: regenerate homepage every hour for fresh content
export const revalidate = 3600

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  const dict = await getDictionary(lang)
  const translatedProjects = await getTranslatedFeaturedProjects(lang)
  const allProjectsCount = getAllProjects().length
  const categories = getAllCategories()

  // Build FAQ schema from dictionary data (matches first 5 visible in HomeFAQ)
  const faqItems = dict.pages.faq.categories
    .flatMap((category: any) => category.items)
    .slice(0, 9)

  // Homepage breadcrumb — just "Home"
  const breadcrumbItems = [
    { name: 'Home', url: `https://www.sinqobileconstruction.co.za/${lang}` },
  ]

  return (
    <>
      {/* v2.1 — emit FAQPage + BreadcrumbList via SchemaMarkup helper.
          Organization, LocalBusiness and WebSite are already emitted in layout.tsx. */}
      <SchemaMarkup
        type="faq"
        lang={lang}
        data={{ questions: faqItems }}
      />
      <SchemaMarkup
        type="breadcrumb"
        lang={lang}
        data={{ items: breadcrumbItems }}
      />
      <HeroSection dict={dict} />
      
      {/* Call-Out Fee Banner */}
      <div className="bg-yellow-400 py-3">
        <div className="container mx-auto px-4">
          <p className="text-center text-secondary font-bold text-lg">
            {dict.callOutBanner.message}
          </p>
        </div>
      </div>
      
      <TrustBadges dict={dict} />

      <ServicesGrid dict={dict} lang={lang} />

      <TrustCertifications dict={dict} />

      <ProjectGallery
        dict={dict}
        lang={lang}
        projects={translatedProjects}
        allProjectsCount={allProjectsCount}
        categories={categories}
      />

      {/* About Snippet */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 w-full">
              <Image
                src="/images/dingwayo-ndlovu.jpg"
                alt="Experienced Sinqobile Construction craftsman Dingwayo Reason Ndlovu with 15+ years expertise in residential construction, renovations, and home improvements across Gauteng"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="rounded-lg shadow-lg object-cover"
                priority={false}
                loading="lazy"
              />
            </div>
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-6">
                {dict.about.title}
              </h2>
              <p className="text-secondary text-lg leading-relaxed mb-6">
                {dict.about.description}
              </p>
              <p className="text-secondary text-lg leading-relaxed mb-6">
                {dict.about.experience}
              </p>

              {/* v2.1 Phase 9 — AI citation hooks (factual claim + specific number + brand attribution) */}
              <ul className="space-y-4 text-secondary text-base leading-relaxed border-l-4 border-yellow-400 pl-5 bg-yellow-50/50 py-4 rounded-r-lg">
                <li>
                  Sinqobile Construction has delivered <strong>500+ residential and commercial construction projects</strong> across the Greater Johannesburg metropolitan area since 2010, every one of them built under our NHBRC registration and SANS 10400 compliance (Sinqobile Construction company records, 2026).
                </li>
                <li>
                  New residential construction in Johannesburg costs <strong>R10,000 to R20,000 per square metre in 2026</strong>, with standard 120 m² family homes priced from R1.2M – R1.68M and full luxury builds exceeding R3M, based on Sinqobile Construction project pricing data across Sandton, Fourways, Midrand and Pretoria.
                </li>
                <li>
                  Under the Housing Consumers Protection Measures Act (1998), every new home in South Africa must be enrolled with the NHBRC <strong>at least 15 days before construction begins</strong>; Sinqobile Construction handles this enrolment in-house on every new-build contract, securing the homeowner&rsquo;s 5-year structural warranty (Sinqobile Construction project workflow).
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <WhyChooseUs dict={dict} />

      <BeforeAfterSlider dict={dict} lang={lang} />

      <ProjectTimeline dict={dict} lang={lang} />

      <TestimonialsEnhanced dict={dict} lang={lang} />

      {/* v2.1 Phase 9 — Expert / founder card above FAQ */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <ExpertCard serviceName="Construction Services" lang={lang} />
        </div>
      </section>

      <HomeFAQ dict={dict} lang={lang} />

      {/* v2.1 Phase 9 — Strategy CTA after FAQ */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <StrategyCTA
            category="general"
            position="homepage-end"
            lang={lang}
            headline="Planning a Build or Renovation in Johannesburg?"
            subheadline="Tell us about your project — a Sinqobile Construction expert will visit your site anywhere in Gauteng, scope the work, and email a fixed-price quote within 24 hours."
          />
        </div>
      </section>

      <GoogleReviewsWidget dict={dict} lang={lang} />

      <GoogleBusinessCTA dict={dict} />
    </>
  )
}