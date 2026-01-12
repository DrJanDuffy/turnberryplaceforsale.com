import { GetStaticPropsResult } from "next"
import Head from "next/head"
import { Layout, LayoutProps } from "components/layout"
import { getMenus } from "lib/get-menus"
import { Meta } from "components/meta"
import { JsonLdSchema } from "components/json-ld-schema"
import Link from "next/link"

interface OpenHousePageProps extends LayoutProps {}

export default function OpenHousePage({ menus }: OpenHousePageProps) {
  return (
    <Layout menus={menus}>
      <Meta title="Open House - Turnberry Place Las Vegas" />
      <Head>
        <title>Open House - Turnberry Place Las Vegas</title>
        <meta
          name="description"
          content="Schedule a private showing at Turnberry Place Las Vegas luxury condos. No open houses currently scheduled. Call/text 702-222-1964 to request a showing"
        />
      </Head>
      <JsonLdSchema type="property" />
      <div
        className="card-content card-open-house py-5"
        style={{
          backgroundImage: "url(https://photos.cribflyer-proxy.com/cdn-cgi/image/width=1500,height=1000,fit=crop,rotate=0,format=auto,quality=85/4616/60013/2953238/photo.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      >
        <div className="container-fluid">
          <div className="row align-items-center justify-content-center">
            <div className="col-12 col-sm-11 col-md-10 col-lg-9 col-xl-7 text-center py-5 px-0">
              <div className="open-house-box p-2 p-md-4 shadow">
                <div className="mt-2 mb-2 text-heading text-uppercase">
                  Please join us for an
                </div>
                <div className="d-flex mb-3 mb-lg-4 align-items-center justify-content-center">
                  <div className="d-none d-md-block w-10 horiz-line"></div>
                  <h2 className="my-0 mx-2 text-uppercase">Open House</h2>
                  <div className="d-none d-md-block w-10 horiz-line"></div>
                </div>
                <div className="text-center pb-4">
                  <p className="none-scheduled">No open houses scheduled</p>
                  <p className="mb-3">Schedule a private showing today!</p>
                  <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                    <Link href="/request-details" className="btn btn-custom btn-lg" title="Request Showing">
                      Request Showing
                    </Link>
                    <a href="tel:7022221964" className="btn btn-custom btn-lg" title="Call or text 702-222-1964">
                      Call/Text (702) 222-1964
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
