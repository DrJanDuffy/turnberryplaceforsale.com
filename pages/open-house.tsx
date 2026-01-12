import { GetStaticPropsResult } from "next"
import Head from "next/head"
import { Layout, LayoutProps } from "components/layout"
import { getMenus } from "lib/get-menus"
import { Meta } from "components/meta"
import Link from "next/link"

interface OpenHousePageProps extends LayoutProps {}

export default function OpenHousePage({ menus }: OpenHousePageProps) {
  return (
    <Layout menus={menus}>
      <Meta title="Open House - Turnberry Place Las Vegas" />
      <Head>
        <title>Open House - Turnberry Place Las Vegas</title>
      </Head>
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
                  <Link href="/request-details">
                    <a className="btn btn-custom btn-lg" title="Request Showing">
                      Request Showing
                    </a>
                  </Link>
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
