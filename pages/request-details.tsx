import { GetStaticPropsResult } from "next"
import Head from "next/head"
import { Layout, LayoutProps } from "components/layout"
import { getMenus } from "lib/get-menus"
import { Meta } from "components/meta"
import { ContactForm } from "components/contact-form"
import Image from "next/image"

interface RequestDetailsPageProps extends LayoutProps {}

export default function RequestDetailsPage({ menus }: RequestDetailsPageProps) {
  return (
    <Layout menus={menus}>
      <Meta title="Request Details - Turnberry Place Las Vegas" />
      <Head>
        <title>Request Details - Turnberry Place Las Vegas</title>
      </Head>
      <div 
        className="card-content card-contact-form py-5" 
        style={{
          backgroundImage: "url(https://photos.cribflyer-proxy.com/cdn-cgi/image/width=1500,height=1000,fit=crop,rotate=0,format=auto,quality=85/4616/60013/2953239/photo.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      >
        <div className="container-fluid">
          <div className="row align-items-center justify-content-center">
            <div className="col-12 col-sm-10 col-md-8 col-lg-7 col-xl-6 text-center px-sm-2">
              <div className="contact-form-box p-4">
                <div className="mt-0 mt-md-2 d-flex align-items-center justify-content-center">
                  <div className="w-10 horiz-line d-none d-sm-block"></div>
                  <h1 className="my-0 mx-2 heading-color" id="contact-label">
                    Turnberry Place Request Pricing & Details
                  </h1>
                  <div className="w-10 horiz-line d-none d-sm-block"></div>
                </div>
                <ContactForm title="Turnberry Place Request Pricing & Details" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps(): Promise<GetStaticPropsResult<RequestDetailsPageProps>> {
  return {
    props: {
      menus: await getMenus({} as any),
    },
  }
}
