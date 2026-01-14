'use client'

import React, { useState, useCallback } from 'react'
import Image from 'next/image'
import { X, ZoomIn } from 'lucide-react'

export interface FloorPlan {
  id: string
  name: string
  category: '1-Bedroom' | '2-Bedroom' | '3-Bedroom' | '4-Bedroom' | 'Penthouse'
  image: string
  alt: string
  sqft?: string
  beds?: number
  baths?: number
}

interface FloorPlanGalleryProps {
  floorPlans: FloorPlan[]
}

export function FloorPlanGallery({ floorPlans }: FloorPlanGalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState<FloorPlan | null>(null)

  const categories = ['All', ...Array.from(new Set(floorPlans.map(plan => plan.category)))]

  const filteredPlans = selectedCategory === 'All'
    ? floorPlans
    : floorPlans.filter(plan => plan.category === selectedCategory)

  const openLightbox = useCallback((plan: FloorPlan) => {
    setSelectedPlan(plan)
    setLightboxOpen(true)
    document.body.style.overflow = 'hidden'
  }, [])

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false)
    setSelectedPlan(null)
    document.body.style.overflow = ''
  }, [])

  // Close lightbox on Escape key
  React.useEffect(() => {
    if (!lightboxOpen) return
    
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeLightbox()
      }
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [lightboxOpen, closeLightbox])

  return (
    <>
      <div className="floor-plan-gallery">
        {/* Category Filter */}
        <div className="mb-4">
          <div className="d-flex flex-wrap justify-content-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`btn ${selectedCategory === category ? 'btn-primary' : 'btn-outline-primary'} btn-sm`}
                type="button"
                aria-pressed={selectedCategory === category}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Floor Plan Grid */}
        <div className="row g-4">
          {filteredPlans.length > 0 ? (
            filteredPlans.map((plan) => (
              <div key={plan.id} className="col-12 col-md-6 col-lg-4">
                <div
                  className="floor-plan-card h-100"
                  style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    border: '1px solid #e9ecef',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                  }}
                  onClick={() => openLightbox(plan)}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)'
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.12)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)'
                  }}
                >
                  {/* Image */}
                  <div style={{ position: 'relative', width: '100%', height: '250px', overflow: 'hidden' }}>
                    <Image
                      src={plan.image}
                      alt={plan.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      style={{ objectFit: 'cover' }}
                      loading="lazy"
                      quality={85}
                    />
                    <div
                      className="position-absolute top-0 start-0 end-0 bottom-0 d-flex align-items-center justify-content-center"
                      style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.3)',
                        opacity: 0,
                        transition: 'opacity 0.3s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.opacity = '1'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.opacity = '0'
                      }}
                    >
                      <ZoomIn className="w-8 h-8 text-white" aria-hidden="true" />
                    </div>
                  </div>

                  {/* Content */}
                  <div style={{ padding: '1.25rem' }}>
                    <h3 className="h5 mb-2" style={{ fontWeight: 600 }}>
                      {plan.name}
                    </h3>
                    <div className="d-flex flex-wrap gap-3 mb-2">
                      {plan.category && (
                        <span className="badge bg-primary">{plan.category}</span>
                      )}
                      {plan.sqft && (
                        <span className="text-muted small">{plan.sqft} sq ft</span>
                      )}
                    </div>
                    {(plan.beds || plan.baths) && (
                      <div className="small text-muted">
                        {plan.beds && `${plan.beds} Bed${plan.beds > 1 ? 's' : ''}`}
                        {plan.beds && plan.baths && ' • '}
                        {plan.baths && `${plan.baths} Bath${plan.baths > 1 ? 's' : ''}`}
                      </div>
                    )}
                    <div className="mt-2 text-primary small">
                      Click to view full size
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-12 text-center py-5">
              <p className="text-muted">No floor plans found in this category.</p>
            </div>
          )}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && selectedPlan && (
        <div
          className="lightbox-overlay"
          onClick={closeLightbox}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.95)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
          }}
        >
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative',
              maxWidth: '90vw',
              maxHeight: '90vh',
              width: '100%',
              height: '100%',
            }}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="btn btn-light position-absolute"
              style={{
                top: '-3rem',
                right: 0,
                zIndex: 10000,
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                padding: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              aria-label="Close lightbox"
            >
              <X className="w-5 h-5" aria-hidden="true" />
            </button>

            {/* Image */}
            <div style={{ position: 'relative', width: '100%', height: '100%' }}>
              <Image
                src={selectedPlan.image}
                alt={selectedPlan.alt}
                fill
                style={{ objectFit: 'contain' }}
                quality={100}
                priority
              />
            </div>

            {/* Plan Info */}
            <div
              className="position-absolute bottom-0 start-0 end-0 text-center text-white p-3"
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
              }}
            >
              <h3 className="h4 mb-1">{selectedPlan.name}</h3>
              <div className="d-flex justify-content-center gap-3 flex-wrap">
                {selectedPlan.category && (
                  <span className="badge bg-primary">{selectedPlan.category}</span>
                )}
                {selectedPlan.sqft && (
                  <span>{selectedPlan.sqft} sq ft</span>
                )}
                {selectedPlan.beds && (
                  <span>{selectedPlan.beds} Bed{selectedPlan.beds > 1 ? 's' : ''}</span>
                )}
                {selectedPlan.baths && (
                  <span>{selectedPlan.baths} Bath{selectedPlan.baths > 1 ? 's' : ''}</span>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
