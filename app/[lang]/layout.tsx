import React from 'react'
import type { Metadata, Viewport } from 'next'
import { Montserrat, Roboto } from 'next/font/google'
import '../globals.css'
import Header from '@/components/header'
import Footer from '@/components/footer'
import SchemaMarkup from '@/components/schema-markup'
import Analytics from '@/components/analytics'
import LiveChatWidget from '@/components/live-chat-widget'
import { MobileCTABar } from '@/components/mobile-cta-bar'
import { WebVitals } from '@/components/web-vitals'
import { i18n, type Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionaries'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-montserrat',
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
})

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-roboto',
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
})

const LOCALE_MAP: Record<Locale, string> = {
  en: 'en_ZA',
  af: 'af_ZA',
  zu: 'zu_ZA',
  st: 'st_ZA',
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FFD600' },
    { media: '(prefers-color-scheme: dark)', color: '#1a1a1a' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export async function generateMetadata({
  params,
}: {
  params: { lang: Locale }
}): Promise<Metadata> {
  const dict = await getDictionary(params.lang)

  return {
    metadataBase: new URL('https://www.sinqobileconstruction.co.za'),
    title: dict.meta.title,
    description: dict.meta.description,
    keywords: dict.meta.keywords,
    authors: [
      { name: 'Dingwayo Reason Ndlovu', url: 'https://www.sinqobileconstruction.co.za/en/about' },
    ],
    creator: 'Sinqobile Construction',
    publisher: 'Sinqobile Construction',
    applicationName: 'Sinqobile Construction',
    category: 'Construction Services',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    icons: {
      icon: [
        { url: '/favicon.ico', sizes: '32x32' },
        { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
        { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      ],
      apple: [
        { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
      ],
      other: [
        { rel: 'manifest', url: '/site.webmanifest' },
      ],
    },
    alternates: {
      canonical: `https://www.sinqobileconstruction.co.za/${params.lang}`,
      languages: {
        'en': 'https://www.sinqobileconstruction.co.za/en',
        'af': 'https://www.sinqobileconstruction.co.za/af',
        'zu': 'https://www.sinqobileconstruction.co.za/zu',
        'st': 'https://www.sinqobileconstruction.co.za/st',
        'x-default': 'https://www.sinqobileconstruction.co.za/en',
      },
      types: {
        'application/rss+xml': [
          { url: '/api/rss', title: 'Sinqobile Construction Blog RSS Feed' },
        ],
      },
    },
    openGraph: {
      type: 'website',
      locale: LOCALE_MAP[params.lang],
      alternateLocale: i18n.locales
        .filter((l) => l !== params.lang)
        .map((l) => LOCALE_MAP[l]),
      url: `/${params.lang}`,
      siteName: 'Sinqobile Construction',
      title: dict.meta.title,
      description: dict.meta.description,
      images: [{
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        type: 'image/jpeg',
        alt: 'Sinqobile Construction - NHBRC Registered Builders in Johannesburg, Gauteng',
      }],
    },
    twitter: {
      card: 'summary_large_image',
      title: dict.meta.title,
      description: dict.meta.description,
      images: ['/og-image.jpg'],
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'googleb9c0f3d14f1f0f09',
    },
    other: {
      'msvalidate.01': '',
      'apple-mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-status-bar-style': 'black-translucent',
      'apple-mobile-web-app-title': 'Sinqobile',
      'mobile-web-app-capable': 'yes',
    },
  }
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: Locale }
}) {
  const dict = await getDictionary(params.lang)

  return (
    <html lang={params.lang} dir="ltr">
      <head>
        {/* Resource hints — critical third-party domains */}
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//embed.tawk.to" />
        <link rel="dns-prefetch" href="//images.unsplash.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.google-analytics.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Structured data — composite business entity */}
        <SchemaMarkup type="organization" lang={params.lang} />
        <SchemaMarkup type="localBusiness" lang={params.lang} />
        <SchemaMarkup type="website" lang={params.lang} />

        <Analytics />
      </head>
      <body className={`${roboto.variable} ${montserrat.variable} bg-background text-secondary`}>
        <WebVitals />
        <Header dict={dict} lang={params.lang} />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer dict={dict} lang={params.lang} />
        <LiveChatWidget />
        <MobileCTABar dict={dict} />
      </body>
    </html>
  )
}
