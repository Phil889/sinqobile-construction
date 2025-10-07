'use client'

import React, { useState, useMemo } from 'react'
import { getDictionary } from '@/lib/dictionaries'
import { Locale } from '@/i18n.config'
import { getAllProjects, getAllCategories, getAllLocations } from '@/lib/all-projects-data'
import { Search, Filter, MapPin, Calendar, X } from 'lucide-react'
import Image from 'next/image'

interface OurWorkPageProps {
  params: { lang: Locale }
}

export default function OurWorkPage({ params: { lang } }: OurWorkPageProps) {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedLocation, setSelectedLocation] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedProject, setSelectedProject] = useState<any>(null)
  const [showFilters, setShowFilters] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(12)

  // Get all projects and unique categories/locations
  const allProjects = getAllProjects()
  const categories = ['all', ...getAllCategories()]
  const locations = ['all', ...getAllLocations()]

  // Filter projects based on selected filters and search term
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
  }, [selectedCategory, selectedLocation, searchTerm])

  // Pagination calculations
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentProjects = filteredProjects.slice(startIndex, endIndex)

  // Reset to page 1 when filters change
  React.useEffect(() => {
    setCurrentPage(1)
  }, [selectedCategory, selectedLocation, searchTerm])

  // Generate page numbers for pagination
  const getPageNumbers = () => {
    const pages = []
    const maxVisiblePages = 5
    
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pages.push(i)
        }
        pages.push('...')
        pages.push(totalPages)
      } else if (currentPage >= totalPages - 2) {
        pages.push(1)
        pages.push('...')
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i)
        }
      } else {
        pages.push(1)
        pages.push('...')
        pages.push(currentPage - 1)
        pages.push(currentPage)
        pages.push(currentPage + 1)
        pages.push('...')
        pages.push(totalPages)
      }
    }
    
    return pages
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Our Construction Projects
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Browse through our portfolio of successful projects across Gauteng
          </p>
          <div className="flex justify-center items-center space-x-4 text-lg">
            <span>{allProjects.length} Projects Completed</span>
            <span>•</span>
            <span>{categories.length - 1} Service Categories</span>
            <span>•</span>
            <span>{locations.length - 1} Locations</span>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-lightBackground border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            {/* Filter Toggle (Mobile) */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden flex items-center space-x-2 bg-primary text-white px-4 py-2 rounded-lg"
            >
              <Filter size={20} />
              <span>Filters</span>
            </button>

            {/* Desktop Filters */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* Category Filter */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
              </select>

              {/* Location Filter */}
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                {locations.map((location) => (
                  <option key={location} value={location}>
                    {location === 'all' ? 'All Locations' : location}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Mobile Filters */}
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
                      {category === 'all' ? 'All Categories' : category.charAt(0).toUpperCase() + category.slice(1)}
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
                      {location === 'all' ? 'All Locations' : location}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}

          {/* Active Filters Display */}
          {(selectedCategory !== 'all' || selectedLocation !== 'all' || searchTerm) && (
            <div className="mt-4 flex flex-wrap gap-2">
              {selectedCategory !== 'all' && (
                <span className="inline-flex items-center space-x-1 bg-primary text-white px-3 py-1 rounded-full text-sm">
                  <span>Category: {selectedCategory}</span>
                  <button onClick={() => setSelectedCategory('all')}>
                    <X size={14} />
                  </button>
                </span>
              )}
              {selectedLocation !== 'all' && (
                <span className="inline-flex items-center space-x-1 bg-primary text-white px-3 py-1 rounded-full text-sm">
                  <span>Location: {selectedLocation}</span>
                  <button onClick={() => setSelectedLocation('all')}>
                    <X size={14} />
                  </button>
                </span>
              )}
              {searchTerm && (
                <span className="inline-flex items-center space-x-1 bg-primary text-white px-3 py-1 rounded-full text-sm">
                  <span>Search: {searchTerm}</span>
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
          {/* Results Count and Items Per Page */}
          <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <p className="text-secondary">
              Showing {startIndex + 1}-{Math.min(endIndex, filteredProjects.length)} of {filteredProjects.length} projects
            </p>
            <div className="flex items-center space-x-2">
              <label htmlFor="itemsPerPage" className="text-sm text-secondary">
                Show:
              </label>
              <select
                id="itemsPerPage"
                value={itemsPerPage}
                onChange={(e) => {
                  setItemsPerPage(Number(e.target.value))
                  setCurrentPage(1)
                }}
                className="px-3 py-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
              >
                <option value={12}>12</option>
                <option value={24}>24</option>
                <option value={48}>48</option>
                <option value={filteredProjects.length}>All</option>
              </select>
            </div>
          </div>

          {/* Projects Grid */}
          {currentProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {currentProjects.map((project) => (
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
                        {project.category}
                      </span>
                    </div>
                    {project.featured && (
                      <div className="absolute top-3 left-3">
                        <span className="bg-primary text-white px-2 py-1 rounded-full text-xs font-medium">
                          Featured
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
                No projects found matching your criteria
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('all')
                  setSelectedLocation('all')
                  setSearchTerm('')
                }}
                className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Clear All Filters
              </button>
            </div>
          )}

          {/* Pagination Controls */}
          {filteredProjects.length > itemsPerPage && (
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4">
              {/* Previous Button */}
              <button
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  currentPage === 1
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-primary text-white hover:bg-blue-700'
                }`}
              >
                Previous
              </button>

              {/* Page Numbers */}
              <div className="flex items-center space-x-2">
                {getPageNumbers().map((page, index) => (
                  <React.Fragment key={index}>
                    {page === '...' ? (
                      <span className="px-3 py-2 text-secondary">...</span>
                    ) : (
                      <button
                        onClick={() => setCurrentPage(page as number)}
                        className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                          currentPage === page
                            ? 'bg-primary text-white'
                            : 'bg-lightBackground text-secondary hover:bg-gray-300'
                        }`}
                      >
                        {page}
                      </button>
                    )}
                  </React.Fragment>
                ))}
              </div>

              {/* Next Button */}
              <button
                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  currentPage === totalPages
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-primary text-white hover:bg-blue-700'
                }`}
              >
                Next
              </button>
            </div>
          )}

          {/* Scroll to Top Button */}
          {currentPage > 1 && (
            <div className="mt-8 text-center">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-primary hover:text-accent transition-colors font-medium"
              >
                ↑ Back to Top
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
                  {selectedProject.category}
                </span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="font-medium text-secondary">{selectedProject.location}</p>
                </div>
                {selectedProject.duration && (
                  <div>
                    <p className="text-sm text-gray-500">Duration</p>
                    <p className="font-medium text-secondary">{selectedProject.duration}</p>
                  </div>
                )}
                <div>
                  <p className="text-sm text-gray-500">Type</p>
                  <p className="font-medium text-secondary capitalize">{selectedProject.clientType}</p>
                </div>
                {selectedProject.completionYear && (
                  <div>
                    <p className="text-sm text-gray-500">Completed</p>
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
                href="tel:0719334063"
                className="inline-block bg-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
              >
                Get Similar Work Done
              </a>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our satisfied clients and experience quality construction services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0719334063"
              className="inline-flex items-center justify-center space-x-2 bg-accent text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
            >
              <span>Call Now: 071 933 4063</span>
            </a>
            <a
              href={`/${lang}/contact`}
              className="inline-flex items-center justify-center space-x-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors"
            >
              <span>Get Free Quote</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}