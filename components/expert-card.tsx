import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2, Phone, ShieldCheck, Trophy } from 'lucide-react'

interface ExpertCardProps {
  serviceName?: string
  lang?: string
  className?: string
}

/**
 * Expert/founder card for service pages.
 *
 * Mirrors ADVISORI's expert consultant card pattern — places a credentialed
 * human at the heart of every service page to signal experience and
 * trustworthiness to Google + AI search engines.
 */
export function ExpertCard({
  serviceName,
  lang = 'en',
  className = '',
}: ExpertCardProps) {
  const credentials = [
    'NHBRC Registered (15+ years)',
    '500+ projects completed across Gauteng',
    'SANS 10400 compliant builds',
    'Fully insured public liability cover',
    'Free site visits within 50km of Sandton',
  ]

  return (
    <section
      className={`relative overflow-hidden rounded-2xl bg-white border border-gray-200 shadow-md ${className}`}
      aria-label={`Talk to our expert${serviceName ? ` about ${serviceName}` : ''}`}
    >
      <div className="grid md:grid-cols-[200px_1fr] gap-6 p-6 md:p-8">
        <div className="flex flex-col items-center md:items-start">
          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden ring-4 ring-yellow-100 shadow-lg">
            <Image
              src="/images/dingwayo-ndlovu.jpg"
              alt="Dingwayo Reason Ndlovu — Founder of Sinqobile Construction"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 128px, 160px"
            />
          </div>
          <div className="mt-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-50 border border-yellow-200">
            <ShieldCheck className="w-4 h-4 text-yellow-700" aria-hidden="true" />
            <span className="text-xs font-semibold text-yellow-800">NHBRC Registered</span>
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-yellow-700 mb-1">
            Talk to the expert
          </p>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
            Dingwayo Reason Ndlovu
          </h3>
          <p className="mt-1 text-base font-medium text-gray-700">
            Founder &amp; NHBRC Registered Builder
          </p>
          <p className="mt-2 text-sm text-gray-600 leading-relaxed">
            Dingwayo personally oversees every Sinqobile Construction project
            {serviceName ? `, including ${serviceName.toLowerCase()},` : ''} from
            quote through final handover. 15+ years of hands-on construction
            experience across Johannesburg, Sandton, and Pretoria.
          </p>

          <ul className="mt-4 space-y-2">
            {credentials.map((cred) => (
              <li key={cred} className="flex items-start gap-2 text-sm text-gray-700">
                <CheckCircle2
                  className="w-4 h-4 mt-0.5 text-green-600 shrink-0"
                  aria-hidden="true"
                />
                <span>{cred}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 grid sm:grid-cols-3 gap-3 text-center">
            <div className="rounded-lg bg-gray-50 px-3 py-3 border border-gray-100">
              <p className="text-2xl font-bold text-gray-900">15+</p>
              <p className="text-xs text-gray-600">Years Experience</p>
            </div>
            <div className="rounded-lg bg-gray-50 px-3 py-3 border border-gray-100">
              <p className="text-2xl font-bold text-gray-900">500+</p>
              <p className="text-xs text-gray-600">Projects Delivered</p>
            </div>
            <div className="rounded-lg bg-gray-50 px-3 py-3 border border-gray-100">
              <p className="text-2xl font-bold text-gray-900">4.9★</p>
              <p className="text-xs text-gray-600">127 Reviews</p>
            </div>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a
              href="tel:+27828688396"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold transition-colors shadow-sm"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              Call 082 868 8396
            </a>
            <Link
              href={`/${lang}/contact`}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white font-semibold transition-colors"
            >
              <Trophy className="w-4 h-4" aria-hidden="true" />
              Get a Free Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExpertCard
