import React from 'react'
import { getDictionary } from '@/lib/dictionaries'
import { Locale } from '@/i18n.config'
import HeroSection from '@/components/hero-section'
import ServicesGrid from '@/components/services-grid'
import TestimonialsSlider from '@/components/testimonials'
import TrustBadges from '@/components/trust-badges'
import TrustCertifications from '@/components/trust-certifications'
import ProjectGallery from '@/components/project-gallery'
import GoogleReviewsWidget from '@/components/google-reviews-widget'
import GoogleBusinessCTA from '@/components/google-business-cta'

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  const dict = await getDictionary(lang)

  return (
    <>
      <HeroSection dict={dict} />
      
      {/* Call-Out Fee Banner */}
      <div className="bg-yellow-400 py-3">
        <div className="container mx-auto px-4">
          <p className="text-center text-secondary font-bold text-lg">
            ⚠️ R400 Call-Out Fee applies to all consultations and quotes
          </p>
        </div>
      </div>
      
      <TrustBadges />

      <ServicesGrid dict={dict} lang={lang} />

      <TrustCertifications />

      <ProjectGallery />

      {/* About Snippet */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop"
                alt="Meshack Dlamini - Professional Construction Contractor"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
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

      <TestimonialsSlider dict={dict} />

      <GoogleReviewsWidget />

      <GoogleBusinessCTA />
    </>
  )
}