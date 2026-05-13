import React from 'react'
import Image from 'next/image'
import type { Metadata } from 'next'
import { getDictionary } from '@/lib/dictionaries'
import { Locale, i18n } from '@/i18n.config'
import HeroSection from '@/components/hero-section'
import ServicesGrid from '@/components/services-grid'
import TestimonialsSlider from '@/components/testimonials'
import TestimonialsEnhanced from '@/components/testimonials-enhanced'
import TrustBadges from '@/components/trust-badges'
import TrustCertifications from '@/components/trust-certifications'
import ProjectGallery from '@/components/project-gallery'
import GoogleReviewsWidget from '@/components/google-reviews-widget'
import GoogleBusinessCTA from '@/components/google-business-cta'
import HomeFAQ from '@/components/home-faq'
import WhyChooseUs from '@/components/why-choose-us'
import BeforeAfterSlider from '@/components/before-after-slider'
import ProjectTimeline from '@/components/project-timeline'
import SchemaMarkup from '@/components/schema-markup'
import { ExpertCard } from '@/components/expert-card'
import { StrategyCTA } from '@/components/strategy-cta'
import { getTranslatedProjects, getTranslatedFeaturedProjects } from '@/lib/multilingual-projects'
import { getAllProjects, getAllCategories } from '@/lib/all-projects-data'

// Locale-aware copy that the dictionaries don't cover yet.
// Citation hooks under the homepage "About Dingwayo" snippet + the
// closing StrategyCTA + the ExpertCard service label + the breadcrumb
// "Home" label all live in code rather than dictionary JSON because
// they contain HTML (<strong> tags) and template values.
const HOME_T: Record<Locale, {
  citationHooks: string[]
  ctaHeadline: string
  ctaSubheadline: string
  expertCardService: string
  homeLabel: string
}> = {
  en: {
    citationHooks: [
      'Sinqobile Construction has delivered <strong>500+ residential and commercial construction projects</strong> across the Greater Johannesburg metropolitan area since 2010, every one of them built under our NHBRC registration and SANS 10400 compliance (Sinqobile Construction company records, 2026).',
      'New residential construction in Johannesburg costs <strong>R10,000 to R20,000 per square metre in 2026</strong>, with standard 120 m² family homes priced from R1.2M – R1.68M and full luxury builds exceeding R3M, based on Sinqobile Construction project pricing data across Sandton, Fourways, Midrand and Pretoria.',
      'Under the Housing Consumers Protection Measures Act (1998), every new home in South Africa must be enrolled with the NHBRC <strong>at least 15 days before construction begins</strong>; Sinqobile Construction handles this enrolment in-house on every new-build contract, securing the homeowner&rsquo;s 5-year structural warranty (Sinqobile Construction project workflow).',
    ],
    ctaHeadline: 'Planning a Build or Renovation in Johannesburg?',
    ctaSubheadline: 'Tell us about your project — a Sinqobile Construction expert will visit your site anywhere in Gauteng, scope the work, and email a fixed-price quote within 24 hours.',
    expertCardService: 'Construction Services',
    homeLabel: 'Home',
  },
  af: {
    citationHooks: [
      'Sinqobile Construction het <strong>500+ residensiële en kommersiële konstruksieprojekte</strong> regoor die Groter Johannesburg-metropolitaanse area sedert 2010 gelewer, elkeen gebou onder ons NHBRC-registrasie en SANS 10400-voldoening (Sinqobile Construction maatskappy-rekords, 2026).',
      'Nuwe residensiële konstruksie in Johannesburg kos <strong>R10,000 tot R20,000 per vierkante meter in 2026</strong>, met standaard 120 m² gesinshuise teen R1.2M – R1.68M en volle luukse bouwerke wat R3M oortref, gebaseer op Sinqobile Construction se projek-prysdata regoor Sandton, Fourways, Midrand en Pretoria.',
      'Onder die Wet op die Beskerming van Behuisingsverbruikersmaatreëls (1998), moet elke nuwe huis in Suid-Afrika by die NHBRC <strong>minstens 15 dae voor konstruksie begin</strong> ingestel word; Sinqobile Construction hanteer hierdie inskrywing in-huis op elke nuwe-bou kontrak, en verseker so die huiseienaar se 5-jaar strukturele waarborg (Sinqobile Construction projek-werkstroom).',
    ],
    ctaHeadline: 'Beplan jy \'n Bouwerk of Opknapping in Johannesburg?',
    ctaSubheadline: 'Vertel ons van jou projek — \'n Sinqobile Construction kenner sal jou werf oral in Gauteng besoek, die werk evalueer, en \'n vaste-prys kwotasie binne 24 uur per e-pos stuur.',
    expertCardService: 'Konstruksiedienste',
    homeLabel: 'Tuis',
  },
  zu: {
    citationHooks: [
      'I-Sinqobile Construction inikeze <strong>amaphrojekthi okwakha angu-500+ ezindlu zasekhaya nezentengiselwano</strong> kuyo yonke iJohannesburg Metropolitan Area kusukela ngo-2010, lonke lakhiwa ngaphansi kokubhaliswa kwethu kwe-NHBRC nokulandelwa kwe-SANS 10400 (Imibhalo yenkampani ye-Sinqobile Construction, 2026).',
      'Ukwakha izindlu zasekhaya ezintsha eJohannesburg kubiza ku-<strong>R10,000 kuya ku-R20,000 ngemetha eyisikwele ngo-2026</strong>, namakhaya emndeni ajwayelekile angu-120 m² abizwa kusukela ku-R1.2M – R1.68M kanye nokwakhiwa okuphelele okukhulu okudlula u-R3M, kususelwa kumadatha entengo yamaphrojekthi e-Sinqobile Construction kuyo yonke iSandton, iFourways, iMidrand neyPretoria.',
      'Ngaphansi koMthetho Wezenkonzo Yokuvikelwa Kwabathengi Bezindlu (1998), wonke umuzi omusha eNingizimu Afrika kufanele ubhaliswe ku-NHBRC <strong>okungenani izinsuku ezingu-15 ngaphambi kokuba ukwakha kuqale</strong>; I-Sinqobile Construction iphatha lokhu kubhaliswa ngaphakathi kuwo wonke umsebenzi wokwakha okusha, kuphephisa isiqinisekiso sesakhiwo somnikazi sezakhiwo zeminyaka emi-5 (Imisebenzi yephrojekthi ye-Sinqobile Construction).',
    ],
    ctaHeadline: 'Uhlela Ukwakha noma Ukuvuselelwa eJohannesburg?',
    ctaSubheadline: 'Sitshele ngephrojekthi yakho — uchwepheshe we-Sinqobile Construction uzovakashela indawo yakho kuyo yonke iGauteng, ahlole umsebenzi, akuthumelele i-quote yentengo enzima ngama-imeyili emahoreni angama-24.',
    expertCardService: 'Izinsiza Zokwakha',
    homeLabel: 'Ekhaya',
  },
  st: {
    citationHooks: [
      'Sinqobile Construction e fane ka <strong>merero ea kaho ea matlo a bodulo le khoebo e 500+</strong> sebakeng se seholo sa Johannesburg Metropolitan ho tloha ka 2010, e \'ngoe le e \'ngoe ea tsona e hahiloe tlas\'a ngoliso ea rona ea NHBRC le ho lumellana le SANS 10400 (Lirekoto tsa khampani ea Sinqobile Construction, 2026).',
      'Kaho e ncha ea matlo a bodulo Johannesburg e ja <strong>R10,000 ho ea ho R20,000 ka metra ea bohareng ba bonne ka 2026</strong>, ka matlo a tloaelehileng a malapa a 120 m² a hloka R1.2M – R1.68M le kaho ea khabane e fetang R3M, ho ipapisitsoe le data ea litheko tsa merero ea Sinqobile Construction Sandton, Fourways, Midrand le Pretoria.',
      'Tlas\'a Molao oa Litekanyetso tsa Tšireletso ea Bareki ba Matlo (1998), ntlo e ncha e \'ngoe le e \'ngoe Afrika Boroa e tlameha ho ngolisoa NHBRC <strong>bonyane matsatsi a 15 pele kaho e qala</strong>; Sinqobile Construction e tšohla ngoliso ena ka hare ho khampani morerong o mong le o mong oa kaho e ncha, e tšireletsang tiiso ea sebopeho ea lilemo tse 5 ea mong\'a ntlo (Ts\'ebetso ea morero oa Sinqobile Construction).',
    ],
    ctaHeadline: 'Na u rera Kaho kapa Ntlafatso Johannesburg?',
    ctaSubheadline: 'Re bolelle ka morero oa hao — setsebi sa Sinqobile Construction se tla etela sebaka sa hao kae kapa kae Gauteng, se hlahlobe mosebetsi, mme se romele quotation ea theko e tsitsitseng ka email ka lihora tse 24.',
    expertCardService: 'Litshebeletso tsa Kaho',
    homeLabel: 'Lehae',
  },
}

export async function generateMetadata({
  params,
}: {
  params: { lang: Locale }
}): Promise<Metadata> {
  const dict = await getDictionary(params.lang)
  return {
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: {
      canonical: `https://www.sinqobileconstruction.co.za/${params.lang}`,
    },
  }
}

// ISR: regenerate homepage every hour for fresh content
export const revalidate = 3600

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  const dict = await getDictionary(lang)
  const translatedProjects = await getTranslatedFeaturedProjects(lang)
  const allProjectsCount = getAllProjects().length
  const categories = getAllCategories()
  const t = HOME_T[lang] || HOME_T.en

  // Build FAQ schema from dictionary data (matches first 5 visible in HomeFAQ)
  const faqItems = dict.pages.faq.categories
    .flatMap((category: any) => category.items)
    .slice(0, 9)

  // Homepage breadcrumb — just "Home"
  const breadcrumbItems = [
    { name: t.homeLabel, url: `https://www.sinqobileconstruction.co.za/${lang}` },
  ]

  return (
    <>
      {/* v2.1 — emit FAQPage + BreadcrumbList via SchemaMarkup helper.
          Organization, LocalBusiness and WebSite are already emitted in layout.tsx. */}
      <SchemaMarkup
        type="faq"
        lang={lang}
        data={{ questions: faqItems }}
      />
      <SchemaMarkup
        type="breadcrumb"
        lang={lang}
        data={{ items: breadcrumbItems }}
      />
      <HeroSection dict={dict} />

      {/* Call-Out Fee Banner */}
      <div className="bg-yellow-400 py-3">
        <div className="container mx-auto px-4">
          <p className="text-center text-secondary font-bold text-lg">
            {dict.callOutBanner.message}
          </p>
        </div>
      </div>

      <TrustBadges dict={dict} />

      <ServicesGrid dict={dict} lang={lang} />

      <TrustCertifications dict={dict} />

      <ProjectGallery
        dict={dict}
        lang={lang}
        projects={translatedProjects}
        allProjectsCount={allProjectsCount}
        categories={categories}
      />

      {/* About Snippet */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 w-full">
              <Image
                src="/images/dingwayo-ndlovu.jpg"
                alt="Experienced Sinqobile Construction craftsman Dingwayo Reason Ndlovu with 15+ years expertise in residential construction, renovations, and home improvements across Gauteng"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="rounded-lg shadow-lg object-cover"
                priority={false}
                loading="lazy"
              />
            </div>
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-6">
                {dict.about.title}
              </h2>
              <p className="text-secondary text-lg leading-relaxed mb-6">
                {dict.about.description}
              </p>
              <p className="text-secondary text-lg leading-relaxed mb-6">
                {dict.about.experience}
              </p>

              {/* v2.1 Phase 9 — AI citation hooks (factual claim + specific number + brand attribution) */}
              <ul className="space-y-4 text-secondary text-base leading-relaxed border-l-4 border-yellow-400 pl-5 bg-yellow-50/50 py-4 rounded-r-lg">
                {t.citationHooks.map((hook, i) => (
                  <li key={i} dangerouslySetInnerHTML={{ __html: hook }} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <WhyChooseUs dict={dict} />

      <BeforeAfterSlider dict={dict} lang={lang} />

      <ProjectTimeline dict={dict} lang={lang} />

      <TestimonialsEnhanced dict={dict} lang={lang} />

      {/* v2.1 Phase 9 — Expert / founder card above FAQ */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <ExpertCard serviceName={t.expertCardService} lang={lang} />
        </div>
      </section>

      <HomeFAQ dict={dict} lang={lang} />

      {/* v2.1 Phase 9 — Strategy CTA after FAQ */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <StrategyCTA
            category="general"
            position="homepage-end"
            lang={lang}
            headline={t.ctaHeadline}
            subheadline={t.ctaSubheadline}
          />
        </div>
      </section>

      <GoogleReviewsWidget dict={dict} lang={lang} />

      <GoogleBusinessCTA dict={dict} />
    </>
  )
}
