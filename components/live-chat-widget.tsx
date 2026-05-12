'use client'

import { MessageCircle, X, Phone, Calendar, FileText, HelpCircle } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const T = {
  en: {
    chatWith: 'Chat with Sinqobile Construction',
    online: 'Online',
    greeting: 'Hi! How can we help you today?',
    chooseOption: 'Choose an option below or call us directly',
    getQuote: 'Get a Quote',
    askQuestion: 'Ask a Question',
    scheduleConsultation: 'Schedule Consultation',
    callNow: 'Call Us Now',
    hours: 'Available Mon-Fri: 7AM-5PM | Sat: 8AM-1PM',
    badge: 'Get A Quote',
    waMessage: 'Hi Sinqobile Construction, I would like to inquire about your services.',
  },
  af: {
    chatWith: 'Gesels met Sinqobile Construction',
    online: 'Aanlyn',
    greeting: 'Hallo! Hoe kan ons u vandag help?',
    chooseOption: 'Kies \'n opsie hieronder of bel ons direk',
    getQuote: 'Kry \'n Kwotasie',
    askQuestion: 'Stel \'n Vraag',
    scheduleConsultation: 'Skeduleer Konsultasie',
    callNow: 'Bel Ons Nou',
    hours: 'Beskikbaar Ma-Vr: 7VM-5NM | Sa: 8VM-1NM',
    badge: 'Kry Kwotasie',
    waMessage: 'Hallo Sinqobile Construction, ek wil graag navraag doen oor u dienste.',
  },
  zu: {
    chatWith: 'Xoxa noSinqobile Construction',
    online: 'Ku-inthanethi',
    greeting: 'Sawubona! Singakusiza kanjani namuhla?',
    chooseOption: 'Khetha inketho engezansi noma usishayele ucingo ngokuqondile',
    getQuote: 'Thola Isikweletu',
    askQuestion: 'Buza Umbuzo',
    scheduleConsultation: 'Beka Isikhathi Sokuxoxisana',
    callNow: 'Shayela Manje',
    hours: 'Sitholakala: Mso-Lwe: 7AM-5PM | Mgq: 8AM-1PM',
    badge: 'Thola Isikweletu',
    waMessage: 'Sawubona Sinqobile Construction, ngifuna ukubuza mayelana nezinsiza zenu.',
  },
  st: {
    chatWith: 'Bua le Sinqobile Construction',
    online: 'Inthaneteng',
    greeting: 'Lumela! Re ka u thusa joang kajeno?',
    chooseOption: 'Khetha kgetho e ka tlase kapa re letsetse ka kotloloho',
    getQuote: 'Fumana Quotation',
    askQuestion: 'Botsa Potso',
    scheduleConsultation: 'Beha Nakoana ea Puisano',
    callNow: 'Letsetsa Hona Joale',
    hours: 'Re fumaneha: Mos-Lak: 7AM-5PM | Mok: 8AM-1PM',
    badge: 'Fumana Quotation',
    waMessage: 'Lumela Sinqobile Construction, ke rata ho botsa ka litšebeletso tsa lona.',
  },
} as const

type Lang = keyof typeof T

export default function LiveChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const phoneNumber = '27828688396'
  const pathname = usePathname()
  const segment = pathname?.split('/')[1] as Lang
  const t = T[segment] ?? T.en
  const lang = Object.keys(T).includes(segment) ? segment : 'en'

  const handleCallNow = () => {
    window.location.href = 'tel:+27828688396'
  }

  const handleWhatsApp = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(t.waMessage)}`
    window.open(url, '_blank')
  }

  return (
    <>
      {/* Floating Chat Widget */}
      <div className="fixed bottom-6 right-6 z-50 hidden md:block">
        {isOpen && (
          <div className="mb-4 bg-white rounded-lg shadow-2xl w-80 animate-slide-up overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-accent to-yellow-500 p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <MessageCircle className="text-accent" size={24} />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-secondary text-lg">
                    {t.chatWith}
                  </h4>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs text-secondary">{t.online}</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-secondary hover:text-primary transition-colors"
                aria-label="Close chat"
              >
                <X size={24} />
              </button>
            </div>

            {/* Chat Content */}
            <div className="p-4 bg-gray-50">
              <div className="bg-white rounded-lg p-3 mb-4 shadow-sm">
                <p className="text-sm text-secondary mb-1 font-medium">
                  {t.greeting}
                </p>
                <p className="text-xs text-gray-600">
                  {t.chooseOption}
                </p>
              </div>

              {/* Quick Action Buttons */}
              <div className="space-y-2">
                <Link
                  href={`/${lang}/contact`}
                  onClick={() => setIsOpen(false)}
                  className="w-full bg-white hover:bg-gray-50 text-secondary px-4 py-3 rounded-lg font-medium transition-all flex items-center space-x-3 shadow-sm border border-gray-200 hover:border-accent group"
                >
                  <FileText className="text-accent group-hover:scale-110 transition-transform" size={20} />
                  <span>{t.getQuote}</span>
                </Link>

                <button
                  onClick={handleWhatsApp}
                  className="w-full bg-white hover:bg-gray-50 text-secondary px-4 py-3 rounded-lg font-medium transition-all flex items-center space-x-3 shadow-sm border border-gray-200 hover:border-accent group"
                >
                  <HelpCircle className="text-accent group-hover:scale-110 transition-transform" size={20} />
                  <span>{t.askQuestion}</span>
                </button>

                <Link
                  href={`/${lang}/contact`}
                  onClick={() => setIsOpen(false)}
                  className="w-full bg-white hover:bg-gray-50 text-secondary px-4 py-3 rounded-lg font-medium transition-all flex items-center space-x-3 shadow-sm border border-gray-200 hover:border-accent group"
                >
                  <Calendar className="text-accent group-hover:scale-110 transition-transform" size={20} />
                  <span>{t.scheduleConsultation}</span>
                </Link>

                <button
                  onClick={handleCallNow}
                  className="w-full bg-primary hover:bg-orange-700 text-white px-4 py-3 rounded-lg font-medium transition-all flex items-center justify-center space-x-3 shadow-md hover:shadow-lg"
                >
                  <Phone size={20} />
                  <span>{t.callNow}</span>
                </button>
              </div>

              {/* Contact Info */}
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-xs text-gray-600 text-center">
                  {t.hours}
                </p>
                <p className="text-xs text-accent text-center font-semibold mt-1">
                  +27 82 868 8396
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Chat Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-accent hover:bg-yellow-500 text-secondary p-4 rounded-full shadow-lg transition-all hover:scale-110 relative"
          aria-label="Get a quote"
        >
          {isOpen ? (
            <X size={28} />
          ) : (
            <>
              <MessageCircle size={28} />
              {/* Badge */}
              <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs px-2 py-0.5 rounded-full font-semibold shadow-md">
                {t.badge}
              </span>
            </>
          )}
        </button>
      </div>
    </>
  )
}
