import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionaries'
import Breadcrumb from '@/components/breadcrumb'
import BlogClient from './BlogClient'

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