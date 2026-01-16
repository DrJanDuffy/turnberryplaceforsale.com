/**
 * Schema generator functions for JSON-LD structured data
 * Creates properly formatted Schema.org schemas for SEO
 */

import type {
  Organization,
  RealEstateAgent,
  LocalBusiness,
  WebSite,
  BreadcrumbList,
  FAQPage,
  Place,
  RealEstateListing,
  Person,
  ListingData,
  PlaceData,
  BreadcrumbItem,
  PostalAddress,
  GeoCoordinates,
} from './types'

// Base configuration constants
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.turnberryplaceforsale.com'

const BASE_ADDRESS: PostalAddress = {
  '@type': 'PostalAddress',
  streetAddress: '2827 Paradise Rd',
  addressLocality: 'Las Vegas',
  addressRegion: 'NV',
  postalCode: '89109',
  addressCountry: 'US',
}

const BASE_GEO: GeoCoordinates = {
  '@type': 'GeoCoordinates',
  latitude: 36.1351,
  longitude: -115.1551,
}

const BASE_ORGANIZATION: Organization = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${BASE_URL}/#organization`,
  name: 'Berkshire Hathaway HomeServices Nevada Properties',
  url: 'https://www.berkshirehathawayhs.com',
  logo: `${BASE_URL}/images/turnberry/asset-19.jpg`,
}

/**
 * Generate Organization schema
 */
export function generateOrganizationSchema(overrides?: Partial<Organization>): Organization {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${BASE_URL}/#organization`,
    name: 'The Turnberry Place Team at Berkshire Hathaway HomeServices Nevada Properties',
    url: BASE_URL,
    logo: `${BASE_URL}/images/turnberry/asset-19.jpg`,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+17025001971',
      contactType: 'sales',
      areaServed: ['Las Vegas', 'Paradise', 'Winchester'],
      availableLanguage: ['English', 'Spanish'],
    },
    parentOrganization: BASE_ORGANIZATION,
    ...overrides,
  }
}

/**
 * Generate RealEstateAgent schema for Dr. Jan Duffy
 */
export function generateRealEstateAgentSchema(overrides?: Partial<RealEstateAgent>): RealEstateAgent {
  return {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    '@id': `${BASE_URL}/#agent`,
    name: 'Dr. Jan Duffy, REALTOR',
    alternateName: 'The Turnberry Place Team',
    description:
      'Turnberry Place specialist and Las Vegas luxury high-rise condo REALTOR. Licensed REALTOR (S.0197614.LLC) with Berkshire Hathaway HomeServices Nevada Properties.',
    url: BASE_URL,
    image: `${BASE_URL}/images/turnberry/asset-1.jpg`,
    logo: `${BASE_URL}/images/turnberry/asset-19.jpg`,
    telephone: ['+17025001971'],
    email: 'DrDuffy@TurnberryPlaceForSale.com',
    address: BASE_ADDRESS,
    geo: BASE_GEO,
    areaServed: ['Las Vegas', 'Paradise', 'Winchester'],
    priceRange: '$800,000 - $10,000,000+',
    identifier: {
      '@type': 'PropertyValue',
      name: 'Nevada Real Estate License',
      value: 'S.0197614.LLC',
    },
    parentOrganization: BASE_ORGANIZATION,
    memberOf: BASE_ORGANIZATION,
    knowsAbout: [
      'Turnberry Place Las Vegas',
      'Luxury High-Rise Condos',
      'Las Vegas Strip Real Estate',
      'The Stirling Club',
    ],
    sameAs: ['https://lasvegas55plushomes.com'],
    ...overrides,
  }
}

/**
 * Generate LocalBusiness schema
 */
export function generateLocalBusinessSchema(overrides?: Partial<LocalBusiness>): LocalBusiness {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${BASE_URL}/#business`,
    name: 'The Turnberry Place Team',
    description:
      'Luxury real estate services specializing in Turnberry Place high-rise condominiums near the Las Vegas Strip.',
    url: BASE_URL,
    image: `${BASE_URL}/images/turnberry/asset-1.jpg`,
    logo: `${BASE_URL}/images/turnberry/asset-19.jpg`,
    telephone: ['+17025001971'],
    email: 'DrDuffy@TurnberryPlaceForSale.com',
    address: BASE_ADDRESS,
    geo: BASE_GEO,
    priceRange: '$800,000 - $10,000,000+',
    areaServed: ['Las Vegas', 'Paradise', 'Winchester'],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+17025001971',
      contactType: 'sales',
      areaServed: ['Las Vegas', 'Paradise', 'Winchester'],
    },
    ...overrides,
  }
}

/**
 * Generate WebSite schema with SearchAction
 */
export function generateWebSiteSchema(overrides?: Partial<WebSite>): WebSite {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${BASE_URL}/#website`,
    name: 'Turnberry Place Las Vegas | Luxury Real Estate',
    url: BASE_URL,
    description:
      'Luxury high-rise condominiums at Turnberry Place Las Vegas. 4 towers near the Strip with exclusive Stirling Club amenities.',
    publisher: generateOrganizationSchema(),
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${BASE_URL}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
    inLanguage: ['en-US', 'es-US'],
    ...overrides,
  }
}

/**
 * Generate BreadcrumbList schema
 */
export function generateBreadcrumbSchema(items: BreadcrumbItem[]): BreadcrumbList {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${BASE_URL}/#breadcrumb`,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${BASE_URL}${item.url}`,
    })),
  }
}

/**
 * Generate RealEstateListing schema
 */
export function generateRealEstateListingSchema(listing: ListingData): RealEstateListing {
  const schema: RealEstateListing = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateListing',
    '@id': `${BASE_URL}${listing.url}#listing`,
    name: listing.name,
    description: listing.description,
    url: listing.url.startsWith('http') ? listing.url : `${BASE_URL}${listing.url}`,
    dateModified: listing.dateModified || new Date().toISOString(),
    priceRange: listing.priceRange || '$800,000 - $10,000,000+',
    address: listing.address || BASE_ADDRESS,
    geo: listing.geo || BASE_GEO,
    broker: generateRealEstateAgentSchema(),
  }

  if (listing.image) {
    schema.image = Array.isArray(listing.image) ? listing.image : [listing.image]
  }

  if (listing.bedrooms) {
    schema.numberOfBedroomsTotal = listing.bedrooms
  }

  if (listing.bathrooms) {
    schema.numberOfBathroomsTotal = listing.bathrooms
  }

  if (listing.floorSize) {
    schema.floorSize = {
      '@type': 'QuantitativeValue',
      value: listing.floorSize.value,
      unitCode: listing.floorSize.unitCode || 'SQM',
    }
  }

  return schema
}

/**
 * Generate FAQPage schema
 */
export function generateFAQSchema(faqs: { question: string; answer: string }[]): FAQPage {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${BASE_URL}/#faq`,
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

/**
 * Generate Place schema
 */
export function generatePlaceSchema(place: PlaceData): Place {
  const schema: Place = {
    '@context': 'https://schema.org',
    '@type': 'Place',
    '@id': place.url ? `${BASE_URL}${place.url}#place` : `${BASE_URL}/#place`,
    name: place.name,
    description: place.description,
    address: place.address || BASE_ADDRESS,
    geo: place.geo || BASE_GEO,
  }

  if (place.url) {
    schema.url = place.url.startsWith('http') ? place.url : `${BASE_URL}${place.url}`
  }

  if (place.image) {
    schema.image = Array.isArray(place.image) ? place.image : [place.image]
  }

  if (place.telephone) {
    schema.telephone = Array.isArray(place.telephone) ? place.telephone : [place.telephone]
  }

  if (place.openingHours) {
    schema.openingHours = Array.isArray(place.openingHours)
      ? place.openingHours
      : [place.openingHours]
  }

  return schema
}

/**
 * Generate Event schema
 */
export function generateEventSchema(
  name: string,
  startDate: string,
  options?: {
    endDate?: string
    description?: string
    location?: Place | PostalAddress
    organizer?: Organization
    image?: string | string[]
    url?: string
  }
) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    '@id': options?.url ? `${BASE_URL}${options.url}#event` : `${BASE_URL}/#event`,
    name,
    startDate,
    endDate: options?.endDate,
    description: options?.description,
    location: options?.location || {
      '@type': 'Place',
      name: 'Turnberry Place',
      address: BASE_ADDRESS,
      geo: BASE_GEO,
    },
    organizer: options?.organizer || generateOrganizationSchema(),
    image: options?.image
      ? Array.isArray(options.image)
        ? options.image
        : [options.image]
      : [`${BASE_URL}/images/turnberry/asset-1.jpg`],
    url: options?.url ? `${BASE_URL}${options.url}` : BASE_URL,
  }

  return schema
}

/**
 * Generate Person schema
 */
export function generatePersonSchema(
  name: string,
  options?: {
    jobTitle?: string
    worksFor?: Organization
    image?: string
    email?: string
    telephone?: string | string[]
    address?: PostalAddress
    sameAs?: string[]
    additionalType?: string
    identifier?: {
      '@type': 'PropertyValue'
      name: string
      value: string
    }
    knowsAbout?: string[]
    areaServed?: string | string[]
  }
): Person {
  return {
    '@context': 'https://schema.org' as const,
    '@type': 'Person',
    '@id': `${BASE_URL}/#person-${name.toLowerCase().replace(/\s+/g, '-')}`,
    name,
    jobTitle: options?.jobTitle,
    worksFor: options?.worksFor || generateOrganizationSchema(),
    image: options?.image || `${BASE_URL}/images/turnberry/asset-1.jpg`,
    email: options?.email,
    telephone: options?.telephone
      ? Array.isArray(options.telephone)
        ? options.telephone
        : [options.telephone]
      : ['+17025001971'],
    address: options?.address || BASE_ADDRESS,
    sameAs: options?.sameAs || [],
    additionalType: options?.additionalType,
    identifier: options?.identifier,
    knowsAbout: options?.knowsAbout,
    areaServed: options?.areaServed,
  }
}

/**
 * Generate ItemList schema (for collections like towers, floor plans, listings)
 */
export function generateItemListSchema(
  name: string,
  items: any[],
  options?: {
    description?: string
    url?: string
    numberOfItems?: number
  }
) {
  return {
    '@context': 'https://schema.org' as const,
    '@type': 'ItemList' as const,
    '@id': `${BASE_URL}${options?.url || ''}#itemlist`,
    name,
    description: options?.description,
    url: options?.url ? `${BASE_URL}${options.url}` : BASE_URL,
    numberOfItems: options?.numberOfItems || items.length,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem' as const,
      position: index + 1,
      item: item,
    })),
  }
}

/**
 * Generate AggregateOffer schema (for price ranges)
 */
export function generateAggregateOfferSchema(
  priceRange: string,
  options?: {
    priceCurrency?: string
    availability?: string
    itemCondition?: string
    offerCount?: number
  }
) {
  // Parse price range (e.g., "$800,000 - $10,000,000+")
  const priceMatch = priceRange.match(/\$?([\d,]+)/g)
  const lowPrice = priceMatch?.[0]?.replace(/[$,]/g, '') || '800000'
  const highPrice = priceMatch?.[1]?.replace(/[$,]/g, '') || '10000000'

  return {
    '@context': 'https://schema.org',
    '@type': 'AggregateOffer',
    '@id': `${BASE_URL}/#aggregate-offer`,
    priceRange,
    priceCurrency: options?.priceCurrency || 'USD',
    lowPrice,
    highPrice,
    availability: options?.availability || 'https://schema.org/InStock',
    itemCondition: options?.itemCondition || 'https://schema.org/NewCondition',
    offerCount: options?.offerCount,
  }
}

/**
 * Generate Residence schema (for individual towers or properties)
 */
export function generateResidenceSchema(
  name: string,
  options?: {
    description?: string
    url?: string
    numberOfRooms?: string | number
    numberOfBedroomsTotal?: string | number
    numberOfBathroomsTotal?: string | number
    yearBuilt?: number
    numberOfFloors?: number
    floorSize?: {
      value: number | string
      unitCode?: string
    }
    amenityFeature?: Array<{
      '@type': 'LocationFeatureSpecification'
      name: string
      value?: boolean | string
    }>
    image?: string | string[]
    address?: PostalAddress
    geo?: GeoCoordinates
  }
) {
  const schema: any = {
    '@context': 'https://schema.org',
    '@type': 'Residence',
    '@id': options?.url ? `${BASE_URL}${options.url}#residence` : `${BASE_URL}/#residence`,
    name,
    description: options?.description,
    address: options?.address || BASE_ADDRESS,
    geo: options?.geo || BASE_GEO,
  }

  if (options?.url) {
    schema.url = `${BASE_URL}${options.url}`
  }

  if (options?.numberOfRooms) {
    schema.numberOfRooms = options.numberOfRooms
  }

  if (options?.numberOfBedroomsTotal) {
    schema.numberOfBedroomsTotal = options.numberOfBedroomsTotal
  }

  if (options?.numberOfBathroomsTotal) {
    schema.numberOfBathroomsTotal = options.numberOfBathroomsTotal
  }

  if (options?.yearBuilt) {
    schema.yearBuilt = options.yearBuilt
  }

  if (options?.numberOfFloors) {
    schema.numberOfFloors = options.numberOfFloors
  }

  if (options?.floorSize) {
    schema.floorSize = {
      '@type': 'QuantitativeValue',
      value: options.floorSize.value,
      unitCode: options.floorSize.unitCode || 'SQM',
    }
  }

  if (options?.amenityFeature) {
    schema.amenityFeature = options.amenityFeature
  }

  if (options?.image) {
    schema.image = Array.isArray(options.image)
      ? options.image.map((img) => (img.startsWith('http') ? img : `${BASE_URL}${img}`))
      : [options.image.startsWith('http') ? options.image : `${BASE_URL}${options.image}`]
  }

  return schema
}

/**
 * Generate ContactPage schema
 */
export function generateContactPageSchema(
  name: string,
  url: string,
  options?: {
    description?: string
    mainEntity?: any
  }
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    '@id': `${BASE_URL}${url}#contact-page`,
    name,
    description: options?.description,
    url: `${BASE_URL}${url}`,
    mainEntity: options?.mainEntity || generateOrganizationSchema(),
  }
}

/**
 * Generate SportsActivityLocation schema (for fitness, tennis, pool facilities)
 */
export function generateSportsActivityLocationSchema(
  name: string,
  sport: string,
  options?: {
    description?: string
    url?: string
    address?: PostalAddress
    geo?: GeoCoordinates
    openingHours?: string | string[]
    amenityFeature?: Array<{
      '@type': 'LocationFeatureSpecification'
      name: string
      value?: boolean | string
    }>
  }
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SportsActivityLocation',
    '@id': options?.url ? `${BASE_URL}${options.url}#sports-activity` : `${BASE_URL}/#sports-activity`,
    name,
    description: options?.description,
    sport,
    url: options?.url ? `${BASE_URL}${options.url}` : BASE_URL,
    address: options?.address || BASE_ADDRESS,
    geo: options?.geo || BASE_GEO,
    openingHours: options?.openingHours,
    amenityFeature: options?.amenityFeature,
  }
}
