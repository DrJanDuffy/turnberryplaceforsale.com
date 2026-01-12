import { GetStaticPropsResult } from "next"
import Head from "next/head"
import { Layout, LayoutProps } from "components/layout"
import { getMenus } from "lib/get-menus"
import { Meta } from "components/meta"
import { ContactForm } from "components/contact-form"

interface OpenHousePageProps extends LayoutProps {}

export default function OpenHousePage({ menus }: OpenHousePageProps) {
  return (
    <Layout menus={menus}>
      <Meta title="Open House - Turnberry Place Las Vegas" />
      <Head>
        <title>Open House - Turnberry Place Las Vegas</title>
      </Head>
      <section className="py-12 md:py-20">
        <div className="container px-6 mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold text-center mb-8 md:text-5xl lg:text-6xl">
            Open House
          </h1>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-center">
              Please join us for an Open House
            </h2>
            <div className="text-center py-8">
              <p className="text-xl text-gray-600 mb-6">No open houses scheduled</p>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors">
                Request Showing
              </button>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-xl font-semibold mb-4">Property For Sale</h3>
            <p className="text-gray-700 mb-6">
              Turnberry Place offers luxury high-rise condominiums from $800,000 to $10M+.
              Contact us to schedule a private showing or to be notified of upcoming open house events.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Contact Information</h4>
                <p className="text-gray-700">
                  <strong>Dr. Jan Duffy, REALTOR</strong><br />
                  The Turnberry Place Team<br />
                  Berkshire Hathaway HomeServices Nevada Properties<br />
                  <a href="tel:7022221988" className="text-blue-600 hover:underline">
                    (702) 222-1988
                  </a>
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Office Hours</h4>
                <p className="text-gray-700">
                  Available 7 days a week<br />
                  6:00 AM - 9:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form for Scheduling */}
          <div className="mt-8">
            <ContactForm />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export async function getStaticProps(): Promise<GetStaticPropsResult<OpenHousePageProps>> {
  return {
    props: {
      menus: await getMenus({} as any),
    },
  }
}
