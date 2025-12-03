import React from 'react'
import { Shield, Award, Users, Clock, ThumbsUp, MapPin, Phone, Star } from 'lucide-react'
import { getDictionary } from '@/lib/dictionaries'

interface WhyChooseUsProps {
  dict: Awaited<ReturnType<typeof getDictionary>>
}

export default function WhyChooseUs({ dict }: WhyChooseUsProps) {
  const t = dict.whyChooseUs

  const reasons = [
    {
      icon: <Award size={40} />,
      title: t.reasons.experience.title,
      description: t.reasons.experience.description
    },
    {
      icon: <Shield size={40} />,
      title: t.reasons.licensed.title,
      description: t.reasons.licensed.description
    },
    {
      icon: <ThumbsUp size={40} />,
      title: t.reasons.quality.title,
      description: t.reasons.quality.description
    },
    {
      icon: <Users size={40} />,
      title: t.reasons.team.title,
      description: t.reasons.team.description
    },
    {
      icon: <Clock size={40} />,
      title: t.reasons.onTime.title,
      description: t.reasons.onTime.description
    },
    {
      icon: <MapPin size={40} />,
      title: t.reasons.allAreas.title,
      description: t.reasons.allAreas.description
    },
    {
      icon: <Star size={40} />,
      title: t.reasons.rating.title,
      description: t.reasons.rating.description
    },
    {
      icon: <Phone size={40} />,
      title: t.reasons.emergency.title,
      description: t.reasons.emergency.description
    }
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            {t.title}
          </h2>
          <p className="text-secondary text-lg max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="text-accent mb-4">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">
                {reason.title}
              </h3>
              <p className="text-secondary leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* SEO-Rich Content Section */}
        <div className="max-w-4xl mx-auto bg-lightBackground p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-primary mb-4">
            {t.comprehensiveTitle}
          </h3>
          <div className="text-secondary space-y-4 leading-relaxed">
            <p>{t.comprehensiveContent.para1}</p>
            <p>{t.comprehensiveContent.para2}</p>
            <p>{t.comprehensiveContent.para3}</p>
            <p>{t.comprehensiveContent.para4}</p>
            <p>{t.comprehensiveContent.para5}</p>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+27828688396"
              className="inline-flex items-center justify-center space-x-2 bg-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
            >
              <Phone size={20} />
              <span>{t.callButton}</span>
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center space-x-2 bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              <span>{t.quoteButton}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}