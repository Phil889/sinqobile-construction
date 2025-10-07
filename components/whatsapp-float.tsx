'use client'

import { MessageCircle, X } from 'lucide-react'
import { useState } from 'react'

export default function WhatsAppFloat() {
  const [isOpen, setIsOpen] = useState(false)
  const phoneNumber = '27719334063'
  const message = 'Hi MD Builders, I would like to inquire about your services.'

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
                Chat with us
              </h4>
              <button
                onClick={() => setIsOpen(false)}
                className="text-secondary hover:text-primary"
              >
                <X size={20} />
              </button>
            </div>
            <p className="text-sm text-secondary mb-4">
              Need help? Chat with Meshack Dlamini on WhatsApp
            </p>
            <button
              onClick={handleWhatsAppClick}
              className="w-full bg-green-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
            >
              <MessageCircle size={18} />
              <span>Start Chat</span>
            </button>
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition-all hover:scale-110"
          aria-label="WhatsApp Chat"
        >
          {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
        </button>
      </div>
    </>
  )
}