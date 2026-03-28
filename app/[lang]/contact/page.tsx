import type { Metadata } from 'next'
import { getDictionary } from '@/lib/dictionaries'
import { Locale } from '@/i18n.config'
import Breadcrumb from '@/components/breadcrumb'
import ContactClient from './ContactClient'

interface ContactPageProps {
  params: { lang: Locale }
}

// v2 Workflow: Page-specific metadata for Contact page
export async function generateMetadata({
  params: { lang },
}: ContactPageProps): Promise<Metadata> {
  return {
    title: lang === 'en'
      ? 'Contact Sinqobile Construction | Free Quote Johannesburg | +27 82 868 8396'
      : lang === 'af'
      ? 'Kontak Sinqobile Construction | Gratis Kwotasie Johannesburg | +27 82 868 8396'
      : lang === 'zu'
      ? 'Xhumana ne-Sinqobile Construction | Icaphuna Lamahhala eGoli | +27 82 868 8396'
      : 'Ikopanye le Sinqobile Construction | Quote ea Mahala Johannesburg | +27 82 868 8396',
    description: lang === 'en'
      ? 'Contact Sinqobile Construction for a free quote on building, renovation, paving & plumbing in Johannesburg & Gauteng. Call +27 82 868 8396 or fill in our online form. NHBRC registered.'
      : lang === 'af'
      ? 'Kontak Sinqobile Construction vir gratis kwotasie vir bou, renovasie, plaveisel & loodgieter in Johannesburg & Gauteng. Bel +27 82 868 8396. NHBRC geregistreer.'
      : lang === 'zu'
      ? 'Xhumana neSinqobile Construction ukuthola icaphuna lamahhala lokwakha, ukuvuselela, ukupavisha neplumbing eGoli neGauteng. Shayela +27 82 868 8396.'
      : 'Ikopanye le Sinqobile Construction bakeng sa quote ea mahala ea kaho, ntjhafatso, paving le lipeipi Johannesburg le Gauteng. Letsetsa +27 82 868 8396.',
    alternates: {
      canonical: `/${lang}/contact`,
      languages: {
        'en': '/en/contact',
        'af': '/af/contact',
        'zu': '/zu/contact',
        'st': '/st/contact',
        'x-default': '/en/contact',
      },
    },
    openGraph: {
      title: lang === 'en'
        ? 'Contact Sinqobile Construction | Free Quote Johannesburg | +27 82 868 8396'
        : lang === 'af'
        ? 'Kontak Sinqobile Construction | Gratis Kwotasie Johannesburg | +27 82 868 8396'
        : lang === 'zu'
        ? 'Xhumana ne-Sinqobile Construction | Icaphuna Lamahhala eGoli | +27 82 868 8396'
        : 'Ikopanye le Sinqobile Construction | Quote ea Mahala Johannesburg | +27 82 868 8396',
      description: lang === 'en'
        ? 'Contact Sinqobile Construction for a free quote on building, renovation, paving & plumbing in Johannesburg & Gauteng. Call +27 82 868 8396 or fill in our online form. NHBRC registered.'
        : lang === 'af'
        ? 'Kontak Sinqobile Construction vir gratis kwotasie vir bou, renovasie, plaveisel & loodgieter in Johannesburg & Gauteng. Bel +27 82 868 8396. NHBRC geregistreer.'
        : lang === 'zu'
        ? 'Xhumana neSinqobile Construction ukuthola icaphuna lamahhala lokwakha, ukuvuselela, ukupavisha neplumbing eGoli neGauteng. Shayela +27 82 868 8396.'
        : 'Ikopanye le Sinqobile Construction bakeng sa quote ea mahala ea kaho, ntjhafatso, paving le lipeipi Johannesburg le Gauteng. Letsetsa +27 82 868 8396.',
      url: `/${lang}/contact`,
      siteName: 'Sinqobile Construction',
      type: 'website',
      images: [{
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact Sinqobile Construction | Free Quote Johannesburg',
      }],
    },
  }
}

export default async function ContactPage({ params: { lang } }: ContactPageProps) {
  const dict = await getDictionary(lang)
  
  return (
    <>
      <Breadcrumb
        items={[
          { label: dict.navigation.contact, href: `/${lang}/contact` }
        ]}
        lang={lang}
        dict={dict}
      />
      <ContactClient lang={lang} dict={dict} />
    </>
  )
}