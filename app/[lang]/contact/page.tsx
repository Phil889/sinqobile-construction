import { getDictionary } from '@/lib/dictionaries'
import { Locale } from '@/i18n.config'
import Breadcrumb from '@/components/breadcrumb'
import ContactClient from './ContactClient'

interface ContactPageProps {
  params: { lang: Locale }
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