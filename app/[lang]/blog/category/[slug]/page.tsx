import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { Calendar, Tag, User } from 'lucide-react'
import { Locale, i18n } from '@/i18n.config'
import { blogPosts, blogCategories } from '@/lib/blog-data'
import SchemaMarkup from '@/components/schema-markup'

const SITE_URL = 'https://www.sinqobileconstruction.co.za'

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

const CATEGORY_BY_SLUG = Object.fromEntries(
  blogCategories.filter((c) => c !== 'All').map((c) => [slugify(c), c])
)

const CATEGORY_DESCRIPTIONS: Record<string, string> = {
  'Building Costs':
    'Real-world construction cost data for Johannesburg and Gauteng — per-square-metre rates, component pricing, and total build budgets.',
  'Contractor Tips':
    'How to choose, vet, and work with a construction contractor in South Africa — verifying NHBRC, reading quotes, managing the build.',
  'Renovations':
    'Kitchen, bathroom, and whole-home renovation guides — costs, timelines, and what to expect in Gauteng.',
  'Regulations':
    'NHBRC, SANS 10400, and municipal building approval explained for South African homeowners.',
  'Roofing': 'Roofing types, costs, and maintenance for Gauteng homes — IBR, tile, slate, and waterproofing.',
  'Paving': 'Driveway, patio, and walkway paving guides — paver types, installation, costs in Johannesburg.',
  'Waterproofing': 'Roof, basement, and bathroom waterproofing techniques and costs in South Africa.',
  'Home Extensions': 'Granny flats, second-storey additions, and room extensions — planning, permits, costs.',
  'Plumbing': 'Geyser installation, drain unblocking, leak repair — plumbing guides for Gauteng homeowners.',
  'Painting': 'Interior and exterior painting guides — paint types, prep, costs, and contractor selection.',
  'Tiling': 'Wall and floor tiling for kitchens, bathrooms, and living areas — tile types and installation.',
  'Granny Flats': 'Granny flat construction guides — costs, plans, NHBRC compliance, rental considerations.',
  'Electrical': 'Electrical compliance, geyser conversions, COC certificates — what Gauteng homeowners need to know.',
  'Fencing': 'Boundary walls, electric fencing, security fencing — options and costs in Gauteng.',
  'Plastering': 'Wall plastering techniques, costs, and finishes — including Rhinolite and texture options.',
  'Insurance': 'Construction insurance, builders all risk, NHBRC warranties explained.',
  'Building Plans': 'Municipal plan submission, architect coordination, plan approval timelines in Gauteng.',
  'Landscaping': 'Garden design, irrigation, paving integration, and landscaping costs in Johannesburg.',
  'Maintenance': 'Home maintenance schedules, inspections, and preventive care for Gauteng properties.',
  'Design Ideas': 'Modern home design inspiration tailored to the South African climate and lifestyle.',
}

export async function generateStaticParams() {
  const params: { lang: string; slug: string }[] = []
  for (const locale of i18n.locales) {
    for (const slug of Object.keys(CATEGORY_BY_SLUG)) {
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
  const category = CATEGORY_BY_SLUG[slug]
  if (!category) return { title: 'Category Not Found' }

  const description =
    CATEGORY_DESCRIPTIONS[category] ??
    `${category} articles from Sinqobile Construction — NHBRC registered builders in Johannesburg, Gauteng.`

  return {
    title: `${category} Articles & Guides | Sinqobile Construction`,
    description,
    alternates: {
      canonical: `${SITE_URL}/${lang}/blog/category/${slug}`,
      languages: Object.fromEntries(
        i18n.locales.map((l) => [l, `${SITE_URL}/${l}/blog/category/${slug}`])
      ),
    },
    openGraph: {
      type: 'website',
      url: `${SITE_URL}/${lang}/blog/category/${slug}`,
      title: `${category} — Sinqobile Construction Blog`,
      description,
      images: [
        {
          url: `/api/og?title=${encodeURIComponent(category)}&subtitle=${encodeURIComponent('Construction insights for Gauteng homeowners')}`,
          width: 1200,
          height: 630,
        },
      ],
    },
  }
}

export const revalidate = 3600

export default function BlogCategoryPage({
  params: { lang, slug },
}: {
  params: { lang: Locale; slug: string }
}) {
  const category = CATEGORY_BY_SLUG[slug]
  if (!category) notFound()

  const posts = blogPosts.filter((p) => p.category === category)
  const description =
    CATEGORY_DESCRIPTIONS[category] ??
    `Construction guides and insights in the ${category} category from Sinqobile Construction.`

  const breadcrumbs = [
    { name: 'Home', url: `${SITE_URL}/${lang}` },
    { name: 'Blog', url: `${SITE_URL}/${lang}/blog` },
    { name: category, url: `${SITE_URL}/${lang}/blog/category/${slug}` },
  ]

  return (
    <>
      <SchemaMarkup type="breadcrumb" lang={lang} data={{ items: breadcrumbs }} />
      <SchemaMarkup
        type="itemList"
        lang={lang}
        data={{
          name: `${category} Articles`,
          description,
          items: posts.map((p) => ({
            url: `${SITE_URL}/${lang}/blog/${p.slug}`,
            name: p.title,
            description: p.excerpt,
            image: p.image,
          })),
        }}
      />

      <div className="container mx-auto px-4 py-12 max-w-5xl">
        <nav aria-label="Breadcrumb" className="text-sm text-gray-600 mb-4">
          <ol className="flex items-center gap-2 flex-wrap">
            <li>
              <Link href={`/${lang}`} className="hover:text-yellow-700">Home</Link>
            </li>
            <li aria-hidden="true">›</li>
            <li>
              <Link href={`/${lang}/blog`} className="hover:text-yellow-700">Blog</Link>
            </li>
            <li aria-hidden="true">›</li>
            <li className="text-gray-900 font-medium">{category}</li>
          </ol>
        </nav>

        <header className="mb-8">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-100 text-yellow-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <Tag className="w-3 h-3" aria-hidden="true" />
            Category
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            {category} Articles
          </h1>
          <p className="mt-3 text-gray-700 max-w-3xl leading-relaxed" data-speakable="summary">
            {description}
          </p>
          <p className="mt-2 text-sm text-gray-500">
            {posts.length} article{posts.length === 1 ? '' : 's'} in this category.
          </p>
        </header>

        <nav aria-label="All categories" className="mb-10">
          <h2 className="sr-only">Browse other categories</h2>
          <ul className="flex flex-wrap gap-2">
            {Object.entries(CATEGORY_BY_SLUG).map(([catSlug, catName]) => (
              <li key={catSlug}>
                <Link
                  href={`/${lang}/blog/category/${catSlug}`}
                  className={`inline-block px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                    catSlug === slug
                      ? 'bg-yellow-500 text-gray-900'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {catName}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {posts.length === 0 ? (
          <p className="text-gray-500 italic">No articles in this category yet.</p>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {posts.map((post) => (
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
                      <User className="w-3 h-3" aria-hidden="true" />
                      {post.author}
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
                  <h2 className="text-lg font-bold text-gray-900 leading-tight">
                    <Link href={`/${lang}/blog/${post.slug}`} className="hover:text-yellow-700">
                      {post.title}
                    </Link>
                  </h2>
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
      </div>
    </>
  )
}
