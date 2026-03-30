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

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request)
    return NextResponse.redirect(
      new URL(
        `/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`,
        request.url
      )
    )
  }
}

export const config = {
  // Matcher ignoring `/_next/`, `/api/`, and `/images/`
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|images|google.*\\.html|robots\\.txt|sitemap\\.xml|llms\\.txt|971056355487d7c44a6d377f963d4b61\\.txt).*)'],
}