import { GetStaticPropsResult } from "next"
import { Layout, LayoutProps } from "components/layout"
import { getMenus } from "lib/get-menus"
import { Meta } from "components/meta"
import { JsonLdSchema } from "components/json-ld-schema"
import Image from "next/image"
import Link from "next/link"

// Photos using local images from public/images/turnberry
const photos = [
  "/images/turnberry/Turnberry_Place_For_Sale.jpg",
  "/images/turnberry/Turnberry Tower Nice Vew.jpg",
  "/images/turnberry/Turnberry Tower South View.jpeg",
  "/images/turnberry/Las-Vegas-High-Rise-Condo-Living-Downtown-Las-Vegas-Turnberry-Place-Interior.jpg",
  "/images/turnberry/sterlingclubpool-.jpeg",
  "/images/turnberry/StirlingClub_CigarBar_View1.jpg",
  "/images/turnberry/SterlingClubDinning.avif",
  "/images/turnberry/SterlingClubWhiteRoses.jpg",
  "/images/turnberry/sterlingclubpoolwithpeople.jpeg",
  "/images/turnberry/CigarLounge.jpeg",
  "/images/turnberry/photo-2.jpg",
  "/images/turnberry/photo-3.jpg",
  "/images/turnberry/photo-4.jpg",
  "/images/turnberry/photo-5.jpg",
  "/images/turnberry/photo-6.jpg",
  "/images/turnberry/photo-7.jpg",
  "/images/turnberry/photo-8.jpg",
  "/images/turnberry/photo-9.jpg",
  "/images/turnberry/photo-21.jpg",
  "/images/turnberry/photo-22.jpg",
  "/images/turnberry/turnberry-towers-las-vegas-nv-primary-photo.jpg",
  "/images/turnberry/Turnberry-Place-May-21-2010.jpeg",
  "/images/turnberry/Turnberry_Towers_Las_Vegas_Monorail.jpg",
]

const photoFullSize = [
  "/images/turnberry/Turnberry_Place_For_Sale.jpg",
  "/images/turnberry/Turnberry Tower Nice Vew.jpg",
  "/images/turnberry/Turnberry Tower South View.jpeg",
  "/images/turnberry/Las-Vegas-High-Rise-Condo-Living-Downtown-Las-Vegas-Turnberry-Place-Interior.jpg",
  "/images/turnberry/sterlingclubpool-.jpeg",
  "/images/turnberry/StirlingClub_CigarBar_View1.jpg",
  "/images/turnberry/SterlingClubDinning.avif",
  "/images/turnberry/SterlingClubWhiteRoses.jpg",
  "/images/turnberry/sterlingclubpoolwithpeople.jpeg",
  "/images/turnberry/CigarLounge.jpeg",
  "/images/turnberry/photo-2.jpg",
  "/images/turnberry/photo-3.jpg",
  "/images/turnberry/photo-4.jpg",
  "/images/turnberry/photo-5.jpg",
  "/images/turnberry/photo-6.jpg",
  "/images/turnberry/photo-7.jpg",
  "/images/turnberry/photo-8.jpg",
  "/images/turnberry/photo-9.jpg",
  "/images/turnberry/photo-21.jpg",
  "/images/turnberry/photo-22.jpg",
  "/images/turnberry/turnberry-towers-las-vegas-nv-primary-photo.jpg",
  "/images/turnberry/Turnberry-Place-May-21-2010.jpeg",
  "/images/turnberry/Turnberry_Towers_Las_Vegas_Monorail.jpg",
]

interface PhotosPageProps extends LayoutProps {}

export default function PhotosPage({ menus }: PhotosPageProps) {
  return (
    <Layout menus={menus}>
      <Meta
        title="Photo Gallery - Turnberry Place Las Vegas"
        description="Photo gallery of Turnberry Place luxury high-rise condos near the Las Vegas Strip. Turnberry Towers Las Vegas High Rise Condos & Las Vegas Strip High Rise Condos for Sale. Call 702-500-1971."
      />
      <JsonLdSchema type="property" />
      <div className="card-content card-photos">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <h1 className="text-center">Turnberry Place Las Vegas Photo Gallery</h1>
              <p className="lead text-center">
                Explore stunning photography showcasing Turnberry Place Las Vegas luxury high-rise condominiums. These professional images capture the elegance, sophistication, and exceptional quality that define Las Vegas's premier high-rise community. As a Las Vegas real estate expert with over 30 years of experience, I can provide context and insights about the features and amenities visible in these photographs.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-12 d-none d-sm-block pb-1">
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
                  <h2 className="mb-0 mx-2">{photos.length} Photos</h2>
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
                        <a className="swipebox mobile" href={photoFullSize[index]} title="Turnberry Place Las Vegas, Las Vegas, NV">
                          <Image
                            src={photos[index]}
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
          
          <div className="row mt-5">
            <div className="col-12 col-lg-10 mx-auto">
              <h2>Turnberry Place Photo Gallery</h2>
              <p>
                These professional photographs showcase Turnberry Place's luxury residences, premium finishes, and world-class amenities. View interior spaces, exterior architecture, and The Stirling Club facilities.
              </p>
              <p className="mt-4">
                <strong>Ready to see Turnberry Place in person?</strong> Contact the office at <a href="tel:7025001971" className="text-decoration-underline">(702) 500-1971</a> to schedule a private showing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps(): Promise<GetStaticPropsResult<PhotosPageProps>> {
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
