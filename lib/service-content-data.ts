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

  'plastering': {
    slug: 'plastering',
    intro: `Sinqobile Construction provides professional plastering and skimming services across Johannesburg and Gauteng. Over 15 years our plasterers have finished hundreds of residential and commercial projects — from new-build plaster on brick walls to skim-coating renovated surfaces for a smooth, paint-ready finish. Plastering in Johannesburg costs R80–R150 per square metre for standard interior and exterior work in 2026, while skimming (a thin finishing coat) costs R40–R110/m². Proper plastering is the bridge between brickwork and the final painted surface — if it cracks, bulges, or debonds, no amount of paint will hide it. We use tested plaster mixes with the correct sand-to-cement ratios, apply in the right thickness (typically 12–15 mm for walls), and cure properly to prevent shrinkage cracking. Our team handles everything from rough-cast exterior render to glass-smooth interior skim finishes.`,
    subServices: [
      { name: 'Interior Wall Plastering', description: 'Sand-cement plaster on new brick or block walls, applied to 12–15 mm thickness with a smooth float finish ready for painting. We ensure walls are plumb and square, corners are crisp, and window/door reveals are straight. Costs R80–R150/m².' },
      { name: 'Skim Coating', description: 'Thin-layer finishing (2–3 mm) applied over existing plaster or plasterboard to create a smooth, paint-ready surface. Ideal for renovations where walls are uneven but structurally sound. Skimming costs R40–R110/m².' },
      { name: 'Exterior Rendering', description: 'Weather-resistant exterior plaster finishes including smooth render, textured finishes, and tyrolean (rough-cast). We use waterproof additives and fibre mesh over expansion joints to prevent cracking.' },
      { name: 'Ceiling Plastering & Repairs', description: 'New ceiling plaster on rhinoboard/gypsum board, as well as crack repairs, water-damage patches, and cornice installation. We match existing ceiling textures for seamless repairs.' },
      { name: 'Plaster Repairs & Crack Fixing', description: 'Cracked, hollow, or debonded plaster cut out and replaced. We diagnose the cause (structural movement, damp, poor original mix) and fix both the plaster and the underlying issue.' },
    ],
    pricingNote: 'Plastering costs depend on surface condition, height/accessibility, and finish quality. Scaffolding is additional for multi-storey work. All quotes include surface preparation, materials, labour, and clean-up.',
    pricingTable: [
      { item: 'Interior wall plastering (standard)', range: 'R80 – R150 /m²' },
      { item: 'Skim coating (smooth finish)', range: 'R40 – R110 /m²' },
      { item: 'Exterior rendering', range: 'R100 – R180 /m²' },
      { item: 'Ceiling plastering (new)', range: 'R90 – R160 /m²' },
      { item: 'Plaster repair / patching', range: 'R120 – R250 /m²' },
      { item: 'Cornice installation (per lin. m)', range: 'R45 – R120 /m' },
    ],
    process: [
      { step: '1', title: 'Surface Assessment', description: 'We inspect walls for plumb, level, and surface condition, then advise on the plastering method and thickness required.' },
      { step: '2', title: 'Preparation', description: 'Walls are dampened, PVA bonding applied if needed, corner beads set, and expansion joints marked. We mix plaster to the correct ratio on-site.' },
      { step: '3', title: 'Application', description: 'Plaster is applied in one or two coats to the specified thickness, ruled straight, and floated to the required finish. Skim coats are applied after the base coat has cured.' },
      { step: '4', title: 'Curing & Handover', description: 'Plaster is kept moist for 3–7 days to prevent shrinkage cracking. We inspect the finish before handover and guarantee our workmanship.' },
    ],
    faqs: [
      { question: 'How much does plastering cost in Johannesburg in 2026?', answer: 'Standard interior plastering in Johannesburg costs R80–R150 per square metre in 2026, including materials and labour. Skim coating is cheaper at R40–R110/m². Exterior rendering costs R100–R180/m². These prices vary based on surface condition, height, and finish quality. We provide free on-site quotes.' },
      { question: 'What is the difference between plastering and skimming?', answer: 'Plastering is a thicker application (12–15 mm) applied directly to bare brick or block to create a flat, even surface. Skimming is a thin coat (2–3 mm) applied over existing plaster or plasterboard to create a smooth finish. Plastering is needed on new builds or where old plaster has been removed. Skimming is used in renovations where walls are uneven but the existing plaster is still bonded and sound.' },
      { question: 'Why does plaster crack after application?', answer: 'The most common causes are: too-rapid drying (not curing properly), incorrect sand-to-cement ratio (too much cement causes shrinkage), plaster applied too thick in a single coat (over 15 mm should be done in two coats), and movement in the underlying structure. We control all these factors by using tested mix ratios, applying in correct thicknesses, and curing for 3–7 days.' },
      { question: 'How long before I can paint new plaster?', answer: 'New plaster must cure for at least 4–6 weeks before painting. During this time, moisture evaporates and the plaster reaches its final hardness. Painting too early traps moisture and causes the paint to peel, bubble, or develop white salt deposits (efflorescence). We advise clients on the curing timeline and recommend a plaster primer (such as Dulux Plaster Primer) before applying topcoats.' },
      { question: 'Can you match existing plaster textures for repairs?', answer: 'Yes, our plasterers are experienced in matching existing textures — smooth float, sponge finish, rough-cast, and textured renders. For large repair areas, we feather the edges so the patch blends seamlessly with the surrounding surface. After painting, a well-matched plaster repair should be invisible.' },
    ],
    whyChoose: [
      'Correct sand-to-cement ratios — tested mixes for every application',
      'Proper curing protocol — 3–7 days minimum to prevent shrinkage cracking',
      '15+ years plastering experience across Gauteng — new builds and renovations',
      'Smooth skim finishes and textured renders — we match any existing texture',
      'Free on-site assessment and written quote',
      'Fully insured with workmanship guarantee',
    ],
  },

  'tiling': {
    slug: 'tiling',
    intro: `Sinqobile Construction provides professional tiling services across Johannesburg and Gauteng. Over 15 years our tilers have completed hundreds of floor, wall, and feature tiling projects — from full-house floor tiling in Fourways to luxury bathroom tile installations in Sandton. Tiling labour in Johannesburg costs R120–R350 per square metre in 2026, with total installed cost (tiles + adhesive + labour) ranging from R200–R1,000+/m² depending on tile type and layout complexity. We work with all tile materials: ceramic, porcelain, natural stone (marble, granite, slate, travertine), mosaic, and large-format tiles up to 1200×600 mm. Proper tiling requires a level substrate, correct adhesive selection, consistent grout joints, and waterproofing in wet areas — shortcuts in any of these lead to cracked tiles, hollow spots, and water damage. Every project includes a workmanship guarantee.`,
    subServices: [
      { name: 'Floor Tiling', description: 'Full-house floor tiling in ceramic, porcelain, or natural stone. We level substrates with self-levelling compound where needed, use flexible adhesive for large-format tiles, and cut precisely around obstacles. Ceramic tile installation costs R200–R450/m² all-in.' },
      { name: 'Wall Tiling', description: 'Kitchen splashbacks, feature walls, bathroom walls, and shower enclosures. Wall tiles require different adhesive and technique to floor tiles — we use non-slip adhesive and start from a level datum line to ensure horizontal grout lines are straight across the wall.' },
      { name: 'Bathroom & Shower Tiling', description: 'Complete bathroom tiling including waterproofing, floor falls to drain, wall tiling up to ceiling height, and niche/shelf tiling. Bathroom tiling costs R350–R600/m² due to waterproofing and complexity. We coordinate with plumbers to ensure waste and tap positions are correct before tiling.' },
      { name: 'Outdoor & Patio Tiling', description: 'Non-slip porcelain, slate, or stone tiling for patios, pool surrounds, and outdoor entertainment areas. We use exterior-rated adhesive and grout, and ensure drainage falls prevent water pooling.' },
      { name: 'Tile Repairs & Re-grouting', description: 'Cracked or loose tiles replaced, grout joints resealed, and silicone replaced around baths and showers. We match existing tile colours and sizes where possible.' },
    ],
    pricingNote: 'Tiling costs depend on tile material, size, pattern complexity, and whether the substrate needs preparation. Bathroom and shower tiling costs more due to waterproofing requirements. All quotes include adhesive, grout, and labour.',
    pricingTable: [
      { item: 'Ceramic floor tiles (installed)', range: 'R200 – R400 /m²' },
      { item: 'Porcelain floor tiles (installed)', range: 'R300 – R600 /m²' },
      { item: 'Natural stone tiles (installed)', range: 'R500 – R1,000+ /m²' },
      { item: 'Bathroom wall + floor tiling', range: 'R350 – R600 /m²' },
      { item: 'Kitchen splashback', range: 'R250 – R500 /m²' },
      { item: 'Tiling labour only (per m²)', range: 'R120 – R350 /m²' },
      { item: 'Tile adhesive + grout (per m²)', range: 'R80 – R230 /m²' },
    ],
    process: [
      { step: '1', title: 'Measure & Quote', description: 'We measure the area, assess substrate condition, discuss tile selection and layout options, and provide an all-inclusive quote.' },
      { step: '2', title: 'Substrate Preparation', description: 'We level uneven floors with self-levelling compound, waterproof wet areas, and prime surfaces for optimal adhesive bond.' },
      { step: '3', title: 'Tile Installation', description: 'Tiles are laid with consistent spacers, cut precisely with diamond-blade wet cutters, and checked for level at every row. Large-format tiles use back-buttering technique for full adhesive coverage.' },
      { step: '4', title: 'Grouting & Sealing', description: 'Grout is applied, cleaned, and sealed where required. Silicone is applied at all movement joints (wall-floor junctions, around baths). We clean the surface and hand over with care instructions.' },
    ],
    faqs: [
      { question: 'How much does tiling cost in Johannesburg in 2026?', answer: 'Tiling in Johannesburg costs R200–R1,000+ per square metre fully installed in 2026, depending on tile type. Ceramic tiles are most affordable at R200–R400/m², porcelain costs R300–R600/m², and natural stone ranges from R500–R1,000+/m². Labour alone costs R120–R350/m². Bathroom tiling is R350–R600/m² due to waterproofing. We provide free quotes with tile recommendations.' },
      { question: 'Should I waterproof under floor tiles in a bathroom?', answer: 'Yes — waterproofing the floor and walls of a bathroom or shower before tiling is essential. Grout is not waterproof, and moisture will seep through to the slab below, causing structural damage, mould, and leaks. We apply cementitious or liquid membrane waterproofing to the shower floor, wall-floor junction, and walls up to 1.8 m in shower areas. This must cure before tiling begins.' },
      { question: 'Can you tile over existing tiles?', answer: 'Yes, in many cases you can tile over existing tiles if they are firmly bonded, level, and in good condition. We roughen the surface, apply a bonding primer, and use flexible tile adhesive. This saves the cost and mess of removing old tiles. However, if existing tiles are loose, hollow, or the floor level will become too high (affecting door clearance), removal is recommended. We assess during your quote.' },
      { question: 'What size tiles make a room look bigger?', answer: 'Larger format tiles (600×600 mm or 600×1200 mm) with minimal grout joints create a sense of spaciousness because there are fewer visual breaks across the floor. Light colours and rectified (sharp-edged) tiles laid with thin grout lines enhance this effect. We recommend large-format porcelain for open-plan living areas and can advise on layout and colour during your consultation.' },
      { question: 'How long does tiling take?', answer: 'A standard bathroom (floor + walls) takes 3–5 days including waterproofing, tiling, and grouting. A full-house floor tiling project (100–150 m²) takes 5–10 days depending on tile size and layout complexity. Large-format tiles and straight-lay patterns are faster than small tiles or diagonal/herringbone patterns. We provide a timeline with every quote.' },
    ],
    whyChoose: [
      'All tile types — ceramic, porcelain, natural stone, mosaic, large-format',
      'Proper substrate preparation and waterproofing in every wet area',
      'Diamond-blade wet cutting for precise cuts and clean edges',
      '15+ years tiling experience across Gauteng — bathrooms, floors, features',
      'Free measurement and tile selection advice',
      'Workmanship guarantee on every installation',
    ],
  },

  'extensions': {
    slug: 'extensions',
    intro: `Sinqobile Construction is an NHBRC-registered home extension builder serving Johannesburg and Gauteng. Over 15 years we have completed hundreds of room additions, second-storey extensions, granny flats, and garage conversions across the region. Home extensions in Johannesburg cost R10,000–R16,000 per square metre for single-storey and R15,000–R25,000/m² for second-storey additions in 2026. Every extension requires council-approved building plans — we coordinate with SACAP-registered architects, structural engineers, and your local municipality to handle the full plans process. A properly built extension adds living space and significant property value. We ensure seamless integration with your existing home — matching roof lines, brickwork, plastering, and finishes so the extension looks like it was always part of the house.`,
    subServices: [
      { name: 'Room Additions (Single Storey)', description: 'Extra bedrooms, living rooms, home offices, and entertainment areas built onto your existing home. Includes foundation, brickwork, roofing, electrical, plumbing, plastering, and painting. Single-storey extensions cost R10,000–R16,000/m².' },
      { name: 'Second-Storey Additions', description: 'Adding a full upper floor to your home. Requires structural assessment of existing foundations and walls, steel or concrete reinforcement, and new roof construction. Second-storey additions cost R15,000–R25,000/m² — 20–30% more than ground floor due to structural requirements and working at height.' },
      { name: 'Granny Flats', description: 'Self-contained living units with bedroom, bathroom, kitchen, and private entrance. Council-approved plans required. A properly approved 40 m² granny flat costs R350,000–R750,000 and can generate R7,000–R14,000/month in rental income — an 18–25% annual return on the build cost.' },
      { name: 'Garage Conversions', description: 'Convert an unused garage into a liveable space — home office, gym, entertainment room, or rental unit. Includes insulation, electrical, plumbing (if adding bathroom/kitchen), plastering, flooring, and finishing.' },
      { name: 'Covered Patios & Carports', description: 'Steel or timber-framed covered patios, braai areas, and carports. Includes foundations, structural frame, roofing, and optional enclosure with aluminium or glass. Council plans required for structures over a certain size.' },
    ],
    pricingNote: 'Extension costs depend on size, number of storeys, finishes, and structural complexity. All extensions require council-approved plans (architect and submission fees are additional). Granny flats offer excellent rental ROI. All quotes are itemised and fixed-price.',
    pricingTable: [
      { item: 'Single-storey extension (per m²)', range: 'R10,000 – R16,000 /m²' },
      { item: 'Second-storey addition (per m²)', range: 'R15,000 – R25,000 /m²' },
      { item: 'Granny flat (40–60 m²)', range: 'R350,000 – R750,000' },
      { item: 'Garage conversion', range: 'R120,000 – R350,000' },
      { item: 'Covered patio (steel frame + roof)', range: 'R1,500 – R3,500 /m²' },
      { item: 'Architect plans + council submission', range: 'R15,000 – R40,000' },
    ],
    process: [
      { step: '1', title: 'Free Consultation', description: 'We visit your property, discuss what you want to add, assess the existing structure, and advise on feasibility, costs, and council requirements.' },
      { step: '2', title: 'Plans & Approvals', description: 'We coordinate with a SACAP architect to draw plans, engage a structural engineer if needed, and submit to your local municipality. Approval takes 4–12 weeks in Johannesburg.' },
      { step: '3', title: 'Construction', description: 'A dedicated project manager oversees the build. We protect your existing home during construction with dust barriers and weatherproofing. Weekly photo updates provided.' },
      { step: '4', title: 'Integration & Handover', description: 'We match the extension to your existing home — roof lines, plaster, paint, and finishes. Final inspection, snag list, and handover with NHBRC enrollment documentation.' },
    ],
    faqs: [
      { question: 'How much does a home extension cost in Johannesburg in 2026?', answer: 'Single-storey extensions cost R10,000–R16,000 per square metre in Johannesburg in 2026. A 30 m² room addition costs roughly R300,000–R480,000. Second-storey additions cost R15,000–R25,000/m² — 20–30% more due to structural reinforcement and working at height. A 40 m² granny flat costs R350,000–R750,000. These prices include construction only; architect plans and council submissions add R15,000–R40,000.' },
      { question: 'Do I need council-approved plans for an extension?', answer: 'Yes. Every building extension in Johannesburg requires City of Johannesburg approved building plans. Without approved plans, the structure is illegal — it cannot be insured, cannot be bonded, and the municipality can order it demolished. Plans must be drawn by a SACAP-registered architect and approved by your local council (4–12 weeks). We handle the entire process for you.' },
      { question: 'Is a granny flat a good investment?', answer: 'Yes. A properly approved granny flat in Johannesburg generates R7,000–R14,000 per month in rental income, delivering an 18–25% annual return on the R350,000–R750,000 build cost. It also increases your property value. However, the unit must have council-approved plans and comply with zoning regulations. Unapproved structures have no legal rental protection and can be ordered demolished.' },
      { question: 'Can you add a second storey to any house?', answer: 'Not always. The existing foundations and walls must be strong enough to carry the additional load. We engage a structural engineer to assess your home before committing to a second-storey design. Some homes need foundation underpinning or wall reinforcement before going up. Older homes with shallow strip foundations may not be suitable without significant structural work. We give you an honest assessment during the free consultation.' },
      { question: 'How long does a home extension take to build?', answer: 'A single-storey room addition (20–40 m²) takes 6–10 weeks. A second-storey addition takes 10–16 weeks. A granny flat takes 8–14 weeks. These timelines exclude the plans approval period (4–12 weeks). Weather, material availability, and municipal inspections can affect the schedule. We provide a detailed project timeline with your quote.' },
    ],
    whyChoose: [
      'NHBRC registered — every extension enrolled with structural warranty',
      'Full plans service — architect, engineer, and council submission handled end-to-end',
      'Seamless integration — we match existing roof lines, brickwork, and finishes',
      '500+ building and extension projects completed across Gauteng',
      'Fixed-price, itemised quotes with milestone payments',
      'Fully insured with comprehensive construction liability cover',
    ],
  },

  'fencing': {
    slug: 'fencing',
    intro: `Sinqobile Construction provides professional fencing and boundary wall installation across Johannesburg and Gauteng. Over 15 years we have secured hundreds of residential and commercial properties with palisade fencing, brick boundary walls, precast walls, and electric fence installations. Palisade fencing in Johannesburg costs R900–R3,000+ per metre in 2026 depending on height and material, while brick boundary walls cost R1,800–R3,800 per linear metre. Security is a top priority for Gauteng homeowners, and proper perimeter fencing is the first line of defence. We install to engineering specifications — concrete foundations for all fence posts, correct post spacing, and anti-climb designs. All boundary walls over 1.8 m require council-approved plans, which we handle as part of the project.`,
    subServices: [
      { name: 'Palisade Fencing', description: 'Steel palisade fencing in standard (1.8 m), high (2.1 m), and extra-high (2.4 m) options. Anti-climb designs with pointed or bent-over tops. Installed on concrete foundations with welded connections. Costs R900–R3,000/m depending on height.' },
      { name: 'Brick Boundary Walls', description: 'Face brick or plastered brick boundary walls on reinforced concrete strip foundations. Includes piers at correct intervals, expansion joints, coping, and damp-proof course. Costs R1,800–R3,800 per linear metre for a 1.8 m wall.' },
      { name: 'Precast Concrete Walls (Vibracrete)', description: 'Fast, cost-effective precast concrete panel walls. Installed in a day for most residential properties. Costs R1,200–R2,200 per metre installed. Can be plastered and painted for a finished look.' },
      { name: 'Electric Fencing', description: 'Electric fence installation on top of existing walls or fencing. Energiser, brackets, wiring, and signage included. Costs R250–R450 per metre. Must comply with SANS 10222-3 safety standards.' },
      { name: 'Gates & Access Control', description: 'Sliding gates, swing gates, pedestrian gates, and motor automation. Steel or aluminium construction with remote-control operation. Costs R8,000–R25,000 depending on size and material.' },
    ],
    pricingNote: 'Fencing costs depend on material, height, terrain, and total length. Taller fences cost 30–40% more per 600 mm height increase. All quotes include foundations, materials, labour, and clean-up.',
    pricingTable: [
      { item: 'Palisade fencing (1.8 m)', range: 'R900 – R1,800 /m' },
      { item: 'Palisade fencing (2.1 m)', range: 'R2,000 – R2,400 /m' },
      { item: 'Palisade fencing (2.4 m)', range: 'R2,200 – R2,800 /m' },
      { item: 'Brick boundary wall (1.8 m)', range: 'R1,800 – R3,800 /m' },
      { item: 'Precast / Vibracrete wall', range: 'R1,200 – R2,200 /m' },
      { item: 'Electric fencing (per metre)', range: 'R250 – R450 /m' },
      { item: 'Sliding gate (automated)', range: 'R12,000 – R25,000' },
    ],
    process: [
      { step: '1', title: 'Site Survey', description: 'We measure the boundary, check property pegs, assess terrain and access, and discuss your security and aesthetic requirements.' },
      { step: '2', title: 'Quote & Plans', description: 'You receive an itemised quote. For walls over 1.8 m or in heritage areas, we arrange council-approved plans.' },
      { step: '3', title: 'Installation', description: 'Foundations are dug and poured, posts or piers are set, and fencing or wall panels are installed. We work methodically along the boundary to minimise security gaps during installation.' },
      { step: '4', title: 'Finishing & Handover', description: 'Gates are hung and automated, electric fencing is energised and tested, and the site is cleaned. We provide operating manuals for gate motors and electric fence energisers.' },
    ],
    faqs: [
      { question: 'How much does palisade fencing cost in Johannesburg in 2026?', answer: 'Palisade fencing in Johannesburg costs R900–R3,000+ per metre in 2026, depending on height. Standard 1.8 m residential palisade costs R900–R1,800/m. High-security 2.4 m palisade costs R2,200–R2,800/m. These prices include concrete foundations, posts, palisade panels, and installation. Electric fencing on top adds R250–R450/m. We provide free site surveys and itemised quotes.' },
      { question: 'Is a brick wall or palisade fence better for security?', answer: 'Both have advantages. Brick walls provide complete privacy and are harder to cut through, but intruders can hide behind them. Palisade fencing allows visibility (you can see who is outside) and is harder to climb with anti-climb tops, but offers no privacy. Many Johannesburg homeowners combine both — a brick wall at the front for street-facing privacy and palisade along the sides and back for visibility and security. We can advise on the best combination for your property.' },
      { question: 'Do I need building plans for a boundary wall?', answer: 'In Johannesburg, boundary walls over 1.8 m require council-approved building plans. Walls at or below 1.8 m generally do not need plans but must comply with municipal building lines. Palisade fencing typically does not require plans unless it exceeds the height limit. We check your specific requirements and handle plans if needed.' },
      { question: 'How long does fencing installation take?', answer: 'A standard residential property (60–100 metres of fencing) takes 3–7 days depending on the fencing type. Precast walls are the fastest (often 1–2 days). Brick boundary walls take longest (5–10 days) due to foundation curing and bricklaying time. Palisade fencing takes 3–5 days. We schedule to minimise the time your property boundary is open.' },
      { question: 'Can you install electric fencing on an existing wall?', answer: 'Yes. Electric fencing brackets are mounted on top of existing walls or fences. We install the energiser (usually in the garage or utility room), run the wiring along the boundary, and install warning signs as required by SANS 10222-3. The system is tested and you receive operating instructions. Costs R250–R450 per metre for wall-top electric fencing.' },
    ],
    whyChoose: [
      'Concrete foundations for all fence posts — no shortcuts on structural integrity',
      'All fencing types: palisade, brick walls, precast, electric, gates',
      'Council plans handled for walls over 1.8 m',
      '15+ years securing Gauteng properties — residential and commercial',
      'Free site survey with property boundary verification',
      'Fully insured with workmanship guarantee',
    ],
  },

  'flooring': {
    slug: 'flooring',
    intro: `Sinqobile Construction provides professional flooring installation across Johannesburg and Gauteng. Over 15 years we have installed hundreds of residential and commercial floors — from laminate in Fourways apartments to solid hardwood in Sandton homes and vinyl in Midrand offices. Flooring installation in Johannesburg costs R80–R850+ per square metre in 2026, depending on the material (laminate, vinyl, engineered wood, solid hardwood, or tile). We handle the full process: substrate assessment, levelling, moisture testing, underlay installation, and precision fitting with clean expansion gaps and transitions between rooms. The right flooring transforms a space and adds significant property value. We help you choose the best option for your budget, lifestyle, and traffic levels — then install it to manufacturer specifications with a workmanship guarantee.`,
    subServices: [
      { name: 'Laminate Flooring', description: 'Click-lock laminate flooring in various wood-look finishes. Quick to install, affordable, and durable for moderate-traffic areas. Installed over foam underlay with expansion gaps. Costs R300–R800/m² supplied and installed.' },
      { name: 'Vinyl & LVT Flooring', description: 'Luxury vinyl tile (LVT) and vinyl plank flooring — waterproof, scratch-resistant, and ideal for kitchens, bathrooms, and high-traffic areas. Glue-down or click installation. Costs R250–R700/m² supplied and installed.' },
      { name: 'Engineered Wood Flooring', description: 'Real wood veneer on a stable plywood core — the look and feel of solid wood with better dimensional stability. Suitable for underfloor heating. Costs R350–R850/m² supplied and installed.' },
      { name: 'Solid Hardwood Flooring', description: 'Premium solid hardwood (oak, walnut, ash) sanded and sealed on-site. The ultimate in flooring luxury and longevity — can be sanded and refinished multiple times. Costs R800–R2,000/m² supplied and installed.' },
      { name: 'Floor Sanding & Refinishing', description: 'Existing wooden floors sanded back to bare wood, stained (optional), and sealed with polyurethane or hard wax oil. Restores tired wooden floors to their original beauty.' },
    ],
    pricingNote: 'Flooring costs include materials, underlay, adhesive, and professional installation. Substrate levelling is additional if the floor is uneven (R40–R100/m²). Removal of existing flooring is charged separately. All quotes are itemised.',
    pricingTable: [
      { item: 'Laminate flooring (supplied & installed)', range: 'R300 – R800 /m²' },
      { item: 'Vinyl / LVT flooring (supplied & installed)', range: 'R250 – R700 /m²' },
      { item: 'Engineered wood (supplied & installed)', range: 'R350 – R850 /m²' },
      { item: 'Solid hardwood (supplied & installed)', range: 'R800 – R2,000 /m²' },
      { item: 'Floor sanding & sealing (existing wood)', range: 'R150 – R350 /m²' },
      { item: 'Substrate levelling (self-levelling compound)', range: 'R40 – R100 /m²' },
      { item: 'Old flooring removal', range: 'R30 – R80 /m²' },
    ],
    process: [
      { step: '1', title: 'Consultation & Samples', description: 'We visit your home, assess the substrate, measure the area, and bring samples so you can see and feel the flooring options in your own lighting.' },
      { step: '2', title: 'Substrate Preparation', description: 'We test moisture levels, level the floor if needed, and install the appropriate underlay or moisture barrier.' },
      { step: '3', title: 'Installation', description: 'Flooring is acclimatised to your home (48 hours for wood products), then installed with precision cuts around obstacles, correct expansion gaps, and seamless transitions between rooms.' },
      { step: '4', title: 'Finishing & Handover', description: 'Skirting boards, transition strips, and door trims are fitted. We clean the floor and provide care instructions. Workmanship guarantee included.' },
    ],
    faqs: [
      { question: 'How much does flooring installation cost in Johannesburg in 2026?', answer: 'Flooring in Johannesburg costs R250–R2,000+ per square metre supplied and installed in 2026. Vinyl/LVT is most affordable at R250–R700/m², laminate costs R300–R800/m², engineered wood R350–R850/m², and solid hardwood R800–R2,000/m². For a 100 m² home, laminate flooring totals approximately R30,000–R80,000. We provide free consultations with samples.' },
      { question: 'Which flooring is best for Johannesburg homes?', answer: 'It depends on your priorities. Laminate is best for budget and easy maintenance. Vinyl/LVT is best for wet areas (kitchens, bathrooms) because it is waterproof. Engineered wood gives you real wood beauty with better stability. Solid hardwood is the premium choice that lasts a lifetime. For most Johannesburg homes, we recommend engineered wood for living areas and vinyl for wet areas.' },
      { question: 'Can you install flooring over tiles?', answer: 'Yes, laminate and vinyl can be installed over existing tiles if the tiles are firmly bonded and level. The tile grout lines may telegraph through thin vinyl, so we may recommend a levelling compound first. This saves the cost and mess of removing old tiles. We assess the condition during your consultation and advise on the best approach.' },
      { question: 'How long does flooring installation take?', answer: 'Laminate or vinyl flooring for a 3-bedroom home (80–120 m²) takes 2–3 days. Engineered wood takes 3–4 days including acclimatisation time. Solid hardwood with on-site sanding and sealing takes 5–7 days. Substrate preparation adds 1–2 days if levelling is needed. We provide a timeline with every quote.' },
      { question: 'Do you supply the flooring or do I buy it?', answer: 'We can supply and install (recommended) or install flooring you have purchased. When we supply, you benefit from our trade pricing and we guarantee the product is suitable for the application. If you buy your own, we will advise on specifications (thickness, AC rating for laminate, wear layer for vinyl) to ensure it performs well in your space.' },
    ],
    whyChoose: [
      'All flooring types — laminate, vinyl, engineered wood, solid hardwood',
      'Moisture testing and substrate levelling before installation',
      'Trade pricing on flooring materials from established suppliers',
      '15+ years flooring installation experience across Gauteng',
      'Free consultation with samples brought to your home',
      'Workmanship guarantee on every installation',
    ],
  },

  'brickwork': {
    slug: 'brickwork',
    intro: `Sinqobile Construction provides professional brickwork and masonry services across Johannesburg and Gauteng. Over 15 years our bricklayers have built everything from single-skin garden walls to double-storey face-brick homes. Bricklaying in Johannesburg costs R150–R450 per square metre in 2026, depending on brick type (stock, cement, or face brick) and wall thickness. We work with all brick types: NFP stock bricks, cement bricks, clay face bricks (Corobrik, Brickfields), and concrete blocks. Proper brickwork requires correct mortar mixes, level courses, plumb walls, and DPC installation — there are no shortcuts. Every wall we build is structurally sound, weather-resistant, and built to last.`,
    subServices: [
      { name: 'Boundary & Garden Walls', description: 'Brick boundary walls, garden feature walls, and retaining walls. Includes strip foundation, DPC, expansion joints, and coping. Boundary walls cost R1,800–R3,800 per linear metre for a 1.8 m wall.' },
      { name: 'Face Brick Construction', description: 'Exposed face brick walls using clay face bricks (Corobrik, Brickfields) with struck or raked joints. Face brick eliminates the need for plastering and painting, reducing long-term maintenance costs.' },
      { name: 'New Build Brickwork', description: 'Structural brickwork for new homes and extensions — external walls, internal partition walls, and load-bearing walls. We build to engineer specifications with correct lintels, piers, and tie-downs.' },
      { name: 'Brick Repairs & Repointing', description: 'Cracked, spalled, or weather-damaged bricks replaced. Mortar joints repointed to restore structural integrity and appearance. We match existing brick types and mortar colours.' },
      { name: 'Braai & Outdoor Structures', description: 'Built-in braai stands, pizza ovens, fire pits, and outdoor kitchen structures in face brick or plastered brick. Custom designed to your requirements.' },
    ],
    pricingNote: 'Brickwork costs depend on brick type, wall thickness (single or double skin), height, and accessibility. Face bricks cost more than stock bricks but eliminate plastering costs. All quotes include materials, labour, and mortar.',
    pricingTable: [
      { item: 'Stock brick wall (per m²)', range: 'R150 – R220 /m²' },
      { item: 'Cement brick wall (per m²)', range: 'R250 – R300 /m²' },
      { item: 'Clay face brick wall (per m²)', range: 'R300 – R450 /m²' },
      { item: 'Boundary wall (1.8 m, per lin. m)', range: 'R1,800 – R3,800 /m' },
      { item: 'Stock bricks (per 1,000)', range: 'R1,600 – R2,500' },
      { item: 'Clay face bricks (per 1,000)', range: 'R3,500 – R6,000' },
    ],
    process: [
      { step: '1', title: 'Assessment & Quote', description: 'We review plans or measure on-site, discuss brick selection, and provide an itemised quote with material quantities.' },
      { step: '2', title: 'Foundation', description: 'We excavate and pour a strip foundation to the correct depth and width for the wall height and load.' },
      { step: '3', title: 'Bricklaying', description: 'Bricks are laid in correct bond patterns with consistent mortar joints. DPC is installed at ground level. Lintels, piers, and expansion joints are placed per engineer specs.' },
      { step: '4', title: 'Finishing', description: 'Wall is capped with coping, joints are struck or raked, and the site is cleaned. Face brick walls are sealed if required.' },
    ],
    faqs: [
      { question: 'How much does brickwork cost in Johannesburg in 2026?', answer: 'Bricklaying in Johannesburg costs R150–R450 per square metre in 2026. Stock brick walls cost R150–R220/m², cement brick R250–R300/m², and clay face brick R300–R450/m². A 1.8 m boundary wall costs R1,800–R3,800 per linear metre including foundation. Raw brick prices range from R1,600/1,000 (stock) to R6,000/1,000 (premium face brick).' },
      { question: 'What is the difference between stock bricks and face bricks?', answer: 'Stock bricks (NFP) are rough-textured bricks meant to be plastered over — they are the most affordable option for walls that will be finished with plaster and paint. Face bricks are smooth, uniform clay bricks designed to be the final visible surface — they come in various colours and textures and require no plastering or painting. Face bricks cost more upfront (R3,500–R6,000 per 1,000 vs R1,600–R2,500 for stock) but save on plastering and painting costs long-term.' },
      { question: 'Do boundary walls need foundations?', answer: 'Yes. Every boundary wall requires a concrete strip foundation — without it, the wall will crack, lean, and eventually collapse due to soil movement and wind loading. Foundation depth depends on wall height and soil conditions, but typically 300–500 mm deep and 300–400 mm wide for a 1.8 m boundary wall. We pour foundations to engineering specifications.' },
      { question: 'How long does it take to build a boundary wall?', answer: 'A standard residential boundary wall (30–50 linear metres) takes 5–10 working days, including foundation digging and pouring (1–2 days), foundation curing (2–3 days), bricklaying (3–5 days), and finishing (1 day). Longer boundaries or face-brick walls take proportionally longer. Weather can cause delays during Gauteng\'s rainy season.' },
      { question: 'Can you match existing brickwork for extensions?', answer: 'We make every effort to match existing brickwork by sourcing the same brick type, size, and colour. For older homes where the original brick is discontinued, we source the closest match and can use reclaimed bricks from demolition suppliers. Mortar colour is matched by adjusting the sand and cement mix. A skilled bricklayer can achieve a near-seamless match in most cases.' },
    ],
    whyChoose: [
      'All brick types — stock, cement, clay face brick (Corobrik, Brickfields)',
      'Proper foundations, DPC, lintels, and expansion joints on every wall',
      '15+ years bricklaying experience across Gauteng — walls, homes, features',
      'Face brick expertise — struck joints, clean finishes, no plastering needed',
      'Free on-site assessment and material recommendation',
      'Fully insured with workmanship guarantee',
    ],
  },

  'landscaping': {
    slug: 'landscaping',
    intro: `Sinqobile Construction provides professional landscaping services across Johannesburg and Gauteng — from garden design and installation to irrigation systems, paving, and outdoor living spaces. Over 15 years we have designed and built hundreds of residential and commercial landscapes across the region. Landscaping in Johannesburg costs R150–R800 per square metre in 2026 depending on the scope — basic softscaping (plants, lawn, mulch) starts at R150–R250/m², while comprehensive hardscaping with premium materials can reach R600–R800/m². We handle the full landscape: garden design, soil preparation, planting, irrigation installation, paving, retaining walls, water features, and outdoor lighting. Gauteng's climate (hot summers, frost-prone winters, summer thunderstorms) requires plant selection and irrigation design suited to the highveld — we know what thrives here.`,
    subServices: [
      { name: 'Garden Design & Installation', description: 'Professional garden design with plant selection suited to Gauteng climate, soil preparation, planting, and mulching. We create low-maintenance designs that look good year-round. Basic softscaping costs R150–R250/m².' },
      { name: 'Irrigation Systems', description: 'Automated sprinkler and drip irrigation systems designed for your garden layout and plant water needs. Hunter, Rain Bird, and Toro components. Basic systems cost R85–R100/m², automated systems with weather sensors R100–R150/m². Full residential systems R10,000–R30,000.' },
      { name: 'Instant Lawn Installation', description: 'Kikuyu, LM Berea, and buffalo grass supplied and laid on prepared soil. Includes soil preparation, levelling, laying, and initial watering instructions. We advise on the best grass type for your sun/shade conditions.' },
      { name: 'Retaining Walls & Terracing', description: 'Concrete block, brick, and natural stone retaining walls for sloped gardens. Includes drainage behind the wall and correct engineering for walls over 1 m. Creates usable flat areas on sloped properties.' },
      { name: 'Outdoor Living Spaces', description: 'Built-in braai areas, fire pits, outdoor kitchens, seating walls, and entertainment areas. We integrate hardscaping with softscaping for a cohesive outdoor living environment.' },
    ],
    pricingNote: 'Landscaping costs vary significantly based on the ratio of softscaping (plants, lawn) to hardscaping (paving, walls, features). Design fees start at R5,000 for basic plans. All quotes include materials, plants, and labour.',
    pricingTable: [
      { item: 'Basic softscaping (plants, lawn, mulch)', range: 'R150 – R250 /m²' },
      { item: 'Comprehensive landscaping (soft + hard)', range: 'R400 – R800 /m²' },
      { item: 'Irrigation system (basic residential)', range: 'R10,000 – R30,000' },
      { item: 'Instant lawn (supplied & laid)', range: 'R50 – R100 /m²' },
      { item: 'Garden design (professional plan)', range: 'R5,000 – R25,000' },
      { item: 'Retaining wall (per lin. m)', range: 'R1,500 – R4,000 /m' },
      { item: 'Built-in braai area', range: 'R15,000 – R50,000' },
    ],
    process: [
      { step: '1', title: 'Design Consultation', description: 'We visit your property, discuss your vision, assess soil conditions, sun exposure, and drainage, and create a design concept with plant palette and material selections.' },
      { step: '2', title: 'Quote & Planning', description: 'You receive an itemised quote with a planting plan, irrigation layout, and hardscaping specifications. Materials and plants are sourced from local nurseries and suppliers.' },
      { step: '3', title: 'Installation', description: 'Hardscaping is installed first (paving, walls, irrigation), followed by soil preparation and planting. Lawn is laid last to avoid damage from other trades.' },
      { step: '4', title: 'Handover & Care Guide', description: 'We walk you through your new garden, demonstrate the irrigation system, and provide a maintenance guide covering watering schedules, pruning, and fertilising.' },
    ],
    faqs: [
      { question: 'How much does landscaping cost in Johannesburg in 2026?', answer: 'Landscaping in Johannesburg costs R150–R800 per square metre in 2026. Basic garden installation (plants, lawn, mulch) costs R150–R250/m². Comprehensive landscaping with paving, retaining walls, and irrigation costs R400–R800/m². A full garden makeover for a 200 m² area costs R30,000–R160,000 depending on the scope. We provide free consultations and detailed quotes.' },
      { question: 'What grass is best for Johannesburg gardens?', answer: 'Kikuyu is the most popular lawn grass in Johannesburg — it is fast-growing, drought-tolerant, recovers quickly from damage, and handles full sun. LM Berea (Berea grass) is better for shaded areas under trees. Buffalo grass is a good low-maintenance option. For frost-prone areas (common in Gauteng winter), Kikuyu goes dormant but recovers in spring. We recommend Kikuyu for most Johannesburg gardens unless you have significant shade.' },
      { question: 'How much does an irrigation system cost?', answer: 'A basic residential irrigation system in Johannesburg costs R10,000–R30,000 installed, depending on garden size and complexity. Automated systems with weather sensors and multiple zones cost more. Drip irrigation for beds and borders is more water-efficient than sprinklers. We design the system based on your garden layout, plant water needs, and municipal water pressure.' },
      { question: 'What plants survive Gauteng frost?', answer: 'Gauteng experiences winter frost (May–August), so plant selection matters. Frost-hardy choices include agapanthus, lavender, rosemary, Society garlic, wild olive, buffalo thorn, aloes, and ornamental grasses. Tropical plants (palms, strelitzia, frangipani) can survive mild frost but need protection during severe cold snaps. We select plants suited to your specific microclimate — north-facing beds are warmer, while south-facing and low-lying areas are more frost-prone.' },
      { question: 'Do you offer garden maintenance after installation?', answer: 'We focus on landscape design and construction rather than ongoing maintenance. However, we provide a detailed care guide at handover covering watering schedules, pruning timing, fertilising programme, and seasonal tasks. For ongoing maintenance, we can recommend trusted garden maintenance companies in your area.' },
    ],
    whyChoose: [
      'Full landscape service — design, installation, irrigation, paving, lighting',
      'Gauteng climate expertise — plants and grasses that thrive on the highveld',
      'Professional irrigation design with automated controllers',
      '15+ years landscaping experience across Gauteng',
      'Free design consultation and property assessment',
      'Workmanship guarantee on all installations',
    ],
  },

  'maintenance': {
    slug: 'maintenance',
    intro: `Sinqobile Construction provides comprehensive property maintenance services across Johannesburg and Gauteng — keeping residential and commercial properties in top condition year-round. Over 15 years we have maintained hundreds of properties, handling everything from routine inspections and repairs to emergency call-outs. Property maintenance is not glamorous, but it prevents small problems from becoming expensive disasters. A leaking tap left for months becomes water damage. A cracked tile becomes a bathroom leak. We offer scheduled maintenance contracts and on-demand call-out services for all trades: plumbing, electrical, painting, tiling, carpentry, roofing, waterproofing, and general repairs.`,
    subServices: [
      { name: 'Scheduled Maintenance Contracts', description: 'Monthly or quarterly property inspections covering plumbing, electrical, roofing, gutters, paintwork, and general condition. We create a maintenance schedule and address issues before they become emergencies.' },
      { name: 'Plumbing Maintenance', description: 'Leaking taps, running toilets, geyser servicing, drain cleaning, and pipe inspections. Preventative plumbing maintenance saves thousands in emergency repairs and water bills.' },
      { name: 'Painting & Touch-Up', description: 'Interior and exterior paint touch-ups, feature wall repaints, and full repainting on a scheduled cycle. Maintains property appearance and protects surfaces from weather damage.' },
      { name: 'Roof & Gutter Maintenance', description: 'Annual roof inspections, gutter cleaning, downpipe clearing, tile replacement, and flashing repairs. Essential before Gauteng\'s summer storm season (October–March).' },
      { name: 'General Handyman Services', description: 'Door and window repairs, lock replacement, shelf installation, picture hanging, furniture assembly, and minor carpentry. Our multi-skilled team handles the odd jobs that accumulate.' },
    ],
    pricingNote: 'Maintenance pricing depends on the scope and frequency of service. Scheduled contracts offer discounted rates compared to individual call-outs. All work is quoted in advance — no surprise charges.',
    pricingTable: [
      { item: 'General handyman (per hour)', range: 'R350 – R550 /hr' },
      { item: 'Scheduled maintenance visit', range: 'R1,500 – R3,500 /visit' },
      { item: 'Monthly maintenance contract (residential)', range: 'R2,500 – R5,000 /month' },
      { item: 'Gutter cleaning (full house)', range: 'R800 – R2,000' },
      { item: 'Tap repair / replacement', range: 'R350 – R800' },
      { item: 'Door / lock repair', range: 'R400 – R1,000' },
    ],
    process: [
      { step: '1', title: 'Property Assessment', description: 'We inspect your property and identify all maintenance items — from urgent repairs to preventative tasks. You receive a prioritised maintenance report.' },
      { step: '2', title: 'Maintenance Plan', description: 'We create a schedule covering all trades — plumbing, electrical, roofing, painting, and general repairs. Monthly or quarterly visits are arranged at convenient times.' },
      { step: '3', title: 'Ongoing Service', description: 'Our team completes scheduled maintenance tasks and reports on any emerging issues. Emergency call-outs are available between scheduled visits.' },
      { step: '4', title: 'Reporting', description: 'You receive a maintenance report after each visit detailing work completed, photos, and recommendations for future attention.' },
    ],
    faqs: [
      { question: 'How much does property maintenance cost in Johannesburg?', answer: 'General handyman rates in Johannesburg are R350–R550 per hour in 2026. Scheduled maintenance visits cost R1,500–R3,500 per visit. Monthly maintenance contracts for residential properties cost R2,500–R5,000/month and include regular inspections, minor repairs, and priority emergency call-outs. The contract approach is more cost-effective than individual call-outs and prevents expensive emergency repairs.' },
      { question: 'What does a maintenance contract include?', answer: 'Our residential maintenance contracts include monthly or quarterly property inspections, gutter cleaning, plumbing checks (taps, toilets, geyser), electrical safety checks, paintwork assessment, roof inspection, and minor repairs included in the contract fee. Major repairs are quoted separately but at discounted contract rates. You also get priority scheduling for emergency call-outs.' },
      { question: 'Do you maintain commercial properties?', answer: 'Yes. We maintain office buildings, retail centres, residential complexes, and commercial properties across Gauteng. Commercial contracts include all building trades, scheduled inspections, tenant request management, and emergency response. We provide monthly reports suitable for property management and body corporate records.' },
      { question: 'How often should I have my property maintained?', answer: 'We recommend quarterly maintenance inspections at minimum — with specific seasonal tasks: pre-summer (October) for roof and gutter inspection before storm season, post-summer (March) for storm damage assessment, mid-year (June) for painting and exterior checks before winter, and year-end for a comprehensive review. Monthly visits are ideal for older properties or those with known maintenance issues.' },
      { question: 'Can I call for individual repairs without a contract?', answer: 'Yes. We offer on-demand call-out services at our standard hourly rates (R350–R550/hr). You can call us for any repair — plumbing, electrical, carpentry, painting, or general handyman work. Contract clients receive discounted rates and priority scheduling.' },
    ],
    whyChoose: [
      'All trades under one roof — plumbing, electrical, painting, roofing, carpentry',
      'Scheduled maintenance prevents expensive emergency repairs',
      'Detailed inspection reports with photos after every visit',
      '15+ years maintaining properties across Gauteng',
      'Priority emergency call-outs for contract clients',
      'Fully insured with comprehensive liability cover',
    ],
  },

  'repairs': {
    slug: 'repairs',
    intro: `Sinqobile Construction provides fast, reliable home repair services across Johannesburg and Gauteng — from emergency structural repairs to everyday fixes that keep your home safe and functional. Over 15 years we have handled thousands of repair jobs across the region, covering plumbing, electrical, roofing, structural, waterproofing, and general handyman repairs. We understand that when something breaks in your home, you need it fixed quickly and properly — not a temporary patch that fails again in weeks. Our repair team carries common materials and parts on their vehicles to resolve most issues in a single visit. We are available for emergency call-outs and standard scheduled repairs.`,
    subServices: [
      { name: 'Emergency Structural Repairs', description: 'Cracked walls, damaged foundations, roof storm damage, and fire damage. We stabilise the structure, assess the damage, and carry out permanent repairs to engineering specifications.' },
      { name: 'Plumbing Repairs', description: 'Burst pipes, leaking taps, blocked drains, geyser failures, and toilet repairs. 24/7 emergency plumbing available. Most repairs completed in a single visit.' },
      { name: 'Electrical Repairs', description: 'Tripping circuits, faulty plugs, flickering lights, and geyser element replacement. Licensed electricians for safe, code-compliant repairs.' },
      { name: 'Roof Repairs', description: 'Leaking roofs, broken tiles, damaged flashing, and gutter repairs. Emergency tarping available for active leaks during storms.' },
      { name: 'General Home Repairs', description: 'Door and window repairs, broken locks, cracked tiles, damaged cupboards, squeaky floors, and all the household fixes that accumulate over time.' },
    ],
    pricingNote: 'Repair costs depend on the type and complexity of work. Emergency and after-hours repairs carry higher rates. All repairs are quoted on-site before work begins — no surprise charges.',
    pricingTable: [
      { item: 'General repair call-out (per hour)', range: 'R350 – R550 /hr' },
      { item: 'Emergency call-out (after hours)', range: 'R500 – R1,000 /hr' },
      { item: 'Burst pipe repair', range: 'R700 – R4,000' },
      { item: 'Roof leak repair', range: 'R500 – R3,000' },
      { item: 'Cracked wall repair', range: 'R1,000 – R5,000' },
      { item: 'Door / window repair', range: 'R400 – R1,500' },
    ],
    process: [
      { step: '1', title: 'Call or WhatsApp', description: 'Describe the problem — we give you an immediate estimate and schedule a visit. Emergencies are dispatched immediately.' },
      { step: '2', title: 'Diagnose & Quote', description: 'Our team assesses the damage on-site, identifies the root cause, and gives you a fixed price before starting any work.' },
      { step: '3', title: 'Repair', description: 'We complete the repair using quality materials. Most standard repairs are finished in a single visit.' },
      { step: '4', title: 'Test & Guarantee', description: 'We test the repair, clean up the work area, and provide a workmanship warranty.' },
    ],
    faqs: [
      { question: 'How much do home repairs cost in Johannesburg?', answer: 'General repair rates in Johannesburg are R350–R550 per hour during business hours and R500–R1,000/hr for emergency after-hours call-outs. Specific repairs: burst pipe R700–R4,000, roof leak R500–R3,000, cracked wall R1,000–R5,000, door/window repair R400–R1,500. We quote on-site before starting work — no hidden fees.' },
      { question: 'Do you offer emergency repair services?', answer: 'Yes. We provide emergency repair services for burst pipes, roof leaks, electrical faults, and structural damage. Our team responds within 2–4 hours across Johannesburg, Sandton, Midrand, Fourways, and surrounding areas. Call +27 82 868 8396 for immediate assistance.' },
      { question: 'Can you fix structural cracks in walls?', answer: 'Yes. We repair structural cracks by first diagnosing the cause (foundation settlement, thermal movement, overloading, or tree root damage). Minor cracks are filled with flexible filler. Significant structural cracks require crack stitching with helical bars, epoxy injection, or section rebuilding. We engage a structural engineer for major cracks to ensure the repair addresses the root cause.' },
      { question: 'Do you guarantee your repair work?', answer: 'Yes. All repairs come with a workmanship guarantee. If the same repair fails due to our workmanship, we return and fix it at no additional cost. The guarantee period depends on the repair type — structural repairs carry longer guarantees than cosmetic fixes. Guarantee terms are stated on your invoice.' },
      { question: 'Can most repairs be done in one visit?', answer: 'Yes. Our repair team carries common materials and parts (pipe fittings, taps, tiles, fillers, electrical components) on their vehicles. Most standard plumbing, electrical, and general repairs are completed in a single visit. Complex repairs or those requiring specialist materials may require a follow-up visit — we advise you upfront if this is the case.' },
    ],
    whyChoose: [
      'Single-visit repairs — common parts carried on our vehicles',
      'Emergency response within 2–4 hours across Johannesburg',
      'Root-cause diagnosis — we fix the problem, not just the symptom',
      '15+ years handling repairs across all trades in Gauteng',
      'Fixed-price quotes on-site before work begins',
      'Workmanship guarantee on every repair',
    ],
  },

  'installation': {
    slug: 'installation',
    intro: `Sinqobile Construction provides professional installation services across Johannesburg and Gauteng — covering doors, windows, ceilings, geysers, kitchen units, and a wide range of residential and commercial installations. Over 15 years we have completed thousands of installation jobs, from single door replacements to full kitchen fit-outs. A proper installation is about more than just fitting the product — it is about correct preparation, precise measurement, appropriate fixings, and clean finishing. We ensure every installation is level, plumb, secure, and functions correctly. Our installers work with all major brands and product types, and we coordinate with suppliers to ensure correct specifications before we arrive on site.`,
    subServices: [
      { name: 'Door Installation', description: 'Interior and exterior doors — wooden, aluminium, steel security doors, sliding doors, and garage doors. We hang doors plumb and level with correct clearances, and install handles, locks, and closers. Includes frame repair or replacement if needed.' },
      { name: 'Window Installation', description: 'Aluminium, wooden, and uPVC windows. New installations in openings or replacement of existing windows. We seal and flash around windows to prevent water ingress and ensure smooth operation of sliding and opening mechanisms.' },
      { name: 'Ceiling Installation', description: 'Rhinoboard/gypsum board ceilings, suspended ceilings, and ceiling repairs. Includes framework, boarding, plastering joints, and cornice installation. We ensure level, crack-free ceilings ready for painting.' },
      { name: 'Kitchen Installation', description: 'Kitchen cabinet fitting, countertop installation (granite, quartz, laminate), and appliance connections. We coordinate with plumbers and electricians for sink, dishwasher, and stove connections.' },
      { name: 'Geyser Installation', description: 'Electric, gas, solar, and heat pump geyser installation and replacement. Includes removal of old unit, plumbing connections, pressure testing, and COC where required. All major brands supplied and installed.' },
    ],
    pricingNote: 'Installation costs depend on the product type, complexity, and whether structural work is needed (e.g., enlarging a window opening). Product costs are additional to installation labour. All quotes are itemised with separate material and labour lines.',
    pricingTable: [
      { item: 'Interior door (supply & hang)', range: 'R1,500 – R4,000' },
      { item: 'Exterior / security door (installed)', range: 'R3,000 – R8,000' },
      { item: 'Aluminium window (installed)', range: 'R2,000 – R6,000' },
      { item: 'Ceiling installation (per m²)', range: 'R150 – R300 /m²' },
      { item: 'Kitchen cabinets (installation only)', range: 'R5,000 – R15,000' },
      { item: 'Geyser installation (labour, excl. unit)', range: 'R2,000 – R3,500' },
      { item: 'Garage door (automated, installed)', range: 'R8,000 – R20,000' },
    ],
    process: [
      { step: '1', title: 'Measure & Specify', description: 'We measure the installation area precisely, confirm product specifications, and check for any structural or preparation work needed before installation day.' },
      { step: '2', title: 'Preparation', description: 'We prepare the opening or mounting area — remove old products, repair frames, ensure the structure is ready to receive the new installation.' },
      { step: '3', title: 'Installation', description: 'Products are fitted plumb, level, and secure. We test all moving parts, check seals and weatherproofing, and ensure everything operates smoothly.' },
      { step: '4', title: 'Clean-Up & Handover', description: 'Installation area is cleaned, packaging removed, and you receive operating instructions. Workmanship guarantee provided.' },
    ],
    faqs: [
      { question: 'How much does door installation cost in Johannesburg?', answer: 'Interior door installation in Johannesburg costs R1,500–R4,000 in 2026, depending on the door type and whether the frame needs repair or replacement. Exterior and security door installation costs R3,000–R8,000. These prices include the door, frame (if needed), handles, and installation labour. We supply from all major door manufacturers or install doors you have purchased.' },
      { question: 'Can you install a ceiling in an existing room?', answer: 'Yes. We install rhinoboard/gypsum ceilings in rooms that currently have no ceiling, or replace damaged ceilings. The process involves installing a timber or steel framework, fixing ceiling boards, plastering joints, and installing cornices. Costs R150–R300/m² depending on ceiling height and room size. Wiring for ceiling lights is coordinated with our electricians.' },
      { question: 'Do you supply the products or just install?', answer: 'We can supply and install (recommended for warranty coverage and correct specification) or install products you have purchased. When we supply, we ensure the product is correct for the application — right size, material, and rating. If you buy your own, we will confirm specifications before installation to avoid costly mistakes.' },
      { question: 'How long does kitchen installation take?', answer: 'Kitchen cabinet and countertop installation typically takes 2–4 days, depending on kitchen size and complexity. This includes cabinet fitting, countertop installation, plumbing connections (sink, dishwasher), electrical connections (stove, oven, extractor), and final adjustments. Countertop templating and fabrication (granite, quartz) adds 5–10 days lead time before installation.' },
      { question: 'Do you install garage doors?', answer: 'Yes. We install sectional, roll-up, and tip-up garage doors with automated motor systems. Installation includes the door, frame, motor, remote controls, and safety beam. Costs R8,000–R20,000 depending on door size, material (steel, aluminium, wooden), and motor brand. We also repair and service existing garage doors and motors.' },
    ],
    whyChoose: [
      'All installation types — doors, windows, ceilings, kitchens, geysers, garage doors',
      'Precise measurement and specification check before every installation',
      'Coordination with plumbers and electricians for connected installations',
      '15+ years installation experience across Gauteng',
      'Supply and install or install-only — your choice',
      'Workmanship guarantee on every installation',
    ],
  },
}

export function getServiceContent(slug: string): ServiceContent | undefined {
  return serviceContentData[slug]
}
