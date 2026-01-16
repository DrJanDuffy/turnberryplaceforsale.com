# Page-Specific Schema Implementation Guide

## ✅ Complete Example: `/pages/towers.tsx`

The towers page has been fully implemented with:
- **ItemList schema** containing 4 Residence entries
- **4 Residence schemas** (one for each tower) with complete details
- **Breadcrumbs** component with automatic schema

See `pages/towers.tsx` for the complete implementation.

---

## Key Changes for Other Pages

### 1. `/pages/index.tsx` (Homepage - already in `[[...slug]].tsx`)

**Current Status:** ✅ Already implemented in previous task

**Schemas included:**
- RealEstateAgent (sitewide + homepage)
- RealEstateListing
- Place
- FAQPage (10 FAQs)
- Organization (sitewide)
- WebSite (sitewide)

**To add AggregateOffer and LocalBusiness:**

```tsx
import { SchemaMarkup } from "../components/seo/SchemaMarkup"
import {
  generateLocalBusinessSchema,
  generateAggregateOfferSchema,
} from "../lib/schema/generators"

// In homepage component:
const homepageSchemas = [
  // ... existing schemas ...
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

// Add breadcrumbs
<Breadcrumbs items={[{ name: 'Home', url: '/' }]} className="container py-4" />
```

---

### 2. `/pages/agent.tsx`

**Changes needed:**

```tsx
import { SchemaMarkup } from "../components/seo/SchemaMarkup"
import { Breadcrumbs } from "../components/seo/Breadcrumbs"
import { generatePersonSchema } from "../lib/schema/generators"

// Replace existing JsonLdSchema with:
const agentSchemas = [
  generatePersonSchema('Dr. Jan Duffy', {
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
      'Luxury Condominium Sales',
      'High-Rise Living',
    ],
    areaServed: ['Las Vegas', 'Paradise', 'Winchester', 'Clark County'],
  }),
]

// In component:
<SchemaMarkup schema={agentSchemas} key="agent-schemas" />
<Breadcrumbs
  items={[
    { name: 'Home', url: '/' },
    { name: 'Agent', url: '/agent' },
  ]}
  className="container py-4"
/>
```

---

### 3. `/pages/available-condos.tsx`

**Changes needed:**

```tsx
import { SchemaMarkup } from "../components/seo/SchemaMarkup"
import { Breadcrumbs } from "../components/seo/Breadcrumbs"
import {
  generateRealEstateListingSchema,
  generateItemListSchema,
} from "../lib/schema/generators"

// If you have listing data:
const listingSchemas = listings.map((listing) =>
  generateRealEstateListingSchema({
    name: listing.title,
    description: listing.description,
    url: `/available-condos/${listing.slug}`,
    priceRange: listing.priceRange,
    bedrooms: listing.bedrooms,
    bathrooms: listing.bathrooms,
    image: listing.images,
  })
)

// Or single schema for the page:
const pageSchema = generateRealEstateListingSchema({
  name: 'Available Turnberry Place Condos',
  description: 'Browse available luxury condominiums for sale at Turnberry Place Las Vegas',
  url: '/available-condos',
  priceRange: '$800,000 - $10,000,000+',
})

// If multiple listings, use ItemList:
const itemListSchema = generateItemListSchema(
  'Available Turnberry Place Condos',
  listingSchemas,
  {
    description: 'Current listings of luxury condominiums at Turnberry Place',
    url: '/available-condos',
  }
)

// In component:
<SchemaMarkup schema={itemListSchema || pageSchema} key="listings-schema" />
<Breadcrumbs
  items={[
    { name: 'Home', url: '/' },
    { name: 'Available Condos', url: '/available-condos' },
  ]}
  className="container py-4"
/>
```

---

### 4. `/pages/stirling-club.tsx`

**Changes needed:**

```tsx
import { SchemaMarkup } from "../components/seo/SchemaMarkup"
import { Breadcrumbs } from "../components/seo/Breadcrumbs"
import {
  generatePlaceSchema,
  generateSportsActivityLocationSchema,
} from "../lib/schema/generators"

const stirlingClubSchemas = [
  generatePlaceSchema({
    name: 'The Stirling Club at Turnberry Place',
    description: '80,000-square-foot private membership facility exclusively for Turnberry Place residents',
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
    description: 'State-of-the-art fitness facility at The Stirling Club',
    url: '/stirling-club#fitness',
  }),
  generateSportsActivityLocationSchema('The Stirling Club Tennis Courts', 'Tennis', {
    description: 'Professional tennis courts at The Stirling Club',
    url: '/stirling-club#tennis',
  }),
  generateSportsActivityLocationSchema('The Stirling Club Pool', 'Swimming', {
    description: 'Resort-style pools at The Stirling Club',
    url: '/stirling-club#pool',
  }),
]

// In component:
<SchemaMarkup schema={stirlingClubSchemas} key="stirling-club-schemas" />
<Breadcrumbs
  items={[
    { name: 'Home', url: '/' },
    { name: 'Stirling Club', url: '/stirling-club' },
  ]}
  className="container py-4"
/>
```

---

### 5. `/pages/floor-plans.tsx`

**Changes needed:**

```tsx
import { SchemaMarkup } from "../components/seo/SchemaMarkup"
import { Breadcrumbs } from "../components/seo/Breadcrumbs"
import { generateItemListSchema } from "../lib/schema/generators"

// Floor plan data (adjust based on your actual data)
const floorPlans = [
  {
    '@type': 'Product',
    name: 'Plan A - 1 Bedroom',
    description: 'Efficient 1 bedroom floor plan',
    floorSize: { '@type': 'QuantitativeValue', value: '1,200', unitCode: 'SQM' },
  },
  {
    '@type': 'Product',
    name: 'Plan B - 2 Bedroom',
    description: 'Spacious 2 bedroom floor plan',
    floorSize: { '@type': 'QuantitativeValue', value: '1,800', unitCode: 'SQM' },
  },
  // ... more plans
]

const floorPlanSchema = generateItemListSchema(
  'Turnberry Place Floor Plans',
  floorPlans,
  {
    description: 'Available floor plans at Turnberry Place Las Vegas',
    url: '/floor-plans',
  }
)

// In component:
<SchemaMarkup schema={floorPlanSchema} key="floor-plans-schema" />
<Breadcrumbs
  items={[
    { name: 'Home', url: '/' },
    { name: 'Floor Plans', url: '/floor-plans' },
  ]}
  className="container py-4"
/>
```

---

### 6. `/pages/amenities.tsx`

**Changes needed:**

```tsx
import { SchemaMarkup } from "../components/seo/SchemaMarkup"
import { Breadcrumbs } from "../components/seo/Breadcrumbs"
import { generatePlaceSchema } from "../lib/schema/generators"

const amenitiesSchema = generatePlaceSchema({
  name: 'Turnberry Place Amenities',
  description: 'Comprehensive amenities at Turnberry Place luxury condominium community',
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

// In component:
<SchemaMarkup schema={amenitiesSchema} key="amenities-schema" />
<Breadcrumbs
  items={[
    { name: 'Home', url: '/' },
    { name: 'Amenities', url: '/amenities' },
  ]}
  className="container py-4"
/>
```

---

### 7. `/pages/neighborhood.tsx`

**Changes needed:**

```tsx
import { SchemaMarkup } from "../components/seo/SchemaMarkup"
import { Breadcrumbs } from "../components/seo/Breadcrumbs"
import { generatePlaceSchema } from "../lib/schema/generators"

const neighborhoodSchema = generatePlaceSchema({
  name: 'Turnberry Place Neighborhood',
  description: 'Prime location one block from the Las Vegas Strip, near Wynn Encore and Sahara resorts',
  url: '/neighborhood',
  containedInPlace: {
    '@type': 'City',
    name: 'Las Vegas',
    addressRegion: 'NV',
  },
  // Add nearby landmarks as mentions in description or as separate entities
})

// In component:
<SchemaMarkup schema={neighborhoodSchema} key="neighborhood-schema" />
<Breadcrumbs
  items={[
    { name: 'Home', url: '/' },
    { name: 'Neighborhood', url: '/neighborhood' },
  ]}
  className="container py-4"
/>
```

---

### 8. `/pages/request-details.tsx`

**Changes needed:**

```tsx
import { SchemaMarkup } from "../components/seo/SchemaMarkup"
import { Breadcrumbs } from "../components/seo/Breadcrumbs"
import { generateContactPageSchema } from "../lib/schema/generators"

const contactPageSchema = generateContactPageSchema(
  'Request Turnberry Place Details',
  '/request-details',
  {
    description: 'Request pricing and details for Turnberry Place luxury condominiums',
  }
)

// In component:
<SchemaMarkup schema={contactPageSchema} key="contact-page-schema" />
<Breadcrumbs
  items={[
    { name: 'Home', url: '/' },
    { name: 'Request Details', url: '/request-details' },
  ]}
  className="container py-4"
/>
```

---

### 9. `/pages/open-house.tsx`

**Changes needed:**

```tsx
import { SchemaMarkup } from "../components/seo/SchemaMarkup"
import { Breadcrumbs } from "../components/seo/Breadcrumbs"
import { generateEventSchema } from "../lib/schema/generators"

// If you have scheduled events, generate Event schemas:
const openHouseEvents = [
  // Example - adjust based on actual events
  generateEventSchema(
    'Turnberry Place Open House',
    '2025-02-15T10:00:00-08:00', // ISO format
    {
      endDate: '2025-02-15T14:00:00-08:00',
      description: 'Private showing of available Turnberry Place condominiums',
    }
  ),
]

// Or if no specific events, use a general schema:
const openHouseSchema = generateEventSchema(
  'Turnberry Place Private Showings',
  new Date().toISOString(),
  {
    description: 'Schedule a private showing of Turnberry Place luxury condominiums',
    url: '/open-house',
  }
)

// In component (conditionally render if events exist):
{openHouseEvents.length > 0 && (
  <SchemaMarkup schema={openHouseEvents} key="open-house-events" />
)}
<Breadcrumbs
  items={[
    { name: 'Home', url: '/' },
    { name: 'Open House', url: '/open-house' },
  ]}
  className="container py-4"
/>
```

---

## Implementation Checklist

- [x] `/pages/towers.tsx` - Complete implementation
- [ ] `/pages/index.tsx` - Add AggregateOffer and LocalBusiness (optional enhancement)
- [ ] `/pages/agent.tsx` - Replace with Person schema
- [ ] `/pages/available-condos.tsx` - Add RealEstateListing or ItemList
- [ ] `/pages/stirling-club.tsx` - Add Place and SportsActivityLocation schemas
- [ ] `/pages/floor-plans.tsx` - Add ItemList schema
- [ ] `/pages/amenities.tsx` - Add Place schema with amenityFeature
- [ ] `/pages/neighborhood.tsx` - Add Place schema
- [ ] `/pages/request-details.tsx` - Add ContactPage schema
- [ ] `/pages/open-house.tsx` - Add Event schema (conditional)

---

## Notes

1. **Breadcrumbs**: All pages should include the Breadcrumbs component for navigation and SEO
2. **@id References**: Schemas automatically include @id for entity relationships
3. **Multiple Schemas**: Use array format `[schema1, schema2]` for multiple schemas on one page
4. **Testing**: Use Google Rich Results Test after implementation
5. **Legacy Components**: You can keep existing `JsonLdSchema` and `BreadcrumbSchema` components for backward compatibility, or gradually migrate

---

## Next Steps

1. Implement schemas for each page following the patterns above
2. Test each page with Google Rich Results Test
3. Verify breadcrumbs render correctly
4. Monitor Google Search Console for schema validation
