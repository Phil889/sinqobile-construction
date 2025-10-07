import { Locale } from '@/i18n.config'
import { getBlogPostBySlug, getRelatedPosts, blogPosts } from '@/lib/blog-data'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, User, Tag, ArrowLeft, Phone } from 'lucide-react'
import { Metadata } from 'next'

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({
  params: { slug },
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const post = getBlogPostBySlug(slug)
  
  if (!post) {
    return {
      title: 'Article Not Found | MD Builders',
    }
  }

  return {
    title: `${post.title} | MD Builders Blog`,
    description: post.excerpt,
    keywords: post.keywords.join(', '),
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
  }
}

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

  // Schema markup for Article
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": post.image,
    "datePublished": post.date,
    "dateModified": post.date,
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "MD Builders",
      "logo": {
        "@type": "ImageObject",
        "url": "https://mdbuilders.co.za/logo.svg"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://mdbuilders.co.za/${lang}/blog/${slug}`
    },
    "keywords": post.keywords.join(', '),
    "articleSection": post.category
  }

  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className="pt-20">
        {/* Back Button */}
        <div className="bg-lightBackground py-4">
          <div className="container mx-auto px-4">
            <Link
              href={`/${lang}/blog`}
              className="inline-flex items-center space-x-2 text-secondary hover:text-primary transition-colors"
            >
              <ArrowLeft size={20} />
              <span>Back to Blog</span>
            </Link>
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
                  <span>
                    {new Date(post.date).toLocaleDateString('en-ZA', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </span>
                </div>
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
                <div
                  className="article-content"
                  dangerouslySetInnerHTML={{
                    __html: post.content
                      .split('\n')
                      .map(line => {
                        // Convert markdown headers
                        if (line.startsWith('# ')) {
                          return `<h1 class="font-heading text-3xl font-bold text-primary mt-8 mb-4">${line.substring(2)}</h1>`
                        }
                        if (line.startsWith('## ')) {
                          return `<h2 class="font-heading text-2xl font-bold text-primary mt-6 mb-3">${line.substring(3)}</h2>`
                        }
                        if (line.startsWith('### ')) {
                          return `<h3 class="font-heading text-xl font-bold text-primary mt-4 mb-2">${line.substring(4)}</h3>`
                        }
                        // Convert bold text
                        line = line.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-primary">$1</strong>')
                        // Convert bullet points
                        if (line.startsWith('- ')) {
                          return `<li class="text-secondary ml-6">${line.substring(2)}</li>`
                        }
                        // Convert checkmarks and crosses
                        line = line.replace(/✅/g, '<span class="text-green-600">✅</span>')
                        line = line.replace(/❌/g, '<span class="text-red-600">❌</span>')
                        // Regular paragraphs
                        if (line.trim() && !line.startsWith('<')) {
                          return `<p class="text-secondary mb-4 leading-relaxed">${line}</p>`
                        }
                        return line
                      })
                      .join('\n')
                  }}
                />
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
                Get expert advice and a free quote from MD Builders today
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:0719334063"
                  className="inline-flex items-center justify-center space-x-2 bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  <Phone size={20} />
                  <span>Call: 071 933 4063</span>
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