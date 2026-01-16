/**
 * Reusable SchemaMarkup component for JSON-LD structured data
 * Renders schema objects as JSON-LD script tags
 * Supports single schemas or multiple schemas using @graph
 */

import React from 'react'
import Head from 'next/head'
import type { SchemaType, SchemaGraph } from '../../lib/schema/types'

interface SchemaMarkupProps {
  /**
   * Single schema object or array of schemas
   * If array provided, will use @graph format
   */
  schema: SchemaType | SchemaType[] | SchemaGraph
  /**
   * Optional key for React (useful when rendering multiple SchemaMarkup components)
   */
  key?: string
}

/**
 * SchemaMarkup Component
 * 
 * Usage:
 * ```tsx
 * <SchemaMarkup schema={generateRealEstateAgentSchema()} />
 * 
 * // Multiple schemas on one page
 * <SchemaMarkup schema={[
 *   generateOrganizationSchema(),
 *   generateWebSiteSchema(),
 *   generateRealEstateAgentSchema()
 * ]} />
 * ```
 */
export function SchemaMarkup({ schema, key }: SchemaMarkupProps) {
  // Handle array of schemas - convert to @graph format
  const normalizedSchema = Array.isArray(schema)
    ? {
        '@context': 'https://schema.org',
        '@graph': schema,
      }
    : schema

  return (
    <Head>
      <script
        key={key || 'schema-markup'}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(normalizedSchema, null, 2),
        }}
      />
    </Head>
  )
}

/**
 * MultipleSchemaMarkup Component
 * For rendering multiple independent schema blocks
 * 
 * Usage:
 * ```tsx
 * <MultipleSchemaMarkup schemas={[
 *   { schema: generateOrganizationSchema(), key: 'org' },
 *   { schema: generateWebSiteSchema(), key: 'website' }
 * ]} />
 * ```
 */
interface MultipleSchemaMarkupProps {
  schemas: Array<{ schema: SchemaType; key?: string }>
}

export function MultipleSchemaMarkup({ schemas }: MultipleSchemaMarkupProps) {
  return (
    <>
      {schemas.map(({ schema, key }, index) => (
        <SchemaMarkup key={key || `schema-${index}`} schema={schema} />
      ))}
    </>
  )
}
