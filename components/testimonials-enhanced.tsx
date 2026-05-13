'use client'

import React, { useState } from 'react'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import { getDictionary } from '@/lib/dictionaries'

type Lang = 'en' | 'af' | 'zu' | 'st'

interface Review {
  id: number
  author: string
  location: string
  rating: 5
  date: string
  text: string
  text_af: string
  text_zu: string
  text_st: string
  service: string
  service_af: string
  service_zu: string
  service_st: string
  verified: boolean
}

interface TestimonialsEnhancedProps {
  dict: Awaited<ReturnType<typeof getDictionary>>
  lang?: Lang
}

const reviews: Review[] = [
  {
    id: 1,
    author: 'Sarah Johnson',
    location: 'Sandton',
    rating: 5,
    date: '2024-01-15',
    text: 'Sinqobile Construction transformed our home with a complete renovation. Their attention to detail and professionalism exceeded our expectations. The team was punctual, clean, and delivered exactly what they promised. Highly recommend!',
    text_af: 'Sinqobile Construction het ons huis met \'n volledige opknapping omskep. Hulle aandag aan detail en professionaliteit het ons verwagtinge oortref. Die span was stiptelik, skoon, en het presies gelewer wat hulle beloof het. Sterk aanbeveel!',
    text_zu: 'I-Sinqobile Construction yashintsha ikhaya lethu ngokuvuselelwa okuphelele. Ukunaka kwabo imininingwane nobungcweti badlula okwakulindelekile kithi. Iqembu lalifika ngesikhathi, lihlanzekile, futhi lalwenza kahle into elalithembise yona. Kunconywa kakhulu!',
    text_st: 'Sinqobile Construction e fetotse ntlo ea rona ka ntlafatso e felletseng. Tlhokomelo ea bona ho lintlha le tloaelo ea bona ea mosebetsi e fetile litebello tsa rona. Sehlopha se ne se le nako, se hloekile, mme ba fane ka seo ba se tšepisitseng hantle. Re kgothaletsa haholo!',
    service: 'Home Renovation',
    service_af: 'Huisopknapping',
    service_zu: 'Ukuvuselelwa Kwekhaya',
    service_st: 'Ntlafatso ea Ntlo',
    verified: true,
  },
  {
    id: 2,
    author: 'David Naidoo',
    location: 'Johannesburg',
    rating: 5,
    date: '2024-01-10',
    text: 'Excellent plastering and painting work on our office building. The quality of workmanship is outstanding and they completed the project on time and within budget. Will definitely use them again.',
    text_af: 'Uitstekende pleisterwerk en verfwerk op ons kantoorgebou. Die kwaliteit van vakmanskap is uitsonderlik en hulle het die projek op tyd en binne begroting voltooi. Sal hulle beslis weer gebruik.',
    text_zu: 'Umsebenzi omuhle wokubhinca nokupenda esakhiweni sethu sehhovisi. Ikhwalithi yobungcweti iyamangaza futhi baqeda iphrojekthi ngesikhathi futhi ngaphakathi kwesabelomali. Ngempela sizobasebenzisa futhi.',
    text_st: 'Mosebetsi o motle oa pleister le ho penta moahong oa rona oa ofisi. Boleng ba mosebetsi bo bohlokwa haholo mme ba qetile morero ka nako le kahare ho tekanyetso. Re tla ba sebedisa hape ka mehla.',
    service: 'Plastering & Painting',
    service_af: 'Pleisterwerk & Verfwerk',
    service_zu: 'Ukubhinca Nokupenda',
    service_st: 'Pleisterwerk le Ho Penta',
    verified: true,
  },
  {
    id: 3,
    author: 'Linda van der Merwe',
    location: 'Pretoria',
    rating: 5,
    date: '2024-01-05',
    text: 'We hired Sinqobile Construction for our new paving and they did an amazing job. The driveway looks fantastic and has held up perfectly. Great communication throughout the project.',
    text_af: 'Ons het Sinqobile Construction gehuur vir ons nuwe plaveisel en hulle het \'n wonderlike werk gedoen. Die oprit lyk fantasties en het perfek gehou. Goeie kommunikasie deur die hele projek.',
    text_zu: 'Saqasha i-Sinqobile Construction ukuze sifake ukungcweka okusha futhi benza umsebenzi omangalisayo. Indlela yemoto ibukeka inhle kakhulu futhi ihlale kahle. Ukuxhumana okuhle phakathi nayo yonke iphrojekthi.',
    text_st: 'Re ile ra hira Sinqobile Construction bakeng sa peleto e ncha mme ba entse mosebetsi o makatsang. Tsela ea koloi e shebahala e ntle haholo mme e tšoarella hantle. Puisano e ntle ka nako e telele ea morero.',
    service: 'Paving',
    service_af: 'Plaveisel',
    service_zu: 'Ukungcweka',
    service_st: 'Peleto',
    verified: true,
  },
  {
    id: 4,
    author: 'Michael Dlamini',
    location: 'Midrand',
    rating: 5,
    date: '2023-12-20',
    text: 'Professional roofing service from start to finish. They identified and fixed all the leaks in our roof. No more water damage! The team was friendly and efficient.',
    text_af: 'Professionele dakwerk diens van begin tot einde. Hulle het al die lekkasies in ons dak geïdentifiseer en reggemaak. Geen waterskade meer nie! Die span was vriendelik en doeltreffend.',
    text_zu: 'Insiza yokwakha uphahla yobungcweti kusukela ekuqaleni kuya ekugcineni. Bahlonza futhi balungisa yonke imivuza ophahleni lwethu. Asisenakho ukulimala kwamanzi! Iqembu lalinobungane futhi lisebenza kahle.',
    text_st: 'Tshebeletso ea botsebi ea marulelo ho tloha qalong ho fihlela qetellong. Ba hlalositse le ho lokisa mafu ohle marulelo a rona. Ha ho sa na tšenyo ea metsi! Sehlopha se ne se le mosa le ho sebetsa hantle.',
    service: 'Roofing',
    service_af: 'Dakwerk',
    service_zu: 'Uphahla',
    service_st: 'Marulelo',
    verified: true,
  },
  {
    id: 5,
    author: 'Jennifer Smith',
    location: 'Randburg',
    rating: 5,
    date: '2023-12-15',
    text: 'Sinqobile Construction built our dream home extension. The quality is exceptional and they managed the entire project seamlessly. Couldn\'t be happier with the results!',
    text_af: 'Sinqobile Construction het ons droom-huisuitbreiding gebou. Die kwaliteit is uitsonderlik en hulle het die hele projek naatloos bestuur. Kon nie gelukkiger gewees het met die resultate nie!',
    text_zu: 'I-Sinqobile Construction yakhe isandiso sephupho lethu lekhaya. Ikhwalithi imangalisa futhi baphathe iphrojekthi yonke ngokushelelayo. Sasingakwazi ukuba nentokozo enkulu ngemiphumela!',
    text_st: 'Sinqobile Construction e hahile keketso ea ntlo ea litoro ea rona. Boleng bo phahame haholo mme ba tsamaisitse morero kaofela ka mokgwa o boreledi. Re ne re ke ke ra thaba ho feta ka diphetho!',
    service: 'Building & Extensions',
    service_af: 'Bou & Uitbreidings',
    service_zu: 'Ukwakha Nezandiso',
    service_st: 'Kaho le Keketso',
    verified: true,
  },
  {
    id: 6,
    author: 'Peter Botha',
    location: 'Centurion',
    rating: 5,
    date: '2023-12-10',
    text: 'Fast and reliable plumbing service. They fixed our burst pipe emergency within hours and did a thorough job. Very reasonable pricing too.',
    text_af: 'Vinnige en betroubare loodgieterswerk diens. Hulle het ons gebarste-pyp noodgeval binne ure reggemaak en \'n deeglike werk gedoen. Baie redelike pryse ook.',
    text_zu: 'Insiza yamapayipi esheshayo nethembekayo. Balungisa isimo sethu esiphuthumayo sepayipi eliqhumileyo ngaphakathi kwamahora futhi benza umsebenzi onzulu. Amanani afanele kakhulu nawo.',
    text_st: 'Tshebeletso ea lipeipi e potlakang le e tšepahalang. Ba lokisitse tšohanyetso ea rona ea peipi e phathohileng ka har\'a lihora mme ba etsa mosebetsi o tebileng. Litheko tse utloahalang haholo le tsona.',
    service: 'Plumbing',
    service_af: 'Loodgieterswerk',
    service_zu: 'Amapayipi',
    service_st: 'Lipeipi',
    verified: true,
  },
  {
    id: 7,
    author: 'Thandi Mthembu',
    location: 'Fourways',
    rating: 5,
    date: '2023-12-05',
    text: 'Beautiful tiling work in our bathrooms and kitchen. The attention to detail is impressive and the finish is perfect. Highly professional team.',
    text_af: 'Pragtige teëlwerk in ons badkamers en kombuis. Die aandag aan detail is indrukwekkend en die afwerking is perfek. Hoogs professionele span.',
    text_zu: 'Umsebenzi omuhle wamatayela emagunjini ethu okugeza nasekhishini. Ukunaka imininingwane kuyamangalisa futhi ukuqeda kupelele. Iqembu eliphezulu lobungcweti.',
    text_st: 'Mosebetsi o motle oa litaele ka likamoreng tsa rona tsa bohlapelo le kitjhini. Tlhokomelo ho lintlha e khahleha mme moqetelo o phethahetse. Sehlopha se phahameng sa botsebi.',
    service: 'Tiling',
    service_af: 'Teëlwerk',
    service_zu: 'Amatayela',
    service_st: 'Litaele',
    verified: true,
  },
  {
    id: 8,
    author: 'James Wilson',
    location: 'Roodepoort',
    rating: 5,
    date: '2023-11-28',
    text: 'Excellent waterproofing service. Our basement was constantly flooding but Sinqobile Construction solved the problem completely. No issues since they finished the work.',
    text_af: 'Uitstekende waterdigting diens. Ons kelder het voortdurend oorstroom maar Sinqobile Construction het die probleem heeltemal opgelos. Geen probleme sedert hulle die werk klaar gemaak het nie.',
    text_zu: 'Insiza yokuvala amanzi enhle kakhulu. Indawo yethu engaphansi yayinokuqha njalo kodwa i-Sinqobile Construction yayixazulula inkinga ngokuphelele. Akunazinkinga kusukela baqeda umsebenzi.',
    text_st: 'Tshebeletso e ntle haholo ea tšireletso ea metsi. Basement ea rona e ne e tlatsoa ka mehla empa Sinqobile Construction e ile ea rarolla bothata ka botlalo. Ha ho na mathata ho tloha ha ba qeta mosebetsi.',
    service: 'Waterproofing',
    service_af: 'Waterdigting',
    service_zu: 'Ukuvalwa Kwamanzi',
    service_st: 'Tšireletso ea Metsi',
    verified: true,
  },
]

function localized(review: Review, lang: Lang): { text: string; service: string } {
  if (lang === 'en') return { text: review.text, service: review.service }
  const textKey = `text_${lang}` as 'text_af' | 'text_zu' | 'text_st'
  const serviceKey = `service_${lang}` as 'service_af' | 'service_zu' | 'service_st'
  return { text: review[textKey] || review.text, service: review[serviceKey] || review.service }
}

export default function TestimonialsEnhanced({ dict, lang = 'en' }: TestimonialsEnhancedProps) {
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
  const localCurrent = localized(currentReview, lang)
  const t = dict.testimonialsEnhanced

  const reviewSchema = {
    '@context': 'https://schema.org',
    '@type': 'GeneralContractor',
    '@id': 'https://www.sinqobileconstruction.co.za/#localbusiness',
    name: 'Sinqobile Construction',
    review: reviews.map((review) => ({
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: review.author,
      },
      datePublished: review.date,
      reviewBody: review.text,
      reviewRating: {
        '@type': 'Rating',
        ratingValue: review.rating.toString(),
        bestRating: '5',
        worstRating: '1',
      },
      itemReviewed: {
        '@type': 'Service',
        name: review.service,
        provider: {
          '@type': 'Organization',
          name: 'Sinqobile Construction',
        },
      },
    })),
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

            <div className="relative bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8">
              <Quote className="absolute top-6 left-6 text-primary/10" size={48} />

              <div className={`relative z-10 transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
                <div className="flex justify-center mb-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={28} fill="#F59E0B" className="text-yellow-500" />
                  ))}
                </div>

                <p className="text-secondary text-lg md:text-xl leading-relaxed text-center mb-8 italic">
                  "{localCurrent.text}"
                </p>

                <div className="text-center">
                  <p className="font-bold text-xl text-secondary mb-1">
                    {currentReview.author}
                  </p>
                  <p className="text-secondary mb-2">
                    {currentReview.location} • {localCurrent.service}
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

              <div className="flex justify-between items-center mt-8">
                <button
                  onClick={prevReview}
                  disabled={isAnimating}
                  className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors disabled:opacity-50"
                  aria-label="Previous review"
                >
                  <ChevronLeft size={24} />
                </button>

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
