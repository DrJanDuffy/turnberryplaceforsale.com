/**
 * Centralized SEO Configuration
 * Meta tags for all pages following 2025 Google SEO best practices
 * Dr. Jan Duffy - Turnberry Place Las Vegas
 */

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.turnberryplaceforsale.com'

export interface SEOConfig {
  title: string
  description: string
  canonical: string
  ogImage: string
  ogImageAlt?: string
  keywords?: string[]
  robots?: string
  noindex?: boolean
  nofollow?: boolean
}

export const seoConfig: Record<string, SEOConfig> = {
  '/': {
    title: 'Turnberry Place Condos for Sale | Luxury High-Rise Near Las Vegas Strip',
    description: 'Luxury condos at Turnberry Place Las Vegas. 4 high-rise towers, $800K-$10M+. Strip views, Stirling Club amenities, private elevators. Dr. Jan Duffy (702) 500-1971',
    canonical: `${BASE_URL}/`,
    ogImage: `${BASE_URL}/images/turnberry/Turnberry_Place_For_Sale.jpg`,
    ogImageAlt: 'Turnberry Place Las Vegas luxury high-rise condominiums with Las Vegas Strip views',
    keywords: [
      'Turnberry Place',
      'Las Vegas condos',
      'luxury high-rise',
      'Strip view condos',
      'Turnberry Place for sale',
      'Las Vegas luxury real estate',
      'high-rise condos Las Vegas',
      'The Stirling Club',
      'Dr. Jan Duffy',
    ],
    robots: 'index, follow',
  },
  '/towers': {
    title: 'Turnberry Place Towers 1-4 | 38-45 Story Luxury High-Rises',
    description: 'Explore 4 Turnberry Place towers. Tower 1 (38 floors, 2000), Towers 2-4 (45 floors). Private elevators, concierge, Strip & mountain views. Schedule tour today.',
    canonical: `${BASE_URL}/towers`,
    ogImage: `${BASE_URL}/images/turnberry/turnberry-tower-south-view.jpeg`,
    ogImageAlt: 'Turnberry Place four luxury towers near the Las Vegas Strip',
    keywords: [
      'Turnberry Place towers',
      'Tower 1 Turnberry Place',
      'Tower 2 Turnberry Place',
      'Tower 3 Turnberry Place',
      'Tower 4 Turnberry Place',
      'luxury high-rise towers Las Vegas',
      '38 story condos',
      '45 story condos',
    ],
    robots: 'index, follow',
  },
  '/available-condos': {
    title: 'Turnberry Place Condos for Sale | Current Las Vegas MLS Listings',
    description: 'Browse available Turnberry Place condos with real-time MLS data. Prices, photos, virtual tours. 1-4 bedrooms from $800K. Schedule private showing.',
    canonical: `${BASE_URL}/available-condos`,
    ogImage: `${BASE_URL}/images/turnberry/condos_for_sale_Turnberry_Place.jpg`,
    ogImageAlt: 'Turnberry Place condos for sale in Las Vegas',
    keywords: [
      'Turnberry Place condos for sale',
      'Las Vegas MLS listings',
      'luxury condos Las Vegas',
      'Turnberry Place available units',
      'Las Vegas high-rise for sale',
    ],
    robots: 'index, follow',
  },
  '/stirling-club': {
    title: 'The Stirling Club | 80,000 SF Private Club at Turnberry Place',
    description: 'Exclusive Stirling Club for Turnberry Place residents. Fitness center, resort pools, tennis, spa, fine dining, business center. Membership included.',
    canonical: `${BASE_URL}/stirling-club`,
    ogImage: `${BASE_URL}/images/turnberry/optimized/StirlingClub_CigarBar_View1.optimized.jpg`,
    ogImageAlt: 'The Stirling Club private amenities at Turnberry Place Las Vegas',
    keywords: [
      'The Stirling Club',
      'Turnberry Place amenities',
      'private club Las Vegas',
      'luxury amenities',
      'resort-style living',
    ],
    robots: 'index, follow',
  },
  '/floor-plans': {
    title: 'Turnberry Place Floor Plans | 1,500-9,000+ SF Luxury Layouts',
    description: 'View Turnberry Place floor plans A-H. 1-5 bedrooms, 1,500-9,000+ sq ft. Wraparound balconies, chef kitchens, marble baths. Download PDF plans.',
    canonical: `${BASE_URL}/floor-plans`,
    ogImage: `${BASE_URL}/images/turnberry/turnberry-place-floor-plan-h.png`,
    ogImageAlt: 'Turnberry Place Las Vegas luxury floor plans',
    keywords: [
      'Turnberry Place floor plans',
      'luxury condo layouts',
      'Las Vegas high-rise floor plans',
      '1 bedroom floor plan',
      'penthouse floor plan',
    ],
    robots: 'index, follow',
  },
  '/amenities': {
    title: 'Turnberry Place Amenities | Guard-Gated Luxury Living Las Vegas',
    description: 'Turnberry Place amenities: 24/7 security, valet, concierge, Stirling Club access, pools, tennis, spa, fitness. True resort-style high-rise living.',
    canonical: `${BASE_URL}/amenities`,
    ogImage: `${BASE_URL}/images/turnberry/sterlingclubpoolwithpeople.jpeg`,
    ogImageAlt: 'Resort-style pool and amenities at Turnberry Place Las Vegas',
    keywords: [
      'Turnberry Place amenities',
      'luxury condo amenities',
      'guard-gated Las Vegas',
      'concierge service',
      'resort amenities',
    ],
    robots: 'index, follow',
  },
  '/neighborhood': {
    title: 'Turnberry Place Location | One Block from Las Vegas Strip',
    description: 'Turnberry Place location between Wynn & Sahara. Walk to Strip, Convention Center, dining. Guard-gated privacy minutes from entertainment.',
    canonical: `${BASE_URL}/neighborhood`,
    ogImage: `${BASE_URL}/images/turnberry/turnberry-tower-nice-view.jpg`,
    ogImageAlt: 'Turnberry Place neighborhood near the Las Vegas Strip',
    keywords: [
      'Turnberry Place location',
      'Las Vegas Strip condos',
      'Paradise Road Las Vegas',
      'near Wynn Encore',
      'Las Vegas neighborhood',
    ],
    robots: 'index, follow',
  },
  '/agent': {
    title: 'Dr. Jan Duffy | Turnberry Place Las Vegas Condo Specialist',
    description: 'Dr. Jan Duffy - Turnberry Place expert with Berkshire Hathaway. Exclusive buyer representation, market analysis, private showings. Call (702) 500-1971.',
    canonical: `${BASE_URL}/agent`,
    ogImage: `${BASE_URL}/images/turnberry/asset-1.jpg`,
    ogImageAlt: 'Dr. Jan Duffy, REALTOR - Turnberry Place specialist',
    keywords: [
      'Dr. Jan Duffy',
      'Turnberry Place realtor',
      'Las Vegas real estate agent',
      'Berkshire Hathaway',
      'luxury condo specialist',
    ],
    robots: 'index, follow',
  },
  '/price-features': {
    title: 'Turnberry Place Pricing & Features | $800K-$10M+ Luxury Condos',
    description: 'Turnberry Place pricing guide. Units from $800K to $10M+. HOA details, tax info, included features. Get current pricing sheet.',
    canonical: `${BASE_URL}/price-features`,
    ogImage: `${BASE_URL}/images/turnberry/Turnberry_Place_For_Sale.jpg`,
    ogImageAlt: 'Turnberry Place pricing and features information',
    keywords: [
      'Turnberry Place pricing',
      'luxury condo prices',
      'HOA fees',
      'Las Vegas condo costs',
      'high-rise pricing',
    ],
    robots: 'index, follow',
  },
  '/photos': {
    title: 'Turnberry Place Photo Gallery | Interior & Exterior Views',
    description: 'Browse Turnberry Place photos. Luxury interiors, Strip views, Stirling Club, pools, lobby. Virtual tours available.',
    canonical: `${BASE_URL}/photos`,
    ogImage: `${BASE_URL}/images/turnberry/Las-Vegas-High-Rise-Condo-Living-Downtown-Las-Vegas-Turnberry-Place-Interior.jpg`,
    ogImageAlt: 'Turnberry Place Las Vegas photo gallery',
    keywords: [
      'Turnberry Place photos',
      'luxury condo gallery',
      'Las Vegas high-rise photos',
      'interior photos',
      'virtual tour',
    ],
    robots: 'index, follow',
  },
  '/map': {
    title: 'Turnberry Place Map & Location | Paradise Rd, Las Vegas NV',
    description: 'Turnberry Place location at 2827 Paradise Rd. Interactive map showing nearby casinos, restaurants, Convention Center, airport access.',
    canonical: `${BASE_URL}/map`,
    ogImage: `${BASE_URL}/images/turnberry/turnberry-tower-nice-view.jpg`,
    ogImageAlt: 'Turnberry Place location map Las Vegas',
    keywords: [
      'Turnberry Place map',
      '2827 Paradise Rd',
      'Las Vegas location',
      'near Strip',
      'Paradise Road condos',
    ],
    robots: 'index, follow',
  },
  '/request-details': {
    title: 'Contact Turnberry Place Team | Schedule Private Showing',
    description: 'Contact Dr. Jan Duffy for Turnberry Place showings, pricing, availability. Response within 24 hours. Call (702) 500-1971 or submit form.',
    canonical: `${BASE_URL}/request-details`,
    ogImage: `${BASE_URL}/images/turnberry/asset-1.jpg`,
    ogImageAlt: 'Contact Dr. Jan Duffy for Turnberry Place information',
    keywords: [
      'contact Turnberry Place',
      'schedule showing',
      'request details',
      'private tour',
      'Dr. Jan Duffy contact',
    ],
    robots: 'index, follow',
  },
  '/open-house': {
    title: 'Turnberry Place Open Houses | Upcoming Events Las Vegas',
    description: 'Schedule a private Turnberry Place tour or attend upcoming open houses. See available units, meet Dr. Jan Duffy, explore Stirling Club.',
    canonical: `${BASE_URL}/open-house`,
    ogImage: `${BASE_URL}/images/turnberry/turnberry-tower-nice-view.jpg`,
    ogImageAlt: 'Turnberry Place open house and private showings',
    keywords: [
      'Turnberry Place open house',
      'private showing',
      'schedule tour',
      'Las Vegas open house',
      'property tour',
    ],
    robots: 'index, follow',
  },
  '/share': {
    title: 'Share Turnberry Place | Send Listing Info to Friends',
    description: 'Share Turnberry Place listing with friends and family. Email, text, or social media sharing options.',
    canonical: `${BASE_URL}/share`,
    ogImage: `${BASE_URL}/images/turnberry/Turnberry_Place_For_Sale.jpg`,
    ogImageAlt: 'Share Turnberry Place Las Vegas',
    keywords: [
      'share Turnberry Place',
      'send listing',
      'share property',
    ],
    robots: 'index, follow',
  },
}

/**
 * Get SEO config for a specific path
 */
export function getSEOConfig(path: string, overrides?: Partial<SEOConfig>): SEOConfig {
  // Normalize path (remove trailing slash, ensure starts with /)
  const normalizedPath = path === '' || path === '/' ? '/' : `/${path.replace(/^\/|\/$/g, '')}`
  
  // Get base config for path
  const baseConfig = seoConfig[normalizedPath] || seoConfig['/']
  
  // Merge with overrides
  return {
    ...baseConfig,
    ...overrides,
    // Ensure canonical is always absolute URL
    canonical: overrides?.canonical 
      ? (overrides.canonical.startsWith('http') ? overrides.canonical : `${BASE_URL}${overrides.canonical}`)
      : baseConfig.canonical,
    // Ensure ogImage is always absolute URL
    ogImage: overrides?.ogImage
      ? (overrides.ogImage.startsWith('http') ? overrides.ogImage : `${BASE_URL}${overrides.ogImage}`)
      : baseConfig.ogImage,
  }
}

/**
 * Default SEO config (fallback)
 */
export const defaultSEO: SEOConfig = {
  title: 'Turnberry Place Las Vegas | Luxury High-Rise Condos',
  description: 'Luxury condominiums at Turnberry Place Las Vegas. 4 high-rise towers near the Strip with exclusive Stirling Club amenities. Dr. Jan Duffy (702) 500-1971',
  canonical: BASE_URL,
  ogImage: `${BASE_URL}/images/turnberry/Turnberry_Place_For_Sale.jpg`,
  ogImageAlt: 'Turnberry Place Las Vegas luxury high-rise condominiums',
  robots: 'index, follow',
}
