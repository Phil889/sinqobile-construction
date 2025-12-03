import { getDictionary } from '@/lib/dictionaries'
import { Locale } from '@/i18n.config'
import Breadcrumb from '@/components/breadcrumb'
import OurWorkClient from './OurWorkClient'
import { getTranslatedProjects } from '@/lib/multilingual-projects'
import { getAllCategories, getAllLocations } from '@/lib/all-projects-data'

interface OurWorkPageProps {
  params: { lang: Locale }
}

export default async function OurWorkPage({ params: { lang } }: OurWorkPageProps) {
  const dict = await getDictionary(lang)
  const translatedProjects = await getTranslatedProjects(lang)
  const categories = getAllCategories()
  const locations = getAllLocations()
  
  return (
    <>
      <Breadcrumb
        items={[
          { label: dict.navigation.work, href: `/${lang}/our-work` }
        ]}
        lang={lang}
        dict={dict}
      />
      <OurWorkClient
        lang={lang}
        dict={dict}
        projects={translatedProjects}
        categories={categories}
        locations={locations}
      />
    </>
  )
}