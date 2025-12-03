'use client'

import { useState } from 'react'
import { Play, X } from 'lucide-react'

interface VideoTestimonial {
  id: string
  name: string
  location: string
  service: string
  thumbnailUrl: string
  videoUrl: string
  quote: string
  rating: number
}

interface VideoTestimonialsProps {
  dict: any
  lang: string
}

export default function VideoTestimonials({ dict, lang }: VideoTestimonialsProps) {
  const [selectedVideo, setSelectedVideo] = useState<VideoTestimonial | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  // Video testimonials data - in production, these would come from a CMS or API
  const videoTestimonials: VideoTestimonial[] = [
    {
      id: '1',
      name: 'Sarah Johnson',
      location: 'Sandton',
      service: 'Home Renovation',
      thumbnailUrl: '/images/sinqobile-construction-renovation-sandton-video-thumb.jpg',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Replace with actual video
      quote: 'Sinqobile Construction transformed our home beyond our expectations. Professional, reliable, and excellent quality.',
      rating: 5
    },
    {
      id: '2',
      name: 'Thabo Mthembu',
      location: 'Johannesburg',
      service: 'Roofing Installation',
      thumbnailUrl: '/images/sinqobile-construction-roofing-johannesburg-video-thumb.jpg',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Replace with actual video
      quote: 'Outstanding roofing work. They completed the project on time and within budget.',
      rating: 5
    },
    {
      id: '3',
      name: 'Linda van der Merwe',
      location: 'Pretoria',
      service: 'Kitchen Remodel',
      thumbnailUrl: '/images/sinqobile-construction-kitchen-pretoria-video-thumb.jpg',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Replace with actual video
      quote: 'The attention to detail was incredible. Our new kitchen is absolutely stunning!',
      rating: 5
    }
  ]

  const handlePlayVideo = (video: VideoTestimonial) => {
    setSelectedVideo(video)
    setIsPlaying(true)
  }

  const handleCloseVideo = () => {
    setSelectedVideo(null)
    setIsPlaying(false)
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {dict?.videoTestimonials?.title || 'Hear From Our Happy Clients'}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {dict?.videoTestimonials?.subtitle || 'Watch real testimonials from satisfied customers who trusted Sinqobile Construction with their construction projects'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videoTestimonials.map((video) => (
            <div
              key={video.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Video Thumbnail */}
              <div className="relative aspect-video bg-gray-200 cursor-pointer group">
                {/* Placeholder for thumbnail - in production, use actual thumbnail images */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-6xl mb-2">🎥</div>
                    <p className="text-sm font-medium">{video.service}</p>
                  </div>
                </div>
                
                {/* Play Button Overlay */}
                <button
                  onClick={() => handlePlayVideo(video)}
                  className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 group-hover:bg-opacity-40 transition-all duration-300"
                  aria-label={`Play video testimonial from ${video.name}`}
                >
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Play className="w-10 h-10 text-orange-600 ml-1" fill="currentColor" />
                  </div>
                </button>
              </div>

              {/* Video Info */}
              <div className="p-6">
                <div className="flex items-center mb-3">
                  {[...Array(video.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                
                <p className="text-gray-700 mb-4 line-clamp-3 italic">
                  "{video.quote}"
                </p>
                
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">{video.name}</p>
                  <p className="text-sm text-gray-600">{video.location}</p>
                  <p className="text-sm text-orange-600 font-medium mt-1">{video.service}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Modal */}
        {isPlaying && selectedVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4">
            <div className="relative w-full max-w-4xl">
              {/* Close Button */}
              <button
                onClick={handleCloseVideo}
                className="absolute -top-12 right-0 text-white hover:text-orange-500 transition-colors"
                aria-label="Close video"
              >
                <X className="w-8 h-8" />
              </button>

              {/* Video Player */}
              <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
                <iframe
                  src={selectedVideo.videoUrl}
                  title={`Video testimonial from ${selectedVideo.name}`}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* Video Info Below Player */}
              <div className="mt-4 text-white">
                <h3 className="text-xl font-bold mb-2">{selectedVideo.name}</h3>
                <p className="text-gray-300">{selectedVideo.location} • {selectedVideo.service}</p>
                <p className="mt-3 text-gray-200 italic">"{selectedVideo.quote}"</p>
              </div>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700 mb-6">
            {dict?.videoTestimonials?.cta || 'Ready to start your project? Join our satisfied customers today!'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`/${lang}/contact`}
              className="inline-block bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
            >
              {dict?.videoTestimonials?.getQuoteButton || 'Get Free Quote'}
            </a>
            <a
              href={`/${lang}/our-work`}
              className="inline-block bg-white text-orange-600 border-2 border-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors"
            >
              {dict?.videoTestimonials?.viewProjectsButton || 'View Our Projects'}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}