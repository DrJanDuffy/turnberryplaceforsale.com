import { GetStaticPropsResult } from "next"
import Head from "next/head"
import { Layout, LayoutProps } from "components/layout"
import { getMenus } from "lib/get-menus"
import { Meta } from "components/meta"

interface MapPageProps extends LayoutProps {}

export default function MapPage({ menus }: MapPageProps) {
  return (
    <Layout menus={menus}>
      <Meta title="Map & Nearby Places - Turnberry Place Las Vegas" />
      <Head>
        <title>Map & Nearby Places - Turnberry Place Las Vegas</title>
      </Head>
      <section className="py-12 md:py-20">
        <div className="container px-6 mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8 md:text-5xl lg:text-6xl">
            Map & Nearby Places
          </h1>
          
          {/* Google Maps Embed */}
          <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
            <iframe
              width="100%"
              height="600"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDSF9E67HCf0-pecnANALPYA-donlDhIww&q=Turnberry+Place+Las+Vegas,+Las+Vegas,+NV+89109&zoom=15"
            ></iframe>
          </div>

          {/* Nearby Places Categories */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Schools</h3>
              <p className="text-gray-600">Nearby educational institutions</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Parks</h3>
              <p className="text-gray-600">Recreational areas and green spaces</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Restaurants</h3>
              <p className="text-gray-600">Fine dining and casual eateries</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Coffee</h3>
              <p className="text-gray-600">Coffee shops and cafes</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Bars</h3>
              <p className="text-gray-600">Nightlife and entertainment</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">ATMs</h3>
              <p className="text-gray-600">Banking and financial services</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Gyms</h3>
              <p className="text-gray-600">Fitness centers and health clubs</p>
            </div>
          </div>

          {/* Location Details */}
          <div className="mt-12 bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Turnberry Place Las Vegas</h2>
            <p className="text-lg text-gray-700 mb-2">
              <strong>Address:</strong> 2747–2877 Paradise Road, Las Vegas, NV 89109
            </p>
            <p className="text-lg text-gray-700">
              Located just one block east of the Las Vegas Strip between the Wynn Encore and Sahara resorts.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export async function getStaticProps(): Promise<GetStaticPropsResult<MapPageProps>> {
  return {
    props: {
      menus: await getMenus({} as any),
    },
  }
}
