import type { Metadata } from 'next'
import Link from 'next/link'
import { Search } from 'lucide-react'
import { Locale, i18n } from '@/i18n.config'
import { blogPosts } from '@/lib/blog-data'
import { enhancedServices } from '@/lib/enhanced-services-data'
import SchemaMarkup from '@/components/schema-markup'

const SITE_URL = 'https://www.sinqobileconstruction.co.za'

const AREAS = [
  { slug: 'johannesburg', name: 'Johannesburg' },
  { slug: 'sandton', name: 'Sandton' },
  { slug: 'pretoria', name: 'Pretoria' },
  { slug: 'centurion', name: 'Centurion' },
  { slug: 'midrand', name: 'Midrand' },
  { slug: 'randburg', name: 'Randburg' },
  { slug: 'fourways', name: 'Fourways' },
  { slug: 'roodepoort', name: 'Roodepoort' },
]

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

export async function generateMetadata({
  params,
  searchParams,
}: {
  params: { lang: Locale }
  searchParams: { q?: string }
}): Promise<Metadata> {
  const q = searchParams.q?.trim() ?? ''
  const title = q
    ? `Search results for "${q}" — Sinqobile Construction`
    : 'Search — Sinqobile Construction'
  const description = q
    ? `Search results across services, areas, and articles on Sinqobile Construction for "${q}".`
    : 'Search Sinqobile Construction services, service areas, and construction guides for Johannesburg and Gauteng.'

  return {
    title,
    description,
    alternates: {
      canonical: `${SITE_URL}/${params.lang}/search${q ? `?q=${encodeURIComponent(q)}` : ''}`,
    },
    robots: { index: !q, follow: true },
  }
}

interface SearchResult {
  type: 'service' | 'area' | 'blog'
  title: string
  description: string
  url: string
}

function runSearch(query: string, lang: string): SearchResult[] {
  const q = query.toLowerCase().trim()
  if (!q) return []

  const results: SearchResult[] = []

  for (const service of enhancedServices) {
    const haystack = [service.name, service.description, ...service.seoKeywords].join(' ').toLowerCase()
    if (haystack.includes(q)) {
      results.push({
        type: 'service',
        title: service.name,
        description: service.description,
        url: `/${lang}/services/${service.slug}`,
      })
    }
  }

  for (const area of AREAS) {
    if (area.name.toLowerCase().includes(q) || `construction ${area.name}`.toLowerCase().includes(q)) {
      results.push({
        type: 'area',
        title: `Construction in ${area.name}`,
        description: `NHBRC registered construction services in ${area.name}, Gauteng.`,
        url: `/${lang}/areas/${area.slug}`,
      })
    }
  }

  for (const post of blogPosts) {
    const haystack = [post.title, post.excerpt, post.category, ...post.keywords].join(' ').toLowerCase()
    if (haystack.includes(q)) {
      results.push({
        type: 'blog',
        title: post.title,
        description: post.excerpt,
        url: `/${lang}/blog/${post.slug}`,
      })
    }
  }

  return results.slice(0, 30)
}

export default function SearchPage({
  params: { lang },
  searchParams,
}: {
  params: { lang: Locale }
  searchParams: { q?: string }
}) {
  const query = searchParams.q?.trim() ?? ''
  const results = runSearch(query, lang)

  const breadcrumbs = [
    { name: 'Home', url: `${SITE_URL}/${lang}` },
    { name: 'Search', url: `${SITE_URL}/${lang}/search` },
  ]

  return (
    <>
      <SchemaMarkup type="breadcrumb" lang={lang} data={{ items: breadcrumbs }} />

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <nav aria-label="Breadcrumb" className="text-sm text-gray-600 mb-4">
          <ol className="flex items-center gap-2">
            <li>
              <Link href={`/${lang}`} className="hover:text-yellow-700">
                Home
              </Link>
            </li>
            <li aria-hidden="true">›</li>
            <li className="text-gray-900 font-medium">Search</li>
          </ol>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-2">
          {query ? `Search results for "${query}"` : 'Search'}
        </h1>
        <p className="text-gray-600 mb-8">
          {query
            ? `Found ${results.length} result${results.length === 1 ? '' : 's'} across services, areas, and articles.`
            : 'Search across services, service areas, and construction guides.'}
        </p>

        <form
          method="get"
          action={`/${lang}/search`}
          className="relative mb-10"
          role="search"
        >
          <label htmlFor="search-q" className="sr-only">
            Search Sinqobile Construction
          </label>
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
            aria-hidden="true"
          />
          <input
            id="search-q"
            type="search"
            name="q"
            defaultValue={query}
            placeholder="e.g. paving Sandton, kitchen renovation, NHBRC..."
            className="w-full pl-12 pr-4 py-4 rounded-lg border-2 border-gray-200 focus:border-yellow-500 focus:outline-none text-base"
            autoComplete="off"
            spellCheck="false"
          />
        </form>

        {query && results.length === 0 && (
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-6 text-center">
            <p className="text-gray-700 mb-3">
              No results for &ldquo;{query}&rdquo;. Try a service name (paving, plumbing,
              roofing), an area (Sandton, Pretoria), or a topic (NHBRC, cost).
            </p>
            <Link
              href={`/${lang}/contact`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-yellow-500 text-gray-900 font-semibold hover:bg-yellow-600"
            >
              Contact us directly
            </Link>
          </div>
        )}

        {results.length > 0 && (
          <ul className="space-y-4">
            {results.map((r, i) => (
              <li
                key={`${r.type}-${r.url}-${i}`}
                className="p-5 rounded-lg border border-gray-200 hover:border-yellow-400 hover:shadow-sm transition-all"
              >
                <span className="inline-block px-2 py-0.5 text-xs font-semibold uppercase rounded bg-gray-100 text-gray-700 mb-2">
                  {r.type}
                </span>
                <h2 className="text-lg font-bold text-gray-900">
                  <Link href={r.url} className="hover:text-yellow-700">
                    {r.title}
                  </Link>
                </h2>
                <p className="mt-1 text-sm text-gray-600">{r.description}</p>
                <Link
                  href={r.url}
                  className="mt-2 inline-block text-sm font-medium text-yellow-700 hover:underline"
                >
                  {r.url}
                </Link>
              </li>
            ))}
          </ul>
        )}

        {!query && (
          <div className="grid md:grid-cols-2 gap-6">
            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-3">Popular services</h2>
              <ul className="space-y-2">
                {enhancedServices.filter((s) => s.featured).slice(0, 8).map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/${lang}/services/${s.slug}`}
                      className="text-yellow-700 hover:underline"
                    >
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-3">Service areas</h2>
              <ul className="space-y-2">
                {AREAS.map((a) => (
                  <li key={a.slug}>
                    <Link
                      href={`/${lang}/areas/${a.slug}`}
                      className="text-yellow-700 hover:underline"
                    >
                      {a.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        )}
      </div>
    </>
  )
}
