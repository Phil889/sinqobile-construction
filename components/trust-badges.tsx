import { Shield, Award, Clock, ThumbsUp, Users, CheckCircle } from 'lucide-react'

export default function TrustBadges() {
  const badges = [
    {
      icon: Shield,
      title: 'Fully Insured',
      description: 'Comprehensive liability coverage'
    },
    {
      icon: Award,
      title: 'Quality Guaranteed',
      description: 'Workmanship warranty on all projects'
    },
    {
      icon: Clock,
      title: '15+ Years Experience',
      description: 'Trusted by Gauteng residents'
    },
    {
      icon: ThumbsUp,
      title: '500+ Projects',
      description: 'Successfully completed'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Certified professionals'
    },
    {
      icon: CheckCircle,
      title: 'PTY LTD Registered',
      description: 'Legitimate business entity'
    }
  ]

  return (
    <section className="py-16 bg-lightBackground">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary text-center mb-12">
          Why Choose MD Builders?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {badges.map((badge, index) => {
            const Icon = badge.icon
            return (
              <div
                key={index}
                className="bg-white rounded-lg p-6 text-center hover:shadow-xl transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <Icon size={32} className="text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-secondary mb-2">
                  {badge.title}
                </h3>
                <p className="text-secondary text-sm">
                  {badge.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}