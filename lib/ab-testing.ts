/**
 * A/B Testing Framework for Sinqobile Construction
 * 
 * This module provides a simple, cookie-based A/B testing framework
 * that allows testing different variants of components and tracking conversions.
 */

import { cookies } from 'next/headers'

export type VariantId = 'A' | 'B' | 'C' | 'D'

export interface ABTest {
  id: string
  name: string
  description: string
  variants: {
    id: VariantId
    name: string
    weight: number // 0-100, total should equal 100
  }[]
  startDate: Date
  endDate?: Date
  isActive: boolean
}

export interface ABTestResult {
  testId: string
  variantId: VariantId
  isNewUser: boolean
}

// Active A/B tests configuration
export const activeTests: ABTest[] = [
  {
    id: 'hero-cta-test',
    name: 'Hero CTA Button Text',
    description: 'Testing different CTA button text on hero section',
    variants: [
      { id: 'A', name: 'Get Free Quote', weight: 50 },
      { id: 'B', name: 'Start Your Project', weight: 50 }
    ],
    startDate: new Date('2025-01-01'),
    isActive: true
  },
  {
    id: 'testimonial-layout-test',
    name: 'Testimonial Layout',
    description: 'Testing grid vs carousel layout for testimonials',
    variants: [
      { id: 'A', name: 'Grid Layout', weight: 50 },
      { id: 'B', name: 'Carousel Layout', weight: 50 }
    ],
    startDate: new Date('2025-01-01'),
    isActive: true
  },
  {
    id: 'pricing-display-test',
    name: 'Pricing Display',
    description: 'Testing different ways to display pricing information',
    variants: [
      { id: 'A', name: 'Range Display', weight: 33 },
      { id: 'B', name: 'Starting From', weight: 33 },
      { id: 'C', name: 'Custom Quote', weight: 34 }
    ],
    startDate: new Date('2025-01-01'),
    isActive: true
  }
]

/**
 * Get or assign a variant for a specific test
 * Uses cookies to ensure consistent experience for returning users
 */
export async function getTestVariant(testId: string): Promise<ABTestResult> {
  const cookieStore = cookies()
  const cookieName = `ab_test_${testId}`
  const existingVariant = cookieStore.get(cookieName)

  // Find the test configuration
  const test = activeTests.find(t => t.id === testId && t.isActive)
  
  if (!test) {
    // Test not found or inactive, return default variant A
    return {
      testId,
      variantId: 'A',
      isNewUser: false
    }
  }

  // If user already has a variant assigned, return it
  if (existingVariant) {
    return {
      testId,
      variantId: existingVariant.value as VariantId,
      isNewUser: false
    }
  }

  // Assign a new variant based on weights
  const variantId = assignVariant(test.variants)
  
  // Store in cookie (expires in 30 days)
  cookieStore.set(cookieName, variantId, {
    maxAge: 30 * 24 * 60 * 60, // 30 days
    path: '/',
    sameSite: 'lax'
  })

  return {
    testId,
    variantId,
    isNewUser: true
  }
}

/**
 * Assign a variant based on weighted distribution
 */
function assignVariant(variants: ABTest['variants']): VariantId {
  const random = Math.random() * 100
  let cumulative = 0

  for (const variant of variants) {
    cumulative += variant.weight
    if (random <= cumulative) {
      return variant.id
    }
  }

  // Fallback to first variant
  return variants[0].id
}

/**
 * Track a conversion event for A/B testing
 * This should be called when a user completes a desired action
 */
export function trackConversion(testId: string, variantId: VariantId, eventName: string) {
  // In production, this would send data to analytics service
  // For now, we'll use console.log and localStorage for tracking
  
  if (typeof window !== 'undefined') {
    const conversionData = {
      testId,
      variantId,
      eventName,
      timestamp: new Date().toISOString(),
      url: window.location.href
    }

    // Store in localStorage for development
    const conversions = JSON.parse(localStorage.getItem('ab_conversions') || '[]')
    conversions.push(conversionData)
    localStorage.setItem('ab_conversions', JSON.stringify(conversions))

    // Send to analytics (Google Analytics, Mixpanel, etc.)
    if (window.gtag) {
      window.gtag('event', 'ab_test_conversion', {
        test_id: testId,
        variant_id: variantId,
        event_name: eventName
      })
    }

    console.log('A/B Test Conversion:', conversionData)
  }
}

/**
 * Get conversion data for analysis
 * This would typically be done server-side with a proper analytics database
 */
export function getConversionData(): any[] {
  if (typeof window !== 'undefined') {
    return JSON.parse(localStorage.getItem('ab_conversions') || '[]')
  }
  return []
}

/**
 * Calculate conversion rates for each variant
 */
export function calculateConversionRates(testId: string): Record<VariantId, {
  impressions: number
  conversions: number
  rate: number
}> {
  const conversions = getConversionData()
  const testConversions = conversions.filter(c => c.testId === testId)
  
  const results: any = {
    A: { impressions: 0, conversions: 0, rate: 0 },
    B: { impressions: 0, conversions: 0, rate: 0 },
    C: { impressions: 0, conversions: 0, rate: 0 },
    D: { impressions: 0, conversions: 0, rate: 0 }
  }

  // Count conversions by variant
  testConversions.forEach(conversion => {
    const variant = conversion.variantId
    if (results[variant]) {
      results[variant].conversions++
    }
  })

  // Calculate rates (in production, you'd track impressions separately)
  Object.keys(results).forEach(variant => {
    if (results[variant].impressions > 0) {
      results[variant].rate = (results[variant].conversions / results[variant].impressions) * 100
    }
  })

  return results
}

/**
 * Determine the winning variant based on statistical significance
 * This is a simplified version - in production, use proper statistical tests
 */
export function getWinningVariant(testId: string): {
  winner: VariantId | null
  confidence: number
  recommendation: string
} {
  const rates = calculateConversionRates(testId)
  
  let maxRate = 0
  let winner: VariantId | null = null
  
  Object.entries(rates).forEach(([variant, data]) => {
    if (data.rate > maxRate && data.impressions > 100) { // Minimum 100 impressions
      maxRate = data.rate
      winner = variant as VariantId
    }
  })

  // Calculate confidence (simplified)
  const confidence = winner ? Math.min(95, maxRate * 10) : 0

  let recommendation = 'Continue testing - insufficient data'
  if (confidence > 95) {
    recommendation = `Variant ${winner} is the clear winner with ${confidence.toFixed(1)}% confidence`
  } else if (confidence > 80) {
    recommendation = `Variant ${winner} is leading but needs more data`
  }

  return {
    winner,
    confidence,
    recommendation
  }
}

/**
 * Client-side hook for A/B testing
 * Use this in client components
 */
export function useABTest(testId: string): {
  variant: VariantId
  trackConversion: (eventName: string) => void
} {
  // This would be implemented as a React hook in a separate file
  // For now, returning a placeholder
  return {
    variant: 'A',
    trackConversion: (eventName: string) => trackConversion(testId, 'A', eventName)
  }
}

// Type declarations for window.gtag
declare global {
  interface Window {
    gtag?: (
      command: string,
      eventName: string,
      params?: Record<string, any>
    ) => void
  }
}