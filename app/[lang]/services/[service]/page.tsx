import React from 'react'
import { getDictionary } from '@/lib/dictionaries'
import { Locale } from '@/i18n.config'
import { getServiceBySlug, enhancedServices } from '@/lib/enhanced-services-data'
import { getProjectsByCategory } from '@/lib/all-projects-data'
import { CheckCircle, Phone, ArrowLeft, MapPin, Calendar } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

interface ServicePageProps {
  params: { 
    lang: Locale
    service: string 
  }
}

// Generate static params for all services
export async function generateStaticParams() {
  const services = enhancedServices.map(service => ({ service: service.slug }))
  return services
}

export default async function ServicePage({ params: { lang, service } }: ServicePageProps) {
  const dict = await getDictionary(lang)
  const serviceData = getServiceBySlug(service)
  
  if (!serviceData) {
    notFound()
  }

  // Get projects for this service category
  const serviceProjects = getProjectsByCategory(service)
  const IconComponent = serviceData.icon

  // Get service info from dictionary
  const serviceInfo = (dict.services.items as any)[service] || (dict as any).extendedServices?.[service]

  return (
    <div className="pt-20">
      {/* Breadcrumb */}
      <section className="py-4 bg-lightBackground border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm">
            <Link href={`/${lang}`} className="text-secondary hover:text-primary">
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <Link href={`/${lang}/services`} className="text-secondary hover:text-primary">
              Services
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-primary font-medium">
              {serviceInfo?.name || serviceData.name}
            </span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                <IconComponent className="text-white" size={40} />
              </div>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              {serviceInfo?.name || serviceData.name} Services
            </h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              {serviceInfo?.description || serviceData.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:0719334063"
                className="inline-flex items-center justify-center space-x-2 bg-accent text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
              >
                <Phone size={20} />
                <span>Get Free Quote: 071 933 4063</span>
              </a>
              <Link
                href={`/${lang}/contact`}
                className="inline-flex items-center justify-center space-x-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors"
              >
                <span>Contact Us</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-6">
                Professional {serviceInfo?.name || serviceData.name} Services
              </h2>
              <p className="text-secondary text-lg leading-relaxed mb-8">
                At MD Builders, we specialize in high-quality {serviceInfo?.name?.toLowerCase() || serviceData.name.toLowerCase()} services across Gauteng. With over 15 years of experience, our skilled team delivers exceptional results that stand the test of time.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-accent" size={20} />
                  <span className="text-secondary">Professional, experienced team</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-accent" size={20} />
                  <span className="text-secondary">Quality materials and workmanship</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-accent" size={20} />
                  <span className="text-secondary">Competitive pricing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-accent" size={20} />
                  <span className="text-secondary">Fully insured and licensed</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-accent" size={20} />
                  <span className="text-secondary">Work guarantee provided</span>
                </div>
              </div>

              <div className="bg-lightBackground rounded-lg p-6">
                <h3 className="font-heading text-xl font-bold text-primary mb-4">
                  Service Statistics
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-2xl font-bold text-accent">{serviceData.imageCount}+</div>
                    <div className="text-sm text-secondary">Projects Completed</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-accent">15+</div>
                    <div className="text-sm text-secondary">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {serviceProjects.slice(0, 4).map((project) => (
                <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="flex">
                    <div className="w-24 h-24 relative flex-shrink-0">
                      <Image
                        src={project.image}
                        alt={project.seoAlt}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4 flex-1">
                      <h4 className="font-semibold text-primary mb-1">{project.title}</h4>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <MapPin size={12} />
                          <span>{project.location}</span>
                        </div>
                        {project.duration && (
                          <div className="flex items-center space-x-1">
                            <Calendar size={12} />
                            <span>{project.duration}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20 bg-lightBackground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
              Our {serviceInfo?.name || serviceData.name} Process
            </h2>
            <p className="text-secondary text-lg max-w-2xl mx-auto">
              We follow a proven process to ensure quality results every time
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'Consultation',
                description: 'We assess your needs and provide expert recommendations'
              },
              {
                step: '2',
                title: 'Quote',
                description: 'Detailed, transparent pricing with no hidden costs'
              },
              {
                step: '3',
                title: 'Execution',
                description: 'Professional work with regular progress updates'
              },
              {
                step: '4',
                title: 'Completion',
                description: 'Final inspection and quality guarantee'
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                  {item.step}
                </div>
                <h3 className="font-heading text-lg font-bold text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-secondary text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Gallery */}
      {serviceProjects.length > 0 && (
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
                Recent {serviceInfo?.name || serviceData.name} Projects
              </h2>
              <p className="text-secondary text-lg">
                See examples of our quality {serviceInfo?.name?.toLowerCase() || serviceData.name.toLowerCase()} work
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceProjects.slice(0, 6).map((project) => (
                <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={project.image}
                      alt={project.seoAlt}
                      fill
                      className="object-cover"
                    />
                    {project.featured && (
                      <div className="absolute top-3 left-3">
                        <span className="bg-accent text-white px-2 py-1 rounded-full text-xs font-medium">
                          Featured
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-heading text-lg font-bold text-primary mb-2">
                      {project.title}
                    </h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-2">
                      <div className="flex items-center space-x-1">
                        <MapPin size={14} />
                        <span>{project.location}</span>
                      </div>
                      {project.duration && (
                        <div className="flex items-center space-x-1">
                          <Calendar size={14} />
                          <span>{project.duration}</span>
                        </div>
                      )}
                    </div>
                    <p className="text-secondary text-sm">
                      {project.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {serviceProjects.length > 6 && (
              <div className="text-center mt-12">
                <Link
                  href={`/${lang}/our-work`}
                  className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  View All {serviceInfo?.name || serviceData.name} Projects
                </Link>
              </div>
            )}
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Ready for Your {serviceInfo?.name || serviceData.name} Project?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact MD Builders today for a free consultation and quote
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0719334063"
              className="inline-flex items-center justify-center space-x-2 bg-accent text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
            >
              <Phone size={20} />
              <span>Call: 071 933 4063</span>
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

      {/* Back to Services */}
      <section className="py-8 bg-lightBackground">
        <div className="container mx-auto px-4">
          <Link
            href={`/${lang}/services`}
            className="inline-flex items-center space-x-2 text-primary hover:text-accent transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back to All Services</span>
          </Link>
        </div>
      </section>
    </div>
  )
}