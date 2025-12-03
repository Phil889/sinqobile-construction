'use client'

import React, { useState, useMemo, useEffect, useRef, useCallback } from 'react'
import { Locale } from '@/i18n.config'
import type { TranslatedProjectData } from '@/lib/multilingual-projects'
import { Search, Filter, MapPin, Calendar, X, Loader2 } from 'lucide-react'

interface OurWorkClientProps {
  lang: Locale
  dict: any
  projects: TranslatedProjectData[]
  categories: string[]
  locations: string[]
}

export default function OurWorkClient({
  lang,
  dict,
  projects: allProjects,
  categories: allCategories,
  locations: allLocations
}: OurWorkClientProps) {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedLocation, setSelectedLocation] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedProject, setSelectedProject] = useState<TranslatedProjectData | null>(null)
  const [showFilters, setShowFilters] = useState(false)
  const [displayedCount, setDisplayedCount] = useState(12)
  const [isLoading, setIsLoading] = useState(false)
  const observerTarget = useRef<HTMLDivElement>(null)

  const categories = ['all', ...allCategories]
  const locations = ['all', ...allLocations]

  const filteredProjects = useMemo(() => {
    return allProjects.filter(project => {
      const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory
      const matchesLocation = selectedLocation === 'all' || project.location === selectedLocation
      const matchesSearch = searchTerm === '' ||
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.category.toLowerCase().includes(searchTerm.toLowerCase())
      
      return matchesCategory && matchesLocation && matchesSearch
    })
  }, [selectedCategory, selectedLocation, searchTerm, allProjects])

  const displayedProjects = filteredProjects.slice(0, displayedCount)
  const hasMore = displayedCount < filteredProjects.length

  // Reset displayed count when filters change
  useEffect(() => {
    setDisplayedCount(12)
  }, [selectedCategory, selectedLocation, searchTerm])

  // Load more projects
  const loadMore = useCallback(() => {
    if (isLoading || !hasMore) return
    
    setIsLoading(true)
    // Simulate loading delay for smooth UX
    setTimeout(() => {
      setDisplayedCount(prev => Math.min(prev + 12, filteredProjects.length))
      setIsLoading(false)
    }, 300)
  }, [isLoading, hasMore, filteredProjects.length])

  // Intersection Observer for infinite scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !isLoading) {
          loadMore()
        }
      },
      { threshold: 0.1 }
    )

    const currentTarget = observerTarget.current
    if (currentTarget) {
      observer.observe(currentTarget)
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget)
      }
    }
  }, [hasMore, isLoading, loadMore])

  const t = dict.pages.ourWork
  
  // Helper function to translate category names
  const translateCategory = (category: string) => {
    if (category === 'all') return t.allCategories
    return (dict as any).categories?.[category] || category.charAt(0).toUpperCase() + category.slice(1)
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            {t.heroTitle}
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            {t.heroSubtitle}
          </p>
          <div className="flex justify-center items-center space-x-4 text-lg">
            <span>{allProjects.length} {t.projectsCompleted}</span>
            <span>•</span>
            <span>{categories.length - 1} {t.serviceCategories}</span>
            <span>•</span>
            <span>{locations.length - 1} {t.locationsServed}</span>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-lightBackground border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder={t.searchPlaceholder}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden flex items-center space-x-2 bg-primary text-white px-4 py-2 rounded-lg"
            >
              <Filter size={20} />
              <span>{t.filters}</span>
            </button>

            <div className="hidden lg:flex items-center space-x-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {translateCategory(category)}
                  </option>
                ))}
              </select>

              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                {locations.map((location) => (
                  <option key={location} value={location}>
                    {location === 'all' ? t.allLocations : location}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {showFilters && (
            <div className="lg:hidden mt-4 p-4 bg-white rounded-lg shadow-md">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {translateCategory(category)}
                    </option>
                  ))}
                </select>

                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  {locations.map((location) => (
                    <option key={location} value={location}>
                      {location === 'all' ? t.allLocations : location}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}

          {(selectedCategory !== 'all' || selectedLocation !== 'all' || searchTerm) && (
            <div className="mt-4 flex flex-wrap gap-2">
              {selectedCategory !== 'all' && (
                <span className="inline-flex items-center space-x-1 bg-primary text-white px-3 py-1 rounded-full text-sm">
                  <span>{t.category}: {translateCategory(selectedCategory)}</span>
                  <button onClick={() => setSelectedCategory('all')}>
                    <X size={14} />
                  </button>
                </span>
              )}
              {selectedLocation !== 'all' && (
                <span className="inline-flex items-center space-x-1 bg-primary text-white px-3 py-1 rounded-full text-sm">
                  <span>{t.location}: {selectedLocation}</span>
                  <button onClick={() => setSelectedLocation('all')}>
                    <X size={14} />
                  </button>
                </span>
              )}
              {searchTerm && (
                <span className="inline-flex items-center space-x-1 bg-primary text-white px-3 py-1 rounded-full text-sm">
                  <span>{t.search}: {searchTerm}</span>
                  <button onClick={() => setSearchTerm('')}>
                    <X size={14} />
                  </button>
                </span>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <p className="text-secondary">
              {t.showing} {displayedProjects.length} {t.of} {filteredProjects.length} {t.projects}
            </p>
          </div>

          {displayedProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {displayedProjects.map((project) => (
                <div
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className="group cursor-pointer bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <div className="aspect-[4/3] relative overflow-hidden bg-gray-100">
                    <img
                      src={project.image}
                      alt={project.seoAlt}
                      className="absolute inset-0 w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute top-3 right-3">
                      <span className="bg-accent text-white px-2 py-1 rounded-full text-xs font-medium">
                        {translateCategory(project.category)}
                      </span>
                    </div>
                    {project.featured && (
                      <div className="absolute top-3 left-3">
                        <span className="bg-primary text-white px-2 py-1 rounded-full text-xs font-medium">
                          {t.featured}
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-primary mb-2 group-hover:text-accent transition-colors" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      {project.title}
                    </h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-2">
                      <div className="flex items-center space-x-1">
                        <MapPin size={14} />
                        <span>{project.location}</span>
                      </div>
                      {project.duration && (
                        <div className="flex items-center space-x-1">
                          <Calendar size={14} />
                          <span>{project.duration}</span>
                        </div>
                      )}
                    </div>
                    <p className="text-secondary text-sm line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-secondary text-lg mb-4">
                {t.noResults}
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('all')
                  setSelectedLocation('all')
                  setSearchTerm('')
                }}
                className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                {t.clearAllFilters}
              </button>
            </div>
          )}

          {/* Infinite Scroll Trigger */}
          {hasMore && (
            <div ref={observerTarget} className="mt-12 flex justify-center">
              {isLoading && (
                <div className="flex items-center space-x-2 text-primary">
                  <Loader2 className="animate-spin" size={24} />
                  <span className="text-lg font-medium">{t.loadingMore || 'Loading more projects...'}</span>
                </div>
              )}
            </div>
          )}

          {/* Back to Top Button */}
          {displayedProjects.length > 12 && (
            <div className="mt-8 text-center">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-primary hover:text-accent transition-colors font-medium"
              >
                {t.backToTop}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 z-10"
              >
                <X size={24} className="text-secondary" />
              </button>
              <div className="relative h-96 bg-gray-100">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.seoAlt}
                  className="absolute inset-0 w-full h-full object-contain rounded-t-lg"
                />
              </div>
            </div>
            <div className="p-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-3xl font-bold text-primary" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {selectedProject.title}
                </h2>
                <span className="bg-lightBackground text-secondary px-4 py-2 rounded-full text-sm font-medium">
                  {translateCategory(selectedProject.category)}
                </span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div>
                  <p className="text-sm text-gray-500">{t.modalLocation}</p>
                  <p className="font-medium text-secondary">{selectedProject.location}</p>
                </div>
                {selectedProject.duration && (
                  <div>
                    <p className="text-sm text-gray-500">{t.modalDuration}</p>
                    <p className="font-medium text-secondary">{selectedProject.duration}</p>
                  </div>
                )}
                <div>
                  <p className="text-sm text-gray-500">{t.modalType}</p>
                  <p className="font-medium text-secondary capitalize">{selectedProject.clientType}</p>
                </div>
                {selectedProject.completionYear && (
                  <div>
                    <p className="text-sm text-gray-500">{t.modalCompleted}</p>
                    <p className="font-medium text-secondary">{selectedProject.completionYear}</p>
                  </div>
                )}
              </div>
              <p className="text-secondary leading-relaxed mb-6">
                {selectedProject.description}
              </p>
              {selectedProject.testimonial && (
                <div className="bg-lightBackground rounded-lg p-6 mb-6">
                  <p className="text-secondary italic mb-3">
                    "{selectedProject.testimonial.text}"
                  </p>
                  <p className="font-semibold text-primary">
                    - {selectedProject.testimonial.client}
                  </p>
                </div>
              )}
              <a
                href="tel:+27828688396"
                className="inline-block bg-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
              >
                {t.getSimilarWork}
              </a>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            {t.ctaTitle}
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            {t.ctaSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+27828688396"
              className="inline-flex items-center justify-center space-x-2 bg-accent text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
            >
              <span>{t.callNow}</span>
            </a>
            <a
              href={`/${lang}/contact`}
              className="inline-flex items-center justify-center space-x-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors"
            >
              <span>{t.getFreeQuote}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}