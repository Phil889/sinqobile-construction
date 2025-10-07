'use client'

import React, { useState } from 'react'
import { getDictionary } from '@/lib/dictionaries'
import { Locale } from '@/i18n.config'
import { ChevronDown, ChevronUp, Phone, MessageCircle } from 'lucide-react'
import Script from 'next/script'

interface FAQPageProps {
  params: { lang: Locale }
}

interface FAQItem {
  question: string
  answer: string
}

interface FAQCategory {
  title: string
  items: FAQItem[]
}

export default function FAQPage({ params: { lang } }: FAQPageProps) {
  const [openItems, setOpenItems] = useState<string[]>([])

  const toggleItem = (itemId: string) => {
    setOpenItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    )
  }

  const faqCategories: FAQCategory[] = [
    {
      title: "General Questions",
      items: [
        {
          question: "Do you provide free quotes?",
          answer: "Yes, we provide free, no-obligation quotes for all our services. Simply contact us with your project details and we'll schedule a convenient time to assess your needs and provide a detailed estimate."
        },
        {
          question: "What areas do you service?",
          answer: "We service all areas across Gauteng Province, including Johannesburg, Pretoria, East Rand, West Rand, Midrand, Centurion, Sandton, Randburg, Fourways, and surrounding areas. Contact us to confirm coverage for your specific location."
        },
        {
          question: "Are you licensed and insured?",
          answer: "Yes, MD Builders is fully licensed and insured. We carry comprehensive liability insurance to protect both our clients and our team during all projects. We can provide proof of insurance upon request."
        },
        {
          question: "How experienced is your team?",
          answer: "MD Builders has over 15 years of experience in the construction industry. Our team consists of skilled professionals with expertise in various construction disciplines, ensuring quality workmanship on every project."
        }
      ]
    },
    {
      title: "Project & Pricing",
      items: [
        {
          question: "How long do projects typically take?",
          answer: "Project timelines vary depending on scope and complexity. Small repairs may take 1-2 days, medium renovations 1-2 weeks, while larger construction projects can take several weeks to months. We provide detailed timelines with every quote."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept cash, bank transfers (EFT), and card payments. For larger projects, we typically require a deposit to begin work (usually 30-50%), with progress payments and final payment upon completion."
        },
        {
          question: "Do you offer warranties on your work?",
          answer: "Yes, we stand behind our work with comprehensive warranties. Warranty periods vary by service type - typically 1 year for general construction work, 6 months for painting, and longer for structural work. We'll provide full warranty details with your quote."
        },
        {
          question: "Can you work within my budget?",
          answer: "We work with clients to find solutions that fit their budget. We can suggest alternative materials, phased construction approaches, or modified designs to help achieve your goals within your financial constraints."
        },
        {
          question: "Do you provide detailed quotes?",
          answer: "Yes, all our quotes include detailed breakdowns of materials, labor, timeline, and any additional costs. We believe in transparent pricing with no hidden fees or surprise charges."
        }
      ]
    },
    {
      title: "Services & Materials",
      items: [
        {
          question: "Do you supply materials or do I need to purchase them?",
          answer: "We can supply all materials as part of our service, or work with materials you've purchased. We typically recommend letting us supply materials as we have established relationships with suppliers and can often get better prices."
        },
        {
          question: "What types of construction services do you offer?",
          answer: "We offer a comprehensive range of services including building construction, concrete work, paving, plumbing, waterproofing, extensions, renovations, repairs, roofing, brickwork, painting, plastering, electrical work, and more."
        },
        {
          question: "Can you work on weekends or evenings?",
          answer: "Yes, we offer flexible scheduling including weekend and evening work for urgent projects or client convenience. Additional charges may apply for after-hours work, and we always respect noise regulations in residential areas."
        },
        {
          question: "Do you handle emergency repairs?",
          answer: "Yes, we provide 24/7 emergency repair services for urgent issues like burst pipes, electrical problems, structural damage, or roof leaks. Contact us immediately for emergency assistance - we aim to respond within 2-4 hours for true emergencies."
        },
        {
          question: "Do you work on both residential and commercial projects?",
          answer: "Yes, we handle both residential and commercial projects. Our experience ranges from small home repairs to large commercial construction projects, and we adapt our approach to meet the specific needs of each project type."
        }
      ]
    },
    {
      title: "Process & Communication",
      items: [
        {
          question: "What is your typical project process?",
          answer: "Our process includes: 1) Initial consultation and site assessment, 2) Detailed quote preparation, 3) Project planning and scheduling, 4) Professional execution with regular updates, 5) Final inspection and handover with warranty documentation."
        },
        {
          question: "How do you handle project changes or additions?",
          answer: "We understand that projects sometimes evolve. Any changes or additions are discussed with you first, with clear pricing and timeline impacts provided before proceeding. All changes are documented in writing."
        },
        {
          question: "Will you clean up after the project?",
          answer: "Yes, we include cleanup as part of our service. We maintain a clean work site during construction and perform thorough cleanup upon completion, removing all debris and construction materials."
        },
        {
          question: "How do you ensure quality control?",
          answer: "We have strict quality control measures including regular inspections, use of quality materials, experienced craftsmen, and final quality checks before project completion. We also welcome client inspections throughout the process."
        },
        {
          question: "What if I'm not satisfied with the work?",
          answer: "Customer satisfaction is our priority. If you're not satisfied with any aspect of our work, we'll work with you to address the issues at no additional cost. Our warranty covers any defects in workmanship."
        }
      ]
    }
  ]

  // Generate FAQ schema markup
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqCategories.flatMap(category =>
      category.items.map(item => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer
        }
      }))
    )
  }

  return (
    <div className="pt-20">
      {/* FAQ Schema Markup */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Find answers to the most common questions about our construction services
          </p>
          <p className="text-lg">
            Can't find what you're looking for? Contact us directly!
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary mb-8 text-center">
                  {category.title}
                </h2>
                
                <div className="space-y-4">
                  {category.items.map((item, itemIndex) => {
                    const itemId = `${categoryIndex}-${itemIndex}`
                    const isOpen = openItems.includes(itemId)
                    
                    return (
                      <div key={itemIndex} className="bg-white rounded-lg shadow-md overflow-hidden">
                        <button
                          onClick={() => toggleItem(itemId)}
                          className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                        >
                          <h3 className="font-semibold text-secondary pr-4">
                            {item.question}
                          </h3>
                          {isOpen ? (
                            <ChevronUp className="text-primary flex-shrink-0" size={24} />
                          ) : (
                            <ChevronDown className="text-primary flex-shrink-0" size={24} />
                          )}
                        </button>
                        
                        {isOpen && (
                          <div className="px-6 pb-4">
                            <div className="border-t border-gray-200 pt-4">
                              <p className="text-secondary leading-relaxed">
                                {item.answer}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-lightBackground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <div className="text-secondary">Years Experience</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-secondary">Projects Completed</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-secondary">Satisfaction Rate</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-secondary">Emergency Service</div>
            </div>
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Don't hesitate to reach out - we're here to help with any questions about your construction project!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0719334063"
              className="inline-flex items-center justify-center space-x-2 bg-accent text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
            >
              <Phone size={20} />
              <span>Call: 071 933 4063</span>
            </a>
            
            <a
              href={`/${lang}/contact`}
              className="inline-flex items-center justify-center space-x-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors"
            >
              <MessageCircle size={20} />
              <span>Send Message</span>
            </a>
            
            <a
              href="https://wa.me/27719334063"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              <MessageCircle size={20} />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* Service Areas CTA */}
      <section className="py-16 bg-lightBackground">
        <div className="container mx-auto px-4 text-center">
          <h3 className="font-heading text-2xl font-bold text-primary mb-4">
            Serving All Gauteng Areas
          </h3>
          <p className="text-secondary mb-6">
            From Johannesburg to Pretoria, we bring quality construction services to your location
          </p>
          <a
            href={`/${lang}/areas`}
            className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            View Service Areas
          </a>
        </div>
      </section>
    </div>
  )
}