import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { Calendar, Tag } from 'lucide-react'
import { Locale, i18n } from '@/i18n.config'
import { blogPosts } from '@/lib/blog-data'
import SchemaMarkup from '@/components/schema-markup'
import { AuthorBio } from '@/components/author-bio'
import { StrategyCTA } from '@/components/strategy-cta'

const SITE_URL = 'https://www.sinqobileconstruction.co.za'

type L<T> = { en: T; af: T; zu: T; st: T }

const AUTHORS = {
  'dingwayo-ndlovu': {
    name: 'Dingwayo Reason Ndlovu',
    slug: 'dingwayo-ndlovu',
    image: '/images/dingwayo-ndlovu.jpg',
    matchAuthorNames: ['Dingwayo Reason Ndlovu', 'Dingwayo Ndlovu', 'Sinqobile Construction', 'Sinqobile Construction Team'],
    jobTitle: {
      en: 'Founder & NHBRC Registered Builder',
      af: 'Stigter & NHBRC Geregistreerde Bouer',
      zu: 'Umsunguli & Umakhi Obhalisiwe yi-NHBRC',
      st: 'Mothehi & Mohahi o Ngolisitsoeng NHBRC',
    } as L<string>,
    bio: {
      en: 'Dingwayo founded Sinqobile Construction in 2010. He is an NHBRC registered builder with 15+ years of hands-on construction experience across Gauteng, and has personally overseen 500+ completed projects ranging from new family homes to large-scale renovations and home extensions across Johannesburg, Sandton, Pretoria, and Centurion.',
      af: 'Dingwayo het Sinqobile Construction in 2010 gestig. Hy is \'n NHBRC-geregistreerde bouer met 15+ jaar praktiese konstruksie-ondervinding regoor Gauteng, en het persoonlik toesig gehou oor 500+ voltooide projekte wat strek van nuwe familiehuise tot grootskaalse opknappings en huisuitbreidings regoor Johannesburg, Sandton, Pretoria, en Centurion.',
      zu: 'UDingwayo wasungula i-Sinqobile Construction ngo-2010. Ungumakhi obhalisiwe yi-NHBRC oneminyaka engu-15+ yolwazi lwezandla lokwakha eGauteng, futhi ubheke ngobuqu amaphrojekthi angu-500+ aphelelisiwe asukela kumakhaya amasha emindeni kuya ekuvuselelweni okukhulu nasezandisweni zezindlu eJohannesburg, eSandton, ePretoria, naseCenturion.',
      st: 'Dingwayo o thehile Sinqobile Construction ka 2010. Ke mohahi o ngolisitsoeng NHBRC ka lilemo tse 15+ tsa boiphihlelo ba kaho ka matsoho Gauteng kaofela, mme o hlokometse ka botho merero e 500+ e phethetsoeng e tlohang ho matlo a matjha a malapa ho fihlela ho ntlafatso e kgolo le keketso ea matlo Johannesburg, Sandton, Pretoria, le Centurion.',
    } as L<string>,
    expertise: {
      en: [
        'NHBRC Compliance',
        'SANS 10400 Building Regulations',
        'Residential Construction',
        'Home Renovations',
        'Project Management',
        'Construction Cost Estimation',
        'Material Sourcing',
      ],
      af: [
        'NHBRC Voldoening',
        'SANS 10400 Bouregulasies',
        'Residensiële Konstruksie',
        'Huisopknappings',
        'Projekbestuur',
        'Konstruksiekoste-skatting',
        'Materiaalverkryging',
      ],
      zu: [
        'Ukulandela kwe-NHBRC',
        'Imithetho Yokwakha ye-SANS 10400',
        'Ukwakha Izindlu Zasekhaya',
        'Ukuvuselelwa Kwezindlu',
        'Ukuphathwa Kwemiphrojekthi',
        'Ukulinganisa Izindleko Zokwakha',
        'Ukutholwa Kwezimpahla',
      ],
      st: [
        'Ho Latela NHBRC',
        'Melao ea Kaho ea SANS 10400',
        'Kaho ea Matlo a Bodulo',
        'Ntlafatso ea Matlo',
        'Tsamaiso ea Morero',
        'Tekanyetso ea Litjeo tsa Kaho',
        'Ho Fumana Lisebelisoa',
      ],
    } as L<string[]>,
  },
} as const

const PAGE_T: L<{
  home: string
  blog: string
  articlesBy: (n: string) => string
  articlesDescription: (count: number, n: string) => string
  noArticles: string
  readArticle: string
  ctaHeadline: string
  ctaSub: string
  ctaText: string
}> = {
  en: {
    home: 'Home',
    blog: 'Blog',
    articlesBy: (n) => `Articles by ${n}`,
    articlesDescription: (count, n) => `${count} construction guides, cost references, and building insights from ${n}'s 15+ years on the ground in Gauteng.`,
    noArticles: 'No articles published yet.',
    readArticle: 'Read article →',
    ctaHeadline: 'Talk Directly to Dingwayo',
    ctaSub: "Have a construction question that's not covered in our guides? Book a free 15-minute consultation with our founder.",
    ctaText: 'Get a Free Consultation',
  },
  af: {
    home: 'Tuis',
    blog: 'Blog',
    articlesBy: (n) => `Artikels deur ${n}`,
    articlesDescription: (count, n) => `${count} konstruksie-gidse, kosteverwysings, en bou-insigte uit ${n} se 15+ jaar op die grond in Gauteng.`,
    noArticles: 'Nog geen artikels gepubliseer nie.',
    readArticle: 'Lees artikel →',
    ctaHeadline: 'Praat Direk met Dingwayo',
    ctaSub: 'Het jy \'n konstruksievraag wat nie in ons gidse gedek word nie? Bespreek \'n gratis 15-minute konsultasie met ons stigter.',
    ctaText: 'Kry \'n Gratis Konsultasie',
  },
  zu: {
    home: 'Ekhaya',
    blog: 'Ibhulogi',
    articlesBy: (n) => `Izindatshana ngu-${n}`,
    articlesDescription: (count, n) => `${count} izinkomba zokwakha, izinkomba zezindleko, kanye nezilumino zokwakha kusukela eminyakeni engu-15+ ka-${n} esebenza eGauteng.`,
    noArticles: 'Azikho izindatshana ezishicilelwe okwamanje.',
    readArticle: 'Funda indatshana →',
    ctaHeadline: 'Khuluma noDingwayo Ngqo',
    ctaSub: 'Unombuzo wokwakha ongahlangabezani kwizinkomba zethu? Bhukha ukubonisana kwamahhala kwemizuzu engu-15 nomsunguli wethu.',
    ctaText: 'Thola Ukubonisana Kwamahhala',
  },
  st: {
    home: 'Lehae',
    blog: 'Blog',
    articlesBy: (n) => `Lihlooho tse Ngotsoeng ke ${n}`,
    articlesDescription: (count, n) => `${count} ditataiso tsa kaho, lipapali tsa litjeo, le maikutlo a kaho ho tsoa lilemong tse 15+ tsa ${n} a sebetsa Gauteng.`,
    noArticles: 'Ha ho na dihloho tse hatisitsoeng hajoale.',
    readArticle: 'Bala sehlooho →',
    ctaHeadline: 'Bua le Dingwayo Ka Otloloha',
    ctaSub: 'Na u na le potso ea kaho e sa koahelwang dipuisanong tsa rona? Behela puisano ea mahala ea metsotso e 15 le mothehi oa rona.',
    ctaText: 'Fumana Puisano ea Mahala',
  },
}

const DATE_LOCALES: Record<string, string> = { en: 'en-ZA', af: 'af-ZA', zu: 'en-ZA', st: 'en-ZA' }

export async function generateStaticParams() {
  const params: { lang: string; slug: string }[] = []
  for (const locale of i18n.locales) {
    for (const slug of Object.keys(AUTHORS)) {
      params.push({ lang: locale, slug })
    }
  }
  return params
}

export async function generateMetadata({
  params: { lang, slug },
}: {
  params: { lang: Locale; slug: string }
}): Promise<Metadata> {
  const author = AUTHORS[slug as keyof typeof AUTHORS]
  if (!author) return { title: 'Author Not Found' }

  const jobTitle = author.jobTitle[lang]
  const bio = author.bio[lang]

  return {
    title: `${author.name} — ${PAGE_T[lang].articlesBy(author.name)} | Sinqobile Construction`,
    description: bio,
    alternates: {
      canonical: `${SITE_URL}/${lang}/blog/author/${slug}`,
      languages: Object.fromEntries(
        i18n.locales.map((l) => [l, `${SITE_URL}/${l}/blog/author/${slug}`])
      ),
    },
    openGraph: {
      type: 'profile',
      url: `${SITE_URL}/${lang}/blog/author/${slug}`,
      title: `${author.name} — ${jobTitle}`,
      description: bio,
      images: [
        {
          url: `/api/og?title=${encodeURIComponent(author.name)}&subtitle=${encodeURIComponent(jobTitle)}`,
          width: 1200,
          height: 630,
        },
      ],
    },
  }
}

export const revalidate = 3600

export default function AuthorPage({
  params: { lang, slug },
}: {
  params: { lang: Locale; slug: string }
}) {
  const author = AUTHORS[slug as keyof typeof AUTHORS]
  if (!author) notFound()

  const t = PAGE_T[lang]

  const authorPosts = blogPosts.filter((post) =>
    author.matchAuthorNames.some((name) => post.author === name)
  )

  const breadcrumbs = [
    { name: t.home, url: `${SITE_URL}/${lang}` },
    { name: t.blog, url: `${SITE_URL}/${lang}/blog` },
    { name: author.name, url: `${SITE_URL}/${lang}/blog/author/${slug}` },
  ]

  return (
    <>
      <SchemaMarkup type="person" lang={lang} data={{ ...author, jobTitle: author.jobTitle[lang], bio: author.bio[lang] }} />
      <SchemaMarkup type="breadcrumb" lang={lang} data={{ items: breadcrumbs }} />
      <SchemaMarkup
        type="itemList"
        lang={lang}
        data={{
          name: t.articlesBy(author.name),
          description: t.articlesDescription(authorPosts.length, author.name),
          items: authorPosts.map((p) => ({
            url: `${SITE_URL}/${lang}/blog/${p.slug}`,
            name: p.title,
            description: p.excerpt,
            image: p.image,
          })),
        }}
      />

      <div className="container mx-auto px-4 py-12 max-w-5xl">
        <nav aria-label="Breadcrumb" className="text-sm text-gray-600 mb-6">
          <ol className="flex items-center gap-2 flex-wrap">
            <li>
              <Link href={`/${lang}`} className="hover:text-yellow-700">{t.home}</Link>
            </li>
            <li aria-hidden="true">›</li>
            <li>
              <Link href={`/${lang}/blog`} className="hover:text-yellow-700">{t.blog}</Link>
            </li>
            <li aria-hidden="true">›</li>
            <li className="text-gray-900 font-medium">{author.name}</li>
          </ol>
        </nav>

        <AuthorBio
          lang={lang}
          name={author.name}
          jobTitle={author.jobTitle[lang]}
          bio={author.bio[lang]}
          image={author.image}
          expertise={[...author.expertise[lang]]}
          className="mb-10"
        />

        <section aria-labelledby="articles-heading">
          <h2 id="articles-heading" className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            {t.articlesBy(author.name)}
          </h2>
          <p className="text-gray-600 mb-6">
            {t.articlesDescription(authorPosts.length, author.name)}
          </p>

          {authorPosts.length === 0 ? (
            <p className="text-gray-500 italic">{t.noArticles}</p>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              {authorPosts.map((post) => (
                <article
                  key={post.slug}
                  className="rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow bg-white"
                >
                  {post.image && (
                    <Link href={`/${lang}/blog/${post.slug}`}>
                      <div className="relative h-48 w-full bg-gray-100">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover"
                        />
                      </div>
                    </Link>
                  )}
                  <div className="p-5">
                    <div className="flex items-center gap-3 text-xs text-gray-500 mb-2">
                      <span className="inline-flex items-center gap-1">
                        <Tag className="w-3 h-3" aria-hidden="true" />
                        {post.category}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="w-3 h-3" aria-hidden="true" />
                        {new Date(post.date).toLocaleDateString(DATE_LOCALES[lang] || 'en-ZA', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                        })}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 leading-tight">
                      <Link href={`/${lang}/blog/${post.slug}`} className="hover:text-yellow-700">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="mt-2 text-sm text-gray-600 line-clamp-3">{post.excerpt}</p>
                    <Link
                      href={`/${lang}/blog/${post.slug}`}
                      className="mt-3 inline-block text-sm font-medium text-yellow-700 hover:underline"
                    >
                      {t.readArticle}
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        <div className="mt-12">
          <StrategyCTA
            category="author-archive"
            position="author-page-end"
            lang={lang}
            headline={t.ctaHeadline}
            subheadline={t.ctaSub}
            ctaText={t.ctaText}
          />
        </div>
      </div>
    </>
  )
}
