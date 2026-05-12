import React from 'react'
import type { Metadata } from 'next'
import { getDictionary } from '@/lib/dictionaries'
import { Locale } from '@/i18n.config'
import { getServiceBySlug, enhancedServices } from '@/lib/enhanced-services-data'
import { getProjectsByCategory } from '@/lib/all-projects-data'
import { getServiceContent, relatedServicesMap } from '@/lib/service-content-data'
import { getReviews } from '@/lib/reviews-data'
import ServiceSchema from '@/components/service-schema'
import SchemaMarkup from '@/components/schema-markup'
import { ExpertCard } from '@/components/expert-card'
import { StrategyCTA } from '@/components/strategy-cta'
import { ReviewWall } from '@/components/review-wall'
import Breadcrumb from '@/components/breadcrumb'
import { CheckCircle, Phone, ArrowLeft, MapPin, Calendar } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

// SEO-optimized titles, descriptions, and H1s per service (v2 workflow research-driven)
const serviceSEO: Record<string, { title: string; description: string; h1?: string }> = {
  'building': {
    title: 'Building Contractors Johannesburg | Home Builders Gauteng',
    description: 'NHBRC registered building contractors in Johannesburg. New homes, extensions & structural work across Gauteng. 15+ years, 500+ projects. Free quotes — +27 82 868 8396',
    h1: 'Building Contractors in Johannesburg',
  },
  'concrete': {
    title: 'Concrete Contractors Johannesburg | Foundations & Slabs Gauteng',
    description: 'NHBRC registered concrete contractors in Johannesburg. Foundations, slabs, driveways & reinforced concrete structures across Gauteng. 15+ years, 500+ projects, 4.9★. Free quotes — +27 82 868 8396',
    h1: 'Concrete Contractors in Johannesburg',
  },
  'paving': {
    title: 'Paving Contractors Johannesburg | Driveway Paving Gauteng',
    description: 'Professional paving contractors in Johannesburg. Driveways, walkways & patios across Gauteng. 15+ years experience, 4.9★ rated. Free quotes — +27 82 868 8396',
    h1: 'Paving Contractors Johannesburg',
  },
  'plumbing': {
    title: 'Plumbing Services Johannesburg | Emergency Plumber Gauteng',
    description: 'Professional plumber in Johannesburg — geyser installation, drain cleaning, burst pipe repairs & 24/7 emergency plumbing. NHBRC registered, 15+ years, 4.9★. Free quotes — +27 82 868 8396',
    h1: 'Professional Plumber in Johannesburg',
  },
  'waterproofing': {
    title: 'Waterproofing Johannesburg | Damp Proofing Contractors Gauteng',
    description: 'Professional waterproofing & damp proofing in Johannesburg. Roof, basement, bathroom & rising damp solutions. NHBRC registered, 15+ years, 4.9★. Free quotes — +27 82 868 8396',
    h1: 'Waterproofing Contractors in Johannesburg',
  },
  'renovation': {
    title: 'Home Renovation Johannesburg | Renovation Contractors Gauteng',
    description: 'Home renovation contractors in Johannesburg. Kitchen, bathroom & whole-house renovations. NHBRC registered, 15+ years, 4.9★ rated. Free quotes — +27 82 868 8396',
    h1: 'Home Renovation Contractors in Johannesburg',
  },
  'roofing': {
    title: 'Roofing Contractors Johannesburg | Roof Repairs Gauteng',
    description: 'Expert roofing contractors in Johannesburg — roof repairs, installation, replacement & painting. NHBRC registered, 15+ years, 4.9★ rated. Free quotes — +27 82 868 8396',
    h1: 'Roofing Contractors in Johannesburg',
  },
  'painting': {
    title: 'Painting Contractors Johannesburg | House Painters Gauteng',
    description: 'Professional interior & exterior painting contractors in Johannesburg. Residential & commercial house painters across Gauteng. NHBRC registered, 15+ years, 4.9★. Free quotes — +27 82 868 8396',
    h1: 'Painting Contractors in Johannesburg',
  },
  'plastering': {
    title: 'Plastering Services Johannesburg | Skimming Contractors Gauteng',
    description: 'Professional plastering & skimming contractors in Johannesburg. Wall plastering, ceiling plastering, skim coating & plaster repairs across Gauteng. NHBRC registered, 15+ years, 4.9★. Free quotes — +27 82 868 8396',
    h1: 'Plastering & Skimming Contractors in Johannesburg',
  },
  'tiling': {
    title: 'Tiling Contractors Johannesburg | Floor & Wall Tiler Gauteng',
    description: 'Professional tiling contractors in Johannesburg — floor, wall, bathroom & kitchen tiling. NHBRC registered, 15+ years, 500+ projects, 4.9★. From R150/m². Free quotes — +27 82 868 8396',
    h1: 'Tiling Contractors in Johannesburg',
  },
  'extensions': {
    title: 'Home Extensions Johannesburg | Room Additions & Second Storey Builders Gauteng',
    description: 'NHBRC registered home extension builders in Johannesburg. Room additions, second storey extensions, granny flats & garage conversions across Gauteng. 15+ years, 500+ projects, 4.9★. Free quotes — +27 82 868 8396',
    h1: 'Home Extension Builders in Johannesburg',
  },
  'fencing': {
    title: 'Fencing Contractors Johannesburg | Security Fencing Gauteng',
    description: 'Professional fencing installation in Johannesburg. Security fencing, boundary walls & palisade fencing across Gauteng. NHBRC registered. Free quotes — +27 82 868 8396',
    h1: 'Fencing Contractors in Johannesburg',
  },
  'electrical': {
    title: 'Electrician Johannesburg | Electrical Contractors Gauteng',
    description: 'Licensed electrician in Johannesburg. Electrical installations, repairs & compliance certificates across Gauteng. NHBRC registered. Free quotes — +27 82 868 8396',
    h1: 'Licensed Electrician in Johannesburg',
  },
  'flooring': {
    title: 'Flooring Contractors Johannesburg | Floor Installation Gauteng',
    description: 'Professional flooring installation in Johannesburg. Laminate, vinyl, wooden & tile flooring across Gauteng. NHBRC registered. Free quotes — +27 82 868 8396',
    h1: 'Flooring Contractors in Johannesburg',
  },
  'landscaping': {
    title: 'Landscaping Services Johannesburg | Garden Design Gauteng',
    description: 'Professional landscaping services in Johannesburg. Garden design, irrigation & outdoor living spaces across Gauteng. NHBRC registered. Free quotes — +27 82 868 8396',
    h1: 'Landscaping Services in Johannesburg',
  },
  'brickwork': {
    title: 'Bricklayer Johannesburg | Brickwork & Masonry Contractors Gauteng',
    description: 'Expert brickwork & bricklaying in Johannesburg. Boundary walls, face brick, retaining walls & masonry across Gauteng. NHBRC registered. Free quotes — +27 82 868 8396',
    h1: 'Brickwork & Masonry Contractors in Johannesburg',
  },
  'maintenance': {
    title: 'Property Maintenance Johannesburg | Building Maintenance Gauteng',
    description: 'Comprehensive property maintenance services in Johannesburg. Residential & commercial maintenance across Gauteng. NHBRC registered. Free quotes — +27 82 868 8396',
    h1: 'Property Maintenance Services in Johannesburg',
  },
  'repairs': {
    title: 'Home Repairs Johannesburg | Emergency Repair Services Gauteng',
    description: 'Fast home repair services in Johannesburg. Emergency repairs, structural fixes & general maintenance across Gauteng. NHBRC registered. 24/7 available — +27 82 868 8396',
    h1: 'Home Repair Services in Johannesburg',
  },
  'installation': {
    title: 'Installation Services Johannesburg | Professional Installations Gauteng',
    description: 'Professional installation services in Johannesburg. Doors, windows, ceilings, geysers & kitchen installations across Gauteng. NHBRC registered. Free quotes — +27 82 868 8396',
    h1: 'Professional Installation Services in Johannesburg',
  },
  'ceiling': {
    title: 'Ceiling Repairs Johannesburg | Ceiling Installation Gauteng',
    description: 'Professional ceiling repairs & installation in Johannesburg. Rhinoboard, bulkhead & plaster ceilings across Gauteng. NHBRC registered, 4.9★. Free quotes — +27 82 868 8396',
    h1: 'Ceiling Repairs & Installation in Johannesburg',
  },
  'gutters': {
    title: 'Gutter Installation Johannesburg | Seamless Gutters Gauteng',
    description: 'Seamless gutter installation, repairs & cleaning in Johannesburg & Pretoria. All gutter types, downpipes & fascia boards. NHBRC registered, 4.9★. Free quotes — +27 82 868 8396',
    h1: 'Gutter Installation & Repairs in Johannesburg',
  },
  'roof-waterproofing': {
    title: 'Roof Waterproofing Johannesburg | Roof Waterproofing Pretoria',
    description: 'Expert roof waterproofing in Johannesburg & Pretoria. Tile, IBR, flat & concrete roofs. Bitumen, acrylic & torch-on systems. NHBRC registered, 4.9★. Free quotes — +27 82 868 8396',
    h1: 'Roof Waterproofing Contractors in Johannesburg & Pretoria',
  },
}

interface ServicePageProps {
  params: {
    lang: Locale
    service: string
  }
}

// Generate static params for all services
export async function generateStaticParams() {
  const services = enhancedServices.map(service => ({ service: service.slug }))
  return services
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const dict = await getDictionary(params.lang)
  const serviceData = getServiceBySlug(params.service)
  const seo = serviceSEO[params.service]
  const serviceInfo = (dict.services.items as any)[params.service]
  const serviceName = serviceInfo?.name || serviceData?.name || params.service

  const title = seo?.title || `${serviceName} Services Johannesburg | Sinqobile Construction`
  const description = seo?.description || `Professional ${serviceName.toLowerCase()} services in Johannesburg & Gauteng. 15+ years experience, 500+ projects. Free quotes — +27 82 868 8396`

  // v2.1 Phase 8 — freshness signal; per-service when retrofitted, fallback otherwise.
  const phaseDExtras = getServiceContent(params.service)?.phaseDExtras
  const modifiedTime = phaseDExtras?.dateModified || '2026-04-01'

  const siteUrl = 'https://www.sinqobileconstruction.co.za'

  return {
    title,
    description,
    alternates: {
      canonical: `${siteUrl}/${params.lang}/services/${params.service}`,
      languages: {
        'en': `${siteUrl}/en/services/${params.service}`,
        'af': `${siteUrl}/af/services/${params.service}`,
        'zu': `${siteUrl}/zu/services/${params.service}`,
        'st': `${siteUrl}/st/services/${params.service}`,
        'x-default': `${siteUrl}/en/services/${params.service}`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${siteUrl}/${params.lang}/services/${params.service}`,
      siteName: 'Sinqobile Construction',
      type: 'website',
      images: [{
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: `${serviceName} Services in Johannesburg | Sinqobile Construction`,
      }],
    },
    other: {
      'article:modified_time': modifiedTime,
    },
  }
}

// ISR: regenerate service pages daily
export const revalidate = 86400

const t = (template: string, name: string) => template.replace('%s', name)

export default async function ServicePage({ params: { lang, service } }: ServicePageProps) {
  const dict = await getDictionary(lang)
  const serviceData = getServiceBySlug(service)

  if (!serviceData) {
    notFound()
  }

  // Get projects for this service category
  const serviceProjects = getProjectsByCategory(service)
  const IconComponent = serviceData.icon

  // Get service info from dictionary
  const serviceInfo = (dict.services.items as any)[service] || (dict as any).extendedServices?.[service]
  const seo = serviceSEO[service]
  const content = getServiceContent(service)
  const dictContent = (dict as any).serviceContent?.[service] as typeof content
  const c = dictContent ? { ...content, ...dictContent } as typeof content : content
  const sp = (dict as any).servicePage as Record<string, string>
  const serviceName = serviceInfo?.name || serviceData.name

  // v2.1 Phase 8/9 extras — data-driven, per-service.
  // Only retrofitted services (currently: building) have this populated.
  // Other services degrade gracefully until their own retrofit runs.
  const phaseD = content?.phaseDExtras
  const serviceReviews = phaseD ? getReviews({ serviceSlug: service, limit: 6 }) : []
  const SITE_URL = 'https://www.sinqobileconstruction.co.za'

  return (
    <div className="pt-20">
      {/* Legacy Service schema (kept for backwards compatibility; layered
          with the richer Service schema below when phaseDExtras is set). */}
      <ServiceSchema
        serviceName={serviceInfo?.name || serviceData.name}
        serviceSlug={service}
        description={serviceInfo?.description || serviceData.description}
        priceRange="R400 - R50000"
        lang={lang}
      />

      {/* v2.1 Phase 8 — rich Service schema (dateModified, audienceType,
          priceRange, hasOfferCatalog, AggregateRating, speakable) */}
      {phaseD && (
        <SchemaMarkup
          type="service"
          lang={lang}
          data={{
            slug: service,
            serviceName: phaseD.schemaName,
            name: phaseD.schemaName,
            description: serviceInfo?.description || serviceData.description,
            dateModified: phaseD.dateModified,
            audienceType: phaseD.audienceType,
            priceRange: { min: phaseD.priceRangeMin, max: phaseD.priceRangeMax },
            features: c?.subServices?.map((s) => ({ name: s.name, description: s.description })),
          }}
        />
      )}

      {/* v2.1 Phase 8 — FAQPage schema via helper (speakable + author=Organization). */}
      {phaseD && c?.faqs && (
        <SchemaMarkup
          type="faq"
          lang={lang}
          data={{ questions: c.faqs }}
        />
      )}

      {/* v2.1 Phase 8 — BreadcrumbList schema (Home → Services → This service) */}
      {phaseD && (
        <SchemaMarkup
          type="breadcrumb"
          lang={lang}
          data={{
            items: [
              { name: 'Home', url: `${SITE_URL}/${lang}` },
              { name: 'Services', url: `${SITE_URL}/${lang}/services` },
              { name: serviceInfo?.name || serviceData.name, url: `${SITE_URL}/${lang}/services/${service}` },
            ],
          }}
        />
      )}

      <Breadcrumb
        items={[
          { label: dict.navigation.services, href: `/${lang}/services` },
          { label: serviceInfo?.name || serviceData.name, href: `/${lang}/services/${service}` }
        ]}
        lang={lang}
        dict={dict}
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                <IconComponent className="text-white" size={40} />
              </div>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              {lang === 'en' ? (seo?.h1 || serviceName) : serviceName}
            </h1>
            {/* v2.1 Phase 8 — direct answer block (speakable, lifts into AI overviews + voice).
                Per-service phaseDExtras.directAnswer; falls back to the legacy subtitle. */}
            {phaseD?.directAnswer ? (
              <p
                data-speakable="summary"
                className="service-summary text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed"
              >
                {phaseD.directAnswer}
              </p>
            ) : (
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                {serviceInfo?.description || serviceData.description}
              </p>
            )}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+27828688396"
                className="inline-flex items-center justify-center space-x-2 bg-accent text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
              >
                <Phone size={20} />
                <span>{sp?.getQuoteButton || 'Get Free Quote: +27 82 868 8396'}</span>
              </a>
              <Link
                href={`/${lang}/contact`}
                className="inline-flex items-center justify-center space-x-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors"
              >
                <span>{sp?.contactButton || 'Contact Us'}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-6">
                {t(sp?.sectionProfessional || 'Professional %s Services', serviceName)}
              </h2>
              <p className="text-secondary text-lg leading-relaxed mb-8">
                {c?.intro || `At Sinqobile Construction, we specialize in high-quality ${serviceName.toLowerCase()} services across Gauteng. With over 15 years of experience, our skilled team delivers exceptional results that stand the test of time.`}
              </p>

              <div className="space-y-4 mb-8">
                {(c?.whyChoose || [
                  'Professional, experienced team',
                  'Quality materials and workmanship',
                  'Competitive pricing',
                  'Fully insured and licensed',
                  'Work guarantee provided',
                ]).map((item, i) => (
                  <div key={i} className="flex items-start space-x-3">
                    <CheckCircle className="text-accent flex-shrink-0 mt-0.5" size={20} />
                    <span className="text-secondary">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-lightBackground rounded-lg p-6">
                <h3 className="font-heading text-xl font-bold text-primary mb-4">
                  {sp?.statsTitle || 'Service Statistics'}
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-2xl font-bold text-accent">{serviceData.imageCount}+</div>
                    <div className="text-sm text-secondary">{sp?.statsProjects || 'Projects Completed'}</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-accent">15+</div>
                    <div className="text-sm text-secondary">{sp?.statsYears || 'Years Experience'}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {serviceProjects.slice(0, 4).map((project) => (
                <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="flex">
                    <div className="w-24 h-24 relative flex-shrink-0">
                      <Image
                        src={project.image}
                        alt={project.seoAlt}
                        fill
                        className="object-cover"
                        sizes="96px"
                      />
                    </div>
                    <div className="p-4 flex-1">
                      <h4 className="font-semibold text-primary mb-1">{project.title}</h4>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <MapPin size={12} />
                          <span>{project.location}</span>
                        </div>
                        {project.duration && (
                          <div className="flex items-center space-x-1">
                            <Calendar size={12} />
                            <span>{project.duration}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sub-Services (rich content pages only) */}
      {c?.subServices && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-10 text-center">
                {t(sp?.sectionOurServices || 'Our %s Services', serviceName)}
              </h2>
              <div className="space-y-8">
                {c.subServices.map((sub, i) => (
                  <div key={i} className="border-l-4 border-accent pl-6">
                    <h3 className="font-heading text-xl font-bold text-primary mb-2">{sub.name}</h3>
                    <p className="text-secondary leading-relaxed">{sub.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Pricing Guide (rich content pages only) */}
      {c?.pricingTable && (
        <section className="py-20 bg-lightBackground">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4 text-center">
                {t(sp?.sectionCostGuide || '%s Cost Guide — Johannesburg 2026', serviceName)}
              </h2>
              <p className="text-secondary text-lg text-center mb-10 max-w-3xl mx-auto">
                {c.pricingNote}
              </p>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="bg-primary text-white">
                      <th className="px-6 py-4 text-left font-semibold">{sp?.tableService || 'Service'}</th>
                      <th className="px-6 py-4 text-left font-semibold">{sp?.tablePriceRange || 'Price Range'}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {c.pricingTable.map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                        <td className="px-6 py-4 text-secondary">{row.item}</td>
                        <td className="px-6 py-4 text-primary font-semibold">{row.range}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {c.materialsNote && (
                <p className="text-secondary mt-6 text-sm leading-relaxed">{c.materialsNote}</p>
              )}
            </div>
          </div>
        </section>
      )}

      {/* v2.1 Phase 8 — Build-quality comparison table (cost / inclusions / duration).
          Data-driven, only renders for services with phaseDExtras.comparisonTable. */}
      {phaseD?.comparisonTable && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4 text-center">
                {sp?.comparisonTitle || phaseD.comparisonTable.title}
              </h2>
              {phaseD.comparisonTable.caption && (
                <p className="text-secondary text-base text-center mb-10 max-w-3xl mx-auto leading-relaxed">
                  {phaseD.comparisonTable.caption}
                </p>
              )}
              <div className="bg-white rounded-lg shadow-md overflow-x-auto border border-gray-200">
                <table className="w-full text-sm md:text-base">
                  <thead>
                    <tr className="bg-primary text-white">
                      {phaseD.comparisonTable.columns.map((col, i) => (
                        <th key={i} className="px-4 py-3 text-left font-semibold whitespace-nowrap">
                          {col}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {phaseD.comparisonTable.rows.map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                        <td className="px-4 py-3 text-primary font-bold align-top whitespace-nowrap">
                          {row.label}
                        </td>
                        {row.cells.map((cell, j) => (
                          <td
                            key={j}
                            className="px-4 py-3 text-secondary align-top leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: cell }}
                          />
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* v2.1 Phase 9 — AI citation hooks (factual claim + specific number + brand attribution).
          Lifted verbatim by AI engines into ChatGPT / Perplexity / Google AI Overviews. */}
      {phaseD?.citationHooks && phaseD.citationHooks.length > 0 && (
        <section className="py-16 bg-lightBackground">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary mb-8 text-center">
                {sp?.citationHooksTitle || `Key Facts About ${serviceName}`}
              </h2>
              <ul className="space-y-4 text-secondary text-base md:text-lg leading-relaxed border-l-4 border-yellow-400 pl-5 bg-yellow-50/50 py-5 rounded-r-lg">
                {phaseD.citationHooks.map((hook, i) => (
                  <li key={i} dangerouslySetInnerHTML={{ __html: hook }} />
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* Service Process */}
      <section className={`py-20 ${c?.pricingTable ? 'bg-white' : 'bg-lightBackground'}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
              {t(sp?.sectionProcess || 'Our %s Process', serviceName)}
            </h2>
            <p className="text-secondary text-lg max-w-2xl mx-auto">
              {sp?.processSubtitle || 'We follow a proven process to ensure quality results every time'}
            </p>
          </div>

          <div className={`grid grid-cols-1 ${(c?.process || []).length > 4 ? 'md:grid-cols-5' : 'md:grid-cols-4'} gap-8`}>
            {(c?.process || [
              { step: '1', title: 'Consultation', description: 'We assess your needs and provide expert recommendations' },
              { step: '2', title: 'Quote', description: 'Detailed, transparent pricing with no hidden costs' },
              { step: '3', title: 'Execution', description: 'Professional work with regular progress updates' },
              { step: '4', title: 'Completion', description: 'Final inspection and quality guarantee' },
            ]).map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                  {item.step}
                </div>
                <h3 className="font-heading text-lg font-bold text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-secondary text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* v2.1 Phase 9 — Expert / founder card above FAQ (only for retrofitted services). */}
      {phaseD && (
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <ExpertCard
              serviceName={phaseD.schemaName || serviceName}
              lang={lang}
            />
          </div>
        </section>
      )}

      {/* FAQ Section (rich content pages only) */}
      {c?.faqs && (
        <section className="py-20 bg-lightBackground">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-10 text-center">
                {t(sp?.sectionFaq || 'Frequently Asked Questions — %s', serviceName)}
              </h2>
              <div className="space-y-4">
                {c.faqs.map((faq, i) => (
                  <details key={i} className="bg-white rounded-lg shadow-md overflow-hidden group">
                    <summary className="px-6 py-4 cursor-pointer flex items-center justify-between hover:bg-gray-50 transition-colors list-none [&::-webkit-details-marker]:hidden">
                      <h3 className="font-semibold text-secondary pr-4">{faq.question}</h3>
                      <svg className="text-primary flex-shrink-0 w-6 h-6 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="px-6 pb-4">
                      <div className="border-t border-gray-200 pt-4">
                        <p className="text-secondary leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  </details>
                ))}
              </div>
              {/* Legacy inline FAQPage schema — only emit when phaseDExtras
                  is NOT populated (otherwise SchemaMarkup above emits the
                  richer FAQPage with speakable + author=Organization). */}
              {!phaseD && (
                <script
                  type="application/ld+json"
                  dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                      '@context': 'https://schema.org',
                      '@type': 'FAQPage',
                      mainEntity: c.faqs.map(faq => ({
                        '@type': 'Question',
                        name: faq.question,
                        acceptedAnswer: { '@type': 'Answer', text: faq.answer }
                      }))
                    })
                  }}
                />
              )}
            </div>
          </div>
        </section>
      )}

      {/* v2.1 Phase 8 — ReviewWall (individual Review schemas, paired with
          AggregateRating already in LocalBusiness + Service schema). */}
      {phaseD && serviceReviews.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-10 text-center">
              {`What our ${(serviceInfo?.name || serviceData.name).toLowerCase()} clients say`}
            </h2>
            <ReviewWall
              serviceName={phaseD.schemaName || serviceName}
              reviews={serviceReviews}
              lang={lang}
            />
          </div>
        </section>
      )}

      {/* v2.1 Phase 9 — Strategy CTA (page-end, GA4 tracked). */}
      {phaseD && (
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <StrategyCTA
              category={phaseD.strategyCtaCategory}
              position="service-page-end"
              lang={lang}
              headline={phaseD.strategyCtaHeadline}
              subheadline={phaseD.strategyCtaSubheadline}
            />
          </div>
        </section>
      )}

      {/* Related Services */}
      {relatedServicesMap[service] && (
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
                {sp?.sectionRelated || 'Related Services'}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {relatedServicesMap[service].map((related) => {
                  const relatedData = getServiceBySlug(related)
                  const relatedInfo = (dict.services.items as any)[related] || (dict as any).extendedServices?.[related]
                  if (!relatedData) return null
                  return (
                    <Link
                      key={related}
                      href={`/${lang}/services/${related}`}
                      className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border-l-4 border-accent"
                    >
                      <h3 className="font-semibold text-primary mb-2">
                        {relatedInfo?.name || relatedData.name}
                      </h3>
                      <p className="text-sm text-secondary line-clamp-2">
                        {relatedInfo?.description || relatedData.description}
                      </p>
                    </Link>
                  )
                })}
              </div>
              <div className="text-center mt-8">
                <Link
                  href={`/${lang}/services`}
                  className="text-primary font-semibold hover:underline"
                >
                  {sp?.viewAllServices || 'View All Services →'}
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Projects Gallery */}
      {serviceProjects.length > 0 && (
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
                {t(sp?.sectionProjects || 'Recent %s Projects', serviceName)}
              </h2>
              <p className="text-secondary text-lg">
                {t(sp?.projectsSubtitle || 'See examples of our quality %s work', serviceName.toLowerCase())}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceProjects.slice(0, 6).map((project) => (
                <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={project.image}
                      alt={project.seoAlt}
                      fill
                      className="object-cover"
                    />
                    {project.featured && (
                      <div className="absolute top-3 left-3">
                        <span className="bg-accent text-white px-2 py-1 rounded-full text-xs font-medium">
                          Featured
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-heading text-lg font-bold text-primary mb-2">
                      {project.title}
                    </h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-2">
                      <div className="flex items-center space-x-1">
                        <MapPin size={14} />
                        <span>{project.location}</span>
                      </div>
                      {project.duration && (
                        <div className="flex items-center space-x-1">
                          <Calendar size={14} />
                          <span>{project.duration}</span>
                        </div>
                      )}
                    </div>
                    <p className="text-secondary text-sm">
                      {project.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {serviceProjects.length > 6 && (
              <div className="text-center mt-12">
                <Link
                  href={`/${lang}/our-work`}
                  className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  {t(sp?.sectionProjects || 'Recent %s Projects', serviceName)}
                </Link>
              </div>
            )}
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            {t(sp?.ctaTitle || 'Ready for Your %s Project?', serviceName)}
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            {sp?.ctaSubtitle || 'Contact Sinqobile Construction today for a free consultation and quote'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+27828688396"
              className="inline-flex items-center justify-center space-x-2 bg-accent text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
            >
              <Phone size={20} />
              <span>{sp?.callButton || 'Call: +27 82 868 8396'}</span>
            </a>
            <Link
              href={`/${lang}/contact`}
              className="inline-flex items-center justify-center space-x-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors"
            >
              <span>{sp?.getFreeQuote || 'Get Free Quote'}</span>
            </Link>
          </div>
          <p className="text-sm text-white/60 mt-6">{sp?.lastUpdated || 'Last updated: April 2026'}</p>
        </div>
      </section>

      {/* Back to Services */}
      <section className="py-8 bg-lightBackground">
        <div className="container mx-auto px-4">
          <Link
            href={`/${lang}/services`}
            className="inline-flex items-center space-x-2 text-primary hover:text-accent transition-colors"
          >
            <ArrowLeft size={20} />
            <span>{sp?.backToServices || 'Back to All Services'}</span>
          </Link>
        </div>
      </section>
    </div>
  )
}