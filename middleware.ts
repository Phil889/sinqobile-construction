import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { i18n } from './i18n.config'

function getLocale(request: NextRequest): string {
  const acceptLanguage = request.headers.get('accept-language')

  if (acceptLanguage) {
    for (const locale of i18n.locales) {
      if (acceptLanguage.includes(locale)) {
        return locale
      }
    }
  }

  return i18n.defaultLocale
}

function detectLocaleFromPath(pathname: string): string {
  for (const locale of i18n.locales) {
    if (pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)) {
      return locale
    }
  }
  return i18n.defaultLocale
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // 1. Block indexing of Next.js JS bundles (allow images/static media)
  if (pathname.startsWith('/_next/') && !pathname.includes('/image') && !pathname.includes('/static/media')) {
    const response = NextResponse.next()
    response.headers.set('X-Robots-Tag', 'noindex')
    return response
  }

  // 2. Locale-prefix redirect for unprefixed paths
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  if (pathnameIsMissingLocale) {
    const locale = getLocale(request)
    const suffix = pathname === '/' ? '' : pathname
    const url = new URL(`/${locale}${suffix}`, request.url)
    return NextResponse.redirect(url, 308)
  }

  // 3. Set locale headers for prefixed paths (Content-Language signal for SEO + downstream consumption)
  const locale = detectLocaleFromPath(pathname)
  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('x-locale', locale)
  requestHeaders.set('x-pathname', pathname)

  const response = NextResponse.next({ request: { headers: requestHeaders } })
  response.headers.set('x-locale', locale)
  response.headers.set('Content-Language', locale)
  return response
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|images|google.*\\.html|robots\\.txt|sitemap\\.xml|llms\\.txt|llms-full\\.txt|971056355487d7c44a6d377f963d4b61\\.txt|12e18892ddc145aeb98626c0562a8449\\.txt|og-image\\.jpg|logo\\.svg|logo\\.png|site\\.webmanifest|apple-touch-icon\\.png|favicon-.*\\.png|android-chrome-.*\\.png).*)',
    '/_next/:path*',
  ],
}
