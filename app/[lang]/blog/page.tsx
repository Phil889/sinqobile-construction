'use client'

import { useState } from 'react'
import { Locale } from '@/i18n.config'
import { blogPosts, blogCategories } from '@/lib/blog-data'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, User, Search, Tag } from 'lucide-react'

export default function BlogPage({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 6

  // Filter posts by category and search query
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory
    const matchesSearch = searchQuery === '' || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.keywords.some(keyword => keyword.toLowerCase().includes(searchQuery.toLowerCase()))
    
    return matchesCategory && matchesSearch
  })

  // Pagination
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage)
  const startIndex = (currentPage - 1) * postsPerPage
  const endIndex = startIndex + postsPerPage
  const currentPosts = filteredPosts.slice(startIndex, endIndex)

  // Reset to page 1 when filters change
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    setCurrentPage(1)
  }

  const handleSearchChange = (query: string) => {
    setSearchQuery(query)
    setCurrentPage(1)
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Construction Insights & Tips
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Expert advice, guides, and industry insights from MD Builders. Learn about construction costs, 
            renovation ideas, building regulations, and more.
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-lightBackground">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Search Bar */}
            <div className="mb-6">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-secondary" size={20} />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3">
              {blogCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-primary text-white'
                      : 'bg-white text-secondary hover:bg-gray-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {currentPosts.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                  {currentPosts.map((post) => (
                    <article
                      key={post.slug}
                      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                    >
                      {/* Featured Image */}
                      <Link href={`/${lang}/blog/${post.slug}`}>
                        <div className="relative h-48 w-full">
                          <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </Link>

                      {/* Content */}
                      <div className="p-6">
                        {/* Category Badge */}
                        <div className="flex items-center space-x-2 mb-3">
                          <Tag size={16} className="text-accent" />
                          <span className="text-sm text-accent font-medium">
                            {post.category}
                          </span>
                        </div>

                        {/* Title */}
                        <Link href={`/${lang}/blog/${post.slug}`}>
                          <h2 className="font-heading text-xl font-bold text-primary mb-3 hover:text-accent transition-colors line-clamp-2">
                            {post.title}
                          </h2>
                        </Link>

                        {/* Excerpt */}
                        <p className="text-secondary text-sm mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>

                        {/* Meta Info */}
                        <div className="flex items-center justify-between text-xs text-secondary mb-4">
                          <div className="flex items-center space-x-1">
                            <Calendar size={14} />
                            <span>{new Date(post.date).toLocaleDateString('en-ZA', { 
                              year: 'numeric', 
                              month: 'long', 
                              day: 'numeric' 
                            })}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <User size={14} />
                            <span>{post.author}</span>
                          </div>
                        </div>

                        {/* Read More Button */}
                        <Link
                          href={`/${lang}/blog/${post.slug}`}
                          className="block w-full text-center bg-primary text-white px-4 py-2 rounded-lg font-medium hover:bg-orange-700 transition-colors"
                        >
                          Read More
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex justify-center items-center space-x-2">
                    <button
                      onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                      disabled={currentPage === 1}
                      className={`px-4 py-2 rounded-lg font-medium ${
                        currentPage === 1
                          ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                          : 'bg-white text-secondary hover:bg-primary hover:text-white transition-colors'
                      }`}
                    >
                      Previous
                    </button>

                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`px-4 py-2 rounded-lg font-medium ${
                          currentPage === page
                            ? 'bg-primary text-white'
                            : 'bg-white text-secondary hover:bg-gray-100'
                        }`}
                      >
                        {page}
                      </button>
                    ))}

                    <button
                      onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                      disabled={currentPage === totalPages}
                      className={`px-4 py-2 rounded-lg font-medium ${
                        currentPage === totalPages
                          ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                          : 'bg-white text-secondary hover:bg-primary hover:text-white transition-colors'
                      }`}
                    >
                      Next
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-12">
                <p className="text-secondary text-lg">
                  No articles found matching your criteria. Try adjusting your search or filters.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-lightBackground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-3xl font-bold text-primary mb-4">
              Need Expert Construction Advice?
            </h2>
            <p className="text-secondary text-lg mb-8">
              Our team at MD Builders is here to help with your construction project. 
              Get a free consultation and quote today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:0719334063"
                className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
              >
                Call: 071 933 4063
              </a>
              <Link
                href={`/${lang}/contact`}
                className="inline-block bg-white text-primary border-2 border-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors"
              >
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}