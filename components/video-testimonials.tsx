'use client'

import { useState } from 'react'
import { Play, X } from 'lucide-react'

type Lang = 'en' | 'af' | 'zu' | 'st'

interface VideoTestimonial {
  id: string
  name: string
  location: string
  service: string
  service_af: string
  service_zu: string
  service_st: string
  thumbnailUrl: string
  videoUrl: string
  quote: string
  quote_af: string
  quote_zu: string
  quote_st: string
  rating: number
}

interface VideoTestimonialsProps {
  dict: any
  lang: string
}

export default function VideoTestimonials({ dict, lang }: VideoTestimonialsProps) {
  const [selectedVideo, setSelectedVideo] = useState<VideoTestimonial | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const videoTestimonials: VideoTestimonial[] = [
    {
      id: '1',
      name: 'Sarah Johnson',
      location: 'Sandton',
      service: 'Home Renovation',
      service_af: 'Huisopknapping',
      service_zu: 'Ukuvuselelwa Kwekhaya',
      service_st: 'Ntlafatso ea Ntlo',
      thumbnailUrl: '/images/sinqobile-construction-renovation-sandton-video-thumb.jpg',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      quote: 'Sinqobile Construction transformed our home beyond our expectations. Professional, reliable, and excellent quality.',
      quote_af: 'Sinqobile Construction het ons huis omskep verby ons verwagtinge. Professioneel, betroubaar, en uitstekende kwaliteit.',
      quote_zu: 'I-Sinqobile Construction yashintsha ikhaya lethu ngokweqile okwakulindelekile kithi. Bobungcweti, abathembekile, futhi ikhwalithi eyimangaliso.',
      quote_st: 'Sinqobile Construction e fetotse ntlo ea rona ho feta litebello tsa rona. Botsebi, ho tšepahala, le boleng bo phahameng.',
      rating: 5,
    },
    {
      id: '2',
      name: 'Thabo Mthembu',
      location: 'Johannesburg',
      service: 'Roofing Installation',
      service_af: 'Dak Installasie',
      service_zu: 'Ukufakwa Kophahla',
      service_st: 'Ho Beoa ha Marulelo',
      thumbnailUrl: '/images/sinqobile-construction-roofing-johannesburg-video-thumb.jpg',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      quote: 'Outstanding roofing work. They completed the project on time and within budget.',
      quote_af: 'Uitstekende dakwerk. Hulle het die projek op tyd en binne begroting voltooi.',
      quote_zu: 'Umsebenzi obabazekayo wokwakha uphahla. Bayiqede iphrojekthi ngesikhathi futhi ngaphakathi kwesabelomali.',
      quote_st: 'Mosebetsi o motle haholo oa marulelo. Ba phethile morero ka nako le kahare ho tekanyetso.',
      rating: 5,
    },
    {
      id: '3',
      name: 'Linda van der Merwe',
      location: 'Pretoria',
      service: 'Kitchen Remodel',
      service_af: 'Kombuis Heromskepping',
      service_zu: 'Ukubunjwa Kabusha Kwekhishi',
      service_st: 'Ho Aha Kitjhini Botjha',
      thumbnailUrl: '/images/sinqobile-construction-kitchen-pretoria-video-thumb.jpg',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      quote: 'The attention to detail was incredible. Our new kitchen is absolutely stunning!',
      quote_af: 'Die aandag aan detail was ongelooflik. Ons nuwe kombuis is absoluut pragtig!',
      quote_zu: 'Ukunaka imininingwane bekuyimangaliso. Ikhishi lethu elisha lihle ngempela!',
      quote_st: 'Tlhokomelo ho lintlha e ne e makatsa. Kitjhini ea rona e ncha e ntle ka botlalo!',
      rating: 5,
    },
  ]

  const localize = (v: VideoTestimonial): { quote: string; service: string } => {
    if (lang === 'en' || !['af', 'zu', 'st'].includes(lang)) {
      return { quote: v.quote, service: v.service }
    }
    const qKey = `quote_${lang}` as 'quote_af' | 'quote_zu' | 'quote_st'
    const sKey = `service_${lang}` as 'service_af' | 'service_zu' | 'service_st'
    return { quote: v[qKey] || v.quote, service: v[sKey] || v.service }
  }

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
          {videoTestimonials.map((video) => {
            const l = localize(video)
            return (
              <div
                key={video.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative aspect-video bg-gray-200 cursor-pointer group">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="text-6xl mb-2">🎥</div>
                      <p className="text-sm font-medium">{l.service}</p>
                    </div>
                  </div>

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
                    "{l.quote}"
                  </p>

                  <div className="border-t pt-4">
                    <p className="font-semibold text-gray-900">{video.name}</p>
                    <p className="text-sm text-gray-600">{video.location}</p>
                    <p className="text-sm text-orange-600 font-medium mt-1">{l.service}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {isPlaying && selectedVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4">
            <div className="relative w-full max-w-4xl">
              <button
                onClick={handleCloseVideo}
                className="absolute -top-12 right-0 text-white hover:text-orange-500 transition-colors"
                aria-label="Close video"
              >
                <X className="w-8 h-8" />
              </button>

              <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
                <iframe
                  src={selectedVideo.videoUrl}
                  title={`Video testimonial from ${selectedVideo.name}`}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              <div className="mt-4 text-white">
                <h3 className="text-xl font-bold mb-2">{selectedVideo.name}</h3>
                <p className="text-gray-300">{selectedVideo.location} • {localize(selectedVideo).service}</p>
                <p className="mt-3 text-gray-200 italic">"{localize(selectedVideo).quote}"</p>
              </div>
            </div>
          </div>
        )}

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
