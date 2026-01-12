import { GetStaticPropsResult } from "next"
import Head from "next/head"
import { Layout, LayoutProps } from "components/layout"
import { getMenus } from "lib/get-menus"
import { Meta } from "components/meta"

interface StirlingClubPageProps extends LayoutProps {}

export default function StirlingClubPage({ menus }: StirlingClubPageProps) {
  return (
    <Layout menus={menus}>
      <Meta title="The Stirling Club - Turnberry Place Las Vegas" />
      <Head>
        <title>The Stirling Club - Turnberry Place Las Vegas</title>
      </Head>
      <section className="py-12 md:py-20">
        <div className="container px-6 mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold text-center mb-8 md:text-5xl lg:text-6xl">
            The Stirling Club
          </h1>
          <p className="text-2xl text-center text-gray-600 mb-12">
            Exclusive Luxury at Your Doorstep
          </p>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              The crown jewel of Turnberry Place is the recently renovated Stirling Club, an 80,000
              square foot private club offering world-class amenities exclusively to residents.
              This luxurious facility includes:
            </p>
            <ul className="list-disc list-inside space-y-3 text-gray-700 mb-8 text-lg">
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
              community, providing residents with a private oasis of luxury and convenience. Its
              extensive offerings contribute significantly to the upscale lifestyle that defines
              Turnberry Place, making it a central feature that distinguishes this development from
              other luxury condominiums in Las Vegas.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export async function getStaticProps(): Promise<GetStaticPropsResult<StirlingClubPageProps>> {
  return {
    props: {
      menus: await getMenus({} as any),
    },
  }
}
