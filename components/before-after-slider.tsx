'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Project {
  id: string
  title: string
  location: string
  service: string
  beforeImage: string
  afterImage: string
  beforeLabel: string
  afterLabel: string
  description: string
}

interface BeforeAfterSliderProps {
  dict: any
  lang: string
}

const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Driveway Paving',
    location: 'Sandton',
    service: 'Paving',
    beforeImage: '/images/before-paving.jpg',
    afterImage: '/images/after-paving.jpg',
    beforeLabel: 'Cracked, weedy concrete',
    afterLabel: 'New brick pavers installed',
    description: 'Severely cracked concrete driveway with weeds replaced with a professional herringbone brick paver system — level, sealed, and built for the Gauteng climate.',
  },
  {
    id: '2',
    title: 'Roof Repairs & Waterproofing',
    location: 'Johannesburg',
    service: 'Roofing',
    beforeImage: '/images/before-roofing.jpg',
    afterImage: '/images/after-roofing.jpg',
    beforeLabel: 'Moss, broken tiles, leaks',
    afterLabel: 'Fully repaired & sealed',
    description: 'Heavily moss-covered roof with broken tiles and crumbling ridging stripped, repointed, and fitted with new clay tiles — watertight with a written workmanship guarantee.',
  },
  {
    id: '3',
    title: 'Exterior Plastering',
    location: 'Fourways',
    service: 'Plastering',
    beforeImage: '/images/before-plastering.jpg',
    afterImage: '/images/after-plastering.jpg',
    beforeLabel: 'Map cracks, exposed brick',
    afterLabel: 'Smooth new plaster finish',
    description: 'Severely cracked and hollow plaster fully hacked off, substrate repaired, and re-plastered to a flawless smooth float finish ready for paint.',
  },
]

export default function BeforeAfterSlider({ dict, lang }: BeforeAfterSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  // Merge: image paths always come from PROJECTS (language-neutral assets);
  // text fields (title, location, service, labels, description) come from dict
  // when present, otherwise fall back to PROJECTS. This fixes the prior bug
  // where dict.beforeAfter.projects was defined but had no beforeImage/afterImage,
  // causing <Image src={undefined}> to throw and the section to disappear.
  const projects: Project[] = PROJECTS.map((p, i) => {
    const dp = dict?.beforeAfter?.projects?.[i]
    return dp ? { ...p, ...dp, beforeImage: p.beforeImage, afterImage: p.afterImage } : p
  })
  const currentProject = projects[currentIndex]

  const updateSliderPosition = useCallback((clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
    setSliderPosition(Math.max(5, Math.min((x / rect.width) * 100, 95)))
  }, [])

  const handleMouseDown = () => setIsDragging(true)
  const handleMouseUp = () => setIsDragging(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return
    requestAnimationFrame(() => updateSliderPosition(e.clientX))
  }

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    e.preventDefault()
    requestAnimationFrame(() => updateSliderPosition(e.touches[0].clientX))
  }

  const handleTouchEnd = () => setIsDragging(false)

  const goToProject = (index: number) => {
    setCurrentIndex(index)
    setSliderPosition(50)
  }

  const nextProject = () => goToProject((currentIndex + 1) % projects.length)
  const prevProject = () => goToProject((currentIndex - 1 + projects.length) % projects.length)

  useEffect(() => {
    if (!isDragging) return
    const onUp = () => setIsDragging(false)
    document.addEventListener('mouseup', onUp)
    return () => document.removeEventListener('mouseup', onUp)
  }, [isDragging])

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {dict?.beforeAfter?.title || 'See The Transformation'}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {dict?.beforeAfter?.subtitle || 'Drag the slider to compare the before and after results of our construction projects'}
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Slider container */}
          <div
            ref={containerRef}
            className="relative aspect-[16/10] rounded-xl overflow-hidden shadow-2xl select-none touch-none"
            style={{ cursor: isDragging ? 'ew-resize' : 'col-resize' }}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* AFTER image — full width background */}
            <div className="absolute inset-0">
              <Image
                src={currentProject.afterImage}
                alt={`${currentProject.title} after — ${currentProject.location} — Sinqobile Construction`}
                fill
                className="object-cover"
                sizes="(max-width: 1200px) 100vw, 1200px"
                priority
                quality={90}
              />
            </div>

            {/* BEFORE image — real before photo, clipped to left of slider */}
            <div
              className="absolute inset-0"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <Image
                src={currentProject.beforeImage}
                alt={`${currentProject.title} before — ${currentProject.location} — Sinqobile Construction`}
                fill
                className="object-cover"
                sizes="(max-width: 1200px) 100vw, 1200px"
                priority
                quality={90}
              />
            </div>

            {/* Divider line */}
            <div
              className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_8px_rgba(0,0,0,0.5)] pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            />

            {/* Drag handle */}
            <div
              className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 bg-white rounded-full shadow-xl flex items-center justify-center pointer-events-none z-10 ring-2 ring-white/80"
              style={{ left: `${sliderPosition}%` }}
            >
              <ChevronLeft className="w-4 h-4 text-gray-600 -mr-0.5" />
              <ChevronRight className="w-4 h-4 text-gray-600 -ml-0.5" />
            </div>

            {/* BEFORE label */}
            <div className="absolute bottom-4 left-4 flex flex-col items-start gap-1 pointer-events-none">
              <span className="bg-black/70 text-white text-xs font-bold px-3 py-1 rounded uppercase tracking-wider">
                {dict?.beforeAfter?.before || 'Before'}
              </span>
              <span className="bg-black/60 text-white/90 text-xs px-3 py-1 rounded max-w-[180px] leading-snug hidden sm:block">
                {currentProject.beforeLabel}
              </span>
            </div>

            {/* AFTER label */}
            <div className="absolute bottom-4 right-4 flex flex-col items-end gap-1 pointer-events-none">
              <span className="bg-orange-600/90 text-white text-xs font-bold px-3 py-1 rounded uppercase tracking-wider">
                {dict?.beforeAfter?.after || 'After'}
              </span>
              <span className="bg-black/60 text-white/90 text-xs px-3 py-1 rounded max-w-[180px] text-right leading-snug hidden sm:block">
                {currentProject.afterLabel}
              </span>
            </div>
          </div>

          {/* Project info */}
          <div className="mt-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-1">
              {currentProject.title}
            </h3>
            <p className="text-orange-600 font-semibold text-sm mb-3">
              {currentProject.location} &bull; {currentProject.service}
            </p>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {currentProject.description}
            </p>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevProject}
              className="p-3 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
              aria-label="Previous project"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>

            <div className="flex gap-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToProject(index)}
                  className={`h-3 rounded-full transition-all duration-200 ${
                    index === currentIndex
                      ? 'bg-orange-600 w-8'
                      : 'bg-gray-300 hover:bg-gray-400 w-3'
                  }`}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextProject}
              className="p-3 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
              aria-label="Next project"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>
          </div>

          <p className="text-center text-gray-400 mt-4 text-sm">
            {dict?.beforeAfter?.instruction || '← Drag the slider left and right to compare →'}
          </p>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            {dict?.beforeAfter?.ctaTitle || 'Ready For Your Own Transformation?'}
          </h3>
          <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
            {dict?.beforeAfter?.ctaText || 'Let us transform your space with our expert construction services. Get a free quote today!'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`/${lang}/contact`}
              className="inline-block bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors shadow-lg"
            >
              {dict?.beforeAfter?.getQuoteButton || 'Get Free Quote'}
            </a>
            <a
              href={`/${lang}/our-work`}
              className="inline-block bg-white text-orange-600 border-2 border-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors"
            >
              {dict?.beforeAfter?.viewMoreButton || 'View More Projects'}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
