import { GetStaticPropsResult } from "next"
import Head from "next/head"
import { Layout, LayoutProps } from "components/layout"
import { getMenus } from "lib/get-menus"
import { Meta } from "components/meta"
import Image from "next/image"
import classNames from "classnames"

const floorPlans = [
  "Turnberry Place Floor Plan A",
  "Turnberry Place Floor Plan B",
  "Turnberry Place Floor Plan C",
  "Turnberry Place Floor Plan D",
  "Turnberry Place Floor Plan E",
  "Turnberry Place Floor Plan ER",
  "Turnberry Place Floor Plan F",
  "Turnberry Place Floor Plan G",
  "Turnberry Place Floor Plan H",
]

interface FloorPlansPageProps extends LayoutProps {}

export default function FloorPlansPage({ menus }: FloorPlansPageProps) {
  const floorPlanImages = [
    "https://assets.cribflyer-proxy.com/cdn-cgi/image/fit=scale-down,rotate=0,format=auto,quality=85/60013/media/59361.png",
    "https://assets.cribflyer-proxy.com/cdn-cgi/image/fit=scale-down,rotate=0,format=auto,quality=85/60013/media/59362.png",
    "https://assets.cribflyer-proxy.com/cdn-cgi/image/fit=scale-down,rotate=0,format=auto,quality=85/60013/media/59363.png",
    "https://assets.cribflyer-proxy.com/cdn-cgi/image/fit=scale-down,rotate=0,format=auto,quality=85/60013/media/59364.png",
    "https://assets.cribflyer-proxy.com/cdn-cgi/image/fit=scale-down,rotate=0,format=auto,quality=85/60013/media/59365.png",
    "https://assets.cribflyer-proxy.com/cdn-cgi/image/fit=scale-down,rotate=0,format=auto,quality=85/60013/media/59366.png",
    "https://assets.cribflyer-proxy.com/cdn-cgi/image/fit=scale-down,rotate=0,format=auto,quality=85/60013/media/59367.png",
    "https://assets.cribflyer-proxy.com/cdn-cgi/image/fit=scale-down,rotate=0,format=auto,quality=85/60013/media/59368.png",
    "https://assets.cribflyer-proxy.com/cdn-cgi/image/fit=scale-down,rotate=0,format=auto,quality=85/60013/media/59369.png",
  ]

  return (
    <Layout menus={menus}>
      <Meta title="Floor Plans - Turnberry Place Las Vegas" />
      <Head>
        <title>Floor Plans - Turnberry Place Las Vegas</title>
      </Head>
      <div className="card-content card-floor-plans py-5">
        <div className="container-fluid">
          <div className="row align-items-center justify-content-center">
            <div className="col-12 col-lg-11 col-xl-10 text-center">
              <h1 className="text-center mb-0">Floor Plans</h1>
              <div className="py-4">
                <ul className="nav nav-tabs justify-content-center" id="fpTabs" role="tablist">
                  {floorPlans.map((plan, index) => (
                    <li key={index} className="nav-item">
                      <a
                        className={classNames("nav-link", index === 0 && "active")}
                        id={`fp-tab-${59361 + index}`}
                        data-toggle="tab"
                        href={`#fp-${59361 + index}`}
                        role="tab"
                        aria-controls="home"
                        aria-selected={index === 0}
                      >
                        {plan}
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="tab-content p-4" id="myTabContent">
                  {floorPlans.map((plan, index) => (
                    <div
                      key={index}
                      className={classNames("tab-pane fade", index === 0 && "show active")}
                      id={`fp-${59361 + index}`}
                      role="tabpanel"
                      aria-labelledby={`fp-tab-${59361 + index}`}
                    >
                      <div className="text-center fp-image">
                        <Image
                          src={floorPlanImages[index]}
                          width={800}
                          height={600}
                          alt={plan}
                          className="img-thumbnail cursor-pointer"
                        />
                      </div>
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

export async function getStaticProps(): Promise<GetStaticPropsResult<FloorPlansPageProps>> {
  return {
    props: {
      menus: await getMenus({} as any),
    },
  }
}
