'use client'

import { MessageCircle, X, Phone, Calendar, FileText, HelpCircle } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'

export default function LiveChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const phoneNumber = '27719334063'

  const handleCallNow = () => {
    window.location.href = 'tel:+27719334063'
  }

  const handleWhatsApp = () => {
    const message = 'Hi Sinqobile Construction, I would like to inquire about your services.'
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  return (
    <>
      {/* Floating Chat Widget - positioned to not interfere with WhatsApp button */}
      <div className="fixed bottom-6 left-6 z-50">
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
                    Chat with Sinqobile Construction
                  </h4>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs text-secondary">Online</span>
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
                  Hi! How can we help you today?
                </p>
                <p className="text-xs text-gray-600">
                  Choose an option below or call us directly
                </p>
              </div>

              {/* Quick Action Buttons */}
              <div className="space-y-2">
                <Link
                  href="/en/contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full bg-white hover:bg-gray-50 text-secondary px-4 py-3 rounded-lg font-medium transition-all flex items-center space-x-3 shadow-sm border border-gray-200 hover:border-accent group"
                >
                  <FileText className="text-accent group-hover:scale-110 transition-transform" size={20} />
                  <span>Get a Quote</span>
                </Link>

                <button
                  onClick={handleWhatsApp}
                  className="w-full bg-white hover:bg-gray-50 text-secondary px-4 py-3 rounded-lg font-medium transition-all flex items-center space-x-3 shadow-sm border border-gray-200 hover:border-accent group"
                >
                  <HelpCircle className="text-accent group-hover:scale-110 transition-transform" size={20} />
                  <span>Ask a Question</span>
                </button>

                <Link
                  href="/en/contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full bg-white hover:bg-gray-50 text-secondary px-4 py-3 rounded-lg font-medium transition-all flex items-center space-x-3 shadow-sm border border-gray-200 hover:border-accent group"
                >
                  <Calendar className="text-accent group-hover:scale-110 transition-transform" size={20} />
                  <span>Schedule Consultation</span>
                </Link>

                <button
                  onClick={handleCallNow}
                  className="w-full bg-primary hover:bg-orange-700 text-white px-4 py-3 rounded-lg font-medium transition-all flex items-center justify-center space-x-3 shadow-md hover:shadow-lg"
                >
                  <Phone size={20} />
                  <span>Call Us Now</span>
                </button>
              </div>

              {/* Contact Info */}
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-xs text-gray-600 text-center">
                  Available Mon-Fri: 7AM-5PM | Sat: 8AM-1PM
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
          aria-label="Open chat"
        >
          {isOpen ? (
            <X size={28} />
          ) : (
            <>
              <MessageCircle size={28} />
              {/* Online Badge */}
              <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs px-2 py-0.5 rounded-full font-semibold shadow-md">
                Online
              </span>
            </>
          )}
        </button>
      </div>
    </>
  )
}