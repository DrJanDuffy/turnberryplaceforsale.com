import { GetStaticPropsResult } from "next"
import Head from "next/head"
import { Layout, LayoutProps } from "components/layout"
import { getMenus } from "lib/get-menus"
import { Meta } from "components/meta"
import Image from "next/image"
import { absoluteURL } from "lib/utils/absolute-url"

const floorPlans = [
  "Turnberry Place Floor Plan A",
  "Turnberry Place Floor Plan B",
  "Turnberry Place Floor Plan C",
  "Turnberry Place Floor Plan D",
  "Turnberry Place Floor Plan E",
  "Turnberry Place Floor Plan ER",
  "Turnberry Place Floor Plan F",
  "Turnberry Place Floor Plan G",
  "Turnberry Place Floor Plan H",
]

interface FloorPlansPageProps extends LayoutProps {}

export default function FloorPlansPage({ menus }: FloorPlansPageProps) {
  return (
    <Layout menus={menus}>
      <Meta title="Floor Plans - Turnberry Place Las Vegas" />
      <Head>
        <title>Floor Plans - Turnberry Place Las Vegas</title>
      </Head>
      <section className="py-12 md:py-20">
        <div className="container px-6 mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12 md:text-5xl lg:text-6xl">
            Floor Plans
          </h1>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {floorPlans.map((plan, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-video bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Floor Plan Image</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{plan}</h3>
                  <button className="text-blue-600 hover:text-blue-800 font-medium">
                    View Details →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export async function getStaticProps(): Promise<GetStaticPropsResult<FloorPlansPageProps>> {
  return {
    props: {
      menus: await getMenus({} as any),
    },
  }
}
