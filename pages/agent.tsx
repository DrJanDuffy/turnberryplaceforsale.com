import { GetStaticPropsResult } from "next"
import { Layout, LayoutProps } from "components/layout"
import { getMenus } from "lib/get-menus"
import { Meta } from "components/meta"
import { SEOHead } from "../components/seo/SEOHead"
import { SchemaMarkup } from "../components/seo/SchemaMarkup"
import { Breadcrumbs } from "../components/seo/Breadcrumbs"
import { generatePersonSchema } from "../lib/schema/generators"
import { RelatedPages } from "../components/RelatedPages"
import { BackToTop } from "../components/BackToTop"
import { linkifyContent } from "../lib/utils/linkify"
import { HeroSection } from "components/agent/HeroSection"
import { ServicesSection } from "components/agent/ServicesSection"
import { YourNeighborSection } from "components/agent/YourNeighborSection"
import { TestimonialsSection } from "components/agent/TestimonialsSection"
import { LocationContactSection } from "components/agent/LocationContactSection"
import { CalendlySection } from "components/agent/CalendlySection"
import { NewsletterSection } from "components/agent/NewsletterSection"

interface AgentPageProps extends LayoutProps {}

export default function AgentPage({ menus }: AgentPageProps) {
  return (
    <Layout menus={menus}>
      {/* SEO Meta Tags */}
      <SEOHead path="/agent" />
      
      {/* Keep Meta component for backward compatibility */}
      <Meta
        title="Dr. Jan Duffy | Your Turnberry Place Neighbor & REALTOR"
        description="Dr. Jan Duffy lives at Turnberry Place and helps buyers and sellers in her community. Your neighbor, your expert. Call (702) 500-1971."
        path="/agent"
      />
      {/* JSON-LD Structured Data */}
      {(() => {
        const agentSchema = generatePersonSchema('Dr. Jan Duffy', {
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
            'Las Vegas Strip Real Estate',
          ],
          areaServed: ['Las Vegas', 'Paradise', 'Winchester', 'Clark County'],
        })

        return <SchemaMarkup schema={agentSchema} key="agent-schema" />
      })()}

      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { name: 'Home', url: '/' },
          { name: 'Agent', url: '/agent' },
        ]}
        className="container py-4"
      />

      <div className="card-content card-agent">
        <HeroSection />
        <ServicesSection />
        <YourNeighborSection />
        <TestimonialsSection />
        <LocationContactSection />
        <CalendlySection />
        <NewsletterSection />
      </div>

      {/* Related Pages */}
      <RelatedPages path="/agent" />

      {/* Back to Top Button */}
      <BackToTop showAfter={400} />
    </Layout>
  )
}

export async function getStaticProps(): Promise<GetStaticPropsResult<AgentPageProps>> {
  return {
    props: {
      menus: await getMenus({} as any),
    },
  }
}
