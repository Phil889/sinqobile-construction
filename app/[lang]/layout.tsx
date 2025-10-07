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
  
  return {
    title: dict.meta.title,
    description: dict.meta.description,
    keywords: dict.meta.keywords,
    alternates: {
      canonical: `https://mdbuilders.co.za/${params.lang}`,
      languages: {
        'en': 'https://mdbuilders.co.za/en',
        'af': 'https://mdbuilders.co.za/af',
        'zu': 'https://mdbuilders.co.za/zu',
        'st': 'https://mdbuilders.co.za/st',
      }
    },
    openGraph: {
      type: 'website',
      locale: params.lang,
      url: `https://mdbuilders.co.za/${params.lang}`,
      siteName: 'MD Builders',
      title: 'MD Builders - Professional Construction Services Gauteng',
      description: 'Expert construction, renovation, and building services across Gauteng. 15+ years experience. R400 call-out fee. Call 071 933 4063',
      images: [{
        url: 'https://mdbuilders.co.za/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MD Builders - Professional Construction Services'
      }]
    },
    twitter: {
      card: 'summary_large_image',
      title: 'MD Builders - Professional Construction Services Gauteng',
      description: 'Expert construction, renovation, and building services across Gauteng',
      images: ['https://mdbuilders.co.za/og-image.jpg'],
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
        <Analytics />
      </head>
      <body className={`${inter.className} bg-background text-secondary`}>
        <Header dict={dict} lang={params.lang} />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer dict={dict} lang={params.lang} />
        <WhatsAppFloat />
        <LiveChatWidget />
        <MobileCTABar />
      </body>
    </html>
  )
}