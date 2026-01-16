'use client'

import React from 'react'
import Link from 'next/link'
import {
  Crown,
  Shield,
  Car,
  Waves,
  Dumbbell,
  Sparkles,
  Activity,
  UtensilsCrossed,
} from 'lucide-react'

interface Amenity {
  id: string
  name: string
  description: string
  icon: React.ReactNode
}

const amenities: Amenity[] = [
  {
    id: 'stirling-club',
    name: 'The Stirling Club',
    description: '80,000 sq ft private club',
    icon: <Crown size={32} aria-hidden="true" />,
  },
  {
    id: 'security',
    name: '24/7 Security',
    description: 'Guard-gated with concierge',
    icon: <Shield size={32} aria-hidden="true" />,
  },
  {
    id: 'valet',
    name: 'Valet Parking',
    description: 'Covered and convenient',
    icon: <Car size={32} aria-hidden="true" />,
  },
  {
    id: 'pools',
    name: 'Resort Pools',
    description: 'Indoor and outdoor',
    icon: <Waves size={32} aria-hidden="true" />,
  },
  {
    id: 'fitness',
    name: 'Fitness Center',
    description: 'State-of-the-art equipment',
    icon: <Dumbbell size={32} aria-hidden="true" />,
  },
  {
    id: 'spa',
    name: 'Spa Services',
    description: 'On-site relaxation',
    icon: <Sparkles size={32} aria-hidden="true" />,
  },
  {
    id: 'tennis',
    name: 'Tennis Courts',
    description: 'Lighted for evening play',
    icon: <Activity size={32} aria-hidden="true" />,
  },
  {
    id: 'dining',
    name: 'Fine Dining',
    description: 'Multiple restaurants',
    icon: <UtensilsCrossed size={32} aria-hidden="true" />,
  },
]

export function SharedAmenitiesSection() {
  return (
    <section className="card-content py-5" aria-label="Shared Amenities">
      <div className="container">
        {/* Section Title */}
        <div className="text-center mb-5">
          <h2 className="h3 mb-2">Every Tower Includes</h2>
          <p className="text-muted">
            World-class amenities shared across all four Turnberry Place towers
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="row g-4 mb-5">
          {amenities.map((amenity) => (
            <div key={amenity.id} className="col-12 col-md-6 col-lg-3">
              <div
                className="h-100 text-center p-4"
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '8px',
                  border: '1px solid #e9ecef',
                  transition: 'all 0.3s ease',
                  cursor: 'default',
                  height: '100%',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)'
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.12)'
                  e.currentTarget.style.borderColor = '#D4AF37'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)'
                  e.currentTarget.style.borderColor = '#e9ecef'
                }}
              >
                {/* Icon */}
                <div
                  className="mb-3 d-flex justify-content-center"
                  style={{ color: '#D4AF37' }}
                >
                  {amenity.icon}
                </div>

                {/* Name */}
                <h3
                  className="h6 mb-2"
                  style={{
                    fontWeight: 600,
                    color: '#212529',
                    fontSize: '1rem',
                  }}
                >
                  {amenity.name}
                </h3>

                {/* Description */}
                <p
                  className="small text-muted mb-0"
                  style={{ fontSize: '0.875rem', lineHeight: 1.5 }}
                >
                  {amenity.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Links */}
        <div className="text-center">
          <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-3">
            <Link
              href="/amenities"
              className="font-weight-medium"
              style={{
                color: '#D4AF37',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                borderBottom: '2px solid transparent',
                paddingBottom: '2px',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderBottomColor = '#D4AF37'
                e.currentTarget.style.color = '#B8941F'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderBottomColor = 'transparent'
                e.currentTarget.style.color = '#D4AF37'
              }}
            >
              Explore All Amenities →
            </Link>
            <span className="d-none d-md-inline" style={{ color: '#dee2e6' }}>
              |
            </span>
            <Link
              href="/stirling-club"
              className="font-weight-medium"
              style={{
                color: '#D4AF37',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                borderBottom: '2px solid transparent',
                paddingBottom: '2px',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderBottomColor = '#D4AF37'
                e.currentTarget.style.color = '#B8941F'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderBottomColor = 'transparent'
                e.currentTarget.style.color = '#D4AF37'
              }}
            >
              Learn About Stirling Club →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
