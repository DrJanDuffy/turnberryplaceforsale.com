import * as React from "react"
import {
  GetStaticPathsContext,
  GetStaticPathsResult,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from "next"
import Head from "next/head"
import { useRouter } from "next/router"
import { DrupalNode } from "next-drupal"

import { drupal } from "lib/drupal"
import { getMenus } from "lib/get-menus"
import { absoluteURL } from "lib/utils/absolute-url"
import { getParams } from "lib/get-params"
import { Node } from "components/node"
import { Layout, LayoutProps } from "components/layout"
import { Meta } from "components/meta"
import { HeroSlideshow } from "components/hero-slideshow"
import { ContactForm } from "components/contact-form"
import { JsonLdSchema } from "components/json-ld-schema"
import { StickyCTA } from "components/sticky-cta"
import { ExitIntentPopup } from "components/exit-intent-popup"
import { DynamicUnitCount } from "components/dynamic-unit-count"
import { VIPNewsletterSignup } from "components/vip-newsletter-signup"
import { WhyWorkWithUs } from "components/why-work-with-us"
import { ClientTestimonials } from "components/client-testimonials"
import { PowerOfNumbers } from "components/power-of-numbers"
import { InTheMedia } from "components/in-the-media"
import Image from "next/image"
import Link from "next/link"
import Script from "next/script"

const RESOURCE_TYPES = ["node--page", "node--landing_page", "node--article"]

interface NodePageProps extends LayoutProps {
  node: DrupalNode
}

export default function NodePage({ node, menus }: NodePageProps) {
  const router = useRouter()

  // Handle home page when Drupal is not configured
  if (node.id === 'home' && node.type === 'node--landing_page') {
    return (
      <Layout menus={menus}>
        <Meta title="Turnberry Place Las Vegas | Luxury High-Rise Condos For Sale" />
        <Head>
          <title>Turnberry Place Las Vegas | Luxury High-Rise Condos For Sale</title>
          <meta
            name="description"
            content="Discover luxury high-rise condos for sale at Turnberry Place Las Vegas. 4 luxury towers from $800K-$10M+ with Strip views & exclusive Stirling Club access. Call/text 702-222-1988"
          />
        </Head>
        <JsonLdSchema type="home" propertyPrice="$800,000 - $10,000,000+" />
        <HomePageContent />
      </Layout>
    )
  }

  return (
    <Layout menus={menus}>
      <Meta title={node.title} tags={node.metatag} path={node.path?.alias} />
      <Head>
        {node.content_translations?.map((translation, index) =>
          translation.langcode !== router.locale ? (
            <link
              key={index}
              rel="alternate"
              hrefLang={translation.langcode}
              href={absoluteURL(translation.path)}
            />
          ) : null
        )}
      </Head>
      <Node node={node} />
    </Layout>
  )
}

// Home page content component
function HomePageContent() {
  const heroPhotos = [
    "https://photos.cribflyer-proxy.com/cdn-cgi/image/width=1600,height=1200,fit=crop,rotate=0,format=auto,quality=85/4616/60013/2953237/photo.jpg",
    "https://photos.cribflyer-proxy.com/cdn-cgi/image/width=1600,height=1200,fit=crop,rotate=0,format=auto,quality=85/4616/60013/2953238/photo.jpg",
    "https://photos.cribflyer-proxy.com/cdn-cgi/image/width=1600,height=1200,fit=crop,rotate=0,format=auto,quality=85/4616/60013/2953240/photo.jpg",
    "https://photos.cribflyer-proxy.com/cdn-cgi/image/width=1600,height=1200,fit=crop,rotate=0,format=auto,quality=85/4616/60013/2953239/photo.jpg",
  ]

  return (
    <>
      <StickyCTA />
      <ExitIntentPopup />
      {/* Hero Section with Slideshow */}
      <HeroSlideshow photos={heroPhotos} />
      
      {/* Quick Intro Section */}
      <div className="card-content card-price-features py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10 text-center">
              <h2 className="mb-3">Las Vegas' Premier Luxury High-Rise Community</h2>
              <p className="lead mb-4">
                Turnberry Place offers four luxury towers just one block from the Las Vegas Strip. Guard-gated community with exclusive access to The Stirling Club's 80,000 sq ft private facility.
              </p>
              <div className="row mt-4">
                <div className="col-md-4 mb-3">
                  <div className="h4 text-primary">4 Towers</div>
                  <div className="small">Completed 2000-2005</div>
                </div>
                <div className="col-md-4 mb-3">
                  <div className="h4 text-primary">$800K - $10M+</div>
                  <div className="small">1-4 Bedroom Residences</div>
                </div>
                <div className="col-md-4 mb-3">
                  <div className="h4 text-primary">1 Block</div>
                  <div className="small">From Las Vegas Strip</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Work With Us Section */}
      <WhyWorkWithUs />

      {/* Towers Comparison - Bullet Points */}
      <div className="card-content card-prop-description py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <h2 className="text-center mb-4">Four Distinct Luxury Towers</h2>
              <div className="row">
                <div className="col-md-6 mb-4">
                  <h3>Tower 1 - Entry Level</h3>
                  <ul className="list-unstyled">
                    <li>✓ 38 stories, completed 2000</li>
                    <li>✓ Starting from $800K</li>
                    <li>✓ Excellent value proposition</li>
                    <li>✓ Private elevator access</li>
                  </ul>
                </div>
                <div className="col-md-6 mb-4">
                  <h3>Tower 2 - Enhanced Features</h3>
                  <ul className="list-unstyled">
                    <li>✓ 45 stories, completed 2001</li>
                    <li>✓ Larger floor plans</li>
                    <li>✓ Floor-to-ceiling windows</li>
                    <li>✓ Premium finishes</li>
                  </ul>
                </div>
                <div className="col-md-6 mb-4">
                  <h3>Tower 3 - Contemporary Design</h3>
                  <ul className="list-unstyled">
                    <li>✓ 45 stories, completed 2002</li>
                    <li>✓ Modern aesthetic</li>
                    <li>✓ Spacious terraces</li>
                    <li>✓ Panoramic views</li>
                  </ul>
                </div>
                <div className="col-md-6 mb-4">
                  <h3>Tower 4 - Ultimate Luxury</h3>
                  <ul className="list-unstyled">
                    <li>✓ 45 stories, completed 2005</li>
                    <li>✓ Most refined residences</li>
                    <li>✓ Exceptional finishes</li>
                    <li>✓ Premium pricing</li>
                  </ul>
                </div>
              </div>
              <div className="text-center mt-4">
                <Link href="/towers" className="btn btn-primary btn-lg">
                  Learn More About Each Tower
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Amenities Section Preview */}
      <div className="card-content card-amenities py-5">
        <div className="container pt-2">
          <div className="row align-items-center justify-content-center">
            <div className="col-12">
              <div className="pb-4 pb-sm-5 amenities-border">
                <div className="amenities-title">
                  <h2>World-Class Amenities and Lifestyle Benefits</h2>
                  <p className="text-center mb-4">
                    Turnberry Place residents enjoy exclusive access to The Stirling Club, an 80,000-square-foot private membership facility that provides world-class amenities without separate membership costs. This comprehensive amenity package, combined with the development's security, location, and quality, creates exceptional value that justifies the development's premium positioning.
                  </p>
                </div>
                <div className="row pt-2 pt-sm-4 pl-3 pl-sm-5">
                  {["Gated Community", "City View", "Secure Building", "Gym", "Tennis Courts", "Spa", "Swimming Pool", "Workout Room", "Mountains", "Private Patio"].map((amenity, index) => (
                    <div key={index} className="col-6 col-lg-4 py-2 d-flex align-items-center">
                      <div className="mr-2 pb-1">
                        <span className="icon-custom">
                          <svg height="15" width="15" aria-hidden="true" focusable="false" className="d-inline" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path fill="currentColor" d="M413.505 91.951L133.49 371.966l-98.995-98.995c-4.686-4.686-12.284-4.686-16.971 0L6.211 284.284c-4.686 4.686-4.686 12.284 0 16.971l118.794 118.794c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-11.314-11.314c-4.686-4.686-12.284-4.686-16.97 0z"/>
                          </svg>
                        </span>
                      </div>
                      <span className="amenity-name">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Photos Section Preview */}
      <div className="card-content card-photos py-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 d-none d-sm-block pb-1">
              <h2 className="text-center mb-0">Photo Gallery</h2>
              <div className="d-slideshow">
                <div className="font-size-90 text-center d-none d-md-flex align-items-md-center justify-content-md-center">
                  <Link href="/photos" className="text-underline">
                    Launch Slideshow Viewer
                  </Link>
                  <div className="ml-1">
                    <span className="icon-custom">
                      <svg height="12" width="15" aria-hidden="true" focusable="false" className="d-inline" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                        <path fill="currentColor" d="M195.515 374.828c-4.686-4.686-4.686-12.284 0-16.971l323.15-323.15-.707-.707-89.958.342c-6.627 0-12-5.373-12-12v-9.999c0-6.628 5.372-12 12-12L564 0c6.627 0 12 5.372 12 12l-.343 136c0 6.627-5.373 12-12 12h-9.999c-6.627 0-12-5.373-12-12L542 58.042l-.707-.707-323.15 323.15c-4.686 4.686-12.284 4.686-16.971 0l-5.657-5.657zm232-155.633l-8 8A12 12 0 0 0 416 235.68V464c0 8.837-7.164 16-16 16H48c-8.836 0-16-7.163-16-16V112c0-8.837 7.164-16 16-16h339.976c3.183 0 6.235-1.264 8.485-3.515l8-8c7.56-7.56 2.206-20.485-8.485-20.485H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V227.681c0-10.691-12.926-16.045-20.485-8.486z"/>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div className="grid">
                {heroPhotos.slice(0, 4).map((photo, index) => (
                  <div key={index} className="item">
                    <div className="photo">
                      <a className="swipebox desktop" href={photo} title="Turnberry Place Las Vegas, Las Vegas, NV">
                        <Image
                          src={photo.replace('width=1600,height=1200', 'width=400')}
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
          </div>
        </div>
      </div>

      {/* Private Showings Section */}
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
                <h2 className="mb-3 text-uppercase">Private Showings Available</h2>
                <p className="h4 mb-4 text-success font-weight-bold">
                  7 Days a Week
                </p>
                <p className="mb-4">
                  Schedule your personalized tour of Turnberry Place luxury condos today. Experience the quality, amenities, and lifestyle firsthand.
                </p>
                <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                  <a href="tel:7022221988" className="btn btn-warning btn-lg font-weight-bold" title="Call or text 702-222-1988">
                    Call/Text (702) 222-1988
                  </a>
                  <Link href="/request-details" className="btn btn-outline-light btn-lg font-weight-bold" title="Request Showing">
                    Request Showing
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Current Listings Section */}
      <div className="card-content py-5 bg-white">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="text-center mb-4">Current Available Listings</h2>
              <p className="text-center mb-5">Explore our featured luxury condos at Turnberry Place</p>
              <div className="row">
                {/* Listing 1 */}
                <div className="col-md-6 col-lg-3 mb-4">
                  <div className="card h-100 shadow-sm">
                    <div className="card-img-top" style={{ height: '200px', backgroundImage: 'url(https://photos.cribflyer-proxy.com/cdn-cgi/image/width=800,height=600,fit=crop,rotate=0,format=auto,quality=85/4616/60013/2953237/photo.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                    <div className="card-body">
                      <h5 className="card-title">Tower 2, Unit 1501</h5>
                      <p className="card-text">
                        <strong>$1,250,000</strong><br />
                        2 Bed, 2 Bath | 1,850 sqft<br />
                        Strip Views
                      </p>
                    </div>
                  </div>
                </div>
                {/* Listing 2 */}
                <div className="col-md-6 col-lg-3 mb-4">
                  <div className="card h-100 shadow-sm">
                    <div className="card-img-top" style={{ height: '200px', backgroundImage: 'url(https://photos.cribflyer-proxy.com/cdn-cgi/image/width=800,height=600,fit=crop,rotate=0,format=auto,quality=85/4616/60013/2953238/photo.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                    <div className="card-body">
                      <h5 className="card-title">Tower 3, Unit 2205</h5>
                      <p className="card-text">
                        <strong>$2,100,000</strong><br />
                        3 Bed, 3 Bath | 2,400 sqft<br />
                        Mountain Views
                      </p>
                    </div>
                  </div>
                </div>
                {/* Listing 3 */}
                <div className="col-md-6 col-lg-3 mb-4">
                  <div className="card h-100 shadow-sm">
                    <div className="card-img-top" style={{ height: '200px', backgroundImage: 'url(https://photos.cribflyer-proxy.com/cdn-cgi/image/width=800,height=600,fit=crop,rotate=0,format=auto,quality=85/4616/60013/2953240/photo.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                    <div className="card-body">
                      <h5 className="card-title">Tower 4, Unit 3501</h5>
                      <p className="card-text">
                        <strong>$4,500,000</strong><br />
                        4 Bed, 4 Bath | 3,800 sqft<br />
                        Panoramic Views
                      </p>
                    </div>
                  </div>
                </div>
                {/* Listing 4 */}
                <div className="col-md-6 col-lg-3 mb-4">
                  <div className="card h-100 shadow-sm">
                    <div className="card-img-top" style={{ height: '200px', backgroundImage: 'url(https://photos.cribflyer-proxy.com/cdn-cgi/image/width=800,height=600,fit=crop,rotate=0,format=auto,quality=85/4616/60013/2953239/photo.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                    <div className="card-body">
                      <h5 className="card-title">Tower 1, Unit 1203</h5>
                      <p className="card-text">
                        <strong>$950,000</strong><br />
                        1 Bed, 1 Bath | 1,350 sqft<br />
                        City Views
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center mt-4">
                <Link href="/available-condos" className="btn btn-primary btn-lg">
                  See All <DynamicUnitCount defaultCount={12} elementId="total-listings-count" /> Available Units
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Client Testimonials Section */}
      <ClientTestimonials />

      {/* Power of Numbers Section */}
      <PowerOfNumbers />

      {/* In The Media Section */}
      <InTheMedia />

      {/* VIP Newsletter Signup */}
      <div className="card-content py-5 bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 col-lg-6">
              <VIPNewsletterSignup />
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
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
                  <h2 className="my-0 mx-2 heading-color" id="contact-label">
                    Turnberry Place Request Pricing & Details
                  </h2>
                  <div className="w-10 horiz-line d-none d-sm-block"></div>
                </div>
                <ContactForm title="Turnberry Place Request Pricing & Details" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Agent Section */}
      <div className="card-content card-agent py-5">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="row justify-content-center">
                <div className="py-2 col-12 text-center">
                  <h2>Dr. Jan Duffy, REALTOR</h2>
                  <div className="my-1">
                    The Turnberry Place Team at Berkshire Hathaway HomeServices Nevada Properties
                    <br /> License: S.0197614.LLC
                  </div>
                </div>
                <div className="col-12 py-2 d-flex align-items-center justify-content-center">
                  <Image
                    className="img-fluid agent-photo"
                    src="https://assets.cribflyer-proxy.com/cdn-cgi/image/width=500,fit=contain,rotate=0,format=auto,quality=100/4616/2/2953539/asset.jpg"
                    alt="Dr. Jan Duffy, Las Vegas real estate expert specializing in Turnberry Place luxury condos"
                    width={225}
                    height={225}
                  />
                </div>
                <div className="col-12 text-center py-2">
                  <div className="py-2 d-flex flex-column flex-lg-row align-items-center justify-content-center" style={{ gap: "5px" }}>
                    <div className="mx-2">
                      <span className="">Call/Text:</span>{" "}
                      <a href="tel:7022221988" title="Call or text Dr. Jan Duffy">
                        (702) 222-1988
                      </a>
                    </div>
                    <div className="mx-2">
                      <span className="">Office:</span>{" "}
                      <a href="tel:7025001955" title="Berkshire Hathaway office">
                        (702) 500-1955
                      </a>
                    </div>
                  </div>
                  <div className="py-2">
                    <Link href="/agent" className="btn btn-custom" title="View Dr. Jan Duffy's bio">
                      View Bio
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Available Condos Section */}
      <div className="card-content card-embed-widget py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <h2 className="text-center mb-4">Available Las Vegas Condos</h2>
              <div className="widget-wrapper">
                <Script
                  src="https://em.realscout.com/widgets/realscout-web-components.umd.js"
                  type="module"
                  strategy="lazyOnload"
                />
                <style jsx>{`
                  realscout-office-listings {
                    --rs-listing-divider-color: rgb(101, 141, 172);
                    width: 100%;
                  }
                `}</style>
                {/* @ts-ignore - Custom web component */}
                <realscout-office-listings
                  agent-encoded-id="QWdlbnQtMjI1MDUw"
                  sort-order="PRICE_HIGH"
                  listing-status="For Sale"
                  property-types="TC"
                  price-min="600000"
                ></realscout-office-listings>
              </div>
              <div className="text-center mt-4">
                <p className="mb-3">Interested in viewing these luxury condos?</p>
                <a href="tel:7022221988" className="btn btn-custom btn-lg" title="Call or text 702-222-1988">
                  Call/Text (702) 222-1988
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floor Plans Section Preview */}
      <div className="card-content card-floor-plans py-5">
        <div className="container-fluid">
          <div className="row align-items-center justify-content-center">
            <div className="col-12 col-lg-11 col-xl-10 text-center">
              <h2 className="text-center mb-4">Floor Plans</h2>
              <p className="mb-4">
                Explore our collection of luxury floor plans ranging from 1-4 bedrooms. Each residence features premium finishes and stunning views.
              </p>
              <Link href="/floor-plans" className="btn btn-custom btn-lg" title="View all floor plans">
                View All Floor Plans
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Stirling Club Section */}
      <div className="card-content card-custom card-custom-03 py-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="text-center">The Stirling Club</h2>
              <h4 className="text-center mb-4">Exclusive Luxury at Your Doorstep</h4>
            </div>
          </div>
          <div className="row py-4 justify-content-center">
            <div className="col-12 col-xl-10">
              <div className="row align-items-center">
                <div className="col-12 col-md-6">
                  <div className="left-image pb-4 pb-md-0">
                    <Image
                      src="https://assets.cribflyer-proxy.com/cdn-cgi/image/height=400,fit=contain,format=auto,quality=85/4616/5/2976704/asset.jpg"
                      width={600}
                      height={400}
                      alt="The Stirling Club at Turnberry Place Las Vegas - luxury amenities and resort-style living"
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="text-content pt-3 pt-md-0">
                    <p>
                      The crown jewel of Turnberry Place is the recently renovated Stirling Club, an 80,000 square foot private club offering world-class amenities exclusively to residents. This luxurious facility includes:
                    </p>
                    <ul>
                      <li>State-of-the-art fitness center</li>
                      <li>Resort-style swimming pools (both indoor and outdoor)</li>
                      <li>Tennis courts</li>
                      <li>Spa and beauty services center</li>
                      <li>Multiple dining venues and bars</li>
                      <li>Business center with conference rooms</li>
                      <li>Various lounges for socializing and relaxation</li>
                    </ul>
                    <p>
                      The Stirling Club serves as the social and recreational hub of the Turnberry Place community, providing residents with a private oasis of luxury and convenience.
                    </p>
                    <Link href="/stirling-club" className="btn btn-custom" title="Learn more about The Stirling Club">
                      Learn More About The Stirling Club
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Neighborhood Section Preview */}
      <div className="card-content card-areas py-5">
        <div className="container-fluid">
          <div className="row align-items-center justify-content-center">
            <div className="col-12 col-sm-11 col-lg-10 col-xl-9">
              <div className="py-4">
                <h2 className="text-center mb-4">Turnberry Place Neighborhood and Area Profile</h2>
                <div className="mb-4">
                  <p>
                    Turnberry Place stands as a pinnacle of luxury living in Las Vegas, offering an unparalleled blend of privacy, convenience, and access to world-class amenities. Situated just one block east of the Las Vegas Strip between the Wynn Encore and Sahara resorts, this guard-gated, four-tower condominium complex redefines upscale urban living.
                  </p>
                  <h2>Prime Location and Accessibility</h2>
                  <p>
                    Turnberry Place&rsquo;s location at 2747&ndash;2877 Paradise Road positions it at the heart of Las Vegas&rsquo; most dynamic corridor. The property lies within a one-mile radius of over twenty Zagat-rated restaurants, including establishments at the Wynn, Encore, and Resorts World.
                  </p>
                  <p>
                    The Strip&rsquo;s iconic attractions&mdash;such as the T-Mobile Arena (home of the Vegas Golden Knights) and Allegiant Stadium (home of the Las Vegas Raiders)&mdash;are mere minutes away, alongside the Las Vegas Convention Center and McCarran International Airport.
                  </p>
                </div>
                <div className="text-center">
                  <Link href="/neighborhood" className="btn btn-custom btn-lg" title="Explore Turnberry Place neighborhood">
                    Explore Neighborhood
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Share Section Preview */}
      <div className="card-content py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8 text-center">
              <h2 className="mb-4">Share Turnberry Place Las Vegas</h2>
              
              <p className="mb-4">
                Know someone who would love to see these luxury condos? Share this property with friends and family.
              </p>
              <p className="mb-4">
                Know someone who would love to see these luxury condos? Share this property with friends and family.
              </p>
              <div className="d-flex flex-wrap justify-content-center gap-3 mb-4">
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                    process.env.NEXT_PUBLIC_BASE_URL || 'https://www.turnberryplaceforsale.com'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  title="Share on Facebook"
                >
                  Facebook
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                    'Turnberry Place Las Vegas | Luxury High-Rise Condos For Sale'
                  )}&url=${encodeURIComponent(
                    process.env.NEXT_PUBLIC_BASE_URL || 'https://www.turnberryplaceforsale.com'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-info"
                  title="Share on Twitter"
                >
                  Twitter
                </a>
                <a
                  href={`https://pinterest.com/pin/create/button/?url=${encodeURIComponent(
                    process.env.NEXT_PUBLIC_BASE_URL || 'https://www.turnberryplaceforsale.com'
                  )}&media=${encodeURIComponent(
                    'https://photos.cribflyer-proxy.com/cdn-cgi/image/width=1200,height=630,fit=crop,rotate=0,format=auto,quality=85/4616/60013/2953237/photo.jpg'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-danger"
                  title="Share on Pinterest"
                >
                  Pinterest
                </a>
                <a
                  href={`http://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
                    process.env.NEXT_PUBLIC_BASE_URL || 'https://www.turnberryplaceforsale.com'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  title="Share on LinkedIn"
                >
                  LinkedIn
                </a>
              </div>
              <Link href="/share" className="btn btn-custom btn-lg" title="Send to a friend">
                Send to a Friend
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export async function getStaticPaths(
  context: GetStaticPathsContext
): Promise<GetStaticPathsResult> {
  // Early return if Drupal base URL is not configured
  // Use fallback to handle root route
  if (!process.env.NEXT_PUBLIC_DRUPAL_BASE_URL) {
    console.warn(
      "NEXT_PUBLIC_DRUPAL_BASE_URL not set. Using fallback for all routes."
    )
    return {
      paths: [],
      fallback: "blocking",
    }
  }

  // Get Drupal paths
  const drupalPaths = await drupal.getStaticPathsFromContext(RESOURCE_TYPES, context, {
    params: {
      filter: {
        "field_site.meta.drupal_internal__target_id":
          process.env.DRUPAL_SITE_ID,
      },
    },
  })

  return {
    paths: drupalPaths,
    fallback: "blocking",
  }
}

export async function getStaticProps(
  context: GetStaticPropsContext
): Promise<GetStaticPropsResult<NodePageProps>> {
  const slug = context.params?.slug as string[] | undefined
  
  // Handle root route (/) - return home page when Drupal is not configured
  if (!slug || slug.length === 0) {
    if (!process.env.NEXT_PUBLIC_DRUPAL_BASE_URL) {
      // Return a simple home page structure when Drupal is not available
      return {
        props: {
          node: {
            type: 'node--landing_page',
            id: 'home',
            title: 'Turnberry Place Las Vegas',
            status: true,
            path: { alias: '/' },
            field_sections: [],
          } as any,
          menus: await getMenus(context),
        },
      }
    }
  }

  // Early return if Drupal base URL is not configured for other routes
  if (!process.env.NEXT_PUBLIC_DRUPAL_BASE_URL) {
    return {
      notFound: true,
    }
  }

  // Check if this is a static page route that should be handled elsewhere
  const staticRoutes = ['towers', 'amenities', 'photos', 'floor-plans', 'stirling-club', 'neighborhood']
  if (slug && slug.length === 1 && staticRoutes.includes(slug[0])) {
    return {
      notFound: true,
    }
  }

  const path = await drupal.translatePathFromContext(context)

  if (!path || !RESOURCE_TYPES.includes(path.jsonapi.resourceName)) {
    return {
      notFound: true,
    }
  }

  const type = path.jsonapi.resourceName

  const node = await drupal.getResourceFromContext<DrupalNode>(path, context, {
    params: getParams(type),
  })

  if (!node || (!context.preview && node?.status === false)) {
    return {
      notFound: true,
    }
  }

  // Load initial view data.
  if (type === "node--landing_page") {
    for (const section of node.field_sections) {
      if (section.type === "paragraph--view" && section.field_view) {
        const view = await drupal.getView(section.field_view, {
          params: {
            include: "field_location,field_images.field_media_image",
          },
        })

        section.field_view = {
          name: section.field_view,
          ...view,
        }
      }
    }
  }

  return {
    props: {
      node,
      menus: await getMenus(context),
    },
  }
}
