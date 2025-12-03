'use client'

import { useState, useEffect } from 'react'
import { Calculator, TrendingUp, MapPin, Clock, ArrowRight, Sparkles, DollarSign, Info, CheckCircle2, AlertCircle } from 'lucide-react'
import Link from 'next/link'
import { Locale } from '@/i18n.config'

interface CostEstimate {
  min: number
  max: number
  description: string
  breakdown: {
    materials: number
    labor: number
    callout: number
    urgency: number
  }
}

interface CostCalculatorProps {
  lang: Locale
  dict: any
}

export default function EnhancedCostCalculator({ lang, dict }: CostCalculatorProps) {
  const [serviceType, setServiceType] = useState('')
  const [projectSize, setProjectSize] = useState('')
  const [location, setLocation] = useState('')
  const [urgency, setUrgency] = useState('standard')
  const [materialQuality, setMaterialQuality] = useState('standard')
  const [estimate, setEstimate] = useState<CostEstimate | null>(null)
  const [showComparison, setShowComparison] = useState(false)
  const [calculationProgress, setCalculationProgress] = useState(0)

  const t = (dict as any).pages?.costCalculator?.calculator || {}

  // Service types with base costs (in ZAR)
  const services = [
    { value: 'building', label: t.services?.building || 'Building & Construction', baseMin: 8000, baseMax: 15000, icon: '🏗️' },
    { value: 'renovation', label: t.services?.renovation || 'Renovation', baseMin: 5000, baseMax: 12000, icon: '🔨' },
    { value: 'roofing', label: t.services?.roofing || 'Roofing', baseMin: 3000, baseMax: 8000, icon: '🏠' },
    { value: 'paving', label: t.services?.paving || 'Paving', baseMin: 400, baseMax: 800, icon: '🧱' },
    { value: 'painting', label: t.services?.painting || 'Painting', baseMin: 2500, baseMax: 6000, icon: '🎨' },
    { value: 'plumbing', label: t.services?.plumbing || 'Plumbing', baseMin: 1500, baseMax: 5000, icon: '🚰' },
    { value: 'tiling', label: t.services?.tiling || 'Tiling', baseMin: 200, baseMax: 500, icon: '⬜' },
    { value: 'waterproofing', label: t.services?.waterproofing || 'Waterproofing', baseMin: 3000, baseMax: 7000, icon: '💧' },
    { value: 'extensions', label: t.services?.extensions || 'Extensions', baseMin: 10000, baseMax: 20000, icon: '📐' },
    { value: 'landscaping', label: t.services?.landscaping || 'Landscaping', baseMin: 2000, baseMax: 8000, icon: '🌳' },
  ]

  // Project size multipliers
  const sizes = [
    { value: 'small', label: t.sizes?.small || 'Small (1-20m²)', multiplier: 0.7, description: 'Single room or small area' },
    { value: 'medium', label: t.sizes?.medium || 'Medium (20-50m²)', multiplier: 1.0, description: 'Multiple rooms or medium area' },
    { value: 'large', label: t.sizes?.large || 'Large (50-100m²)', multiplier: 1.5, description: 'Whole floor or large area' },
    { value: 'xlarge', label: t.sizes?.xlarge || 'Extra Large (100m²+)', multiplier: 2.0, description: 'Entire house or very large area' },
  ]

  // Material quality options
  const materialQualities = [
    { value: 'economy', label: 'Economy', multiplier: 0.8, description: 'Budget-friendly materials' },
    { value: 'standard', label: 'Standard', multiplier: 1.0, description: 'Quality materials, best value' },
    { value: 'premium', label: 'Premium', multiplier: 1.3, description: 'High-end materials' },
    { value: 'luxury', label: 'Luxury', multiplier: 1.6, description: 'Top-tier luxury materials' },
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

    // Simulate calculation progress
    setCalculationProgress(0)
    const progressInterval = setInterval(() => {
      setCalculationProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + 20
      })
    }, 100)

    const service = services.find(s => s.value === serviceType)
    const size = sizes.find(s => s.value === projectSize)
    const quality = materialQualities.find(q => q.value === materialQuality)

    if (!service || !size || !quality) return

    const callOutFee = 400

    // Calculate base cost
    let baseMin = service.baseMin * size.multiplier * quality.multiplier
    let baseMax = service.baseMax * size.multiplier * quality.multiplier

    // Calculate material and labor split (typically 60% materials, 40% labor)
    const materialsMin = baseMin * 0.6
    const materialsMax = baseMax * 0.6
    const laborMin = baseMin * 0.4
    const laborMax = baseMax * 0.4

    // Apply urgency multiplier
    let urgencyFee = 0
    if (urgency === 'urgent') {
      urgencyFee = (baseMin + baseMax) / 2 * 0.2
      baseMin *= 1.2
      baseMax *= 1.2
    }

    // Add call-out fee
    const totalMin = baseMin + callOutFee
    const totalMax = baseMax + callOutFee

    // Format the estimate
    const formattedMin = new Intl.NumberFormat('en-ZA', {
      style: 'currency',
      currency: 'ZAR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(totalMin)

    const formattedMax = new Intl.NumberFormat('en-ZA', {
      style: 'currency',
      currency: 'ZAR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(totalMax)

    setTimeout(() => {
      setEstimate({
        min: totalMin,
        max: totalMax,
        description: `${formattedMin} - ${formattedMax}`,
        breakdown: {
          materials: (materialsMin + materialsMax) / 2,
          labor: (laborMin + laborMax) / 2,
          callout: callOutFee,
          urgency: urgencyFee
        }
      })
    }, 500)
  }

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault()
    calculateEstimate()
  }

  // Auto-calculate when all required fields are filled
  useEffect(() => {
    if (serviceType && projectSize) {
      calculateEstimate()
    }
  }, [serviceType, projectSize, materialQuality, urgency])

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-ZA', {
      style: 'currency',
      currency: 'ZAR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  return (
    <div className="bg-white rounded-xl shadow-xl p-6 md:p-8">
      {/* Header */}
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
          <Calculator className="text-orange-600" size={28} />
        </div>
        <div>
          <h2 className="font-bold text-2xl text-gray-900">
            {t.header || 'Cost Calculator'}
          </h2>
          <p className="text-sm text-gray-600">
            {t.subheader || 'Get an instant estimate for your project'}
          </p>
        </div>
      </div>

      <form onSubmit={handleCalculate} className="space-y-6">
        {/* Service Type - Visual Grid */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-3">
            {t.serviceType || 'Service Type'} *
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {services.map((service) => (
              <button
                key={service.value}
                type="button"
                onClick={() => setServiceType(service.value)}
                className={`p-4 rounded-lg border-2 transition-all text-center ${
                  serviceType === service.value
                    ? 'border-orange-600 bg-orange-50 shadow-md'
                    : 'border-gray-200 hover:border-orange-300 hover:bg-gray-50'
                }`}
              >
                <div className="text-3xl mb-2">{service.icon}</div>
                <div className="text-xs font-medium text-gray-700">{service.label}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Project Size - Visual Cards */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-3">
            {t.projectSize || 'Project Size'} *
          </label>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {sizes.map((size) => (
              <button
                key={size.value}
                type="button"
                onClick={() => setProjectSize(size.value)}
                className={`p-4 rounded-lg border-2 transition-all text-left ${
                  projectSize === size.value
                    ? 'border-orange-600 bg-orange-50 shadow-md'
                    : 'border-gray-200 hover:border-orange-300 hover:bg-gray-50'
                }`}
              >
                <div className="font-bold text-gray-900 mb-1">{size.label}</div>
                <div className="text-xs text-gray-600">{size.description}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Material Quality - Premium Feature */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-orange-600" />
            <span>{t.materialQuality || 'Material Quality'}</span>
          </label>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {materialQualities.map((quality) => (
              <button
                key={quality.value}
                type="button"
                onClick={() => setMaterialQuality(quality.value)}
                className={`p-4 rounded-lg border-2 transition-all text-left relative ${
                  materialQuality === quality.value
                    ? 'border-orange-600 bg-orange-50 shadow-md'
                    : 'border-gray-200 hover:border-orange-300 hover:bg-gray-50'
                }`}
              >
                {quality.value === 'luxury' && (
                  <div className="absolute -top-2 -right-2 bg-yellow-400 text-xs font-bold px-2 py-1 rounded-full">
                    ⭐
                  </div>
                )}
                <div className="font-bold text-gray-900 mb-1">{quality.label}</div>
                <div className="text-xs text-gray-600">{quality.description}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Location */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2 flex items-center space-x-2">
            <MapPin size={16} className="text-orange-600" />
            <span>{t.location || 'Location'}</span>
          </label>
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
          >
            <option value="">{t.locationPlaceholder || 'Select your location'}</option>
            {locations.map((loc) => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </select>
        </div>

        {/* Urgency */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2 flex items-center space-x-2">
            <Clock size={16} className="text-orange-600" />
            <span>{t.urgency || 'Timeline'}</span>
          </label>
          <div className="grid grid-cols-2 gap-4">
            <button
              type="button"
              onClick={() => setUrgency('standard')}
              className={`px-4 py-3 rounded-lg border-2 transition-all font-medium ${
                urgency === 'standard'
                  ? 'border-orange-600 bg-orange-50 text-gray-900'
                  : 'border-gray-200 text-gray-600 hover:border-orange-300'
              }`}
            >
              <div className="font-bold mb-1">{t.standard || 'Standard'}</div>
              <div className="text-xs">2-4 weeks</div>
            </button>
            <button
              type="button"
              onClick={() => setUrgency('urgent')}
              className={`px-4 py-3 rounded-lg border-2 transition-all font-medium ${
                urgency === 'urgent'
                  ? 'border-orange-600 bg-orange-50 text-gray-900'
                  : 'border-gray-200 text-gray-600 hover:border-orange-300'
              }`}
            >
              <div className="font-bold mb-1 flex items-center gap-1">
                <AlertCircle className="w-4 h-4" />
                {t.urgent || 'Urgent'}
              </div>
              <div className="text-xs">Rush service (+20%)</div>
            </button>
          </div>
        </div>
      </form>

      {/* Calculation Progress */}
      {calculationProgress > 0 && calculationProgress < 100 && (
        <div className="mt-6">
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-orange-500 to-orange-600 transition-all duration-300"
              style={{ width: `${calculationProgress}%` }}
            />
          </div>
        </div>
      )}

      {/* Estimate Result */}
      {estimate && calculationProgress === 100 && (
        <div className="mt-6 space-y-4">
          {/* Main Estimate */}
          <div className="p-6 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-lg border-2 border-orange-400">
            <div className="flex items-center space-x-2 mb-3">
              <TrendingUp className="text-orange-600" size={24} />
              <h3 className="font-bold text-xl text-gray-900">
                {t.estimatedCost || 'Estimated Cost'}
              </h3>
            </div>
            <p className="text-4xl font-bold text-gray-900 mb-4">
              {estimate.description}
            </p>

            {/* Cost Breakdown */}
            <div className="bg-white/80 rounded-lg p-4 mb-4">
              <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <DollarSign className="w-4 h-4" />
                Cost Breakdown
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Materials:</span>
                  <span className="font-semibold">{formatCurrency(estimate.breakdown.materials)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Labor:</span>
                  <span className="font-semibold">{formatCurrency(estimate.breakdown.labor)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Call-out Fee:</span>
                  <span className="font-semibold">{formatCurrency(estimate.breakdown.callout)}</span>
                </div>
                {estimate.breakdown.urgency > 0 && (
                  <div className="flex justify-between text-orange-600">
                    <span>Urgency Fee:</span>
                    <span className="font-semibold">{formatCurrency(estimate.breakdown.urgency)}</span>
                  </div>
                )}
                <div className="border-t pt-2 flex justify-between font-bold text-gray-900">
                  <span>Total Range:</span>
                  <span>{estimate.description}</span>
                </div>
              </div>
            </div>

            {/* Project Details */}
            <div className="space-y-2 text-sm text-gray-700 mb-4">
              <p className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600" />
                {services.find(s => s.value === serviceType)?.label}
              </p>
              <p className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600" />
                {sizes.find(s => s.value === projectSize)?.label}
              </p>
              <p className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600" />
                {materialQualities.find(q => q.value === materialQuality)?.label} Materials
              </p>
              {location && (
                <p className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  Location: {location}
                </p>
              )}
            </div>

            {/* Info Note */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
              <div className="flex items-start gap-2">
                <Info className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-xs text-blue-900">
                  <strong>Note:</strong> This is an estimated range. Final costs may vary based on specific requirements, site conditions, and material availability. Request a detailed quote for accurate pricing.
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href={`/${lang}/contact`}
                className="flex-1 bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition-all flex items-center justify-center space-x-2 shadow-lg"
              >
                <span>{t.getAccurateQuote || 'Get Accurate Quote'}</span>
                <ArrowRight size={20} />
              </Link>
              <button
                onClick={() => setShowComparison(!showComparison)}
                className="flex-1 bg-white border-2 border-orange-600 text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-all"
              >
                {showComparison ? 'Hide' : 'Compare'} Options
              </button>
            </div>
          </div>

          {/* Comparison Table */}
          {showComparison && (
            <div className="bg-white rounded-lg border-2 border-gray-200 p-6">
              <h4 className="font-bold text-lg text-gray-900 mb-4">Material Quality Comparison</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2 px-3">Quality</th>
                      <th className="text-right py-2 px-3">Est. Cost</th>
                      <th className="text-left py-2 px-3">Features</th>
                    </tr>
                  </thead>
                  <tbody>
                    {materialQualities.map((quality) => {
                      const adjustedMin = (estimate.min / materialQualities.find(q => q.value === materialQuality)!.multiplier) * quality.multiplier
                      const adjustedMax = (estimate.max / materialQualities.find(q => q.value === materialQuality)!.multiplier) * quality.multiplier
                      return (
                        <tr key={quality.value} className={`border-b ${quality.value === materialQuality ? 'bg-orange-50' : ''}`}>
                          <td className="py-3 px-3 font-semibold">{quality.label}</td>
                          <td className="py-3 px-3 text-right">{formatCurrency((adjustedMin + adjustedMax) / 2)}</td>
                          <td className="py-3 px-3 text-gray-600">{quality.description}</td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Trust Indicators */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-2xl font-bold text-orange-600">500+</p>
            <p className="text-xs text-gray-600">{t.trustIndicators?.projects || 'Projects'}</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-orange-600">15+</p>
            <p className="text-xs text-gray-600">{t.trustIndicators?.years || 'Years'}</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-orange-600">4.9★</p>
            <p className="text-xs text-gray-600">{t.trustIndicators?.rating || 'Rating'}</p>
          </div>
        </div>
      </div>
    </div>
  )
}