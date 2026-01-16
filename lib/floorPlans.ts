export interface FloorPlan {
  id: string
  name: string
  type: '1-Bedroom' | '2-Bedroom' | '3-Bedroom' | '4-Bedroom' | 'Penthouse'
  sqft: string
  sqftMin: number
  sqftMax: number
  beds: number
  baths: number
  balconySqft?: number
  priceRange: string
  priceMin: number
  priceMax: number
  towers: number[]
  features: string[]
  views: string[]
  image: string
  pdfUrl?: string
}

export const floorPlans: FloorPlan[] = [
  {
    id: 'plan-a',
    name: 'Floor Plan A',
    type: '1-Bedroom',
    sqft: '1,556',
    sqftMin: 1556,
    sqftMax: 1556,
    beds: 1,
    baths: 1.5,
    balconySqft: 379,
    priceRange: '$450,000 - $650,000',
    priceMin: 450000,
    priceMax: 650000,
    towers: [1, 2, 3, 4],
    features: ['Private balcony', 'Walk-in closet', 'Open kitchen', 'Floor-to-ceiling windows'],
    views: ['Strip views', 'City views'],
    image: '/images/turnberry/turnberry-place-floor-plan-a.png',
    pdfUrl: '/pdfs/turnberry-place-floor-plan-a.pdf'
  },
  {
    id: 'plan-b',
    name: 'Floor Plan B',
    type: '2-Bedroom',
    sqft: '1,712 - 2,050',
    sqftMin: 1712,
    sqftMax: 2050,
    beds: 2,
    baths: 2,
    balconySqft: 408,
    priceRange: '$600,000 - $950,000',
    priceMin: 600000,
    priceMax: 950000,
    towers: [1, 2, 3, 4],
    features: ['Wrap-around balcony', 'Two master suites', 'Gourmet kitchen', 'Marble baths'],
    views: ['Strip views', 'Mountain views'],
    image: '/images/turnberry/turnberry-place-floor-plan-b.png',
    pdfUrl: '/pdfs/turnberry-place-floor-plan-b.pdf'
  },
  {
    id: 'plan-c',
    name: 'Floor Plan C',
    type: '2-Bedroom',
    sqft: '2,050',
    sqftMin: 2050,
    sqftMax: 2050,
    beds: 2,
    baths: 2.5,
    balconySqft: 450,
    priceRange: '$750,000 - $1,100,000',
    priceMin: 750000,
    priceMax: 1100000,
    towers: [1, 2, 3, 4],
    features: ['Corner unit', 'Dual balconies', 'Den/office space', 'Custom finishes'],
    views: ['Panoramic Strip views', 'Golf course views'],
    image: '/images/turnberry/turnberry-place-floor-plan-c.png',
    pdfUrl: '/pdfs/turnberry-place-floor-plan-c.pdf'
  },
  {
    id: 'plan-d',
    name: 'Floor Plan D',
    type: '3-Bedroom',
    sqft: '2,805',
    sqftMin: 2805,
    sqftMax: 2805,
    beds: 3,
    baths: 3,
    balconySqft: 500,
    priceRange: '$1,100,000 - $1,600,000',
    priceMin: 1100000,
    priceMax: 1600000,
    towers: [1, 2, 3, 4],
    features: ['Private elevator lobby', 'Three en-suite bedrooms', 'Formal dining', 'Wet bar'],
    views: ['Strip views', 'Mountain views', 'City views'],
    image: '/images/turnberry/turnberry-place-floor-plan-d.png',
    pdfUrl: '/pdfs/turnberry-place-floor-plan-d.pdf'
  },
  {
    id: 'plan-e',
    name: 'Floor Plan E',
    type: '3-Bedroom',
    sqft: '3,200 - 3,500',
    sqftMin: 3200,
    sqftMax: 3500,
    beds: 3,
    baths: 3.5,
    balconySqft: 600,
    priceRange: '$1,400,000 - $2,200,000',
    priceMin: 1400000,
    priceMax: 2200000,
    towers: [2, 3, 4],
    features: ['Corner residence', 'Wrap-around terraces', 'Upgraded finishes', 'Smart home ready'],
    views: ['180° panoramic views', 'Strip views', 'Red Rock views'],
    image: '/images/turnberry/turnberry-place-floor-plan-e.png',
    pdfUrl: '/pdfs/turnberry-place-floor-plan-e.pdf'
  },
  {
    id: 'plan-er',
    name: 'Floor Plan ER',
    type: '3-Bedroom',
    sqft: '3,500',
    sqftMin: 3500,
    sqftMax: 3500,
    beds: 3,
    baths: 3.5,
    balconySqft: 650,
    priceRange: '$1,600,000 - $2,500,000',
    priceMin: 1600000,
    priceMax: 2500000,
    towers: [3, 4],
    features: ['Expanded layout', 'Home office', 'Butler pantry', 'Premium finishes'],
    views: ['Unobstructed Strip views', 'Mountain panorama'],
    image: '/images/turnberry/turnberry-place-floor-plan-er.png',
    pdfUrl: '/pdfs/turnberry-place-floor-plan-er.pdf'
  },
  {
    id: 'plan-f',
    name: 'Floor Plan F',
    type: '4-Bedroom',
    sqft: '4,103 - 5,000',
    sqftMin: 4103,
    sqftMax: 5000,
    beds: 4,
    baths: 4.5,
    balconySqft: 800,
    priceRange: '$2,200,000 - $3,500,000',
    priceMin: 2200000,
    priceMax: 3500000,
    towers: [2, 3, 4],
    features: ['Penthouse floor', 'Multiple terraces', 'Media room', 'Wine storage'],
    views: ['360° views', 'Strip', 'Mountains', 'Downtown'],
    image: '/images/turnberry/turnberry-place-floor-plan-f.png',
    pdfUrl: '/pdfs/turnberry-place-floor-plan-f.pdf'
  },
  {
    id: 'plan-g',
    name: 'Floor Plan G',
    type: '4-Bedroom',
    sqft: '5,609',
    sqftMin: 5609,
    sqftMax: 5609,
    beds: 4,
    baths: 5,
    balconySqft: 1000,
    priceRange: '$2,750,000 - $4,500,000',
    priceMin: 2750000,
    priceMax: 4500000,
    towers: [2, 3, 4],
    features: ['Combined units available', 'Private elevator', 'Chef kitchen', 'Spa bath'],
    views: ['Sweeping panoramas', 'Golf course', 'Strip', 'Mountains'],
    image: '/images/turnberry/turnberry-place-floor-plan-g.png',
    pdfUrl: '/pdfs/turnberry-place-floor-plan-g.pdf'
  },
  {
    id: 'plan-h',
    name: 'Floor Plan H',
    type: 'Penthouse',
    sqft: '6,421 - 9,000+',
    sqftMin: 6421,
    sqftMax: 9000,
    beds: 4,
    baths: 5.5,
    balconySqft: 1500,
    priceRange: '$4,000,000 - $10,000,000+',
    priceMin: 4000000,
    priceMax: 10000000,
    towers: [2, 3, 4],
    features: ['Two-story penthouse', 'Private pool/spa', 'Rooftop terrace', 'Theater room', '12ft ceilings'],
    views: ['Unmatched 360° views', 'Private rooftop views'],
    image: '/images/turnberry/turnberry-place-floor-plan-h.png',
    pdfUrl: '/pdfs/turnberry-place-floor-plan-h.pdf'
  }
]
