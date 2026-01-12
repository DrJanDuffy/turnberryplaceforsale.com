import { GetStaticPropsResult } from "next"
import Head from "next/head"
import { Layout, LayoutProps } from "components/layout"
import { getMenus } from "lib/get-menus"
import { Meta } from "components/meta"
import Image from "next/image"
import Link from "next/link"

// Photos matching the live site
const photos = [
  "https://photos.cribflyer-proxy.com/cdn-cgi/image/width=400,fit=contain,rotate=0,format=auto,quality=85/4616/60013/2953237/photo.jpg",
  "https://photos.cribflyer-proxy.com/cdn-cgi/image/width=400,fit=contain,rotate=0,format=auto,quality=85/4616/60013/2953238/photo.jpg",
  "https://photos.cribflyer-proxy.com/cdn-cgi/image/width=400,fit=contain,rotate=0,format=auto,quality=85/4616/60013/2953240/photo.jpg",
  "https://photos.cribflyer-proxy.com/cdn-cgi/image/width=400,fit=contain,rotate=0,format=auto,quality=85/4616/60013/2953239/photo.jpg",
]

const photoFullSize = [
  "https://photos.cribflyer-proxy.com/cdn-cgi/image/width=960,fit=contain,rotate=0,format=auto,quality=60/4616/60013/2953237/photo.jpg",
  "https://photos.cribflyer-proxy.com/cdn-cgi/image/width=960,fit=contain,rotate=0,format=auto,quality=60/4616/60013/2953238/photo.jpg",
  "https://photos.cribflyer-proxy.com/cdn-cgi/image/width=850,fit=contain,rotate=0,format=auto,quality=60/4616/60013/2953240/photo.jpg",
  "https://photos.cribflyer-proxy.com/cdn-cgi/image/width=686,fit=contain,rotate=0,format=auto,quality=60/4616/60013/2953239/photo.jpg",
]

interface PhotosPageProps extends LayoutProps {}

export default function PhotosPage({ menus }: PhotosPageProps) {
  return (
    <Layout menus={menus}>
      <Meta title="Photo Gallery - Turnberry Place Las Vegas" />
      <Head>
        <title>Photo Gallery - Turnberry Place Las Vegas</title>
      </Head>
      <div className="card-content card-photos py-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 d-none d-sm-block pb-1">
              <h1 className="text-center mb-0">Photo Gallery</h1>
              <div className="d-slideshow">
                <div className="font-size-90 text-center d-none d-md-flex align-items-md-center justify-content-md-center">
                  <Link href="/tour" className="text-underline" target="_blank" rel="noopener noreferrer">
                    Launch Slideshow Viewer
                  </Link>
                  <div className="ml-1">
                    <span className="icon-custom">
                      <svg
                        height="12"
                        width="15"
                        aria-hidden="true"
                        focusable="false"
                        className="d-inline"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                      >
                        <path
                          fill="currentColor"
                          d="M195.515 374.828c-4.686-4.686-4.686-12.284 0-16.971l323.15-323.15-.707-.707-89.958.342c-6.627 0-12-5.373-12-12v-9.999c0-6.628 5.372-12 12-12L564 0c6.627 0 12 5.372 12 12l-.343 136c0 6.627-5.373 12-12 12h-9.999c-6.627 0-12-5.373-12-12L542 58.042l-.707-.707-323.15 323.15c-4.686 4.686-12.284 4.686-16.971 0l-5.657-5.657zm232-155.633l-8 8A12 12 0 0 0 416 235.68V464c0 8.837-7.164 16-16 16H48c-8.836 0-16-7.163-16-16V112c0-8.837 7.164-16 16-16h339.976c3.183 0 6.235-1.264 8.485-3.515l8-8c7.56-7.56 2.206-20.485-8.485-20.485H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V227.681c0-10.691-12.926-16.045-20.485-8.486z"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div className="grid">
                {photos.map((photo, index) => (
                  <div key={index} className="item">
                    <div className="photo">
                      <a className="swipebox desktop" href={photoFullSize[index]} title="Turnberry Place Las Vegas, Las Vegas, NV">
                        <Image
                          src={photo}
                          width={400}
                          height={300}
                          alt="Turnberry Place Las Vegas, Las Vegas, NV"
                          className="lazy img-fluid"
                        />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Mobile view */}
            <div className="col-12 d-block d-sm-none px-0 pb-1">
              <div className="row">
                <div className="col-12 text-center mb-0 d-flex align-items-center justify-content-center">
                  <span className="icon-custom">
                    <svg
                      height="40"
                      width="40"
                      aria-hidden="true"
                      focusable="false"
                      className="d-inline"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path
                        fill="currentColor"
                        d="M136.97 380.485l7.071-7.07c4.686-4.686 4.686-12.284 0-16.971L60.113 273H436c6.627 0 12-5.373 12-12v-10c0-6.627-5.373-12-12-12H60.113l83.928-83.444c4.686-4.686 4.686-12.284 0-16.971l-7.071-7.07c-4.686-4.686-12.284-4.686-16.97 0l-116.485 116c-4.686 4.686-4.686 12.284 0 16.971l116.485 116c4.686 4.686 12.284 4.686 16.97-.001z"
                      />
                    </svg>
                  </span>
                  <h1 className="mb-0 mx-2">{photos.length} Photos</h1>
                  <span className="icon-custom">
                    <svg
                      height="40"
                      width="40"
                      aria-hidden="true"
                      focusable="false"
                      className="d-inline"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path
                        fill="currentColor"
                        d="M311.03 131.515l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L387.887 239H12c-6.627 0-12 5.373-12 12v10c0 6.627 5.373 12 12 12h375.887l-83.928 83.444c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l116.485-116c4.686-4.686 4.686-12.284 0-16.971L328 131.515c-4.686-4.687-12.284-4.687-16.97 0z"
                      />
                    </svg>
                  </span>
                </div>
                <div className="col-12 text-center mb-2 text-secondary font-size-90">
                  Swipe to view. Tap to zoom.
                </div>
                <div className="col-12 text-center">
                  <div className="mobile-gallery">
                    {photos.map((photo, index) => (
                      <div key={index} className="text-center mobile-slide">
                        <a className="swipebox mobile" href={`https://photos.cribflyer-proxy.com/cdn-cgi/image/width=1200,fit=contain,rotate=0,format=auto,quality=85/4616/60013/295323${7 + (index === 2 ? 3 : index === 3 ? 2 : index)}/photo.jpg`} title="Turnberry Place Las Vegas, Las Vegas, NV">
                          <Image
                            src={`https://photos.cribflyer-proxy.com/cdn-cgi/image/width=600,height=450,fit=crop,rotate=0,format=auto,quality=85/4616/60013/295323${7 + (index === 2 ? 3 : index === 3 ? 2 : index)}/photo.jpg`}
                            width={600}
                            height={450}
                            alt="Turnberry Place Las Vegas, Las Vegas, NV"
                            className="img-fluid lazy"
                          />
                        </a>
                      </div>
                    ))}
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

export async function getStaticProps(): Promise<GetStaticPropsResult<PhotosPageProps>> {
  return {
    props: {
      menus: await getMenus({} as any),
    },
  }
}
