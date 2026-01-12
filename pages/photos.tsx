import { GetStaticPropsResult } from "next"
import Head from "next/head"
import { Layout, LayoutProps } from "components/layout"
import { getMenus } from "lib/get-menus"
import { Meta } from "components/meta"
import { JsonLdSchema } from "components/json-ld-schema"
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
        <meta
          name="description"
          content="View luxury condo photos at Turnberry Place Las Vegas. See interior & exterior images of 1-4 bedroom residences with Strip views. Call/text 702-222-1988"
        />
      </Head>
      <JsonLdSchema type="property" />
      <div className="card-content card-photos py-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <h1 className="text-center mb-4">Turnberry Place Las Vegas Photo Gallery</h1>
              <p className="lead text-center mb-5">
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
          
          <div className="row mt-5">
            <div className="col-12 col-lg-10 mx-auto">
              <h2>Exploring Turnberry Place Through Photography</h2>
              <p>
                The Turnberry Place photo gallery provides prospective buyers and residents with visual insights into the development's luxury residences, amenities, and lifestyle. These professional photographs showcase the quality of construction, sophistication of design, and exceptional features that make Turnberry Place one of Las Vegas's most desirable high-rise condominium communities. Understanding what these photographs reveal helps buyers appreciate the value and lifestyle that Turnberry Place offers.
              </p>
              <h3>Interior Photography and Residence Features</h3>
              <p>
                The interior photographs of Turnberry Place residences showcase premium finishes, sophisticated design elements, and spacious layouts that define luxury living. These images reveal hardwood or premium tile flooring, granite or quartz countertops, high-end appliances from leading manufacturers, custom cabinetry, and designer fixtures that create an atmosphere of refined elegance. The photographs also highlight the floor-to-ceiling windows that maximize natural light and frame spectacular views of the Las Vegas Strip, Red Rock Canyon, and the Spring Mountain Range. Understanding these interior features helps buyers visualize the quality and sophistication available in Turnberry Place residences.
              </p>
              <h3>Exterior Photography and Building Architecture</h3>
              <p>
                Exterior photographs of Turnberry Place showcase the development's distinctive architecture, featuring Art Deco influences and Miami-inspired design elements that create a striking silhouette against the Las Vegas skyline. These images reveal the four towers' curved facades, symmetrical layouts, and strategic positioning that maximize views while creating visual interest. The photographs also highlight the development's meticulously manicured landscaping, featuring lush palm trees, drought-tolerant flora, and shaded courtyards that create a tropical-inspired oasis within the urban environment. The exterior photography helps buyers appreciate the development's architectural distinction and aesthetic appeal.
              </p>
              <h3>Amenities Photography and Lifestyle Features</h3>
              <p>
                Photographs of Turnberry Place amenities showcase The Stirling Club's world-class facilities, including the state-of-the-art fitness center, resort-style pools, tennis courts, spa facilities, dining venues, and social spaces. These images reveal the quality and sophistication of the amenities available exclusively to residents, helping buyers understand the comprehensive lifestyle benefits that Turnberry Place provides. The amenities photography also highlights the development's security features, concierge services, and common areas that enhance daily living and create a true luxury lifestyle experience.
              </p>
              <h3>View Photography and Location Advantages</h3>
              <p>
                Photographs showcasing views from Turnberry Place residences highlight one of the development's most compelling features: spectacular vistas of the Las Vegas Strip, Red Rock Canyon, and the Spring Mountain Range. These images reveal the dramatic views available from various floor levels and orientations, helping buyers understand the view potential of different residences. The view photography also showcases the development's prime location just one block from the Strip, providing visual context for the convenience and accessibility that Turnberry Place offers. Understanding these views helps buyers appreciate the location advantages and lifestyle benefits that come with Turnberry Place residences.
              </p>

              <h2>Using Photography to Evaluate Residences</h2>
              <p>
                Professional photography serves as an essential tool for evaluating Turnberry Place residences, providing visual information that complements property descriptions and specifications. Understanding how to interpret these photographs helps buyers make informed decisions about which residences best meet their needs, preferences, and lifestyle requirements.
              </p>
              <h3>Assessing Interior Quality and Finishes</h3>
              <p>
                Interior photographs reveal the quality of finishes, sophistication of design, and attention to detail that define Turnberry Place residences. Buyers can evaluate the quality of flooring materials, countertops, appliances, cabinetry, and fixtures visible in the photographs, helping them understand the level of luxury and refinement available. The photographs also reveal the condition of residences, the quality of maintenance, and the overall presentation that reflects the development's standards. This visual information helps buyers assess whether residences meet their quality expectations and lifestyle requirements.
              </p>
              <h3>Evaluating Layout and Space Utilization</h3>
              <p>
                Photographs provide insights into residence layouts, space utilization, and flow that help buyers understand how residences function for daily living and entertaining. The images reveal room sizes, proportions, and relationships between spaces, helping buyers visualize how they would use and enjoy the residences. The photographs also showcase storage solutions, built-in features, and design elements that enhance functionality and convenience. Understanding these layout characteristics helps buyers identify residences that best accommodate their lifestyle needs and preferences.
              </p>
              <h3>Understanding View Quality and Orientation</h3>
              <p>
                View photographs help buyers understand the quality and characteristics of views available from different residences, floor levels, and orientations. These images reveal whether views are of the Strip, mountains, city, or a combination, helping buyers identify residences that offer their preferred view characteristics. The photographs also showcase the impact of floor level on view quality, as higher floors typically provide more expansive and dramatic vistas. Understanding view quality helps buyers make informed decisions about which residences offer the views they value most.
              </p>

              <h2>Professional Photography Standards at Turnberry Place</h2>
              <p>
                Turnberry Place's professional photography standards ensure that prospective buyers receive accurate, high-quality visual representations of residences and amenities. These standards reflect the development's commitment to transparency and helping buyers make informed decisions. Understanding these photography standards helps buyers interpret the images and appreciate the quality they represent.
              </p>
              <h3>High-Quality Equipment and Techniques</h3>
              <p>
                Turnberry Place's professional photography utilizes high-quality equipment and techniques that ensure accurate, appealing representations of residences and amenities. Professional photographers use specialized equipment, lighting techniques, and composition strategies that showcase properties in their best light while maintaining accuracy. These techniques ensure that photographs provide realistic representations that help buyers understand what they can expect when viewing residences in person. The high-quality photography standards reflect the development's commitment to providing buyers with comprehensive, accurate information.
              </p>
              <h3>Comprehensive Coverage of Features</h3>
              <p>
                The professional photography provides comprehensive coverage of residence features, amenities, and common areas, ensuring that buyers receive visual information about all aspects of Turnberry Place. The photographs showcase interior spaces, exterior features, amenities, views, and lifestyle elements that help buyers understand the complete living experience. This comprehensive coverage helps buyers make informed decisions and appreciate the full value proposition that Turnberry Place offers.
              </p>

              <h2>Contact Dr. Jan Duffy for Photo Tours and Information</h2>
              <p>
                As a Las Vegas real estate expert with over 30 years of experience and deep knowledge of Turnberry Place, I can provide comprehensive information about the residences, features, and amenities visible in these photographs. My expertise in luxury high-rise condominiums, combined with my understanding of Turnberry Place's unique characteristics, enables me to help buyers interpret these photographs and understand what they reveal about the development's quality, features, and lifestyle benefits.
              </p>
              <p>
                Whether you're interested in scheduling a private showing to see residences in person, discussing the features visible in these photographs, or learning more about Turnberry Place's amenities and lifestyle, I can provide detailed information and expert guidance. My goal is to help you understand how these photographs reflect the exceptional quality and lifestyle that Turnberry Place offers, and how they can help you identify the perfect residence for your needs.
              </p>
              <p className="mt-4">
                <strong>Ready to see Turnberry Place in person?</strong> Call or text me at <a href="tel:7022221988" className="text-decoration-underline">(702) 222-1988</a> to schedule a private showing and experience the luxury and sophistication that these photographs represent. With my extensive knowledge of Turnberry Place, I can provide context and insights that help you appreciate the exceptional quality visible in every photograph.
              </p>
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
