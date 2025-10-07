'use client'

import React, { useState } from 'react'
import { getDictionary } from '@/lib/dictionaries'
import { Locale } from '@/i18n.config'
import { Phone, Mail, Clock, MapPin, Send, CheckCircle } from 'lucide-react'

interface ContactPageProps {
  params: { lang: Locale }
}

export default function ContactPage({ params: { lang } }: ContactPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    location: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission (replace with actual API call)
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        location: '',
        message: ''
      })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const services = [
    'Building', 'Concrete Work', 'Paving', 'Plumbing', 'Waterproofing',
    'Extensions', 'Fencing', 'Flooring', 'Renovation', 'Repairs',
    'Roofing', 'Brickwork', 'Painting', 'Plastering', 'Electrical'
  ]

  const areas = [
    'Johannesburg', 'Pretoria', 'Sandton', 'Midrand', 'Centurion',
    'Randburg', 'Fourways', 'Boksburg', 'Edenvale', 'Kempton Park',
    'Roodepoort', 'Soweto', 'Alberton', 'Germiston', 'Lanseria'
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Contact MD Builders
          </h1>
          <div className="inline-block bg-yellow-400 text-secondary px-6 py-3 rounded-lg font-bold mb-6">
            <span className="text-lg">⚠️ R400 Call-Out Fee</span>
          </div>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Get in touch for your next construction project - professional quotes and consultations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0719334063"
              className="inline-flex items-center justify-center space-x-2 bg-white text-secondary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              <Phone size={20} />
              <span>Call: 071 933 4063</span>
            </a>
            <a
              href="https://wa.me/27719334063"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      <div className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="font-heading text-2xl font-bold text-primary mb-6">
                Get Your Free Quote
              </h2>
              
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg flex items-center space-x-2">
                  <CheckCircle size={20} />
                  <span>Message sent successfully! We'll contact you soon.</span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                  Failed to send message. Please try again or call us directly.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-secondary mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-secondary mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-secondary mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-secondary mb-2">
                      Service Needed
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-secondary mb-2">
                      Project Location
                    </label>
                    <select
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Select location</option>
                      {areas.map((area) => (
                        <option key={area} value={area}>
                          {area}
                        </option>
                      ))}
                      <option value="other">Other (please specify in message)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-secondary mb-2">
                    Project Description *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Please describe your project requirements..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-accent text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="font-heading text-xl font-bold text-primary mb-6">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="text-accent" size={20} />
                    <div>
                      <p className="font-medium text-secondary">Phone</p>
                      <a href="tel:0719334063" className="text-primary hover:text-accent">
                        071 933 4063
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="text-accent" size={20} />
                    <div>
                      <p className="font-medium text-secondary">Email</p>
                      <a href="mailto:meshackdlamini32@gmail.com" className="text-primary hover:text-accent">
                        meshackdlamini32@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="text-accent" size={20} />
                    <div>
                      <p className="font-medium text-secondary">Business Hours</p>
                      <p className="text-secondary text-sm">
                        Mon - Fri: 7:00 AM - 6:00 PM<br />
                        Sat: 8:00 AM - 4:00 PM<br />
                        Sun: Emergency calls only
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="text-accent" size={20} />
                    <div>
                      <p className="font-medium text-secondary">Service Areas</p>
                      <p className="text-secondary text-sm">
                        All Gauteng Province areas
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Call-Out Fee Notice */}
              <div className="bg-yellow-50 border-2 border-yellow-400 rounded-lg p-6">
                <h3 className="font-heading text-lg font-bold text-yellow-800 mb-3 flex items-center space-x-2">
                  <span>💰</span>
                  <span>Call-Out Fee Information</span>
                </h3>
                <p className="text-yellow-900 font-semibold mb-2">
                  R400 Call-Out Fee applies to all consultations and quotes
                </p>
                <p className="text-yellow-800 text-sm">
                  This fee covers our professional assessment, site visit, detailed quotation, and expert recommendations for your project.
                </p>
              </div>

              {/* Emergency Services */}
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 className="font-heading text-lg font-bold text-red-800 mb-3">
                  24/7 Emergency Services
                </h3>
                <p className="text-red-700 mb-4">
                  For urgent construction emergencies like burst pipes, electrical issues, or structural damage.
                </p>
                <a
                  href="tel:0719334063"
                  className="inline-flex items-center space-x-2 bg-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors"
                >
                  <Phone size={18} />
                  <span>Emergency Line: 071 933 4063</span>
                </a>
              </div>

              {/* Why Choose Us */}
              <div className="bg-lightBackground rounded-lg p-6">
                <h3 className="font-heading text-lg font-bold text-primary mb-4">
                  Why Choose MD Builders?
                </h3>
                <ul className="space-y-2 text-secondary">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="text-accent" size={16} />
                    <span>Free, no-obligation quotes</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="text-accent" size={16} />
                    <span>15+ years of experience</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="text-accent" size={16} />
                    <span>Fully licensed and insured</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="text-accent" size={16} />
                    <span>Quality workmanship guaranteed</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="text-accent" size={16} />
                    <span>Competitive pricing</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="text-accent" size={16} />
                    <span>Professional, reliable team</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service Areas Section */}
      <section className="py-20 bg-lightBackground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Service Areas
            </h2>
            <p className="text-secondary text-lg max-w-2xl mx-auto">
              We proudly serve residential and commercial clients throughout Gauteng Province
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 text-center">
            {areas.map((area) => (
              <div key={area} className="bg-white rounded-lg p-4 shadow-md">
                <MapPin className="text-accent mx-auto mb-2" size={24} />
                <p className="font-medium text-secondary">{area}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-secondary mb-4">
              Don't see your area listed? Contact us - we may still be able to help!
            </p>
            <a
              href={`/${lang}/areas`}
              className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              View All Service Areas
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}