'use client'

import React, { useState, useEffect } from 'react'
import { Users, CheckCircle, Award, TrendingUp } from 'lucide-react'

interface SocialProofProps {
  lang: string
}

export default function SocialProof({ lang }: SocialProofProps) {
  const [activeUsers, setActiveUsers] = useState(12)
  const [recentBookings, setRecentBookings] = useState<string[]>([])

  useEffect(() => {
    // Simulate active users count (between 8-15)
    const interval = setInterval(() => {
      setActiveUsers(Math.floor(Math.random() * 8) + 8)
    }, 30000) // Update every 30 seconds

    // Simulate recent bookings
    const bookings = [
      'Sarah from Sandton just requested a quote',
      'John from Johannesburg booked a consultation',
      'Linda from Pretoria requested a quote',
      'Michael from Midrand booked a consultation',
      'Peter from Centurion requested a quote'
    ]
    
    let currentIndex = 0
    const bookingInterval = setInterval(() => {
      setRecentBookings(prev => {
        const newBookings = [...prev, bookings[currentIndex]]
        currentIndex = (currentIndex + 1) % bookings.length
        return newBookings.slice(-3) // Keep only last 3
      })
    }, 15000) // New booking every 15 seconds

    return () => {
      clearInterval(interval)
      clearInterval(bookingInterval)
    }
  }, [])

  const stats = [
    {
      icon: Users,
      value: '500+',
      label: 'Projects Completed',
      color: 'text-blue-600'
    },
    {
      icon: CheckCircle,
      value: '4.9★',
      label: 'Customer Rating',
      color: 'text-yellow-600'
    },
    {
      icon: Award,
      value: '15+',
      label: 'Years Experience',
      color: 'text-green-600'
    },
    {
      icon: TrendingUp,
      value: '98%',
      label: 'Satisfaction Rate',
      color: 'text-purple-600'
    }
  ]

  return (
    <div className="fixed bottom-4 left-4 z-40 space-y-3 max-w-sm">
      {/* Active Users Indicator */}
      <div className="bg-white rounded-lg shadow-lg p-3 border-l-4 border-green-500 animate-slide-in">
        <div className="flex items-center space-x-2">
          <div className="relative">
            <Users size={20} className="text-green-600" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          </div>
          <div className="text-sm">
            <span className="font-semibold text-green-600">{activeUsers} people</span>
            <span className="text-gray-600"> viewing this page</span>
          </div>
        </div>
      </div>

      {/* Recent Bookings */}
      {recentBookings.map((booking, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-lg p-3 border-l-4 border-blue-500 animate-slide-in"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="flex items-start space-x-2">
            <CheckCircle size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
            <p className="text-sm text-gray-700">{booking}</p>
          </div>
        </div>
      ))}

      {/* Trust Indicators - Only show on larger screens */}
      <div className="hidden lg:grid grid-cols-2 gap-2">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-3 text-center hover:shadow-lg transition-shadow"
            >
              <Icon size={24} className={`mx-auto mb-1 ${stat.color}`} />
              <div className="font-bold text-lg text-gray-800">{stat.value}</div>
              <div className="text-xs text-gray-600">{stat.label}</div>
            </div>
          )
        })}
      </div>

      <style jsx>{`
        @keyframes slide-in {
          from {
            transform: translateX(-100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        .animate-slide-in {
          animation: slide-in 0.5s ease-out;
        }
      `}</style>
    </div>
  )
}