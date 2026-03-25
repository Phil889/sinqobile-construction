import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import Header from '@/components/header'
import Footer from '@/components/footer'
import SchemaMarkup from '@/components/schema-markup'
import Analytics from '@/components/analytics'
import WhatsAppFloat from '@/components/whatsapp-float'
import LiveChatWidget from '@/components/live-chat-widget'
import { MobileCTABar } from '@/components/mobile-cta-bar'
import { i18n, type Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionaries'

const inter = Inter({ subsets: ['latin'] })

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

export async function generateMetadata({
  params,
}: {
  params: { lang: Locale }
}): Promise<Metadata> {
  const dict = await getDictionary(params.lang)
  
  // Enhanced SEO-optimized description with location keywords and CTA
  const enhancedDescription = params.lang === 'en'
    ? 'Professional construction services in Gauteng: Building, renovations, plastering, painting, paving, tiling & plumbing. 15+ years experience. R400 call-out fee. Call +27 82 868 8396 for free quote!'
    : dict.meta.description
  
  return {
    title: dict.meta.title,
    description: enhancedDescription,
    keywords: dict.meta.keywords,
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
      }
    },
    openGraph: {
      type: 'website',
      locale: params.lang,
      url: `https://www.sinqobileconstruction.co.za/${params.lang}`,
      siteName: 'Sinqobile Construction',
      title: 'Sinqobile Construction - Professional Construction Services Gauteng | 15+ Years Experience',
      description: 'Expert construction, renovation, plastering, painting, paving, tiling & plumbing services across Gauteng. 15+ years experience, 500+ projects completed. R400 call-out fee. Call +27 82 868 8396 for free quote!',
      images: [{
        url: 'https://www.sinqobileconstruction.co.za/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Sinqobile Construction - Professional Construction Services in Johannesburg, Pretoria, Sandton, Gauteng'
      }]
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Sinqobile Construction - Professional Construction Services Gauteng | 15+ Years Experience',
      description: 'Expert construction, renovation & building services across Gauteng. 500+ projects completed. Call +27 82 868 8396 for free quote!',
      images: ['https://www.sinqobileconstruction.co.za/og-image.jpg'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'googleb9c0f3d14f1f0f09',
    }
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
    <html lang={params.lang}>
      <head>
        <SchemaMarkup type="organization" lang={params.lang} />
        <SchemaMarkup type="localBusiness" lang={params.lang} />
        <SchemaMarkup type="website" lang={params.lang} />
        <Analytics />
      </head>
      <body className={`${inter.className} bg-background text-secondary`}>
        <Header dict={dict} lang={params.lang} />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer dict={dict} lang={params.lang} />
        <WhatsAppFloat dict={dict} />
        <LiveChatWidget />
        <MobileCTABar dict={dict} />
      </body>
    </html>
  )
}