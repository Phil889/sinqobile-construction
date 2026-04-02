import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Phone, ArrowRight } from 'lucide-react'

interface HeroSectionProps {
  dict: any
}

const HeroSection = ({ dict }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center pt-16">
      {/* Optimized hero background via next/image — serves AVIF/WebP with srcset */}
      <Image
        src="/images/hero-construction-site.jpg"
        alt="Sinqobile Construction — professional building and renovation services across Johannesburg and Gauteng"
        fill
        priority
        quality={75}
        className="object-cover object-center"
        sizes="100vw"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 text-balance">
            {dict.hero.title}
          </h1>
          <div className="inline-block bg-primary text-white px-6 py-2 rounded-full font-bold mb-6">
            <span className="text-sm">{dict.callOutBanner.message}</span>
          </div>
          <p className="text-xl md:text-2xl mb-8 text-balance opacity-90">
            {dict.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+27828688396"
              className="bg-accent text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-700 transition-colors flex items-center space-x-2"
            >
              <Phone size={20} />
              <span>{dict.hero.callButton}</span>
            </a>
            <Link
              href="/our-work"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-secondary transition-colors flex items-center space-x-2"
            >
              <span>{dict.hero.workButton}</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection