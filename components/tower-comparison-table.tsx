'use client'

import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'

interface TowerData {
  number: number
  completed: number
  stories: number
  minSize: string
  maxSize: string
  startingPrice: string
  ceilingHeight: string
  stirlingAccess: string
  concierge: string
  bestViews: string
}

interface TowerComparisonTableProps {
  towers: TowerData[]
}

type SortColumn = 'feature' | 'tower1' | 'tower2' | 'tower3' | 'tower4' | null
type SortDirection = 'asc' | 'desc' | null

export function TowerComparisonTable({ towers }: TowerComparisonTableProps) {
  const [sortColumn, setSortColumn] = useState<SortColumn>(null)
  const [sortDirection, setSortDirection] = useState<SortDirection>(null)
  const [isSticky, setIsSticky] = useState(false)
  const tableRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLTableSectionElement>(null)

  // Sticky header effect
  useEffect(() => {
    if (!tableRef.current || !headerRef.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(!entry.isIntersecting)
      },
      { threshold: 1.0 }
    )

    observer.observe(headerRef.current)

    return () => observer.disconnect()
  }, [])

  // Determine "Best" value for each feature
  const getBestTower = (feature: keyof TowerData): number | null => {
    if (feature === 'number') return null
    if (feature === 'completed') return 4 // Most recent
    if (feature === 'stories') return 2 // Highest (Tower 2, 3, 4 all tie, pick first)
    if (feature === 'maxSize') return 4 // Largest
    if (feature === 'ceilingHeight') return 4 // Up to 12ft
    if (feature === 'concierge') return 4 // Premium
    if (feature === 'bestViews') return 4 // All views
    return null
  }

  const handleSort = (column: SortColumn) => {
    if (sortColumn === column) {
      // Toggle direction
      if (sortDirection === 'asc') {
        setSortDirection('desc')
      } else if (sortDirection === 'desc') {
        setSortColumn(null)
        setSortDirection(null)
      } else {
        setSortDirection('asc')
      }
    } else {
      setSortColumn(column)
      setSortDirection('asc')
    }
  }

  const getSortIcon = (column: SortColumn) => {
    if (sortColumn !== column) return null
    if (sortDirection === 'asc') return ' ▲'
    if (sortDirection === 'desc') return ' ▼'
    return null
  }

  // Sort features if sorting by feature column
  const sortedFeatures = [...features]
  if (sortColumn === 'feature' && sortDirection) {
    sortedFeatures.sort((a, b) => {
      const comparison = a.label.localeCompare(b.label)
      return sortDirection === 'asc' ? comparison : -comparison
    })
  }

  const features: Array<{ key: keyof TowerData; label: string }> = [
    { key: 'completed', label: 'Completed' },
    { key: 'stories', label: 'Stories' },
    { key: 'minSize', label: 'Min Size' },
    { key: 'maxSize', label: 'Max Size' },
    { key: 'startingPrice', label: 'Starting Price' },
    { key: 'ceilingHeight', label: 'Ceiling Height' },
    { key: 'stirlingAccess', label: 'Stirling Access' },
    { key: 'concierge', label: 'Concierge' },
    { key: 'bestViews', label: 'Best Views' },
  ]

  // Sort towers if sorting by tower column
  let sortedTowers = [...towers]
  if (sortColumn && sortColumn.startsWith('tower') && sortDirection) {
    const towerNum = parseInt(sortColumn.replace('tower', ''))
    const towerIndex = towerNum - 1
    
    sortedTowers.sort((a, b) => {
      // Compare based on the selected feature value (not implemented - would need feature selection)
      // For now, just keep original order when sorting by tower
      return 0
    })
  }

  return (
    <section className="card-content py-5" aria-label="Tower Comparison">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-4">
          <h2 className="h3 mb-2">Compare All Four Towers</h2>
          <p className="text-muted mb-4">
            Find the tower that matches your lifestyle
          </p>
        </div>

        {/* Desktop Table View */}
        <div ref={tableRef} className="d-none d-lg-block">
          <div style={{ overflowX: 'auto' }}>
            <table
              className="table table-bordered table-hover mb-4"
              style={{
                backgroundColor: '#ffffff',
                borderCollapse: 'collapse',
                width: '100%',
              }}
            >
              <thead
                ref={headerRef}
                style={{
                  position: isSticky ? 'sticky' : 'static',
                  top: isSticky ? '80px' : 'auto',
                  zIndex: isSticky ? 50 : 'auto',
                  backgroundColor: '#374151',
                  color: '#ffffff',
                }}
              >
                <tr>
                  <th
                    style={{
                      padding: '1rem',
                      fontWeight: '600',
                      border: '1px solid #4b5563',
                      minWidth: '150px',
                      cursor: 'pointer',
                    }}
                    onClick={() => handleSort('feature')}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#4b5563'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#374151'
                    }}
                  >
                    Feature
                    {getSortIcon('feature')}
                  </th>
                  {sortedTowers.map((tower) => (
                    <th
                      key={tower.number}
                      style={{
                        padding: '1rem',
                        fontWeight: '600',
                        border: '1px solid #4b5563',
                        textAlign: 'center',
                        minWidth: '120px',
                        cursor: 'pointer',
                      }}
                      onClick={() => handleSort(`tower${tower.number}` as SortColumn)}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#4b5563'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#374151'
                      }}
                    >
                      Tower {tower.number}
                      {getSortIcon(`tower${tower.number}` as SortColumn)}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {sortedFeatures.map((feature, index) => {
                  const bestTower = getBestTower(feature.key)
                  return (
                    <tr
                      key={feature.key}
                      style={{
                        backgroundColor: index % 2 === 0 ? '#ffffff' : '#f8f9fa',
                      }}
                    >
                      <td
                        style={{
                          padding: '1rem',
                          fontWeight: '600',
                          border: '1px solid #dee2e6',
                        }}
                      >
                        {feature.label}
                      </td>
                      {sortedTowers.map((tower) => {
                        const isBest = bestTower === tower.number
                        const value = tower[feature.key]
                        return (
                          <td
                            key={tower.number}
                            style={{
                              padding: '1rem',
                              textAlign: 'center',
                              border: '1px solid #dee2e6',
                              position: 'relative',
                            }}
                          >
                            <span>{String(value)}</span>
                            {isBest && (
                              <span
                                style={{
                                  display: 'inline-block',
                                  marginLeft: '0.5rem',
                                  padding: '0.125rem 0.5rem',
                                  borderRadius: '4px',
                                  fontSize: '0.75rem',
                                  fontWeight: '600',
                                  backgroundColor: '#D4AF37',
                                  color: '#000000',
                                }}
                              >
                                Best
                              </span>
                            )}
                          </td>
                        )
                      })}
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile Card View */}
        <div className="d-lg-none">
          {sortedTowers.map((tower, idx) => (
            <div
              key={tower.number}
              className="card mb-4"
              style={{
                border: '1px solid #dee2e6',
                borderRadius: '8px',
              }}
            >
              <div
                className="card-header"
                style={{
                  backgroundColor: '#374151',
                  color: '#ffffff',
                  fontWeight: '600',
                  padding: '1rem',
                  textAlign: 'center',
                }}
              >
                Tower {tower.number}
              </div>
              <div className="card-body" style={{ padding: '1rem' }}>
                <table className="table table-sm mb-0" style={{ width: '100%' }}>
                  <tbody>
                    {features.map((feature) => {
                      const bestTower = getBestTower(feature.key)
                      const isBest = bestTower === tower.number
                      const value = tower[feature.key]
                      return (
                        <tr key={feature.key}>
                          <td
                            style={{
                              padding: '0.5rem',
                              fontWeight: '600',
                              border: 'none',
                              width: '40%',
                            }}
                          >
                            {feature.label}:
                          </td>
                          <td
                            style={{
                              padding: '0.5rem',
                              border: 'none',
                              width: '60%',
                            }}
                          >
                            {String(value)}
                            {isBest && (
                              <span
                                style={{
                                  display: 'inline-block',
                                  marginLeft: '0.5rem',
                                  padding: '0.125rem 0.5rem',
                                  borderRadius: '4px',
                                  fontSize: '0.75rem',
                                  fontWeight: '600',
                                  backgroundColor: '#D4AF37',
                                  color: '#000000',
                                }}
                              >
                                Best
                              </span>
                            )}
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Text */}
        <div className="text-center mt-4">
          <p className="mb-0">
            Not sure which tower?{' '}
            <Link
              href="tel:+17025001971"
              className="font-weight-semibold"
              style={{ color: '#D4AF37' }}
            >
              Call (702) 500-1971
            </Link>{' '}
            for guidance
          </p>
        </div>
      </div>
    </section>
  )
}
