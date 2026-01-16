/**
 * JSON-LD Schema Markup for Towers Page
 * Provides ApartmentComplex schema with 4 Residence schemas for each tower
 * Dr. Jan Duffy - Turnberry Place Las Vegas
 */

import React from 'react'
import { JsonLd } from './json-ld'

export function TowersSchema() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.turnberryplaceforsale.com'

  // ApartmentComplex schema
  const apartmentComplexSchema = {
    '@context': 'https://schema.org',
    '@type': 'ApartmentComplex',
    name: 'Turnberry Place Las Vegas',
    alternateName: 'Turnberry Place',
    url: `${baseUrl}/towers`,
    description:
      'Turnberry Place is a luxury high-rise condominium community featuring four towers (38-45 stories) with 1,200+ residences, Strip views, and exclusive access to The Stirling Club. Starting from $800K.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '2827 Paradise Rd',
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
    numberOfUnits: '1200+',
    numberOfBedroomsTotal: '1-4',
    numberOfBathroomsTotal: '1-4',
    priceRange: '$800,000 - $10,000,000+',
    amenityFeature: [
      { '@type': 'LocationFeatureSpecification', name: 'Gated Community', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Stirling Club', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Swimming Pool', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Fitness Center', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Spa', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Tennis Courts', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Valet Parking', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Concierge', value: true },
      { '@type': 'LocationFeatureSpecification', name: '24/7 Security', value: true },
    ],
    image: [
      `${baseUrl}/images/turnberry/Turnberry_Place_For_Sale.jpg`,
      `${baseUrl}/images/turnberry/turnberry-tower-south-view.jpeg`,
      `${baseUrl}/images/turnberry/turnberry-tower-nice-view.jpg`,
      `${baseUrl}/images/turnberry/turnberry-towers-las-vegas-nv-primary-photo.jpg`,
    ],
    containedInPlace: {
      '@type': 'City',
      name: 'Las Vegas',
    },
    nearbyAttraction: [
      { '@type': 'TouristAttraction', name: 'Las Vegas Strip' },
      { '@type': 'TouristAttraction', name: 'Red Rock Canyon' },
      { '@type': 'TouristAttraction', name: 'Spring Mountain Range' },
    ],
  }

  // Residence schemas for each tower
  const towerResidences = [
    {
      number: 1,
      name: 'Turnberry Place Tower 1',
      completed: 2000,
      stories: 38,
      sizeRange: '1,200 - 4,000 sq ft',
      priceRange: 'Starting $800K',
      description:
        'Tower 1 represents the inaugural vision of luxury high-rise living in Las Vegas. Completed in 2000, this 38-story tower features direct access to The Stirling Club, proven community, and excellent value.',
    },
    {
      number: 2,
      name: 'Turnberry Place Tower 2',
      completed: 2001,
      stories: 45,
      sizeRange: '1,500 - 5,000 sq ft',
      priceRange: '$1.2M - $5M',
      description:
        'Rising 45 stories, Tower 2 delivers breathtaking Strip views and refined luxury living with the largest floor plans, enhanced concierge, and spectacular views.',
    },
    {
      number: 3,
      name: 'Turnberry Place Tower 3',
      completed: 2002,
      stories: 45,
      sizeRange: '1,500 - 5,000 sq ft',
      priceRange: '$1.2M - $5M',
      description:
        'Tower 3 stands 45 stories tall, offering contemporary luxury residences with modern finishes, spacious terraces, and desert-inspired aesthetic.',
    },
    {
      number: 4,
      name: 'Turnberry Place Tower 4',
      completed: 2005,
      stories: 45,
      sizeRange: '2,000 - 8,000+ sq ft',
      priceRange: '$3M - $10M+',
      description:
        'As the crown jewel of Turnberry Place, Tower 4 represents the pinnacle of luxury high-rise living with highest ceilings (12ft), largest penthouses, and premium everything.',
    },
  ]

  const residenceSchemas = towerResidences.map((tower) => ({
    '@context': 'https://schema.org',
    '@type': 'Residence',
    name: tower.name,
    description: tower.description,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '2827 Paradise Rd',
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
    floorSize: {
      '@type': 'QuantitativeValue',
      value: tower.sizeRange,
      unitText: 'sq ft',
    },
    numberOfRooms: {
      '@type': 'QuantitativeValue',
      minValue: 1,
      maxValue: 4,
    },
    priceRange: tower.priceRange,
    yearBuilt: tower.completed,
    numberOfFloors: tower.stories,
    containedInPlace: {
      '@type': 'ApartmentComplex',
      name: 'Turnberry Place Las Vegas',
    },
  }))

  return (
    <>
      <JsonLd schema={apartmentComplexSchema} />
      {residenceSchemas.map((schema, index) => (
        <JsonLd key={`tower-${index + 1}`} schema={schema} />
      ))}
    </>
  )
}
