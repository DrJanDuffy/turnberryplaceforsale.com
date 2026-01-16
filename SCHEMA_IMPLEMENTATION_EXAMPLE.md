# JSON-LD Schema Implementation Guide

## Homepage Implementation Example

Here's how to use the new schema system on your homepage (`pages/[[...slug]].tsx`):

```tsx
import { SchemaMarkup } from "../components/seo/SchemaMarkup"
import { Breadcrumbs } from "../components/seo/Breadcrumbs"
import {
  generateRealEstateAgentSchema,
  generateRealEstateListingSchema,
  generatePlaceSchema,
  generateFAQSchema,
} from "../lib/schema/generators"

// Inside your HomePageContent component or page component:
function HomePageContent() {
  // 1. RealEstateAgent schema (already included sitewide, but can override)
  const agentSchema = generateRealEstateAgentSchema()

  // 2. RealEstateListing schema for the property
  const listingSchema = generateRealEstateListingSchema({
    name: "Turnberry Place Las Vegas",
    description: "Luxury high-rise condominium community featuring 4 towers with 1-4 bedroom residences, Strip views, and exclusive access to The Stirling Club.",
    url: "/",
    priceRange: "$800,000 - $10,000,000+",
    bedrooms: "1-4",
    bathrooms: "1-4",
    image: [
      "https://www.turnberryplaceforsale.com/images/turnberry/Turnberry_Place_For_Sale.jpg",
      "https://www.turnberryplaceforsale.com/images/turnberry/turnberry-tower-nice-view.jpg",
    ],
    dateModified: new Date().toISOString(),
  })

  // 3. Place schema for the property location
  const placeSchema = generatePlaceSchema({
    name: "Turnberry Place Las Vegas",
    description: "Luxury high-rise condominium community located one block from the Las Vegas Strip",
    url: "/",
    image: [
      "https://www.turnberryplaceforsale.com/images/turnberry/Turnberry_Place_For_Sale.jpg",
    ],
  })

  // 4. FAQ schema
  const faqSchema = generateFAQSchema([
    {
      question: "What is Turnberry Place Las Vegas?",
      answer: "Turnberry Place is a luxury high-rise condominium community in Las Vegas featuring 4 towers with 1-4 bedroom residences, Strip views, and exclusive access to The Stirling Club private amenities. Located at 2827 Paradise Rd, just one block from the Las Vegas Strip.",
    },
    {
      question: "What is the price range for condos at Turnberry Place?",
      answer: "Turnberry Place condos range from $800,000 to $10,000,000+ depending on tower, floor plan, floor level, and views. Tower 1 typically starts around $800K, while Tower 4 penthouses can exceed $10 million.",
    },
    {
      question: "What amenities are available at Turnberry Place?",
      answer: "Turnberry Place residents enjoy exclusive access to The Stirling Club, an 80,000-square-foot private facility featuring pools, fitness center, tennis courts, spa, dining venues, and business facilities. The community is guard-gated with 24-hour security, valet parking, and concierge services.",
    },
    {
      question: "How many towers are at Turnberry Place?",
      answer: "Turnberry Place consists of 4 luxury towers: Tower 1 (38 stories, completed 2000), Tower 2 (45 stories, completed 2001), Tower 3 (45 stories, completed 2002), and Tower 4 (45 stories, completed 2005).",
    },
    {
      question: "How can I schedule a showing at Turnberry Place?",
      answer: "You can schedule a private showing by calling the office at (702) 500-1971 or by requesting details through our online form. Dr. Jan Duffy specializes in Turnberry Place condos and offers personalized tours.",
    },
  ])

  // 5. Breadcrumbs (optional for homepage, but good for navigation)
  const breadcrumbItems = [
    { name: "Home", url: "/" },
  ]

  return (
    <>
      {/* Render all schemas - can pass array for @graph format */}
      <SchemaMarkup schema={[agentSchema, listingSchema, placeSchema, faqSchema]} />

      {/* Breadcrumbs with automatic schema */}
      <Breadcrumbs items={breadcrumbItems} className="container py-4" />

      {/* Your existing homepage content */}
      <HeroSlideshow photos={heroPhotos} />
      {/* ... rest of your content ... */}
    </>
  )
}
```

## Complete Homepage Integration

Update your `pages/[[...slug]].tsx` file to include comprehensive schemas:

```tsx
// At the top of the file, add imports:
import { SchemaMarkup } from "../components/seo/SchemaMarkup"
import {
  generateRealEstateAgentSchema,
  generateRealEstateListingSchema,
  generatePlaceSchema,
  generateFAQSchema,
} from "../lib/schema/generators"

// Inside the home page section (around line 44-82):
if (node.id === 'home' && node.type === 'node--landing_page') {
  // Generate schemas for homepage
  const homepageSchemas = [
    generateRealEstateAgentSchema(),
    generateRealEstateListingSchema({
      name: "Turnberry Place Las Vegas",
      description: "Luxury high-rise condominium community featuring 4 towers with 1-4 bedroom residences, Strip views, and exclusive access to The Stirling Club.",
      url: "/",
      priceRange: "$800,000 - $10,000,000+",
      bedrooms: "1-4",
      bathrooms: "1-4",
      image: [
        "https://www.turnberryplaceforsale.com/images/turnberry/Turnberry_Place_For_Sale.jpg",
      ],
    }),
    generatePlaceSchema({
      name: "Turnberry Place Las Vegas",
      description: "Luxury high-rise condominium community located one block from the Las Vegas Strip",
      url: "/",
    }),
    generateFAQSchema([
      {
        question: "What is Turnberry Place Las Vegas?",
        answer: "Turnberry Place is a luxury high-rise condominium community in Las Vegas featuring 4 towers with 1-4 bedroom residences, Strip views, and exclusive access to The Stirling Club private amenities.",
      },
      // ... more FAQs
    ]),
  ]

  return (
    <Layout menus={menus}>
      <Meta
        title="Turnberry Place High-Rise Condos | Near the Las Vegas Strip"
        description="Turnberry Place luxury high-rise condos near the Las Vegas Strip. Turnberry Towers Las Vegas High Rise Condos & Las Vegas Strip High Rise Condos for Sale. Call (702) 500-1971."
        // ... other props
      />
      
      {/* Add comprehensive schemas */}
      <SchemaMarkup schema={homepageSchemas} key="homepage-schemas" />
      
      {/* Keep existing JsonLdSchema if you want, or remove it */}
      {/* <JsonLdSchema type="home" propertyPrice="$800,000 - $10,000,000+" /> */}
      
      <HomePageContent />
    </Layout>
  )
}
```

## Usage Examples for Other Pages

### Agent Page (`/agent`)

```tsx
import { SchemaMarkup } from "../components/seo/SchemaMarkup"
import { generateRealEstateAgentSchema } from "../lib/schema/generators"

export default function AgentPage() {
  const agentSchema = generateRealEstateAgentSchema({
    // Override defaults if needed
    description: "Dr. Jan Duffy specializes in Turnberry Place luxury condos...",
  })

  return (
    <>
      <SchemaMarkup schema={agentSchema} />
      {/* Your page content */}
    </>
  )
}
```

### Property Listing Page

```tsx
import { SchemaMarkup } from "../components/seo/SchemaMarkup"
import { Breadcrumbs } from "../components/seo/Breadcrumbs"
import { generateRealEstateListingSchema } from "../lib/schema/generators"

export default function PropertyPage({ property }) {
  const listingSchema = generateRealEstateListingSchema({
    name: property.title,
    description: property.description,
    url: `/properties/${property.slug}`,
    priceRange: property.priceRange,
    bedrooms: property.bedrooms,
    bathrooms: property.bathrooms,
    image: property.images,
  })

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Available Condos", url: "/available-condos" },
    { name: property.title, url: `/properties/${property.slug}` },
  ]

  return (
    <>
      <SchemaMarkup schema={listingSchema} />
      <Breadcrumbs items={breadcrumbs} />
      {/* Property content */}
    </>
  )
}
```

### FAQ Page

```tsx
import { SchemaMarkup } from "../components/seo/SchemaMarkup"
import { generateFAQSchema } from "../lib/schema/generators"

export default function FAQPage() {
  const faqs = [
    { question: "Question 1?", answer: "Answer 1" },
    { question: "Question 2?", answer: "Answer 2" },
  ]

  return (
    <>
      <SchemaMarkup schema={generateFAQSchema(faqs)} />
      {/* FAQ content */}
    </>
  )
}
```

## Key Benefits

1. **Type Safety**: Full TypeScript support with interfaces
2. **Reusability**: Generator functions can be used across all pages
3. **Consistency**: Standardized format ensures Google compliance
4. **Maintainability**: Update business info in one place (generators.ts)
5. **SEO Optimized**: Follows 2025 Schema.org and Google guidelines

## Testing Your Schemas

1. **Google Rich Results Test**: https://search.google.com/test/rich-results
2. **Schema.org Validator**: https://validator.schema.org/
3. **Structured Data Testing Tool**: Use browser dev tools to inspect rendered JSON-LD

## Notes

- Sitewide schemas (Organization, WebSite) are automatically added via `_app.tsx`
- You can override or extend any schema by passing options to generator functions
- Multiple schemas on one page use `@graph` format automatically
- All schemas include proper `@id` references for entity relationships
