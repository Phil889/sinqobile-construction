/**
 * Advanced Analytics Tracking for Sinqobile Construction
 * 
 * This module provides comprehensive event tracking, user behavior analysis,
 * and conversion funnel monitoring for the website.
 */

export interface AnalyticsEvent {
  category: string
  action: string
  label?: string
  value?: number
  nonInteraction?: boolean
}

export interface UserBehavior {
  sessionId: string
  userId?: string
  pageViews: PageView[]
  events: TrackedEvent[]
  conversions: Conversion[]
  sessionStart: Date
  sessionEnd?: Date
  deviceType: 'mobile' | 'tablet' | 'desktop'
  referrer: string
  landingPage: string
}

export interface PageView {
  url: string
  title: string
  timestamp: Date
  timeOnPage?: number
  scrollDepth?: number
}

export interface TrackedEvent {
  category: string
  action: string
  label?: string
  value?: number
  timestamp: Date
}

export interface Conversion {
  type: 'contact_form' | 'phone_call' | 'quote_request' | 'calculator_use' | 'video_view'
  value?: number
  timestamp: Date
  source: string
}

export interface ConversionFunnel {
  step: string
  users: number
  dropoffRate: number
}

/**
 * Initialize analytics tracking
 */
export function initializeAnalytics() {
  if (typeof window === 'undefined') return

  // Generate or retrieve session ID
  const sessionId = getOrCreateSessionId()
  
  // Track page view
  trackPageView()
  
  // Set up scroll depth tracking
  setupScrollTracking()
  
  // Set up time on page tracking
  setupTimeTracking()
  
  // Set up click tracking
  setupClickTracking()
  
  // Set up form tracking
  setupFormTracking()
  
  console.log('Advanced Analytics initialized with session:', sessionId)
}

/**
 * Generate or retrieve session ID
 */
function getOrCreateSessionId(): string {
  if (typeof window === 'undefined') return ''
  
  let sessionId = sessionStorage.getItem('analytics_session_id')
  
  if (!sessionId) {
    sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    sessionStorage.setItem('analytics_session_id', sessionId)
    sessionStorage.setItem('session_start', new Date().toISOString())
  }
  
  return sessionId
}

/**
 * Track page view with enhanced data
 */
export function trackPageView(customData?: Partial<PageView>) {
  if (typeof window === 'undefined') return

  const pageView: PageView = {
    url: window.location.href,
    title: document.title,
    timestamp: new Date(),
    ...customData
  }

  // Send to Google Analytics
  if (window.gtag) {
    window.gtag('event', 'page_view', {
      page_title: pageView.title,
      page_location: pageView.url,
      page_path: window.location.pathname
    })
  }

  // Store in session storage for analysis
  const pageViews = JSON.parse(sessionStorage.getItem('page_views') || '[]')
  pageViews.push(pageView)
  sessionStorage.setItem('page_views', JSON.stringify(pageViews))

  console.log('Page view tracked:', pageView)
}

/**
 * Track custom events
 */
export function trackEvent(event: AnalyticsEvent) {
  if (typeof window === 'undefined') return

  const trackedEvent: TrackedEvent = {
    category: event.category,
    action: event.action,
    label: event.label,
    value: event.value,
    timestamp: new Date()
  }

  // Send to Google Analytics
  if (window.gtag) {
    window.gtag('event', event.action, {
      event_category: event.category,
      event_label: event.label,
      value: event.value,
      non_interaction: event.nonInteraction
    })
  }

  // Store locally
  const events = JSON.parse(sessionStorage.getItem('tracked_events') || '[]')
  events.push(trackedEvent)
  sessionStorage.setItem('tracked_events', JSON.stringify(events))

  console.log('Event tracked:', trackedEvent)
}

/**
 * Track conversions
 */
export function trackConversion(conversion: Omit<Conversion, 'timestamp'>) {
  if (typeof window === 'undefined') return

  const fullConversion: Conversion = {
    ...conversion,
    timestamp: new Date()
  }

  // Send to Google Analytics
  if (window.gtag) {
    window.gtag('event', 'conversion', {
      conversion_type: conversion.type,
      conversion_value: conversion.value,
      conversion_source: conversion.source
    })
  }

  // Store locally
  const conversions = JSON.parse(sessionStorage.getItem('conversions') || '[]')
  conversions.push(fullConversion)
  sessionStorage.setItem('conversions', JSON.stringify(conversions))

  console.log('Conversion tracked:', fullConversion)
}

/**
 * Set up scroll depth tracking
 */
function setupScrollTracking() {
  if (typeof window === 'undefined') return

  let maxScroll = 0
  const milestones = [25, 50, 75, 90, 100]
  const tracked = new Set<number>()

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
    const scrolled = (window.scrollY / scrollHeight) * 100

    if (scrolled > maxScroll) {
      maxScroll = scrolled
    }

    milestones.forEach(milestone => {
      if (scrolled >= milestone && !tracked.has(milestone)) {
        tracked.add(milestone)
        trackEvent({
          category: 'Engagement',
          action: 'Scroll Depth',
          label: `${milestone}%`,
          value: milestone,
          nonInteraction: true
        })
      }
    })
  }

  window.addEventListener('scroll', handleScroll, { passive: true })
}

/**
 * Set up time on page tracking
 */
function setupTimeTracking() {
  if (typeof window === 'undefined') return

  const startTime = Date.now()
  const milestones = [10, 30, 60, 120, 300] // seconds

  milestones.forEach(seconds => {
    setTimeout(() => {
      trackEvent({
        category: 'Engagement',
        action: 'Time on Page',
        label: `${seconds}s`,
        value: seconds,
        nonInteraction: true
      })
    }, seconds * 1000)
  })

  // Track time on page when leaving
  window.addEventListener('beforeunload', () => {
    const timeSpent = Math.floor((Date.now() - startTime) / 1000)
    trackEvent({
      category: 'Engagement',
      action: 'Total Time on Page',
      value: timeSpent,
      nonInteraction: true
    })
  })
}

/**
 * Set up click tracking for important elements
 */
function setupClickTracking() {
  if (typeof window === 'undefined') return

  // Track CTA button clicks
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement
    
    // Track button clicks
    if (target.tagName === 'BUTTON' || target.closest('button')) {
      const button = target.tagName === 'BUTTON' ? target : target.closest('button')
      const buttonText = button?.textContent?.trim() || 'Unknown'
      
      trackEvent({
        category: 'CTA',
        action: 'Button Click',
        label: buttonText
      })
    }

    // Track link clicks
    if (target.tagName === 'A' || target.closest('a')) {
      const link = target.tagName === 'A' ? target as HTMLAnchorElement : target.closest('a')
      const href = link?.href || ''
      const text = link?.textContent?.trim() || 'Unknown'
      
      // Check if external link
      const isExternal = href && !href.includes(window.location.hostname)
      
      trackEvent({
        category: isExternal ? 'External Link' : 'Internal Link',
        action: 'Link Click',
        label: text,
        value: isExternal ? 1 : 0
      })
    }

    // Track phone number clicks
    if (target.closest('a[href^="tel:"]')) {
      trackEvent({
        category: 'Conversion',
        action: 'Phone Click',
        label: 'Phone Number'
      })
      
      trackConversion({
        type: 'phone_call',
        source: window.location.pathname
      })
    }

    // Track WhatsApp clicks
    if (target.closest('a[href*="whatsapp"]')) {
      trackEvent({
        category: 'Conversion',
        action: 'WhatsApp Click',
        label: 'WhatsApp Button'
      })
    }
  })
}

/**
 * Set up form tracking
 */
function setupFormTracking() {
  if (typeof window === 'undefined') return

  // Track form submissions
  document.addEventListener('submit', (e) => {
    const form = e.target as HTMLFormElement
    const formName = form.getAttribute('name') || form.id || 'Unknown Form'
    
    trackEvent({
      category: 'Form',
      action: 'Form Submit',
      label: formName
    })

    trackConversion({
      type: 'contact_form',
      source: window.location.pathname
    })
  })

  // Track form field interactions
  document.addEventListener('focus', (e) => {
    const target = e.target as HTMLElement
    if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.tagName === 'SELECT') {
      const fieldName = (target as HTMLInputElement).name || (target as HTMLInputElement).id || 'Unknown Field'
      
      trackEvent({
        category: 'Form',
        action: 'Field Focus',
        label: fieldName,
        nonInteraction: true
      })
    }
  }, true)
}

/**
 * Track video interactions
 */
export function trackVideoInteraction(action: 'play' | 'pause' | 'complete', videoTitle: string) {
  trackEvent({
    category: 'Video',
    action: `Video ${action.charAt(0).toUpperCase() + action.slice(1)}`,
    label: videoTitle
  })

  if (action === 'play') {
    trackConversion({
      type: 'video_view',
      source: window.location.pathname
    })
  }
}

/**
 * Track calculator usage
 */
export function trackCalculatorUsage(step: string, data?: any) {
  trackEvent({
    category: 'Calculator',
    action: step,
    label: JSON.stringify(data)
  })

  if (step === 'Calculate Complete') {
    trackConversion({
      type: 'calculator_use',
      value: data?.estimatedCost,
      source: window.location.pathname
    })
  }
}

/**
 * Get user behavior data for analysis
 */
export function getUserBehaviorData(): UserBehavior | null {
  if (typeof window === 'undefined') return null

  const sessionId = sessionStorage.getItem('analytics_session_id')
  if (!sessionId) return null

  return {
    sessionId,
    pageViews: JSON.parse(sessionStorage.getItem('page_views') || '[]'),
    events: JSON.parse(sessionStorage.getItem('tracked_events') || '[]'),
    conversions: JSON.parse(sessionStorage.getItem('conversions') || '[]'),
    sessionStart: new Date(sessionStorage.getItem('session_start') || Date.now()),
    deviceType: getDeviceType(),
    referrer: document.referrer,
    landingPage: sessionStorage.getItem('landing_page') || window.location.href
  }
}

/**
 * Get device type
 */
function getDeviceType(): 'mobile' | 'tablet' | 'desktop' {
  if (typeof window === 'undefined') return 'desktop'
  
  const width = window.innerWidth
  
  if (width < 768) return 'mobile'
  if (width < 1024) return 'tablet'
  return 'desktop'
}

/**
 * Analyze conversion funnel
 */
export function analyzeConversionFunnel(): ConversionFunnel[] {
  if (typeof window === 'undefined') return []

  const pageViews = JSON.parse(sessionStorage.getItem('page_views') || '[]')
  const events = JSON.parse(sessionStorage.getItem('tracked_events') || '[]')
  const conversions = JSON.parse(sessionStorage.getItem('conversions') || '[]')

  const funnel: ConversionFunnel[] = [
    {
      step: 'Landing',
      users: pageViews.length > 0 ? 1 : 0,
      dropoffRate: 0
    },
    {
      step: 'Engagement (30s+)',
      users: events.filter((e: TrackedEvent) => e.category === 'Engagement' && e.action === 'Time on Page' && (e.value || 0) >= 30).length > 0 ? 1 : 0,
      dropoffRate: 0
    },
    {
      step: 'Calculator Use',
      users: conversions.filter((c: Conversion) => c.type === 'calculator_use').length > 0 ? 1 : 0,
      dropoffRate: 0
    },
    {
      step: 'Contact',
      users: conversions.filter((c: Conversion) => c.type === 'contact_form' || c.type === 'phone_call').length > 0 ? 1 : 0,
      dropoffRate: 0
    }
  ]

  // Calculate dropoff rates
  for (let i = 1; i < funnel.length; i++) {
    const previous = funnel[i - 1].users
    const current = funnel[i].users
    funnel[i].dropoffRate = previous > 0 ? ((previous - current) / previous) * 100 : 0
  }

  return funnel
}

/**
 * Export analytics data for reporting
 */
export function exportAnalyticsData(): string {
  const data = getUserBehaviorData()
  return JSON.stringify(data, null, 2)
}

// Type declarations
declare global {
  interface Window {
    gtag?: (
      command: string,
      eventName: string,
      params?: Record<string, any>
    ) => void
  }
}