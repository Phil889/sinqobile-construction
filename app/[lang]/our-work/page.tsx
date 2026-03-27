import type { Metadata } from 'next'
import { getDictionary } from '@/lib/dictionaries'
import { Locale } from '@/i18n.config'
import Breadcrumb from '@/components/breadcrumb'
import OurWorkClient from './OurWorkClient'
import { getTranslatedProjects } from '@/lib/multilingual-projects'
import { getAllCategories, getAllLocations } from '@/lib/all-projects-data'

interface OurWorkPageProps {
  params: { lang: Locale }
}

// v2 Workflow: Research-driven metadata for Our Work portfolio page
// Research: portfolio pages DO rank in SA construction SERPs (CIC Projects, RAH, Fikile)
// Our 77 projects with categories + locations is a competitive advantage
export async function generateMetadata({
  params: { lang },
}: OurWorkPageProps): Promise<Metadata> {
  return {
    title: lang === 'en'
      ? 'Construction Projects Johannesburg | 77+ Completed Projects | Sinqobile'
      : lang === 'af'
      ? 'Konstruksieprojekte Johannesburg | 77+ Voltooide Projekte | Sinqobile'
      : lang === 'zu'
      ? 'Amaphrojekthi Okwakha eGoli | 77+ Aqediwe | Sinqobile'
      : 'Mesebetsi ea Kaho Johannesburg | 77+ e Phethiloeng | Sinqobile',
    description: lang === 'en'
      ? 'Browse 77+ completed construction projects across Johannesburg & Gauteng. Roofing, renovations, extensions & more. 17 service categories, 23 locations. NHBRC registered builder.'
      : lang === 'af'
      ? 'Blaai deur 77+ voltooide konstruksieprojekte in Johannesburg & Gauteng. Dakwerk, opknappings, uitbreidings & meer. NHBRC-geregistreerde bouer.'
      : lang === 'zu'
      ? 'Bheka amaphrojekthi okwakha angu-77+ aqediwe eGoli naseGauteng. Izimpahla, ukuvuselela, izandiso nokunye. Umakhi we-NHBRC.'
      : 'Sheba mesebetsi ea kaho e 77+ e phethiloeng Johannesburg le Gauteng. Marulelo, ntjhafatso, katoloso le tse ling. Moahi ea NHBRC.',
    alternates: {
      canonical: `/${lang}/our-work`,
    },
  }
}

export default async function OurWorkPage({ params: { lang } }: OurWorkPageProps) {
  const dict = await getDictionary(lang)
  const translatedProjects = await getTranslatedProjects(lang)
  const categories = getAllCategories()
  const locations = getAllLocations()

  // CollectionPage schema — v2 research: no competitor has this on their portfolio
  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Construction Projects Portfolio — Sinqobile Construction',
    description: 'Browse 77+ completed construction projects across Johannesburg & Gauteng by Sinqobile Construction.',
    url: `https://www.sinqobileconstruction.co.za/${lang}/our-work`,
    isPartOf: {
      '@type': 'WebSite',
      name: 'Sinqobile Construction',
      url: 'https://www.sinqobileconstruction.co.za',
    },
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: translatedProjects.length,
      itemListElement: translatedProjects.slice(0, 20).map((project: any, index: number) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'CreativeWork',
          name: project.title,
          description: project.description || project.title,
        },
      })),
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
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