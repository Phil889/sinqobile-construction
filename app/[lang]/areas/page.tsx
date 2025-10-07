import { getDictionary } from '@/lib/dictionaries'
import { Locale } from '@/i18n.config'
import { MapPin, Phone, Briefcase, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import { Metadata } from 'next'

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: Locale }
}): Promise<Metadata> {
  return {
    title: 'Service Areas in Gauteng | MD Builders Construction Services',
    description: 'MD Builders provides professional construction services across Gauteng including Johannesburg, Pretoria, East Rand, West Rand, and Midrand. View our service areas and recent projects.',
    keywords: 'construction services Gauteng, builders Johannesburg, construction Pretoria, building services East Rand, contractors West Rand',
  }
}

export default async function AreasPage({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  const dict = await getDictionary(lang)

  const areas = [
    {
      name: 'Johannesburg',
      suburbs: ['Sandton', 'Rosebank', 'Randburg', 'Fourways', 'Bryanston'],
      services: ['Building', 'Renovations', 'Plumbing', 'Painting', 'Tiling'],
      projectCount: 45,
      phone: '071 933 4063',
      description: 'Serving the heart of Gauteng with premium construction services'
    },
    {
      name: 'Pretoria',
      suburbs: ['Centurion', 'Menlyn', 'Hatfield', 'Brooklyn', 'Waterkloof'],
      services: ['Extensions', 'Roofing', 'Paving', 'Plastering', 'Waterproofing'],
      projectCount: 32,
      phone: '071 933 4063',
      description: 'Quality construction services throughout the capital city'
    },
    {
      name: 'East Rand',
      suburbs: ['Boksburg', 'Benoni', 'Kempton Park', 'Edenvale', 'Bedfordview'],
      services: ['Building', 'Concrete Work', 'Fencing', 'Maintenance', 'Repairs'],
      projectCount: 28,
      phone: '071 933 4063',
      description: 'Trusted builders serving the East Rand communities'
    },
    {
      name: 'West Rand',
      suburbs: ['Roodepoort', 'Krugersdorp', 'Randfontein', 'Westonaria'],
      services: ['Renovations', 'Brickwork', 'Painting', 'Tiling', 'Flooring'],
      projectCount: 21,
      phone: '071 933 4063',
      description: 'Professional construction services for West Rand residents'
    },
    {
      name: 'Midrand',
      suburbs: ['Halfway House', 'Waterfall', 'Grand Central', 'Midstream'],
      services: ['Building', 'Extensions', 'Landscaping', 'Paving', 'Installation'],
      projectCount: 19,
      phone: '071 933 4063',
      description: 'Expert builders serving the growing Midrand area'
    },
    {
      name: 'South Johannesburg',
      suburbs: ['Soweto', 'Lenasia', 'Orange Farm', 'Alberton'],
      services: ['Building', 'Repairs', 'Plumbing', 'Electrical', 'Maintenance'],
      projectCount: 24,
      phone: '071 933 4063',
      description: 'Affordable quality construction for South Johannesburg'
    }
  ]

  // Schema markup for Service Area
  const serviceAreaSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Construction Services",
    "provider": {
      "@type": "LocalBusiness",
      "name": "MD Builders",
      "telephone": "+27719334063",
      "url": "https://mdbuilders.co.za"
    },
    "areaServed": areas.map(area => ({
      "@type": "City",
      "name": area.name,
      "containedInPlace": {
        "@type": "State",
        "name": "Gauteng",
        "containedInPlace": {
          "@type": "Country",
          "name": "South Africa"
        }
      }
    }))
  }

  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceAreaSchema) }}
      />
      
      <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Service Areas Across Gauteng
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            MD Builders proudly serves residential and commercial clients throughout Gauteng Province. With over 15 years of experience and 169+ completed projects, we're your trusted construction partner across all major areas.
          </p>
          <a
            href="tel:0719334063"
            className="inline-flex items-center space-x-2 bg-white text-secondary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            <Phone size={20} />
            <span>Call for Service: 071 933 4063</span>
          </a>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-12 bg-lightBackground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-3xl font-bold text-primary mb-6">
              Professional Construction Services Across Gauteng
            </h2>
            <p className="text-secondary text-lg mb-4">
              MD Builders has been serving Gauteng communities for over 15 years, delivering exceptional construction, renovation, and maintenance services. From residential homes to commercial properties, we bring quality workmanship and reliable service to every project.
            </p>
            <p className="text-secondary text-lg">
              Our experienced team covers all major areas including Johannesburg, Pretoria, East Rand, West Rand, Midrand, and surrounding suburbs. Whether you need building, plumbing, painting, paving, or any construction service, we're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Areas Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl font-bold text-center text-primary mb-12">
            Our Service Areas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {areas.map((area, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center space-x-3 mb-4">
                  <MapPin className="text-primary" size={24} />
                  <h3 className="font-heading text-2xl font-bold text-primary">
                    {area.name}
                  </h3>
                </div>
                
                <p className="text-secondary text-sm mb-4">{area.description}</p>
                
                {/* Suburbs */}
                <div className="mb-4">
                  <h4 className="font-semibold text-secondary mb-2">Areas Covered:</h4>
                  <ul className="space-y-1">
                    {area.suburbs.map((suburb, idx) => (
                      <li key={idx} className="text-secondary text-sm flex items-center">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></span>
                        {suburb}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Services */}
                <div className="mb-4">
                  <h4 className="font-semibold text-secondary mb-2">Services Available:</h4>
                  <div className="flex flex-wrap gap-2">
                    {area.services.map((service, idx) => (
                      <span key={idx} className="text-xs bg-lightBackground text-secondary px-2 py-1 rounded">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Count */}
                <div className="flex items-center space-x-2 mb-4 text-sm text-secondary">
                  <Briefcase size={16} className="text-accent" />
                  <span>{area.projectCount}+ Completed Projects</span>
                </div>

                {/* CTA Buttons */}
                <div className="space-y-2">
                  <Link
                    href={`/${lang}/our-work`}
                    className="block w-full text-center bg-primary text-white px-4 py-2 rounded-lg font-medium hover:bg-orange-700 transition-colors"
                  >
                    View Projects
                  </Link>
                  <a
                    href={`tel:${area.phone.replace(/\s/g, '')}`}
                    className="block w-full text-center border-2 border-primary text-primary px-4 py-2 rounded-lg font-medium hover:bg-primary hover:text-white transition-colors"
                  >
                    <Phone size={16} className="inline mr-2" />
                    {area.phone}
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-lightBackground rounded-lg p-8 text-center">
            <h3 className="font-heading text-2xl font-bold text-primary mb-4">
              Don't See Your Area?
            </h3>
            <p className="text-secondary text-lg mb-6">
              We service many more areas across Gauteng. Contact us to check if we cover your location!
            </p>
            <a
              href="tel:0719334063"
              className="inline-block bg-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
            >
              Check Coverage Area
            </a>
          </div>
          {/* Why Choose Us Section */}
          <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
            <h3 className="font-heading text-2xl font-bold text-primary mb-6 text-center">
              Why Choose MD Builders for Your Area?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <CheckCircle className="text-accent mx-auto mb-3" size={40} />
                <h4 className="font-semibold text-secondary mb-2">Local Expertise</h4>
                <p className="text-secondary text-sm">
                  Deep knowledge of Gauteng building regulations and local requirements
                </p>
              </div>
              <div className="text-center">
                <CheckCircle className="text-accent mx-auto mb-3" size={40} />
                <h4 className="font-semibold text-secondary mb-2">Fast Response</h4>
                <p className="text-secondary text-sm">
                  Quick response times across all service areas with local teams
                </p>
              </div>
              <div className="text-center">
                <CheckCircle className="text-accent mx-auto mb-3" size={40} />
                <h4 className="font-semibold text-secondary mb-2">Quality Guaranteed</h4>
                <p className="text-secondary text-sm">
                  All work backed by our comprehensive warranty and quality guarantee
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  )
}