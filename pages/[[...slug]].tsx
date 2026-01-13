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
      
      {/* Property Address Section */}
      <div className="card-content py-4 bg-white">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 text-center">
              <h1 className="homepage-section mb-2" style={{ fontSize: '2.5rem', fontWeight: 600 }}>
                Turnberry Place Las Vegas
              </h1>
              <p className="lead mb-0" style={{ fontSize: '1.25rem', color: '#666' }}>
                Las Vegas, NV 89109
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Price Range Section */}
      <div className="card-content py-4 bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 text-center">
              <h2 className="homepage-section mb-0" style={{ fontSize: '2rem', fontWeight: 600 }}>
                4 Luxury Towers from $800,000 to $10M+
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* Main Heading Section */}
      <div className="card-content py-5 bg-white">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10 text-center">
              <h2 className="homepage-section" style={{ fontSize: '2.5rem', fontWeight: 600 }}>
                Turnberry Place | Las Vegas' Premier High-Rise Community
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* Tower Sections - Matching Live Site */}
      <div className="card-content card-prop-description bg-white">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <div className="content-section">
                <h2 className="homepage-section" style={{ fontSize: '2rem', fontWeight: 600, marginBottom: '2rem' }}>
                  Tower 1 - Elegant High-Rise Living
                </h2>
                <p className="homepage-lead" style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                  Turnberry Place Tower 1 represents the inaugural vision of luxury high-rise living, offering spacious residences with stunning views of the Las Vegas Strip and mountains. Completed in 2000, this 38-story tower features private elevator access, 24-hour security, and direct access to The Stirling Club's world-class amenities.
                </p>
              </div>

              <div className="content-section">
                <h2 className="homepage-section" style={{ fontSize: '2rem', fontWeight: 600, marginBottom: '2rem' }}>
                  Tower 2 - Sophisticated Strip Views
                </h2>
                <p className="homepage-lead" style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                  Rising 45 stories, Tower 2 delivers breathtaking views and refined luxury living. Built in 2001, this tower showcases larger floor plans, floor-to-ceiling windows, and premium finishes throughout. Residents enjoy private balconies, concierge services, and exclusive access to The Stirling Club's resort-style amenities.
                </p>
              </div>

              <div className="content-section">
                <h2 className="homepage-section" style={{ fontSize: '2rem', fontWeight: 600, marginBottom: '2rem' }}>
                  Tower 3 - Premium Desert Living
                </h2>
                <p className="homepage-lead" style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                  The third tower of Turnberry Place stands 45 stories tall, offering contemporary luxury residences with panoramic views. Completed in 2002, Tower 3 features modern designs, spacious terraces, and sophisticated interior finishes. Residents experience the perfect blend of privacy and resort-style living.
                </p>
              </div>

              <div className="content-section">
                <h2 className="homepage-section" style={{ fontSize: '2rem', fontWeight: 600, marginBottom: '2rem' }}>
                  Tower 4 - Ultimate Luxury Living
                </h2>
                <p className="homepage-lead" style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                  As the crown jewel of Turnberry Place, Tower 4 represents the pinnacle of luxury high-rise living. This 45-story masterpiece, completed in 2005, offers the most refined residences with unparalleled views, premium amenities, and exceptional finishes. Residents enjoy the finest in desert living with full access to The Stirling Club.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Amenities Section Preview */}
      <div className="card-content card-amenities">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <div className="amenities-border">
                <div className="amenities-title">
                  <h2 className="text-center homepage-section">
                    World-Class Amenities and Lifestyle Benefits
                  </h2>
                  <p className="text-center homepage-lead">
                    Turnberry Place residents enjoy exclusive access to The Stirling Club, an 80,000-square-foot private membership facility that provides world-class amenities without separate membership costs. This comprehensive amenity package, combined with the development's security, location, and quality, creates exceptional value that justifies the development's premium positioning.
                  </p>
                </div>
                <div className="row pt-2 pt-sm-4">
                  {["Gated Community", "City View", "Secure Building", "Gym", "Tennis Courts", "Spa", "Swimming Pool", "Workout Room", "Mountains", "Private Patio"].map((amenity, index) => (
                    <div key={index} className="col-6 col-lg-4 py-3 amenity-item">
                      <span className="amenity-icon">
                        <svg height="18" width="18" aria-hidden="true" focusable="false" className="d-inline" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                          <path fill="currentColor" d="M413.505 91.951L133.49 371.966l-98.995-98.995c-4.686-4.686-12.284-4.686-16.971 0L6.211 284.284c-4.686 4.686-4.686 12.284 0 16.971l118.794 118.794c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-11.314-11.314c-4.686-4.686-12.284-4.686-16.97 0z"/>
                        </svg>
                      </span>
                      <span className="amenity-name">{amenity}</span>
                    </div>
                  ))}
                </div>
                <div className="text-center mt-4 pt-3" style={{ borderTop: '1px solid #e9ecef' }}>
                  <Link href="/amenities" className="btn btn-outline-primary btn-lg">
                    View All Amenities
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Open House Section - Matching Live Site */}
      <div className="card-content py-5 bg-white">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8 text-center">
              <h2 className="homepage-section mb-3" style={{ fontSize: '2rem', fontWeight: 600 }}>
                Please join us for an
              </h2>
              <h3 className="mb-4" style={{ fontSize: '1.75rem', fontWeight: 600 }}>
                Open House
              </h3>
              <p className="lead mb-4" style={{ fontSize: '1.25rem' }}>
                No open houses scheduled
              </p>
              <Link href="/request-details" className="btn btn-primary btn-lg">
                Request Showing
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div
        className="card-content card-contact-form py-5"
        style={{
          backgroundImage: "url(/images/turnberry/Las-Vegas-High-Rise-Condo-Living-Downtown-Las-Vegas-Turnberry-Place-Interior.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "cover",
          position: 'relative',
          paddingTop: '5rem',
          paddingBottom: '5rem'
        }}
      >
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
          zIndex: 1
        }}></div>
        <div className="container-fluid position-relative" style={{ zIndex: 2 }}>
          <div className="row align-items-center justify-content-center">
            <div className="col-12 col-sm-10 col-md-8 col-lg-7 col-xl-6 text-center px-sm-2">
              <div className="contact-form-box p-4 p-md-5 shadow-lg" style={{
                backgroundColor: 'rgba(255,255,255,0.98)',
                borderRadius: '12px',
                backdropFilter: 'blur(10px)'
              }}>
                <div className="mt-0 mt-md-2 mb-4 d-flex align-items-center justify-content-center">
                  <div className="w-10 horiz-line d-none d-sm-block" style={{ height: '2px', backgroundColor: '#007bff' }}></div>
                  <h2 className="my-0 mx-3" id="contact-label" style={{ 
                    fontSize: '2rem',
                    fontWeight: 600,
                    color: '#333'
                  }}>
                    Turnberry Place Request Pricing & Details
                  </h2>
                  <div className="w-10 horiz-line d-none d-sm-block" style={{ height: '2px', backgroundColor: '#007bff' }}></div>
                </div>
                <ContactForm title="Turnberry Place Request Pricing & Details" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Agent Section */}
      <div className="card-content card-agent py-5" style={{ paddingTop: '4rem', paddingBottom: '4rem', backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <div className="card border-0 shadow-lg" style={{ borderRadius: '12px', overflow: 'hidden' }}>
                <div className="card-body p-4 p-md-5">
                  <div className="row align-items-center">
                    <div className="col-12 col-md-4 text-center mb-4 mb-md-0">
                      <Image
                        className="img-fluid agent-photo rounded-circle"
                        src="/images/turnberry/asset-1.jpg"
                        alt="Dr. Jan Duffy, Las Vegas real estate expert specializing in Turnberry Place luxury condos"
                        width={225}
                        height={225}
                        loading="lazy"
                        style={{
                          border: '4px solid #007bff',
                          boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
                        }}
                      />
                    </div>
                    <div className="col-12 col-md-8 text-center text-md-left">
                      <h2 className="mb-3" style={{ fontSize: '2.25rem', fontWeight: 600, color: '#333' }}>
                        Dr. Jan Duffy, REALTOR
                      </h2>
                      <p className="mb-3" style={{ fontSize: '1.1rem', color: '#495057', lineHeight: 1.6 }}>
                        The Turnberry Place Team at Berkshire Hathaway HomeServices Nevada Properties
                      </p>
                      <p className="mb-4 small text-muted">
                        License: S.0197614.LLC
                      </p>
                      <div className="d-flex flex-column flex-md-row align-items-center justify-content-md-start gap-3">
                        <div>
                          <span className="font-weight-bold">Call/Text:</span>{" "}
                          <a 
                            href="tel:7022221988" 
                            title="Call or text Dr. Jan Duffy"
                            style={{
                              fontSize: '1.25rem',
                              fontWeight: 600,
                              color: '#007bff',
                              textDecoration: 'none'
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.textDecoration = 'underline'
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.textDecoration = 'none'
                            }}
                          >
                            (702) 222-1988
                          </a>
                        </div>
                        <div>
                          <span className="font-weight-bold">Office:</span>{" "}
                          <a 
                            href="tel:7025001955" 
                            title="Berkshire Hathaway office"
                            style={{
                              fontSize: '1.1rem',
                              color: '#007bff',
                              textDecoration: 'none'
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.textDecoration = 'underline'
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.textDecoration = 'none'
                            }}
                          >
                            (702) 500-1955
                          </a>
                        </div>
                      </div>
                      <div className="mt-4">
                        <Link 
                          href="/agent" 
                          className="btn btn-primary"
                          title="View Dr. Jan Duffy's bio"
                          style={{
                            padding: '0.75rem 1.5rem',
                            fontSize: '1rem',
                            borderRadius: '6px',
                            fontWeight: 600,
                            transition: 'all 0.3s ease'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-2px)'
                            e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,123,255,0.3)'
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)'
                            e.currentTarget.style.boxShadow = 'none'
                          }}
                        >
                          View Full Profile
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Available Las Vegas Condos Section */}
      <div className="card-content py-5 bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10 text-center">
              <h2 className="homepage-section mb-4" style={{ fontSize: '2rem', fontWeight: 600 }}>
                Available Las Vegas Condos
              </h2>
              <Link href="/available-condos" className="btn btn-primary btn-lg">
                View All Available Condos
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Floor Plans Section */}
      <div className="card-content py-5 bg-white">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10 text-center">
              <h2 className="homepage-section mb-4" style={{ fontSize: '2rem', fontWeight: 600 }}>
                Floor Plans
              </h2>
              <Link href="/floor-plans" className="btn btn-primary btn-lg">
                View All Floor Plans
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Share Section */}
      <div className="card-content py-5 bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10 text-center">
              <h2 className="homepage-section mb-4" style={{ fontSize: '2rem', fontWeight: 600 }}>
                Share this property
              </h2>
              <Link href="/share" className="btn btn-primary btn-lg">
                Share Turnberry Place
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* The Stirling Club Section */}
      <div className="card-content py-5 bg-white">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <h2 className="homepage-section mb-3" style={{ fontSize: '2rem', fontWeight: 600 }}>
                The Stirling Club
              </h2>
              <h3 className="mb-4" style={{ fontSize: '1.5rem', fontWeight: 500 }}>
                Exclusive Luxury at Your Doorstep
              </h3>
              <p className="homepage-lead mb-4" style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                The crown jewel of Turnberry Place is the recently renovated Stirling Club, an 80,000 square foot private club offering world-class amenities exclusively to residents. This luxurious facility includes:
              </p>
              <ul className="list-unstyled mb-4" style={{ fontSize: '1.1rem', lineHeight: 2 }}>
                <li>• State-of-the-art fitness center</li>
                <li>• Resort-style swimming pools (both indoor and outdoor)</li>
                <li>• Tennis courts</li>
                <li>• Spa and beauty services center</li>
                <li>• Multiple dining venues and bars</li>
                <li>• Business center with conference rooms</li>
                <li>• Various lounges for socializing and relaxation</li>
              </ul>
              <p className="homepage-lead" style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                The Stirling Club serves as the social and recreational hub of the Turnberry Place community, providing residents with a private oasis of luxury and convenience. Its extensive offerings contribute significantly to the upscale lifestyle that defines Turnberry Place, making it a central feature that distinguishes this development from other luxury condominiums in Las Vegas
              </p>
              <div className="text-center mt-4">
                <Link href="/stirling-club" className="btn btn-primary btn-lg">
                  Learn More About The Stirling Club
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Turnberry Place Neighborhood Section */}
      <div className="card-content py-5 bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <h2 className="homepage-section mb-4" style={{ fontSize: '2rem', fontWeight: 600 }}>
                Turnberry Place Neighborhood and Area Profile
              </h2>
              <p className="homepage-lead mb-4" style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                Turnberry Place stands as a pinnacle of luxury living in Las Vegas, offering an unparalleled blend of privacy, convenience, and access to world-class amenities. Situated just one block east of the Las Vegas Strip between the Wynn Encore and Sahara resorts, this guard-gated, four-tower condominium complex redefines upscale urban living with its strategic location and meticulously curated environment. Residents enjoy immediate proximity to the Entertainment Capital of the World while residing in a serene, tropical-inspired oasis adorned with lush palm trees and manicured landscaping.
              </p>
              <div className="text-center mt-4">
                <Link href="/neighborhood" className="btn btn-primary btn-lg">
                  Learn More About The Neighborhood
                </Link>
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
