import type { Metadata } from 'next'
import { getDictionary } from '@/lib/dictionaries'
import { Locale } from '@/i18n.config'
import Breadcrumb from '@/components/breadcrumb'
import FAQClient from './FAQClient'

interface FAQPageProps {
  params: { lang: Locale }
}

// v2 Workflow: Research-driven metadata for FAQ page
export async function generateMetadata({
  params: { lang },
}: FAQPageProps): Promise<Metadata> {
  return {
    title: lang === 'en'
      ? 'FAQ | Construction Questions Answered | Sinqobile Construction Johannesburg'
      : lang === 'af'
      ? 'V&A | Konstruksievrae Beantwoord | Sinqobile Construction Johannesburg'
      : lang === 'zu'
      ? 'Imibuzo | Imibuzo Yokwakha | Sinqobile Construction Johannesburg'
      : 'Dipotso | Dipotso tsa Kaho | Sinqobile Construction Johannesburg',
    description: lang === 'en'
      ? 'Get answers to common construction questions: building costs in Johannesburg, NHBRC registration, project timelines, permits & more. 15+ years experience. Free quotes.'
      : lang === 'af'
      ? 'Kry antwoorde op algemene konstruksievrae: boukoste in Johannesburg, NHBRC-registrasie, projektydlyne, permitte & meer. 15+ jaar ervaring. Gratis kwotasies.'
      : lang === 'zu'
      ? 'Thola izimpendulo zemibuzo yokwakha: izindleko zokwakha eGoli, ukubhaliswa kwe-NHBRC, izikhathi zephrojekthi nokunye. Amacaphuna amahhala.'
      : 'Fumana dikarabo tsa dipotso tsa kaho: ditjeo tsa kaho Johannesburg, ngodiso ea NHBRC, linako tsa morero le tse ding. Diquote tsa mahala.',
    alternates: {
      canonical: `/${lang}/faq`,
      languages: {
        'en': '/en/faq',
        'af': '/af/faq',
        'zu': '/zu/faq',
        'st': '/st/faq',
        'x-default': '/en/faq',
      },
    },
    openGraph: {
      title: 'Construction FAQ — Your Building Questions Answered',
      description: 'Get answers to common construction questions: building costs in Johannesburg, NHBRC registration, project timelines, permits & more.',
      url: `/${lang}/faq`,
      siteName: 'Sinqobile Construction',
      type: 'website',
      images: [{
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'FAQ - Sinqobile Construction Johannesburg',
      }],
    },
  }
}

export default async function FAQPage({ params: { lang } }: FAQPageProps) {
  const dict = await getDictionary(lang)
  
  return (
    <>
      <Breadcrumb
        items={[
          { label: dict.navigation.faq, href: `/${lang}/faq` }
        ]}
        lang={lang}
        dict={dict}
      />
      <FAQClient lang={lang} dict={dict} />
    </>
  )
}