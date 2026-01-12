import { GetStaticPropsResult } from "next"
import Head from "next/head"
import { Layout, LayoutProps } from "components/layout"
import { AmenitiesGrid } from "components/amenities-grid"
import { getMenus } from "lib/get-menus"
import { Meta } from "components/meta"

const amenities = [
  { name: "Gated Community" },
  { name: "City View" },
  { name: "Secure Building" },
  { name: "Gym" },
  { name: "Tennis Courts" },
  { name: "Spa" },
  { name: "Swimming Pool" },
  { name: "Workout Room" },
  { name: "Mountains" },
  { name: "Private Patio" },
]

interface AmenitiesPageProps extends LayoutProps {}

export default function AmenitiesPage({ menus }: AmenitiesPageProps) {
  return (
    <Layout menus={menus}>
      <Meta title="Amenities - Turnberry Place Las Vegas" />
      <Head>
        <title>Amenities - Turnberry Place Las Vegas</title>
      </Head>
      <AmenitiesGrid amenities={amenities} />
      <section className="py-12 md:py-20">
        <div className="container px-6 mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center md:text-4xl">
            The Stirling Club
          </h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            The crown jewel of Turnberry Place is the recently renovated Stirling Club, an 80,000
            square foot private club offering world-class amenities exclusively to residents. This
            luxurious facility includes:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
            <li>State-of-the-art fitness center</li>
            <li>Resort-style swimming pools (both indoor and outdoor)</li>
            <li>Tennis courts</li>
            <li>Spa and beauty services center</li>
            <li>Multiple dining venues and bars</li>
            <li>Business center with conference rooms</li>
            <li>Various lounges for socializing and relaxation</li>
          </ul>
          <p className="text-lg text-gray-700 leading-relaxed">
            The Stirling Club serves as the social and recreational hub of the Turnberry Place
            community, providing residents with a private oasis of luxury and convenience.
          </p>
        </div>
      </section>
    </Layout>
  )
}

export async function getStaticProps(): Promise<GetStaticPropsResult<AmenitiesPageProps>> {
  return {
    props: {
      menus: await getMenus({} as any),
    },
  }
}
