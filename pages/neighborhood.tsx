import { GetStaticPropsResult } from "next"
import Head from "next/head"
import { Layout, LayoutProps } from "components/layout"
import { getMenus } from "lib/get-menus"
import { Meta } from "components/meta"

interface NeighborhoodPageProps extends LayoutProps {}

export default function NeighborhoodPage({ menus }: NeighborhoodPageProps) {
  return (
    <Layout menus={menus}>
      <Meta title="Neighborhood - Turnberry Place Las Vegas" />
      <Head>
        <title>Neighborhood - Turnberry Place Las Vegas</title>
      </Head>
      <section className="py-12 md:py-20">
        <div className="container px-6 mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold text-center mb-8 md:text-5xl lg:text-6xl">
            Turnberry Place Neighborhood and Area Profile
          </h1>
          <div className="prose prose-lg max-w-none space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Turnberry Place stands as a pinnacle of luxury living in Las Vegas, offering an
              unparalleled blend of privacy, convenience, and access to world-class amenities.
              Situated just one block east of the Las Vegas Strip between the Wynn Encore and
              Sahara resorts, this guard-gated, four-tower condominium complex redefines upscale
              urban living with its strategic location and meticulously curated environment.
            </p>
            <h2 className="text-3xl font-bold mt-8 mb-4">Prime Location and Accessibility</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Turnberry Place's location at 2747–2877 Paradise Road positions it at the heart of
              Las Vegas' most dynamic corridor. The property lies within a one-mile radius of over
              twenty Zagat-rated restaurants, including establishments at the Wynn, Encore, and
              Resorts World. The Strip's iconic attractions—such as the T-Mobile Arena (home of
              the Vegas Golden Knights) and Allegiant Stadium (home of the Las Vegas Raiders)—are
              mere minutes away, alongside the Las Vegas Convention Center and McCarran
              International Airport.
            </p>
            <h2 className="text-3xl font-bold mt-8 mb-4">Dining and Entertainment</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Within a 10-minute drive, residents can access:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li>
                <strong>Fine Dining:</strong> Joël Robuchon at MGM Grand, é by José Andrés, and
                Twist by Pierre Gagnaire
              </li>
              <li>
                <strong>Nightlife:</strong> XS Nightclub at Encore, Omnia at Caesars Palace
              </li>
              <li>
                <strong>Cultural Venues:</strong> The Bellagio Gallery of Fine Art, The Smith
                Center for the Performing Arts
              </li>
              <li>
                <strong>Retail Therapy:</strong> Fashion Show Mall, Crystals at CityCenter
              </li>
            </ul>
            <h2 className="text-3xl font-bold mt-8 mb-4">Security and Privacy</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Turnberry Place's guard-gated entrance, 24/7 security personnel, and video
              surveillance systems ensure a secure environment. The property's raised elevation and
              strategic positioning minimize street noise, while keycard access and private
              elevators to residences enhance privacy. A dedicated concierge team handles package
              delivery, housekeeping coordination, and transportation arrangements, allowing
              residents to enjoy a seamless lifestyle.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export async function getStaticProps(): Promise<GetStaticPropsResult<NeighborhoodPageProps>> {
  return {
    props: {
      menus: await getMenus({} as any),
    },
  }
}
