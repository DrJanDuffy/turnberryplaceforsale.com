import { GetStaticPropsResult } from "next"
import Head from "next/head"
import { Layout, LayoutProps } from "components/layout"
import { getMenus } from "lib/get-menus"
import { Meta } from "components/meta"
import { JsonLdSchema } from "components/json-ld-schema"
import { QuickSearchWidget } from "components/quick-search-widget"
// VIPNewsletterSignup available on homepage
import Script from "next/script"
import Link from "next/link"

interface AvailableCondosPageProps extends LayoutProps {}

export default function AvailableCondosPage({ menus }: AvailableCondosPageProps) {
  return (
    <Layout menus={menus}>
      <Meta title="Available Las Vegas Condos - Turnberry Place Las Vegas" />
      <Head>
        <title>Available Las Vegas Condos - Turnberry Place Las Vegas</title>
        <meta
          name="description"
          content="Browse available luxury condos for sale at Turnberry Place Las Vegas. 1-4 bedroom residences from $800K-$10M+ with Strip views. Call/text 702-222-1988"
        />
      </Head>
      <JsonLdSchema type="property" propertyPrice="$800,000 - $10,000,000+" />
      
      {/* Quick Search Widget - Keep on this page as it's relevant */}

      <div className="card-content card-embed-widget py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <h1 className="text-center mb-4">Available Las Vegas Condos at Turnberry Place</h1>
              <p className="lead text-center mb-5">
                Browse available luxury condominiums for sale at Turnberry Place Las Vegas, featuring one to four bedroom residences ranging from approximately $800,000 to over $10 million. Each available residence offers premium finishes, stunning views of the Las Vegas Strip or surrounding mountains, and exclusive access to The Stirling Club's world-class amenities. As a Las Vegas real estate expert with over 30 years of experience, I can provide comprehensive information about available properties and help you find the perfect Turnberry Place residence.
              </p>
              <div className="widget-wrapper">
                <Script
                  src="https://em.realscout.com/widgets/realscout-web-components.umd.js"
                  type="module"
                  strategy="lazyOnload"
                />
                <style jsx>{`
                  realscout-office-listings {
                    --rs-listing-divider-color: rgb(101, 141, 172);
                    width: 100%;
                  }
                `}</style>
                {/* @ts-ignore - Custom web component */}
                <realscout-office-listings
                  agent-encoded-id="QWdlbnQtMjI1MDUw"
                  sort-order="PRICE_HIGH"
                  listing-status="For Sale"
                  property-types="TC"
                  price-min="600000"
                ></realscout-office-listings>
              </div>
              <div className="text-center mt-4">
                <p className="mb-3">Interested in viewing these luxury condos?</p>
                <a href="tel:7022221988" className="btn btn-custom btn-lg" title="Call or text 702-222-1988">
                  Call/Text (702) 222-1988
                </a>
              </div>
            </div>
          </div>
          
          <div className="row mt-5">
            <div className="col-12 col-lg-10 mx-auto">
              <h2>Available Turnberry Place Condominiums</h2>
              <p>
                Browse available luxury condominiums at Turnberry Place, featuring 1-4 bedroom residences from $800K to over $10M. Each property includes premium finishes, stunning views, and exclusive access to The Stirling Club's world-class amenities.
              </p>
              <p>
                The RealScout widget above displays current available properties with real-time information. Use the filters to find residences that match your preferences by price, size, or tower.
              </p>
              <p className="mt-4">
                <strong>Ready to view available condos?</strong> Call or text me at <a href="tel:7022221988" className="text-decoration-underline">(702) 222-1988</a> to schedule a private showing or discuss available properties.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps(): Promise<GetStaticPropsResult<AvailableCondosPageProps>> {
  return {
    props: {
      menus: await getMenus({} as any),
    },
  }
}
