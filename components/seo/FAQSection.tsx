/**
 * FAQSection Component
 * Accessible FAQ accordion with automatic FAQPage schema generation
 * Follows 2025 SEO best practices for FAQ rich results
 */

import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { SchemaMarkup } from './SchemaMarkup'
import { generateFAQSchema } from '../../lib/schema/generators'

export interface FAQItem {
  question: string
  answer: string
}

interface FAQSectionProps {
  /**
   * Array of FAQ items
   */
  faqs: FAQItem[]
  /**
   * Optional heading for the FAQ section
   */
  heading?: string
  /**
   * Optional description/subheading
   */
  description?: string
  /**
   * Custom className for the container
   */
  className?: string
  /**
   * Whether to show schema (default: true)
   */
  showSchema?: boolean
  /**
   * Allow multiple items open at once (default: false)
   */
  allowMultiple?: boolean
}

/**
 * FAQSection Component
 * 
 * Features:
 * - Accessible accordion with ARIA attributes
 * - Keyboard navigation support
 * - Automatic FAQPage schema generation
 * - Smooth animations
 * - Mobile responsive
 * 
 * Usage:
 * ```tsx
 * <FAQSection 
 *   faqs={faqData.homepage}
 *   heading="Frequently Asked Questions"
 *   description="Common questions about Turnberry Place"
 * />
 * ```
 */
export function FAQSection({
  faqs,
  heading = 'Frequently Asked Questions',
  description,
  className = '',
  showSchema = true,
  allowMultiple = false,
}: FAQSectionProps) {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set())

  const toggleItem = (index: number) => {
    setOpenItems((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(index)) {
        newSet.delete(index)
      } else {
        if (!allowMultiple) {
          newSet.clear()
        }
        newSet.add(index)
      }
      return newSet
    })
  }

  const handleKeyDown = (event: React.KeyboardEvent, index: number) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      toggleItem(index)
    }
  }

  if (!faqs || faqs.length === 0) {
    return null
  }

  return (
    <>
      {/* FAQPage Schema */}
      {showSchema && <SchemaMarkup schema={generateFAQSchema(faqs)} />}

      {/* FAQ Section */}
      <section
        className={`faq-section py-12 md:py-16 lg:py-20 ${className}`}
        aria-label="Frequently Asked Questions"
      >
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Section Header */}
          {(heading || description) && (
            <div className="text-center mb-8 md:mb-12">
              {heading && (
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-4">
                  {heading}
                </h2>
              )}
              {description && (
                <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                  {description}
                </p>
              )}
            </div>
          )}

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openItems.has(index)
              const itemId = `faq-item-${index}`
              const questionId = `faq-question-${index}`
              const answerId = `faq-answer-${index}`

              return (
                <div
                  key={index}
                  className="faq-item bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  {/* Question Button */}
                  <button
                    type="button"
                    className="faq-question w-full px-6 py-5 md:px-8 md:py-6 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-2 rounded-lg"
                    onClick={() => toggleItem(index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    id={questionId}
                  >
                    <span className="faq-question-text text-lg md:text-xl font-semibold text-gray-900 pr-4 flex-1">
                      {faq.question}
                    </span>
                    <span
                      className="faq-icon flex-shrink-0 text-gray-500 transition-transform duration-300"
                      aria-hidden="true"
                      style={{
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      }}
                    >
                      <ChevronDown className="w-6 h-6" />
                    </span>
                  </button>

                  {/* Answer Content */}
                  <div
                    id={answerId}
                    role="region"
                    aria-labelledby={questionId}
                    className="faq-answer overflow-hidden transition-all duration-300 ease-in-out"
                    style={{
                      maxHeight: isOpen ? '1000px' : '0',
                      opacity: isOpen ? 1 : 0,
                    }}
                  >
                    <div className="px-6 pb-5 md:px-8 md:pb-6 pt-0">
                      <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                        <p className="text-base md:text-lg">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <style jsx>{`
        .faq-item {
          transition: all 0.2s ease-in-out;
        }

        .faq-item:hover {
          border-color: #d4af37;
        }

        .faq-question:focus-visible {
          outline: 2px solid #d4af37;
          outline-offset: 2px;
        }

        .faq-answer {
          transition: max-height 0.3s ease-in-out, opacity 0.3s ease-in-out;
        }

        /* Smooth scroll for long answers */
        .faq-answer > div {
          animation: fadeIn 0.3s ease-in-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Mobile optimizations */
        @media (max-width: 640px) {
          .faq-question {
            padding: 1rem;
          }

          .faq-answer > div {
            padding: 0 1rem 1rem;
          }
        }
      `}</style>
    </>
  )
}

/**
 * Simple FAQ List (non-accordion, always expanded)
 * Useful for shorter FAQ lists or when you want all answers visible
 */
interface SimpleFAQSectionProps {
  faqs: FAQItem[]
  heading?: string
  description?: string
  className?: string
  showSchema?: boolean
}

export function SimpleFAQSection({
  faqs,
  heading = 'Frequently Asked Questions',
  description,
  className = '',
  showSchema = true,
}: SimpleFAQSectionProps) {
  if (!faqs || faqs.length === 0) {
    return null
  }

  return (
    <>
      {showSchema && <SchemaMarkup schema={generateFAQSchema(faqs)} />}

      <section
        className={`faq-section-simple py-12 md:py-16 ${className}`}
        aria-label="Frequently Asked Questions"
      >
        <div className="container mx-auto px-4 max-w-4xl">
          {(heading || description) && (
            <div className="text-center mb-8 md:mb-12">
              {heading && (
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
                  {heading}
                </h2>
              )}
              {description && (
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  {description}
                </p>
              )}
            </div>
          )}

          <dl className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6 md:p-8 shadow-sm"
              >
                <dt className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
                  {faq.question}
                </dt>
                <dd className="text-base md:text-lg text-gray-700 leading-relaxed">
                  {faq.answer}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  )
}
