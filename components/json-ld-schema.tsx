/**
 * JSON-LD Schema Markup Component
 * Provides LocalBusiness and RealEstateAgent schema for SEO
 * Dr. Jan Duffy - Turnberry Place Las Vegas
 */

import React from 'react'

interface JsonLdSchemaProps {
  type?: 'home' | 'agent' | 'property'
  propertyName?: string
  propertyAddress?: string
  propertyPrice?: string
}

export function JsonLdSchema({
  type = 'home',
  propertyName = 'Turnberry Place Las Vegas',
  propertyAddress = '2747-2877 Paradise Road, Las Vegas, NV 89109',
  propertyPrice,
}: JsonLdSchemaProps) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.turnberryplaceforsale.com'

  // LocalBusiness + RealEstateAgent schema
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: 'Dr. Jan Duffy, REALTOR',
    alternateName: 'The Turnberry Place Team',
    description:
      'Las Vegas real estate expert specializing in luxury high-rise condos at Turnberry Place. Licensed REALTOR (S.0197614.LLC) with Berkshire Hathaway HomeServices Nevada Properties.',
    url: baseUrl,
    telephone: ['+17025001955', '+17022221988'],
    email: 'jan@lasvegas55plushomes.com',
    identifier: {
      '@type': 'PropertyValue',
      name: 'Nevada Real Estate License',
      value: 'S.0197614.LLC',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '7475 West Sahara Avenue',
      addressLocality: 'Las Vegas',
      addressRegion: 'NV',
      postalCode: '89117',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '36.1447',
      longitude: '-115.1541',
    },
    areaServed: {
      '@type': 'City',
      name: 'Las Vegas',
    },
    memberOf: {
      '@type': 'Organization',
      name: 'Berkshire Hathaway HomeServices Nevada Properties',
    },
    knowsAbout: [
      'Turnberry Place Las Vegas',
      'Luxury High-Rise Condos',
      'Las Vegas Strip Real Estate',
      'The Stirling Club',
    ],
    priceRange: '$800,000 - $10,000,000+',
    image: 'https://assets.cribflyer-proxy.com/cdn-cgi/image/height=300,fit=contain,rotate=0,format=auto,quality=85/4616/2/2953539/asset.jpg',
    logo: 'https://assets.cribflyer-proxy.com/cdn-cgi/image/fit=scale-down,rotate=0,format=auto,quality=60/4616/3/2953540/asset.jpg',
    sameAs: [
      'https://lasvegas55plushomes.com',
    ],
  }

  // Property schema for home page
  const propertySchema = {
    '@context': 'https://schema.org',
    '@type': 'Residence',
    name: propertyName,
    address: {
      '@type': 'PostalAddress',
      streetAddress: propertyAddress,
      addressLocality: 'Las Vegas',
      addressRegion: 'NV',
      postalCode: '89109',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '36.1447',
      longitude: '-115.1541',
    },
    numberOfBedroomsTotal: '1-4',
    numberOfBathroomsTotal: '1-4',
    ...(propertyPrice && { price: propertyPrice }),
    description:
      'Luxury high-rise condominium community featuring 4 towers with 1-4 bedroom residences, Strip views, and exclusive access to The Stirling Club.',
    amenityFeature: [
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Gated Community',
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Swimming Pool',
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Fitness Center',
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Tennis Courts',
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Spa',
      },
    ],
    image: [
      'https://www.turnberryplaceforsale.com/images/turnberry/Turnberry_Place_For_Sale.jpg',
      'https://www.turnberryplaceforsale.com/images/turnberry/Turnberry Tower Nice Vew.jpg',
    ],
  }

  const schemas = []

  // Always include LocalBusiness/RealEstateAgent schema
  schemas.push(localBusinessSchema)

  // Add property schema for home page
  if (type === 'home') {
    schemas.push(propertySchema)
  }

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
        />
      ))}
    </>
  )
}
