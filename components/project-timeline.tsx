'use client'

import { useState } from 'react'
import { CheckCircle2, Circle, Clock, Calendar, Users, FileText, Hammer, Sparkles } from 'lucide-react'

interface TimelineStep {
  id: string
  title: string
  description: string
  duration: string
  icon: 'consultation' | 'planning' | 'preparation' | 'construction' | 'finishing' | 'completion'
  details: string[]
}

interface ProjectTimelineProps {
  dict: any
  lang: string
  serviceType?: string
}

export default function ProjectTimeline({ dict, lang, serviceType = 'general' }: ProjectTimelineProps) {
  const [activeStep, setActiveStep] = useState<string | null>(null)

  const getIcon = (iconType: string) => {
    switch (iconType) {
      case 'consultation':
        return <Users className="w-6 h-6" />
      case 'planning':
        return <FileText className="w-6 h-6" />
      case 'preparation':
        return <Calendar className="w-6 h-6" />
      case 'construction':
        return <Hammer className="w-6 h-6" />
      case 'finishing':
        return <Sparkles className="w-6 h-6" />
      case 'completion':
        return <CheckCircle2 className="w-6 h-6" />
      default:
        return <Circle className="w-6 h-6" />
    }
  }

  // Timeline steps - can be customized based on service type
  const timelineSteps: TimelineStep[] = [
    {
      id: '1',
      title: dict?.timeline?.step1Title || 'Initial Consultation',
      description: dict?.timeline?.step1Desc || 'Free on-site visit and project assessment',
      duration: '1-2 days',
      icon: 'consultation',
      details: [
        'Site inspection and measurements',
        'Discuss your vision and requirements',
        'Assess structural conditions',
        'Provide expert recommendations',
        'Answer all your questions'
      ]
    },
    {
      id: '2',
      title: dict?.timeline?.step2Title || 'Planning & Design',
      description: dict?.timeline?.step2Desc || 'Detailed project planning and quotation',
      duration: '3-5 days',
      icon: 'planning',
      details: [
        'Create detailed project plan',
        'Prepare accurate cost estimate',
        'Select materials and finishes',
        'Obtain necessary permits',
        'Finalize timeline and schedule'
      ]
    },
    {
      id: '3',
      title: dict?.timeline?.step3Title || 'Preparation',
      description: dict?.timeline?.step3Desc || 'Site preparation and material procurement',
      duration: '2-3 days',
      icon: 'preparation',
      details: [
        'Order and deliver materials',
        'Set up work area',
        'Protect existing structures',
        'Coordinate with suppliers',
        'Brief the construction team'
      ]
    },
    {
      id: '4',
      title: dict?.timeline?.step4Title || 'Construction',
      description: dict?.timeline?.step4Desc || 'Professional execution of the project',
      duration: 'Varies by project',
      icon: 'construction',
      details: [
        'Execute work according to plan',
        'Daily progress updates',
        'Quality control checks',
        'Address any issues promptly',
        'Maintain clean work site'
      ]
    },
    {
      id: '5',
      title: dict?.timeline?.step5Title || 'Finishing Touches',
      description: dict?.timeline?.step5Desc || 'Final details and quality assurance',
      duration: '1-2 days',
      icon: 'finishing',
      details: [
        'Apply final finishes',
        'Clean and polish',
        'Install fixtures and fittings',
        'Conduct quality inspection',
        'Make final adjustments'
      ]
    },
    {
      id: '6',
      title: dict?.timeline?.step6Title || 'Project Completion',
      description: dict?.timeline?.step6Desc || 'Final walkthrough and handover',
      duration: '1 day',
      icon: 'completion',
      details: [
        'Final walkthrough with client',
        'Address any concerns',
        'Provide maintenance guidelines',
        'Issue warranty documentation',
        'Follow-up support'
      ]
    }
  ]

  const totalDuration = dict?.timeline?.totalDuration || 'Typical project duration: 2-4 weeks'

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {dict?.timeline?.title || 'Our Construction Process'}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-2">
            {dict?.timeline?.subtitle || 'A transparent, step-by-step approach to bringing your project to life'}
          </p>
          <div className="flex items-center justify-center gap-2 text-orange-600 font-semibold">
            <Clock className="w-5 h-5" />
            <span>{totalDuration}</span>
          </div>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block max-w-6xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-orange-200 via-orange-400 to-orange-600" />

            {/* Timeline Steps */}
            <div className="grid grid-cols-6 gap-4">
              {timelineSteps.map((step, index) => (
                <div key={step.id} className="relative">
                  {/* Step Circle */}
                  <div className="flex justify-center mb-4">
                    <button
                      onClick={() => setActiveStep(activeStep === step.id ? null : step.id)}
                      className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
                        activeStep === step.id
                          ? 'bg-orange-600 text-white scale-110 shadow-lg'
                          : 'bg-white text-orange-600 border-4 border-orange-400 hover:scale-105'
                      }`}
                      aria-label={`View details for ${step.title}`}
                    >
                      {getIcon(step.icon)}
                    </button>
                  </div>

                  {/* Step Content */}
                  <div className="text-center">
                    <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow min-h-[140px]">
                      <div className="text-sm font-bold text-orange-600 mb-2">
                        Step {index + 1}
                      </div>
                      <h3 className="font-bold text-gray-900 mb-2 text-sm">
                        {step.title}
                      </h3>
                      <p className="text-xs text-gray-600 mb-2">
                        {step.description}
                      </p>
                      <div className="flex items-center justify-center gap-1 text-xs text-orange-600 font-semibold">
                        <Clock className="w-3 h-3" />
                        <span>{step.duration}</span>
                      </div>
                    </div>
                  </div>

                  {/* Expanded Details */}
                  {activeStep === step.id && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-64 bg-white rounded-lg shadow-xl p-4 z-10 border-2 border-orange-400">
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-t-2 border-l-2 border-orange-400 transform rotate-45" />
                      <h4 className="font-bold text-gray-900 mb-3">What We Do:</h4>
                      <ul className="space-y-2">
                        {step.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                            <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden max-w-2xl mx-auto">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-200 via-orange-400 to-orange-600" />

            {/* Timeline Steps */}
            <div className="space-y-8">
              {timelineSteps.map((step, index) => (
                <div key={step.id} className="relative pl-20">
                  {/* Step Circle */}
                  <button
                    onClick={() => setActiveStep(activeStep === step.id ? null : step.id)}
                    className={`absolute left-0 w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
                      activeStep === step.id
                        ? 'bg-orange-600 text-white scale-110 shadow-lg'
                        : 'bg-white text-orange-600 border-4 border-orange-400'
                    }`}
                    aria-label={`View details for ${step.title}`}
                  >
                    {getIcon(step.icon)}
                  </button>

                  {/* Step Content */}
                  <div className="bg-white rounded-lg p-4 shadow-md">
                    <div className="text-sm font-bold text-orange-600 mb-2">
                      Step {index + 1}
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">
                      {step.description}
                    </p>
                    <div className="flex items-center gap-1 text-sm text-orange-600 font-semibold mb-3">
                      <Clock className="w-4 h-4" />
                      <span>{step.duration}</span>
                    </div>

                    {/* Expanded Details */}
                    {activeStep === step.id && (
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <h4 className="font-bold text-gray-900 mb-3">What We Do:</h4>
                        <ul className="space-y-2">
                          {step.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                              <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-white rounded-2xl shadow-lg p-8 md:p-12 max-w-4xl mx-auto border-2 border-orange-100">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            {dict?.timeline?.ctaTitle || 'Ready To Start Your Project?'}
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            {dict?.timeline?.ctaText || 'Our experienced team is ready to guide you through every step of the construction process'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`/${lang}/contact`}
              className="inline-block bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors shadow-lg"
            >
              {dict?.timeline?.scheduleButton || 'Schedule Free Consultation'}
            </a>
            <a
              href={`/${lang}/cost-calculator`}
              className="inline-block bg-white text-orange-600 border-2 border-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors"
            >
              {dict?.timeline?.calculateButton || 'Calculate Project Cost'}
            </a>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">500+</div>
            <div className="text-sm text-gray-600">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">15+</div>
            <div className="text-sm text-gray-600">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">4.9★</div>
            <div className="text-sm text-gray-600">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
            <div className="text-sm text-gray-600">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  )
}