/**
 * Performance Monitoring for Sinqobile Construction
 * 
 * This module tracks Core Web Vitals, page load times, and other
 * performance metrics to ensure optimal user experience.
 */

export interface PerformanceMetrics {
  // Core Web Vitals
  lcp?: number // Largest Contentful Paint
  fid?: number // First Input Delay
  cls?: number // Cumulative Layout Shift
  fcp?: number // First Contentful Paint
  ttfb?: number // Time to First Byte
  
  // Additional metrics
  domContentLoaded?: number
  windowLoad?: number
  resourceLoadTime?: number
  
  // Page-specific
  pageUrl: string
  timestamp: Date
  deviceType: 'mobile' | 'tablet' | 'desktop'
  connection?: string
}

export interface PerformanceReport {
  averageLCP: number
  averageFID: number
  averageCLS: number
  averageTTFB: number
  slowPages: string[]
  recommendations: string[]
}

/**
 * Initialize performance monitoring
 */
export function initializePerformanceMonitoring() {
  if (typeof window === 'undefined') return

  // Monitor Core Web Vitals
  monitorCoreWebVitals()
  
  // Monitor resource loading
  monitorResourceLoading()
  
  // Monitor long tasks
  monitorLongTasks()
  
  // Report on page unload
  setupPerformanceReporting()
  
  console.log('Performance monitoring initialized')
}

/**
 * Monitor Core Web Vitals using the web-vitals library approach
 */
function monitorCoreWebVitals() {
  if (typeof window === 'undefined') return

  // Largest Contentful Paint (LCP)
  const lcpObserver = new PerformanceObserver((list) => {
    const entries = list.getEntries()
    const lastEntry = entries[entries.length - 1] as any
    
    const lcp = lastEntry.renderTime || lastEntry.loadTime
    reportMetric('LCP', lcp)
    
    // Good: < 2.5s, Needs Improvement: 2.5s - 4s, Poor: > 4s
    if (lcp > 4000) {
      console.warn('Poor LCP detected:', lcp, 'ms')
    }
  })
  
  try {
    lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true })
  } catch (e) {
    console.error('LCP observation failed:', e)
  }

  // First Input Delay (FID)
  const fidObserver = new PerformanceObserver((list) => {
    const entries = list.getEntries()
    entries.forEach((entry: any) => {
      const fid = entry.processingStart - entry.startTime
      reportMetric('FID', fid)
      
      // Good: < 100ms, Needs Improvement: 100ms - 300ms, Poor: > 300ms
      if (fid > 300) {
        console.warn('Poor FID detected:', fid, 'ms')
      }
    })
  })
  
  try {
    fidObserver.observe({ type: 'first-input', buffered: true })
  } catch (e) {
    console.error('FID observation failed:', e)
  }

  // Cumulative Layout Shift (CLS)
  let clsValue = 0
  const clsObserver = new PerformanceObserver((list) => {
    const entries = list.getEntries()
    entries.forEach((entry: any) => {
      if (!entry.hadRecentInput) {
        clsValue += entry.value
      }
    })
    
    reportMetric('CLS', clsValue)
    
    // Good: < 0.1, Needs Improvement: 0.1 - 0.25, Poor: > 0.25
    if (clsValue > 0.25) {
      console.warn('Poor CLS detected:', clsValue)
    }
  })
  
  try {
    clsObserver.observe({ type: 'layout-shift', buffered: true })
  } catch (e) {
    console.error('CLS observation failed:', e)
  }

  // First Contentful Paint (FCP)
  const fcpObserver = new PerformanceObserver((list) => {
    const entries = list.getEntries()
    entries.forEach((entry: any) => {
      reportMetric('FCP', entry.startTime)
      
      // Good: < 1.8s, Needs Improvement: 1.8s - 3s, Poor: > 3s
      if (entry.startTime > 3000) {
        console.warn('Poor FCP detected:', entry.startTime, 'ms')
      }
    })
  })
  
  try {
    fcpObserver.observe({ type: 'paint', buffered: true })
  } catch (e) {
    console.error('FCP observation failed:', e)
  }

  // Time to First Byte (TTFB)
  const navigationTiming = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
  if (navigationTiming) {
    const ttfb = navigationTiming.responseStart - navigationTiming.requestStart
    reportMetric('TTFB', ttfb)
    
    // Good: < 800ms, Needs Improvement: 800ms - 1800ms, Poor: > 1800ms
    if (ttfb > 1800) {
      console.warn('Poor TTFB detected:', ttfb, 'ms')
    }
  }
}

/**
 * Monitor resource loading times
 */
function monitorResourceLoading() {
  if (typeof window === 'undefined') return

  window.addEventListener('load', () => {
    const resources = performance.getEntriesByType('resource') as PerformanceResourceTiming[]
    
    // Analyze slow resources
    const slowResources = resources.filter(resource => resource.duration > 1000)
    
    if (slowResources.length > 0) {
      console.warn('Slow resources detected:', slowResources.length)
      slowResources.forEach(resource => {
        console.warn(`Slow resource: ${resource.name} (${resource.duration.toFixed(2)}ms)`)
      })
    }

    // Calculate total resource load time
    const totalResourceTime = resources.reduce((sum, resource) => sum + resource.duration, 0)
    reportMetric('Total Resource Load Time', totalResourceTime)

    // Analyze resource types
    const resourcesByType = resources.reduce((acc: any, resource) => {
      const type = resource.initiatorType || 'other'
      if (!acc[type]) {
        acc[type] = { count: 0, totalTime: 0 }
      }
      acc[type].count++
      acc[type].totalTime += resource.duration
      return acc
    }, {})

    console.log('Resources by type:', resourcesByType)
  })
}

/**
 * Monitor long tasks that block the main thread
 */
function monitorLongTasks() {
  if (typeof window === 'undefined') return

  try {
    const longTaskObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      entries.forEach((entry: any) => {
        console.warn('Long task detected:', {
          duration: entry.duration,
          startTime: entry.startTime,
          name: entry.name
        })
        
        reportMetric('Long Task', entry.duration)
      })
    })
    
    longTaskObserver.observe({ type: 'longtask', buffered: true })
  } catch (e) {
    // Long task API not supported
    console.log('Long task monitoring not supported')
  }
}

/**
 * Report a performance metric
 */
function reportMetric(name: string, value: number) {
  if (typeof window === 'undefined') return

  const metric = {
    name,
    value,
    timestamp: Date.now(),
    url: window.location.href,
    deviceType: getDeviceType(),
    connection: getConnectionType()
  }

  // Store locally
  const metrics = JSON.parse(localStorage.getItem('performance_metrics') || '[]')
  metrics.push(metric)
  
  // Keep only last 100 metrics
  if (metrics.length > 100) {
    metrics.shift()
  }
  
  localStorage.setItem('performance_metrics', JSON.stringify(metrics))

  // Send to analytics
  if (window.gtag) {
    window.gtag('event', 'performance_metric', {
      metric_name: name,
      metric_value: value,
      page_path: window.location.pathname
    })
  }
}

/**
 * Set up performance reporting on page unload
 */
function setupPerformanceReporting() {
  if (typeof window === 'undefined') return

  window.addEventListener('beforeunload', () => {
    const metrics = collectAllMetrics()
    
    // Send beacon with performance data
    if (navigator.sendBeacon) {
      const blob = new Blob([JSON.stringify(metrics)], { type: 'application/json' })
      navigator.sendBeacon('/api/performance', blob)
    }
  })
}

/**
 * Collect all performance metrics
 */
function collectAllMetrics(): PerformanceMetrics {
  if (typeof window === 'undefined') {
    return {
      pageUrl: '',
      timestamp: new Date(),
      deviceType: 'desktop'
    }
  }

  const navigationTiming = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
  
  return {
    pageUrl: window.location.href,
    timestamp: new Date(),
    deviceType: getDeviceType(),
    connection: getConnectionType(),
    domContentLoaded: navigationTiming?.domContentLoadedEventEnd - navigationTiming?.domContentLoadedEventStart,
    windowLoad: navigationTiming?.loadEventEnd - navigationTiming?.loadEventStart,
    ttfb: navigationTiming?.responseStart - navigationTiming?.requestStart
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
 * Get connection type
 */
function getConnectionType(): string {
  if (typeof navigator === 'undefined') return 'unknown'
  
  const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection
  
  return connection?.effectiveType || 'unknown'
}

/**
 * Generate performance report
 */
export function generatePerformanceReport(): PerformanceReport {
  if (typeof window === 'undefined') {
    return {
      averageLCP: 0,
      averageFID: 0,
      averageCLS: 0,
      averageTTFB: 0,
      slowPages: [],
      recommendations: []
    }
  }

  const metrics = JSON.parse(localStorage.getItem('performance_metrics') || '[]')
  
  // Calculate averages
  const lcpMetrics = metrics.filter((m: any) => m.name === 'LCP')
  const fidMetrics = metrics.filter((m: any) => m.name === 'FID')
  const clsMetrics = metrics.filter((m: any) => m.name === 'CLS')
  const ttfbMetrics = metrics.filter((m: any) => m.name === 'TTFB')
  
  const averageLCP = lcpMetrics.length > 0 
    ? lcpMetrics.reduce((sum: number, m: any) => sum + m.value, 0) / lcpMetrics.length 
    : 0
  
  const averageFID = fidMetrics.length > 0 
    ? fidMetrics.reduce((sum: number, m: any) => sum + m.value, 0) / fidMetrics.length 
    : 0
  
  const averageCLS = clsMetrics.length > 0 
    ? clsMetrics.reduce((sum: number, m: any) => sum + m.value, 0) / clsMetrics.length 
    : 0
  
  const averageTTFB = ttfbMetrics.length > 0 
    ? ttfbMetrics.reduce((sum: number, m: any) => sum + m.value, 0) / ttfbMetrics.length 
    : 0

  // Identify slow pages
  const pageMetrics = metrics.reduce((acc: any, m: any) => {
    if (!acc[m.url]) {
      acc[m.url] = []
    }
    acc[m.url].push(m)
    return acc
  }, {})

  const slowPages = Object.entries(pageMetrics)
    .filter(([url, metrics]: [string, any]) => {
      const avgLCP = metrics.filter((m: any) => m.name === 'LCP')
        .reduce((sum: number, m: any) => sum + m.value, 0) / metrics.length
      return avgLCP > 2500
    })
    .map(([url]) => url)

  // Generate recommendations
  const recommendations: string[] = []
  
  if (averageLCP > 2500) {
    recommendations.push('Optimize Largest Contentful Paint: Consider lazy loading images, optimizing server response time, or using a CDN')
  }
  
  if (averageFID > 100) {
    recommendations.push('Reduce First Input Delay: Break up long JavaScript tasks, use web workers, or defer non-critical JavaScript')
  }
  
  if (averageCLS > 0.1) {
    recommendations.push('Improve Cumulative Layout Shift: Add size attributes to images and videos, avoid inserting content above existing content')
  }
  
  if (averageTTFB > 800) {
    recommendations.push('Optimize Time to First Byte: Improve server response time, use caching, or upgrade hosting')
  }

  return {
    averageLCP,
    averageFID,
    averageCLS,
    averageTTFB,
    slowPages,
    recommendations
  }
}

/**
 * Get performance score (0-100)
 */
export function getPerformanceScore(): number {
  const report = generatePerformanceReport()
  
  let score = 100
  
  // Deduct points for poor metrics
  if (report.averageLCP > 4000) score -= 30
  else if (report.averageLCP > 2500) score -= 15
  
  if (report.averageFID > 300) score -= 20
  else if (report.averageFID > 100) score -= 10
  
  if (report.averageCLS > 0.25) score -= 20
  else if (report.averageCLS > 0.1) score -= 10
  
  if (report.averageTTFB > 1800) score -= 20
  else if (report.averageTTFB > 800) score -= 10
  
  return Math.max(0, score)
}

/**
 * Export performance data
 */
export function exportPerformanceData(): string {
  if (typeof window === 'undefined') return '[]'
  
  const metrics = localStorage.getItem('performance_metrics') || '[]'
  return metrics
}

/**
 * Clear performance data
 */
export function clearPerformanceData() {
  if (typeof window === 'undefined') return
  
  localStorage.removeItem('performance_metrics')
  console.log('Performance data cleared')
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