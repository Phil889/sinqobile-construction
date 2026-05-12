'use client'

import React from 'react'
import { usePathname } from 'next/navigation'

const T = {
  en: { heading: 'Loading...', body: 'Please wait while we load the content' },
  af: { heading: 'Laai tans...', body: 'Wag asseblief terwyl ons die inhoud laai' },
  zu: { heading: 'Iyalayisha...', body: 'Sicela ulinde ngenkathi silayisha okuqukethwe' },
  st: { heading: 'E a laela...', body: 'Ke kopa u ema ha re laela litaba' },
} as const

type Lang = keyof typeof T

export default function Loading() {
  const pathname = usePathname()
  const segment = pathname?.split('/')[1] as Lang
  const t = T[segment] ?? T.en

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary mb-4"></div>
        <h2 className="text-xl font-semibold text-secondary">{t.heading}</h2>
        <p className="text-gray-500 mt-2">{t.body}</p>
      </div>
    </div>
  )
}
