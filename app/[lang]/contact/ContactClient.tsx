'use client'

import React, { useState } from 'react'
import { Locale } from '@/i18n.config'
import { Phone, Mail, Clock, MapPin, Send, CheckCircle } from 'lucide-react'

interface ContactClientProps {
  lang: Locale
  dict: any
}

export default function ContactClient({ lang, dict }: ContactClientProps) {
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
    dict.services?.items?.building?.name || 'Building',
    dict.extendedServices?.concrete?.name || 'Concrete Work',
    dict.services?.items?.paving?.name || 'Paving',
    dict.services?.items?.plumbing?.name || 'Plumbing',
    dict.extendedServices?.waterproofing?.name || 'Waterproofing',
    dict.extendedServices?.extensions?.name || 'Extensions',
    dict.extendedServices?.fencing?.name || 'Fencing',
    dict.extendedServices?.flooring?.name || 'Flooring',
    dict.extendedServices?.renovation?.name || 'Renovation',
    dict.extendedServices?.repairs?.name || 'Repairs',
    dict.extendedServices?.roofing?.name || 'Roofing',
    dict.extendedServices?.brickwork?.name || 'Brickwork',
    dict.services?.items?.painting?.name || 'Painting',
    dict.services?.items?.plastering?.name || 'Plastering',
    dict.extendedServices?.electrical?.name || 'Electrical'
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
            {dict.pages.contact.title}
          </h1>
          <div className="inline-block bg-yellow-400 text-secondary px-6 py-3 rounded-lg font-bold mb-6">
            <span className="text-lg">{dict.callOutBanner.message}</span>
          </div>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            {dict.pages.contact.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+27828688396"
              className="inline-flex items-center justify-center space-x-2 bg-white text-secondary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              <Phone size={20} />
              <span>{dict.contact.call}: {dict.contact.phone}</span>
            </a>
            <a
              href="https://wa.me/27828688396"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              <span>{dict.mobileCTA.whatsapp}</span>
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
                {dict.pages.contact.form.title}
              </h2>
              
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg flex items-center space-x-2">
                  <CheckCircle size={20} />
                  <span>{dict.pages.contact.form.success}</span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                  {dict.pages.contact.form.error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-secondary mb-2">
                      {dict.pages.contact.form.name} *
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
                      {dict.pages.contact.form.phone} *
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
                    {dict.pages.contact.form.email} *
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
                      {dict.pages.contact.form.service}
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">{dict.pages.costCalculator.calculator.serviceTypePlaceholder}</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-secondary mb-2">
                      {dict.pages.contact.form.location}
                    </label>
                    <select
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">{dict.pages.costCalculator.calculator.locationPlaceholder}</option>
                      {areas.map((area) => (
                        <option key={area} value={area}>
                          {area}
                        </option>
                      ))}
                      <option value="other">{dict.pages.contact.form.otherLocation}</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-secondary mb-2">
                    {dict.pages.contact.form.message} *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder={dict.pages.blog.searchPlaceholder}
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
                      <span>{dict.pages.contact.form.sending}</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>{dict.pages.contact.form.submit}</span>
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
                  {dict.pages.contact.info.title}
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="text-accent" size={20} />
                    <div>
                      <p className="font-medium text-secondary">{dict.contact.call}</p>
                      <div className="flex flex-col space-y-1">
                        <a href="tel:+27828688396" className="text-primary hover:text-accent font-semibold">
                          +27 82 868 8396
                        </a>
                        <a href="tel:+27815692985" className="text-primary hover:text-accent">
                          +27 81 569 2985
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="text-accent" size={20} />
                    <div>
                      <p className="font-medium text-secondary">{dict.pages.contact.info.emailLabel}</p>
                      <a href="mailto:info@sinqobileconstruction.co.za" className="text-primary hover:text-accent">
                        info@sinqobileconstruction.co.za
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="text-accent" size={20} />
                    <div>
                      <p className="font-medium text-secondary">{dict.footer.businessHours.weekdays.split(':')[0]}</p>
                      <p className="text-secondary text-sm whitespace-pre-line">
                        {dict.pages.contact.info.hours}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="text-accent" size={20} />
                    <div>
                      <p className="font-medium text-secondary">{dict.pages.contact.serviceAreas.title}</p>
                      <p className="text-secondary text-sm">
                        {dict.pages.contact.serviceAreas.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Call-Out Fee Notice */}
              <div className="bg-yellow-50 border-2 border-yellow-400 rounded-lg p-6">
                <h3 className="font-heading text-lg font-bold text-yellow-800 mb-3 flex items-center space-x-2">
                  <span>💰</span>
                  <span>{dict.pages.contact.callOutFee.title}</span>
                </h3>
                <p className="text-yellow-900 font-semibold mb-2">
                  {dict.callOutBanner.message}
                </p>
                <p className="text-yellow-800 text-sm">
                  {dict.pages.contact.callOutFee.description}
                </p>
              </div>

              {/* Emergency Services */}
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 className="font-heading text-lg font-bold text-red-800 mb-3">
                  {dict.pages.contact.info.emergency}
                </h3>
                <p className="text-red-700 mb-4">
                  {dict.pages.contact.info.emergencyDescription}
                </p>
                <a
                  href="tel:+27828688396"
                  className="inline-flex items-center space-x-2 bg-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors"
                >
                  <Phone size={18} />
                  <span>{dict.pages.contact.info.emergencyLine}: +27 82 868 8396</span>
                </a>
              </div>

              {/* Why Choose Us */}
              <div className="bg-lightBackground rounded-lg p-6">
                <h3 className="font-heading text-lg font-bold text-primary mb-4">
                  {dict.trustBadges.title}
                </h3>
                <ul className="space-y-2 text-secondary">
                  {dict.pages.services.whyChooseBenefits.slice(0, 6).map((benefit: string, index: number) => (
                    <li key={index} className="flex items-center space-x-2">
                      <CheckCircle className="text-accent" size={16} />
                      <span>{benefit}</span>
                    </li>
                  ))}
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
              {dict.pages.services.serviceAreasTitle}
            </h2>
            <p className="text-secondary text-lg max-w-2xl mx-auto">
              {dict.pages.contact.serviceAreas.description}
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
              {dict.pages.contact.serviceAreas.notListed}
            </p>
            <a
              href={`/${lang}/areas`}
              className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              {dict.pages.services.viewAllServiceAreas}
            </a>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
              {dict.googleBusinessCTA.findOnMaps}
            </h2>
            <p className="text-secondary text-lg max-w-2xl mx-auto">
              {dict.pages.contact.serviceAreas.description}
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d230445.34788086!2d27.8546!3d-26.2041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950c68f0406a51%3A0x238ac9d9b1d34041!2sJohannesburg%2C%20South%20Africa!5e0!3m2!1sen!2s!4v1234567890"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sinqobile Construction Service Area - Gauteng, South Africa"
                className="w-full"
              />
            </div>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <MapPin className="text-accent mx-auto mb-3" size={32} />
                <h3 className="font-bold text-lg text-primary mb-2">{dict.areaPage.coverageArea}</h3>
                <p className="text-secondary">{dict.areaPage.allSuburbsIncluding} Johannesburg, Pretoria, Sandton, Midrand {dict.areaPage.andMore}</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <Phone className="text-accent mx-auto mb-3" size={32} />
                <h3 className="font-bold text-lg text-primary mb-2">{dict.areaPage.callUs}</h3>
                <div className="flex flex-col space-y-1">
                  <a href="tel:+27828688396" className="text-accent hover:text-orange-700 font-semibold text-lg">
                    +27 82 868 8396
                  </a>
                  <a href="tel:+27815692985" className="text-accent hover:text-orange-700 font-semibold">
                    +27 81 569 2985
                  </a>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <Clock className="text-accent mx-auto mb-3" size={32} />
                <h3 className="font-bold text-lg text-primary mb-2">{dict.areaPage.businessHours}</h3>
                <p className="text-secondary text-sm">{dict.areaPage.monFri}<br/>{dict.areaPage.sat}<br/>{dict.areaPage.sun}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}