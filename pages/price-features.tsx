import { GetStaticPropsResult } from "next"
import Head from "next/head"
import { Layout, LayoutProps } from "components/layout"
import { getMenus } from "lib/get-menus"
import { Meta } from "components/meta"

interface PriceFeaturesPageProps extends LayoutProps {}

export default function PriceFeaturesPage({ menus }: PriceFeaturesPageProps) {
  return (
    <Layout menus={menus}>
      <Meta title="Price & Features - Turnberry Place Las Vegas" />
      <Head>
        <title>Price & Features - Turnberry Place Las Vegas</title>
      </Head>
      <div className="card-content card-price-features py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 text-center">
              <h1 className="mb-1">Turnberry Place Las Vegas</h1>
              <p>Las Vegas, NV 89109</p>
              <h3>4 Luxury Towers from $800,000 to $10M+</h3>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps(): Promise<GetStaticPropsResult<PriceFeaturesPageProps>> {
  return {
    props: {
      menus: await getMenus({} as any),
    },
  }
}
