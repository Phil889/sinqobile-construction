import type { Metadata } from 'next'
import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionaries'
import Breadcrumb from '@/components/breadcrumb'
import BlogClient from './BlogClient'

// v2 Workflow: Research-driven metadata for Blog hub page
export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: Locale }
}): Promise<Metadata> {
  return {
    title: lang === 'en'
      ? 'Construction Blog | Tips, Costs & Guides | Sinqobile Construction Johannesburg'
      : lang === 'af'
      ? 'Konstruksie Blog | Wenke, Koste & Gidse | Sinqobile Construction Johannesburg'
      : lang === 'zu'
      ? 'Ibhulogi Yokwakha | Amacebo, Izindleko | Sinqobile Construction eGoli'
      : 'Blog ea Kaho | Malebela, Litjeho | Sinqobile Construction Johannesburg',
    description: lang === 'en'
      ? 'Expert construction tips, building cost guides, and renovation advice for Johannesburg homeowners. By Sinqobile Construction — 15+ years, NHBRC registered.'
      : lang === 'af'
      ? 'Kundige konstruksiewenke, boukostegidse en renovasie-advies vir Johannesburg-huiseienaars. Deur Sinqobile Construction — 15+ jaar, NHBRC.'
      : lang === 'zu'
      ? 'Amacebo okwakha, izindleko zokwakha, nezeluleko zokuvuselela kubanikazi bamakhaya eGoli. NguSinqobile Construction — iminyaka engu-15+.'
      : 'Malebela a kaho, litataiso tsa litjeho, le likeletso tsa ho nchafatsa bakeng sa beng ba mahae Johannesburg. Ka Sinqobile Construction — lilemo tse 15+.',
    alternates: { canonical: `/${lang}/blog` },
  }
}

export default async function BlogPage({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  const dict = await getDictionary(lang)

  return (
    <>
      <Breadcrumb
        items={[
          { label: dict.navigation.blog, href: `/${lang}/blog` }
        ]}
        lang={lang}
        dict={dict}
      />
      <BlogClient lang={lang} dict={dict} />
    </>
  )
}