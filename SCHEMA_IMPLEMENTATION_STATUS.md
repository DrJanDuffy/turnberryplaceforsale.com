# Page-Specific Schema Implementation Status

## ✅ Completed

### `/pages/towers.tsx` - FULLY IMPLEMENTED

**Schemas Added:**
- ✅ ItemList schema containing 4 Residence entries
- ✅ 4 individual Residence schemas (Tower 1-4) with:
  - Complete descriptions
  - Year built (2000, 2001, 2002, 2005)
  - Number of floors (38, 45, 45, 45)
  - Bedroom/bathroom ranges
  - Floor size ranges
  - Amenity features
  - Images
- ✅ Breadcrumbs component with schema

**Implementation Details:**
- Each tower has unique @id reference
- Proper entity relationships via @id
- All required fields populated
- Images use full URLs

---

## 📋 Remaining Pages - Implementation Guide

### 1. `/pages/agent.tsx`

**Current:** Uses `JsonLdSchema` component  
**Needs:** Person schema with RealEstateAgent additionalType

**Key Changes:**
```tsx
// Replace:
<JsonLdSchema type="agent" />
<BreadcrumbSchema items={...} />

// With:
import { SchemaMarkup } from "../components/seo/SchemaMarkup"
import { Breadcrumbs } from "../components/seo/Breadcrumbs"
import { generatePersonSchema } from "../lib/schema/generators"

const agentSchema = generatePersonSchema('Dr. Jan Duffy', {
  jobTitle: 'REALTOR',
  additionalType: 'https://schema.org/RealEstateAgent',
  identifier: {
    '@type': 'PropertyValue',
    name: 'Nevada Real Estate License',
    value: 'S.0197614.LLC',
  },
  knowsAbout: [
    'Luxury High-Rise Condos',
    'Las Vegas Real Estate',
    'Turnberry Place',
    'The Stirling Club',
  ],
  areaServed: ['Las Vegas', 'Paradise', 'Winchester'],
})

<SchemaMarkup schema={agentSchema} />
<Breadcrumbs items={[
  { name: 'Home', url: '/' },
  { name: 'Agent', url: '/agent' },
]} />
```

---

### 2. `/pages/available-condos.tsx`

**Current:** Uses `JsonLdSchema` component  
**Needs:** RealEstateListing or ItemList schema

**Key Changes:**
```tsx
import { SchemaMarkup } from "../components/seo/SchemaMarkup"
import { Breadcrumbs } from "../components/seo/Breadcrumbs"
import { generateRealEstateListingSchema } from "../lib/schema/generators"

const listingSchema = generateRealEstateListingSchema({
  name: 'Available Turnberry Place Condos',
  description: 'Browse available luxury condominiums for sale at Turnberry Place Las Vegas',
  url: '/available-condos',
  priceRange: '$800,000 - $10,000,000+',
})

<SchemaMarkup schema={listingSchema} />
<Breadcrumbs items={[
  { name: 'Home', url: '/' },
  { name: 'Available Condos', url: '/available-condos' },
]} />
```

---

### 3. `/pages/stirling-club.tsx`

**Needs:** Place + SportsActivityLocation schemas

**Key Changes:**
```tsx
import { SchemaMarkup } from "../components/seo/SchemaMarkup"
import { Breadcrumbs } from "../components/seo/Breadcrumbs"
import {
  generatePlaceSchema,
  generateSportsActivityLocationSchema,
} from "../lib/schema/generators"

const schemas = [
  generatePlaceSchema({
    name: 'The Stirling Club at Turnberry Place',
    description: '80,000-square-foot private membership facility',
    url: '/stirling-club',
    amenityFeature: [
      { '@type': 'LocationFeatureSpecification', name: 'Fitness Center', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Resort Pool', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Tennis Courts', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Spa', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Dining', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Business Center', value: true },
    ],
  }),
  generateSportsActivityLocationSchema('The Stirling Club Fitness Center', 'Fitness', {
    url: '/stirling-club#fitness',
  }),
]

<SchemaMarkup schema={schemas} />
<Breadcrumbs items={[
  { name: 'Home', url: '/' },
  { name: 'Stirling Club', url: '/stirling-club' },
]} />
```

---

### 4. `/pages/floor-plans.tsx`

**Needs:** ItemList schema with floor plan entries

**Key Changes:**
```tsx
import { SchemaMarkup } from "../components/seo/SchemaMarkup"
import { Breadcrumbs } from "../components/seo/Breadcrumbs"
import { generateItemListSchema } from "../lib/schema/generators"

// Get floor plan data from your data source
const floorPlans = [
  {
    '@type': 'Product',
    name: 'Plan A - 1 Bedroom',
    description: 'Efficient 1 bedroom floor plan',
    floorSize: { '@type': 'QuantitativeValue', value: '1,200', unitCode: 'SQM' },
  },
  // ... more plans
]

const schema = generateItemListSchema('Turnberry Place Floor Plans', floorPlans, {
  url: '/floor-plans',
})

<SchemaMarkup schema={schema} />
<Breadcrumbs items={[
  { name: 'Home', url: '/' },
  { name: 'Floor Plans', url: '/floor-plans' },
]} />
```

---

### 5. `/pages/amenities.tsx`

**Needs:** Place schema with comprehensive amenityFeature list

**Key Changes:**
```tsx
import { SchemaMarkup } from "../components/seo/SchemaMarkup"
import { Breadcrumbs } from "../components/seo/Breadcrumbs"
import { generatePlaceSchema } from "../lib/schema/generators"

const schema = generatePlaceSchema({
  name: 'Turnberry Place Amenities',
  description: 'Comprehensive amenities at Turnberry Place',
  url: '/amenities',
  amenityFeature: [
    { '@type': 'LocationFeatureSpecification', name: 'Guard Gated', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Gym', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Pool', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Tennis', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Spa', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Concierge', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Valet', value: true },
    { '@type': 'LocationFeatureSpecification', name: '24-Hour Security', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'The Stirling Club', value: true },
  ],
})

<SchemaMarkup schema={schema} />
<Breadcrumbs items={[
  { name: 'Home', url: '/' },
  { name: 'Amenities', url: '/amenities' },
]} />
```

---

### 6. `/pages/neighborhood.tsx`

**Needs:** Place schema with containedInPlace

**Key Changes:**
```tsx
import { SchemaMarkup } from "../components/seo/SchemaMarkup"
import { Breadcrumbs } from "../components/seo/Breadcrumbs"
import { generatePlaceSchema } from "../lib/schema/generators"

const schema = generatePlaceSchema({
  name: 'Turnberry Place Neighborhood',
  description: 'Prime location one block from the Las Vegas Strip',
  url: '/neighborhood',
  containedInPlace: {
    '@type': 'City',
    name: 'Las Vegas',
    addressRegion: 'NV',
  },
})

<SchemaMarkup schema={schema} />
<Breadcrumbs items={[
  { name: 'Home', url: '/' },
  { name: 'Neighborhood', url: '/neighborhood' },
]} />
```

---

### 7. `/pages/request-details.tsx`

**Needs:** ContactPage schema

**Key Changes:**
```tsx
import { SchemaMarkup } from "../components/seo/SchemaMarkup"
import { Breadcrumbs } from "../components/seo/Breadcrumbs"
import { generateContactPageSchema } from "../lib/schema/generators"

const schema = generateContactPageSchema(
  'Request Turnberry Place Details',
  '/request-details',
  {
    description: 'Request pricing and details for Turnberry Place luxury condominiums',
  }
)

<SchemaMarkup schema={schema} />
<Breadcrumbs items={[
  { name: 'Home', url: '/' },
  { name: 'Request Details', url: '/request-details' },
]} />
```

---

### 8. `/pages/open-house.tsx`

**Needs:** Event schema (conditional, when events scheduled)

**Key Changes:**
```tsx
import { SchemaMarkup } from "../components/seo/SchemaMarkup"
import { Breadcrumbs } from "../components/seo/Breadcrumbs"
import { generateEventSchema } from "../lib/schema/generators"

// If you have scheduled events:
const events = [
  generateEventSchema(
    'Turnberry Place Open House',
    '2025-02-15T10:00:00-08:00',
    {
      endDate: '2025-02-15T14:00:00-08:00',
      description: 'Private showing of available condominiums',
    }
  ),
]

// Or general schema:
const schema = generateEventSchema(
  'Turnberry Place Private Showings',
  new Date().toISOString(),
  {
    description: 'Schedule a private showing',
    url: '/open-house',
  }
)

{events.length > 0 && <SchemaMarkup schema={events} />}
<Breadcrumbs items={[
  { name: 'Home', url: '/' },
  { name: 'Open House', url: '/open-house' },
]} />
```

---

### 9. `/pages/index.tsx` (Homepage in `[[...slug]].tsx`)

**Current Status:** ✅ Already has comprehensive schemas from previous task

**Optional Enhancement:** Add AggregateOffer and LocalBusiness with openingHours

```tsx
// Add to existing homepageSchemas array:
import {
  generateLocalBusinessSchema,
  generateAggregateOfferSchema,
} from "../lib/schema/generators"

const additionalSchemas = [
  generateLocalBusinessSchema({
    openingHours: ['Mo-Su 06:00-21:00'],
    priceRange: '$800,000 - $10,000,000+',
  }),
  generateAggregateOfferSchema('$800,000 - $10,000,000+', {
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
    offerCount: 12, // Update with actual count
  }),
]

// Add breadcrumbs:
<Breadcrumbs items={[{ name: 'Home', url: '/' }]} className="container py-4" />
```

---

## Implementation Priority

1. **High Priority** (Core pages):
   - ✅ `/pages/towers.tsx` - DONE
   - `/pages/agent.tsx` - Person schema
   - `/pages/available-condos.tsx` - RealEstateListing

2. **Medium Priority** (Feature pages):
   - `/pages/stirling-club.tsx` - Place + SportsActivityLocation
   - `/pages/amenities.tsx` - Place with amenities
   - `/pages/floor-plans.tsx` - ItemList

3. **Lower Priority** (Supporting pages):
   - `/pages/neighborhood.tsx` - Place
   - `/pages/request-details.tsx` - ContactPage
   - `/pages/open-house.tsx` - Event (conditional)

---

## Testing Checklist

After implementing each page:

- [ ] Test with Google Rich Results Test
- [ ] Verify breadcrumbs render correctly
- [ ] Check schema validation in browser dev tools
- [ ] Ensure @id references are unique
- [ ] Verify all required fields are populated
- [ ] Test mobile responsiveness of breadcrumbs

---

## Files Modified

- ✅ `/pages/towers.tsx` - Complete implementation
- ✅ `/lib/schema/generators.ts` - Added new generator functions:
  - `generateItemListSchema()`
  - `generateAggregateOfferSchema()`
  - `generateResidenceSchema()`
  - `generateContactPageSchema()`
  - `generateSportsActivityLocationSchema()`
  - Enhanced `generatePersonSchema()` with additionalType support

---

## Next Steps

1. Implement schemas for remaining pages following the patterns above
2. Test each page with Google Rich Results Test
3. Monitor Google Search Console for schema validation
4. Gradually remove legacy `JsonLdSchema` and `BreadcrumbSchema` components
