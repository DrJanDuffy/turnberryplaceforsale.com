import { GetStaticPropsResult } from "next"
import Head from "next/head"
import Link from "next/link"
import { Layout, LayoutProps } from "components/layout"
import { getMenus } from "lib/get-menus"
import { Meta } from "components/meta"
import { ContactForm } from "components/contact-form"

interface HomePageProps extends LayoutProps {}

export default function HomePage({ menus }: HomePageProps) {
  return (
    <Layout menus={menus}>
      <Meta title="Turnberry Place Las Vegas | Luxury High-Rise Condos For Sale" />
      <Head>
        <title>Turnberry Place Las Vegas | Luxury High-Rise Condos For Sale</title>
      </Head>

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <div className="absolute inset-0 opacity-30">
          <div className="w-full h-full bg-gray-900" />
        </div>
        <div className="container px-6 mx-auto text-center relative z-10">
          <h1 className="text-5xl font-bold mb-4 md:text-6xl lg:text-7xl">
            TURNBERRY PLACE LAS VEGAS
          </h1>
          <div className="flex items-center justify-center gap-2 mb-6 text-xl md:text-2xl">
            <span className="w-12 h-px bg-white"></span>
            <span>LAS VEGAS, NV</span>
            <span className="w-12 h-px bg-white"></span>
          </div>
          <p className="text-2xl mb-8 md:text-3xl font-light">
            4 Luxury Towers from $800,000 to $10M+
          </p>
          <Link href="/towers">
            <a className="inline-block border-2 border-white px-8 py-3 text-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors">
              UNITS FOR SALE
            </a>
          </Link>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-20">
        <div className="container px-6 mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-4 md:text-5xl">
            Turnberry Place | Las Vegas' Premier High-Rise Community
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Las Vegas, NV 89109
          </p>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container px-6 mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Link href="/towers">
              <a className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-2">4 Luxury Towers</h3>
                <p className="text-gray-600">Explore our elegant high-rise residences</p>
              </a>
            </Link>
            <Link href="/amenities">
              <a className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-2">World-Class Amenities</h3>
                <p className="text-gray-600">The Stirling Club and more</p>
              </a>
            </Link>
            <Link href="/photos">
              <a className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-2">Photo Gallery</h3>
                <p className="text-gray-600">View our luxury residences</p>
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />
    </Layout>
  )
}

export async function getStaticProps(): Promise<GetStaticPropsResult<HomePageProps>> {
  return {
    props: {
      menus: await getMenus({} as any),
    },
  }
}
