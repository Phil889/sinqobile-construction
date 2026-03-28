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
}

export function getServiceContent(slug: string): ServiceContent | undefined {
  return serviceContentData[slug]
}
