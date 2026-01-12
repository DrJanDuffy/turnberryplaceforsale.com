import { GetStaticPropsResult } from "next"
import Head from "next/head"
import { Layout, LayoutProps } from "components/layout"
import { getMenus } from "lib/get-menus"
import { Meta } from "components/meta"
import Image from "next/image"

interface AgentPageProps extends LayoutProps {}

export default function AgentPage({ menus }: AgentPageProps) {
  return (
    <Layout menus={menus}>
      <Meta title="Dr. Jan Duffy, REALTOR - Turnberry Place Las Vegas" />
      <Head>
        <title>Dr. Jan Duffy, REALTOR - Turnberry Place Las Vegas</title>
      </Head>
      <div className="card-content card-agent py-5">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="row justify-content-center">
                <div className="py-2 col-12 text-center">
                  <h1>Dr. Jan Duffy, REALTOR</h1>
                  <div className="my-1">
                    The Turnberry Place Team at Berkshire Hathaway HomeServices Nevada Properties
                    <br /> 0197614 NV
                  </div>
                </div>
                <div className="col-12 py-2 d-flex align-items-center justify-content-center">
                  <Image
                    className="img-fluid agent-photo"
                    src="https://assets.cribflyer-proxy.com/cdn-cgi/image/width=500,fit=contain,rotate=0,format=auto,quality=100/4616/2/2953539/asset.jpg"
                    alt="Photo of Dr. Jan Duffy, REALTOR"
                    width={225}
                    height={225}
                  />
                </div>
                <div className="col-12 text-center py-2">
                  <div className="py-2 d-flex flex-column flex-lg-row align-items-center justify-content-center" style={{ gap: "5px" }}>
                    <div className="mx-2" itemScope itemType="https://schema.org/LocalBusiness">
                      <span className="">Mobile:</span>{" "}
                      <a href="tel:7022221988" title="Phone cell">
                        (702) 222-1988
                      </a>
                    </div>
                    <div className="mx-2" itemScope itemType="https://schema.org/LocalBusiness">
                      <span className="">Office:</span>{" "}
                      <a href="tel:7022221988" title="Phone office">
                        (702) 222-1988
                      </a>
                    </div>
                  </div>
                  <div className="py-2">
                    <a className="cursor-pointer btn-agent-bio" data-agentid="14435" title="View Bio">
                      View Bio
                    </a>
                  </div>
                </div>
                <div className="col-12 text-center py-2">
                  <Image
                    className="img-fluid company-logo"
                    src="https://assets.cribflyer-proxy.com/cdn-cgi/image/width=500,fit=contain,rotate=0,format=auto,quality=100/4616/3/2953540/asset.jpg"
                    alt="The Turnberry Place Team at Berkshire Hathaway HomeServices Nevada Properties Logo"
                    width={225}
                    height={225}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
