import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface TowerCardData {
  number: number
  completed: number
  stories: number
  sizeRange: string
  priceRange: string
  highlight: string
  bestFor: string
  image?: string
}

interface TowerCardsProps {
  towers: TowerCardData[]
}

export function TowerCards({ towers }: TowerCardsProps) {
  return (
    <section className="card-content py-5" aria-label="Turnberry Place Towers">
      <div className="container">
        <div className="row g-4">
          {towers.map((tower) => (
            <div key={tower.number} className="col-12 col-md-6 col-lg-3">
              <TowerCard tower={tower} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function TowerCard({ tower }: { tower: TowerCardData }) {
  const imageSrc = tower.image || `/images/turnberry/tower-${tower.number}.jpg`

  return (
    <div
      className="bg-white shadow-md overflow-hidden h-100"
      style={{
        borderRadius: '8px',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-8px)'
        e.currentTarget.style.boxShadow = '0 12px 32px rgba(0, 0, 0, 0.15)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)'
      }}
    >
      {/* Tower Image */}
      <div style={{ position: 'relative', width: '100%', height: '192px', overflow: 'hidden' }}>
        <Image
          src={imageSrc}
          alt={`Turnberry Place Tower ${tower.number}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          style={{ objectFit: 'cover' }}
          quality={85}
        />
        {/* Tower Number Badge */}
        <div
          className="position-absolute text-white font-weight-bold"
          style={{
            top: '1rem',
            left: '1rem',
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            backgroundColor: '#D4AF37',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.25rem',
            zIndex: 10,
          }}
        >
          {tower.number}
        </div>
      </div>

      {/* Card Content */}
      <div style={{ padding: '1.5rem' }}>
        {/* Key Stats Grid */}
        <div className="row g-2 mb-3" style={{ marginLeft: 0, marginRight: 0 }}>
          <div className="col-6">
            <div className="small text-muted mb-1">Completed</div>
            <div className="small font-weight-semibold text-dark">{tower.completed}</div>
          </div>
          <div className="col-6">
            <div className="small text-muted mb-1">Stories</div>
            <div className="small font-weight-semibold text-dark">{tower.stories}</div>
          </div>
          <div className="col-12">
            <div className="small text-muted mb-1">Size Range</div>
            <div className="small font-weight-semibold text-dark">{tower.sizeRange}</div>
          </div>
        </div>

        {/* Price Range - Highlighted in Gold */}
        <div className="mb-3 pb-3 border-bottom">
          <div className="small text-muted mb-1">Price Range</div>
          <div
            className="h5 font-weight-bold mb-0"
            style={{ color: '#D4AF37' }}
          >
            {tower.priceRange}
          </div>
        </div>

        {/* Highlight Feature */}
        <div className="mb-3">
          <div className="small font-weight-semibold text-muted mb-1">Highlight</div>
          <div className="small text-dark font-weight-medium">{tower.highlight}</div>
        </div>

        {/* Best For */}
        <div className="mb-4">
          <div className="small text-muted mb-1">Best For</div>
          <div className="small">{tower.bestFor}</div>
        </div>

        {/* View Available Button */}
        <Link
          href={`/available-condos?tower=${tower.number}`}
          className="btn btn-block text-center font-weight-medium"
          style={{
            backgroundColor: '#374151',
            color: '#ffffff',
            padding: '0.75rem 1rem',
            borderRadius: '6px',
            border: 'none',
            transition: 'all 0.3s ease',
            display: 'block',
            width: '100%',
            textDecoration: 'none',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#D4AF37'
            e.currentTarget.style.color = '#000000'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#374151'
            e.currentTarget.style.color = '#ffffff'
          }}
        >
          View Available
        </Link>
      </div>
    </div>
  )
}
