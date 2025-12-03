import { Shield, Award, Clock, ThumbsUp, Users, CheckCircle } from 'lucide-react'

interface TrustBadgesProps {
  dict: any
}

export default function TrustBadges({ dict }: TrustBadgesProps) {
  const badges = [
    {
      icon: Shield,
      title: dict.trustBadges.badges.insured.title,
      description: dict.trustBadges.badges.insured.description
    },
    {
      icon: Award,
      title: dict.trustBadges.badges.guaranteed.title,
      description: dict.trustBadges.badges.guaranteed.description
    },
    {
      icon: Clock,
      title: dict.trustBadges.badges.experience.title,
      description: dict.trustBadges.badges.experience.description
    },
    {
      icon: ThumbsUp,
      title: dict.trustBadges.badges.projects.title,
      description: dict.trustBadges.badges.projects.description
    },
    {
      icon: Users,
      title: dict.trustBadges.badges.team.title,
      description: dict.trustBadges.badges.team.description
    },
    {
      icon: CheckCircle,
      title: dict.trustBadges.badges.registered.title,
      description: dict.trustBadges.badges.registered.description
    }
  ]

  return (
    <section className="py-16 bg-lightBackground">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary text-center mb-12">
          {dict.trustBadges.title}
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