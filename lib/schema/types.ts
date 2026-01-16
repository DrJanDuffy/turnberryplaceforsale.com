/**
 * TypeScript interfaces for JSON-LD structured data schemas
 * Following Schema.org specifications and Google's structured data guidelines
 */

export interface PostalAddress {
  '@type': 'PostalAddress'
  streetAddress: string
  addressLocality: string
  addressRegion: string
  postalCode: string
  addressCountry: string
}

export interface GeoCoordinates {
  '@type': 'GeoCoordinates'
  latitude: number | string
  longitude: number | string
}

export interface ContactPoint {
  '@type': 'ContactPoint'
  telephone?: string
  email?: string
  contactType?: string
  areaServed?: string | string[]
  availableLanguage?: string | string[]
}

export interface ImageObject {
  '@type': 'ImageObject'
  url: string
  width?: number
  height?: number
  caption?: string
}

export interface Organization {
  '@context': 'https://schema.org'
  '@type': 'Organization'
  '@id'?: string
  name: string
  url?: string
  logo?: string | ImageObject
  image?: string | ImageObject | (string | ImageObject)[]
  telephone?: string | string[]
  email?: string
  address?: PostalAddress
  geo?: GeoCoordinates
  contactPoint?: ContactPoint | ContactPoint[]
  sameAs?: string[]
  parentOrganization?: Organization
  memberOf?: Organization
}

export interface RealEstateAgent {
  '@context': 'https://schema.org'
  '@type': 'RealEstateAgent'
  '@id'?: string
  name: string
  alternateName?: string
  description?: string
  url?: string
  image?: string | ImageObject | (string | ImageObject)[]
  logo?: string | ImageObject
  telephone?: string | string[]
  email?: string
  address?: PostalAddress
  geo?: GeoCoordinates
  areaServed?: string | string[]
  priceRange?: string
  identifier?: {
    '@type': 'PropertyValue'
    name: string
    value: string
  }
  parentOrganization?: Organization
  memberOf?: Organization
  knowsAbout?: string[]
  sameAs?: string[]
}

export interface LocalBusiness {
  '@context': 'https://schema.org'
  '@type': 'LocalBusiness'
  '@id'?: string
  name: string
  description?: string
  url?: string
  image?: string | ImageObject | (string | ImageObject)[]
  logo?: string | ImageObject
  telephone?: string | string[]
  email?: string
  address?: PostalAddress
  geo?: GeoCoordinates
  priceRange?: string
  areaServed?: string | string[]
  openingHours?: string | string[]
  contactPoint?: ContactPoint | ContactPoint[]
}

export interface WebSite {
  '@context': 'https://schema.org'
  '@type': 'WebSite'
  '@id'?: string
  name: string
  url: string
  description?: string
  publisher?: Organization
  potentialAction?: {
    '@type': 'SearchAction'
    target: {
      '@type': 'EntryPoint'
      urlTemplate: string
    }
    'query-input': string
  }
  inLanguage?: string | string[]
}

export interface BreadcrumbListItem {
  '@type': 'ListItem'
  position: number
  name: string
  item: string
}

export interface BreadcrumbList {
  '@context': 'https://schema.org'
  '@type': 'BreadcrumbList'
  '@id'?: string
  itemListElement: BreadcrumbListItem[]
}

export interface FAQItem {
  question: string
  answer: string
}

export interface FAQPage {
  '@context': 'https://schema.org'
  '@type': 'FAQPage'
  '@id'?: string
  mainEntity: {
    '@type': 'Question'
    name: string
    acceptedAnswer: {
      '@type': 'Answer'
      text: string
    }
  }[]
}

export interface Place {
  '@context': 'https://schema.org'
  '@type': 'Place'
  '@id'?: string
  name: string
  description?: string
  url?: string
  image?: string | ImageObject | (string | ImageObject)[]
  address?: PostalAddress
  geo?: GeoCoordinates
  telephone?: string | string[]
  openingHours?: string | string[]
}

export interface RealEstateListing {
  '@context': 'https://schema.org'
  '@type': 'RealEstateListing'
  '@id'?: string
  name: string
  description?: string
  url: string
  dateModified?: string
  priceRange?: string
  address?: PostalAddress
  geo?: GeoCoordinates
  image?: string | ImageObject | (string | ImageObject)[]
  numberOfBedroomsTotal?: string | number
  numberOfBathroomsTotal?: string | number
  floorSize?: {
    '@type': 'QuantitativeValue'
    value: number | string
    unitCode?: string
  }
  broker?: RealEstateAgent
  offers?: {
    '@type': 'Offer'
    price?: string | number
    priceCurrency?: string
    availability?: string
  }
}

export interface Event {
  '@context': 'https://schema.org'
  '@type': 'Event'
  '@id'?: string
  name: string
  description?: string
  startDate: string
  endDate?: string
  location?: Place | PostalAddress
  organizer?: Organization | Person
  image?: string | ImageObject | (string | ImageObject)[]
  url?: string
}

export interface Person {
  '@context': 'https://schema.org'
  '@type': 'Person'
  '@id'?: string
  name: string
  alternateName?: string
  jobTitle?: string
  worksFor?: Organization
  image?: string | ImageObject
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

export interface ListingData {
  name: string
  description?: string
  url: string
  priceRange?: string
  address?: PostalAddress
  geo?: GeoCoordinates
  image?: string | string[]
  bedrooms?: string | number
  bathrooms?: string | number
  floorSize?: {
    value: number | string
    unitCode?: string
  }
  dateModified?: string
}

export interface PlaceData {
  name: string
  description?: string
  url?: string
  address?: PostalAddress
  geo?: GeoCoordinates
  image?: string | string[]
  telephone?: string | string[]
  openingHours?: string | string[]
  amenityFeature?: Array<{
    '@type': 'LocationFeatureSpecification'
    name: string
    value?: boolean | string
  }>
  containedInPlace?: {
    '@type': string
    name: string
    addressRegion?: string
    addressCountry?: string
  }
}

export interface BreadcrumbItem {
  name: string
  url: string
}

// Union type for all possible schemas
export type SchemaType =
  | Organization
  | RealEstateAgent
  | LocalBusiness
  | WebSite
  | BreadcrumbList
  | FAQPage
  | Place
  | RealEstateListing
  | Event
  | Person

// Graph format for multiple schemas on one page
export interface SchemaGraph {
  '@context': 'https://schema.org'
  '@graph': SchemaType[]
}
