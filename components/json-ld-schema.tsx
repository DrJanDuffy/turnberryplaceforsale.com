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
  propertyAddress = '2827 Paradise Rd, Las Vegas, NV 89109',
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
    telephone: ['+17025001971', '+17022221964'],
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
    image: 'https://www.turnberryplaceforsale.com/images/turnberry/asset-1.jpg',
    logo: 'https://www.turnberryplaceforsale.com/images/turnberry/asset-19.jpg',
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

  // FAQ schema for home page
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is Turnberry Place Las Vegas?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Turnberry Place is a luxury high-rise condominium community in Las Vegas featuring 4 towers with 1-4 bedroom residences, Strip views, and exclusive access to The Stirling Club private amenities.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the price range for condos at Turnberry Place?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Turnberry Place condos range from $800,000 to $10,000,000+ depending on tower, floor plan, and views.',
        },
      },
      {
        '@type': 'Question',
        name: 'What amenities are available at Turnberry Place?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Turnberry Place residents enjoy exclusive access to The Stirling Club, featuring pools, fitness center, tennis courts, spa, dining, and concierge services. The community is gated with 24-hour security.',
        },
      },
      {
        '@type': 'Question',
        name: 'How many towers are at Turnberry Place?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Turnberry Place consists of 4 luxury towers: Tower 1 (38 stories, completed 2000), Tower 2 (45 stories, completed 2001), Tower 3 (45 stories, completed 2002), and Tower 4 (45 stories, completed 2005).',
        },
      },
      {
        '@type': 'Question',
        name: 'How can I schedule a showing at Turnberry Place?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You can schedule a private showing by calling Dr. Jan Duffy at (702) 222-1964 or by requesting details through our online form.',
        },
      },
    ],
  }

  // Add property schema for home page
  if (type === 'home') {
    schemas.push(propertySchema)
    schemas.push(faqSchema)
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
