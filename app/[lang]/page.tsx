import React from 'react'
import Image from 'next/image'
import { getDictionary } from '@/lib/dictionaries'
import { Locale } from '@/i18n.config'
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
import { getTranslatedProjects, getTranslatedFeaturedProjects } from '@/lib/multilingual-projects'
import { getAllProjects, getAllCategories } from '@/lib/all-projects-data'

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  const dict = await getDictionary(lang)
  const translatedProjects = await getTranslatedFeaturedProjects(lang)
  const allProjectsCount = getAllProjects().length
  const categories = getAllCategories()

  return (
    <>
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
                src="/images/meshack-dlamini.jpg"
                alt="Experienced Sinqobile Construction craftsman Dingwayo Reason Ndlovu with 15+ years expertise in residential construction, renovations, and home improvements across Gauteng"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="rounded-lg shadow-lg object-cover"
                priority={false}
                loading="lazy"
              />
            </div>
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-6">
                {dict.about.title}
              </h2>
              <p className="text-secondary text-lg leading-relaxed mb-6">
                {dict.about.description}
              </p>
              <p className="text-secondary text-lg leading-relaxed">
                {dict.about.experience}
              </p>
            </div>
          </div>
        </div>
      </section>

      <WhyChooseUs dict={dict} />

      <BeforeAfterSlider dict={dict} lang={lang} />

      <ProjectTimeline dict={dict} lang={lang} />

      <TestimonialsEnhanced dict={dict} />

      <HomeFAQ dict={dict} />

      <GoogleReviewsWidget dict={dict} />

      <GoogleBusinessCTA dict={dict} />
    </>
  )
}