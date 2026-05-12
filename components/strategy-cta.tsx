'use client'

import Link from 'next/link'
import { useCallback } from 'react'
import { ArrowRight, Calendar, CheckCircle2, Phone } from 'lucide-react'

interface StrategyCTAProps {
  headline?: string
  subheadline?: string
  ctaText?: string
  ctaHref?: string
  category?: string
  position?: string
  lang?: string
  disclaimer?: string
  bullets?: string[]
  className?: string
}

/**
 * Reusable Strategy/Quote CTA card.
 *
 * Drop into any blog post or service page. Tracks click as GA4 event so we
 * can measure conversion by category, position, and source path.
 */
export function StrategyCTA({
  headline = 'Get Your Free On-Site Quote',
  subheadline = 'Tell us about your project and a Sinqobile expert will visit your site, scope the work, and email a fixed-price quote within 24 hours.',
  ctaText = 'Request Your Free Quote',
  ctaHref,
  category = 'default',
  position = 'inline',
  lang = 'en',
  disclaimer = 'Free site visit · No obligation · Response within 24 hours',
  bullets = [
    'NHBRC registered — built to SANS 10400 standards',
    'Fixed-price written quotes (no surprises)',
    'Fully insured public liability cover',
  ],
  className = '',
}: StrategyCTAProps) {
  const destination = ctaHref || `/${lang}/contact`

  const trackClick = useCallback(() => {
    if (typeof window === 'undefined' || typeof window.gtag !== 'function') return
    window.gtag('event', 'cta_click', {
      event_category: 'engagement',
      cta_category: category,
      cta_destination: destination,
      cta_position: position,
      cta_headline: headline,
      source_path: window.location.pathname,
    })
  }, [category, destination, position, headline])

  const trackPhone = useCallback(() => {
    if (typeof window === 'undefined' || typeof window.gtag !== 'function') return
    window.gtag('event', 'phone_click', {
      event_category: 'engagement',
      cta_category: category,
      cta_position: position,
      source_path: window.location.pathname,
    })
  }, [category, position])

  return (
    <aside
      className={`relative overflow-hidden rounded-2xl border-2 border-yellow-400 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 p-6 md:p-8 shadow-xl ${className}`}
      aria-label={headline}
    >
      <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-yellow-400/10 blur-3xl" aria-hidden="true" />
      <div className="absolute -bottom-16 -left-16 w-40 h-40 rounded-full bg-yellow-400/10 blur-3xl" aria-hidden="true" />

      <div className="relative grid md:grid-cols-[1fr_auto] gap-6 items-center">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-400/20 border border-yellow-400/30 mb-3">
            <Calendar className="w-3.5 h-3.5 text-yellow-300" aria-hidden="true" />
            <span className="text-xs font-semibold text-yellow-200 uppercase tracking-wider">
              Free quote
            </span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">{headline}</h3>
          <p className="mt-2 text-sm md:text-base text-gray-300 leading-relaxed max-w-2xl">
            {subheadline}
          </p>

          {bullets.length > 0 && (
            <ul className="mt-4 space-y-1.5">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm text-gray-200">
                  <CheckCircle2 className="w-4 h-4 mt-0.5 text-yellow-400 shrink-0" aria-hidden="true" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="flex flex-col gap-3 md:min-w-[220px]">
          <Link
            href={destination}
            onClick={trackClick}
            className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold shadow-lg transition-all hover:scale-[1.02]"
          >
            {ctaText}
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
          <a
            href="tel:+27828688396"
            onClick={trackPhone}
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg border-2 border-white/20 text-white hover:bg-white/10 font-semibold transition-colors"
          >
            <Phone className="w-4 h-4" aria-hidden="true" />
            082 868 8396
          </a>
        </div>
      </div>

      {disclaimer && (
        <p className="relative mt-4 text-xs text-gray-400 text-center md:text-left">{disclaimer}</p>
      )}
    </aside>
  )
}

export default StrategyCTA
