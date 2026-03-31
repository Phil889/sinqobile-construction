import type { Metadata } from 'next'
import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionaries'
import Breadcrumb from '@/components/breadcrumb'
import BlogClient from './BlogClient'
import { blogPosts } from '@/lib/blog-data'

// v2 Workflow: Research-driven metadata for Blog hub page
export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: Locale }
}): Promise<Metadata> {
  return {
    title: lang === 'en'
      ? 'Construction Blog | Tips, Costs & Guides | Sinqobile Construction Johannesburg'
      : lang === 'af'
      ? 'Konstruksie Blog | Wenke, Koste & Gidse | Sinqobile Construction Johannesburg'
      : lang === 'zu'
      ? 'Ibhulogi Yokwakha | Amacebo, Izindleko | Sinqobile Construction eGoli'
      : 'Blog ea Kaho | Malebela, Litjeho | Sinqobile Construction Johannesburg',
    description: lang === 'en'
      ? 'Expert construction tips, building cost guides, and renovation advice for Johannesburg homeowners. By Sinqobile Construction — 15+ years, NHBRC registered.'
      : lang === 'af'
      ? 'Kundige konstruksiewenke, boukostegidse en renovasie-advies vir Johannesburg-huiseienaars. Deur Sinqobile Construction — 15+ jaar, NHBRC.'
      : lang === 'zu'
      ? 'Amacebo okwakha, izindleko zokwakha, nezeluleko zokuvuselela kubanikazi bamakhaya eGoli. NguSinqobile Construction — iminyaka engu-15+.'
      : 'Malebela a kaho, litataiso tsa litjeho, le likeletso tsa ho nchafatsa bakeng sa beng ba mahae Johannesburg. Ka Sinqobile Construction — lilemo tse 15+.',
    alternates: {
      canonical: `/${lang}/blog`,
      languages: {
        'en': '/en/blog',
        'af': '/af/blog',
        'zu': '/zu/blog',
        'st': '/st/blog',
        'x-default': '/en/blog',
      },
    },
    openGraph: {
      title: lang === 'en'
        ? 'Construction Blog | Tips, Costs & Guides | Sinqobile Construction Johannesburg'
        : lang === 'af'
        ? 'Konstruksie Blog | Wenke, Koste & Gidse | Sinqobile Construction Johannesburg'
        : lang === 'zu'
        ? 'Ibhulogi Yokwakha | Amacebo, Izindleko | Sinqobile Construction eGoli'
        : 'Blog ea Kaho | Malebela, Litjeho | Sinqobile Construction Johannesburg',
      description: lang === 'en'
        ? 'Expert construction tips, building cost guides, and renovation advice for Johannesburg homeowners. By Sinqobile Construction — 15+ years, NHBRC registered.'
        : lang === 'af'
        ? 'Kundige konstruksiewenke, boukostegidse en renovasie-advies vir Johannesburg-huiseienaars. Deur Sinqobile Construction — 15+ jaar, NHBRC.'
        : lang === 'zu'
        ? 'Amacebo okwakha, izindleko zokwakha, nezeluleko zokuvuselela kubanikazi bamakhaya eGoli. NguSinqobile Construction — iminyaka engu-15+.'
        : 'Malebela a kaho, litataiso tsa litjeho, le likeletso tsa ho nchafatsa bakeng sa beng ba mahae Johannesburg. Ka Sinqobile Construction — lilemo tse 15+.',
      url: `/${lang}/blog`,
      siteName: 'Sinqobile Construction',
      type: 'website',
      images: [{
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Construction Blog | Sinqobile Construction Johannesburg',
      }],
    },
  }
}

export default async function BlogPage({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  const dict = await getDictionary(lang)
  const baseUrl = 'https://www.sinqobileconstruction.co.za'

  // Blog schema with BlogPosting entries for rich results
  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': `${baseUrl}/${lang}/blog#blog`,
    url: `${baseUrl}/${lang}/blog`,
    name: 'Sinqobile Construction Blog',
    description: 'Expert construction tips, building cost guides, and renovation advice for Johannesburg homeowners.',
    publisher: {
      '@type': 'Organization',
      '@id': `${baseUrl}/#organization`,
    },
    inLanguage: lang,
    blogPost: blogPosts.map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.excerpt,
      url: `${baseUrl}/${lang}/blog/${post.slug}`,
      datePublished: post.date,
      dateModified: post.dateModified || post.date,
      author: {
        '@type': 'Person',
        '@id': `${baseUrl}/#founder`,
        name: post.author,
      },
      publisher: {
        '@type': 'Organization',
        '@id': `${baseUrl}/#organization`,
      },
      image: post.image ? `${baseUrl}${post.image}` : `${baseUrl}/og-image.jpg`,
      keywords: post.keywords.join(', '),
      inLanguage: lang,
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
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