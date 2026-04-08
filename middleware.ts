import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { i18n } from './i18n.config'

function getLocale(request: NextRequest): string {
  // Simple locale detection - you can enhance this
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

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  // Redirect if there is no locale — use 308 permanent redirect
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request)
    // Build path without trailing slash to avoid double redirect (/ → /en/ → /en)
    const suffix = pathname === '/' ? '' : pathname
    const url = new URL(`/${locale}${suffix}`, request.url)
    return NextResponse.redirect(url, 308)
  }
}

export const config = {
  // Matcher ignoring `/_next/`, `/api/`, and `/images/`
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|images|google.*\\.html|robots\\.txt|sitemap\\.xml|llms\\.txt|971056355487d7c44a6d377f963d4b61\\.txt|og-image\\.jpg|logo\\.svg|site\\.webmanifest|apple-touch-icon\\.png|favicon-.*\\.png|android-chrome-.*\\.png).*)'],
}