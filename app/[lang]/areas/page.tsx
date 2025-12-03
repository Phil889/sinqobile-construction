import React from 'react'
import Link from 'next/link'
import { getDictionary } from '@/lib/dictionaries'
import { Locale } from '@/i18n.config'
import Breadcrumb from '@/components/breadcrumb'
import { MapPin, Phone, Star } from 'lucide-react'

export default async function AreasPage({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  const dict = await getDictionary(lang)

  const serviceAreas = [
    {
      name: 'Johannesburg',
      slug: 'johannesburg',
      description: 'Professional construction services in Johannesburg CBD and surrounding suburbs',
      suburbs: ['Sandton', 'Rosebank', 'Melville', 'Bryanston', 'Parktown'],
      projects: 150,
      rating: 4.9
    },
    {
      name: 'Sandton',
      slug: 'sandton',
      description: 'Premium construction and renovation services in Sandton',
      suburbs: ['Morningside', 'Sandhurst', 'Bryanston', 'Fourways', 'Sunninghill'],
      projects: 120,
      rating: 4.9
    },
    {
      name: 'Pretoria',
      slug: 'pretoria',
      description: 'Expert building and construction services across Pretoria',
      suburbs: ['Centurion', 'Hatfield', 'Brooklyn', 'Menlyn', 'Waterkloof'],
      projects: 100,
      rating: 4.8
    },
    {
      name: 'Centurion',
      slug: 'centurion',
      description: 'Quality construction services in Centurion and surrounding areas',
      suburbs: ['Irene', 'Highveld', 'Eldoraigne', 'Wierdapark', 'Lyttelton'],
      projects: 80,
      rating: 4.9
    },
    {
      name: 'Midrand',
      slug: 'midrand',
      description: 'Reliable construction and renovation services in Midrand',
      suburbs: ['Waterfall', 'Carlswald', 'Glen Austin', 'Halfway House', 'Vorna Valley'],
      projects: 90,
      rating: 4.8
    },
    {
      name: 'Randburg',
      slug: 'randburg',
      description: 'Professional building services in Randburg and nearby suburbs',
      suburbs: ['Ferndale', 'Blairgowrie', 'Northcliff', 'Linden', 'Bordeaux'],
      projects: 70,
      rating: 4.9
    },
    {
      name: 'Fourways',
      slug: 'fourways',
      description: 'Expert construction services in Fourways and surrounding areas',
      suburbs: ['Dainfern', 'Cedar Lakes', 'Broadacres', 'Lonehill', 'Douglasdale'],
      projects: 65,
      rating: 4.8
    },
    {
      name: 'Roodepoort',
      slug: 'roodepoort',
      description: 'Quality building and renovation services in Roodepoort',
      suburbs: ['Florida', 'Honeydew', 'Ruimsig', 'Wilgeheuwel', 'Constantia Kloof'],
      projects: 55,
      rating: 4.7
    }
  ]

  return (
    <>
      <Breadcrumb
        items={[
          { label: 'Service Areas', href: `/${lang}/areas` }
        ]}
        lang={lang}
        dict={dict}
      />

      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Construction Services Across Gauteng
            </h1>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Professional building, renovation, and maintenance services in all major areas of Gauteng Province
            </p>
            <div className="flex justify-center items-center space-x-4 text-lg">
              <span>500+ Projects Completed</span>
              <span>•</span>
              <span>15+ Years Experience</span>
              <span>•</span>
              <span>4.9★ Rating</span>
            </div>
          </div>
        </section>

        {/* Service Areas Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Areas We Serve
              </h2>
              <p className="text-secondary text-lg max-w-2xl mx-auto">
                Click on any area below to learn more about our construction services in that location
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {serviceAreas.map((area) => (
                <Link
                  key={area.slug}
                  href={`/${lang}/areas/${area.slug}`}
                  className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-6 group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <MapPin className="text-accent" size={24} />
                      <h3 className="text-2xl font-bold text-primary group-hover:text-accent transition-colors">
                        {area.name}
                      </h3>
                    </div>
                    <div className="flex items-center space-x-1 text-yellow-500">
                      <Star size={16} fill="currentColor" />
                      <span className="text-sm font-semibold">{area.rating}</span>
                    </div>
                  </div>

                  <p className="text-secondary mb-4">
                    {area.description}
                  </p>

                  <div className="mb-4">
                    <p className="text-sm font-semibold text-primary mb-2">Suburbs Covered:</p>
                    <div className="flex flex-wrap gap-2">
                      {area.suburbs.slice(0, 3).map((suburb) => (
                        <span
                          key={suburb}
                          className="text-xs bg-lightBackground text-secondary px-2 py-1 rounded"
                        >
                          {suburb}
                        </span>
                      ))}
                      {area.suburbs.length > 3 && (
                        <span className="text-xs bg-lightBackground text-secondary px-2 py-1 rounded">
                          +{area.suburbs.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <span className="text-sm text-secondary">
                      {area.projects}+ Projects Completed
                    </span>
                    <span className="text-accent font-semibold group-hover:translate-x-1 transition-transform">
                      Learn More →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Don't See Your Area Listed?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              We serve all areas across Gauteng Province. Contact us to discuss your construction project!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+27828688396"
                className="inline-flex items-center justify-center space-x-2 bg-accent text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
              >
                <Phone size={20} />
                <span>Call Now: +27 82 868 8396</span>
              </a>
              <Link
                href={`/${lang}/contact`}
                className="inline-flex items-center justify-center space-x-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors"
              >
                <span>Get Free Quote</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}