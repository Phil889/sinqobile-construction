import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2, Phone, ShieldCheck, Trophy } from 'lucide-react'

interface ExpertCardProps {
  serviceName?: string
  lang?: string
  className?: string
}

const T = {
  en: {
    talkToExpert: 'Talk to the expert',
    role: 'Founder & NHBRC Registered Builder',
    intro: (name?: string) =>
      `Dingwayo personally oversees every Sinqobile Construction project${name ? `, including ${name.toLowerCase()},` : ''} from quote through final handover. 15+ years of hands-on construction experience across Johannesburg, Sandton, and Pretoria.`,
    credentials: [
      'NHBRC Registered (15+ years)',
      '500+ projects completed across Gauteng',
      'SANS 10400 compliant builds',
      'Fully insured public liability cover',
      'Free site visits within 50km of Sandton',
    ],
    yearsExp: 'Years Experience',
    projects: 'Projects Delivered',
    reviews: '127 Reviews',
    callUs: 'Call 082 868 8396',
    getFreeQuote: 'Get a Free Quote',
  },
  af: {
    talkToExpert: 'Praat met die kenner',
    role: 'Stigter & NHBRC Geregistreerde Bouer',
    intro: (name?: string) =>
      `Dingwayo hou persoonlik toesig oor elke Sinqobile Construction projek${name ? `, insluitend ${name.toLowerCase()},` : ''} van kwotasie tot finale oordrag. 15+ jaar van praktiese konstruksie-ondervinding regoor Johannesburg, Sandton, en Pretoria.`,
    credentials: [
      'NHBRC Geregistreer (15+ jaar)',
      '500+ projekte voltooi regoor Gauteng',
      'SANS 10400-voldoenende bouwerk',
      'Volledig versekerde openbare aanspreeklikheidsdekking',
      'Gratis terreinbesoeke binne 50km van Sandton',
    ],
    yearsExp: 'Jaar Ondervinding',
    projects: 'Projekte Gelewer',
    reviews: '127 Resensies',
    callUs: 'Bel 082 868 8396',
    getFreeQuote: 'Kry \'n Gratis Kwotasie',
  },
  zu: {
    talkToExpert: 'Xoxa nesazi',
    role: 'Umsunguli & Umakhi Obhaliswe yi-NHBRC',
    intro: (name?: string) =>
      `UDingwayo ubheka ngqo wonke amaphrojekthi we-Sinqobile Construction${name ? `, kufaka ${name.toLowerCase()},` : ''} kusukela ekuhalaliseni kuze kufike ekunikezeni. Iminyaka eyi-15+ yolwazi lokukhiwa ngezandla eJohannesburg, eSandton, nasekhaya ePretoria.`,
    credentials: [
      'Ubhaliswe yi-NHBRC (15+ iminyaka)',
      'Amaphrojekthi ayi-500+ aphelile kulo lonke iGauteng',
      'Ukwakhiwa okuhambisana ne-SANS 10400',
      'Umshwalense we-public liability ogcwele',
      'Izivakashelo zamasimu zamahhala ngaphandle kwe-50km eSandton',
    ],
    yearsExp: 'Iminyaka Yokuzwa',
    projects: 'Amaphrojekthi Anikezwe',
    reviews: 'Izibuyekezo eziyi-127',
    callUs: 'Shayela i-082 868 8396',
    getFreeQuote: 'Thola Isikweletu Samahhala',
  },
  st: {
    talkToExpert: 'Bua le setsebi',
    role: 'Mothehi & Mohahi o Ngolisitsweng ho NHBRC',
    intro: (name?: string) =>
      `Dingwayo o sheba ka sebele liphrojekhte tsohle tsa Sinqobile Construction${name ? `, ho kenyeletsa ${name.toLowerCase()},` : ''} ho tloha ho quotation ho fihlela ho nikezo ea ho qetela. Lilemo tse 15+ tsa boiphihlelo ba kaho Johannesburg, Sandton, le Pretoria.`,
    credentials: [
      'O Ngolisitswe ho NHBRC (15+ lilemo)',
      'Liphrojekhte tse 500+ tse phethilweng hohle Gauteng',
      'Kaho e lumellananang le SANS 10400',
      'Inshorense e feletseng ea boikarabello bo chesimang',
      'Litsebeliso tsa bolaoli tsa mahala ho bangata ho 50km ho tsoa Sandton',
    ],
    yearsExp: 'Lilemo tsa Boiphihlelo',
    projects: 'Liphrojekhte tse Nkehilweng',
    reviews: 'Litlhahlobo tse 127',
    callUs: 'Letsetsa 082 868 8396',
    getFreeQuote: 'Fumana Quotation ea Mahala',
  },
} as const

type Lang = keyof typeof T

export function ExpertCard({
  serviceName,
  lang = 'en',
  className = '',
}: ExpertCardProps) {
  const l = (Object.keys(T).includes(lang) ? lang : 'en') as Lang
  const tr = T[l]

  return (
    <section
      className={`relative overflow-hidden rounded-2xl bg-white border border-gray-200 shadow-md ${className}`}
      aria-label={`${tr.talkToExpert}${serviceName ? ` — ${serviceName}` : ''}`}
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
            {tr.talkToExpert}
          </p>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
            Dingwayo Reason Ndlovu
          </h3>
          <p className="mt-1 text-base font-medium text-gray-700">
            {tr.role}
          </p>
          <p className="mt-2 text-sm text-gray-600 leading-relaxed">
            {tr.intro(serviceName)}
          </p>

          <ul className="mt-4 space-y-2">
            {tr.credentials.map((cred) => (
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
              <p className="text-xs text-gray-600">{tr.yearsExp}</p>
            </div>
            <div className="rounded-lg bg-gray-50 px-3 py-3 border border-gray-100">
              <p className="text-2xl font-bold text-gray-900">500+</p>
              <p className="text-xs text-gray-600">{tr.projects}</p>
            </div>
            <div className="rounded-lg bg-gray-50 px-3 py-3 border border-gray-100">
              <p className="text-2xl font-bold text-gray-900">4.9★</p>
              <p className="text-xs text-gray-600">{tr.reviews}</p>
            </div>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a
              href="tel:+27828688396"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold transition-colors shadow-sm"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              {tr.callUs}
            </a>
            <Link
              href={`/${lang}/contact`}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white font-semibold transition-colors"
            >
              <Trophy className="w-4 h-4" aria-hidden="true" />
              {tr.getFreeQuote}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExpertCard
