'use client'

import { useState } from 'react'
import { Calculator, TrendingUp, MapPin, Clock, ArrowRight } from 'lucide-react'
import Link from 'next/link'

interface CostEstimate {
  min: number
  max: number
  description: string
}

export default function CostCalculator() {
  const [serviceType, setServiceType] = useState('')
  const [projectSize, setProjectSize] = useState('')
  const [location, setLocation] = useState('')
  const [urgency, setUrgency] = useState('standard')
  const [estimate, setEstimate] = useState<CostEstimate | null>(null)

  // Service types with base costs (in ZAR)
  const services = [
    { value: 'building', label: 'New Building Construction', baseMin: 8000, baseMax: 15000 },
    { value: 'renovation', label: 'Home Renovation', baseMin: 5000, baseMax: 12000 },
    { value: 'roofing', label: 'Roofing Services', baseMin: 3000, baseMax: 8000 },
    { value: 'paving', label: 'Paving & Driveways', baseMin: 400, baseMax: 800 },
    { value: 'painting', label: 'Painting Services', baseMin: 2500, baseMax: 6000 },
    { value: 'plumbing', label: 'Plumbing Work', baseMin: 1500, baseMax: 5000 },
    { value: 'tiling', label: 'Tiling Services', baseMin: 200, baseMax: 500 },
    { value: 'waterproofing', label: 'Waterproofing', baseMin: 3000, baseMax: 7000 },
    { value: 'extensions', label: 'Home Extensions', baseMin: 10000, baseMax: 20000 },
    { value: 'landscaping', label: 'Landscaping', baseMin: 2000, baseMax: 8000 },
  ]

  // Project size multipliers
  const sizes = [
    { value: 'small', label: 'Small (< 50m²)', multiplier: 0.7 },
    { value: 'medium', label: 'Medium (50-150m²)', multiplier: 1.0 },
    { value: 'large', label: 'Large (150-300m²)', multiplier: 1.5 },
    { value: 'xlarge', label: 'Extra Large (> 300m²)', multiplier: 2.0 },
  ]

  // Gauteng locations
  const locations = [
    'Johannesburg CBD', 'Sandton', 'Randburg', 'Fourways', 'Midrand',
    'Bryanston', 'Rosebank', 'Melville', 'Soweto', 'Alexandra',
    'Pretoria', 'Centurion', 'Alberton', 'Boksburg', 'Germiston',
    'Edenvale', 'Kempton Park', 'Springs', 'Krugersdorp', 'Roodepoort',
    'Bedfordview', 'Benoni', 'Lanseria', 'Riversands', 'Linden'
  ]

  const calculateEstimate = () => {
    if (!serviceType || !projectSize) {
      return
    }

    const service = services.find(s => s.value === serviceType)
    const size = sizes.find(s => s.value === projectSize)

    if (!service || !size) return

    const callOutFee = 400

    let min = service.baseMin * size.multiplier
    let max = service.baseMax * size.multiplier

    // Apply urgency multiplier
    if (urgency === 'urgent') {
      min *= 1.2
      max *= 1.2
    }

    // Add call-out fee
    min += callOutFee
    max += callOutFee

    // Format the estimate
    const formattedMin = new Intl.NumberFormat('en-ZA', {
      style: 'currency',
      currency: 'ZAR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(min)

    const formattedMax = new Intl.NumberFormat('en-ZA', {
      style: 'currency',
      currency: 'ZAR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(max)

    setEstimate({
      min,
      max,
      description: `${formattedMin} - ${formattedMax}`
    })
  }

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault()
    calculateEstimate()
  }

  return (
    <div className="bg-white rounded-xl shadow-xl p-6 md:p-8">
      {/* Header */}
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
          <Calculator className="text-secondary" size={28} />
        </div>
        <div>
          <h2 className="font-heading font-bold text-2xl text-secondary">
            Cost Calculator
          </h2>
          <p className="text-sm text-gray-600">
            Get an instant estimate for your project
          </p>
        </div>
      </div>

      <form onSubmit={handleCalculate} className="space-y-6">
        {/* Service Type */}
        <div>
          <label className="block text-sm font-semibold text-secondary mb-2">
            Service Type *
          </label>
          <select
            value={serviceType}
            onChange={(e) => setServiceType(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
            required
          >
            <option value="">Select a service...</option>
            {services.map((service) => (
              <option key={service.value} value={service.value}>
                {service.label}
              </option>
            ))}
          </select>
        </div>

        {/* Project Size */}
        <div>
          <label className="block text-sm font-semibold text-secondary mb-2">
            Project Size *
          </label>
          <select
            value={projectSize}
            onChange={(e) => setProjectSize(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
            required
          >
            <option value="">Select project size...</option>
            {sizes.map((size) => (
              <option key={size.value} value={size.value}>
                {size.label}
              </option>
            ))}
          </select>
        </div>

        {/* Location */}
        <div>
          <label className="block text-sm font-semibold text-secondary mb-2 flex items-center space-x-2">
            <MapPin size={16} />
            <span>Location (Optional)</span>
          </label>
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
          >
            <option value="">Select your area...</option>
            {locations.map((loc) => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </select>
        </div>

        {/* Urgency */}
        <div>
          <label className="block text-sm font-semibold text-secondary mb-2 flex items-center space-x-2">
            <Clock size={16} />
            <span>Project Urgency</span>
          </label>
          <div className="grid grid-cols-2 gap-4">
            <button
              type="button"
              onClick={() => setUrgency('standard')}
              className={`px-4 py-3 rounded-lg border-2 transition-all font-medium ${
                urgency === 'standard'
                  ? 'border-accent bg-accent/10 text-secondary'
                  : 'border-gray-300 text-gray-600 hover:border-accent/50'
              }`}
            >
              Standard
            </button>
            <button
              type="button"
              onClick={() => setUrgency('urgent')}
              className={`px-4 py-3 rounded-lg border-2 transition-all font-medium ${
                urgency === 'urgent'
                  ? 'border-accent bg-accent/10 text-secondary'
                  : 'border-gray-300 text-gray-600 hover:border-accent/50'
              }`}
            >
              Urgent (+20%)
            </button>
          </div>
        </div>

        {/* Calculate Button */}
        <button
          type="submit"
          className="w-full bg-primary hover:bg-orange-700 text-white px-6 py-4 rounded-lg font-semibold transition-all flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
        >
          <Calculator size={20} />
          <span>Calculate Estimate</span>
        </button>
      </form>

      {/* Estimate Result */}
      {estimate && (
        <div className="mt-6 p-6 bg-gradient-to-br from-accent/20 to-yellow-100 rounded-lg border-2 border-accent animate-slide-up">
          <div className="flex items-center space-x-2 mb-3">
            <TrendingUp className="text-accent" size={24} />
            <h3 className="font-heading font-bold text-xl text-secondary">
              Estimated Cost Range
            </h3>
          </div>
          <p className="text-3xl font-bold text-secondary mb-4">
            {estimate.description}
          </p>
          <div className="space-y-2 text-sm text-gray-700 mb-4">
            <p>✓ Based on {services.find(s => s.value === serviceType)?.label}</p>
            <p>✓ {sizes.find(s => s.value === projectSize)?.label} project</p>
            {location && <p>✓ Location: {location}</p>}
            <p>✓ {urgency === 'urgent' ? 'Urgent timeline' : 'Standard timeline'}</p>
            <p className="font-semibold text-yellow-800">✓ Includes R400 call-out fee</p>
          </div>
          <div className="bg-white/80 rounded-lg p-4 mb-4">
            <p className="text-xs text-gray-600 mb-2">
              <strong>Note:</strong> This is an estimated range based on typical projects. 
              Final costs may vary depending on specific requirements, materials, and site conditions.
            </p>
          </div>
          <Link
            href="/en/contact"
            className="w-full bg-secondary hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold transition-all flex items-center justify-center space-x-2"
          >
            <span>Get Accurate Quote</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      )}

      {/* Trust Indicators */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-2xl font-bold text-accent">500+</p>
            <p className="text-xs text-gray-600">Projects</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-accent">15+</p>
            <p className="text-xs text-gray-600">Years</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-accent">4.9★</p>
            <p className="text-xs text-gray-600">Rating</p>
          </div>
        </div>
      </div>
    </div>
  )
}