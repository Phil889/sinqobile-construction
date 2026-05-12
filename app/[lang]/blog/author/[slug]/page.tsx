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

// Currently only one author — the founder. Extensible if you add more authors.
const AUTHORS = {
  'dingwayo-ndlovu': {
    name: 'Dingwayo Reason Ndlovu',
    slug: 'dingwayo-ndlovu',
    jobTitle: 'Founder & NHBRC Registered Builder',
    image: '/images/dingwayo-ndlovu.jpg',
    bio: 'Dingwayo founded Sinqobile Construction in 2010. He is an NHBRC registered builder with 15+ years of hands-on construction experience across Gauteng, and has personally overseen 500+ completed projects ranging from new family homes to large-scale renovations and home extensions across Johannesburg, Sandton, Pretoria, and Centurion.',
    matchAuthorNames: ['Dingwayo Reason Ndlovu', 'Dingwayo Ndlovu', 'Sinqobile Construction', 'Sinqobile Construction Team'],
    expertise: [
      'NHBRC Compliance',
      'SANS 10400 Building Regulations',
      'Residential Construction',
      'Home Renovations',
      'Project Management',
      'Construction Cost Estimation',
      'Material Sourcing',
    ],
  },
} as const

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

  return {
    title: `${author.name} — Construction Articles & Insights | Sinqobile Construction`,
    description: `Articles, building cost guides, and construction insights written by ${author.name}, ${author.jobTitle} at Sinqobile Construction. 15+ years of NHBRC-registered building experience in Gauteng.`,
    alternates: {
      canonical: `${SITE_URL}/${lang}/blog/author/${slug}`,
      languages: Object.fromEntries(
        i18n.locales.map((l) => [l, `${SITE_URL}/${l}/blog/author/${slug}`])
      ),
    },
    openGraph: {
      type: 'profile',
      url: `${SITE_URL}/${lang}/blog/author/${slug}`,
      title: `${author.name} — ${author.jobTitle}`,
      description: author.bio,
      images: [
        {
          url: `/api/og?title=${encodeURIComponent(author.name)}&subtitle=${encodeURIComponent(author.jobTitle)}`,
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

  const authorPosts = blogPosts.filter((post) =>
    author.matchAuthorNames.some((name) => post.author === name)
  )

  const breadcrumbs = [
    { name: 'Home', url: `${SITE_URL}/${lang}` },
    { name: 'Blog', url: `${SITE_URL}/${lang}/blog` },
    { name: 'Authors', url: `${SITE_URL}/${lang}/blog` },
    { name: author.name, url: `${SITE_URL}/${lang}/blog/author/${slug}` },
  ]

  return (
    <>
      <SchemaMarkup type="person" lang={lang} data={author} />
      <SchemaMarkup type="breadcrumb" lang={lang} data={{ items: breadcrumbs }} />
      <SchemaMarkup
        type="itemList"
        lang={lang}
        data={{
          name: `Articles by ${author.name}`,
          description: `${authorPosts.length} construction articles and guides written by ${author.name}`,
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
              <Link href={`/${lang}`} className="hover:text-yellow-700">Home</Link>
            </li>
            <li aria-hidden="true">›</li>
            <li>
              <Link href={`/${lang}/blog`} className="hover:text-yellow-700">Blog</Link>
            </li>
            <li aria-hidden="true">›</li>
            <li className="text-gray-900 font-medium">{author.name}</li>
          </ol>
        </nav>

        <AuthorBio
          lang={lang}
          name={author.name}
          jobTitle={author.jobTitle}
          bio={author.bio}
          image={author.image}
          expertise={[...author.expertise]}
          className="mb-10"
        />

        <section aria-labelledby="articles-heading">
          <h2 id="articles-heading" className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Articles by {author.name}
          </h2>
          <p className="text-gray-600 mb-6">
            {authorPosts.length} construction guides, cost references, and building insights
            from {author.name}&apos;s 15+ years on the ground in Gauteng.
          </p>

          {authorPosts.length === 0 ? (
            <p className="text-gray-500 italic">No articles published yet.</p>
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
                        {new Date(post.date).toLocaleDateString('en-ZA', {
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
                      Read article →
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
            headline="Talk Directly to Dingwayo"
            subheadline="Have a construction question that's not covered in our guides? Book a free 15-minute consultation with our founder."
            ctaText="Get a Free Consultation"
          />
        </div>
      </div>
    </>
  )
}
