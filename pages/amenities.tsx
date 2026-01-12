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
      <div className="card-content card-amenities py-5">
        <div className="container pt-2">
          <div className="row align-items-center justify-content-center">
            <div className="col-12">
              <div className="pb-4 pb-sm-5 amenities-border">
                <div className="amenities-title">
                  <h1>Amenities</h1>
                </div>
                <div className="row pt-2 pt-sm-4 pl-3 pl-sm-5">
                  {amenities.map((amenity, index) => (
                    <div key={index} className="col-6 col-lg-4 py-2 d-flex align-items-center">
                      <div className="mr-2 pb-1">
                        <span className="icon-custom">
                          <svg height="15" width="15" aria-hidden="true" focusable="false" className="d-inline" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path fill="currentColor" d="M413.505 91.951L133.49 371.966l-98.995-98.995c-4.686-4.686-12.284-4.686-16.971 0L6.211 284.284c-4.686 4.686-4.686 12.284 0 16.971l118.794 118.794c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-11.314-11.314c-4.686-4.686-12.284-4.686-16.97 0z"/>
                          </svg>
                        </span>
                      </div>
                      <span className="amenity-name">{amenity.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
