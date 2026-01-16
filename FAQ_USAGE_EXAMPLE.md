# FAQ Section - Usage Example

## Complete Implementation Example

### Homepage Integration

```tsx
// pages/[[...slug]].tsx

import { FAQSection } from "../components/seo/FAQSection"
import { homepageFAQs } from "../lib/faq-data"

// In HomePageContent component:
function HomePageContent() {
  return (
    <>
      {/* ... other sections ... */}
      
      {/* FAQ Section */}
      <FAQSection
        faqs={homepageFAQs}
        heading="Frequently Asked Questions About Turnberry Place"
        description="Get answers to common questions about Turnberry Place luxury condominiums, amenities, pricing, and more."
        className="bg-gray-50"
      />
    </>
  )
}
```

### What Gets Rendered

1. **Visual Accordion:**
   - Expandable/collapsible questions
   - Smooth animations
   - Plus/minus icons
   - Hover effects

2. **FAQPage Schema (Automatic):**
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.turnberryplaceforsale.com/#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the price range for Turnberry Place condos?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Turnberry Place condos range from approximately $800,000..."
      }
    },
    // ... more questions
  ]
}
```

### Component Props

```tsx
interface FAQSectionProps {
  faqs: FAQItem[]                    // Required: Array of FAQ items
  heading?: string                   // Optional: Section heading
  description?: string               // Optional: Section description
  className?: string                 // Optional: Additional CSS classes
  showSchema?: boolean               // Optional: Show schema (default: true)
  allowMultiple?: boolean            // Optional: Allow multiple open (default: false)
}
```

### Accessibility Features

- ✅ ARIA attributes (`aria-expanded`, `aria-controls`)
- ✅ Keyboard navigation (Enter/Space to toggle)
- ✅ Focus states with visible outline
- ✅ Semantic HTML structure
- ✅ Screen reader friendly

### Mobile Responsive

- ✅ Touch-friendly buttons
- ✅ Responsive padding
- ✅ Optimized for small screens
- ✅ Smooth animations

---

## Result

✅ **5 Pages Updated** with FAQ sections
✅ **19 Unique FAQs** across all pages
✅ **Automatic Schema Generation** for all FAQs
✅ **Accessible & Mobile Responsive**
✅ **SEO Optimized** for rich results

**Ready for Google FAQ rich results!**
