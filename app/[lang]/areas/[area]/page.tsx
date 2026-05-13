import React from 'react'
import type { Metadata } from 'next'
import { getDictionary } from '@/lib/dictionaries'
import { Locale } from '@/i18n.config'
import Breadcrumb from '@/components/breadcrumb'
import SchemaMarkup from '@/components/schema-markup'
import { ExpertCard } from '@/components/expert-card'
import { StrategyCTA } from '@/components/strategy-cta'
import { ReviewWall } from '@/components/review-wall'
import { getReviews } from '@/lib/reviews-data'
import { CheckCircle, Phone, MapPin, Star, Award, Clock, Shield } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

interface AreaPageProps {
  params: {
    lang: Locale
    area: string
  }
}

/**
 * v2.1 Phase 8 & 9 extras — populated per-area as each area page goes through
 * the v2.1 SERP/AI retrofit. When `null`/missing, the page falls back to
 * legacy behaviour (no direct-answer block, no citation hooks, no rich
 * Service schema, no ExpertCard/StrategyCTA/ReviewWall). Each area slot is
 * independent so subsequent area retrofits (sandton, pretoria, etc.) plug in
 * here without affecting earlier retrofits.
 *
 * Mirrors the shape of `ServiceContent.phaseDExtras` in lib/service-content-data.ts
 * but adapted for area pages (expertCardLabel instead of schemaName,
 * comparisonTable optionally suburb-axis, geo + areaServed in the Service
 * schema rather than serviceName=area).
 */
export interface AreaPhaseDExtras {
  /** 40–60 word direct answer for the primary keyword. Rendered with data-speakable="summary" under H1. */
  directAnswer: string
  /** Schema.org audienceType — homeowners + developers + commercial across the area. */
  audienceType: string
  /** Label used in ExpertCard, Service schema name, headings (e.g., "Builders in Johannesburg"). */
  expertCardLabel: string
  /** Rich Service schema fields. */
  priceRangeMin: number
  priceRangeMax: number
  /** ISO date string — set when the page was last meaningfully updated. */
  dateModified: string
  /** Verbatim citation hooks: factual claim + specific number + brand attribution. */
  citationHooks: string[]
  /** Optional comparison table (suburb × R/m² × travel, or service × R-range × duration). */
  comparisonTable?: {
    title: string
    caption?: string
    columns: string[]
    rows: { label: string; cells: string[] }[]
  }
  /** Tier label used inside StrategyCTA category prop. */
  strategyCtaCategory: string
  strategyCtaHeadline: string
  strategyCtaSubheadline: string
}

// Map area slugs to relevant project images from public/images/
const areaImages: Record<string, { src: string; alt: string }[]> = {
  'johannesburg': [
    { src: '/images/sinqobile-construction-installation-johannesburg-24.jpg', alt: 'Installation project in Johannesburg by Sinqobile Construction' },
    { src: '/images/sinqobile-construction-installation-johannesburg-94.jpg', alt: 'Professional installation work in Johannesburg' },
    { src: '/images/sinqobile-construction-waterproofing-johannesburg-96.jpg', alt: 'Waterproofing project in Johannesburg' },
    { src: '/images/sinqobile-construction-plumbing-johannesburg-86.jpg', alt: 'Plumbing services in Johannesburg' },
    { src: '/images/sinqobile-construction-renovation-johannesburg-26.jpg', alt: 'Home renovation in Johannesburg' },
    { src: '/images/sinqobile-construction-building-edenvale-30.jpg', alt: 'Building project in Edenvale, Johannesburg' },
  ],
  'sandton': [
    { src: '/images/sinqobile-construction-installation-sandton-36.jpg', alt: 'Installation project in Sandton by Sinqobile Construction' },
    { src: '/images/sinqobile-construction-maintenance-sandton-17.jpg', alt: 'Property maintenance in Sandton' },
    { src: '/images/sinqobile-construction-paving-sandton-77.jpg', alt: 'Paving project in Sandton' },
    { src: '/images/sinqobile-construction-roofing-sandton-95.jpg', alt: 'Roofing work in Sandton' },
    { src: '/images/sinqobile-construction-tiling-sandton-65.jpg', alt: 'Tiling project in Sandton' },
    { src: '/images/sinqobile-construction-extensions-rosebank-48.jpg', alt: 'Home extension in Rosebank, near Sandton' },
  ],
  'pretoria': [
    { src: '/images/sinqobile-construction-roofing-pretoria-15.jpg', alt: 'Roofing project in Pretoria by Sinqobile Construction' },
    { src: '/images/sinqobile-construction-plastering-pretoria-44.jpg', alt: 'Plastering work in Pretoria' },
    { src: '/images/sinqobile-construction-roofing-centurion-61.jpg', alt: 'Roofing in Centurion, near Pretoria' },
    { src: '/images/sinqobile-construction-maintenance-centurion-70.jpg', alt: 'Maintenance project in Centurion' },
  ],
  'centurion': [
    { src: '/images/sinqobile-construction-roofing-centurion-61.jpg', alt: 'Roofing project in Centurion by Sinqobile Construction' },
    { src: '/images/sinqobile-construction-maintenance-centurion-70.jpg', alt: 'Property maintenance in Centurion' },
    { src: '/images/sinqobile-construction-roofing-pretoria-15.jpg', alt: 'Roofing near Centurion' },
    { src: '/images/sinqobile-construction-plastering-pretoria-44.jpg', alt: 'Plastering work near Centurion' },
  ],
  'midrand': [
    { src: '/images/sinqobile-construction-roofing-midrand-79.jpg', alt: 'Roofing project in Midrand by Sinqobile Construction' },
    { src: '/images/sinqobile-construction-roofing-midrand-89.jpg', alt: 'Roof repair in Midrand' },
    { src: '/images/sinqobile-construction-roofing-midrand-97.jpg', alt: 'Roofing work in Midrand' },
    { src: '/images/sinqobile-construction-paving-midrand-59.jpg', alt: 'Paving project in Midrand' },
    { src: '/images/sinqobile-construction-flooring-midrand-55.jpg', alt: 'Flooring installation in Midrand' },
    { src: '/images/sinqobile-construction-renovation-midrand-37.jpg', alt: 'Home renovation in Midrand' },
  ],
  'randburg': [
    { src: '/images/sinqobile-construction-plumbing-randburg-52.jpg', alt: 'Plumbing project in Randburg by Sinqobile Construction' },
    { src: '/images/sinqobile-construction-plumbing-randburg-98.jpg', alt: 'Plumbing services in Randburg' },
    { src: '/images/sinqobile-construction-paving-randburg-2.jpg', alt: 'Paving project in Randburg' },
    { src: '/images/sinqobile-construction-renovation-randburg-7.jpg', alt: 'Home renovation in Randburg' },
  ],
  'fourways': [
    { src: '/images/sinqobile-construction-flooring-fourways-43.jpg', alt: 'Flooring project in Fourways by Sinqobile Construction' },
    { src: '/images/sinqobile-construction-plumbing-fourways-27.jpg', alt: 'Plumbing services in Fourways' },
    { src: '/images/sinqobile-construction-repairs-fourways-41.jpg', alt: 'Home repairs in Fourways' },
    { src: '/images/sinqobile-construction-repairs-fourways-6.jpg', alt: 'Repair work in Fourways' },
    { src: '/images/sinqobile-construction-plastering-fourways-50.jpg', alt: 'Plastering project in Fourways' },
  ],
  'roodepoort': [
    { src: '/images/sinqobile-construction-tiling-roodepoort-35.jpg', alt: 'Tiling project in Roodepoort by Sinqobile Construction' },
    { src: '/images/sinqobile-construction-waterproofing-krugersdorp-85.jpg', alt: 'Waterproofing near Roodepoort' },
    { src: '/images/sinqobile-construction-painting-krugersdorp-76.jpg', alt: 'Painting work near Roodepoort' },
    { src: '/images/sinqobile-construction-concrete-krugersdorp-21.jpg', alt: 'Concrete work near Roodepoort' },
  ],
}

// Location data
const locationData: Record<string, {
  name: string
  description: string
  suburbs: string[]
  projects: number
  rating: number
  highlights: string[]
  services: string[]
  testimonial: {
    text: string
    author: string
    location: string
  }
  localInfo?: string
  faqs?: { question: string; answer: string }[]
  /** v2.1 Phase 8/9 extras — only populated for retrofitted area pages. */
  phaseDExtras?: AreaPhaseDExtras | null
  /** Geo coordinates for LocalBusiness Place schema (lazy populated alongside phaseDExtras). */
  geo?: { latitude: number; longitude: number }
}> = {
  'johannesburg': {
    name: 'Johannesburg',
    description: 'Professional construction services in Johannesburg CBD and surrounding suburbs. With over 15 years of experience, Sinqobile Construction has completed 150+ projects across Johannesburg, from residential renovations to commercial construction.',
    suburbs: ['Sandton', 'Rosebank', 'Melville', 'Bryanston', 'Parktown', 'Houghton', 'Randburg', 'Fourways'],
    projects: 150,
    rating: 4.9,
    highlights: [
      'Fast response times across all Johannesburg suburbs',
      'Local expertise with 15+ years in Johannesburg',
      'Familiar with Johannesburg building regulations',
      'Completed 150+ projects in Johannesburg area',
      'Trusted by Johannesburg homeowners and businesses'
    ],
    services: [
      'Residential Building & Extensions',
      'Home Renovations & Remodeling',
      'Roofing & Waterproofing',
      'Plastering & Painting',
      'Paving & Driveways',
      'Plumbing Services',
      'Tiling & Flooring',
      'General Maintenance'
    ],
    testimonial: {
      text: 'Sinqobile Construction transformed our Johannesburg home with a complete renovation. Their attention to detail and professionalism exceeded our expectations. Highly recommend for any construction work in Johannesburg!',
      author: 'Sarah Johnson',
      location: 'Sandton, Johannesburg'
    },
    localInfo: 'Johannesburg is South Africa\'s largest city and economic hub, with a diverse property market ranging from historic homes in Parktown and Houghton to modern developments in Sandton and Bryanston. Building plans in Johannesburg are submitted to the City of Johannesburg Metropolitan Municipality, with approval times typically 4–12 weeks. The city\'s clay soils require careful foundation design — most new homes use raft foundations. Johannesburg\'s summer thunderstorms (October–March) demand quality roofing and waterproofing. Construction costs in Johannesburg range from R10,000–R20,000 per square metre for residential builds in 2026.',
    faqs: [
      { question: 'How much does it cost to build in Johannesburg in 2026?', answer: 'Residential construction in Johannesburg costs R10,000–R20,000 per square metre in 2026. A standard 3-bedroom home (120–150 m²) costs approximately R1.2M–R2.5M. Renovation costs range from R7,000–R20,000/m². These prices vary by suburb — Sandton and northern suburbs tend to be 10–15% higher due to premium finishes and material expectations. We provide free, itemised quotes for any project in Johannesburg.' },
      { question: 'Do I need building plans approved in Johannesburg?', answer: 'Yes. All structural work, new builds, extensions, and major renovations in Johannesburg require building plans approved by the City of Johannesburg Metropolitan Municipality. Plans must be drawn by a SACAP-registered architect. Approval takes 4–12 weeks. Building without approved plans is illegal — the structure cannot be insured, bonded, or sold. We handle the full plans process from architect engagement to council submission.' },
      { question: 'Which Johannesburg suburbs do you serve?', answer: 'We serve all 8 of our primary Johannesburg areas — Sandton, Bryanston, Fourways, Randburg, Midrand, Rosebank, Melville, Parktown, Houghton, Northcliff, Linden, Bedfordview, Edenvale, Alberton and Soweto — plus the wider East Rand, West Rand and southern suburbs. Our head office is in Fourways, Sandton, giving us a 30–45 minute drive to most projects in the JHB metro. Site visits are free within 50 km of Sandton CBD.' },
      { question: 'How long does building plan approval take with the City of Johannesburg?', answer: 'Standard residential building plans submitted to the City of Johannesburg Metropolitan Municipality typically take 4 to 12 weeks to approve in 2026 — 4–6 weeks for straightforward single-storey additions and minor alterations, 8–12 weeks for new builds, second-storey additions and developments requiring rezoning, stormwater or geotechnical input. Plans must be drawn by a SACAP-registered architect or competent draughtsperson and lodged through the CoJ Development Planning portal. Commercial and multi-unit residential approvals usually take longer (12–24 weeks). Sinqobile Construction coordinates the architect, structural engineer, plan lodgement and council follow-up on every Johannesburg project.' },
      { question: 'Why do Johannesburg builders use raft foundations on so many sites?', answer: 'Large parts of Johannesburg sit on heaving clay soils — particularly suburbs like Linbro Park, Glenvista, Edenvale, parts of Bedfordview and the East Rand — where soil moisture changes cause vertical movement that can crack conventional strip footings. South African National Standard SANS 10400-H requires foundations to be designed for the specific soil class, and on heaving clay this is typically a stiffened raft foundation or piled foundation. Sinqobile Construction commissions a geotechnical site investigation on every Johannesburg new-build and reinforced-slab project before foundation design, so the foundation type matches the actual soil conditions on your stand.' },
      { question: 'How do I verify a Johannesburg builder is NHBRC registered?', answer: 'You can verify any South African builder\'s NHBRC registration in two minutes via the NHBRC online registry at nhbrc.org.za — search by company name or registration number to confirm the registration is current and check for any project enrolments and complaints history. Under the Housing Consumers Protection Measures Act (1998), every new home built for occupation must be enrolled with the NHBRC at least 15 days before construction begins, by a registered builder. Sinqobile Construction has been NHBRC registered since 2010 and enrols every new home and qualifying extension before breaking ground — your NHBRC enrolment certificate is handed over with the project.' },
    ],
    geo: { latitude: -26.2041, longitude: 28.0473 },
    phaseDExtras: {
      directAnswer: 'Sinqobile Construction is an NHBRC-registered builder based in Fourways, Sandton, serving all of Johannesburg — Sandton, Randburg, Roodepoort, Bedfordview, Edenvale, Alberton, Soweto and the CBD. With 15+ years operating in JHB and 500+ completed residential and commercial projects, we deliver new builds, extensions, renovations and structural repairs at R10,000–R20,000 per m² in 2026 with a 4.9-star rating from 127 verified Google reviews.',
      audienceType: 'Homeowners, property developers, landlords and commercial property owners across Johannesburg — Sandton, Randburg, Roodepoort, Bedfordview, Edenvale, Alberton, Soweto, Fourways, Midrand and the JHB CBD — planning new builds, extensions, second-storey additions, granny flats, full-home renovations or structural repairs under the City of Johannesburg building-plan and NHBRC framework.',
      expertCardLabel: 'Builders in Johannesburg',
      priceRangeMin: 5000,
      priceRangeMax: 25000,
      dateModified: '2026-05-13',
      citationHooks: [
        'New residential construction in Johannesburg costs <strong>R10,000 to R20,000 per square metre in 2026</strong>, with the City of Johannesburg residential building-plan approval process typically taking <strong>4 to 12 weeks</strong> for standard plans submitted by SACAP-registered architects; Sinqobile Construction handles plan submission, NHBRC enrolment and SANS 10400 compliance on every Johannesburg new-build contract, with 500+ projects completed since 2010 across the JHB metro (Sinqobile Construction project workflow, 2026).',
        'Johannesburg’s heaving clay soils — particularly in suburbs such as Linbro Park, Glenvista, Edenvale and parts of Bedfordview — typically require engineered raft foundations or piled foundations under <strong>SANS 10400-H</strong> to prevent structural cracking from soil movement; Sinqobile Construction commissions geotechnical site investigation on every JHB new-build and reinforced-slab project to confirm soil class before foundation design, in line with SANS 10400-H and the National Building Regulations (Sinqobile Construction structural engineering standards, 2026).',
        'Sinqobile Construction has delivered <strong>500+ residential and commercial projects across the Greater Johannesburg metro since 2010</strong> — covering Sandton, Fourways, Midrand, Randburg, Roodepoort, Bedfordview, Edenvale, Alberton and Soweto — with NHBRC registration, full public liability cover and SANS 10400 compliance maintained on every new-build, extension and structural renovation contract, secured by the statutory 5-year NHBRC structural-defect warranty on every enrolled new home (Sinqobile Construction company records, 2026).',
      ],
      comparisonTable: {
        title: 'Johannesburg Suburb Pricing Guide — Sinqobile Construction 2026',
        caption: 'Indicative per-m² build pricing by Johannesburg sub-region. Site visits are free anywhere within 50 km of Sandton CBD (covers the entire JHB metro). Final pricing depends on stand soil class, finish level and scope — every quote is itemised and fixed-price.',
        columns: ['Suburb cluster', 'New-build R/m²', 'Renovation R/m²', 'Travel surcharge', 'Local notes'],
        rows: [
          { label: 'Sandton / Fourways / Bryanston', cells: ['R14,000 – R20,000', 'R10,000 – R20,000', 'None — within 25 km of our office', 'Premium finishes, estate compliance, body-corporate approvals routine'] },
          { label: 'Randburg / Northcliff / Linden', cells: ['R12,000 – R17,000', 'R7,000 – R18,000', 'None — within 25 km', 'Mature 1960s–80s housing stock; open-plan conversions popular'] },
          { label: 'Roodepoort / Honeydew / Ruimsig', cells: ['R10,000 – R15,000', 'R6,000 – R15,000', 'None — within 30 km', 'Best ROI on extensions and granny flats due to lower base prices'] },
          { label: 'Bedfordview / Edenvale / East Rand', cells: ['R11,000 – R17,000', 'R7,000 – R17,000', 'None — within 40 km', 'Heaving-clay sites common; raft foundation typical'] },
          { label: 'JHB CBD / Soweto / Southern suburbs', cells: ['R9,000 – R14,000', 'R5,000 – R14,000', 'None — within 50 km', 'Mixed-use and refurbishment work; CoJ heritage zones in pockets'] },
        ],
      },
      strategyCtaCategory: 'area-johannesburg',
      strategyCtaHeadline: 'Planning a Build, Extension or Renovation in Johannesburg?',
      strategyCtaSubheadline: 'Free site visit anywhere in the JHB metro — Sandton, Randburg, Roodepoort, Bedfordview, Edenvale, Alberton, Soweto and the CBD. A Sinqobile Construction expert will inspect your stand, advise on CoJ plan approval and NHBRC enrolment, and email a fixed-price itemised quote within 24 hours. NHBRC registered with a 5-year structural warranty on every new build.',
    },
  },
  'sandton': {
    name: 'Sandton',
    description: 'Premium construction and renovation services in Sandton — Africa\'s richest square mile. Specializing in high-end residential and commercial projects across Sandton\'s prestigious suburbs including Sandhurst, Morningside, and Hyde Park. Sinqobile Construction delivers exceptional quality for Sandton\'s discerning property owners, with 120+ completed projects and NHBRC registration.',
    suburbs: ['Morningside', 'Sandhurst', 'Bryanston', 'Sunninghill', 'Rivonia', 'Woodmead', 'Hyde Park', 'Sandown', 'Illovo', 'Parkmore', 'Atholl', 'Wendywood'],
    projects: 120,
    rating: 4.9,
    highlights: [
      'Specialized in premium Sandton properties',
      '120+ successful projects in Sandton',
      'Understanding of Sandton building standards',
      'Quick response across all Sandton suburbs',
      'Trusted by Sandton residents for quality work'
    ],
    services: [
      'Luxury Home Renovations',
      'Modern Extensions & Additions',
      'High-End Finishes & Tiling',
      'Premium Roofing Solutions',
      'Designer Paving & Landscaping',
      'Smart Home Integration',
      'Commercial Office Fit-outs',
      'Property Maintenance'
    ],
    testimonial: {
      text: 'Outstanding service from Sinqobile Construction on our Sandton property. They understood our vision for a modern renovation and delivered beyond expectations. Professional, reliable, and excellent quality.',
      author: 'Michael Chen',
      location: 'Morningside, Sandton'
    },
    localInfo: 'Sandton is Africa\'s financial capital and one of the most affluent areas in South Africa. Properties here demand premium finishes — imported tiles, stone countertops, designer fixtures, and smart home integration. Renovation costs in Sandton run 10–15% above the Gauteng average. The area is also home to exclusive estates (Sandhurst, Hyde Park, Morningside) with strict architectural guidelines. We have experience working within estate design requirements and body corporate approvals. Building plan submissions go through the City of Johannesburg (Sandton falls under CoJ).',
    faqs: [
      { question: 'Why are construction costs higher in Sandton?', answer: 'Sandton construction costs are 10–15% above the Gauteng average because property owners expect premium finishes (imported marble, Caesarstone countertops, underfloor heating), homes are larger (300–600 m²), and estates often require specific architects and materials. Skilled contractors in the area charge higher rates due to demand. Our Fourways base gives us competitive access to Sandton without the premium markup of Sandton-only contractors.' },
      { question: 'Do you work in Sandton security estates?', answer: 'Yes. We have completed projects in Sandhurst, Morningside, Hyde Park, Bryanston, and other Sandton estates. We are familiar with estate access procedures, architectural guidelines, and body corporate approval requirements. We coordinate with estate managers to ensure compliance with all building rules.' },
      { question: 'What construction services are most popular in Sandton?', answer: 'The most requested services in Sandton are luxury home renovations (kitchen and bathroom upgrades with premium finishes), home extensions and second-storey additions, swimming pool surrounds and outdoor entertainment areas, and security upgrades (boundary walls, electric fencing, gate automation). Smart home integration (automated lighting, HVAC, security) is increasingly popular in Sandton properties.' },
    ],
  },
  'pretoria': {
    name: 'Pretoria',
    description: 'NHBRC registered builders serving Pretoria, Tshwane and Centurion. Sinqobile Construction brings 15+ years of expertise to Pretoria East, West and North — from luxury renovations in Waterkloof and Mooikloof to new builds in Montana and Garsfontein. 100+ completed projects across South Africa\'s capital city.',
    suburbs: ['Centurion', 'Hatfield', 'Brooklyn', 'Menlyn', 'Waterkloof', 'Lynnwood', 'Garsfontein', 'Faerie Glen', 'Moreleta Park', 'Silverlakes', 'Mooikloof', 'Montana', 'Sinoville', 'Arcadia', 'Newlands', 'Equestria'],
    projects: 100,
    rating: 4.8,
    highlights: [
      'Extensive experience in Pretoria construction',
      '100+ projects completed in Pretoria',
      'Knowledge of Pretoria building codes',
      'Serving all Pretoria suburbs',
      'Reliable service across Pretoria East and West'
    ],
    services: [
      'New Home Construction',
      'Residential Renovations',
      'Roofing & Roof Repairs',
      'Plastering & Skimming',
      'Interior & Exterior Painting',
      'Paving & Concrete Work',
      'Plumbing & Geyser Installation',
      'Building Maintenance'
    ],
    testimonial: {
      text: 'We hired Sinqobile Construction for a major renovation in Pretoria East. They were professional, on time, and the quality of work was excellent. Would definitely use them again for future projects.',
      author: 'Johan van der Merwe',
      location: 'Garsfontein, Pretoria'
    },
    localInfo: 'Pretoria (Tshwane) is South Africa\'s administrative capital, with a property market ranging from heritage homes in Arcadia and Brooklyn to modern estates in Mooikloof and Silverlakes. Building plans are submitted to the City of Tshwane Metropolitan Municipality. Pretoria construction costs tend to be 5–10% lower than Johannesburg. The city\'s red soil (iron-rich clay) requires proper foundation design — raft foundations are standard for new builds. Pretoria experiences frost in winter (May–August), which affects construction scheduling for concrete work and plastering.',
    faqs: [
      { question: 'How much does building cost in Pretoria in 2026?', answer: 'Construction in Pretoria costs R9,000–R18,000 per square metre in 2026 — approximately 5–10% lower than Johannesburg. A standard 3-bedroom home costs R1.0M–R2.2M. Renovation costs range from R6,000–R18,000/m². Premium builds in estates like Waterkloof and Mooikloof are at the higher end. We provide free quotes for projects across Pretoria and Centurion.' },
      { question: 'Do Pretoria building plans go through a different council than Johannesburg?', answer: 'Yes. Pretoria building plans are submitted to the City of Tshwane Metropolitan Municipality, not the City of Johannesburg. The process is similar (SACAP architect, plan submission, 4–12 week approval) but the office and requirements differ. We handle plans submissions to both Tshwane and CoJ and know the requirements for each.' },
      { question: 'Which Pretoria areas do you cover?', answer: 'We serve all Pretoria suburbs: Centurion, Hatfield, Brooklyn, Menlyn, Waterkloof, Lynnwood, Garsfontein, Faerie Glen, Moreleta Park, Silverlakes, Mooikloof, Montana, Sinoville, Arcadia, Newlands, and surrounding areas. Our projects range from Pretoria East to Pretoria North and West.' },
    ],
  },
  'centurion': {
    name: 'Centurion',
    description: 'NHBRC registered builders in Centurion with 80+ completed projects. Sinqobile Construction delivers quality renovations, extensions, and new builds across Eldoraigne, Irene, Lyttelton, Wierdapark, and all Centurion suburbs. 15+ years experience, 4.9★ rated.',
    suburbs: ['Eldoraigne', 'Wierdapark', 'Lyttelton', 'The Reeds', 'Hennopspark', 'Zwartkop', 'Clubview', 'Rooihuiskraal', 'Irene', 'Doringkloof', 'Amberfield', 'Pierre van Ryneveld'],
    projects: 80,
    rating: 4.9,
    highlights: [
      'Serving all Centurion suburbs with quality construction',
      '80+ projects completed in the Centurion area',
      'Familiar with Centurion municipal building requirements',
      'Fast response times across Centurion',
      'Trusted by Centurion homeowners for 15+ years'
    ],
    services: ['Residential Building & Extensions', 'Home Renovations', 'Roofing & Waterproofing', 'Plastering & Painting', 'Paving & Driveways', 'Plumbing Services', 'Tiling & Flooring', 'General Maintenance'],
    testimonial: {
      text: 'Excellent building work on our Centurion home extension. The team was professional and completed the project on schedule. Very happy with the quality.',
      author: 'Pieter Joubert',
      location: 'Eldoraigne, Centurion'
    },
    localInfo: 'Centurion is a fast-growing residential hub between Johannesburg and Pretoria, popular with families and young professionals. The area offers a mix of established suburbs (Eldoraigne, Lyttelton) and modern estates (Amberfield, The Reeds). Building plans are submitted to the City of Tshwane. Centurion construction costs are similar to Pretoria — R9,000–R16,000/m² for residential builds. The area\'s proximity to the N1 and N14 makes it accessible from both Johannesburg and Pretoria.',
    faqs: [
      { question: 'How much does a home renovation cost in Centurion?', answer: 'Home renovation in Centurion costs R6,000–R18,000 per square metre in 2026. Kitchen renovations run R50,000–R250,000, bathroom renovations R15,000–R80,000. Centurion prices are generally 5–10% lower than Johannesburg. We provide free on-site assessments and itemised quotes for all renovation projects in Centurion.' },
      { question: 'Do you build granny flats in Centurion?', answer: 'Yes. Granny flats are very popular in Centurion due to rental demand from students and young professionals. A 40 m² granny flat costs R350,000–R700,000 and can generate R5,000–R10,000/month rental income. Council-approved plans are required through the City of Tshwane. We handle the full process from design to handover.' },
      { question: 'Which Centurion suburbs do you serve?', answer: 'We serve all Centurion suburbs: Eldoraigne, Wierdapark, Lyttelton, The Reeds, Hennopspark, Zwartkop, Clubview, Rooihuiskraal, Irene, Doringkloof, Amberfield, Pierre van Ryneveld, and surrounding areas.' },
    ],
  },
  'midrand': {
    name: 'Midrand',
    description: 'NHBRC registered builders in Midrand — the corridor connecting Johannesburg and Pretoria. Sinqobile Construction has completed 90+ projects across Waterfall, Kyalami, Carlswald, Halfway House, and all Midrand suburbs. Specializing in estate construction, residential renovations, and new builds with 15+ years experience.',
    suburbs: ['Carlswald', 'Glen Austin', 'Halfway House', 'Noordwyk', 'Vorna Valley', 'Sagewood', 'Waterfall', 'Blue Hills', 'Kyalami', 'Beaulieu', 'Crowthorne', 'Halfway Gardens'],
    projects: 90,
    rating: 4.8,
    highlights: [
      'Conveniently located to serve all Midrand areas',
      '90+ projects completed across Midrand',
      'Experience with Midrand estate developments',
      'Quick response times throughout Midrand',
      'Trusted construction partner in the Midrand corridor'
    ],
    services: ['Residential Building & Extensions', 'Home Renovations', 'Roofing & Waterproofing', 'Plastering & Painting', 'Paving & Driveways', 'Plumbing Services', 'Tiling & Flooring', 'General Maintenance'],
    testimonial: {
      text: 'Sinqobile Construction did a fantastic job on our Midrand property renovation. Professional service from start to finish.',
      author: 'Nomsa Dlamini',
      location: 'Waterfall, Midrand'
    },
    localInfo: 'Midrand is the strategic corridor between Johannesburg and Pretoria, home to Waterfall City, Kyalami, and numerous residential estates. The area has experienced rapid development with modern estates like Waterfall, Sagewood, and Blue Hills attracting new builds and renovations. Building plans go through the City of Johannesburg (southern Midrand) or City of Tshwane (northern Midrand) — we know which municipality your property falls under. Estate builds require compliance with homeowners\' association architectural guidelines.',
    faqs: [
      { question: 'Do you build in Midrand estates like Waterfall and Kyalami?', answer: 'Yes. We have completed projects in Waterfall, Kyalami, Beaulieu, Blue Hills, and other Midrand estates. We are familiar with estate architectural guidelines, building material requirements, and homeowners\' association approval processes. We coordinate with estate managers to ensure full compliance with all building rules before starting any work.' },
      { question: 'Which council handles Midrand building plans?', answer: 'Midrand is split between two municipalities. Properties south of the old Midrand boundary (Halfway House, Carlswald, Vorna Valley) fall under the City of Johannesburg. Properties north (Noordwyk, parts of Kyalami) fall under the City of Tshwane. We determine which municipality your property falls under and submit plans to the correct council.' },
      { question: 'How much does building cost in Midrand?', answer: 'Construction in Midrand costs R10,000–R18,000 per square metre in 2026. Estate builds tend to be at the higher end due to premium material and design requirements. Renovations cost R7,000–R16,000/m². A granny flat (40 m²) costs R350,000–R650,000. We provide free quotes for all Midrand projects.' },
    ],
  },
  'randburg': {
    name: 'Randburg',
    description: 'NHBRC registered builders in Randburg with 70+ completed projects. Sinqobile Construction serves all 32+ Randburg suburbs — from Northcliff and Linden to Ferndale, Northriding, and Randpark Ridge. Specializing in home renovations, extensions, and residential construction with 15+ years experience and a 4.9★ rating.',
    suburbs: ['Northcliff', 'Linden', 'Ferndale', 'Fontainebleau', 'Blairgowrie', 'Bordeaux', 'Robin Hills', 'Bromhof', 'Northriding', 'Randpark Ridge', 'Fairland', 'Cresta'],
    projects: 70,
    rating: 4.9,
    highlights: [
      'Extensive experience in Randburg residential projects',
      '70+ successful projects across Randburg suburbs',
      'Quick response across all Randburg areas',
      'Knowledge of Randburg building regulations',
      'Trusted by Randburg homeowners for quality work'
    ],
    services: ['Residential Building & Extensions', 'Home Renovations', 'Roofing & Waterproofing', 'Plastering & Painting', 'Paving & Driveways', 'Plumbing Services', 'Tiling & Flooring', 'General Maintenance'],
    testimonial: {
      text: 'Great plastering and painting work on our Randburg home. The team was neat, professional, and delivered on time. Highly recommend.',
      author: 'Lisa van Niekerk',
      location: 'Linden, Randburg'
    },
    localInfo: 'Randburg is a well-established residential area in Johannesburg\'s northern suburbs, known for its mix of older homes with renovation potential and modern developments. Suburbs like Northcliff and Linden have character homes from the 1960s–80s that benefit from modernisation — open-plan conversions, kitchen and bathroom upgrades, and energy-efficient improvements. Building plans go through the City of Johannesburg. Randburg offers good value compared to neighbouring Sandton, making it popular with homeowners looking to renovate and add value.',
    faqs: [
      { question: 'What renovations are most popular in Randburg?', answer: 'The most requested renovations in Randburg are kitchen modernisation (opening up enclosed kitchens to living areas), bathroom upgrades, painting (interior and exterior), and paving/driveway replacement. Randburg has many older homes from the 1960s–80s that benefit from these upgrades. Open-plan conversions are particularly popular as they modernise the layout and add property value.' },
      { question: 'How much does renovation cost in Randburg?', answer: 'Renovation in Randburg costs R7,000–R18,000 per square metre in 2026 — slightly below Sandton rates. Kitchen renovations run R50,000–R250,000, bathroom renovations R15,000–R80,000. Full house repaints cost R15,000–R40,000. Randburg offers good value for renovation investment as property prices are rising but still below Sandton and Bryanston.' },
      { question: 'Do you serve Northcliff and Linden?', answer: 'Yes. Northcliff, Linden, Ferndale, Fontainebleau, Blairgowrie, Bordeaux, Robin Hills, Bromhof, Northriding, Randpark Ridge, Fairland, and Cresta are all within our service area. Our Fourways base is a short drive from all Randburg suburbs.' },
    ],
  },
  'fourways': {
    name: 'Fourways',
    description: 'Quality construction services in Fourways and surrounding estates. Sinqobile Construction delivers premium building, renovation, and maintenance services with 65+ completed projects in the Fourways area.',
    suburbs: ['Fourways Gardens', 'Cedar Lakes', 'Dainfern', 'Lonehill', 'Beverley', 'Chartwell', 'Pineslopes', 'Magaliessig'],
    projects: 65,
    rating: 4.8,
    highlights: [
      'Experienced in Fourways estate developments',
      '65+ projects completed in Fourways area',
      'Understanding of Fourways building standards',
      'Serving all Fourways suburbs and estates',
      'Quality construction for Fourways homeowners'
    ],
    services: ['Residential Building & Extensions', 'Home Renovations', 'Roofing & Waterproofing', 'Plastering & Painting', 'Paving & Driveways', 'Plumbing Services', 'Tiling & Flooring', 'General Maintenance'],
    testimonial: {
      text: 'Sinqobile Construction built a beautiful patio and braai area at our Fourways home. Excellent workmanship and great communication throughout.',
      author: 'Andrew Mitchell',
      location: 'Lonehill, Fourways'
    },
    localInfo: 'Fourways is one of Johannesburg\'s fastest-growing suburbs, home to Fourways Mall, numerous residential estates, and a mix of modern cluster developments and freestanding homes. Our head office is based in Fourways (Broadacres Drive), making this our home turf. We have deep knowledge of local estates — Dainfern, Lonehill, Cedar Lakes, Chartwell — and their specific architectural requirements. Building plans go through the City of Johannesburg. Fourways construction costs are comparable to Sandton at R10,000–R20,000/m².',
    faqs: [
      { question: 'Is Sinqobile Construction based in Fourways?', answer: 'Yes. Our head office is at The William 1, Broadacres Drive, Fourways, Sandton 2191. This means we have the fastest response times for Fourways projects and deep knowledge of local estates, suburbs, and council requirements. We have completed 65+ projects in the Fourways area alone.' },
      { question: 'Do you work in Dainfern and other Fourways estates?', answer: 'Yes. We have completed projects in Dainfern, Lonehill, Cedar Lakes, Chartwell, Pineslopes, and other Fourways estates. We are familiar with estate architectural guidelines and homeowners\' association requirements. We coordinate with estate managers to ensure all building rules are met before starting work.' },
      { question: 'What construction work is common in Fourways?', answer: 'The most requested services in Fourways are home extensions (extra bedrooms, granny flats), patio and braai area construction, boundary wall and fencing upgrades, kitchen and bathroom renovations, and painting. Estate properties often require exterior upgrades to comply with estate standards. New cluster developments sometimes need post-handover modifications and improvements.' },
    ],
  },
  'roodepoort': {
    name: 'Roodepoort',
    description: 'Dependable construction and building services in Roodepoort. Sinqobile Construction has completed 55+ projects across Roodepoort, from home renovations to new builds, with quality workmanship guaranteed.',
    suburbs: ['Florida', 'Honeydew', 'Ruimsig', 'Wilgeheuwel', 'Constantia Kloof', 'Little Falls', 'Horison', 'Weltevredenpark'],
    projects: 55,
    rating: 4.7,
    highlights: [
      'Serving all Roodepoort suburbs',
      '55+ projects completed across Roodepoort',
      'Familiar with Roodepoort municipal requirements',
      'Quick response times throughout Roodepoort',
      'Quality construction at competitive rates'
    ],
    services: ['Residential Building & Extensions', 'Home Renovations', 'Roofing & Waterproofing', 'Plastering & Painting', 'Paving & Driveways', 'Plumbing Services', 'Tiling & Flooring', 'General Maintenance'],
    testimonial: {
      text: 'Very impressed with the renovation work Sinqobile Construction did on our Roodepoort property. Professional, affordable, and high quality.',
      author: 'Thabo Molefe',
      location: 'Honeydew, Roodepoort'
    },
    localInfo: 'Roodepoort is a large residential area on Johannesburg\'s western edge, offering some of the most affordable property in the greater Johannesburg area. Suburbs like Honeydew, Ruimsig, and Weltevredenpark have seen significant development in recent years. The area\'s lower property prices make renovations and extensions an excellent investment — adding a granny flat or extra bedroom delivers strong ROI. Building plans go through the City of Johannesburg. Roodepoort construction costs are among the most competitive in Gauteng at R8,000–R16,000/m².',
    faqs: [
      { question: 'How much does building cost in Roodepoort?', answer: 'Construction in Roodepoort costs R8,000–R16,000 per square metre in 2026 — among the most competitive rates in Gauteng. Renovations cost R6,000–R15,000/m². The lower property values compared to Sandton and Fourways make Roodepoort an excellent area for renovation investment, as upgrades deliver strong returns relative to property price.' },
      { question: 'Is it worth renovating in Roodepoort?', answer: 'Yes. Roodepoort property prices are rising as more families and young professionals move to the area for affordability. A well-executed kitchen renovation (R50,000–R150,000) or granny flat addition (R300,000–R600,000) can significantly increase your property value and generate rental income. The lower base construction costs in Roodepoort mean better ROI compared to premium suburbs.' },
      { question: 'Which Roodepoort suburbs do you serve?', answer: 'We serve all Roodepoort suburbs: Florida, Honeydew, Ruimsig, Wilgeheuwel, Constantia Kloof, Little Falls, Horison, Weltevredenpark, Strubens Valley, Radiokop, and surrounding areas. Our Fourways base is a 15–20 minute drive from most Roodepoort suburbs.' },
    ],
  }
}

// SEO metadata per area
const areaSEO: Record<string, { title: string; description: string }> = {
  'johannesburg': {
    title: 'Builders in Johannesburg | Construction Services JHB - Sinqobile',
    description: 'Trusted builders in Johannesburg. NHBRC registered, 150+ projects, 4.9★ rated. Building, renovations, paving, plumbing & more across all JHB suburbs. Free quotes — +27 82 868 8396',
  },
  'sandton': {
    title: 'Builders in Sandton | Construction & Renovation - Sinqobile',
    description: 'Premium builders in Sandton. NHBRC registered, 120+ projects, 4.9★ rated. Luxury renovations, extensions & construction across Morningside, Sandhurst, Hyde Park & more. Free quotes — +27 82 868 8396',
  },
  'pretoria': {
    title: 'Builders Pretoria | NHBRC Registered, 100+ Projects - Sinqobile',
    description: 'Trusted builders in Pretoria & Centurion. NHBRC registered, 100+ projects, 4.8★ rated. Renovations, new builds, roofing, paving & plumbing across Pretoria East & West. Free quotes — +27 82 868 8396',
  },
  'centurion': {
    title: 'Builders in Centurion | Renovations & Construction - Sinqobile',
    description: 'Trusted builders in Centurion. NHBRC registered, 80+ projects, 4.9★ rated. Renovations, extensions & new builds across Eldoraigne, Irene, Lyttelton & all suburbs. Free quotes — +27 82 868 8396',
  },
  'midrand': {
    title: 'Builders in Midrand | NHBRC Registered, 90+ Projects - Sinqobile',
    description: 'Professional builders in Midrand. NHBRC registered, 90+ projects, 4.8★ rated. Waterfall, Kyalami, Carlswald, Halfway House & all Midrand suburbs. Free quotes — +27 82 868 8396',
  },
  'randburg': {
    title: 'Builders in Randburg | NHBRC Registered Contractors - Sinqobile',
    description: 'Expert builders in Randburg. NHBRC registered, 70+ projects, 4.9★ rated. Northcliff, Linden, Ferndale, Northriding & all Randburg suburbs. Free quotes — +27 82 868 8396',
  },
  'fourways': {
    title: 'Builders in Fourways | Construction & Renovations - Sinqobile',
    description: 'Quality builders in Fourways & surrounding estates. 65+ projects across Dainfern, Lonehill, Cedar Lakes & more. Free quotes — +27 82 868 8396',
  },
  'roodepoort': {
    title: 'Construction Services Roodepoort | Builders - Sinqobile Construction',
    description: 'Dependable construction services in Roodepoort. 55+ projects across Honeydew, Ruimsig, Florida & more. Competitive rates. Free quotes — +27 82 868 8396',
  },
}

export async function generateStaticParams() {
  return Object.keys(locationData).map((area) => ({ area }))
}

export async function generateMetadata({ params }: AreaPageProps): Promise<Metadata> {
  const location = locationData[params.area]
  const seo = areaSEO[params.area]

  if (!location) return {}

  const title = seo?.title || `Construction Services ${location.name} | Sinqobile Construction`
  const description = seo?.description || `Professional construction services in ${location.name}. ${location.projects}+ projects completed. Free quotes — +27 82 868 8396`

  const siteUrl = 'https://www.sinqobileconstruction.co.za'

  return {
    title,
    description,
    alternates: {
      canonical: `${siteUrl}/${params.lang}/areas/${params.area}`,
      languages: {
        'en': `${siteUrl}/en/areas/${params.area}`,
        'af': `${siteUrl}/af/areas/${params.area}`,
        'zu': `${siteUrl}/zu/areas/${params.area}`,
        'st': `${siteUrl}/st/areas/${params.area}`,
        'x-default': `${siteUrl}/en/areas/${params.area}`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${siteUrl}/${params.lang}/areas/${params.area}`,
      siteName: 'Sinqobile Construction',
      type: 'website',
      images: [{
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: `Construction Services in ${location.name} | Sinqobile Construction`,
      }],
    },
    other: {
      // v2.1 Phase 8 — freshness signal; per-area when retrofitted, fallback otherwise.
      'article:modified_time': location.phaseDExtras?.dateModified || '2026-04-01',
    },
  }
}

// ISR: regenerate area pages daily
export const revalidate = 86400

export default async function AreaDetailPage({ params: { lang, area } }: AreaPageProps) {
  const dict = await getDictionary(lang)
  const ap = (dict as any).areaPage as Record<string, string>
  const location = locationData[area]

  if (!location) {
    notFound()
  }

  // v2.1 Phase 8/9 extras — data-driven, per-area.
  // Only retrofitted areas (currently: johannesburg) have this populated.
  // Other areas degrade gracefully until their own retrofit runs.
  const phaseD = location.phaseDExtras

  // Reviews for the area-level ReviewWall. The getReviews() helper matches by
  // `area` exactly, but reviews are tagged with specific suburbs (Sandton,
  // Midrand, etc.). For Johannesburg, we union the metro suburbs so the wall
  // shows representative work across JHB rather than only reviews literally
  // tagged 'Johannesburg'. Map `area` → `location` for the ReviewWall card.
  const JHB_METRO_AREAS = new Set([
    'Johannesburg', 'Sandton', 'Randburg', 'Fourways', 'Midrand', 'Roodepoort',
  ])
  const areaReviewsRaw = phaseD
    ? (area === 'johannesburg'
        ? getReviews({ limit: 24, lang }).filter((r) => r.area && JHB_METRO_AREAS.has(r.area)).slice(0, 6)
        : getReviews({ area: location.name, limit: 6, lang }))
    : []
  const areaReviews = areaReviewsRaw.map((r) => ({
    author: r.author,
    rating: r.rating,
    date: r.date,
    text: r.text,
    serviceType: r.serviceType,
    location: r.area,
  }))
  const SITE_URL = 'https://www.sinqobileconstruction.co.za'

  // Legacy area Service schema — kept as the always-on baseline so non-retrofitted
  // area pages (sandton/pretoria/etc.) still emit a Service + AggregateRating.
  const areaSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE_URL}/${lang}/areas/${area}#service`,
    name: `Construction Services in ${location.name}`,
    description: location.description,
    url: `${SITE_URL}/${lang}/areas/${area}`,
    provider: {
      '@type': 'GeneralContractor',
      '@id': `${SITE_URL}/#localbusiness`,
    },
    areaServed: {
      '@type': 'City',
      name: location.name,
      containedInPlace: { '@type': 'State', name: 'Gauteng' },
    },
    serviceType: 'General Construction',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: String(location.rating),
      reviewCount: '127',
    },
  }

  // v2.1 Phase 8 — Place schema for retrofitted areas. Scopes a Schema.org Place
  // to the area with addressLocality, geo and areaServed=suburbs, layered with
  // the LocalBusiness emitted site-wide via layout.tsx and the rich Service
  // schema below. Only emitted when phaseDExtras is populated.
  const placeSchema = phaseD && location.geo ? {
    '@context': 'https://schema.org',
    '@type': 'Place',
    '@id': `${SITE_URL}/${lang}/areas/${area}#place`,
    name: `Sinqobile Construction — ${location.name}`,
    description: phaseD.directAnswer,
    url: `${SITE_URL}/${lang}/areas/${area}`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: location.name,
      addressRegion: 'Gauteng',
      addressCountry: 'ZA',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: location.geo.latitude,
      longitude: location.geo.longitude,
    },
    containsPlace: location.suburbs.map((s) => ({ '@type': 'Place', name: s })),
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: String(location.rating),
      reviewCount: '127',
      bestRating: '5',
      worstRating: '1',
    },
  } : null

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(areaSchema) }}
      />

      {/* v2.1 Phase 8 — Place schema scoped to the area (only when retrofitted) */}
      {placeSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(placeSchema) }}
        />
      )}

      {/* v2.1 Phase 8 — rich Service schema (dateModified, audienceType,
          priceRange, AggregateRating, speakable, areaServed = JHB + suburbs) */}
      {phaseD && (
        <SchemaMarkup
          type="service"
          lang={lang}
          data={{
            slug: `../areas/${area}`,
            serviceName: phaseD.expertCardLabel,
            name: phaseD.expertCardLabel,
            description: phaseD.directAnswer,
            dateModified: phaseD.dateModified,
            audienceType: phaseD.audienceType,
            priceRange: { min: phaseD.priceRangeMin, max: phaseD.priceRangeMax },
          }}
        />
      )}

      {/* v2.1 Phase 8 — BreadcrumbList schema (Home → Service Areas → This area).
          Legacy inline FAQPage schema is emitted further down in the FAQ
          section — when phaseD is populated we replace it with the richer
          FAQPage via SchemaMarkup (speakable + author=Organization). */}
      {phaseD && (
        <SchemaMarkup
          type="breadcrumb"
          lang={lang}
          data={{
            items: [
              { name: 'Home', url: `${SITE_URL}/${lang}` },
              { name: 'Service Areas', url: `${SITE_URL}/${lang}/areas` },
              { name: location.name, url: `${SITE_URL}/${lang}/areas/${area}` },
            ],
          }}
        />
      )}

      {/* v2.1 Phase 8 — rich FAQPage schema (speakable + author=Organization)
          when retrofitted. Replaces the legacy inline FAQ script further down. */}
      {phaseD && location.faqs && location.faqs.length > 0 && (
        <SchemaMarkup
          type="faq"
          lang={lang}
          data={{ questions: location.faqs }}
        />
      )}

      <Breadcrumb
        items={[
          { label: ap?.serviceAreasLabel || 'Service Areas', href: `/${lang}/areas` },
          { label: location.name, href: `/${lang}/areas/${area}` }
        ]}
        lang={lang}
        dict={dict}
      />

      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <MapPin size={32} className="text-yellow-400" />
                <h1 className="font-heading text-4xl md:text-5xl font-bold">
                  {ap?.constructionServicesIn || 'Construction Services in'} {location.name}
                </h1>
              </div>
              {/* v2.1 Phase 8 — direct-answer block (speakable, lifts into AI overviews + voice).
                  Per-area phaseDExtras.directAnswer; falls back to legacy description. */}
              {phaseD?.directAnswer ? (
                <p
                  data-speakable="summary"
                  className="service-summary text-lg md:text-xl mb-6 max-w-3xl mx-auto leading-relaxed"
                >
                  {phaseD.directAnswer}
                </p>
              ) : (
                <p className="text-xl mb-6">
                  {location.description}
                </p>
              )}
              <div className="flex flex-wrap justify-center gap-6 text-lg">
                <div className="flex items-center space-x-2">
                  <Award className="text-yellow-400" size={24} />
                  <span>{location.projects}+ Projects</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="text-yellow-400" size={24} fill="currentColor" />
                  <span>{location.rating}★ Rating</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="text-yellow-400" size={24} />
                  <span>{ap?.yearsExperienceFull || '15+ Years Experience'}</span>
                </div>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+27828688396"
                  className="inline-flex items-center justify-center space-x-2 bg-accent text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
                >
                  <Phone size={20} />
                  <span>{ap?.callNowFull || 'Call Now: +27 82 868 8396'}</span>
                </a>
                <Link
                  href={`/${lang}/contact`}
                  className="inline-flex items-center justify-center space-x-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors"
                >
                  <span>{ap?.getFreeQuote || 'Get Free Quote'}</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us in Location */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary text-center mb-12">
                {ap?.whyChoose || 'Why Choose Sinqobile Construction in'} {location.name}?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {location.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="text-accent flex-shrink-0 mt-1" size={24} />
                    <span className="text-secondary text-lg">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Project Gallery — Area-specific images */}
        {areaImages[area] && areaImages[area].length > 0 && (
          <section className="py-20 bg-lightBackground">
            <div className="container mx-auto px-4">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary text-center mb-12">
                {ap?.recentProjectsIn || 'Recent Projects in'} {location.name}
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
                {areaImages[area].slice(0, 6).map((img, index) => (
                  <div key={index} className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-md group">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 50vw, 33vw"
                      loading={index < 2 ? undefined : 'lazy'}
                    />
                  </div>
                ))}
              </div>
              <div className="text-center mt-8">
                <Link
                  href={`/${lang}/our-work`}
                  className="inline-block text-accent font-semibold hover:underline"
                >
                  {ap?.viewAllProjectsPrefix || 'View all'} {location.projects}{ap?.viewAllProjectsSuffix || '+ completed projects'} →
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* Services in Location */}
        <section className="py-20 bg-lightBackground">
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary text-center mb-12">
              {ap?.ourServicesIn || 'Our Services in'} {location.name}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {location.services.map((service, index) => {
                // Map service display name to slug for linking
                const slugMap: Record<string, string> = {
                  'Residential Building & Extensions': 'building',
                  'Home Renovations & Remodeling': 'renovation',
                  'Home Renovations': 'renovation',
                  'Roofing & Waterproofing': 'roofing',
                  'Roofing & Roof Repairs': 'roofing',
                  'Plastering & Painting': 'painting',
                  'Plastering & Skimming': 'plastering',
                  'Paving & Driveways': 'paving',
                  'Paving & Concrete Work': 'paving',
                  'Plumbing Services': 'plumbing',
                  'Plumbing & Geyser Installation': 'plumbing',
                  'Tiling & Flooring': 'tiling',
                  'General Maintenance': 'maintenance',
                  'Building Maintenance': 'maintenance',
                  'Interior & Exterior Painting': 'painting',
                  'New Home Construction': 'building',
                  'Modern Extensions & Additions': 'extensions',
                  'Luxury Home Renovations': 'renovation',
                  'High-End Finishes & Tiling': 'tiling',
                  'Premium Roofing Solutions': 'roofing',
                  'Designer Paving & Landscaping': 'paving',
                  'Smart Home Integration': 'electrical',
                  'Commercial Office Fit-outs': 'renovation',
                  'Property Maintenance': 'maintenance',
                }
                const slug = slugMap[service]
                return (
                  <Link
                    key={index}
                    href={slug ? `/${lang}/services/${slug}` : `/${lang}/services`}
                    className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow text-center"
                  >
                    <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="text-accent" size={24} />
                    </div>
                    <h3 className="font-semibold text-secondary">{service}</h3>
                  </Link>
                )
              })}
            </div>
            <div className="text-center mt-12">
              <Link
                href={`/${lang}/services`}
                className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                {ap?.viewAllServices || 'View All Services'}
              </Link>
            </div>
          </div>
        </section>

        {/* Suburbs Covered */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary text-center mb-12">
                {ap?.suburbsWeServe || 'Suburbs We Serve in'} {location.name}
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {location.suburbs.map((suburb) => (
                  <div key={suburb} className="bg-white rounded-lg p-4 shadow-md text-center">
                    <MapPin className="text-accent mx-auto mb-2" size={20} />
                    <p className="font-medium text-secondary">{suburb}</p>
                  </div>
                ))}
              </div>
              <p className="text-center text-secondary mt-8">
                {ap?.moreSuburbsText || 'And many more suburbs in this area. Call us to confirm we serve your suburb!'}
              </p>
            </div>
          </div>
        </section>

        {/* Local Info */}
        {location.localInfo && (
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary text-center mb-8">
                  {ap?.buildingConstructionIn || 'Building & Construction in'} {location.name}
                </h2>
                <p className="text-secondary text-lg leading-relaxed">
                  {location.localInfo}
                </p>
              </div>
            </div>
          </section>
        )}

        {/* v2.1 Phase 8 — Suburb / scope pricing comparison table.
            Data-driven, only renders for areas with phaseDExtras.comparisonTable. */}
        {phaseD?.comparisonTable && (
          <section className="py-20 bg-lightBackground">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4 text-center">
                  {phaseD.comparisonTable.title}
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
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary mb-8 text-center">
                  Key Facts About {phaseD.expertCardLabel}
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

        {/* v2.1 Phase 9 — Expert / founder card above FAQ (only for retrofitted areas). */}
        {phaseD && (
          <section className="py-12 bg-background">
            <div className="container mx-auto px-4 max-w-5xl">
              <ExpertCard
                serviceName={phaseD.expertCardLabel}
                lang={lang}
              />
            </div>
          </section>
        )}

        {/* FAQ Section */}
        {location.faqs && location.faqs.length > 0 && (
          <section className="py-20 bg-lightBackground">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary text-center mb-10">
                  {ap?.constructionFaqIn || 'Construction FAQ —'} {location.name}
                </h2>
                <div className="space-y-4">
                  {location.faqs.map((faq, i) => (
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
                        mainEntity: location.faqs.map(faq => ({
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

        {/* Testimonial */}
        <section className="py-20 bg-primary text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <Star className="text-yellow-400 mx-auto mb-6" size={48} fill="currentColor" />
              <blockquote className="text-xl md:text-2xl mb-6 italic">
                "{location.testimonial.text}"
              </blockquote>
              <div className="font-semibold text-lg">
                <p>{location.testimonial.author}</p>
                <p className="text-yellow-400">{location.testimonial.location}</p>
              </div>
            </div>
          </div>
        </section>

        {/* v2.1 Phase 8 — ReviewWall (individual Review schemas, paired with
            AggregateRating already in LocalBusiness + Place + Service schema). */}
        {phaseD && areaReviews.length > 0 && (
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4 max-w-6xl">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-10 text-center">
                {`What our ${location.name} clients say`}
              </h2>
              <ReviewWall
                serviceName={phaseD.expertCardLabel}
                reviews={areaReviews}
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
                position="area-page-end"
                lang={lang}
                headline={phaseD.strategyCtaHeadline}
                subheadline={phaseD.strategyCtaSubheadline}
              />
            </div>
          </section>
        )}

        {/* Trust Badges */}
        <section className="py-20 bg-lightBackground">
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-3xl font-bold text-primary text-center mb-12">
              {ap?.trustedPartnerIn || 'Trusted Construction Partner in'} {location.name}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="text-accent" size={32} />
                </div>
                <h3 className="font-bold text-secondary mb-2">{ap?.fullyInsured || 'Fully Insured'}</h3>
                <p className="text-sm text-gray-600">{ap?.comprehensiveCoverage || 'Comprehensive coverage'}</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="text-accent" size={32} />
                </div>
                <h3 className="font-bold text-secondary mb-2">{ap?.yearsExperience || '15+ Years'}</h3>
                <p className="text-sm text-gray-600">{ap?.industryExperience || 'Industry experience'}</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="text-accent" size={32} />
                </div>
                <h3 className="font-bold text-secondary mb-2">{ap?.qualityGuaranteed || 'Quality Guaranteed'}</h3>
                <p className="text-sm text-gray-600">{ap?.workmanshipWarranty || 'Workmanship warranty'}</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="text-accent" size={32} fill="currentColor" />
                </div>
                <h3 className="font-bold text-secondary mb-2">{location.rating}★ Rating</h3>
                <p className="text-sm text-gray-600">{ap?.customerSatisfaction || 'Customer satisfaction'}</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-accent text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              {ap?.readyToStart || 'Ready to Start Your Project in'} {location.name}?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              {ap?.contactToday || 'Contact Sinqobile Construction today for a free consultation and quote.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+27828688396"
                className="inline-flex items-center justify-center space-x-2 bg-white text-secondary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                <Phone size={20} />
                <span>{ap?.callFull || 'Call: +27 82 868 8396'}</span>
              </a>
              <Link
                href={`/${lang}/contact`}
                className="inline-flex items-center justify-center space-x-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-accent transition-colors"
              >
                <span>{ap?.requestFreeQuote || 'Request Free Quote'}</span>
              </Link>
            </div>
            <p className="text-sm text-white/60 mt-6">
              {phaseD?.dateModified
                ? `Last updated: ${phaseD.dateModified}`
                : (ap?.lastUpdated || 'Last updated: April 2026')}
            </p>
          </div>
        </section>
      </div>
    </>
  )
}