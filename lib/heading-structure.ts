/**
 * Heading Structure Documentation
 * Defines proper H1, H2, H3 hierarchy for each page for SEO and accessibility
 */

export interface HeadingStructure {
  h1: string
  h2: Array<{
    text: string
    h3?: string[]
  }>
}

export const headingStructures: Record<string, HeadingStructure> = {
  '/': {
    h1: 'Turnberry Place Condos for Sale | Luxury High-Rise Living Near the Las Vegas Strip',
    h2: [
      {
        text: 'Four Distinct Luxury Towers',
        h3: [
          'Tower 1 - Elegant High-Rise Living',
          'Tower 2 - Sophisticated Strip Views',
          'Tower 3 - Premium Desert Living',
          'Tower 4 - Ultimate Luxury Living',
        ],
      },
      {
        text: 'Available Turnberry Place Condos',
      },
      {
        text: 'Luxury Amenities',
        h3: ['Exclusive Access to The Stirling Club'],
      },
      {
        text: 'Schedule a Showing',
      },
      {
        text: 'About Dr. Jan Duffy',
      },
      {
        text: 'Photo Gallery',
      },
      {
        text: 'Frequently Asked Questions',
      },
    ],
  },
  '/towers': {
    h1: 'Turnberry Place Las Vegas - Four Luxury High-Rise Towers',
    h2: [
      {
        text: 'Tower 1 - The Original Vision (38 Stories, 2000)',
        h3: [
          'Tower 1 Features & Views',
          'Tower 1 Available Units',
        ],
      },
      {
        text: 'Tower 2 - Sophisticated Living (45 Stories, 2001)',
        h3: [
          'Tower 2 Features & Views',
          'Tower 2 Available Units',
        ],
      },
      {
        text: 'Tower 3 - Contemporary Luxury (45 Stories, 2002)',
        h3: [
          'Tower 3 Features & Views',
          'Tower 3 Available Units',
        ],
      },
      {
        text: 'Tower 4 - The Crown Jewel (45 Stories, 2005)',
        h3: [
          'Tower 4 Features & Views',
          'Tower 4 Available Units',
        ],
      },
      {
        text: 'Compare All Towers',
      },
      {
        text: 'Frequently Asked Questions',
      },
    ],
  },
  '/stirling-club': {
    h1: 'The Stirling Club - 80,000 SF Private Amenity Club at Turnberry Place',
    h2: [
      {
        text: 'Fitness & Wellness',
        h3: [
          'State-of-the-Art Fitness Center',
          'Spa & Beauty Services',
        ],
      },
      {
        text: 'Recreation',
        h3: [
          'Resort-Style Pools',
          'Tennis & Pickleball Courts',
        ],
      },
      {
        text: 'Dining & Social',
        h3: [
          'Restaurant & Bar Venues',
          'Social Lounges',
        ],
      },
      {
        text: 'Business Services',
      },
      {
        text: 'Frequently Asked Questions',
      },
    ],
  },
  '/available-condos': {
    h1: 'Turnberry Place Condos for Sale | Current Las Vegas MLS Listings',
    h2: [
      {
        text: 'VIP Pre-Market Listings',
      },
      {
        text: 'Available Turnberry Place Condominiums',
      },
      {
        text: 'Frequently Asked Questions',
      },
    ],
  },
  '/floor-plans': {
    h1: 'Turnberry Place Floor Plans | 1,500-9,000+ SF Luxury Layouts',
    h2: [
      {
        text: 'Browse All Floor Plans',
      },
      {
        text: 'Understanding Turnberry Place Floor Plans',
      },
      {
        text: 'Frequently Asked Questions',
      },
    ],
  },
  '/amenities': {
    h1: 'Turnberry Place Amenities | Guard-Gated Luxury Living Las Vegas',
    h2: [
      {
        text: 'The Stirling Club',
      },
      {
        text: 'Security & Services',
      },
      {
        text: 'Resort-Style Living',
      },
    ],
  },
  '/neighborhood': {
    h1: 'Turnberry Place Neighborhood | One Block from Las Vegas Strip',
    h2: [
      {
        text: 'Prime Strip-Adjacent Location',
      },
      {
        text: 'Nearby Attractions & Entertainment',
      },
      {
        text: 'Dining & Shopping',
      },
      {
        text: 'Convenience & Accessibility',
      },
    ],
  },
  '/agent': {
    h1: 'Dr. Jan Duffy | Turnberry Place Las Vegas Condo Specialist',
    h2: [
      {
        text: 'Your Turnberry Place Neighbor & Expert',
      },
      {
        text: 'Services & Expertise',
      },
      {
        text: 'Client Testimonials',
      },
      {
        text: 'Contact Information',
      },
    ],
  },
  '/request-details': {
    h1: 'Request Turnberry Place Pricing & Details | Schedule a Private Tour',
    h2: [
      {
        text: 'Get Started Today',
      },
      {
        text: 'Contact Information',
      },
    ],
  },
  '/open-house': {
    h1: 'Turnberry Place Open Houses | Upcoming Events Las Vegas',
    h2: [
      {
        text: 'Schedule a Private Showing',
      },
      {
        text: 'Contact Information',
      },
    ],
  },
  '/photos': {
    h1: 'Turnberry Place Photo Gallery | Interior & Exterior Views',
    h2: [
      {
        text: 'Residence Photos',
      },
      {
        text: 'Stirling Club Photos',
      },
      {
        text: 'Views & Exterior',
      },
    ],
  },
  '/map': {
    h1: 'Turnberry Place Map & Location | Paradise Rd, Las Vegas NV',
    h2: [
      {
        text: 'Interactive Map',
      },
      {
        text: 'Nearby Points of Interest',
      },
      {
        text: 'Directions & Contact',
      },
    ],
  },
  '/price-features': {
    h1: 'Turnberry Place Pricing & Features | $800K-$10M+ Luxury Condos',
    h2: [
      {
        text: 'Pricing Overview',
      },
      {
        text: 'HOA Fees & Costs',
      },
      {
        text: 'Included Features',
      },
    ],
  },
}

/**
 * Get heading structure for a specific page
 */
export function getHeadingStructure(path: string): HeadingStructure | null {
  const normalizedPath = path === '' || path === '/' ? '/' : `/${path.replace(/^\/|\/$/g, '')}`
  return headingStructures[normalizedPath] || null
}

/**
 * Validate heading structure on a page
 * Returns array of issues found
 */
export function validateHeadingStructure(
  path: string,
  actualHeadings: { level: 1 | 2 | 3; text: string }[]
): string[] {
  const expected = getHeadingStructure(path)
  if (!expected) {
    return ['No heading structure defined for this page']
  }

  const issues: string[] = []

  // Check H1
  const h1 = actualHeadings.find((h) => h.level === 1)
  if (!h1) {
    issues.push('Missing H1 heading')
  } else if (h1.text !== expected.h1) {
    issues.push(`H1 mismatch: expected "${expected.h1}", got "${h1.text}"`)
  }

  // Check H2 count
  const h2Count = actualHeadings.filter((h) => h.level === 2).length
  const expectedH2Count = expected.h2.length
  if (h2Count < expectedH2Count) {
    issues.push(
      `Insufficient H2 headings: expected at least ${expectedH2Count}, found ${h2Count}`
    )
  }

  // Check for multiple H1s
  const h1Count = actualHeadings.filter((h) => h.level === 1).length
  if (h1Count > 1) {
    issues.push(`Multiple H1 headings found: ${h1Count} (should be 1)`)
  }

  return issues
}
