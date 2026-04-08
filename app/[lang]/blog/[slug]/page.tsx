import { Locale } from '@/i18n.config'
import { getBlogPostBySlug, getRelatedPosts, blogPosts } from '@/lib/blog-data'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, User, Tag, ArrowLeft, Phone } from 'lucide-react'
import { Metadata } from 'next'
import MarkdownContent from '@/components/markdown-content'

const SITE_URL = 'https://www.sinqobileconstruction.co.za'

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({
  params: { lang, slug },
}: {
  params: { lang: Locale; slug: string }
}): Promise<Metadata> {
  const post = getBlogPostBySlug(slug)
  
  if (!post) {
    return {
      title: 'Article Not Found | Sinqobile Construction',
    }
  }

  const imageUrl = `${SITE_URL}${post.image.startsWith('/') ? post.image : `/${post.image}`}`

  return {
    title: `${post.title} | Sinqobile Construction Blog`,
    description: post.excerpt,
    keywords: post.keywords.join(', '),
    alternates: {
      canonical: `${SITE_URL}/${lang}/blog/${slug}`,
      languages: {
        'en': `${SITE_URL}/en/blog/${slug}`,
        'af': `${SITE_URL}/af/blog/${slug}`,
        'zu': `${SITE_URL}/zu/blog/${slug}`,
        'st': `${SITE_URL}/st/blog/${slug}`,
        'x-default': `${SITE_URL}/en/blog/${slug}`,
      },
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${SITE_URL}/${lang}/blog/${slug}`,
      siteName: 'Sinqobile Construction',
      images: [{
        url: imageUrl,
        width: 1200,
        height: 630,
        alt: post.title,
      }],
      type: 'article',
      publishedTime: post.date,
      modifiedTime: post.dateModified || post.date,
      authors: [post.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [imageUrl],
    },
  }
}

// ISR: regenerate blog posts daily
export const revalidate = 86400

export default function BlogPostPage({
  params: { lang, slug },
}: {
  params: { lang: Locale; slug: string }
}) {
  const post = getBlogPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = getRelatedPosts(slug, 3)

  const absoluteImage = `${SITE_URL}${post.image.startsWith('/') ? post.image : `/${post.image}`}`
  const pageUrl = `${SITE_URL}/${lang}/blog/${slug}`

  // Schema markup for Article
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": absoluteImage,
    "datePublished": post.date,
    "dateModified": post.dateModified || post.date,
    "author": {
      "@type": "Person",
      "@id": `${SITE_URL}/#founder`,
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      "name": "Sinqobile Construction",
      "logo": {
        "@type": "ImageObject",
        "url": `${SITE_URL}/logo.png`
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": pageUrl
    },
    "keywords": post.keywords.join(', '),
    "articleSection": post.category,
    "inLanguage": lang,
    "wordCount": post.content.split(/\s+/).filter(Boolean).length
  }

  // BreadcrumbList schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": `${SITE_URL}/${lang}`
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": `${SITE_URL}/${lang}/blog`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.title,
        "item": pageUrl
      }
    ]
  }

  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="pt-20">
        {/* Breadcrumb Navigation */}
        <div className="bg-lightBackground py-4">
          <div className="container mx-auto px-4">
            <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-sm text-secondary">
              <Link href={`/${lang}`} className="hover:text-primary transition-colors">Home</Link>
              <span>/</span>
              <Link href={`/${lang}/blog`} className="hover:text-primary transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-primary font-medium truncate max-w-xs">{post.title}</span>
            </nav>
          </div>
        </div>

        {/* Article Header */}
        <article className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Category Badge */}
              <div className="flex items-center space-x-2 mb-4">
                <Tag size={18} className="text-accent" />
                <span className="text-accent font-medium">{post.category}</span>
              </div>

              {/* Title */}
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">
                {post.title}
              </h1>

              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-6 text-secondary mb-8">
                <div className="flex items-center space-x-2">
                  <Calendar size={18} />
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString('en-ZA', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                </div>
                {post.dateModified && post.dateModified !== post.date && (
                  <div className="flex items-center space-x-2 text-sm">
                    <span>Updated:</span>
                    <time dateTime={post.dateModified}>
                      {new Date(post.dateModified).toLocaleDateString('en-ZA', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                  </div>
                )}
                <div className="flex items-center space-x-2">
                  <User size={18} />
                  <span>{post.author}</span>
                </div>
              </div>

              {/* Featured Image */}
              <div className="relative h-96 w-full mb-8 rounded-lg overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                <MarkdownContent content={post.content} />
              </div>

              {/* Keywords */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="font-semibold text-secondary mb-3">Related Topics:</h3>
                <div className="flex flex-wrap gap-2">
                  {post.keywords.map((keyword, index) => (
                    <span
                      key={index}
                      className="bg-lightBackground text-secondary px-3 py-1 rounded-full text-sm"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* CTA Section */}
        <section className="py-12 bg-gradient-to-r from-primary to-accent text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-heading text-3xl font-bold mb-4">
                Ready to Start Your Construction Project?
              </h2>
              <p className="text-xl mb-8">
                Get expert advice and a free quote from Sinqobile Construction today
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+27828688396"
                  className="inline-flex items-center justify-center space-x-2 bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  <Phone size={20} />
                  <span>Call: +27 82 868 8396</span>
                </a>
                <Link
                  href={`/${lang}/contact`}
                  className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors"
                >
                  Get Free Quote
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        {relatedPosts.length > 0 && (
          <section className="py-16 bg-lightBackground">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="font-heading text-3xl font-bold text-primary mb-8 text-center">
                  Related Articles
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {relatedPosts.map((relatedPost) => (
                    <article
                      key={relatedPost.slug}
                      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                    >
                      <Link href={`/${lang}/blog/${relatedPost.slug}`}>
                        <div className="relative h-48 w-full">
                          <Image
                            src={relatedPost.image}
                            alt={relatedPost.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </Link>
                      <div className="p-6">
                        <div className="flex items-center space-x-2 mb-3">
                          <Tag size={14} className="text-accent" />
                          <span className="text-sm text-accent font-medium">
                            {relatedPost.category}
                          </span>
                        </div>
                        <Link href={`/${lang}/blog/${relatedPost.slug}`}>
                          <h3 className="font-heading text-lg font-bold text-primary mb-3 hover:text-accent transition-colors line-clamp-2">
                            {relatedPost.title}
                          </h3>
                        </Link>
                        <p className="text-secondary text-sm mb-4 line-clamp-2">
                          {relatedPost.excerpt}
                        </p>
                        <Link
                          href={`/${lang}/blog/${relatedPost.slug}`}
                          className="text-primary font-medium hover:text-accent transition-colors"
                        >
                          Read More →
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  )
}