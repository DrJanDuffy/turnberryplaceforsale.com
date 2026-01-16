# Internal Linking & Heading Structure - Implementation Guide

## ✅ Components Created

### 1. RelatedPages Component (`/components/RelatedPages.tsx`)
- ✅ Card-based design with hover effects
- ✅ Displays 3-4 related page links
- ✅ Arrow icons for visual indication
- ✅ Mobile responsive
- ✅ SEO-friendly internal linking

### 2. BackToTop Component (`/components/BackToTop.tsx`)
- ✅ Floating button appears after scrolling
- ✅ Smooth scroll to top
- ✅ Accessible with ARIA labels
- ✅ Customizable position

### 3. TableOfContents Component (`/components/TableOfContents.tsx`)
- ✅ Sticky sidebar on desktop
- ✅ Highlights active section
- ✅ Smooth scroll to sections
- ✅ Mobile-friendly toggle

### 4. Linkify Utility (`/lib/utils/linkify.tsx`)
- ✅ Automatically converts key terms to internal links
- ✅ Configurable term-to-URL mapping
- ✅ Avoids over-linking (max once per term)
- ✅ React component support

---

## ✅ Configuration Files Created

### 1. Related Pages Config (`/lib/related-pages.ts`)
- ✅ Defines relationships for all 15 pages
- ✅ Helper function `getRelatedPages()`
- ✅ Type-safe with TypeScript

### 2. Heading Structure (`/lib/heading-structure.ts`)
- ✅ Documents proper H1, H2, H3 hierarchy for each page
- ✅ Validation function `validateHeadingStructure()`
- ✅ Helper function `getHeadingStructure()`

---

## 📋 Implementation Example: Towers Page

### Updated H1:
```tsx
<h1 id="towers-heading">
  Turnberry Place Las Vegas - Four Luxury High-Rise Towers
</h1>
```

### Added Components:
```tsx
import { RelatedPages } from "../components/RelatedPages"
import { BackToTop } from "../components/BackToTop"
import { linkifyContent } from "../lib/utils/linkify"

// In component:
<RelatedPages path="/towers" />
<BackToTop showAfter={400} />
```

### Contextual Linking Example:
```tsx
<p>
  {linkifyContent(
    'Explore our floor plans and discover the exclusive Stirling Club amenities available to all residents.'
  )}
</p>
```

---

## 🎯 Heading Structure for Towers Page

### Required Structure:
```
H1: Turnberry Place Las Vegas - Four Luxury High-Rise Towers
  H2: Tower 1 - The Original Vision (38 Stories, 2000)
    H3: Tower 1 Features & Views
    H3: Tower 1 Available Units
  H2: Tower 2 - Sophisticated Living (45 Stories, 2001)
    H3: Tower 2 Features & Views
    H3: Tower 2 Available Units
  H2: Tower 3 - Contemporary Luxury (45 Stories, 2002)
  H2: Tower 4 - The Crown Jewel (45 Stories, 2005)
  H2: Compare All Towers
  H2: Frequently Asked Questions
```

---

## 📊 Related Pages Configuration

### Towers Page Related Pages:
1. **Floor Plans** - View all layout options for each tower
2. **Available Units** - See current listings across all towers
3. **Photo Gallery** - Browse property images and virtual tours
4. **The Stirling Club** - Exclusive amenities available to all residents

---

## 🔧 Usage Examples

### RelatedPages Component:
```tsx
// Basic usage
<RelatedPages path="/towers" />

// Custom pages
<RelatedPages 
  pages={[
    { href: '/custom', title: 'Custom Page', description: 'Description' }
  ]} 
/>

// Custom heading
<RelatedPages path="/towers" heading="Explore More" />
```

### BackToTop Component:
```tsx
// Default (shows after 400px scroll)
<BackToTop />

// Custom
<BackToTop 
  showAfter={600} 
  bottomOffset="3rem"
  rightOffset="3rem"
/>
```

### TableOfContents Component:
```tsx
<TableOfContents 
  items={[
    { id: 'tower-1', text: 'Tower 1', level: 2 },
    { id: 'tower-2', text: 'Tower 2', level: 2 },
    { id: 'tower-1-features', text: 'Tower 1 Features', level: 3 },
  ]} 
/>
```

### Linkify Utility:
```tsx
// In JSX
<p>
  {linkifyContent(
    'Check out our floor plans and contact us to schedule a showing.'
  )}
</p>

// With custom options
<p>
  {linkifyContent(
    'The Stirling Club offers world-class amenities.',
    {
      maxLinksPerTerm: 2,
      linkClassName: 'text-gold-600 hover:text-gold-800',
    }
  )}
</p>
```

---

## ✅ Next Steps

### 1. Add RelatedPages to All Pages:
- [ ] Homepage
- [ ] Stirling Club
- [ ] Available Condos
- [ ] Floor Plans
- [ ] Amenities
- [ ] Neighborhood
- [ ] Agent
- [ ] Request Details
- [ ] Open House
- [ ] Photos
- [ ] Map
- [ ] Price Features
- [ ] Share
- [ ] MLS

### 2. Fix Heading Structure:
- [ ] Update H1s to match structure
- [ ] Ensure proper H2 hierarchy
- [ ] Add H3s where needed
- [ ] Validate with `validateHeadingStructure()`

### 3. Add Contextual Links:
- [ ] Use `linkifyContent()` in content sections
- [ ] Add manual links where appropriate
- [ ] Avoid over-linking

### 4. Add TOC for Long Pages:
- [ ] Towers page (4+ sections)
- [ ] Stirling Club page
- [ ] Neighborhood page
- [ ] Amenities page

---

## 📈 SEO Benefits

### Internal Linking:
- ✅ Distributes page authority
- ✅ Helps search engines discover pages
- ✅ Improves user navigation
- ✅ Reduces bounce rate

### Heading Structure:
- ✅ Better content organization
- ✅ Improved accessibility
- ✅ Better SEO rankings
- ✅ Enhanced user experience

### Related Pages:
- ✅ Increases time on site
- ✅ Reduces bounce rate
- ✅ Improves user engagement
- ✅ Better search rankings

---

## ✅ Status

**Components Created:** ✅ Complete
**Configuration Files:** ✅ Complete
**Towers Page Example:** ✅ Complete
**Documentation:** ✅ Complete

**Ready for implementation across all pages!**
