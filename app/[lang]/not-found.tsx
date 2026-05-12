'use client'

import Link from 'next/link'
import { Home, ArrowLeft, Phone, Search } from 'lucide-react'
import { usePathname } from 'next/navigation'

const T = {
  en: {
    heading: 'Page Not Found',
    body: 'Sorry, the page you are looking for does not exist or has been moved. Let us help you find what you need.',
    home: 'Go to Homepage',
    services: 'View Services',
    contact: 'Contact Us',
    tagline: 'Sinqobile Construction — Professional Building Services in Johannesburg & Gauteng',
  },
  af: {
    heading: 'Bladsy Nie Gevind Nie',
    body: 'Jammer, die bladsy wat jy soek bestaan nie of is verskuif. Laat ons jou help om te vind wat jy nodig het.',
    home: 'Gaan na Tuisblad',
    services: 'Bekyk Dienste',
    contact: 'Kontak Ons',
    tagline: 'Sinqobile Construction — Professionele Boudienste in Johannesburg & Gauteng',
  },
  zu: {
    heading: 'Ikhasi Alitholakali',
    body: 'Siyaxolisa, ikhasi ofuna lona alikhona noma lishiftiwe. Ake sikusize ukuthola okudingayo.',
    home: 'Ya Ekhasini Lokuqala',
    services: 'Buka Izinsiza',
    contact: 'Xhumana Nathi',
    tagline: 'Sinqobile Construction — Izinsiza Zokwakha Ezichwepheshile eJohannesburg & eGauteng',
  },
  st: {
    heading: 'Leqephe Ha Le Fumanehe',
    body: 'Siyacolisa, leqephe leo u le batlang ha le leng teng kapa le fetotsoe. A re u thuse ho fumana se u se hlokang.',
    home: 'Ea Leqepheng la Hae',
    services: 'Sheba Litšebeletso',
    contact: 'Ikopanya le Rona',
    tagline: 'Sinqobile Construction — Litšebeletso tsa Kaho tse Kgabane Johannesburg & Gauteng',
  },
} as const

type Lang = keyof typeof T

export default function NotFound() {
  const pathname = usePathname()
  const segment = pathname?.split('/')[1] as Lang
  const t = T[segment] ?? T.en
  const lang = Object.keys(T).includes(segment) ? segment : 'en'

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-white text-gray-800">
      <div className="max-w-xl mx-auto text-center">
        <h1 className="text-8xl font-bold text-yellow-500 mb-4">404</h1>
        <h2 className="text-3xl font-bold mb-4">{t.heading}</h2>
        <p className="text-lg text-gray-600 mb-8">
          {t.body}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <Link
            href={`/${lang}`}
            className="flex items-center justify-center space-x-2 bg-yellow-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors"
          >
            <Home size={20} />
            <span>{t.home}</span>
          </Link>
          <Link
            href={`/${lang}/services`}
            className="flex items-center justify-center space-x-2 border-2 border-gray-800 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 hover:text-white transition-colors"
          >
            <Search size={20} />
            <span>{t.services}</span>
          </Link>
          <Link
            href={`/${lang}/contact`}
            className="flex items-center justify-center space-x-2 border-2 border-gray-800 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 hover:text-white transition-colors"
          >
            <ArrowLeft size={20} />
            <span>{t.contact}</span>
          </Link>
          <a
            href="tel:+27828688396"
            className="flex items-center justify-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            <Phone size={20} />
            <span>+27 82 868 8396</span>
          </a>
        </div>

        <p className="text-sm text-gray-400">
          {t.tagline}
        </p>
      </div>
    </div>
  )
}
