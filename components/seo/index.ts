/**
 * SEO Components Index
 * Centralized exports for easy importing
 */

export { SEOHead, SimpleSEOHead } from './SEOHead'
export { SchemaMarkup } from './SchemaMarkup'
export { Breadcrumbs } from './Breadcrumbs'
export { FAQSection, SimpleFAQSection, type FAQItem } from './FAQSection'
export { getSEOConfig, defaultSEO, type SEOConfig } from '../../lib/seo-config'
export {
  homepageFAQs,
  stirlingClubFAQs,
  towersFAQs,
  floorPlansFAQs,
  availableCondosFAQs,
  getFAQsForPage,
  allFAQs,
} from '../../lib/faq-data'
