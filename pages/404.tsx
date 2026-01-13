import Link from "next/link"
import { Layout, LayoutProps } from "components/layout"
import { getMenus } from "lib/get-menus"
import { GetStaticPropsResult } from "next"

interface Custom404Props extends LayoutProps {}

export default function Custom404({ menus }: Custom404Props) {
  return (
    <Layout menus={menus}>
      <div className="flex flex-col items-center justify-center min-h-[60vh] px-6">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">This page could not be found.</h2>
        <p className="text-gray-600 mb-8 text-center max-w-md">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/">
            <a className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors">
              Go Home
            </a>
          </Link>
          <Link href="/towers">
            <a className="bg-gray-200 text-gray-800 px-6 py-3 rounded-md font-semibold hover:bg-gray-300 transition-colors">
              View Towers
            </a>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 max-w-2xl">
          <Link href="/towers">
            <a className="text-blue-600 hover:underline">Towers</a>
          </Link>
          <Link href="/amenities">
            <a className="text-blue-600 hover:underline">Amenities</a>
          </Link>
          <Link href="/photos">
            <a className="text-blue-600 hover:underline">Photos</a>
          </Link>
          <Link href="/floor-plans">
            <a className="text-blue-600 hover:underline">Floor Plans</a>
          </Link>
          <Link href="/stirling-club">
            <a className="text-blue-600 hover:underline">Stirling Club</a>
          </Link>
          <Link href="/neighborhood">
            <a className="text-blue-600 hover:underline">Neighborhood</a>
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps(): Promise<GetStaticPropsResult<Custom404Props>> {
  // Handle Drupal connection errors gracefully
  try {
    return {
      props: {
        menus: await getMenus({} as any),
      },
    }
  } catch (error) {
    // If Drupal is not available, return empty menus
    // This allows the build to continue without Drupal
    return {
      props: {
        menus: {
          main: [],
          footer: [],
        },
      },
    }
  }
}
