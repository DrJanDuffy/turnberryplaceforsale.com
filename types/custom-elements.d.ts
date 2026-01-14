import 'react'

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'realscout-office-listings': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          'agent-encoded-id'?: string
          'sort-order'?: string
          'listing-status'?: string
          'property-types'?: string
          'price-min'?: string
          'price-max'?: string
        },
        HTMLElement
      >
      'realscout-home-value': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          'agent-encoded-id'?: string
        },
        HTMLElement
      >
      'realscout-your-listings': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          'agent-encoded-id'?: string
          'sort-order'?: string
          'listing-status'?: string
          'property-types'?: string
        },
        HTMLElement
      >
    }
  }
}
