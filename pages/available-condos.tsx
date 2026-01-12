import { GetStaticPropsResult } from "next"
import Head from "next/head"
import { Layout, LayoutProps } from "components/layout"
import { getMenus } from "lib/get-menus"
import { Meta } from "components/meta"
import Link from "next/link"

interface AvailableCondosPageProps extends LayoutProps {}

export default function AvailableCondosPage({ menus }: AvailableCondosPageProps) {
  // Placeholder data - in production this would come from Drupal or a property listing API
  const condos = [
    {
      id: 1,
      price: "$1,200,000",
      beds: 2,
      baths: 2,
      sqft: "1,500",
      tower: "Tower 1",
      image: "/images/turnberry/asset-1.jpg",
    },
    {
      id: 2,
      price: "$2,500,000",
      beds: 3,
      baths: 3,
      sqft: "2,200",
      tower: "Tower 2",
      image: "/images/turnberry/asset-2.jpg",
    },
    {
      id: 3,
      price: "$3,800,000",
      beds: 4,
      baths: 4,
      sqft: "3,500",
      tower: "Tower 3",
      image: "/images/turnberry/asset-3.jpg",
    },
    {
      id: 4,
      price: "$5,500,000",
      beds: 5,
      baths: 5,
      sqft: "5,000",
      tower: "Tower 4",
      image: "/images/turnberry/asset-4.jpg",
    },
  ]

  return (
    <Layout menus={menus}>
      <Meta title="Available Las Vegas Condos - Turnberry Place" />
      <Head>
        <title>Available Las Vegas Condos - Turnberry Place</title>
      </Head>
      <section className="py-12 md:py-20">
        <div className="container px-6 mx-auto">
          <h1 className="text-4xl font-bold text-center mb-4 md:text-5xl lg:text-6xl">
            Available Las Vegas Condos
          </h1>
          <p className="text-center text-xl text-gray-600 mb-12">
            Luxury High-Rise Residences at Turnberry Place
          </p>

          {/* Property Listings Grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {condos.map((condo) => (
              <div
                key={condo.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-video bg-gray-200 relative">
                  <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                    <span className="text-gray-500">Property Image</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-2xl font-bold text-blue-600">{condo.price}</h3>
                    <span className="text-sm text-gray-500">{condo.tower}</span>
                  </div>
                  <div className="flex gap-4 text-gray-600 mb-4">
                    <span>{condo.beds} Beds</span>
                    <span>{condo.baths} Baths</span>
                    <span>{condo.sqft} sqft</span>
                  </div>
                  <button className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-12 bg-gray-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Interested in a Property?</h2>
            <p className="text-gray-700 mb-6">
              Contact Dr. Jan Duffy for more information about available condos at Turnberry Place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:7022221988"
                className="bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors"
              >
                Call (702) 222-1988
              </a>
              <Link href="/open-house">
                <a className="bg-gray-200 text-gray-800 px-8 py-3 rounded-md font-semibold hover:bg-gray-300 transition-colors">
                  Schedule a Showing
                </a>
              </Link>
            </div>
          </div>

          {/* Price Range Info */}
          <div className="mt-8 text-center">
            <p className="text-lg text-gray-700">
              <strong>Price Range:</strong> $800,000 to $10M+
            </p>
            <p className="text-gray-600 mt-2">
              Turnberry Place offers luxury condominiums across 4 towers with a variety of floor plans and price points.
            </p>
          </div>
        </div>
      </section>
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
