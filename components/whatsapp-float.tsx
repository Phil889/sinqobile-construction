'use client'

import { MessageCircle, X } from 'lucide-react'
import { useState } from 'react'

interface WhatsAppFloatProps {
  dict: any
}

export default function WhatsAppFloat({ dict }: WhatsAppFloatProps) {
  const [isOpen, setIsOpen] = useState(false)
  const phoneNumber = '27828688396'
  const message = 'Hi Sinqobile Construction, I would like to inquire about your services.'

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {isOpen && (
          <div className="mb-4 bg-white rounded-lg shadow-2xl p-4 w-64 animate-slide-up">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-heading font-semibold text-secondary">
                {dict.whatsappFloat.chatWithUs}
              </h4>
              <button
                onClick={() => setIsOpen(false)}
                className="text-secondary hover:text-primary"
              >
                <X size={20} />
              </button>
            </div>
            <p className="text-sm text-secondary mb-4">
              {dict.whatsappFloat.needHelp}
            </p>
            <button
              onClick={handleWhatsAppClick}
              className="w-full bg-green-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
            >
              <MessageCircle size={18} />
              <span>{dict.whatsappFloat.startChat}</span>
            </button>
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition-all hover:scale-110 relative"
          aria-label="Live Chat"
        >
          {isOpen ? (
            <X size={28} />
          ) : (
            <>
              <MessageCircle size={28} />
              {/* Live Chat Badge */}
              <span className="absolute -top-1 -right-1 bg-accent text-secondary text-xs px-2 py-0.5 rounded-full font-semibold shadow-md">
                Live Chat
              </span>
            </>
          )}
        </button>
      </div>
    </>
  )
}