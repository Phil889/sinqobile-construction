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

  'plumbing': {
    slug: 'plumbing',
    intro: `Sinqobile Construction provides professional plumbing services across Johannesburg and Gauteng — from emergency burst pipe repairs to complete geyser installations and plumbing compliance certificates. Our licensed plumbers are available for 24/7 emergency call-outs, with typical response times of 2–4 hours across the greater Johannesburg area. Whether you need a leaking tap fixed in Sandton, a geyser replaced in Fourways, or a full plumbing installation for a new build in Midrand, our team has 15+ years of experience handling residential and commercial plumbing projects. We carry comprehensive liability insurance, and all our work complies with SANS 10252 (water supply installations) and municipal by-laws. Every job comes with a workmanship warranty and a detailed invoice — no hidden call-out fees, no surprises.`,
    subServices: [
      {
        name: 'Emergency Plumbing (24/7)',
        description: 'Burst pipes, major leaks, geyser failures, overflowing toilets, and sewer backups. Our emergency team responds within 2–4 hours across Johannesburg, Sandton, Midrand, Pretoria, and surrounding areas. We carry common repair parts on our vehicles to resolve most emergencies in a single visit.'
      },
      {
        name: 'Geyser Installation & Repair',
        description: 'Electric, gas, solar, and heat pump geyser installation, replacement, and repair. We supply and fit all major brands (Kwikot, Franke, Defy, Bosch) and handle the full process: removal of old unit, installation, pressure testing, and COC certification where required. Solar geyser systems include panel mounting, circulation pump setup, and integration with your existing plumbing.'
      },
      {
        name: 'Leak Detection & Repair',
        description: 'Non-invasive leak detection using pressure testing and thermal imaging to locate hidden leaks in walls, floors, and underground pipes without unnecessary demolition. We repair copper, PVC, and PEX piping and can reline damaged sections to avoid full pipe replacement.'
      },
      {
        name: 'Drain Cleaning & Unblocking',
        description: 'Blocked drains, slow-draining sinks, and sewer line backups cleared with professional drain rods, high-pressure jetting, and CCTV camera inspections. We identify the root cause — tree root intrusion, grease build-up, or collapsed pipe sections — and recommend a permanent fix, not just a temporary clear.'
      },
      {
        name: 'Bathroom & Kitchen Plumbing',
        description: 'Complete rough-in and fit-out plumbing for new bathrooms and kitchens. Basin, bath, shower, toilet, and dishwasher connections. We coordinate with tilers and builders to ensure correct waste positions and waterproofing before tiling begins.'
      },
      {
        name: 'Plumbing Compliance Certificates (COC)',
        description: 'Plumbing COC inspections and certificates as required when selling a property or installing solar geysers. Our inspectors check water pressure, geyser safety valves, drip trays, overflow pipes, and general compliance with SANS 10252. Certificates issued same day for compliant installations.'
      },
    ],
    pricingNote: 'Plumbing costs in Johannesburg vary by job complexity, materials, and urgency. Emergency call-outs carry a higher rate than scheduled work. All prices below are indicative — we provide free, written quotes before any work begins. No hidden call-out fees.',
    pricingTable: [
      { item: 'Emergency call-out (after hours)', range: 'R500 – R1,000/hr' },
      { item: 'Standard plumbing repair (during hours)', range: 'R450 – R850/hr' },
      { item: 'Burst pipe repair', range: 'R700 – R4,000' },
      { item: 'Geyser installation (150L electric, supplied & fitted)', range: 'R5,500 – R8,000' },
      { item: 'Solar geyser system (supplied & installed)', range: 'R18,000 – R30,000' },
      { item: 'Drain unblocking (standard)', range: 'R650 – R1,500' },
      { item: 'CCTV drain inspection', range: 'R1,500 – R3,000' },
      { item: 'Plumbing COC certificate', range: 'R850 – R2,700' },
      { item: 'Toilet replacement (supplied & fitted)', range: 'R2,500 – R5,000' },
    ],
    process: [
      {
        step: '1',
        title: 'Call or WhatsApp',
        description: 'Describe your issue — we\'ll give you an immediate estimate over the phone and schedule a visit. For emergencies, our team is dispatched right away.'
      },
      {
        step: '2',
        title: 'Diagnose',
        description: 'Our plumber assesses the problem on-site, explains the cause and repair options, and gives you a fixed-price quote before starting any work.'
      },
      {
        step: '3',
        title: 'Repair',
        description: 'We complete the repair using quality parts and materials. Most standard repairs are finished in a single visit — no repeat call-outs.'
      },
      {
        step: '4',
        title: 'Test & Guarantee',
        description: 'We pressure-test the repair, clean up the work area, and provide a workmanship warranty. You receive a detailed invoice with parts and labour itemised.'
      },
    ],
    faqs: [
      {
        question: 'How much does an emergency plumber cost in Johannesburg?',
        answer: 'Emergency plumbing in Johannesburg typically costs R500–R1,000 per hour for after-hours call-outs. Standard daytime rates are R450–R850 per hour. The total cost depends on the type of repair — a burst pipe fix ranges from R700 to R4,000, while a geyser replacement costs R5,500–R8,000 including the unit. We provide a fixed-price quote on-site before starting any work, so you know the full cost upfront. There are no hidden call-out fees.'
      },
      {
        question: 'How quickly can you respond to a plumbing emergency?',
        answer: 'Our emergency plumbing team typically responds within 2–4 hours across Johannesburg, Sandton, Midrand, Fourways, Randburg, and Centurion. For areas further from our Fourways base (Pretoria, East Rand, Roodepoort), response times may be 3–5 hours. We operate 24/7 including weekends and public holidays. Call +27 82 868 8396 for immediate assistance.'
      },
      {
        question: 'How much does geyser installation cost in Johannesburg in 2026?',
        answer: 'A standard 150-litre electric geyser costs R5,500–R8,000 supplied and installed in Johannesburg in 2026. This includes removal of the old unit, fitting the new geyser, pressure testing, and a compliance check. Solar geyser systems range from R18,000–R30,000 for a complete installation including panels, circulation pump, and plumbing integration. Gas geysers cost R8,000–R15,000 installed. All installations include a manufacturer warranty on the unit and our workmanship guarantee.'
      },
      {
        question: 'Do I need a plumbing COC when selling my house?',
        answer: 'Yes. In most South African municipalities, a plumbing Certificate of Compliance (COC) is required when selling a residential property. The COC certifies that the water installation complies with SANS 10252 and municipal by-laws, including geyser safety valves, drip trays, water pressure, and absence of leaks. Our inspectors can assess your property and issue a COC same-day for compliant installations. Inspections cost R850–R2,700 depending on property size and complexity.'
      },
      {
        question: 'What plumbing areas in Johannesburg do you cover?',
        answer: 'We cover all of Johannesburg and the greater Gauteng region, including Sandton, Fourways, Randburg, Midrand, Centurion, Pretoria, Roodepoort, Soweto, the East Rand (Boksburg, Germiston, Alberton), and the West Rand. Our head office is in Fourways, Sandton, giving us fast access to the northern suburbs. We have completed plumbing projects in over 50 suburbs across Gauteng.'
      },
    ],
    whyChoose: [
      '24/7 emergency response — 2–4 hour typical arrival across Johannesburg',
      'Licensed, insured plumbers with 15+ years experience in Gauteng',
      'Fixed-price quotes on-site — no hidden call-out fees or surprise charges',
      'All major geyser brands supplied and installed (Kwikot, Franke, Defy, Bosch)',
      'Plumbing COC certificates issued same day for compliant properties',
      'Single-visit repairs — we carry common parts on our vehicles',
    ],
  },

  'renovation': {
    slug: 'renovation',
    intro: `Sinqobile Construction is a specialist renovation contractor serving Johannesburg and the greater Gauteng region. Over 15 years we have completed 500+ renovation projects — from single-bathroom makeovers in Sandton to full-house remodels in Fourways and Midrand. Home renovation in Johannesburg costs between R7,000 and R20,000 per square metre in 2026, depending on the scope, finishes, and structural work involved. We manage every trade under one roof: demolition, structural modifications, plumbing, electrical, plastering, tiling, painting, and final finishes — all coordinated by a dedicated project manager. Our team works with SACAP-registered architects when structural plans are needed, and we handle council approvals so you don't have to navigate municipal red tape. Every renovation starts with a free, no-obligation site assessment and ends with a detailed walkthrough before handover.`,
    subServices: [
      {
        name: 'Kitchen Renovations',
        description: 'Complete kitchen remodels including demolition of existing layout, new cabinetry, countertops (granite, quartz, Caesarstone), plumbing relocation, electrical upgrades, tiling, and appliance installation. We design functional layouts that maximise storage and work-triangle efficiency. Kitchen renovations in Johannesburg cost R60,000–R300,000 depending on size and finishes.'
      },
      {
        name: 'Bathroom Renovations',
        description: 'Full bathroom upgrades from strip-out to completion: waterproofing, new plumbing rough-in, underfloor heating, wall and floor tiling, shower installation (frameless glass, walk-in, or standard), vanity units, and fixtures. Small bathrooms (under 5 m²) cost R15,000–R45,000, medium bathrooms (5–10 m²) cost R45,000–R90,000.'
      },
      {
        name: 'Whole-House Renovations',
        description: 'Complete home transformations including open-plan conversions, structural wall removal (with engineer sign-off), new room layouts, updated plumbing and electrical throughout, replastering, new flooring, and full interior/exterior painting. Ideal for older homes in established Johannesburg suburbs like Bryanston, Melville, and Parkhurst.'
      },
      {
        name: 'Open-Plan Conversions',
        description: 'Remove load-bearing or partition walls to create modern open-plan living spaces. All structural modifications are designed by a registered engineer and submitted for council approval. We install steel beams or lintels, make good surrounding finishes, and match existing flooring and paint so the conversion looks seamless.'
      },
      {
        name: 'Garage & Outbuilding Conversions',
        description: 'Convert unused garages into home offices, granny flats, entertainment rooms, or rental units. Includes insulation, electrical and plumbing rough-in, plastering, flooring, and finishing. Council-approved plans included where required.'
      },
    ],
    pricingNote: 'Renovation costs in Johannesburg range from R7,000 to R20,000 per square metre in 2026. Kitchen and bathroom renovations cost more per square metre than living areas due to plumbing, tiling, and waterproofing requirements. Sandton and northern suburb renovations tend to be 10–15% higher than other Gauteng areas due to premium material expectations. All quotes are itemised and fixed-price.',
    pricingTable: [
      { item: 'Kitchen renovation (mid-range, 14 m²)', range: 'R60,000 – R190,000' },
      { item: 'Kitchen renovation (high-end)', range: 'R190,000 – R300,000' },
      { item: 'Bathroom renovation (small, under 5 m²)', range: 'R15,000 – R45,000' },
      { item: 'Bathroom renovation (medium, 5–10 m²)', range: 'R45,000 – R90,000' },
      { item: 'Full house renovation (per m²)', range: 'R7,000 – R20,000' },
      { item: 'Open-plan conversion (wall removal + make-good)', range: 'R25,000 – R80,000' },
      { item: 'Garage conversion to granny flat', range: 'R120,000 – R350,000' },
      { item: 'Interior painting (per room, walls + ceiling)', range: 'R3,000 – R6,000' },
    ],
    process: [
      {
        step: '1',
        title: 'Free Site Assessment',
        description: 'We visit your home, discuss your vision, assess the existing structure, and identify any issues (damp, cracks, outdated wiring) that should be addressed during the renovation.'
      },
      {
        step: '2',
        title: 'Design & Plans',
        description: 'For structural changes, we engage a SACAP architect to draw plans and submit to your municipality. For cosmetic renovations, we create a detailed scope of work with material specifications and 3D visualisations where helpful.'
      },
      {
        step: '3',
        title: 'Fixed-Price Quote',
        description: 'You receive an itemised quote breaking down demolition, structural work, plumbing, electrical, tiling, painting, and materials. Payment milestones are agreed — typically 30% deposit, stage payments, and 10% on completion.'
      },
      {
        step: '4',
        title: 'Renovation',
        description: 'A dedicated project manager coordinates all trades on a daily schedule. You receive weekly photo updates. We protect floors and furniture in occupied homes and manage dust and noise to minimise disruption.'
      },
      {
        step: '5',
        title: 'Walkthrough & Handover',
        description: 'Final inspection with a detailed snag list. We address every item before handover and provide warranty documentation on workmanship and materials. Post-renovation cleaning is included.'
      },
    ],
    faqs: [
      {
        question: 'How much does a home renovation cost in Johannesburg in 2026?',
        answer: 'Home renovation in Johannesburg costs between R7,000 and R20,000 per square metre in 2026. A mid-range renovation of a 146 m² home totals approximately R1.0M–R1.9M. Kitchen renovations range from R60,000 to R300,000, and bathroom renovations from R15,000 to R90,000 depending on size and finishes. We provide free, itemised quotes so you know the exact cost before work begins — no hidden fees or surprise extras.'
      },
      {
        question: 'How long does a full house renovation take?',
        answer: 'A full house renovation typically takes 8–16 weeks depending on the scope of work. Kitchen-only renovations take 2–4 weeks, bathroom renovations 2–3 weeks, and open-plan conversions 3–6 weeks including structural sign-off. These timelines assume council-approved plans are in place — the plans approval process adds 4–12 weeks in Johannesburg. We provide a detailed project schedule with your quote and update you weekly on progress.'
      },
      {
        question: 'Do I need building plans approved for a renovation?',
        answer: 'You need council-approved plans for any structural changes — removing walls, adding rooms, changing the roofline, or altering plumbing and drainage layouts. Cosmetic renovations (new tiles, paint, fixtures, cabinetry) do not require plans. If you are unsure, our team will assess your project during the free site visit and advise on whether plans are needed. We handle the full plans process if required.'
      },
      {
        question: 'Can I live in my house during the renovation?',
        answer: 'Yes, in most cases you can stay in your home during renovation. We phase the work room by room and protect living areas with dust barriers and floor coverings. For full-house renovations involving structural work, plumbing, or electrical rewiring, we recommend relocating for 2–4 weeks during the most disruptive phase. We will advise on the best approach during your consultation.'
      },
      {
        question: 'Why are Sandton renovation costs higher than other areas?',
        answer: 'Renovation costs in Sandton are typically 10–15% higher than other Gauteng areas for three reasons: higher property values justify premium finishes (imported tiles, stone countertops, designer fixtures), larger homes require more materials and labour, and skilled contractors in the area charge higher rates due to demand. Our Fourways base gives us competitive access to Sandton projects without the premium markup of exclusive Sandton-only contractors.'
      },
    ],
    whyChoose: [
      'All trades under one roof — plumbing, electrical, tiling, painting, carpentry managed by one team',
      'Fixed-price, itemised quotes — you approve every line item before work starts',
      'Dedicated project manager from design through handover',
      '500+ completed renovation projects across Gauteng over 15 years',
      'We handle council plan submissions and architect coordination',
      'Fully insured with comprehensive construction and liability cover',
    ],
  },

  'paving': {
    slug: 'paving',
    intro: `Sinqobile Construction is a professional paving contractor serving Johannesburg and the greater Gauteng region. Over 15 years we have completed hundreds of paving projects — from single-car driveways in Sandton to large commercial parking areas in Midrand and Centurion. Paving in Johannesburg costs between R350 and R950 per square metre in 2026, depending on the material (concrete, clay brick, cobblestone, or natural stone) and site preparation required. We handle the full scope: site excavation, compacted sub-base preparation, edge restraints, paver laying, joint filling, and sealing. Proper sub-base preparation is the single most important factor in paving longevity — we compact to engineering specifications using plate compactors and laser levelling, which prevents sinking, shifting, and water pooling that plague cheaper installations. Every project includes a workmanship guarantee and free drainage assessment.`,
    subServices: [
      {
        name: 'Driveway Paving',
        description: 'Single and double driveways in concrete, clay brick, or interlocking pavers. We excavate to 150–200 mm depth, lay compacted G5 sub-base, install edge restraints, and lay pavers on a screeded bedding course. A standard single-car driveway (30–40 m²) costs R15,000–R35,000 including all materials, labour, and finishing.'
      },
      {
        name: 'Patio & Entertainment Area Paving',
        description: 'Outdoor living spaces, braai areas, and pool surrounds in natural stone, cobblestone, or textured concrete pavers. We design drainage falls to prevent water pooling and can integrate steps, raised planters, and built-in braai foundations.'
      },
      {
        name: 'Walkway & Garden Path Paving',
        description: 'Functional and decorative pathways connecting your home to garden features, garages, and outbuildings. We offer straight-lay, herringbone, and basket-weave patterns in materials ranging from budget concrete to premium clay brick.'
      },
      {
        name: 'Commercial & Industrial Paving',
        description: 'Parking areas, loading zones, warehouse aprons, and commercial walkways. We use heavy-duty interlocking pavers rated for vehicle traffic and can install line marking and speed bumps as part of the project.'
      },
      {
        name: 'Paving Repairs & Relaying',
        description: 'Sunken, shifted, or damaged paving lifted, sub-base re-compacted, and pavers relaid. We match existing paver styles and colours where possible. Spot repairs for small areas or full relaying for large sections that have failed due to poor original sub-base work.'
      },
    ],
    pricingNote: 'Paving costs in Johannesburg vary by material, area size, and site conditions. Labour accounts for 30–40% of the total budget. Sandton and northern suburb projects tend to be 10–15% higher due to premium material preferences. All quotes include site prep, materials, labour, and finishing — no hidden extras.',
    pricingTable: [
      { item: 'Concrete pavers (supplied & laid)', range: 'R300 – R600 /m²' },
      { item: 'Clay / brick pavers (supplied & laid)', range: 'R400 – R700 /m²' },
      { item: 'Interlocking pavers (supplied & laid)', range: 'R300 – R600 /m²' },
      { item: 'Cobblestone paving', range: 'R450 – R900 /m²' },
      { item: 'Natural stone (granite, sandstone)', range: 'R450 – R1,000 /m²' },
      { item: 'Single-car driveway (30–40 m²)', range: 'R15,000 – R35,000' },
      { item: 'Double driveway (60–80 m²)', range: 'R30,000 – R65,000' },
      { item: 'Paving repair / relaying', range: 'R200 – R450 /m²' },
    ],
    process: [
      {
        step: '1',
        title: 'Free Site Visit',
        description: 'We measure the area, assess soil conditions and drainage, discuss your material preferences, and provide design recommendations. You receive a written quote within 48 hours.'
      },
      {
        step: '2',
        title: 'Site Preparation',
        description: 'We excavate to the required depth (150–200 mm), remove organic material, and install a compacted G5 or G7 crusher-run sub-base. Edge restraints are set in concrete to prevent paver creep.'
      },
      {
        step: '3',
        title: 'Paver Installation',
        description: 'Pavers are laid on a screeded bedding course in your chosen pattern. We cut pavers precisely around curves, drains, and obstacles using diamond-blade cutters for clean edges.'
      },
      {
        step: '4',
        title: 'Finishing & Handover',
        description: 'Joints are filled with kiln-dried sand or polymeric jointing sand, the surface is plate-compacted to lock pavers in place, and excess sand is swept clean. We photograph the finished work and hand over your warranty.'
      },
    ],
    faqs: [
      {
        question: 'How much does paving cost per square metre in Johannesburg in 2026?',
        answer: 'Paving in Johannesburg costs between R350 and R950 per square metre in 2026, depending on the material. Concrete pavers are most affordable at R300–R600/m², clay brick pavers cost R400–R700/m², and natural stone or cobblestone ranges from R450–R1,000/m². These prices include materials, labour, sub-base preparation, and finishing. A standard single-car driveway (30–40 m²) costs R15,000–R35,000 all-in. We provide free quotes with no obligation.'
      },
      {
        question: 'Which paving material is best for a Johannesburg driveway?',
        answer: 'Interlocking concrete pavers are the most popular choice for Johannesburg driveways — they are affordable (R300–R600/m²), handle vehicle loads well, allow rainwater drainage through the joints, and are easy to repair if individual pavers crack. Clay brick pavers cost more (R400–R700/m²) but offer a premium look and longer lifespan. Cobblestone is the luxury option at R450–R900/m². We recommend interlocking pavers for most residential driveways because they offer the best balance of cost, durability, and aesthetics.'
      },
      {
        question: 'How long does a driveway paving project take?',
        answer: 'A standard single-car driveway (30–40 m²) takes 2–3 days from excavation to handover. A double driveway (60–80 m²) takes 3–5 days. Larger projects like parking areas or full-property paving take 1–2 weeks. These timelines include site prep, sub-base compaction, paver laying, and finishing. Weather can cause delays during Gauteng\'s rainy season (October–March) — we schedule around forecasted rain where possible.'
      },
      {
        question: 'Why is sub-base preparation so important for paving?',
        answer: 'The sub-base is the compacted stone layer beneath your pavers — it carries the load and prevents sinking, shifting, and water pooling. Without a properly compacted sub-base (minimum 100 mm of G5 crusher run), pavers will settle unevenly within months, creating trip hazards and pooling water. This is the most common reason cheap paving jobs fail. We compact to engineering specifications using plate compactors and verify levels with laser equipment before laying any pavers.'
      },
      {
        question: 'Do you remove old paving before installing new?',
        answer: 'Yes, we can lift and remove existing paving, dispose of old materials, and start fresh with proper sub-base preparation. If your existing sub-base is sound, we may be able to relay new pavers on top, which saves excavation costs. We assess the condition during your free site visit and recommend the most cost-effective approach. Old pavers in good condition can sometimes be reused in garden paths or secondary areas.'
      },
    ],
    whyChoose: [
      'Engineering-grade sub-base preparation — compacted to spec with plate compactors and laser levelling',
      '15+ years of paving experience across Gauteng — driveways, patios, commercial areas',
      'All materials supplied and laid — concrete, clay brick, cobblestone, natural stone',
      'Free site visit with drainage assessment and written quote within 48 hours',
      'Workmanship guarantee on every installation',
      'Fully insured with comprehensive liability cover',
    ],
  },

  'concrete': {
    slug: 'concrete',
    intro: `Sinqobile Construction provides professional concrete services across Johannesburg and Gauteng — from residential foundations and floor slabs to reinforced retaining walls and commercial concrete structures. Over 15 years we have poured hundreds of concrete projects, working with structural engineers to ensure every foundation, slab, and wall meets SANS 10400 and NHBRC structural requirements. Concrete work is the foundation of every building — literally — and getting it wrong is expensive to fix. We use tested mix designs from reputable batching plants (PPC, Lafarge, AfriSam), vibrate all pours to eliminate air pockets, and cure slabs properly to reach design strength. Whether you need a raft foundation for a new home in Fourways, a reinforced driveway in Sandton, or retaining walls on a sloped site in Centurion, our team delivers structural concrete you can build on with confidence.`,
    subServices: [
      {
        name: 'Foundations (Raft, Strip & Pad)',
        description: 'Raft foundations for new homes, strip foundations for boundary walls, and pad foundations for columns and pergolas. All foundations are designed by a registered engineer based on soil conditions, excavated to the correct depth, reinforced with steel mesh or rebar, and poured with the specified concrete strength (typically 25–30 MPa for residential). Foundation costs in Johannesburg range from R1,200–R3,500 per square metre.'
      },
      {
        name: 'Floor Slabs & Suspended Slabs',
        description: 'Ground-floor slabs for new builds and extensions, plus suspended (upper-floor) slabs using rib-and-block or in-situ reinforced concrete. We handle formwork, reinforcing steel placement, concrete pouring, vibrating, and power-floating for a smooth finish. Ground-floor slabs typically use 25 MPa concrete on compacted fill with vapour barriers.'
      },
      {
        name: 'Concrete Driveways',
        description: 'Reinforced concrete driveways that handle vehicle loads without cracking. We excavate, compact the sub-base, lay mesh reinforcing, pour 25 MPa concrete to 100–150 mm thickness, and finish with broom texture or exposed aggregate. Expansion joints are cut at correct intervals to control cracking. Budget R300–R450/m² for a standard concrete driveway.'
      },
      {
        name: 'Retaining Walls',
        description: 'Reinforced concrete retaining walls for sloped sites, garden terracing, and boundary support. All retaining walls over 1.5 m require engineer-designed drawings. We build gravity walls, cantilever walls, and crib walls depending on soil conditions, height, and load requirements. Proper drainage behind the wall (weep holes and drainage aggregate) prevents hydrostatic pressure build-up.'
      },
      {
        name: 'Concrete Repairs & Waterproofing',
        description: 'Crack injection, spalling repair, concrete resurfacing, and waterproof coatings for existing structures. We diagnose the cause of concrete failure (settlement, rebar corrosion, poor original mix) before recommending the appropriate repair method.'
      },
    ],
    pricingNote: 'Concrete costs depend on the mix strength (MPa), volume required, reinforcing steel, and site access. Ready-mix concrete from a batching plant costs R1,800–R2,500 per cubic metre delivered in Johannesburg. Labour and formwork are additional. All quotes include a detailed breakdown of concrete volume, steel quantities, and labour.',
    pricingTable: [
      { item: 'Raft foundation (residential)', range: 'R1,200 – R2,000 /m²' },
      { item: 'Strip foundation (boundary walls)', range: 'R800 – R1,500 /lin. m' },
      { item: 'Ground-floor slab (100 mm, 25 MPa)', range: 'R450 – R800 /m²' },
      { item: 'Suspended slab (rib-and-block)', range: 'R1,500 – R2,500 /m²' },
      { item: 'Concrete driveway (reinforced, 100 mm)', range: 'R300 – R450 /m²' },
      { item: 'Retaining wall (up to 1.5 m)', range: 'R2,500 – R5,000 /lin. m' },
      { item: 'Ready-mix concrete (delivered)', range: 'R1,800 – R2,500 /m³' },
    ],
    process: [
      {
        step: '1',
        title: 'Site Assessment',
        description: 'We inspect the site, review plans and engineer drawings, assess soil conditions and access for concrete trucks, and confirm the concrete specification required.'
      },
      {
        step: '2',
        title: 'Excavation & Formwork',
        description: 'Excavate to the required depth, set up timber or steel formwork to the correct dimensions and levels, and install reinforcing steel (mesh or rebar) as per the engineer\'s design.'
      },
      {
        step: '3',
        title: 'Pour & Vibrate',
        description: 'Concrete is delivered by ready-mix truck and poured into the prepared formwork. We vibrate the concrete to remove air pockets and ensure full compaction around the reinforcing steel.'
      },
      {
        step: '4',
        title: 'Finish & Cure',
        description: 'The surface is levelled, power-floated or broom-textured as required, and cured for 7–28 days depending on the application. Formwork is struck after the concrete reaches sufficient strength.'
      },
    ],
    faqs: [
      {
        question: 'How much does a concrete foundation cost in Johannesburg in 2026?',
        answer: 'A residential raft foundation in Johannesburg costs R1,200–R2,000 per square metre in 2026, depending on soil conditions, concrete strength, and reinforcing requirements. For a 120 m² home, expect to pay R144,000–R240,000 for the foundation alone. Strip foundations for boundary walls cost R800–R1,500 per linear metre. These prices include excavation, reinforcing steel, concrete, and labour. Engineer-designed drawings are additional (typically R5,000–R15,000).'
      },
      {
        question: 'What concrete strength (MPa) do I need for a house foundation?',
        answer: 'Residential foundations in South Africa typically require 25 MPa concrete, which is the standard for most single and double-storey homes. Heavier structures or poor soil conditions may require 30 MPa. Your structural engineer specifies the required strength based on the building design and geotechnical report. We always pour the specified strength — never downgrade to save costs, as this compromises structural integrity and violates building regulations.'
      },
      {
        question: 'How long does concrete take to cure?',
        answer: 'Concrete reaches approximately 70% of its design strength after 7 days and full strength after 28 days. During curing, the slab must be kept moist — we apply curing compound or wet-cure with hessian and water. You can walk on a residential slab after 24–48 hours, but do not place heavy loads or build on it until at least 7 days. Formwork for suspended slabs is typically left in place for 14–21 days.'
      },
      {
        question: 'What is the difference between a raft foundation and strip foundation?',
        answer: 'A raft foundation is a single concrete slab that covers the entire footprint of the building — it spreads the load evenly across the ground and is ideal for weaker soils or where settlement may be uneven. A strip foundation is a narrow concrete trench that runs under the walls only — it is cheaper but requires good soil bearing capacity. Most new homes in Johannesburg use raft foundations because of the variable clay soils in Gauteng. Your engineer will recommend the appropriate type based on a soil test.'
      },
      {
        question: 'Do you supply the concrete or do I arrange it?',
        answer: 'We arrange everything. We order ready-mix concrete from established batching plants (PPC, Lafarge, AfriSam) and schedule delivery to match our pour schedule. This ensures the correct mix design, strength, and slump are delivered on time. We do not use site-mixed concrete for structural work — ready-mix from a batching plant is consistent, tested, and comes with delivery dockets that confirm the specified strength for your records and building inspector.'
      },
    ],
    whyChoose: [
      'Engineer-specified concrete — correct MPa strength, reinforcing, and mix design every time',
      'Ready-mix concrete from PPC, Lafarge, AfriSam batching plants (never site-mixed for structural)',
      '15+ years pouring foundations, slabs, and retaining walls across Gauteng',
      'Proper vibration and curing — no air pockets, no premature cracking',
      'Fully insured with comprehensive construction liability cover',
      'Free site assessment with detailed, itemised quotes',
    ],
  },

  'roofing': {
    slug: 'roofing',
    intro: `Sinqobile Construction provides professional roofing services across Johannesburg and Gauteng — from emergency leak repairs to complete roof replacements and new roof installations. With 15+ years of experience, we have repaired and replaced roofs on hundreds of residential and commercial properties across the region. Roofing in Johannesburg costs between R450 and R1,000 per square metre in 2026 for standard installations, with premium materials and Sandton-area projects running 10–15% higher. We work with all major roofing materials: IBR and corrugated steel sheeting, concrete roof tiles, clay tiles, and chromadek/aluminium systems. Every roof we install or repair includes proper flashing, valley work, ridge capping, and gutter integration. Gauteng's summer thunderstorms are intense — a well-installed roof with correct waterproofing is not optional, it is essential. We offer free roof inspections and provide detailed photographic reports of any issues found.`,
    subServices: [
      {
        name: 'Roof Repairs & Leak Fixing',
        description: 'Emergency and scheduled roof repairs including cracked or broken tiles, corroded sheeting, damaged flashing, leaking valleys, and failed waterproofing membrane. We identify the source of every leak (not just the visible water entry point) and fix the root cause. Roof repairs in Johannesburg cost R88–R100/m² for standard work.'
      },
      {
        name: 'Roof Replacement & Re-roofing',
        description: 'Complete roof strip-and-replace including removal of old materials, inspection and repair of timber trusses, installation of new battens, underlayment, roofing material, and all flashing and ridge work. Re-roofing costs R550–R1,650/m² depending on the material and roof complexity. Old material removal adds R50–R100/m².'
      },
      {
        name: 'New Roof Installation',
        description: 'Roof structures for new builds and extensions — from timber truss fabrication and installation to sheeting, tiling, and waterproofing. We coordinate with your builder to ensure the roof is installed on schedule and integrates correctly with the wall plate and ring beam.'
      },
      {
        name: 'Roof Painting & Coating',
        description: 'Roof cleaning, rust treatment, and application of UV-resistant acrylic or polyurethane roof coatings. Roof painting extends the life of steel roofing by 10–15 years and dramatically improves kerb appeal. We prepare surfaces properly — no painting over rust or flaking paint.'
      },
      {
        name: 'Gutters, Fascias & Downpipes',
        description: 'Supply and installation of seamless aluminium gutters, uPVC fascia boards, and downpipe systems. Proper gutter sizing and fall are critical for Gauteng\'s heavy summer rainfall. We calculate gutter capacity based on your roof area and local rainfall intensity.'
      },
    ],
    pricingNote: 'Roofing costs in Johannesburg vary by material, roof pitch and complexity, and whether it is a repair, re-roof, or new installation. Sandton and northern suburb projects run 10–15% above average. All quotes include a free roof inspection, materials, labour, and waste removal.',
    pricingTable: [
      { item: 'Roof repair (standard, per m²)', range: 'R88 – R200 /m²' },
      { item: 'IBR / corrugated steel sheeting (new)', range: 'R450 – R650 /m²' },
      { item: 'Concrete roof tiles (installed)', range: 'R500 – R800 /m²' },
      { item: 'Clay roof tiles (installed)', range: 'R600 – R1,000 /m²' },
      { item: 'Complete re-roofing (strip & replace)', range: 'R550 – R1,650 /m²' },
      { item: 'Roof painting (clean, treat, 2 coats)', range: 'R80 – R150 /m²' },
      { item: 'Seamless aluminium gutters (per lin. m)', range: 'R250 – R450 /m' },
      { item: 'Old material removal (per m²)', range: 'R50 – R100 /m²' },
    ],
    process: [
      {
        step: '1',
        title: 'Free Roof Inspection',
        description: 'We inspect your roof from above and inside the ceiling space, photograph problem areas, and provide a detailed report with repair or replacement recommendations and pricing.'
      },
      {
        step: '2',
        title: 'Quote & Scheduling',
        description: 'You receive an itemised quote with material specifications, quantities, and labour. For emergency repairs, we can often start same-day or next-day. Larger projects are scheduled around weather forecasts.'
      },
      {
        step: '3',
        title: 'Repair or Installation',
        description: 'Our roofing team works efficiently to minimise the time your roof is exposed. We use safety harnesses and scaffolding where required. Temporary weatherproofing is applied if work spans multiple days.'
      },
      {
        step: '4',
        title: 'Clean-Up & Guarantee',
        description: 'All debris and old materials are removed from site. We test for leaks with a hose pipe where applicable and provide a workmanship warranty on all repairs and installations.'
      },
    ],
    faqs: [
      {
        question: 'How much does a new roof cost in Johannesburg in 2026?',
        answer: 'A new roof in Johannesburg costs R450–R1,000 per square metre in 2026 for standard installations. IBR steel sheeting is the most affordable at R450–R650/m², concrete tiles cost R500–R800/m², and clay tiles range from R600–R1,000/m². For a typical 150 m² roof, expect to pay R67,500–R150,000. Complete re-roofing (strip old and replace) costs R550–R1,650/m² including old material removal. We provide free inspections and itemised quotes.'
      },
      {
        question: 'How do I know if my roof needs repair or full replacement?',
        answer: 'Repair is usually sufficient if the damage is localised — a few cracked tiles, a section of corroded sheeting, or failed flashing around a chimney. Full replacement is recommended when more than 30% of the roof is damaged, the timber trusses show rot or termite damage, or the roof is over 30 years old and has had multiple repairs. During our free inspection, we assess the overall condition and give you an honest recommendation — we will never push a full replacement when a repair will solve the problem.'
      },
      {
        question: 'Can you fix a roof leak during the rainy season?',
        answer: 'Yes. We provide emergency roof repairs year-round, including during Gauteng\'s rainy season (October–March). For active leaks, we apply temporary waterproofing to stop the immediate water ingress, then return for a permanent repair when conditions allow. Emergency repairs can often be done same-day or next-day. Call +27 82 868 8396 for immediate assistance.'
      },
      {
        question: 'What is the best roofing material for Johannesburg?',
        answer: 'IBR (inverted box rib) steel sheeting is the most popular choice in Johannesburg — it is affordable, lightweight, quick to install, and handles Gauteng\'s hail and heavy rain well. Concrete tiles are a good mid-range option that offers better insulation and a more traditional look. Clay tiles are the premium choice — they last 50+ years and provide excellent thermal and acoustic insulation but cost significantly more. We recommend IBR for budget-conscious projects and concrete or clay tiles for homes where aesthetics and insulation are priorities.'
      },
      {
        question: 'Does roof painting prevent leaks?',
        answer: 'Roof painting alone does not fix existing leaks — the leak source must be repaired first. However, a quality acrylic or polyurethane roof coating seals micro-cracks, prevents rust on steel roofs, reflects UV radiation, and extends the roof lifespan by 10–15 years. We always clean the roof surface, treat any rust, and apply a primer before coating. Roof painting costs R80–R150/m² and is one of the most cost-effective maintenance investments for a steel roof.'
      },
    ],
    whyChoose: [
      'Free roof inspection with detailed photographic report',
      'Emergency leak repairs available same-day across Johannesburg',
      'All materials: IBR steel, concrete tiles, clay tiles, chromadek, aluminium',
      '15+ years roofing experience across Gauteng — residential and commercial',
      'Safety-compliant: harnesses, scaffolding, and insurance on every job',
      'Workmanship guarantee on all repairs and installations',
    ],
  },

  'waterproofing': {
    slug: 'waterproofing',
    intro: `Sinqobile Construction provides professional waterproofing and damp proofing services across Johannesburg and Gauteng. With 15+ years of experience, we have treated hundreds of properties suffering from roof leaks, rising damp, basement moisture, and bathroom waterproofing failures. Waterproofing in Johannesburg costs between R70 and R600 per square metre in 2026, depending on the method (torch-on membrane, bitumen spray, cementitious coating) and the area being treated. Gauteng's intense summer thunderstorms and highveld hail put enormous pressure on roofs, walls, and foundations — proper waterproofing is not a luxury, it is essential to protect your property investment. We diagnose the source of every damp or leak problem before recommending a solution, because treating the symptom without fixing the cause wastes money. All our waterproofing work includes a workmanship guarantee and uses products from established manufacturers (a.b.e., Sika, Dulux AquaShield).`,
    subServices: [
      {
        name: 'Roof Waterproofing',
        description: 'Torch-on bitumen membrane, liquid-applied polyurethane, and acrylic coating systems for flat roofs, concrete roofs, and parapet walls. We prepare surfaces by cleaning, repairing cracks, and priming before applying waterproofing. Roof waterproofing costs R200–R500/m² depending on the system and roof condition.'
      },
      {
        name: 'Bathroom & Wet Area Waterproofing',
        description: 'Cementitious and liquid membrane waterproofing for shower floors, bath surrounds, and kitchen splash areas. Applied before tiling to prevent water penetration into the slab and walls below. Essential for preventing long-term structural damage and mould growth in your home.'
      },
      {
        name: 'Rising Damp Treatment',
        description: 'Chemical damp-proof course (DPC) injection to stop moisture wicking up through walls from the ground. We drill injection holes at 150 mm intervals along the affected wall, inject silicone-based damp-proofing cream, and replaster with salt-resistant render. Rising damp treatment costs R70–R250/m².'
      },
      {
        name: 'Basement & Below-Ground Waterproofing',
        description: 'Tanking systems for basements, cellars, and below-grade walls using bitumen membrane, cementitious slurry coatings, or cavity drain systems. Basement waterproofing is complex work requiring proper drainage design. Costs range from R800–R1,500/m² depending on the system and access conditions.'
      },
      {
        name: 'Exterior Wall Waterproofing',
        description: 'Clear water-repellent sealers and elastomeric coatings for face-brick, plaster, and concrete exterior walls. Prevents wind-driven rain from penetrating walls while allowing the substrate to breathe. Particularly important for west-facing walls in Johannesburg that bear the brunt of afternoon thunderstorms.'
      },
    ],
    pricingNote: 'Waterproofing costs depend on the method, surface area, and condition of the substrate. Roof waterproofing is generally more expensive than wall treatments due to material thickness and application complexity. All quotes include surface preparation, materials, labour, and workmanship guarantee.',
    pricingTable: [
      { item: 'Torch-on membrane (flat roof)', range: 'R200 – R400 /m²' },
      { item: 'Bitumen spray-on waterproofing', range: 'R300 – R500 /m²' },
      { item: 'Rising damp injection (DPC)', range: 'R70 – R250 /m²' },
      { item: 'Internal damp proofing (tanking + render)', range: 'R320 – R650 /m²' },
      { item: 'Basement tanking system', range: 'R800 – R1,500 /m²' },
      { item: 'Bathroom waterproofing (before tiling)', range: 'R150 – R350 /m²' },
      { item: 'Exterior wall water-repellent sealer', range: 'R50 – R120 /m²' },
      { item: 'Damp-proof paint / coating', range: 'R300 – R450 /m²' },
    ],
    process: [
      {
        step: '1',
        title: 'Damp & Leak Assessment',
        description: 'We inspect the affected area, use moisture meters to map the extent of the problem, and identify the water source — roof leak, rising damp, lateral penetration, or condensation.'
      },
      {
        step: '2',
        title: 'Diagnosis & Quote',
        description: 'Based on the assessment, we recommend the most effective and cost-efficient waterproofing method. You receive an itemised quote with product specifications and guarantee terms.'
      },
      {
        step: '3',
        title: 'Surface Prep & Application',
        description: 'We prepare the surface (clean, repair cracks, prime), then apply the waterproofing system according to manufacturer specifications. Multiple coats are applied where required with correct drying times between layers.'
      },
      {
        step: '4',
        title: 'Testing & Guarantee',
        description: 'We flood-test flat roofs and bathrooms to verify the waterproofing is watertight. You receive a workmanship warranty and product specification sheets for your records.'
      },
    ],
    faqs: [
      {
        question: 'How much does waterproofing cost in Johannesburg in 2026?',
        answer: 'Waterproofing in Johannesburg costs between R70 and R600 per square metre in 2026, depending on the method and area. Rising damp treatment is the most affordable at R70–R250/m². Torch-on membrane for flat roofs costs R200–R400/m². Basement tanking is the most expensive at R800–R1,500/m². Bathroom waterproofing before tiling costs R150–R350/m². We provide free assessments and itemised quotes.'
      },
      {
        question: 'What causes rising damp in Johannesburg homes?',
        answer: 'Rising damp occurs when ground moisture wicks up through walls via capillary action because the damp-proof course (DPC) has failed, was bridged during construction, or was never installed. It is common in older Johannesburg homes built before modern DPC standards. Signs include tide marks on internal walls, peeling paint at skirting level, salt deposits (efflorescence), and a musty smell. Chemical DPC injection is the standard treatment — it creates a new moisture barrier within the wall at a fraction of the cost of rebuilding.'
      },
      {
        question: 'How long does roof waterproofing last?',
        answer: 'Quality torch-on bitumen membrane typically lasts 10–15 years. Liquid-applied polyurethane systems last 8–12 years. Acrylic coatings last 5–8 years but are easier and cheaper to reapply. The lifespan depends on the product quality, application thickness, surface preparation, and exposure to UV and hail. We use products from a.b.e., Sika, and Dulux AquaShield with proven track records in Gauteng conditions.'
      },
      {
        question: 'Should I waterproof my bathroom before tiling?',
        answer: 'Yes — bathroom waterproofing before tiling is essential, not optional. Water penetrates through tile grout joints and if the substrate is not waterproofed, moisture will seep into the slab, causing structural damage, mould growth, and leaks to rooms below. We apply a cementitious or liquid membrane to the shower floor, walls (up to 1.8 m in the shower area), and any floor penetrations. This must cure fully before tiling begins. The cost is R150–R350/m² and prevents damage that would cost thousands to repair later.'
      },
      {
        question: 'Can you fix damp walls without removing plaster?',
        answer: 'For rising damp, we inject chemical DPC through small holes drilled at the base of the wall — the existing plaster is then left to dry out over 4–8 weeks. However, if the plaster is severely salt-contaminated (white crystite deposits), it must be removed to 300 mm above the damp line and replaced with salt-resistant render. We assess the plaster condition during inspection and recommend the least invasive approach that will deliver a lasting result.'
      },
    ],
    whyChoose: [
      'Proper diagnosis first — we identify the water source before recommending treatment',
      'Products from a.b.e., Sika, and Dulux AquaShield with manufacturer-backed warranties',
      '15+ years treating damp and leaks across Gauteng — residential and commercial',
      'Flood-tested results — flat roofs and bathrooms tested before handover',
      'Free damp and leak assessments with moisture meter mapping',
      'Fully insured with comprehensive liability cover',
    ],
  },

  'painting': {
    slug: 'painting',
    intro: `Sinqobile Construction provides professional interior and exterior painting services across Johannesburg and Gauteng. Over 15 years our painting teams have transformed hundreds of homes and commercial properties — from single-room repaints in Sandton to full exterior makeovers in Fourways, Midrand, and Pretoria. Interior painting in Johannesburg costs R50–R80 per square metre in 2026 for standard walls, while exterior painting costs R60–R200+ per square metre depending on surface condition and paint quality. We use premium paints from Dulux, Plascon, and Fired Earth because cheaper paints fade, peel, and require repainting within 2–3 years — a false economy. Proper surface preparation is what separates a paint job that lasts 8–10 years from one that fails in 2. We fill cracks, sand surfaces, apply appropriate primers (plaster primer, damp-seal, or alkali-resistant), and apply 2–3 coats of quality paint. Every project includes a workmanship guarantee and colour consultation.`,
    subServices: [
      {
        name: 'Interior Painting',
        description: 'Walls, ceilings, cornices, skirting boards, door frames, and built-in cupboards. We protect furniture and flooring with drop cloths, fill all cracks and holes, sand smooth, prime, and apply 2 coats of premium PVA or acrylic interior paint. Interior painting costs R50–R80/m² for standard walls, with ceilings at R500–R1,500 per room.'
      },
      {
        name: 'Exterior Painting',
        description: 'House exterior walls, fascia boards, window frames, garage doors, boundary walls, and gates. We pressure-wash surfaces, repair cracks with exterior-grade filler, apply exterior primer, and use weather-resistant exterior acrylic or elastomeric paint rated for Gauteng UV and rain exposure. Exterior painting costs R60–R200+/m².'
      },
      {
        name: 'Commercial & Office Painting',
        description: 'Office interiors, retail spaces, warehouses, and common areas. We work after hours and on weekends to minimise business disruption. Large commercial projects are quoted per square metre with volume discounts for areas over 500 m².'
      },
      {
        name: 'Specialty Finishes',
        description: 'Feature walls, textured finishes (Venetian plaster, suede, metallic), epoxy garage floor coatings, and anti-mould bathroom coatings. We source specialist products from Fired Earth, Cemcrete, and international suppliers for unique interior design requirements.'
      },
      {
        name: 'Roof Painting',
        description: 'Steel and tile roof cleaning, rust treatment, priming, and application of UV-resistant acrylic or heat-reflective roof coatings. Extends roof life by 10–15 years. Costs R80–R150/m² including preparation.'
      },
    ],
    pricingNote: 'Painting costs depend on surface area, condition, accessibility (scaffolding may be needed for multi-storey), and paint quality. Premium paints cost more upfront but last 8–10 years vs 2–3 years for budget paint. All quotes include surface prep, materials, labour, and clean-up.',
    pricingTable: [
      { item: 'Interior walls (per m², 2 coats)', range: 'R50 – R80 /m²' },
      { item: 'Ceiling painting (per room)', range: 'R500 – R1,500' },
      { item: 'Exterior walls (per m², 2 coats)', range: 'R60 – R200 /m²' },
      { item: 'Full house interior (3-bed)', range: 'R15,000 – R35,000' },
      { item: 'Full house exterior (3-bed)', range: 'R20,000 – R50,000' },
      { item: 'Roof painting (per m²)', range: 'R80 – R150 /m²' },
      { item: 'Feature wall / specialty finish', range: 'R150 – R400 /m²' },
      { item: 'Epoxy garage floor coating', range: 'R200 – R350 /m²' },
    ],
    process: [
      {
        step: '1',
        title: 'Free Quote & Colour Consult',
        description: 'We measure the area, assess surface condition, discuss colour preferences, and provide a written quote. We can bring colour swatches and recommend palettes that suit your home and natural light.'
      },
      {
        step: '2',
        title: 'Surface Preparation',
        description: 'We fill cracks, sand rough surfaces, scrape loose paint, treat mould or damp, and apply the correct primer. This step takes 30–40% of the project time and is what makes the paint job last.'
      },
      {
        step: '3',
        title: 'Painting',
        description: 'Two coats of premium paint applied by brush, roller, or airless spray depending on the surface. Edges are cut in by hand for clean lines. We work room by room in occupied homes to minimise disruption.'
      },
      {
        step: '4',
        title: 'Clean-Up & Handover',
        description: 'Drop cloths removed, paint splatters cleaned, furniture returned to position. We leave touch-up paint for minor future marks. Workmanship guarantee provided.'
      },
    ],
    faqs: [
      {
        question: 'How much does house painting cost in Johannesburg in 2026?',
        answer: 'Interior painting in Johannesburg costs R50–R80 per square metre for standard walls in 2026. A full 3-bedroom house interior costs R15,000–R35,000 including ceilings. Exterior painting costs R60–R200+/m², with a full exterior on a 3-bedroom house running R20,000–R50,000. These prices include surface preparation, primer, 2 coats of quality paint, and clean-up. Premium paints (Dulux Weatherguard, Plascon Double Velvet) cost more but last 8–10 years.'
      },
      {
        question: 'How long does exterior paint last in Johannesburg?',
        answer: 'Quality exterior acrylic paint lasts 8–10 years in Johannesburg when properly applied on well-prepared surfaces. Budget paint may only last 2–3 years before fading, chalking, or peeling — especially on north and west-facing walls that get the most sun and rain. Key factors: surface preparation (cracks filled, primer applied), paint quality (elastomeric or 100% acrylic), and correct number of coats (minimum 2). We use Dulux Weatherguard and Plascon SunProof for exterior work.'
      },
      {
        question: 'Should I paint over existing paint or strip it first?',
        answer: 'If the existing paint is sound (not peeling, flaking, or bubbling), you can paint over it after sanding and priming. If the paint is failing, we scrape loose areas back to a stable edge, sand, prime bare patches, and then paint. Full stripping is only needed when multiple layers of old paint are peeling badly or when changing from oil-based to water-based paint. We assess the condition during your quote and recommend the most cost-effective approach.'
      },
      {
        question: 'Do you paint on weekends or after hours?',
        answer: 'Yes, we offer weekend and after-hours painting for commercial clients who cannot afford business disruption during operating hours. For residential clients, we typically work Monday to Friday 7:30–17:00 and Saturdays 8:00–13:00. After-hours work may incur a 15–20% premium. We confirm scheduling and any premium in your quote.'
      },
      {
        question: 'What paint brands do you use?',
        answer: 'We use premium paints from Dulux, Plascon, and Fired Earth. For interior walls, Dulux Wash & Wear or Plascon Double Velvet are our standard recommendations. For exteriors, Dulux Weatherguard or Plascon SunProof provide excellent UV and weather resistance for Johannesburg conditions. For specialty finishes, we source from Fired Earth, Cemcrete, and international suppliers. We never use unbranded or diluted paint — the product is specified in your quote.'
      },
    ],
    whyChoose: [
      'Premium paints only — Dulux, Plascon, Fired Earth (never unbranded or diluted)',
      'Thorough surface prep — cracks filled, sanded, primed (30–40% of project time)',
      '15+ years painting homes and commercial properties across Gauteng',
      'Free colour consultation with swatches and palette recommendations',
      'Clean, respectful teams — furniture covered, floors protected, splatters cleaned',
      'Workmanship guarantee with touch-up paint left for future marks',
    ],
  },

  'electrical': {
    slug: 'electrical',
    intro: `Sinqobile Construction provides licensed electrical services across Johannesburg and Gauteng — from new installations and rewiring to fault-finding, repairs, and electrical compliance certificates (COC). Our electricians are registered with the Department of Employment and Labour and work in accordance with SANS 10142-1 (the wiring code for South Africa). Whether you need a full house rewire in Bryanston, a DB board upgrade in Sandton, or an electrical COC for a property sale in Midrand, our team delivers safe, code-compliant electrical work. Electrical installations are regulated for good reason — faulty wiring causes fires and electrocution. We never cut corners on circuit protection, cable sizing, or earth bonding. Every job is tested with calibrated instruments and documented. Standard electrician rates in Johannesburg range from R300–R600 per hour in 2026, with experienced electricians charging R600–R800/hr for complex work.`,
    subServices: [
      {
        name: 'Electrical Installations (New Build & Renovation)',
        description: 'Complete electrical rough-in and fit-out for new homes, extensions, and renovations. DB board installation, circuit wiring, plug points, light points, geyser connections, stove connections, and outdoor lighting. All installations comply with SANS 10142-1 and are tested before handover.'
      },
      {
        name: 'Electrical COC Certificates',
        description: 'Electrical Certificate of Compliance inspections and certificates as required when selling a property, changing ownership, or after new installations. We inspect the DB board, earth leakage protection, cable sizing, plug points, and general safety. COC certificates cost R850–R2,750 in Johannesburg depending on property size. Same-day certificates available for compliant installations.'
      },
      {
        name: 'DB Board Upgrades',
        description: 'Replacing old fuse boards with modern circuit breaker distribution boards, adding earth leakage protection (RCD/ELCB), and splitting circuits to meet current load requirements. Essential for older homes that were wired for lower electrical demands. DB board upgrade costs R3,000–R8,000 depending on the number of circuits.'
      },
      {
        name: 'Fault Finding & Repairs',
        description: 'Tripping circuits, flickering lights, dead plug points, and intermittent faults diagnosed with insulation resistance testing, earth loop impedance testing, and thermal imaging. We locate the fault, explain the cause, and repair it properly — no guesswork, no temporary fixes.'
      },
      {
        name: 'House Rewiring',
        description: 'Full or partial rewiring of older homes with outdated or unsafe wiring (typically pre-1980s installations with cloth-insulated cable or no earth wiring). Rewiring a typical 3-bedroom house costs R20,000–R30,000 and includes a new DB board, all new circuits, plug points, light points, and a COC on completion.'
      },
      {
        name: 'Outdoor & Security Lighting',
        description: 'Garden lighting, security floodlights, motion-sensor lights, gate motor connections, and electric fence installations. We design lighting layouts for security coverage and aesthetic effect, using energy-efficient LED fittings throughout.'
      },
    ],
    pricingNote: 'Electrical costs depend on the scope of work, cable runs, number of points, and whether the installation is new or a retrofit. All quotes include materials, labour, testing, and a COC where applicable. No hidden call-out fees.',
    pricingTable: [
      { item: 'Electrician rate (standard, per hour)', range: 'R300 – R600 /hr' },
      { item: 'Electrical COC certificate', range: 'R850 – R2,750' },
      { item: 'New plug point (single)', range: 'R300 – R500' },
      { item: 'New plug point (double)', range: 'R400 – R600' },
      { item: 'DB board upgrade', range: 'R3,000 – R8,000' },
      { item: 'Full house rewire (3-bedroom)', range: 'R20,000 – R30,000' },
      { item: 'Geyser connection / timer', range: 'R1,500 – R3,000' },
      { item: 'Security lighting (per light, installed)', range: 'R500 – R1,500' },
    ],
    process: [
      {
        step: '1',
        title: 'Assessment & Quote',
        description: 'We inspect the existing installation (or review plans for new work), identify the scope, and provide an itemised quote with material specifications. For COC inspections, we assess on-site and advise immediately.'
      },
      {
        step: '2',
        title: 'Installation / Repair',
        description: 'Our electricians complete the work according to SANS 10142-1 standards. We use quality materials from established suppliers and label all circuits clearly at the DB board.'
      },
      {
        step: '3',
        title: 'Testing & Certification',
        description: 'Every installation is tested with calibrated instruments — insulation resistance, earth continuity, loop impedance, and RCD trip time. We issue a COC for all new installations and can issue one for existing compliant installations.'
      },
      {
        step: '4',
        title: 'Handover & Documentation',
        description: 'You receive a test certificate, circuit schedule, and COC where applicable. We explain the installation, show you the DB board layout, and demonstrate any new switches or controls.'
      },
    ],
    faqs: [
      {
        question: 'How much does an electrical COC cost in Johannesburg in 2026?',
        answer: 'An electrical Certificate of Compliance (COC) in Johannesburg costs R850–R2,750 in 2026, depending on property size, number of DB boards, and installation complexity. A standard 3-bedroom home with one DB board is typically R850–R1,500. Larger properties with multiple boards or complex installations cost more. If the installation fails the inspection, repair costs are charged separately. We provide same-day COC certificates for compliant installations.'
      },
      {
        question: 'Do I need an electrical COC when selling my house?',
        answer: 'Yes. South African law requires a valid electrical Certificate of Compliance (COC) when selling a residential property or changing ownership. The COC confirms that the electrical installation complies with SANS 10142-1 safety standards. The seller is responsible for obtaining the COC and paying for any repairs needed to achieve compliance. A COC is valid for 2 years from the date of issue.'
      },
      {
        question: 'How much does it cost to rewire a house in Johannesburg?',
        answer: 'Rewiring a typical 3-bedroom house in Johannesburg costs R20,000–R30,000 in 2026. This includes a new DB board with circuit breakers and earth leakage protection, new cable on all circuits, new plug points and light points, and a COC on completion. Larger homes or those with difficult access (concrete walls, inaccessible ceilings) cost more. We provide a detailed quote after inspecting your existing installation.'
      },
      {
        question: 'Why does my DB board keep tripping?',
        answer: 'The most common causes of tripping circuit breakers are: overloaded circuits (too many appliances on one circuit), a faulty appliance drawing excessive current, moisture in plug points or junction boxes, and degraded cable insulation causing earth leakage. Our electricians use insulation resistance testing and earth loop impedance testing to identify the exact cause. We then repair the fault and, if necessary, split overloaded circuits to prevent future tripping.'
      },
      {
        question: 'What is the difference between a circuit breaker and earth leakage?',
        answer: 'A circuit breaker (MCB) protects against overload and short circuit — it trips when too much current flows through the cable. An earth leakage device (RCD/ELCB) protects against electrocution — it trips when current leaks to earth, which happens when you touch a live wire or a faulty appliance has an earth fault. Both are legally required in South African installations. Your DB board should have an earth leakage device protecting all circuits, plus individual circuit breakers sized for each circuit.'
      },
    ],
    whyChoose: [
      'Registered electricians compliant with SANS 10142-1 (SA wiring code)',
      'Same-day COC certificates for compliant installations',
      'Calibrated test instruments — insulation resistance, earth loop, RCD testing',
      'All circuits labelled clearly at the DB board with test documentation provided',
      '15+ years electrical experience across Gauteng — residential and commercial',
      'Fully insured with comprehensive liability cover',
    ],
  },
}

export function getServiceContent(slug: string): ServiceContent | undefined {
  return serviceContentData[slug]
}
