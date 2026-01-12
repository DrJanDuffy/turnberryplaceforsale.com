import { GetStaticPropsResult } from "next"
import Head from "next/head"
import { Layout, LayoutProps } from "components/layout"
import { getMenus } from "lib/get-menus"
import { Meta } from "components/meta"
import { JsonLdSchema } from "components/json-ld-schema"
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
          content="Browse available luxury condos for sale at Turnberry Place Las Vegas. 1-4 bedroom residences from $800K-$10M+ with Strip views. Call/text 702-222-1964"
        />
      </Head>
      <JsonLdSchema type="property" propertyPrice="$800,000 - $10,000,000+" />
      <div className="card-content card-embed-widget py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <h1 className="text-center mb-4">Available Las Vegas Condos</h1>
              <p className="text-center mb-4">
                Explore luxury condos for sale at Turnberry Place. Each residence features premium finishes, stunning views, and exclusive access to The Stirling Club.
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
                <a href="tel:7022221964" className="btn btn-custom btn-lg" title="Call or text 702-222-1964">
                  Call/Text (702) 222-1964
                </a>
              </div>
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
