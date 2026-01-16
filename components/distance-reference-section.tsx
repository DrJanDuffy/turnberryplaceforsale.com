'use client'

import React from 'react'
import { MapPin, Car, Walking, Plane, Mountain, ShoppingBag, Building2 } from 'lucide-react'

interface Destination {
  name: string
  distance: string
  driveTime: string
  walkTime?: string
  icon: React.ReactNode
  category: 'strip' | 'resort' | 'shopping' | 'venue' | 'airport' | 'downtown' | 'nature'
}

const destinations: Destination[] = [
  {
    name: 'Las Vegas Strip',
    distance: '0.1 mi',
    driveTime: '1 min',
    walkTime: '2 min',
    icon: <MapPin size={24} />,
    category: 'strip',
  },
  {
    name: 'Wynn/Encore',
    distance: '0.3 mi',
    driveTime: '2 min',
    walkTime: '5 min',
    icon: <Building2 size={24} />,
    category: 'resort',
  },
  {
    name: 'Resorts World',
    distance: '0.5 mi',
    driveTime: '3 min',
    walkTime: '8 min',
    icon: <Building2 size={24} />,
    category: 'resort',
  },
  {
    name: 'Fashion Show Mall',
    distance: '0.8 mi',
    driveTime: '4 min',
    walkTime: '15 min',
    icon: <ShoppingBag size={24} />,
    category: 'shopping',
  },
  {
    name: 'Convention Center',
    distance: '1.0 mi',
    driveTime: '5 min',
    walkTime: '18 min',
    icon: <Building2 size={24} />,
    category: 'venue',
  },
  {
    name: 'T-Mobile Arena',
    distance: '1.2 mi',
    driveTime: '6 min',
    icon: <MapPin size={24} />,
    category: 'venue',
  },
  {
    name: 'Harry Reid Airport',
    distance: '3.5 mi',
    driveTime: '10 min',
    icon: <Plane size={24} />,
    category: 'airport',
  },
  {
    name: 'Downtown Fremont St',
    distance: '4.0 mi',
    driveTime: '12 min',
    icon: <MapPin size={24} />,
    category: 'downtown',
  },
  {
    name: 'Red Rock Canyon',
    distance: '20 mi',
    driveTime: '25 min',
    icon: <Mountain size={24} />,
    category: 'nature',
  },
]

export function DistanceReferenceSection() {
  // Separate walkable vs drive-only destinations
  const walkableDestinations = destinations.filter((d) => d.walkTime)
  const driveOnlyDestinations = destinations.filter((d) => !d.walkTime)

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-900 mb-4" style={{ fontFamily: 'Cinzel, serif' }}>
            Minutes From Everything
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Turnberry Place's prime location puts you within walking distance of the Strip and just minutes from Las Vegas's most iconic destinations.
          </p>
        </div>

        {/* Walkable Destinations */}
        {walkableDestinations.length > 0 && (
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
              <Walking size={20} className="text-[#D4AF37]" aria-hidden="true" />
              Within Walking Distance
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {walkableDestinations.map((destination, index) => (
                <DestinationCard key={destination.name} destination={destination} isWalkable={true} />
              ))}
            </div>
          </div>
        )}

        {/* Drive-Only Destinations */}
        {driveOnlyDestinations.length > 0 && (
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
              <Car size={20} className="text-gray-600" aria-hidden="true" />
              Quick Drive Away
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {driveOnlyDestinations.map((destination, index) => (
                <DestinationCard key={destination.name} destination={destination} isWalkable={false} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

interface DestinationCardProps {
  destination: Destination
  isWalkable: boolean
}

function DestinationCard({ destination, isWalkable }: DestinationCardProps) {
  const distanceNum = parseFloat(destination.distance.replace(/[^0-9.]/g, ''))
  const isClose = distanceNum <= 0.5

  return (
    <div
      className={`
        bg-white rounded-lg border-2 p-6
        transition-all duration-300 hover:shadow-lg
        ${isWalkable && isClose ? 'border-[#D4AF37] bg-[#FFFEF9]' : 'border-gray-200'}
      `}
    >
      {/* Icon */}
      <div
        className={`
          w-12 h-12 rounded-full flex items-center justify-center mb-4
          ${isWalkable && isClose ? 'bg-[#D4AF37] text-gray-900' : 'bg-gray-100 text-gray-600'}
        `}
      >
        {destination.icon}
      </div>

      {/* Destination Name */}
      <h4 className="text-lg font-semibold text-gray-900 mb-2">{destination.name}</h4>

      {/* Distance - Large & Prominent */}
      <div className="mb-3">
        <span
          className={`
            text-3xl font-bold
            ${isWalkable && isClose ? 'text-[#D4AF37]' : 'text-gray-900'}
          `}
        >
          {destination.distance}
        </span>
      </div>

      {/* Times */}
      <div className="space-y-2 text-sm">
        <div className="flex items-center gap-2 text-gray-600">
          <Car size={16} aria-hidden="true" />
          <span>{destination.driveTime} drive</span>
        </div>
        {destination.walkTime && (
          <div className="flex items-center gap-2 text-gray-600">
            <Walking size={16} aria-hidden="true" />
            <span>{destination.walkTime} walk</span>
          </div>
        )}
      </div>
    </div>
  )
}
