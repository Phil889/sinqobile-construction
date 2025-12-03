import { getDictionary } from '@/lib/dictionaries'
import { Locale } from '@/i18n.config'
import Breadcrumb from '@/components/breadcrumb'
import FAQClient from './FAQClient'

interface FAQPageProps {
  params: { lang: Locale }
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