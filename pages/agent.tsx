import { GetStaticPropsResult } from "next"
import Head from "next/head"
import { Layout, LayoutProps } from "components/layout"
import { getMenus } from "lib/get-menus"
import { Meta } from "components/meta"

interface AgentPageProps extends LayoutProps {}

export default function AgentPage({ menus }: AgentPageProps) {
  return (
    <Layout menus={menus}>
      <Meta title="Dr. Jan Duffy, REALTOR - Turnberry Place Las Vegas" />
      <Head>
        <title>Dr. Jan Duffy, REALTOR - Turnberry Place Las Vegas</title>
      </Head>
      <section className="py-12 md:py-20">
        <div className="container px-6 mx-auto max-w-4xl">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Agent Header */}
            <div className="bg-gray-800 text-white p-8">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-32 h-32 rounded-full bg-gray-700 flex items-center justify-center overflow-hidden">
                  <span className="text-3xl font-semibold">JD</span>
                </div>
                <div className="text-center md:text-left">
                  <h1 className="text-3xl font-bold mb-2">Dr. Jan Duffy, REALTOR</h1>
                  <p className="text-lg mb-2">The Turnberry Place Team</p>
                  <p className="text-sm text-gray-300">Berkshire Hathaway HomeServices Nevada Properties</p>
                  <p className="text-sm text-gray-300 mt-1">0197614 NV</p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="p-8 border-b">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-700 mb-2">Mobile</h3>
                  <a href="tel:7022221988" className="text-blue-600 hover:underline text-lg">
                    (702) 222-1988
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-700 mb-2">Office</h3>
                  <a href="tel:7022221988" className="text-blue-600 hover:underline text-lg">
                    (702) 222-1988
                  </a>
                </div>
              </div>
            </div>

            {/* Bio Section */}
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4">About Dr. Jan Duffy</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 mb-4">
                  Dr. Jan Duffy specializes in luxury high-rise properties at Turnberry Place, bringing 
                  expertise and dedication to Las Vegas' premier residential community. As a Realtor with 
                  Berkshire Hathaway HomeServices Nevada Properties, she combines in-depth knowledge of 
                  Turnberry Place with exceptional client service.
                </p>
                <p className="text-gray-700 mb-4">
                  Known as the "Good to Know Realtor," Dr. Duffy offers comprehensive insights into 
                  Turnberry Place's unique lifestyle, amenities, and real estate opportunities. Her expertise 
                  extends beyond transactions to include detailed understanding of The Stirling Club, 
                  property values, and the distinctive features of each Turnberry Place tower.
                </p>
                <p className="text-gray-700 mb-4">
                  Dr. Duffy's commitment to client success is reflected in her extensive knowledge of Las 
                  Vegas luxury real estate, particularly along the Strip corridor. She assists both buyers 
                  and sellers at Turnberry Place, providing detailed market analysis, strategic pricing 
                  guidance, and skilled negotiations.
                </p>
                <p className="text-gray-700 mb-4">
                  Based at Berkshire Hathaway's office at 7475 West Sahara Avenue, Dr. Duffy serves clients 
                  seven days a week from 6:00 AM to 9:00 PM. As a veteran-owned, women-owned business, she 
                  brings professionalism and dedication to every client interaction.
                </p>
                <p className="text-gray-700">
                  For expert guidance in Turnberry Place real estate, contact Dr. Jan Duffy:
                </p>
                <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
                  <li>Phone: <a href="tel:7022221988" className="text-blue-600 hover:underline">(702) 222-1988</a></li>
                  <li>Email: Available upon request</li>
                  <li>Office: 7475 West Sahara Avenue, Las Vegas, NV</li>
                </ul>
              </div>
            </div>

            {/* View Bio Button */}
            <div className="p-8 bg-gray-50 border-t">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors">
                View Bio
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export async function getStaticProps(): Promise<GetStaticPropsResult<AgentPageProps>> {
  return {
    props: {
      menus: await getMenus({} as any),
    },
  }
}
