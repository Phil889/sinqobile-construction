/**
 * Unique, research-driven content for each service page.
 * Each entry provides ~800+ words of unique body content.
 * v2 Workflow: content based on keyword research, SERP analysis, competitor deep dives.
 */

export interface ServiceContent {
  slug: string
  intro: string
  subServices: { name: string; description: string }[]
  pricingNote: string
  pricingTable: { item: string; range: string }[]
  process: { step: string; title: string; description: string }[]
  faqs: { question: string; answer: string }[]
  whyChoose: string[]
  materialsNote?: string
}

export const serviceContentData: Record<string, ServiceContent> = {
  'building': {
    slug: 'building',
    intro: `Sinqobile Construction is an NHBRC-registered building contractor serving Johannesburg and the greater Gauteng region. Over the past 15 years, we have completed more than 500 residential and commercial building projects — from single-storey family homes in Fourways to multi-unit developments in Sandton. Every new home we build is enrolled with the NHBRC at least 15 days before construction begins, as required by South African law. This enrolment gives you a 5-year structural warranty backed by the National Home Builders Registration Council. Our team includes qualified bricklayers, structural engineers, and project managers who oversee every phase from foundation to handover. We work with SACAP-registered architects and municipal-approved plans to ensure full compliance with the National Building Regulations (SANS 10400).`,
    subServices: [
      {
        name: 'New Home Construction',
        description: 'Complete residential builds from foundation to finishing. We handle plan submission, council approval, site clearing, foundations, brickwork, roofing, plumbing, electrical, plastering, tiling, and painting — all under one roof with a single project manager.'
      },
      {
        name: 'Home Extensions & Additions',
        description: 'Extra bedrooms, second-storey additions, granny flats, and garage conversions. All extensions include council-approved plans, structural engineering sign-off, and seamless integration with your existing home.'
      },
      {
        name: 'Commercial & Retail Construction',
        description: 'Office fit-outs, retail spaces, warehouse construction, and commercial renovations across Gauteng. We manage multi-trade coordination for projects from R500K to R10M+.'
      },
      {
        name: 'Structural Repairs & Rebuilds',
        description: 'Foundation underpinning, cracked wall repairs, load-bearing wall modifications, and structural concrete work. All structural work is signed off by a registered engineer.'
      },
      {
        name: 'Boundary Walls & Security Structures',
        description: 'Precast and brick boundary walls, guard houses, and security upgrades. We install electric fence-ready walls with proper drainage to prevent damp.'
      },
    ],
    pricingNote: 'Construction costs in Johannesburg range from R10,000 to R20,000 per square metre in 2026, depending on the build type, materials, and finishes. Kitchens and bathrooms typically cost 20–40% more than the average rate due to plumbing, tiling, and fixture costs. Professional fees (architect 5–8%, engineer 2–4%, quantity surveyor 2–3%) are additional.',
    pricingTable: [
      { item: 'Standard residential build', range: 'R10,000 – R14,000 /m²' },
      { item: 'Medium-spec residential', range: 'R14,000 – R18,000 /m²' },
      { item: 'Luxury/high-end residential', range: 'R18,000 – R25,000+ /m²' },
      { item: 'Home extension (single storey)', range: 'R12,000 – R16,000 /m²' },
      { item: 'Second-storey addition', range: 'R14,000 – R20,000 /m²' },
      { item: 'Granny flat (50–60 m²)', range: 'R550,000 – R900,000' },
      { item: 'Boundary wall (per linear metre)', range: 'R1,200 – R2,500' },
    ],
    process: [
      {
        step: '1',
        title: 'Free Site Assessment',
        description: 'We visit your property, discuss your vision, take measurements, and assess soil conditions and access. No obligation — you receive a written summary within 48 hours.'
      },
      {
        step: '2',
        title: 'Plans & Approvals',
        description: 'We coordinate with a SACAP-registered architect to draw plans, submit to your local municipality, and manage the approval process (typically 4–12 weeks in Johannesburg).'
      },
      {
        step: '3',
        title: 'Detailed Quote & Contract',
        description: 'You receive an itemised quote breaking down materials, labour, professional fees, and contingency. Payment milestones are agreed before any work begins.'
      },
      {
        step: '4',
        title: 'Construction',
        description: 'A dedicated project manager oversees daily operations. You receive weekly photo updates and progress reports. All work follows NHBRC technical standards.'
      },
      {
        step: '5',
        title: 'Inspection & Handover',
        description: 'Final walkthrough with a detailed snag list. We fix any issues before handover and provide your NHBRC enrollment certificate and warranty documentation.'
      },
    ],
    faqs: [
      {
        question: 'How much does it cost to build a house in Johannesburg in 2026?',
        answer: 'A standard 3-bedroom home (120–150 m²) in Johannesburg costs approximately R1.2M to R2.5M in 2026, based on current rates of R10,000–R20,000 per square metre. Luxury builds with premium finishes can exceed R25,000/m². These figures include construction only — professional fees (architect, engineer, quantity surveyor) add 10–15% on top. We provide free, itemised quotes so you know exactly what each component costs before work begins.'
      },
      {
        question: 'Do I need approved building plans before construction?',
        answer: 'Yes. South African law requires municipal-approved building plans for any structural work, new builds, or major renovations. Plans must be drawn by a SACAP-registered professional and submitted to your local council. In Johannesburg, approval typically takes 4–12 weeks. We coordinate the entire plans process for you, from architect engagement to council submission and follow-up.'
      },
      {
        question: 'What does NHBRC registration mean for my new home?',
        answer: 'NHBRC (National Home Builders Registration Council) registration is a legal requirement for all home builders in South Africa. When you build with an NHBRC-registered contractor like Sinqobile Construction, your home is enrolled with the council before construction starts. This gives you a 5-year warranty on structural defects and ensures the builder meets national construction standards. You can verify our registration at nhbrc.org.za.'
      },
      {
        question: 'How long does it take to build a house in Johannesburg?',
        answer: 'A standard 3-bedroom home takes 4–6 months from foundation to completion. Larger or more complex designs may take 6–12 months. This excludes the plan approval period (4–12 weeks). Key factors affecting timeline include weather conditions during Gauteng\'s rainy season (October–March), material availability, and municipal inspection scheduling.'
      },
      {
        question: 'What areas in Gauteng do you build in?',
        answer: 'We build across the entire Gauteng province, including Johannesburg CBD, Sandton, Fourways, Randburg, Midrand, Centurion, Pretoria, Roodepoort, and surrounding areas. Our head office is in Fourways, Sandton, which gives us quick access to projects across the region. We have completed 500+ projects spanning East Rand, West Rand, and Tshwane.'
      },
    ],
    whyChoose: [
      'NHBRC registered — every new home enrolled with a 5-year structural warranty',
      'SACAP-compliant plans — we coordinate architects and council approvals end-to-end',
      '500+ completed projects across Gauteng over 15 years',
      'Single point of contact — one project manager from start to finish',
      'Itemised, fixed-price quotes with milestone payments (no surprises)',
      'Fully insured with comprehensive construction and liability cover',
    ],
    materialsNote: 'We source materials from established Gauteng suppliers including Builders Warehouse, Corobrik, Afrimat, and PPC Cement. For premium builds, we work with imported finishes from your preferred suppliers. All materials are specified in your quote with brand names and quantities — nothing is left vague.',
  },
}

export function getServiceContent(slug: string): ServiceContent | undefined {
  return serviceContentData[slug]
}
