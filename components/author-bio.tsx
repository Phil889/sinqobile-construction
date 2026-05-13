import Image from 'next/image'
import Link from 'next/link'
import { Award, Linkedin, MapPin, ShieldCheck } from 'lucide-react'

type Lang = 'en' | 'af' | 'zu' | 'st'

interface AuthorBioProps {
  name?: string
  jobTitle?: string
  bio?: string
  image?: string
  expertise?: string[]
  linkedinUrl?: string
  lang?: Lang
  className?: string
}

const T: Record<Lang, {
  defaultJobTitle: string
  defaultBio: string
  defaultExpertise: string[]
  aboutAuthor: string
  writtenBy: string
  location: string
  expertiseHeading: string
  readBio: string
}> = {
  en: {
    defaultJobTitle: 'Founder & NHBRC Registered Builder',
    defaultBio: 'NHBRC registered builder with 15+ years of hands-on construction experience across Gauteng. Founded Sinqobile Construction in 2010 and has delivered 500+ projects spanning new home builds, renovations, plastering, paving, roofing, and home extensions across Johannesburg, Sandton, Pretoria, and Centurion.',
    defaultExpertise: [
      'NHBRC Compliance',
      'SANS 10400 Building Regulations',
      'Residential Construction',
      'Home Renovations',
      'Project Management',
      'Construction Cost Estimation',
    ],
    aboutAuthor: 'About the Author',
    writtenBy: 'Written and verified by:',
    location: 'Sandton, Gauteng — serving the Greater Johannesburg metro',
    expertiseHeading: 'Expertise & Credentials',
    readBio: 'Read full bio →',
  },
  af: {
    defaultJobTitle: 'Stigter & NHBRC Geregistreerde Bouer',
    defaultBio: 'NHBRC-geregistreerde bouer met 15+ jaar praktiese konstruksie-ondervinding regoor Gauteng. Het Sinqobile Construction in 2010 gestig en het 500+ projekte gelewer wat strek oor nuwe huisbou, opknappings, pleisterwerk, plaveisel, dakwerk, en huisuitbreidings regoor Johannesburg, Sandton, Pretoria, en Centurion.',
    defaultExpertise: [
      'NHBRC Voldoening',
      'SANS 10400 Bouregulasies',
      'Residensiële Konstruksie',
      'Huisopknappings',
      'Projekbestuur',
      'Konstruksiekoste-skatting',
    ],
    aboutAuthor: 'Oor die Skrywer',
    writtenBy: 'Geskryf en geverifieer deur:',
    location: 'Sandton, Gauteng — bedien die Groter Johannesburg metro',
    expertiseHeading: 'Kundigheid & Kwalifikasies',
    readBio: 'Lees volle bio →',
  },
  zu: {
    defaultJobTitle: 'Umsunguli & Umakhi Obhalisiwe yi-NHBRC',
    defaultBio: 'Umakhi obhalisiwe yi-NHBRC oneminyaka engu-15+ yolwazi lwezandla lokwakha eGauteng. Wasungula i-Sinqobile Construction ngo-2010 futhi unikeze amaphrojekthi angu-500+ aphakathi nokwakhiwa kwezindlu ezintsha, ukuvuselelwa, ukubhinca, ukungcweka, ukufakwa kophahla, nezandiso zezindlu eJohannesburg, eSandton, ePretoria, naseCenturion.',
    defaultExpertise: [
      'Ukulandela kwe-NHBRC',
      'Imithetho Yokwakha ye-SANS 10400',
      'Ukwakha Izindlu Zasekhaya',
      'Ukuvuselelwa Kwezindlu',
      'Ukuphathwa Kwemiphrojekthi',
      'Ukulinganisa Izindleko Zokwakha',
    ],
    aboutAuthor: 'Mayelana Nombhali',
    writtenBy: 'Kubhalwe futhi kuqinisekiswe ngu:',
    location: 'eSandton, eGauteng — sisebenzela iJohannesburg metro Enkulu',
    expertiseHeading: 'Ubuchwepheshe Neziqu',
    readBio: 'Funda i-bio epheleleyo →',
  },
  st: {
    defaultJobTitle: 'Mothehi & Mohahi o Ngolisitsoeng NHBRC',
    defaultBio: 'Mohahi o ngolisitsoeng NHBRC ka lilemo tse 15+ tsa boiphihlelo ba kaho ka matsoho Gauteng kaofela. O thehile Sinqobile Construction ka 2010 mme o fane ka merero e 500+ e akarelletsang kaho ea matlo a matjha, ntlafatso, pleister, peleto, marulelo, le keketso ea matlo Johannesburg, Sandton, Pretoria, le Centurion.',
    defaultExpertise: [
      'Ho Latela NHBRC',
      'Melao ea Kaho ea SANS 10400',
      'Kaho ea Matlo a Bodulo',
      'Ntlafatso ea Matlo',
      'Tsamaiso ea Morero',
      'Tekanyetso ea Litjeo tsa Kaho',
    ],
    aboutAuthor: 'Ka Mongoli',
    writtenBy: 'E ngotsoe le ho netefatsoa ke:',
    location: 'Sandton, Gauteng — re sebeletsa Johannesburg Metro e Kgolo',
    expertiseHeading: 'Botsebi & Mangolo',
    readBio: 'Bala bio e felletseng →',
  },
}

export function AuthorBio({
  name = 'Dingwayo Reason Ndlovu',
  jobTitle,
  bio,
  image = '/images/dingwayo-ndlovu.jpg',
  expertise,
  linkedinUrl,
  lang = 'en',
  className = '',
}: AuthorBioProps) {
  const t = T[lang] || T.en
  const finalJobTitle = jobTitle ?? t.defaultJobTitle
  const finalBio = bio ?? t.defaultBio
  const finalExpertise = expertise ?? t.defaultExpertise

  return (
    <aside
      className={`relative overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-6 md:p-8 shadow-sm ${className}`}
      aria-label={t.aboutAuthor}
      itemScope
      itemType="https://schema.org/Person"
    >
      <div className="flex items-start gap-3 mb-5">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-yellow-100">
          <ShieldCheck className="w-5 h-5 text-yellow-700" aria-hidden="true" />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
            {t.aboutAuthor}
          </p>
          <p className="text-sm text-gray-700">{t.writtenBy}</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="shrink-0">
          <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden ring-4 ring-white shadow-lg">
            <Image
              src={image}
              alt={`${name} – ${finalJobTitle}, Sinqobile Construction`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 96px, 128px"
              itemProp="image"
            />
          </div>
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight" itemProp="name">
            <Link
              href={`/${lang}/about`}
              className="hover:text-yellow-600 transition-colors"
              itemProp="url"
            >
              {name}
            </Link>
          </h3>
          <p className="mt-1 text-sm md:text-base font-medium text-gray-700" itemProp="jobTitle">
            {finalJobTitle}
          </p>
          <p className="mt-1 text-sm text-gray-500 flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
            <span>{t.location}</span>
          </p>

          <p className="mt-3 text-sm md:text-base text-gray-700 leading-relaxed" itemProp="description">
            {finalBio}
          </p>

          {finalExpertise.length > 0 && (
            <div className="mt-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2 flex items-center gap-1">
                <Award className="w-3.5 h-3.5" aria-hidden="true" />
                {t.expertiseHeading}
              </p>
              <ul className="flex flex-wrap gap-2" itemProp="knowsAbout">
                {finalExpertise.map((tag) => (
                  <li
                    key={tag}
                    className="px-2.5 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-700 border border-gray-200"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href={`/${lang}/about`}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-yellow-700 hover:text-yellow-800 hover:underline"
            >
              {t.readBio}
            </Link>
            {linkedinUrl && (
              <Link
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-700 hover:text-blue-800 hover:underline"
                itemProp="sameAs"
              >
                <Linkedin className="w-4 h-4" aria-hidden="true" />
                LinkedIn
              </Link>
            )}
          </div>
        </div>
      </div>

      <link itemProp="worksFor" href="https://www.sinqobileconstruction.co.za/#organization" />
    </aside>
  )
}

export default AuthorBio
