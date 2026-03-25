import React from 'react'
import type { Metadata } from 'next'
import { getDictionary } from '@/lib/dictionaries'
import { Locale } from '@/i18n.config'
import Breadcrumb from '@/components/breadcrumb'
import { CheckCircle, Phone, MapPin, Star, Award, Clock, Shield } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

interface AreaPageProps {
  params: {
    lang: Locale
    area: string
  }
}

// Location data
const locationData: Record<string, {
  name: string
  description: string
  suburbs: string[]
  projects: number
  rating: number
  highlights: string[]
  services: string[]
  testimonial: {
    text: string
    author: string
    location: string
  }
}> = {
  'johannesburg': {
    name: 'Johannesburg',
    description: 'Professional construction services in Johannesburg CBD and surrounding suburbs. With over 15 years of experience, Sinqobile Construction has completed 150+ projects across Johannesburg, from residential renovations to commercial construction.',
    suburbs: ['Sandton', 'Rosebank', 'Melville', 'Bryanston', 'Parktown', 'Houghton', 'Randburg', 'Fourways'],
    projects: 150,
    rating: 4.9,
    highlights: [
      'Fast response times across all Johannesburg suburbs',
      'Local expertise with 15+ years in Johannesburg',
      'Familiar with Johannesburg building regulations',
      'Completed 150+ projects in Johannesburg area',
      'Trusted by Johannesburg homeowners and businesses'
    ],
    services: [
      'Residential Building & Extensions',
      'Home Renovations & Remodeling',
      'Roofing & Waterproofing',
      'Plastering & Painting',
      'Paving & Driveways',
      'Plumbing Services',
      'Tiling & Flooring',
      'General Maintenance'
    ],
    testimonial: {
      text: 'Sinqobile Construction transformed our Johannesburg home with a complete renovation. Their attention to detail and professionalism exceeded our expectations. Highly recommend for any construction work in Johannesburg!',
      author: 'Sarah Johnson',
      location: 'Sandton, Johannesburg'
    }
  },
  'sandton': {
    name: 'Sandton',
    description: 'Premium construction and renovation services in Sandton. Specializing in high-end residential and commercial projects across Sandton\'s prestigious suburbs. Sinqobile Construction delivers exceptional quality for Sandton\'s discerning property owners.',
    suburbs: ['Morningside', 'Sandhurst', 'Bryanston', 'Fourways', 'Sunninghill', 'Rivonia', 'Woodmead', 'Hyde Park'],
    projects: 120,
    rating: 4.9,
    highlights: [
      'Specialized in premium Sandton properties',
      '120+ successful projects in Sandton',
      'Understanding of Sandton building standards',
      'Quick response across all Sandton suburbs',
      'Trusted by Sandton residents for quality work'
    ],
    services: [
      'Luxury Home Renovations',
      'Modern Extensions & Additions',
      'High-End Finishes & Tiling',
      'Premium Roofing Solutions',
      'Designer Paving & Landscaping',
      'Smart Home Integration',
      'Commercial Office Fit-outs',
      'Property Maintenance'
    ],
    testimonial: {
      text: 'Outstanding service from Sinqobile Construction on our Sandton property. They understood our vision for a modern renovation and delivered beyond expectations. Professional, reliable, and excellent quality.',
      author: 'Michael Chen',
      location: 'Morningside, Sandton'
    }
  },
  'pretoria': {
    name: 'Pretoria',
    description: 'Expert building and construction services across Pretoria and Centurion. Sinqobile Construction brings 15+ years of construction expertise to Pretoria homeowners and businesses, with 100+ completed projects throughout the capital city.',
    suburbs: ['Centurion', 'Hatfield', 'Brooklyn', 'Menlyn', 'Waterkloof', 'Lynnwood', 'Garsfontein', 'Faerie Glen'],
    projects: 100,
    rating: 4.8,
    highlights: [
      'Extensive experience in Pretoria construction',
      '100+ projects completed in Pretoria',
      'Knowledge of Pretoria building codes',
      'Serving all Pretoria suburbs',
      'Reliable service across Pretoria East and West'
    ],
    services: [
      'New Home Construction',
      'Residential Renovations',
      'Roofing & Roof Repairs',
      'Plastering & Skimming',
      'Interior & Exterior Painting',
      'Paving & Concrete Work',
      'Plumbing & Geyser Installation',
      'Building Maintenance'
    ],
    testimonial: {
      text: 'We hired Sinqobile Construction for a major renovation in Pretoria East. They were professional, on time, and the quality of work was excellent. Would definitely use them again for future projects.',
      author: 'Johan van der Merwe',
      location: 'Garsfontein, Pretoria'
    }
  },
  'centurion': {
    name: 'Centurion',
    description: 'Reliable construction and building services in Centurion. Sinqobile Construction has completed 80+ projects across Centurion, delivering quality residential and commercial construction work.',
    suburbs: ['Eldoraigne', 'Wierdapark', 'Lyttelton', 'The Reeds', 'Hennopspark', 'Zwartkop', 'Clubview', 'Rooihuiskraal'],
    projects: 80,
    rating: 4.9,
    highlights: [
      'Serving all Centurion suburbs with quality construction',
      '80+ projects completed in the Centurion area',
      'Familiar with Centurion municipal building requirements',
      'Fast response times across Centurion',
      'Trusted by Centurion homeowners for 15+ years'
    ],
    services: ['Residential Building & Extensions', 'Home Renovations', 'Roofing & Waterproofing', 'Plastering & Painting', 'Paving & Driveways', 'Plumbing Services', 'Tiling & Flooring', 'General Maintenance'],
    testimonial: {
      text: 'Excellent building work on our Centurion home extension. The team was professional and completed the project on schedule. Very happy with the quality.',
      author: 'Pieter Joubert',
      location: 'Eldoraigne, Centurion'
    }
  },
  'midrand': {
    name: 'Midrand',
    description: 'Professional construction services in Midrand, connecting Johannesburg and Pretoria. With 90+ completed projects, Sinqobile Construction delivers quality building, renovation, and maintenance services across all Midrand suburbs.',
    suburbs: ['Carlswald', 'Glen Austin', 'Halfway House', 'Noordwyk', 'Vorna Valley', 'Sagewood', 'Waterfall', 'Blue Hills'],
    projects: 90,
    rating: 4.8,
    highlights: [
      'Conveniently located to serve all Midrand areas',
      '90+ projects completed across Midrand',
      'Experience with Midrand estate developments',
      'Quick response times throughout Midrand',
      'Trusted construction partner in the Midrand corridor'
    ],
    services: ['Residential Building & Extensions', 'Home Renovations', 'Roofing & Waterproofing', 'Plastering & Painting', 'Paving & Driveways', 'Plumbing Services', 'Tiling & Flooring', 'General Maintenance'],
    testimonial: {
      text: 'Sinqobile Construction did a fantastic job on our Midrand property renovation. Professional service from start to finish.',
      author: 'Nomsa Dlamini',
      location: 'Waterfall, Midrand'
    }
  },
  'randburg': {
    name: 'Randburg',
    description: 'Expert construction and renovation services in Randburg. Sinqobile Construction has been serving Randburg homeowners and businesses for over 15 years with 70+ completed projects across the area.',
    suburbs: ['Northcliff', 'Linden', 'Ferndale', 'Fontainebleau', 'Blairgowrie', 'Bordeaux', 'Robin Hills', 'Bromhof'],
    projects: 70,
    rating: 4.9,
    highlights: [
      'Extensive experience in Randburg residential projects',
      '70+ successful projects across Randburg suburbs',
      'Quick response across all Randburg areas',
      'Knowledge of Randburg building regulations',
      'Trusted by Randburg homeowners for quality work'
    ],
    services: ['Residential Building & Extensions', 'Home Renovations', 'Roofing & Waterproofing', 'Plastering & Painting', 'Paving & Driveways', 'Plumbing Services', 'Tiling & Flooring', 'General Maintenance'],
    testimonial: {
      text: 'Great plastering and painting work on our Randburg home. The team was neat, professional, and delivered on time. Highly recommend.',
      author: 'Lisa van Niekerk',
      location: 'Linden, Randburg'
    }
  },
  'fourways': {
    name: 'Fourways',
    description: 'Quality construction services in Fourways and surrounding estates. Sinqobile Construction delivers premium building, renovation, and maintenance services with 65+ completed projects in the Fourways area.',
    suburbs: ['Fourways Gardens', 'Cedar Lakes', 'Dainfern', 'Lonehill', 'Beverley', 'Chartwell', 'Pineslopes', 'Magaliessig'],
    projects: 65,
    rating: 4.8,
    highlights: [
      'Experienced in Fourways estate developments',
      '65+ projects completed in Fourways area',
      'Understanding of Fourways building standards',
      'Serving all Fourways suburbs and estates',
      'Quality construction for Fourways homeowners'
    ],
    services: ['Residential Building & Extensions', 'Home Renovations', 'Roofing & Waterproofing', 'Plastering & Painting', 'Paving & Driveways', 'Plumbing Services', 'Tiling & Flooring', 'General Maintenance'],
    testimonial: {
      text: 'Sinqobile Construction built a beautiful patio and braai area at our Fourways home. Excellent workmanship and great communication throughout.',
      author: 'Andrew Mitchell',
      location: 'Lonehill, Fourways'
    }
  },
  'roodepoort': {
    name: 'Roodepoort',
    description: 'Dependable construction and building services in Roodepoort. Sinqobile Construction has completed 55+ projects across Roodepoort, from home renovations to new builds, with quality workmanship guaranteed.',
    suburbs: ['Florida', 'Honeydew', 'Ruimsig', 'Wilgeheuwel', 'Constantia Kloof', 'Little Falls', 'Horison', 'Weltevredenpark'],
    projects: 55,
    rating: 4.7,
    highlights: [
      'Serving all Roodepoort suburbs',
      '55+ projects completed across Roodepoort',
      'Familiar with Roodepoort municipal requirements',
      'Quick response times throughout Roodepoort',
      'Quality construction at competitive rates'
    ],
    services: ['Residential Building & Extensions', 'Home Renovations', 'Roofing & Waterproofing', 'Plastering & Painting', 'Paving & Driveways', 'Plumbing Services', 'Tiling & Flooring', 'General Maintenance'],
    testimonial: {
      text: 'Very impressed with the renovation work Sinqobile Construction did on our Roodepoort property. Professional, affordable, and high quality.',
      author: 'Thabo Molefe',
      location: 'Honeydew, Roodepoort'
    }
  }
}

// SEO metadata per area
const areaSEO: Record<string, { title: string; description: string }> = {
  'johannesburg': {
    title: 'Builders in Johannesburg | Construction Services JHB - Sinqobile',
    description: 'Trusted builders in Johannesburg. NHBRC registered, 150+ projects, 4.9★ rated. Building, renovations, paving, plumbing & more across all JHB suburbs. Free quotes — +27 82 868 8396',
  },
  'sandton': {
    title: 'Construction Services Sandton | Builders & Contractors - Sinqobile',
    description: 'Premium construction & renovation services in Sandton. 120+ projects across Morningside, Sandhurst, Bryanston & more. 4.9★ rated. Free quotes — +27 82 868 8396',
  },
  'pretoria': {
    title: 'Building Contractors Pretoria | Construction Services - Sinqobile',
    description: 'Expert building contractors in Pretoria & Centurion. 100+ projects, 15+ years experience. Renovations, building & maintenance. Free quotes — +27 82 868 8396',
  },
  'centurion': {
    title: 'Construction Company Centurion | Builders & Renovations - Sinqobile',
    description: 'Reliable construction services in Centurion. 80+ projects across Eldoraigne, Wierdapark, Lyttelton & more. NHBRC registered. Free quotes — +27 82 868 8396',
  },
  'midrand': {
    title: 'Builders in Midrand | Construction Services - Sinqobile Construction',
    description: 'Professional builders in Midrand. 90+ projects across Waterfall, Carlswald, Halfway House & more. 15+ years experience. Free quotes — +27 82 868 8396',
  },
  'randburg': {
    title: 'Construction Services Randburg | Builders & Contractors - Sinqobile',
    description: 'Expert construction services in Randburg. 70+ projects across Northcliff, Linden, Ferndale & more. Quality workmanship guaranteed. Free quotes — +27 82 868 8396',
  },
  'fourways': {
    title: 'Builders in Fourways | Construction & Renovations - Sinqobile',
    description: 'Quality builders in Fourways & surrounding estates. 65+ projects across Dainfern, Lonehill, Cedar Lakes & more. Free quotes — +27 82 868 8396',
  },
  'roodepoort': {
    title: 'Construction Services Roodepoort | Builders - Sinqobile Construction',
    description: 'Dependable construction services in Roodepoort. 55+ projects across Honeydew, Ruimsig, Florida & more. Competitive rates. Free quotes — +27 82 868 8396',
  },
}

export async function generateStaticParams() {
  return Object.keys(locationData).map((area) => ({ area }))
}

export async function generateMetadata({ params }: AreaPageProps): Promise<Metadata> {
  const location = locationData[params.area]
  const seo = areaSEO[params.area]

  if (!location) return {}

  return {
    title: seo?.title || `Construction Services ${location.name} | Sinqobile Construction`,
    description: seo?.description || `Professional construction services in ${location.name}. ${location.projects}+ projects completed. Free quotes — +27 82 868 8396`,
    alternates: {
      canonical: `/${params.lang}/areas/${params.area}`,
    },
  }
}

export default async function AreaDetailPage({ params: { lang, area } }: AreaPageProps) {
  const dict = await getDictionary(lang)
  const location = locationData[area]

  if (!location) {
    notFound()
  }

  return (
    <>
      <Breadcrumb
        items={[
          { label: 'Service Areas', href: `/${lang}/areas` },
          { label: location.name, href: `/${lang}/areas/${area}` }
        ]}
        lang={lang}
        dict={dict}
      />

      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <MapPin size={32} className="text-yellow-400" />
                <h1 className="font-heading text-4xl md:text-5xl font-bold">
                  Construction Services in {location.name}
                </h1>
              </div>
              <p className="text-xl mb-6">
                {location.description}
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-lg">
                <div className="flex items-center space-x-2">
                  <Award className="text-yellow-400" size={24} />
                  <span>{location.projects}+ Projects</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="text-yellow-400" size={24} fill="currentColor" />
                  <span>{location.rating}★ Rating</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="text-yellow-400" size={24} />
                  <span>15+ Years Experience</span>
                </div>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
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
          </div>
        </section>

        {/* Why Choose Us in Location */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary text-center mb-12">
                Why Choose Sinqobile Construction in {location.name}?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {location.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="text-accent flex-shrink-0 mt-1" size={24} />
                    <span className="text-secondary text-lg">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services in Location */}
        <section className="py-20 bg-lightBackground">
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary text-center mb-12">
              Our Services in {location.name}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {location.services.map((service, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow text-center">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="text-accent" size={24} />
                  </div>
                  <h3 className="font-semibold text-secondary">{service}</h3>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link
                href={`/${lang}/services`}
                className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                View All Services
              </Link>
            </div>
          </div>
        </section>

        {/* Suburbs Covered */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary text-center mb-12">
                {location.name} Suburbs We Serve
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {location.suburbs.map((suburb) => (
                  <div key={suburb} className="bg-white rounded-lg p-4 shadow-md text-center">
                    <MapPin className="text-accent mx-auto mb-2" size={20} />
                    <p className="font-medium text-secondary">{suburb}</p>
                  </div>
                ))}
              </div>
              <p className="text-center text-secondary mt-8">
                And many more suburbs across {location.name}. Call us to confirm we serve your area!
              </p>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-20 bg-primary text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <Star className="text-yellow-400 mx-auto mb-6" size={48} fill="currentColor" />
              <blockquote className="text-xl md:text-2xl mb-6 italic">
                "{location.testimonial.text}"
              </blockquote>
              <div className="font-semibold text-lg">
                <p>{location.testimonial.author}</p>
                <p className="text-yellow-400">{location.testimonial.location}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Badges */}
        <section className="py-20 bg-lightBackground">
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-3xl font-bold text-primary text-center mb-12">
              Trusted Construction Partner in {location.name}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="text-accent" size={32} />
                </div>
                <h3 className="font-bold text-secondary mb-2">Fully Insured</h3>
                <p className="text-sm text-gray-600">Comprehensive coverage</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="text-accent" size={32} />
                </div>
                <h3 className="font-bold text-secondary mb-2">15+ Years</h3>
                <p className="text-sm text-gray-600">Industry experience</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="text-accent" size={32} />
                </div>
                <h3 className="font-bold text-secondary mb-2">Quality Guaranteed</h3>
                <p className="text-sm text-gray-600">Workmanship warranty</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="text-accent" size={32} fill="currentColor" />
                </div>
                <h3 className="font-bold text-secondary mb-2">{location.rating}★ Rating</h3>
                <p className="text-sm text-gray-600">Customer satisfaction</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-accent text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your {location.name} Construction Project?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contact Sinqobile Construction today for a free consultation and quote for your {location.name} property
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+27828688396"
                className="inline-flex items-center justify-center space-x-2 bg-white text-secondary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                <Phone size={20} />
                <span>Call: +27 82 868 8396</span>
              </a>
              <Link
                href={`/${lang}/contact`}
                className="inline-flex items-center justify-center space-x-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-accent transition-colors"
              >
                <span>Request Free Quote</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}