'use client'

import { GetStaticPropsResult } from "next"
import Head from "next/head"
import { useState } from "react"
import { Layout, LayoutProps } from "components/layout"
import { getMenus } from "lib/get-menus"
import { Meta } from "components/meta"
import Image from "next/image"

interface MapPageProps extends LayoutProps {}

export default function MapPage({ menus }: MapPageProps) {
  const [activeTab, setActiveTab] = useState("map")
  const mapKey = "AIzaSyDSF9E67HCf0-pecnANALPYA-donlDhIww"
  const baseUrl = "https://www.google.com/maps/embed/v1/"
  const streetAddress = "Turnberry Place Las Vegas, Las Vegas, NV 89109"
  const propertyZip = "89109"
  const mapZoom = 15

  const getMapUrl = (query: string) => {
    if (query === "map") {
      return `${baseUrl}place?key=${mapKey}&q=${encodeURI(streetAddress)}&zoom=${mapZoom}`
    }
    const keywords = `${query} ${propertyZip}`
    return `${baseUrl}search?key=${mapKey}&q=${encodeURI(keywords)}&zoom=${mapZoom - 1}`
  }

  return (
    <Layout menus={menus}>
      <Meta title="Map & Nearby Places - Turnberry Place Las Vegas" />
      <Head>
        <title>Map & Nearby Places - Turnberry Place Las Vegas</title>
      </Head>
      <div className="card-content card-map pt-0 pt-md-5">
        <div className="container-fluid px-0 mx-0">
          <div className="row">
            <div className="col-12">
              <h1 className="text-center d-none d-md-block">Map & Nearby Places</h1>
              <div className="map-controls d-none d-md-block">
                <ul className="nav nav-pills justify-content-center">
                  <li className="nav-item">
                    <a
                      className={activeTab === "map" ? "nav-link active btn-map-address" : "nav-link btn-map-address"}
                      onClick={() => setActiveTab("map")}
                    >
                      Map
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className={activeTab === "schools" ? "nav-link active btn-nearby-places" : "nav-link btn-nearby-places"}
                      data-qry="schools"
                      onClick={() => setActiveTab("schools")}
                    >
                      Schools
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className={activeTab === "parks" ? "nav-link active btn-nearby-places" : "nav-link btn-nearby-places"}
                      data-qry="parks"
                      onClick={() => setActiveTab("parks")}
                    >
                      Parks
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className={activeTab === "bars" ? "nav-link active btn-nearby-places" : "nav-link btn-nearby-places"}
                      data-qry="bars"
                      onClick={() => setActiveTab("bars")}
                    >
                      Bars
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className={activeTab === "restaurants" ? "nav-link active btn-nearby-places" : "nav-link btn-nearby-places"}
                      data-qry="restaurants"
                      onClick={() => setActiveTab("restaurants")}
                    >
                      Restaurants
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className={activeTab === "coffee" ? "nav-link active btn-nearby-places" : "nav-link btn-nearby-places"}
                      data-qry="coffee shops"
                      onClick={() => setActiveTab("coffee")}
                    >
                      Coffee
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className={activeTab === "atms" ? "nav-link active btn-nearby-places" : "nav-link btn-nearby-places"}
                      data-qry="bank with atm"
                      onClick={() => setActiveTab("atms")}
                    >
                      ATMs
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className={activeTab === "gyms" ? "nav-link active btn-nearby-places" : "nav-link btn-nearby-places"}
                      data-qry="gyms"
                      onClick={() => setActiveTab("gyms")}
                    >
                      Gyms
                    </a>
                  </li>
                </ul>
              </div>
              <div className="map-container">
                <div className="info-box d-flex align-items-center">
                  <div className="media m-0 p-2">
                    <Image
                      className="img-fluid _info-window-image"
                      src="/images/turnberry/photo-21.jpg"
                      width={75}
                      height={75}
                      alt="Turnberry Place"
                    />
                    <div className="media-body my-auto pl-3">
                      <div className="info-window-address">
                        <div>Turnberry Place Las Vegas</div>
                        <div className="font-size-80">Las Vegas, NV 89109</div>
                      </div>
                      <div className="info-window-property-detail">
                        <span> Property For Sale</span>
                      </div>
                    </div>
                  </div>
                </div>
                <iframe
                  id="gMap"
                  width="100%"
                  height="600"
                  frameBorder="0"
                  src={getMapUrl(activeTab)}
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps(): Promise<GetStaticPropsResult<MapPageProps>> {
  return {
    props: {
      menus: await getMenus({} as any),
    },
  }
}
