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
      <section className="py-12 md:py-20">
        <div className="container px-6 mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold text-center mb-4 md:text-5xl lg:text-6xl">
            Price & Features
          </h1>
          <p className="text-center text-xl text-gray-600 mb-12">
            Luxury High-Rise Living in Las Vegas
          </p>

          {/* Price Range */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold mb-4 text-center">Price Range</h2>
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-600 mb-2">$800,000 to $10M+</p>
              <p className="text-gray-600">
                Turnberry Place offers luxury condominiums across a wide price range to suit various needs and preferences.
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">4 Luxury Towers</h3>
                  <p className="text-gray-600">38-45 story high-rise buildings with stunning views</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Private Elevator Access</h3>
                  <p className="text-gray-600">Direct access to your residence for maximum privacy</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">24/7 Security</h3>
                  <p className="text-gray-600">Guard-gated community with round-the-clock security</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">The Stirling Club</h3>
                  <p className="text-gray-600">80,000 sq ft private club with world-class amenities</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Panoramic Views</h3>
                  <p className="text-gray-600">Strip views, mountain views, and city skyline</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Premium Finishes</h3>
                  <p className="text-gray-600">High-end materials and sophisticated interior design</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Concierge Services</h3>
                  <p className="text-gray-600">Dedicated concierge for package delivery and services</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Prime Location</h3>
                  <p className="text-gray-600">One block from the Strip, near Wynn and Encore</p>
                </div>
              </div>
            </div>
          </div>

          {/* Property Details */}
          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Property Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
              <div>
                <strong>Year Built:</strong> 2000-2005
              </div>
              <div>
                <strong>Number of Towers:</strong> 4
              </div>
              <div>
                <strong>Stories:</strong> 38-45 stories per tower
              </div>
              <div>
                <strong>Units:</strong> Various floor plans available
              </div>
              <div>
                <strong>Parking:</strong> Valet parking included
              </div>
              <div>
                <strong>Pet Policy:</strong> Contact for details
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="mt-8 text-center">
            <p className="text-lg text-gray-700 mb-4">
              For detailed pricing and feature information, contact Dr. Jan Duffy
            </p>
            <a
              href="tel:7022221988"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors"
            >
              Call (702) 222-1988
            </a>
          </div>
        </div>
      </section>
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
