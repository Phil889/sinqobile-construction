'use client'

import { Phone } from 'lucide-react'
import { useEffect } from 'react'

interface TrackedPhoneButtonProps {
  className?: string
  showIcon?: boolean
  text?: string
}

export default function TrackedPhoneButton({ 
  className = '',
  showIcon = true,
  text = 'Call Now: 071 933 4063'
}: TrackedPhoneButtonProps) {
  
  const handleCall = () => {
    // Track the call event
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'phone_call', {
        event_category: 'contact',
        event_label: 'Header Phone Call',
        value: 1
      })
    }
    
    // Make the call
    window.location.href = 'tel:0719334063'
  }

  return (
    <button
      onClick={handleCall}
      className={className || 'bg-accent text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors flex items-center space-x-2'}
    >
      {showIcon && <Phone size={18} />}
      <span>{text}</span>
    </button>
  )
}