import React from 'react'
import { Metadata } from 'next'
import { Locale } from '@/i18n.config'
import CostCalculator from '@/components/cost-calculator'
import { Calculator, CheckCircle, Shield, Clock, Award } from 'lucide-react'
import Link from 'next/link'

interface CostCalculatorPageProps {
  params: { lang: Locale }
}

export const metadata: Metadata = {
  title: 'Cost Calculator - MD Builders | Instant Construction Estimates',
  description: 'Get instant cost estimates for your construction project in Gauteng. Free online calculator for building, renovation, roofing, paving, and more. Accurate pricing for Johannesburg and surrounding areas.',
  keywords: 'construction cost calculator, building estimate, renovation cost, Gauteng construction prices, Johannesburg builder quotes, instant estimate',
}

export default function CostCalculatorPage({ params: { lang } }: CostCalculatorPageProps) {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
              <Calculator className="text-primary" size={32} />
            </div>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Construction Cost Calculator
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-4">
            Get an instant estimate for your construction project in Gauteng
          </p>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Our free calculator provides accurate cost ranges based on 15+ years of experience and 500+ completed projects
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 bg-lightBackground">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl font-bold text-center text-secondary mb-12">
            How Our Calculator Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-secondary">1</span>
              </div>
              <h3 className="font-semibold text-secondary mb-2">Select Service</h3>
              <p className="text-sm text-gray-600">Choose your construction service type</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-secondary">2</span>
              </div>
              <h3 className="font-semibold text-secondary mb-2">Project Details</h3>
              <p className="text-sm text-gray-600">Enter size, location, and urgency</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-secondary">3</span>
              </div>
              <h3 className="font-semibold text-secondary mb-2">Get Estimate</h3>
              <p className="text-sm text-gray-600">Receive instant cost range</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-secondary">4</span>
              </div>
              <h3 className="font-semibold text-secondary mb-2">Request Quote</h3>
              <p className="text-sm text-gray-600">Get detailed accurate pricing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <CostCalculator />
          </div>
        </div>
      </section>

      {/* Why Use Our Calculator */}
      <section className="py-16 bg-lightBackground">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl font-bold text-center text-secondary mb-12">
            Why Use Our Cost Calculator?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-accent" size={32} />
              </div>
              <h3 className="font-semibold text-secondary mb-2">Instant Results</h3>
              <p className="text-sm text-gray-600">
                Get cost estimates in seconds, no waiting required
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="text-accent" size={32} />
              </div>
              <h3 className="font-semibold text-secondary mb-2">Accurate Pricing</h3>
              <p className="text-sm text-gray-600">
                Based on real project data and current market rates
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-accent" size={32} />
              </div>
              <h3 className="font-semibold text-secondary mb-2">No Obligation</h3>
              <p className="text-sm text-gray-600">
                Free to use with no commitment or contact required
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-accent" size={32} />
              </div>
              <h3 className="font-semibold text-secondary mb-2">Expert Based</h3>
              <p className="text-sm text-gray-600">
                Calculations from 15+ years of construction experience
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Important Information */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl font-bold text-center text-secondary mb-8">
              Understanding Your Estimate
            </h2>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg text-secondary mb-3 flex items-center">
                    <CheckCircle className="text-accent mr-2" size={20} />
                    What's Included in the Estimate
                  </h3>
                  <ul className="space-y-2 text-gray-700 ml-7">
                    <li>• Labor costs based on project complexity</li>
                    <li>• Standard materials and supplies</li>
                    <li>• Basic equipment and tools</li>
                    <li>• Project management and supervision</li>
                    <li>• Cleanup and waste removal</li>
                  </ul>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <h3 className="font-semibold text-lg text-secondary mb-3 flex items-center">
                    <Calculator className="text-accent mr-2" size={20} />
                    Factors That May Affect Final Cost
                  </h3>
                  <ul className="space-y-2 text-gray-700 ml-7">
                    <li>• Specific material choices (premium vs. standard)</li>
                    <li>• Site accessibility and conditions</li>
                    <li>• Structural complications discovered during work</li>
                    <li>• Custom design requirements</li>
                    <li>• Permits and compliance requirements</li>
                    <li>• Seasonal demand and material availability</li>
                  </ul>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <h3 className="font-semibold text-lg text-secondary mb-3">
                    Get an Accurate Quote
                  </h3>
                  <p className="text-gray-700 mb-4">
                    While our calculator provides a reliable estimate, every project is unique. 
                    For the most accurate pricing tailored to your specific needs, we recommend 
                    requesting a detailed quote. Our team will:
                  </p>
                  <ul className="space-y-2 text-gray-700 ml-4 mb-6">
                    <li>✓ Visit your site for proper assessment</li>
                    <li>✓ Discuss your specific requirements and preferences</li>
                    <li>✓ Provide detailed breakdown of all costs</li>
                    <li>✓ Offer professional recommendations</li>
                    <li>✓ Answer all your questions</li>
                  </ul>
                  <Link
                    href={`/${lang}/contact`}
                    className="inline-block bg-primary hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Request Free Detailed Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 bg-lightBackground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-2xl font-bold text-center text-secondary mb-8">
              Why Choose MD Builders?
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-3xl font-bold text-accent mb-2">15+</div>
                <div className="text-sm text-secondary">Years Experience</div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-3xl font-bold text-accent mb-2">500+</div>
                <div className="text-sm text-secondary">Projects Done</div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-3xl font-bold text-accent mb-2">4.9★</div>
                <div className="text-sm text-secondary">Client Rating</div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-3xl font-bold text-accent mb-2">100%</div>
                <div className="text-sm text-secondary">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get a detailed, accurate quote from our experienced team
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/${lang}/contact`}
              className="inline-block bg-accent hover:bg-yellow-500 text-secondary px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Request Free Quote
            </Link>
            <a
              href="tel:0719334063"
              className="inline-block border-2 border-white hover:bg-white hover:text-primary text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Call: 071 933 4063
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}