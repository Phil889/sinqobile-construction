'use client'

import React, { useEffect } from 'react'
import { usePathname } from 'next/navigation'

const T = {
  en: { heading: 'Something went wrong!', body: 'We encountered an error while loading this page. Please try again.', retry: 'Try Again', home: 'Go Home' },
  af: { heading: 'Iets het verkeerd gegaan!', body: 'Ons het \'n fout ondervind tydens die laai van hierdie bladsy. Probeer asseblief weer.', retry: 'Probeer Weer', home: 'Gaan Tuis' },
  zu: { heading: 'Kukhona okubi okwenzekile!', body: 'Sike sabhekana nephutha ngenkathi silayisha leli khasi. Sicela uzame futhi.', retry: 'Zama Futhi', home: 'Buyela Ekhaya' },
  st: { heading: 'Ho etsahetse phoso!', body: 'Re kopane le phoso ha re ntse re laela leqephe lena. Ke kopa u leke hape.', retry: 'Leka Hape', home: 'Ea Hae' },
} as const

type Lang = keyof typeof T

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const pathname = usePathname()
  const segment = pathname?.split('/')[1] as Lang
  const t = T[segment] ?? T.en

  useEffect(() => {
    console.error('Page error:', error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        <div className="mb-4">
          <svg
            className="mx-auto h-12 w-12 text-red-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-secondary mb-2">
          {t.heading}
        </h2>
        <p className="text-gray-600 mb-6">
          {t.body}
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={reset}
            className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-700 transition-colors"
          >
            {t.retry}
          </button>
          <a
            href="/"
            className="bg-gray-200 text-secondary px-6 py-3 rounded-lg font-medium hover:bg-gray-300 transition-colors"
          >
            {t.home}
          </a>
        </div>
      </div>
    </div>
  )
}