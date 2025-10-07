import React from 'react'
import { getDictionary } from '@/lib/dictionaries'
import { Locale } from '@/i18n.config'
import { CheckCircle, Award, Shield, Clock, Users, MapPin } from 'lucide-react'
import Image from 'next/image'

export default async function AboutPage({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  const dict = await getDictionary(lang)

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            {dict.pages.about.heroTitle}
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            {dict.pages.about.heroSubtitle}
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div className="flex items-center space-x-2">
              <Award className="text-accent" size={24} />
              <span className="font-semibold">15+ Years Experience</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="text-accent" size={24} />
              <span className="font-semibold">Fully Insured</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="text-accent" size={24} />
              <span className="font-semibold">All Gauteng Areas</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Meshack Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=800&q=80"
                alt="Meshack Dlamini - Experienced older Black construction professional and MD Builders owner in work overalls looking directly at camera"
                width={600}
                height={400}
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
              <p className="text-secondary text-lg leading-relaxed mb-8">
                {dict.about.experience}
              </p>
              
              {/* Contact CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:0719334063"
                  className="inline-flex items-center justify-center space-x-2 bg-accent text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
                >
                  <span>{dict.contact.callNow}: {dict.contact.phone}</span>
                </a>
                <a
                  href={`/${lang}/contact`}
                  className="inline-flex items-center justify-center space-x-2 border-2 border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors"
                >
                  <span>Get Free Quote</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-lightBackground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-8">
              {dict.pages.about.story.title}
            </h2>
            <p className="text-secondary text-lg leading-relaxed mb-12">
              {dict.pages.about.story.content}
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-8">
              {dict.pages.about.mission.title}
            </h2>
            <p className="text-secondary text-lg leading-relaxed">
              {dict.pages.about.mission.content}
            </p>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-lightBackground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
              {dict.pages.about.values.title}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {dict.pages.about.values.items.map((value: any, index: number) => {
              const icons = [CheckCircle, Award, Shield, Clock]
              const IconComponent = icons[index % icons.length]
              
              return (
                <div key={index} className="bg-white rounded-lg p-6 shadow-lg text-center">
                  <div className="flex justify-center mb-4">
                    <IconComponent className="text-accent" size={48} />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-primary mb-3">
                    {value.title}
                  </h3>
                  <p className="text-secondary">
                    {value.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary text-center mb-12">
              {dict.pages.about.experience.title}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {dict.pages.about.experience.items.map((item: string, index: number) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="text-accent flex-shrink-0" size={24} />
                  <span className="text-secondary text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Serving All Gauteng Areas
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            From Johannesburg to Pretoria, East Rand to West Rand - we bring quality construction services to your doorstep.
          </p>
          <a
            href={`/${lang}/areas`}
            className="inline-block bg-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
          >
            View All Service Areas
          </a>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-lightBackground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-secondary text-lg mb-8 max-w-2xl mx-auto">
            Contact MD Builders today for a free consultation and quote. Let's build something great together!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0719334063"
              className="inline-flex items-center justify-center space-x-2 bg-accent text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
            >
              <span>{dict.contact.callNow}: {dict.contact.phone}</span>
            </a>
            <a
              href={`/${lang}/contact`}
              className="inline-flex items-center justify-center space-x-2 border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors"
            >
              <span>Get Free Quote</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}