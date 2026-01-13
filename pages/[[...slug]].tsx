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
// Components moved to other pages:
// WhyWorkWithUs, ClientTestimonials, PowerOfNumbers, InTheMedia → /agent page
import { FeaturedListingCard } from "components/featured-listing-card"
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
          <meta
            name="description"
            content="Discover luxury high-rise condos for sale at Turnberry Place Las Vegas. 4 luxury towers from $800K-$10M+ with Strip views & exclusive Stirling Club access. Call/text 702-222-1988"
          />
          {/* Preload first hero image for faster LCP */}
          <link
            rel="preload"
            as="image"
            href="/images/turnberry/Turnberry_Place_For_Sale.jpg"
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
  // Hero photos - using local images from public/images/turnberry
  const heroPhotos = [
    "/images/turnberry/Turnberry_Place_For_Sale.jpg",
    "/images/turnberry/Turnberry Tower Nice Vew.jpg",
    "/images/turnberry/Turnberry Tower South View.jpeg",
    "/images/turnberry/Las-Vegas-High-Rise-Condo-Living-Downtown-Las-Vegas-Turnberry-Place-Interior.jpg",
  ]

  return (
    <>
      <StickyCTA />
      <ExitIntentPopup />
      {/* Hero Section with Slideshow */}
      <HeroSlideshow photos={heroPhotos} />
      
      {/* Price & Features Section - Combined like live site */}
      <div className="card-content card-price-features py-5" id="card-id-2271756" data-card-type="3">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 text-center">
              <h1 className="mb-1">Turnberry Place Las Vegas</h1>
              <p>Las Vegas, NV 89109</p>
              <h3>4 Luxury Towers from $800,000 to $10M+</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Towers Section - Compact Cards */}
      <div className="card-content card-prop-description py-5" id="card-id-2271757" data-card-type="4">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="mb-4 text-center">
                Turnberry Place | Las Vegas' Premier High-Rise Community
              </h1>
              <div className="row">
                {/* Tower 1 Card - Stacked Vertically */}
                <div className="col-12 mb-4">
                  <div className="card border-0 shadow-sm" style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '4px',
                    padding: '1.5rem',
                  }}>
                    <h2 className="mb-3" style={{ fontSize: '1.5rem', fontWeight: 600 }}>
                      Tower 1 - Elegant High-Rise Living
                    </h2>
                    <p style={{ fontSize: '1rem', lineHeight: 1.6, marginBottom: 0 }}>
                      Turnberry Place Tower 1 represents the inaugural vision of luxury high-rise living, offering spacious residences with stunning views of the Las Vegas Strip and mountains. Completed in 2000, this 38-story tower features private elevator access, 24-hour security, and direct access to The Stirling Club's world-class amenities.
                    </p>
                  </div>
                </div>

                {/* Tower 2 Card - Stacked Vertically */}
                <div className="col-12 mb-4">
                  <div className="card border-0 shadow-sm" style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '4px',
                    padding: '1.5rem',
                  }}>
                    <h2 className="mb-3" style={{ fontSize: '1.5rem', fontWeight: 600 }}>
                      Tower 2 - Sophisticated Strip Views
                    </h2>
                    <p style={{ fontSize: '1rem', lineHeight: 1.6, marginBottom: 0 }}>
                      Rising 45 stories, Tower 2 delivers breathtaking views and refined luxury living. Built in 2001, this tower showcases larger floor plans, floor-to-ceiling windows, and premium finishes throughout. Residents enjoy private balconies, concierge services, and exclusive access to The Stirling Club's resort-style amenities.
                    </p>
                  </div>
                </div>

                {/* Tower 3 Card - Stacked Vertically */}
                <div className="col-12 mb-4">
                  <div className="card border-0 shadow-sm" style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '4px',
                    padding: '1.5rem',
                  }}>
                    <h2 className="mb-3" style={{ fontSize: '1.5rem', fontWeight: 600 }}>
                      Tower 3 - Premium Desert Living
                    </h2>
                    <p style={{ fontSize: '1rem', lineHeight: 1.6, marginBottom: 0 }}>
                      The third tower of Turnberry Place stands 45 stories tall, offering contemporary luxury residences with panoramic views. Completed in 2002, Tower 3 features modern designs, spacious terraces, and sophisticated interior finishes. Residents experience the perfect blend of privacy and resort-style living.
                    </p>
                  </div>
                </div>

                {/* Tower 4 Card - Stacked Vertically */}
                <div className="col-12 mb-4">
                  <div className="card border-0 shadow-sm" style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '4px',
                    padding: '1.5rem',
                  }}>
                    <h2 className="mb-3" style={{ fontSize: '1.5rem', fontWeight: 600 }}>
                      Tower 4 - Ultimate Luxury Living
                    </h2>
                    <p style={{ fontSize: '1rem', lineHeight: 1.6, marginBottom: 0 }}>
                      As the crown jewel of Turnberry Place, Tower 4 represents the pinnacle of luxury high-rise living. This 45-story masterpiece, completed in 2005, offers the most refined residences with unparalleled views, premium amenities, and exceptional finishes. Residents enjoy the finest in desert living with full access to The Stirling Club.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Amenities Section - Matching Live Site */}
      <div className="card-content card-amenities py-5" id="card-id-2271758" data-card-type="5">
        <div className="container pt-2">
          <div className="row align-items-center justify-content-center">
            <div className="col-12">
              <div className="pb-4 pb-sm-5 amenities-border">
                <div className="amenities-title">
                  <h1 className="text-center">Amenities</h1>
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

      {/* Open House Section - Matching Live Site */}
      <div className="card-content card-open-house py-5" id="card-id-2271761" data-card-type="8" style={{
        backgroundImage: "url(/images/turnberry/Turnberry Tower Nice Vew.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}>
        <div className="container-fluid">
          <div className="row align-items-center justify-content-center">
            <div className="col-12 col-sm-11 col-md-10 col-lg-9 col-xl-7 text-center py-5 px-0">
              <div className="open-house-box p-2 p-md-4 shadow" style={{
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                borderRadius: '4px',
              }}>
                <div className="mt-2 mb-2 text-heading text-uppercase">
                  Please join us for an
                </div>
                <div className="d-flex mb-3 mb-lg-4 align-items-center justify-content-center">
                  <div className="d-none d-md-block w-10 horiz-line" style={{ flex: '1', maxWidth: '100px', height: '1px', backgroundColor: 'rgba(222,226,230,1)' }}></div>
                  <h2 className="my-0 mx-2 text-uppercase">Open House</h2>
                  <div className="d-none d-md-block w-10 horiz-line" style={{ flex: '1', maxWidth: '100px', height: '1px', backgroundColor: 'rgba(222,226,230,1)' }}></div>
                </div>
                <div className="text-center pb-4">
                  <p className="none-scheduled mb-4">
                    No open houses scheduled
                  </p>
                  <Link className="btn btn-custom btn-lg" href="/request-details" title="Request Showing">
                    Request Showing
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section - Matching Live Site */}
      <div className="card-content card-contact-form py-5" id="card-id-2271763" data-card-type="11" style={{
        backgroundImage: "url(/images/turnberry/Las-Vegas-High-Rise-Condo-Living-Downtown-Las-Vegas-Turnberry-Place-Interior.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}>
        <div className="container-fluid">
          <div className="row align-items-center justify-content-center">
            <div className="col-12 col-sm-10 col-md-8 col-lg-7 col-xl-6 text-center px-sm-2">
              <div className="contact-form-box p-4" style={{
                backgroundColor: 'rgba(255,255,255,0.95)',
                borderRadius: '4px',
              }}>
                <div className="mt-0 mt-md-2 d-flex align-items-center justify-content-center">
                  <div className="w-10 horiz-line d-none d-sm-block" style={{ flex: '1', maxWidth: '100px', height: '1px', backgroundColor: 'rgba(181,152,90,1)' }}></div>
                  <h1 className="my-0 mx-2 heading-color" id="contact-label">
                    Turnberry Place Request Pricing & Details
                  </h1>
                  <div className="w-10 horiz-line d-none d-sm-block" style={{ flex: '1', maxWidth: '100px', height: '1px', backgroundColor: 'rgba(181,152,90,1)' }}></div>
                </div>
                <ContactForm title="Turnberry Place Request Pricing & Details" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Agent Section - Matching Live Site */}
      <div className="card-content card-agent py-5" id="card-id-2271762" data-card-type="12">
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
                    src="/images/turnberry/asset-1.jpg"
                    alt="Photo of Dr. Jan Duffy, REALTOR"
                    width={225}
                    height={225}
                    loading="lazy"
                  />
                </div>
                <div className="col-12 text-center py-2">
                  <div className="py-2 d-flex flex-column flex-lg-row align-items-center justify-content-center" style={{ gap: '5px' }}>
                    <div className="mx-2" itemScope itemType="https://schema.org/LocalBusiness">
                      <span>Mobile:</span> <a href="tel:7022221988" title="Phone cell">(702) 222-1988</a>
                    </div>
                    <div className="mx-2" itemScope itemType="https://schema.org/LocalBusiness">
                      <span>Office:</span> <a href="tel:7022221988" title="Phone office">(702) 222-1988</a>
                    </div>
                  </div>
                  <div className="py-2">
                    <Link className="cursor-pointer btn-agent-bio" href="/agent" title="View Bio">
                      View Bio
                    </Link>
                  </div>
                </div>
                <div className="col-12 text-center py-2">
                  <Image
                    className="img-fluid company-logo"
                    src="/images/turnberry/asset-19.jpg"
                    alt="The Turnberry Place Team at Berkshire Hathaway HomeServices Nevada Properties Logo"
                    width={225}
                    height={225}
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Available Las Vegas Condos Section - Matching Live Site */}
      <div className="card-content card-embed-widget py-5" id="card-id-2271977" data-card-type="39">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <h1 className="text-center mb-4">
                Available Las Vegas Condos 
              </h1>
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
                <realscout-office-listings agent-encoded-id="QWdlbnQtMjI1MDUw" sort-order="PRICE_HIGH" listing-status="For Sale" property-types="TC" price-min="600000"></realscout-office-listings>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floor Plans Section - Link to dedicated page */}
      <div className="card-content card-floor-plans py-5" id="card-id-2281722" data-card-type="34">
        <div className="container-fluid">
          <div className="row align-items-center justify-content-center">
            <div className="col-12 col-lg-11 col-xl-10 text-center">
              <h1 className="text-center mb-4">
                Floor Plans
              </h1>
              <div className="py-4">
                <Link href="/floor-plans" className="btn btn-primary btn-lg">
                  View All Floor Plans
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Share Section - Link to dedicated page */}
      <div className="card-content py-5 bg-light" id="card-id-2271764" data-card-type="20">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 text-center">
              <h1 className="mb-4">Share this property</h1>
              <Link href="/share" className="btn btn-primary btn-lg">
                Share Turnberry Place
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* The Stirling Club Section - Matching Live Site */}
      <div className="card-content card-custom card-custom-03 py-5" id="card-id-2273044" data-card-type="40">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="text-center">The Stirling Club</h1>
              <h4 className="text-center">Exclusive Luxury at Your Doorstep</h4>
            </div>
          </div>
          <div className="row py-4 justify-content-center">
            <div className="col-12 col-xl-10">
              <div className="row align-items-center">
                <div className="col-12 col-md-6">
                  <div className="left-image pb-4 pb-md-0 text-center">
                    <Image
                      src="/images/turnberry/sterlingclubpool-.jpeg"
                      alt="The Stirling Club"
                      width={400}
                      height={400}
                      className="img-fluid"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="text-content pt-3 pt-md-0">
                    <p>The crown jewel of Turnberry Place is the recently renovated Stirling Club, an 80,000 square foot private club offering world-class amenities exclusively to residents. This luxurious facility includes:</p>
                    <ul>
                      <li>State-of-the-art fitness center</li>
                      <li>Resort-style swimming pools (both indoor and outdoor)</li>
                      <li>Tennis courts</li>
                      <li>Spa and beauty services center</li>
                      <li>Multiple dining venues and bars</li>
                      <li>Business center with conference rooms</li>
                      <li>Various lounges for socializing and relaxation</li>
                    </ul>
                    <p>The Stirling Club serves as the social and recreational hub of the Turnberry Place community, providing residents with a private oasis of luxury and convenience. Its extensive offerings contribute significantly to the upscale lifestyle that defines Turnberry Place, making it a central feature that distinguishes this development from other luxury condominiums in Las Vegas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Turnberry Place Neighborhood Section - Link to dedicated page */}
      <div className="card-content card-areas py-5" id="card-id-2282239" data-card-type="42">
        <div className="container-fluid">
          <div className="row align-items-center justify-content-center">
            <div className="col-12 col-sm-11 col-lg-10 col-xl-9">
              <div className="py-4">
                <h1 className="text-center mb-4">Turnberry Place Neighborhood and Area Profile</h1>
                <div className="area-desc">
                  <p>Turnberry Place stands as a pinnacle of luxury living in Las Vegas, offering an unparalleled blend of privacy, convenience, and access to world-class amenities. Situated just one block east of the Las Vegas Strip between the Wynn Encore and Sahara resorts, this guard-gated, four-tower condominium complex redefines upscale urban living with its strategic location and meticulously curated environment. Residents enjoy immediate proximity to the Entertainment Capital of the World while residing in a serene, tropical-inspired oasis adorned with lush palm trees and manicured landscaping.</p>
                </div>
                <div className="text-center mt-4">
                  <Link href="/neighborhood" className="btn btn-primary btn-lg">
                    Learn More About The Neighborhood
                  </Link>
                </div>
              </div>
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
    if (process.env.NODE_ENV === 'development') {
      console.warn(
        "NEXT_PUBLIC_DRUPAL_BASE_URL not set. Using fallback for all routes."
      )
    }
    return {
      paths: [],
      fallback: "blocking",
    }
  }

  // Try to get Drupal paths, but handle errors gracefully
  try {
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
  } catch (error) {
    // If Drupal is not available, return empty paths
    // This allows the build to continue without Drupal
    if (process.env.NODE_ENV === 'development') {
      console.warn("Drupal is not available. Using fallback for all routes.")
    }
    return {
      paths: [],
      fallback: "blocking",
    }
  }
}

export async function getStaticProps(
  context: GetStaticPropsContext
): Promise<GetStaticPropsResult<NodePageProps>> {
  const slug = context.params?.slug as string[] | undefined
  
  // Handle root route (/) - always return home page structure
  // Try Drupal first if configured, but fallback to static home page if it fails
  if (!slug || slug.length === 0) {
    // Try to get home page from Drupal if configured
    if (process.env.NEXT_PUBLIC_DRUPAL_BASE_URL) {
      try {
        const path = await drupal.translatePathFromContext(context)
        if (path && RESOURCE_TYPES.includes(path.jsonapi.resourceName)) {
          const node = await drupal.getResourceFromContext<DrupalNode>(path, context, {
            params: getParams(path.jsonapi.resourceName),
          })
          if (node && (context.preview || node?.status !== false)) {
            return {
              props: {
                node,
                menus: await getMenus(context),
              },
            }
          }
        }
      } catch (error) {
        // Drupal not available, fall through to static home page
        if (process.env.NODE_ENV === 'development') {
          console.warn("Drupal not available for homepage, using static fallback.")
        }
      }
    }
    
    // Return static home page structure (fallback or when Drupal not configured)
    try {
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
    } catch (error) {
      // If getMenus fails, return empty menus
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
          menus: {
            main: [],
            footer: [],
          },
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

  // Try to get Drupal data, but handle errors gracefully
  try {
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
  } catch (error) {
    // If Drupal is not available, return not found
    // This allows the build to continue without Drupal
    if (process.env.NODE_ENV === 'development') {
      console.warn("Drupal is not available for this route. Returning not found.")
    }
    return {
      notFound: true,
    }
  }
}
