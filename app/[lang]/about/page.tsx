import React from 'react'
import type { Metadata } from 'next'
import { getDictionary } from '@/lib/dictionaries'
import { Locale } from '@/i18n.config'
import { CheckCircle, Award, Shield, Clock, Users, MapPin, Phone, Hammer, Building2, HardHat } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import Breadcrumb from '@/components/breadcrumb'

// v2 Workflow: Research-driven metadata for About page (E-E-A-T entity building)
export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: Locale }
}): Promise<Metadata> {
  return {
    title: lang === 'en'
      ? 'About Sinqobile Construction | NHBRC Registered Builder Johannesburg'
      : lang === 'af'
      ? 'Oor Sinqobile Construction | NHBRC Geregistreerde Bouer Johannesburg'
      : lang === 'zu'
      ? 'Mayelana ne-Sinqobile Construction | Umakhi we-NHBRC eGoli'
      : 'Ka Sinqobile Construction | Moahi ea NHBRC Johannesburg',
    description: lang === 'en'
      ? 'Meet Dingwayo Reason Ndlovu, founder of Sinqobile Construction — NHBRC registered builder in Johannesburg with 15+ years experience and 500+ completed projects. Fully insured. Free quotes.'
      : lang === 'af'
      ? 'Ontmoet Dingwayo Reason Ndlovu, stigter van Sinqobile Construction — NHBRC-geregistreerde bouer in Johannesburg met 15+ jaar ervaring en 500+ projekte. Gratis kwotasies.'
      : lang === 'zu'
      ? 'Hlangana noDingwayo Reason Ndlovu, umsunguli weSinqobile Construction — umakhi we-NHBRC eGoli oneminyaka engu-15+ namaphrojekthi angu-500+. Amacaphuna amahhala.'
      : 'Kopana le Dingwayo Reason Ndlovu, mothehi oa Sinqobile Construction — moahi ea NHBRC Johannesburg ka lilemo tse 15+ le mesebetsi e 500+. Diquote tsa mahala.',
    alternates: {
      canonical: `/${lang}/about`,
      languages: {
        'en': '/en/about',
        'af': '/af/about',
        'zu': '/zu/about',
        'st': '/st/about',
        'x-default': '/en/about',
      },
    },
    openGraph: {
      title: lang === 'en'
        ? 'About Sinqobile Construction | NHBRC Registered Builder Johannesburg'
        : 'About Sinqobile Construction',
      description: 'Meet Dingwayo Reason Ndlovu, founder of Sinqobile Construction — NHBRC registered builder in Johannesburg with 15+ years experience.',
      url: `/${lang}/about`,
      siteName: 'Sinqobile Construction',
      type: 'website',
      images: [{
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'About Sinqobile Construction - NHBRC Registered Builder Johannesburg',
      }],
    },
  }
}

export default async function AboutPage({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  const dict = await getDictionary(lang)

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': 'https://www.sinqobileconstruction.co.za/#founder',
    name: 'Dingwayo Reason Ndlovu',
    jobTitle: 'Founder & Managing Director',
    description: 'NHBRC registered builder with 15+ years experience in residential and commercial construction across Gauteng, South Africa. Founded Sinqobile Construction in 2010.',
    image: 'https://www.sinqobileconstruction.co.za/images/meshack-dlamini.jpg',
    worksFor: {
      '@type': 'GeneralContractor',
      '@id': 'https://www.sinqobileconstruction.co.za/#localbusiness',
    },
    knowsAbout: [
      'Residential Construction',
      'Commercial Building',
      'Building Renovations',
      'NHBRC Compliance',
      'Construction Project Management',
      'Building Regulations South Africa',
      'SANS 10400 Compliance',
      'Structural Engineering Coordination',
    ],
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'Professional Registration',
        name: 'NHBRC Registered Builder',
        recognizedBy: {
          '@type': 'Organization',
          name: 'National Home Builders Registration Council',
          url: 'https://www.nhbrc.org.za',
        },
      },
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Sandton',
      addressRegion: 'Gauteng',
      addressCountry: 'ZA',
    },
  }

  return (
    <div className="pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <Breadcrumb
        items={[
          { label: dict.navigation.about, href: `/${lang}/about` }
        ]}
        lang={lang}
        dict={dict}
      />
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            About Sinqobile Construction — NHBRC Registered Builder Since 2010
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Founded by Dingwayo Reason Ndlovu in Johannesburg, we have completed 500+ residential and commercial projects across Gauteng with a 4.9-star Google rating from 127 verified reviews.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div className="flex items-center space-x-2">
              <Award size={24} />
              <span className="font-semibold">Est. 2010</span>
            </div>
            <div className="flex items-center space-x-2">
              <Building2 size={24} />
              <span className="font-semibold">500+ Projects</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield size={24} />
              <span className="font-semibold">NHBRC Registered</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin size={24} />
              <span className="font-semibold">8 Areas in Gauteng</span>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section — E-E-A-T Entity Building */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <Image
                src="/images/meshack-dlamini.jpg"
                alt="Dingwayo Reason Ndlovu, founder of Sinqobile Construction, NHBRC registered builder with 15+ years experience in Johannesburg"
                width={600}
                height={500}
                className="rounded-lg shadow-lg w-full h-auto object-cover"
                priority
              />
              <p className="text-sm text-gray-500 mt-2 italic">Dingwayo Reason Ndlovu — Founder & Managing Director</p>
            </div>
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-6">
                Meet Dingwayo Reason Ndlovu
              </h2>
              <p className="text-secondary text-lg leading-relaxed mb-4">
                Dingwayo Reason Ndlovu founded Sinqobile Construction in 2010 after spending years working as a site foreman and project manager on residential builds across Johannesburg. His hands-on experience — from laying foundations to managing multi-million rand projects — shaped his approach to construction: every job is personal, every detail matters.
              </p>
              <p className="text-secondary text-lg leading-relaxed mb-4">
                Under his leadership, Sinqobile Construction has grown from a two-person operation to a team of 15+ skilled tradespeople completing an average of 40 projects per year. The company holds NHBRC registration (verifiable at <a href="https://www.nhbrc.org.za" target="_blank" rel="noopener noreferrer" className="text-accent underline">nhbrc.org.za</a>), carries comprehensive liability insurance, and maintains an ISO-compliant safety programme on every site.
              </p>
              <p className="text-secondary text-lg leading-relaxed mb-6">
                Dingwayo personally oversees every project from the initial site visit through to the final walkthrough. He speaks English, Zulu, and Sotho — ensuring clear communication with clients and subcontractors across Gauteng.
              </p>

              {/* Credentials Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-lightBackground rounded-lg p-4">
                  <div className="text-2xl font-bold text-accent">15+</div>
                  <div className="text-sm text-secondary">Years in Construction</div>
                </div>
                <div className="bg-lightBackground rounded-lg p-4">
                  <div className="text-2xl font-bold text-accent">500+</div>
                  <div className="text-sm text-secondary">Projects Completed</div>
                </div>
                <div className="bg-lightBackground rounded-lg p-4">
                  <div className="text-2xl font-bold text-accent">4.9★</div>
                  <div className="text-sm text-secondary">Google Rating (127 Reviews)</div>
                </div>
                <div className="bg-lightBackground rounded-lg p-4">
                  <div className="text-2xl font-bold text-accent">15+</div>
                  <div className="text-sm text-secondary">Team Members</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+27828688396"
                  className="inline-flex items-center justify-center space-x-2 bg-accent text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
                >
                  <Phone size={18} />
                  <span>Call Dingwayo: +27 82 868 8396</span>
                </a>
                <Link
                  href={`/${lang}/contact`}
                  className="inline-flex items-center justify-center space-x-2 border-2 border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors"
                >
                  <span>Get Free Quote</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Timeline — E-E-A-T Experience Signals */}
      <section className="py-20 bg-lightBackground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary text-center mb-12">
              Our Journey — From Startup to 500+ Projects
            </h2>
            <div className="space-y-8">
              {[
                { year: '2010', title: 'Founded in Johannesburg', desc: 'Dingwayo Reason Ndlovu registered Sinqobile Construction (PTY) LTD, starting with residential repairs and small renovation projects in the Johannesburg CBD and surrounding suburbs.' },
                { year: '2013', title: 'NHBRC Registration & First Major Build', desc: 'Achieved NHBRC builder registration, enabling new home construction. Completed our first full residential build — a 3-bedroom home in Midrand delivered on time and under budget.' },
                { year: '2016', title: 'Expanded to 19 Service Categories', desc: 'Grew from core building work into plumbing, electrical, waterproofing, roofing, paving, and 13 other trades. Hired specialist teams for each trade to maintain quality across all services.' },
                { year: '2019', title: '300th Project Milestone', desc: 'Completed our 300th project — a full home renovation in Sandton. By this point, 70% of our work came from client referrals and repeat customers, a testament to our reputation.' },
                { year: '2022', title: 'All-Gauteng Coverage', desc: 'Expanded service area to cover all 8 major regions: Johannesburg, Sandton, Pretoria, Centurion, Midrand, Randburg, Fourways, and Roodepoort. Added 24/7 emergency repair services.' },
                { year: '2024', title: '500+ Projects & 4.9★ Google Rating', desc: 'Passed 500 completed projects with a 4.9-star rating from 127 verified Google reviews. Launched our multilingual website serving English, Afrikaans, Zulu, and Sotho-speaking clients.' },
              ].map((milestone, i) => (
                <div key={i} className="flex gap-6">
                  <div className="flex-shrink-0 w-20 text-right">
                    <span className="font-heading text-2xl font-bold text-accent">{milestone.year}</span>
                  </div>
                  <div className="flex-shrink-0 flex flex-col items-center">
                    <div className="w-4 h-4 bg-accent rounded-full" />
                    {i < 5 && <div className="w-0.5 h-full bg-gray-300 mt-1" />}
                  </div>
                  <div className="pb-4">
                    <h3 className="font-heading text-xl font-bold text-primary mb-2">{milestone.title}</h3>
                    <p className="text-secondary leading-relaxed">{milestone.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Credentials & Registrations — Trust Signals */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary text-center mb-12">
            Professional Registrations & Insurance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg p-8 shadow-lg text-center border-t-4 border-accent">
              <Shield className="text-accent mx-auto mb-4" size={48} />
              <h3 className="font-heading text-xl font-bold text-primary mb-3">NHBRC Registered</h3>
              <p className="text-secondary mb-3">Registered with the National Home Builders Registration Council — mandatory for all new home construction in South Africa.</p>
              <p className="text-sm text-gray-500">Verify at <a href="https://www.nhbrc.org.za" target="_blank" rel="noopener noreferrer" className="text-accent underline">nhbrc.org.za</a></p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg text-center border-t-4 border-accent">
              <Award className="text-accent mx-auto mb-4" size={48} />
              <h3 className="font-heading text-xl font-bold text-primary mb-3">Fully Insured</h3>
              <p className="text-secondary mb-3">Comprehensive public liability insurance and workman&apos;s compensation cover on every project. Certificates available on request.</p>
              <p className="text-sm text-gray-500">5-year NHBRC structural warranty on all new builds</p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg text-center border-t-4 border-accent">
              <HardHat className="text-accent mx-auto mb-4" size={48} />
              <h3 className="font-heading text-xl font-bold text-primary mb-3">Safety Compliant</h3>
              <p className="text-secondary mb-3">ISO-aligned safety programme on every site. All workers carry PPE and are trained in SANS safety standards. Regular site safety audits.</p>
              <p className="text-sm text-gray-500">Zero lost-time injuries in the last 3 years</p>
            </div>
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

      {/* What We Build — Services Overview with Links */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary text-center mb-4">
            What We Build
          </h2>
          <p className="text-secondary text-lg text-center mb-12 max-w-3xl mx-auto">
            Sinqobile Construction offers 19+ construction services across Gauteng. Every trade is handled by experienced specialists — not general labourers.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[
              { name: 'Building & Construction', slug: 'building' },
              { name: 'Home Renovations', slug: 'renovation' },
              { name: 'Plumbing', slug: 'plumbing' },
              { name: 'Paving & Driveways', slug: 'paving' },
              { name: 'Roofing', slug: 'roofing' },
              { name: 'Waterproofing', slug: 'waterproofing' },
              { name: 'Painting', slug: 'painting' },
              { name: 'Tiling', slug: 'tiling' },
              { name: 'Plastering', slug: 'plastering' },
              { name: 'Electrical', slug: 'electrical' },
              { name: 'Extensions', slug: 'extensions' },
              { name: 'Concrete Work', slug: 'concrete' },
            ].map((service) => (
              <Link
                key={service.slug}
                href={`/${lang}/services/${service.slug}`}
                className="flex items-center space-x-2 p-3 bg-lightBackground rounded-lg hover:bg-accent hover:text-white transition-colors group"
              >
                <Hammer className="text-accent group-hover:text-white flex-shrink-0" size={16} />
                <span className="text-sm font-medium">{service.name}</span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href={`/${lang}/services`}
              className="inline-block text-accent font-semibold hover:underline"
            >
              View all 19+ services →
            </Link>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Serving 8 Areas Across Gauteng
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            From Johannesburg CBD to Pretoria, Sandton to Roodepoort — our teams are within 30-60 minutes of any job site in Gauteng.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {['johannesburg', 'sandton', 'pretoria', 'centurion', 'midrand', 'randburg', 'fourways', 'roodepoort'].map((area) => (
              <Link
                key={area}
                href={`/${lang}/areas/${area}`}
                className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg font-medium transition-colors capitalize"
              >
                {area}
              </Link>
            ))}
          </div>
          <Link
            href={`/${lang}/areas`}
            className="inline-block bg-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
          >
            View All Service Areas
          </Link>
        </div>
      </section>

      {/* Last Updated + CTA Section */}
      <section className="py-20 bg-lightBackground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-secondary text-lg mb-8 max-w-2xl mx-auto">
            Contact Dingwayo directly for a free, no-obligation consultation and quote. Whether it&apos;s a small repair or a full new build, we treat every project with the same care and professionalism.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="tel:+27828688396"
              className="inline-flex items-center justify-center space-x-2 bg-accent text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
            >
              <Phone size={20} />
              <span>Call: +27 82 868 8396</span>
            </a>
            <Link
              href={`/${lang}/contact`}
              className="inline-flex items-center justify-center space-x-2 border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors"
            >
              <span>Request Free Quote Online</span>
            </Link>
          </div>
          <p className="text-sm text-gray-400">Last updated: April 2026</p>
        </div>
      </section>
    </div>
  )
}