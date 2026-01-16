/**
 * FAQ Data for Turnberry Place Las Vegas
 * Centralized FAQ content for all pages
 * Optimized for SEO and user engagement
 */

import { FAQItem } from '../components/seo/FAQSection'

export const homepageFAQs: FAQItem[] = [
  {
    question: 'What is the price range for Turnberry Place condos?',
    answer:
      'Turnberry Place condos range from approximately $800,000 for smaller units to over $10 million for penthouses. Prices vary by tower, floor, size, and views. Tower 1 typically starts around $800K, while Tower 4 penthouses can exceed $10 million.',
  },
  {
    question: 'How many towers are at Turnberry Place?',
    answer:
      'Turnberry Place has four luxury high-rise towers ranging from 38 to 45 stories, built between 2000 and 2005. Tower 1 (38 stories, completed 2000), Tower 2 (45 stories, completed 2001), Tower 3 (45 stories, completed 2002), and Tower 4 (45 stories, completed 2005).',
  },
  {
    question: 'What amenities are included at Turnberry Place?',
    answer:
      'Residents have exclusive access to the 80,000 sq ft Stirling Club featuring fitness center, resort pools, tennis courts, spa, dining venues, and business center. The community also offers 24/7 security, valet parking, and concierge services. All amenities are included with ownership.',
  },
  {
    question: 'How do I schedule a showing at Turnberry Place?',
    answer:
      'Contact Dr. Jan Duffy at (702) 500-1971 or submit a request through our website. Private showings are available 7 days a week. Dr. Jan Duffy specializes in Turnberry Place condos and offers personalized tours of available units.',
  },
  {
    question: 'Where is Turnberry Place located?',
    answer:
      'Turnberry Place is located at 2827 Paradise Road, one block east of the Las Vegas Strip between Wynn/Encore and Sahara resorts. The property offers immediate proximity to world-class dining, entertainment, and attractions while maintaining privacy through guard-gated security.',
  },
]

export const stirlingClubFAQs: FAQItem[] = [
  {
    question: 'What is the Stirling Club?',
    answer:
      'The Stirling Club is an 80,000 square foot private club exclusively for Turnberry Place residents, featuring fitness facilities, pools, tennis courts, spa services, and multiple dining venues. It represents one of the most comprehensive private club amenities available in any Las Vegas condominium development.',
  },
  {
    question: 'Is Stirling Club membership included with ownership?',
    answer:
      'Yes, all Turnberry Place owners and residents have access to the Stirling Club as part of their HOA benefits. There are no additional membership fees - access is included with your ownership.',
  },
  {
    question: 'What are the Stirling Club amenities?',
    answer:
      'The Stirling Club includes a state-of-the-art fitness center, indoor and outdoor resort-style pools, clay tennis and pickleball courts, full-service spa, multiple restaurants and bars, business center with conference rooms, cigar bar, and social lounges. The facility was recently renovated to world-class standards.',
  },
  {
    question: 'What are the Stirling Club hours?',
    answer:
      'The Stirling Club is open daily for residents. Fitness center and pool hours are typically 5 AM to 10 PM. Restaurant hours vary by venue, with some dining options available for breakfast, lunch, and dinner. The business center and spa operate during standard business hours with appointment availability.',
  },
]

export const towersFAQs: FAQItem[] = [
  {
    question: 'Which Turnberry Place tower is the best?',
    answer:
      'Each tower offers unique advantages. Tower 4 (2005) has the most refined finishes and highest ceilings (up to 12 feet). Towers 2 and 3 offer 45 floors with excellent views and spacious layouts. Tower 1 provides classic elegance at often lower price points, making it an excellent entry point into Turnberry Place living.',
  },
  {
    question: 'What floor are the penthouses at Turnberry Place?',
    answer:
      'Penthouses are located above the 30th floor in each tower and feature elevated ceilings up to 12 feet and floor plans exceeding 5,000 square feet. Tower 4 penthouses are the most luxurious, with some exceeding 8,000 square feet and commanding prices over $10 million.',
  },
  {
    question: 'Do all towers have the same amenities?',
    answer:
      'Yes, all four towers share access to the Stirling Club, valet parking, concierge services, and 24-hour security. Each tower has its own lobby and elevators, but all residents enjoy the same comprehensive amenities package regardless of which tower they call home.',
  },
  {
    question: 'What views are available from each tower?',
    answer:
      'Views vary by unit and direction. South-facing units see the Las Vegas Strip skyline, west-facing units see Red Rock Canyon sunsets, east-facing units see the valley and Spring Mountain Range, and north-facing units see downtown and the Sheep Mountain Range. Higher floors offer more expansive views in all directions.',
  },
]

export const floorPlansFAQs: FAQItem[] = [
  {
    question: 'How many floor plans are available at Turnberry Place?',
    answer:
      'Turnberry Place offers 9 distinct floor plans labeled A through H (plus ER variant), ranging from approximately 1,500 to over 9,000 square feet. Plans include 1-5 bedrooms with various configurations to suit different lifestyles, from pied-à-terre to full-time luxury living.',
  },
  {
    question: 'What is the smallest unit at Turnberry Place?',
    answer:
      'The smallest units are approximately 1,500 square feet with 1-2 bedrooms, ideal for pied-à-terre or investment properties. These units still feature premium finishes, high ceilings, and access to all Turnberry Place amenities including the Stirling Club.',
  },
  {
    question: 'Can units be combined at Turnberry Place?',
    answer:
      'Yes, some owners have combined adjacent units to create larger residences. This requires HOA approval and coordination with building management. Consult with the HOA and your agent about combination possibilities and any restrictions that may apply to your specific tower.',
  },
]

export const availableCondosFAQs: FAQItem[] = [
  {
    question: 'How often are new listings available at Turnberry Place?',
    answer:
      'Inventory varies throughout the year. Typically 10-20 units are available at any time across all four towers. New listings come to market regularly as owners relocate or upgrade. Sign up for alerts to be notified of new listings as soon as they become available.',
  },
  {
    question: 'Can I rent out my Turnberry Place condo?',
    answer:
      'Rental policies are governed by each tower\'s CC&Rs (Covenants, Conditions, and Restrictions). Some restrictions apply, including minimum lease terms and tenant approval processes. Contact us for current rental guidelines and to discuss investment potential.',
  },
  {
    question: 'What is the average HOA fee at Turnberry Place?',
    answer:
      'HOA fees vary by unit size and tower, typically ranging from $1,500 to $4,000+ per month. Fees include access to Stirling Club, 24-hour security, valet parking, building maintenance, common area upkeep, and more. Larger units and penthouses typically have higher HOA fees reflecting their square footage.',
  },
]

/**
 * Get FAQs for a specific page
 */
export function getFAQsForPage(page: string): FAQItem[] {
  const faqMap: Record<string, FAQItem[]> = {
    '/': homepageFAQs,
    '/home': homepageFAQs,
    '/stirling-club': stirlingClubFAQs,
    '/towers': towersFAQs,
    '/floor-plans': floorPlansFAQs,
    '/available-condos': availableCondosFAQs,
  }

  return faqMap[page] || []
}

/**
 * All FAQs combined (for sitemap or comprehensive FAQ page)
 */
export const allFAQs: FAQItem[] = [
  ...homepageFAQs,
  ...stirlingClubFAQs,
  ...towersFAQs,
  ...floorPlansFAQs,
  ...availableCondosFAQs,
]
