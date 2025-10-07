'use client'

import React, { useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

interface TestimonialsProps {
  dict: any
}

const TestimonialsSlider = ({ dict }: TestimonialsProps) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const testimonials = dict.testimonials.items

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
            {dict.testimonials.title}
          </h2>
          <p className="text-secondary text-lg">
            {dict.testimonials.subtitle}
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="bg-lightBackground rounded-2xl p-8 md:p-12">
            <div className="flex items-center justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-accent fill-current" />
              ))}
            </div>
            
            <blockquote className="text-secondary text-lg md:text-xl text-center leading-relaxed mb-8">
              "{testimonials[currentSlide].text}"
            </blockquote>
            
            <div className="text-center">
              <h4 className="font-heading font-semibold text-primary text-lg">
                {testimonials[currentSlide].name}
              </h4>
              <p className="text-secondary">
                {testimonials[currentSlide].location}
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-primary text-white hover:bg-orange-600 transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_: any, index: number) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-primary' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-primary text-white hover:bg-orange-600 transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSlider