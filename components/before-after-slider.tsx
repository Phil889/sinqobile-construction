'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface BeforeAfterImage {
  id: string
  title: string
  location: string
  service: string
  beforeImage: string
  afterImage: string
  description: string
}

interface BeforeAfterSliderProps {
  dict: any
  lang: string
}

export default function BeforeAfterSlider({ dict, lang }: BeforeAfterSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  // Before/After project data
  const projects: BeforeAfterImage[] = [
    {
      id: '1',
      title: 'Modern Kitchen Renovation',
      location: 'Sandton',
      service: 'Kitchen Remodeling',
      beforeImage: '/images/sinqobile-construction-renovation-sandton-before.jpg',
      afterImage: '/images/sinqobile-construction-renovation-sandton-after.jpg',
      description: 'Complete kitchen transformation with modern finishes, new cabinetry, and upgraded appliances'
    },
    {
      id: '2',
      title: 'Bathroom Makeover',
      location: 'Johannesburg',
      service: 'Bathroom Renovation',
      beforeImage: '/images/sinqobile-construction-tiling-johannesburg-before.jpg',
      afterImage: '/images/sinqobile-construction-tiling-johannesburg-after.jpg',
      description: 'Luxury bathroom renovation featuring premium tiles, modern fixtures, and elegant design'
    },
    {
      id: '3',
      title: 'Exterior Painting & Repairs',
      location: 'Pretoria',
      service: 'Painting & Maintenance',
      beforeImage: '/images/sinqobile-construction-painting-pretoria-before.jpg',
      afterImage: '/images/sinqobile-construction-painting-pretoria-after.jpg',
      description: 'Complete exterior refresh with professional painting and structural repairs'
    },
    {
      id: '4',
      title: 'Paving & Landscaping',
      location: 'Midrand',
      service: 'Paving & Landscaping',
      beforeImage: '/images/sinqobile-construction-paving-midrand-before.jpg',
      afterImage: '/images/sinqobile-construction-paving-midrand-after.jpg',
      description: 'Stunning outdoor transformation with quality paving and professional landscaping'
    }
  ]

  const currentProject = projects[currentIndex]

  const handleMouseDown = () => {
    setIsDragging(true)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width))
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100))
    setSliderPosition(percent)
  }

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = Math.max(0, Math.min(e.touches[0].clientX - rect.left, rect.width))
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100))
    setSliderPosition(percent)
  }

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length)
    setSliderPosition(50) // Reset slider position
  }

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
    setSliderPosition(50) // Reset slider position
  }

  useEffect(() => {
    const handleGlobalMouseUp = () => {
      setIsDragging(false)
    }

    if (isDragging) {
      document.addEventListener('mouseup', handleGlobalMouseUp)
      return () => {
        document.removeEventListener('mouseup', handleGlobalMouseUp)
      }
    }
  }, [isDragging])

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {dict?.beforeAfter?.title || 'See The Transformation'}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {dict?.beforeAfter?.subtitle || 'Drag the slider to see the incredible before and after results of our construction projects'}
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Before/After Slider */}
          <div
            ref={containerRef}
            className="relative aspect-[16/10] bg-gray-200 rounded-lg overflow-hidden shadow-2xl cursor-ew-resize select-none"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseUp}
            onTouchMove={handleTouchMove}
          >
            {/* After Image (Background) */}
            <div className="absolute inset-0">
              <div className="relative w-full h-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-8xl mb-4">✨</div>
                  <p className="text-2xl font-bold">AFTER</p>
                  <p className="text-lg mt-2">{currentProject.service}</p>
                </div>
              </div>
            </div>

            {/* Before Image (Overlay with clip) */}
            <div
              className="absolute inset-0"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <div className="relative w-full h-full bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-8xl mb-4">🏚️</div>
                  <p className="text-2xl font-bold">BEFORE</p>
                  <p className="text-lg mt-2">{currentProject.service}</p>
                </div>
              </div>
            </div>

            {/* Slider Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center">
                <div className="flex gap-1">
                  <ChevronLeft className="w-5 h-5 text-gray-700" />
                  <ChevronRight className="w-5 h-5 text-gray-700" />
                </div>
              </div>
            </div>

            {/* Labels */}
            <div className="absolute top-4 left-4 bg-black bg-opacity-60 text-white px-4 py-2 rounded-lg font-semibold">
              {dict?.beforeAfter?.before || 'BEFORE'}
            </div>
            <div className="absolute top-4 right-4 bg-black bg-opacity-60 text-white px-4 py-2 rounded-lg font-semibold">
              {dict?.beforeAfter?.after || 'AFTER'}
            </div>
          </div>

          {/* Project Info */}
          <div className="mt-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {currentProject.title}
            </h3>
            <p className="text-orange-600 font-semibold mb-2">
              {currentProject.location} • {currentProject.service}
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
                  onClick={() => {
                    setCurrentIndex(index)
                    setSliderPosition(50)
                  }}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-orange-600 w-8'
                      : 'bg-gray-300 hover:bg-gray-400'
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

          {/* Instruction Text */}
          <p className="text-center text-gray-500 mt-6 text-sm">
            {dict?.beforeAfter?.instruction || '👆 Drag the slider left and right to compare before and after'}
          </p>
        </div>

        {/* CTA Section */}
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