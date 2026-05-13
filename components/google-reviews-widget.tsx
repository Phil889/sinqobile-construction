import { Star, ExternalLink } from 'lucide-react';

type Lang = 'en' | 'af' | 'zu' | 'st'

interface GoogleReviewsWidgetProps {
  dict: any
  lang?: Lang
}

interface GReview {
  name: string
  rating: number
  text: string
  text_af: string
  text_zu: string
  text_st: string
  date: string
  date_af: string
  date_zu: string
  date_st: string
}

export default function GoogleReviewsWidget({ dict, lang = 'en' }: GoogleReviewsWidgetProps) {
  const reviews: GReview[] = [
    {
      name: 'Sarah M.',
      rating: 5,
      text: 'Exceptional work on our home renovation! Meshack and his team were professional, punctual, and delivered beyond our expectations. Highly recommend!',
      text_af: 'Uitsonderlike werk op ons huisopknapping! Meshack en sy span was professioneel, stiptelik, en het bo ons verwagtinge gelewer. Sterk aanbeveel!',
      text_zu: 'Umsebenzi obabazekayo wokuvuselelwa kwekhaya lethu! UMeshack neqembu lakhe bebobungcweti, befika ngesikhathi, futhi babe nikeze ngokweqile okwakulindelekile. Kunconywa kakhulu!',
      text_st: 'Mosebetsi o phahameng oa ntlafatso ea ntlo ea rona! Meshack le sehlopha sa hae ba ne ba le botsebi, ba le nako, mme ba fane ka ho feta litebello tsa rona. Re kgothaletsa haholo!',
      date: '2 weeks ago',
      date_af: '2 weke gelede',
      date_zu: 'amasonto ama-2 edlule',
      date_st: 'dibeke tse 2 tse fetileng',
    },
    {
      name: 'John K.',
      rating: 5,
      text: 'Outstanding paving work. The attention to detail was impressive and the project was completed on time. Will definitely use Sinqobile Construction again.',
      text_af: 'Uitstekende plaveiselwerk. Die aandag aan detail was indrukwekkend en die projek is op tyd voltooi. Sal beslis Sinqobile Construction weer gebruik.',
      text_zu: 'Umsebenzi obabazekayo wokungcweka. Ukunaka imininingwane bekuyamangaza futhi iphrojekthi yaqedwa ngesikhathi. Sizoqinisekisa ukusebenzisa i-Sinqobile Construction futhi.',
      text_st: 'Mosebetsi o motle haholo oa peleto. Tlhokomelo ho lintlha e ne e khahleha mme morero o phethiloe ka nako. Re tla sebedisa Sinqobile Construction hape ka mehla.',
      date: '1 month ago',
      date_af: '1 maand gelede',
      date_zu: 'inyanga eyodwa edlule',
      date_st: 'khoeli e le 1 e fetileng',
    },
    {
      name: 'Linda T.',
      rating: 5,
      text: 'Professional service from start to finish. Our bathroom renovation looks amazing! Great communication and quality workmanship throughout.',
      text_af: 'Professionele diens van begin tot einde. Ons badkamer-opknapping lyk wonderlik! Goeie kommunikasie en kwaliteit vakmanskap regdeur.',
      text_zu: 'Insiza yobungcweti kusukela ekuqaleni kuze kube sekugcineni. Ukuvuselelwa kwegumbi lethu lokugeza kubukeka kuyamangalisa! Ukuxhumana okuhle nomsebenzi okhwalithi yonke indawo.',
      text_st: 'Tshebeletso ea botsebi ho tloha qalong ho fihlela qetellong. Ntlafatso ea rona ea kamore ea bohlapelo e shebahala e makatsa! Puisano e ntle le mosebetsi oa boleng nako e telele.',
      date: '3 weeks ago',
      date_af: '3 weke gelede',
      date_zu: 'amasonto ama-3 edlule',
      date_st: 'dibeke tse 3 tse fetileng',
    },
  ];

  const localize = (r: GReview): { text: string; date: string } => {
    if (lang === 'en') return { text: r.text, date: r.date }
    const tKey = `text_${lang}` as 'text_af' | 'text_zu' | 'text_st'
    const dKey = `date_${lang}` as 'date_af' | 'date_zu' | 'date_st'
    return { text: r[tKey] || r.text, date: r[dKey] || r.date }
  }

  const renderStars = (rating: number) => {
    return (
      <div className="flex space-x-1">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            className={`w-5 h-5 ${
              index < rating
                ? 'fill-[#FFD600] text-[#FFD600]'
                : 'fill-gray-300 text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {dict.googleReviews.title}
            </h2>
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="flex items-center space-x-2">
                <span className="text-5xl font-bold text-gray-900">4.9</span>
                <div>
                  {renderStars(5)}
                  <p className="text-sm text-gray-600 mt-1">127 {dict.googleReviews.reviews}</p>
                </div>
              </div>
            </div>
            <a
              href="https://www.google.com/maps?cid=12743093499437970359"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-[#FFD600] text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-[#FFD600]/90 transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              <span>{dict.googleReviews.readAll}</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review, index) => {
              const l = localize(review)
              return (
                <div
                  key={index}
                  className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="font-bold text-gray-900">{review.name}</h3>
                      <p className="text-sm text-gray-500">{l.date}</p>
                    </div>
                    {renderStars(review.rating)}
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    "{l.text}"
                  </p>
                </div>
              )
            })}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center space-x-3 bg-gray-50 px-6 py-4 rounded-lg shadow-md">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <div className="text-left">
                <p className="text-sm font-semibold text-gray-900">{dict.googleReviews.verifiedOn}</p>
                <p className="text-xs text-gray-600">{dict.googleReviews.trustedProfile}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
