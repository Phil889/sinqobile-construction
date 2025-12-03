'use client'

import React from 'react'
import { Phone } from 'lucide-react'

interface TrackedCallButtonProps {
  phoneNumber: string
  displayNumber: string
  source?: string
  className?: string
  variant?: 'primary' | 'secondary' | 'accent'
  size?: 'sm' | 'md' | 'lg'
  showIcon?: boolean
}

export default function TrackedCallButton({
  phoneNumber,
  displayNumber,
  source = 'website',
  className = '',
  variant = 'primary',
  size = 'md',
  showIcon = true
}: TrackedCallButtonProps) {
  const handleClick = () => {
    // Track the call event
    if (typeof window !== 'undefined') {
      // Google Analytics 4 event
      if ((window as any).gtag) {
        (window as any).gtag('event', 'phone_call', {
          event_category: 'engagement',
          event_label: source,
          phone_number: phoneNumber,
          value: 1
        })
      }

      // Facebook Pixel event
      if ((window as any).fbq) {
        (window as any).fbq('track', 'Contact', {
          content_name: 'Phone Call',
          content_category: source
        })
      }

      // Custom event for other analytics
      window.dispatchEvent(new CustomEvent('phone_call_clicked', {
        detail: {
          phoneNumber,
          source,
          timestamp: new Date().toISOString()
        }
      }))

      // Log to console in development
      if (process.env.NODE_ENV === 'development') {
        console.log('📞 Call tracking event:', {
          phoneNumber,
          displayNumber,
          source,
          timestamp: new Date().toISOString()
        })
      }
    }
  }

  const variantClasses = {
    primary: 'bg-primary hover:bg-blue-700 text-white',
    secondary: 'bg-secondary hover:bg-gray-700 text-white',
    accent: 'bg-accent hover:bg-orange-700 text-white'
  }

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }

  return (
    <a
      href={`tel:${phoneNumber}`}
      onClick={handleClick}
      className={`
        inline-flex items-center justify-center space-x-2 
        rounded-lg font-semibold transition-colors
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${className}
      `}
      aria-label={`Call ${displayNumber}`}
    >
      {showIcon && <Phone size={size === 'sm' ? 16 : size === 'md' ? 20 : 24} />}
      <span>{displayNumber}</span>
    </a>
  )
}