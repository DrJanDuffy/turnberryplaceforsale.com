/**
 * Reusable JSON-LD Schema Markup Component
 * Use this component to inject structured data for SEO
 */

import React from 'react'

interface JsonLdProps {
  schema: Record<string, any>
}

export function JsonLd({ schema }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
    />
  )
}
