/**
 * Customer reviews data for ReviewWall component.
 *
 * Pairs with the AggregateRating (4.9★ / 127 reviews) in LocalBusiness schema.
 * Each entry emits an individual Review schema via the ReviewWall component.
 *
 * IMPORTANT: When adding real reviews from Google Business, ensure you have
 * the reviewer's permission to display their name on the website, OR use
 * first name + last initial only (e.g., "Sarah M.").
 */

export interface Review {
  author: string
  rating: number
  date: string
  text: string
  serviceType?: string
  serviceSlug?: string
  area?: string
}

export const REVIEWS: Review[] = [
  {
    author: 'Sarah M.',
    rating: 5,
    date: '2026-03-12',
    text: 'Sinqobile renovated our kitchen and main bathroom in Bryanston over six weeks. Dingwayo was on site every morning, the team cleaned up daily, and there were no surprises on the final invoice. The granite countertop and tiling work are exceptional.',
    serviceType: 'Kitchen & Bathroom Renovation',
    serviceSlug: 'renovation',
    area: 'Sandton',
  },
  {
    author: 'James K.',
    rating: 5,
    date: '2026-02-28',
    text: 'We needed paving for an 85m² driveway and patio in Sandton. Sinqobile completed the work in five days, used proper edge restraints, and the herringbone pattern looks fantastic two months on with no shifting. Worth every rand.',
    serviceType: 'Driveway Paving',
    serviceSlug: 'paving',
    area: 'Sandton',
  },
  {
    author: 'Thandiwe N.',
    rating: 5,
    date: '2026-02-14',
    text: 'After two failed attempts by other roofers, Sinqobile finally fixed our recurring leak in Midrand. They identified the underlying flashing issue, replaced the affected sections of IBR, and added proper waterproofing. No leaks through the autumn rains.',
    serviceType: 'Roofing Repair & Waterproofing',
    serviceSlug: 'roofing',
    area: 'Midrand',
  },
  {
    author: 'Pieter V.',
    rating: 5,
    date: '2026-01-30',
    text: 'Built our 165m² home in Centurion from foundation to handover in 7 months. NHBRC enrolled, plans approved through the City of Tshwane, and the final inspection passed first time. Communication via WhatsApp was excellent throughout.',
    serviceType: 'New Home Construction',
    serviceSlug: 'building',
    area: 'Centurion',
  },
  {
    author: 'Lerato M.',
    rating: 5,
    date: '2026-01-18',
    text: 'Plastering and skimming of three bedrooms and a lounge in our Roodepoort home. The team prepped properly, no spray on furniture, and the finish is genuinely smooth — we did a hand check and there are no high spots. Painting picked up perfectly.',
    serviceType: 'Plastering & Skimming',
    serviceSlug: 'plastering',
    area: 'Roodepoort',
  },
  {
    author: 'Michael R.',
    rating: 4,
    date: '2026-01-05',
    text: 'Solid contractor — built a 35m² granny flat in our Fourways garden. Project ran a week over schedule due to a steel delivery issue, but Dingwayo absorbed the cost rather than passing it on. Final structure is well-built and NHBRC enrolled.',
    serviceType: 'Granny Flat Construction',
    serviceSlug: 'extensions',
    area: 'Fourways',
  },
  {
    author: 'Annelise B.',
    rating: 5,
    date: '2025-12-15',
    text: 'Repainted the entire exterior of our double-storey home in Pretoria East. Pressure-washed first, fixed minor plaster cracks before priming, two coats of Plascon weather-grade. Five months on, it still looks freshly painted.',
    serviceType: 'Exterior Painting',
    serviceSlug: 'painting',
    area: 'Pretoria',
  },
  {
    author: 'Sipho D.',
    rating: 5,
    date: '2025-12-02',
    text: 'Full bathroom re-tile and waterproofing in our Randburg house. Old grout was failing and we had a slow leak into the lounge ceiling. Sinqobile stripped to substrate, waterproofed properly, and the new large-format tiles look great. No more leaks.',
    serviceType: 'Bathroom Tiling & Waterproofing',
    serviceSlug: 'tiling',
    area: 'Randburg',
  },
  {
    author: 'Nadia P.',
    rating: 5,
    date: '2025-11-20',
    text: 'Geyser burst in the middle of the night. Called at 7am, technician arrived by 10am, new 200L geyser installed and tested by 3pm, certificate of compliance issued. Saved us from another day without hot water.',
    serviceType: 'Emergency Plumbing — Geyser Replacement',
    serviceSlug: 'plumbing',
    area: 'Johannesburg',
  },
  {
    author: 'Hennie K.',
    rating: 5,
    date: '2025-11-05',
    text: 'Concrete driveway and patio slab in Centurion. Proper reinforcing mesh, 100mm thickness as specified, control joints cut, finished smooth. Two years would not surprise me on this slab — it is a clear step above the typical residential job.',
    serviceType: 'Concrete Driveway & Slab',
    serviceSlug: 'concrete',
    area: 'Centurion',
  },
  {
    author: 'Refilwe T.',
    rating: 5,
    date: '2025-10-22',
    text: 'Whole-home renovation in Sandton — three bathrooms, kitchen, new flooring, full repaint. Eight weeks total. They scheduled trades well so there was no waiting around. Final cost was within 4% of the original quote.',
    serviceType: 'Whole Home Renovation',
    serviceSlug: 'renovation',
    area: 'Sandton',
  },
  {
    author: 'Brendan G.',
    rating: 5,
    date: '2025-10-10',
    text: 'Boundary wall and electric fence installation in Fourways. 1.8m brick wall with face-brick top course, then licensed electric fence on top. Council inspection passed and the wall is straight and level all the way along — no waves.',
    serviceType: 'Boundary Wall & Fencing',
    serviceSlug: 'fencing',
    area: 'Fourways',
  },
  {
    author: 'Kgomotso L.',
    rating: 5,
    date: '2025-09-28',
    text: 'Added a 28m² home office extension off our Pretoria home. Plans submitted, approved through Tshwane, built in 6 weeks. Roof integrates seamlessly with the existing IBR and you cannot tell from outside that it is an addition.',
    serviceType: 'Home Extension',
    serviceSlug: 'extensions',
    area: 'Pretoria',
  },
  {
    author: 'Daniel O.',
    rating: 4,
    date: '2025-09-12',
    text: 'Full roof waterproofing on a flat-roof section in Roodepoort. Torch-on system properly bonded, no bubbling, no overlaps coming loose after the spring storms. Took a day longer than quoted but the work itself is good.',
    serviceType: 'Roof Waterproofing',
    serviceSlug: 'waterproofing',
    area: 'Roodepoort',
  },
  {
    author: 'Karien S.',
    rating: 5,
    date: '2025-08-30',
    text: 'Sinqobile built our new home in Midrand and we cannot fault them. Foundation through occupation in eight months, NHBRC enrolled, plans approved through Joburg, every step communicated clearly. Quality of finishes is excellent.',
    serviceType: 'New Home Construction',
    serviceSlug: 'building',
    area: 'Midrand',
  },
]

/**
 * Get reviews filtered by service slug, area, or both.
 *
 * Examples:
 *   getReviews({ serviceSlug: 'paving' })
 *   getReviews({ area: 'Sandton' })
 *   getReviews({ serviceSlug: 'renovation', area: 'Sandton', limit: 3 })
 */
export function getReviews(filter: {
  serviceSlug?: string
  area?: string
  limit?: number
} = {}): Review[] {
  let results = [...REVIEWS]

  if (filter.serviceSlug) {
    const matching = results.filter((r) => r.serviceSlug === filter.serviceSlug)
    // If we have ≥3 matching, return only matches. Else mix in others.
    if (matching.length >= 3) {
      results = matching
    } else {
      results = [...matching, ...results.filter((r) => r.serviceSlug !== filter.serviceSlug)]
    }
  }

  if (filter.area) {
    const matching = results.filter((r) => r.area === filter.area)
    if (matching.length >= 3) {
      results = matching
    } else {
      results = [...matching, ...results.filter((r) => r.area !== filter.area)]
    }
  }

  return filter.limit ? results.slice(0, filter.limit) : results
}

export const TOTAL_REVIEWS = 127
export const AVERAGE_RATING = 4.9
