'use client'

import React, { useState } from 'react'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import { getDictionary } from '@/lib/dictionaries'

interface Review {
  id: number
  author: string
  location: string
  rating: 5
  date: string
  text: string
  service: string
  verified: boolean
}

interface TestimonialsEnhancedProps {
  dict: Awaited<ReturnType<typeof getDictionary>>
}

const reviews: Review[] = [
  {
    id: 1,
    author: "Sarah Johnson",
    location: "Sandton",
    rating: 5,
    date: "2024-01-15",
    text: "Sinqobile Construction transformed our home with a complete renovation. Their attention to detail and professionalism exceeded our expectations. The team was punctual, clean, and delivered exactly what they promised. Highly recommend!",
    service: "Home Renovation",
    verified: true
  },
  {
    id: 2,
    author: "David Naidoo",
    location: "Johannesburg",
    rating: 5,
    date: "2024-01-10",
    text: "Excellent plastering and painting work on our office building. The quality of workmanship is outstanding and they completed the project on time and within budget. Will definitely use them again.",
    service: "Plastering & Painting",
    verified: true
  },
  {
    id: 3,
    author: "Linda van der Merwe",
    location: "Pretoria",
    rating: 5,
    date: "2024-01-05",
    text: "We hired Sinqobile Construction for our new paving and they did an amazing job. The driveway looks fantastic and has held up perfectly. Great communication throughout the project.",
    service: "Paving",
    verified: true
  },
  {
    id: 4,
    author: "Michael Dlamini",
    location: "Midrand",
    rating: 5,
    date: "2023-12-20",
    text: "Professional roofing service from start to finish. They identified and fixed all the leaks in our roof. No more water damage! The team was friendly and efficient.",
    service: "Roofing",
    verified: true
  },
  {
    id: 5,
    author: "Jennifer Smith",
    location: "Randburg",
    rating: 5,
    date: "2023-12-15",
    text: "Sinqobile Construction built our dream home extension. The quality is exceptional and they managed the entire project seamlessly. Couldn't be happier with the results!",
    service: "Building & Extensions",
    verified: true
  },
  {
    id: 6,
    author: "Peter Botha",
    location: "Centurion",
    rating: 5,
    date: "2023-12-10",
    text: "Fast and reliable plumbing service. They fixed our burst pipe emergency within hours and did a thorough job. Very reasonable pricing too.",
    service: "Plumbing",
    verified: true
  },
  {
    id: 7,
    author: "Thandi Mthembu",
    location: "Fourways",
    rating: 5,
    date: "2023-12-05",
    text: "Beautiful tiling work in our bathrooms and kitchen. The attention to detail is impressive and the finish is perfect. Highly professional team.",
    service: "Tiling",
    verified: true
  },
  {
    id: 8,
    author: "James Wilson",
    location: "Roodepoort",
    rating: 5,
    date: "2023-11-28",
    text: "Excellent waterproofing service. Our basement was constantly flooding but Sinqobile Construction solved the problem completely. No issues since they finished the work.",
    service: "Waterproofing",
    verified: true
  }
]

export default function TestimonialsEnhanced({ dict }: TestimonialsEnhancedProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const nextReview = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prev) => (prev + 1) % reviews.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const prevReview = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const currentReview = reviews[currentIndex]
  const t = dict.testimonialsEnhanced

  // Generate Review schema for featured reviews (subset of 127 total)
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "@id": "https://www.sinqobileconstruction.co.za/#localbusiness",
    "name": "Sinqobile Construction",
    "review": reviews.map(review => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": review.author
      },
      "datePublished": review.date,
      "reviewBody": review.text,
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.rating.toString(),
        "bestRating": "5",
        "worstRating": "1"
      },
      "itemReviewed": {
        "@type": "Service",
        "name": review.service,
        "provider": {
          "@type": "Organization",
          "name": "Sinqobile Construction"
        }
      }
    }))
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
                {t.title}
              </h2>
              <div className="flex items-center justify-center space-x-2 mb-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={24} fill="#F59E0B" className="text-yellow-500" />
                  ))}
                </div>
                <span className="text-2xl font-bold text-secondary">4.9</span>
              </div>
              <p className="text-secondary text-lg">
                {t.basedOn} {reviews.length} {t.verifiedReviews}
              </p>
            </div>

            {/* Main Review Card */}
            <div className="relative bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8">
              {/* Quote Icon */}
              <Quote className="absolute top-6 left-6 text-primary/10" size={48} />
              
              {/* Review Content */}
              <div className={`relative z-10 transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
                {/* Rating Stars */}
                <div className="flex justify-center mb-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={28} fill="#F59E0B" className="text-yellow-500" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-secondary text-lg md:text-xl leading-relaxed text-center mb-8 italic">
                  "{currentReview.text}"
                </p>

                {/* Author Info */}
                <div className="text-center">
                  <p className="font-bold text-xl text-secondary mb-1">
                    {currentReview.author}
                  </p>
                  <p className="text-secondary mb-2">
                    {currentReview.location} • {currentReview.service}
                  </p>
                  {currentReview.verified && (
                    <div className="inline-flex items-center space-x-1 text-green-600 text-sm">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>{t.verifiedCustomer}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-between items-center mt-8">
                <button
                  onClick={prevReview}
                  disabled={isAnimating}
                  className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors disabled:opacity-50"
                  aria-label="Previous review"
                >
                  <ChevronLeft size={24} />
                </button>
                
                {/* Dots Indicator */}
                <div className="flex space-x-2">
                  {reviews.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        if (!isAnimating) {
                          setIsAnimating(true)
                          setCurrentIndex(index)
                          setTimeout(() => setIsAnimating(false), 500)
                        }
                      }}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentIndex 
                          ? 'bg-primary w-8' 
                          : 'bg-primary/30 hover:bg-primary/50'
                      }`}
                      aria-label={`Go to review ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextReview}
                  disabled={isAnimating}
                  className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors disabled:opacity-50"
                  aria-label="Next review"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <p className="text-3xl font-bold text-primary mb-2">500+</p>
                <p className="text-secondary text-sm">{t.stats.projectsCompleted}</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <p className="text-3xl font-bold text-primary mb-2">4.9★</p>
                <p className="text-secondary text-sm">{t.stats.averageRating}</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <p className="text-3xl font-bold text-primary mb-2">15+</p>
                <p className="text-secondary text-sm">{t.stats.yearsExperience}</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <p className="text-3xl font-bold text-primary mb-2">100%</p>
                <p className="text-secondary text-sm">{t.stats.satisfactionRate}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}