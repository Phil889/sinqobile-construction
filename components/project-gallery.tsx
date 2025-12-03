'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X, MapPin, Calendar } from 'lucide-react'
import type { TranslatedProjectData } from '@/lib/multilingual-projects'

interface ProjectGalleryProps {
  dict: any
  lang: string
  projects: TranslatedProjectData[]
  allProjectsCount: number
  categories: string[]
}

export default function ProjectGallery({
  dict,
  lang,
  projects,
  allProjectsCount,
  categories: allCategories
}: ProjectGalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedProject, setSelectedProject] = useState<TranslatedProjectData | null>(null)

  // Use the provided translated projects
  const displayProjects = projects
  
  // Get unique categories
  const categories = ['all', ...allCategories]

  const filteredProjects = selectedCategory === 'all'
    ? displayProjects
    : displayProjects.filter(p => p.category === selectedCategory)

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-4">
            {dict.projectGallery.title}
          </h2>
          <p className="text-secondary text-lg max-w-2xl mx-auto">
            {dict.projectGallery.subtitle}
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-lightBackground text-secondary hover:bg-primary hover:text-white'
              }`}
            >
              {category === 'all' ? dict.projectGallery.allProjects : (dict.categories[category] || category.charAt(0).toUpperCase() + category.slice(1))}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all"
            >
              <div className="aspect-[4/3] relative bg-gray-100">
                <Image
                  src={project.image}
                  alt={project.seoAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-contain group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  quality={85}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform">
                <h3 className="font-heading text-xl font-bold mb-2">{project.title}</h3>
                <div className="flex items-center space-x-4 text-sm">
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
              </div>
              <div className="absolute top-4 right-4">
                <span className="bg-accent text-white px-3 py-1 rounded-full text-xs font-medium">
                  {dict.categories[project.category] || project.category}
                </span>
              </div>
              {project.featured && (
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-medium">
                    {dict.projectGallery.featured}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* View All Projects Link */}
        <div className="text-center mt-12">
          <a
            href={`/${lang}/our-work`}
            className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            {dict.projectGallery.viewAll} ({allProjectsCount} {dict.projectGallery.total})
          </a>
        </div>

        {/* Modal */}
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
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.seoAlt}
                    fill
                    sizes="(max-width: 1200px) 100vw, 1200px"
                    className="object-contain rounded-t-lg"
                    priority
                    quality={90}
                  />
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-heading text-3xl font-bold text-primary">
                    {selectedProject.title}
                  </h2>
                  <span className="bg-lightBackground text-secondary px-4 py-2 rounded-full text-sm font-medium">
                    {dict.categories[selectedProject.category] || selectedProject.category}
                  </span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div>
                    <p className="text-sm text-gray-500">{dict.projectGallery.modal.location}</p>
                    <p className="font-medium text-secondary">{selectedProject.location}</p>
                  </div>
                  {selectedProject.duration && (
                    <div>
                      <p className="text-sm text-gray-500">{dict.projectGallery.modal.duration}</p>
                      <p className="font-medium text-secondary">{selectedProject.duration}</p>
                    </div>
                  )}
                  <div>
                    <p className="text-sm text-gray-500">{dict.projectGallery.modal.type}</p>
                    <p className="font-medium text-secondary capitalize">{selectedProject.clientType}</p>
                  </div>
                  {selectedProject.completionYear && (
                    <div>
                      <p className="text-sm text-gray-500">{dict.projectGallery.modal.completed}</p>
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
                  {dict.projectGallery.modal.getSimilarWork}
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}