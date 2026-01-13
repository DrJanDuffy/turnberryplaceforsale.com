'use client'

import { useState } from 'react'
import Link from 'next/link'

export function QuickSearchWidget() {
  const [propertyType, setPropertyType] = useState('')
  const [tower, setTower] = useState('')
  const [minPrice, setMinPrice] = useState('')
  const [maxPrice, setMaxPrice] = useState('')
  const [beds, setBeds] = useState('')
  const [baths, setBaths] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Track search
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'quick_search', {
        event_category: 'engagement',
        event_label: 'property_search',
        property_type: propertyType,
        tower: tower,
        min_price: minPrice,
        max_price: maxPrice,
        beds: beds,
        baths: baths
      })
    }

    // Build search URL with parameters
    const params = new URLSearchParams()
    if (propertyType) params.append('type', propertyType)
    if (tower) params.append('tower', tower)
    if (minPrice) params.append('minPrice', minPrice)
    if (maxPrice) params.append('maxPrice', maxPrice)
    if (beds) params.append('beds', beds)
    if (baths) params.append('baths', baths)

    // Navigate to available condos with filters
    window.location.href = `/available-condos?${params.toString()}`
  }

  const resetForm = () => {
    setPropertyType('')
    setTower('')
    setMinPrice('')
    setMaxPrice('')
    setBeds('')
    setBaths('')
  }

  return (
    <div className="quick-search-widget card shadow-lg border-0">
      <div className="card-body p-4">
        <h3 className="card-title text-center mb-4">Quick Search</h3>
        <form onSubmit={handleSearch}>
          <div className="row">
            <div className="col-12 mb-3">
              <label htmlFor="qs-property-type" className="form-label small font-weight-bold">
                Property Type
              </label>
              <select
                id="qs-property-type"
                className="form-control"
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
              >
                <option value="">All Properties</option>
                <option value="condo">Condos</option>
                <option value="townhome">Townhomes</option>
              </select>
            </div>

            <div className="col-12 mb-3">
              <label htmlFor="qs-tower" className="form-label small font-weight-bold">
                Select a Tower
              </label>
              <select
                id="qs-tower"
                className="form-control"
                value={tower}
                onChange={(e) => setTower(e.target.value)}
              >
                <option value="">All Towers</option>
                <option value="tower1">Tower 1</option>
                <option value="tower2">Tower 2</option>
                <option value="tower3">Tower 3</option>
                <option value="tower4">Tower 4</option>
              </select>
            </div>

            <div className="col-12 col-md-6 mb-3">
              <label htmlFor="qs-min-price" className="form-label small font-weight-bold">
                Minimum Price
              </label>
              <select
                id="qs-min-price"
                className="form-control"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
              >
                <option value="">No Minimum</option>
                <option value="800000">$800,000</option>
                <option value="1000000">$1,000,000</option>
                <option value="1500000">$1,500,000</option>
                <option value="2000000">$2,000,000</option>
                <option value="3000000">$3,000,000</option>
                <option value="5000000">$5,000,000</option>
              </select>
            </div>

            <div className="col-12 col-md-6 mb-3">
              <label htmlFor="qs-max-price" className="form-label small font-weight-bold">
                Maximum Price
              </label>
              <select
                id="qs-max-price"
                className="form-control"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
              >
                <option value="">No Maximum</option>
                <option value="1500000">$1,500,000</option>
                <option value="2000000">$2,000,000</option>
                <option value="3000000">$3,000,000</option>
                <option value="5000000">$5,000,000</option>
                <option value="10000000">$10,000,000</option>
                <option value="20000000">$20,000,000+</option>
              </select>
            </div>

            <div className="col-12 col-md-6 mb-3">
              <label htmlFor="qs-beds" className="form-label small font-weight-bold">
                Beds
              </label>
              <select
                id="qs-beds"
                className="form-control"
                value={beds}
                onChange={(e) => setBeds(e.target.value)}
              >
                <option value="">Any</option>
                <option value="1">1+</option>
                <option value="2">2+</option>
                <option value="3">3+</option>
                <option value="4">4+</option>
              </select>
            </div>

            <div className="col-12 col-md-6 mb-3">
              <label htmlFor="qs-baths" className="form-label small font-weight-bold">
                Baths
              </label>
              <select
                id="qs-baths"
                className="form-control"
                value={baths}
                onChange={(e) => setBaths(e.target.value)}
              >
                <option value="">Any</option>
                <option value="1">1+</option>
                <option value="2">2+</option>
                <option value="3">3+</option>
                <option value="4">4+</option>
              </select>
            </div>
          </div>

          <div className="d-flex gap-2 mt-4">
            <button type="submit" className="btn btn-primary flex-grow-1">
              Search Properties
            </button>
            <button type="button" className="btn btn-outline-secondary" onClick={resetForm}>
              Reset
            </button>
          </div>

          <div className="text-center mt-3">
            <Link href="/available-condos" className="small text-muted">
              Advanced Search →
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}
