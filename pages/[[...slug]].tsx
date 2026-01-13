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
import { FeaturedListingCard } from "components/featured-listing-card"
import { QuickSearchWidget } from "components/quick-search-widget"
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
      <div className="card-content card-price-features py-5" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10 text-center">
              <h2 className="mb-4" style={{ fontSize: '2.5rem', fontWeight: 600, lineHeight: 1.3 }}>
                Las Vegas' Premier Luxury High-Rise Community
              </h2>
              <p className="lead mb-5" style={{ fontSize: '1.25rem', lineHeight: 1.7, color: '#495057', maxWidth: '800px', margin: '0 auto' }}>
                Turnberry Place offers four luxury towers just one block from the Las Vegas Strip. Guard-gated community with exclusive access to The Stirling Club's 80,000 sq ft private facility.
              </p>
              <div className="row mt-5 justify-content-center">
                <div className="col-md-4 mb-4 mb-md-0">
                  <div className="p-4 bg-light rounded-lg h-100" style={{ transition: 'all 0.3s ease' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-4px)'
                      e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.1)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)'
                      e.currentTarget.style.boxShadow = 'none'
                    }}
                  >
                    <div className="h3 text-primary mb-2" style={{ fontSize: '2.5rem', fontWeight: 700 }}>4 Towers</div>
                    <div className="small text-muted" style={{ fontSize: '0.95rem' }}>Completed 2000-2005</div>
                  </div>
                </div>
                <div className="col-md-4 mb-4 mb-md-0">
                  <div className="p-4 bg-light rounded-lg h-100" style={{ transition: 'all 0.3s ease' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-4px)'
                      e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.1)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)'
                      e.currentTarget.style.boxShadow = 'none'
                    }}
                  >
                    <div className="h3 text-primary mb-2" style={{ fontSize: '2.5rem', fontWeight: 700 }}>$800K - $10M+</div>
                    <div className="small text-muted" style={{ fontSize: '0.95rem' }}>1-4 Bedroom Residences</div>
                  </div>
                </div>
                <div className="col-md-4 mb-4 mb-md-0">
                  <div className="p-4 bg-light rounded-lg h-100" style={{ transition: 'all 0.3s ease' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-4px)'
                      e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.1)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)'
                      e.currentTarget.style.boxShadow = 'none'
                    }}
                  >
                    <div className="h3 text-primary mb-2" style={{ fontSize: '2.5rem', fontWeight: 700 }}>1 Block</div>
                    <div className="small text-muted" style={{ fontSize: '0.95rem' }}>From Las Vegas Strip</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Work With Us Section */}
      <WhyWorkWithUs />

      {/* Towers Comparison - Bullet Points */}
      <div className="card-content card-prop-description py-5 bg-light" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <h2 className="text-center mb-5" style={{ fontSize: '2.5rem', fontWeight: 600, marginBottom: '3rem' }}>
                Four Distinct Luxury Towers
              </h2>
              <div className="row">
                <div className="col-md-6 mb-4">
                  <div className="card h-100 border-0 shadow-sm" style={{ borderRadius: '8px', transition: 'all 0.3s ease' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-4px)'
                      e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.12)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)'
                      e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)'
                    }}
                  >
                    <div className="card-body p-4">
                      <h3 className="mb-3" style={{ fontSize: '1.5rem', fontWeight: 600, color: '#333' }}>Tower 1 - Entry Level</h3>
                      <ul className="list-unstyled mb-0">
                        <li className="mb-2" style={{ fontSize: '1rem', lineHeight: 1.6 }}>
                          <span className="text-success mr-2" style={{ fontSize: '1.2rem' }}>✓</span>
                          38 stories, completed 2000
                        </li>
                        <li className="mb-2" style={{ fontSize: '1rem', lineHeight: 1.6 }}>
                          <span className="text-success mr-2" style={{ fontSize: '1.2rem' }}>✓</span>
                          Starting from $800K
                        </li>
                        <li className="mb-2" style={{ fontSize: '1rem', lineHeight: 1.6 }}>
                          <span className="text-success mr-2" style={{ fontSize: '1.2rem' }}>✓</span>
                          Excellent value proposition
                        </li>
                        <li className="mb-2" style={{ fontSize: '1rem', lineHeight: 1.6 }}>
                          <span className="text-success mr-2" style={{ fontSize: '1.2rem' }}>✓</span>
                          Private elevator access
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="card h-100 border-0 shadow-sm" style={{ borderRadius: '8px', transition: 'all 0.3s ease' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-4px)'
                      e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.12)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)'
                      e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)'
                    }}
                  >
                    <div className="card-body p-4">
                      <h3 className="mb-3" style={{ fontSize: '1.5rem', fontWeight: 600, color: '#333' }}>Tower 2 - Enhanced Features</h3>
                      <ul className="list-unstyled mb-0">
                        <li className="mb-2" style={{ fontSize: '1rem', lineHeight: 1.6 }}>
                          <span className="text-success mr-2" style={{ fontSize: '1.2rem' }}>✓</span>
                          45 stories, completed 2001
                        </li>
                        <li className="mb-2" style={{ fontSize: '1rem', lineHeight: 1.6 }}>
                          <span className="text-success mr-2" style={{ fontSize: '1.2rem' }}>✓</span>
                          Larger floor plans
                        </li>
                        <li className="mb-2" style={{ fontSize: '1rem', lineHeight: 1.6 }}>
                          <span className="text-success mr-2" style={{ fontSize: '1.2rem' }}>✓</span>
                          Floor-to-ceiling windows
                        </li>
                        <li className="mb-2" style={{ fontSize: '1rem', lineHeight: 1.6 }}>
                          <span className="text-success mr-2" style={{ fontSize: '1.2rem' }}>✓</span>
                          Premium finishes
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="card h-100 border-0 shadow-sm" style={{ borderRadius: '8px', transition: 'all 0.3s ease' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-4px)'
                      e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.12)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)'
                      e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)'
                    }}
                  >
                    <div className="card-body p-4">
                      <h3 className="mb-3" style={{ fontSize: '1.5rem', fontWeight: 600, color: '#333' }}>Tower 3 - Contemporary Design</h3>
                      <ul className="list-unstyled mb-0">
                        <li className="mb-2" style={{ fontSize: '1rem', lineHeight: 1.6 }}>
                          <span className="text-success mr-2" style={{ fontSize: '1.2rem' }}>✓</span>
                          45 stories, completed 2002
                        </li>
                        <li className="mb-2" style={{ fontSize: '1rem', lineHeight: 1.6 }}>
                          <span className="text-success mr-2" style={{ fontSize: '1.2rem' }}>✓</span>
                          Modern aesthetic
                        </li>
                        <li className="mb-2" style={{ fontSize: '1rem', lineHeight: 1.6 }}>
                          <span className="text-success mr-2" style={{ fontSize: '1.2rem' }}>✓</span>
                          Spacious terraces
                        </li>
                        <li className="mb-2" style={{ fontSize: '1rem', lineHeight: 1.6 }}>
                          <span className="text-success mr-2" style={{ fontSize: '1.2rem' }}>✓</span>
                          Panoramic views
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="card h-100 border-0 shadow-sm" style={{ borderRadius: '8px', transition: 'all 0.3s ease' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-4px)'
                      e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.12)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)'
                      e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)'
                    }}
                  >
                    <div className="card-body p-4">
                      <h3 className="mb-3" style={{ fontSize: '1.5rem', fontWeight: 600, color: '#333' }}>Tower 4 - Ultimate Luxury</h3>
                      <ul className="list-unstyled mb-0">
                        <li className="mb-2" style={{ fontSize: '1rem', lineHeight: 1.6 }}>
                          <span className="text-success mr-2" style={{ fontSize: '1.2rem' }}>✓</span>
                          45 stories, completed 2005
                        </li>
                        <li className="mb-2" style={{ fontSize: '1rem', lineHeight: 1.6 }}>
                          <span className="text-success mr-2" style={{ fontSize: '1.2rem' }}>✓</span>
                          Most refined residences
                        </li>
                        <li className="mb-2" style={{ fontSize: '1rem', lineHeight: 1.6 }}>
                          <span className="text-success mr-2" style={{ fontSize: '1.2rem' }}>✓</span>
                          Exceptional finishes
                        </li>
                        <li className="mb-2" style={{ fontSize: '1rem', lineHeight: 1.6 }}>
                          <span className="text-success mr-2" style={{ fontSize: '1.2rem' }}>✓</span>
                          Premium pricing
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center mt-5">
                <Link href="/towers" className="btn btn-primary btn-lg" style={{ 
                  padding: '0.875rem 2.5rem',
                  fontSize: '1.1rem',
                  borderRadius: '6px',
                  fontWeight: 600
                }}>
                  Learn More About Each Tower
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Amenities Section Preview */}
      <div className="card-content card-amenities py-5" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
        <div className="container pt-2">
          <div className="row align-items-center justify-content-center">
            <div className="col-12">
              <div className="pb-4 pb-sm-5 amenities-border" style={{ 
                border: '2px solid #e9ecef',
                borderRadius: '12px',
                padding: '3rem 2rem',
                backgroundColor: '#fff'
              }}>
                <div className="amenities-title mb-4">
                  <h2 className="text-center mb-4" style={{ fontSize: '2.5rem', fontWeight: 600, marginBottom: '1.5rem' }}>
                    World-Class Amenities and Lifestyle Benefits
                  </h2>
                  <p className="text-center mb-4" style={{ fontSize: '1.1rem', lineHeight: 1.7, color: '#495057', maxWidth: '900px', margin: '0 auto 2rem' }}>
                    Turnberry Place residents enjoy exclusive access to The Stirling Club, an 80,000-square-foot private membership facility that provides world-class amenities without separate membership costs. This comprehensive amenity package, combined with the development's security, location, and quality, creates exceptional value that justifies the development's premium positioning.
                  </p>
                </div>
                <div className="row pt-2 pt-sm-4">
                  {["Gated Community", "City View", "Secure Building", "Gym", "Tennis Courts", "Spa", "Swimming Pool", "Workout Room", "Mountains", "Private Patio"].map((amenity, index) => (
                    <div key={index} className="col-6 col-lg-4 py-3 d-flex align-items-center">
                      <div className="mr-3" style={{ flexShrink: 0 }}>
                        <span className="icon-custom" style={{ color: '#28a745', fontSize: '1.2rem' }}>
                          <svg height="18" width="18" aria-hidden="true" focusable="false" className="d-inline" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path fill="currentColor" d="M413.505 91.951L133.49 371.966l-98.995-98.995c-4.686-4.686-12.284-4.686-16.971 0L6.211 284.284c-4.686 4.686-4.686 12.284 0 16.971l118.794 118.794c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-11.314-11.314c-4.686-4.686-12.284-4.686-16.97 0z"/>
                          </svg>
                        </span>
                      </div>
                      <span className="amenity-name" style={{ fontSize: '1rem', fontWeight: 500, color: '#333' }}>{amenity}</span>
                    </div>
                  ))}
                </div>
                <div className="text-center mt-4 pt-3" style={{ borderTop: '1px solid #e9ecef' }}>
                  <Link href="/amenities" className="btn btn-outline-primary btn-lg" style={{ 
                    padding: '0.875rem 2rem',
                    fontSize: '1rem',
                    borderRadius: '6px',
                    fontWeight: 600
                  }}>
                    View All Amenities
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Photos Section Preview */}
      <div className="card-content card-photos py-5" style={{ paddingTop: '4rem', paddingBottom: '4rem', backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="text-center mb-4" style={{ fontSize: '2.5rem', fontWeight: 600, marginBottom: '1rem' }}>
                Photo Gallery
              </h2>
              <div className="text-center mb-4">
                <Link href="/photos" className="btn btn-outline-primary" style={{ 
                  padding: '0.75rem 1.5rem',
                  fontSize: '1rem',
                  borderRadius: '6px',
                  fontWeight: 500
                }}>
                  Launch Slideshow Viewer
                  <svg height="16" width="16" className="ml-2 d-inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" style={{ verticalAlign: 'middle' }}>
                    <path fill="currentColor" d="M195.515 374.828c-4.686-4.686-4.686-12.284 0-16.971l323.15-323.15-.707-.707-89.958.342c-6.627 0-12-5.373-12-12v-9.999c0-6.628 5.372-12 12-12L564 0c6.627 0 12 5.372 12 12l-.343 136c0 6.627-5.373 12-12 12h-9.999c-6.627 0-12-5.373-12-12L542 58.042l-.707-.707-323.15 323.15c-4.686 4.686-12.284 4.686-16.971 0l-5.657-5.657zm232-155.633l-8 8A12 12 0 0 0 416 235.68V464c0 8.837-7.164 16-16 16H48c-8.836 0-16-7.163-16-16V112c0-8.837 7.164-16 16-16h339.976c3.183 0 6.235-1.264 8.485-3.515l8-8c7.56-7.56 2.206-20.485-8.485-20.485H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V227.681c0-10.691-12.926-16.045-20.485-8.486z"/>
                  </svg>
                </Link>
              </div>
              <div className="row mt-4">
                {heroPhotos.slice(0, 4).map((photo, index) => (
                  <div key={index} className="col-6 col-md-3 mb-4">
                    <div className="card border-0 shadow-sm overflow-hidden" style={{ 
                      borderRadius: '8px',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-4px)'
                      e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.15)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)'
                      e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)'
                    }}
                    >
                      <a className="d-block" href={photo} title="Turnberry Place Las Vegas, Las Vegas, NV">
                        <div style={{ position: 'relative', paddingTop: '75%', overflow: 'hidden' }}>
                          <Image
                            src={photo.replace('width=1600,height=1200', 'width=600')}
                            width={600}
                            height={450}
                            alt="Turnberry Place Las Vegas, Las Vegas, NV"
                            className="img-fluid"
                            style={{ 
                              position: 'absolute',
                              top: 0,
                              left: 0,
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover',
                              transition: 'transform 0.3s ease'
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.transform = 'scale(1.1)'
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.transform = 'scale(1)'
                            }}
                          />
                        </div>
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
            <div className="col-12 col-sm-11 col-md-10 col-lg-9 col-xl-7 text-center py-5 px-0">
              <div className="open-house-box p-4 p-md-5 shadow-lg" style={{
                backgroundColor: 'rgba(255,255,255,0.98)',
                borderRadius: '12px',
                backdropFilter: 'blur(10px)'
              }}>
                <h2 className="mb-3" style={{ 
                  fontSize: '2.25rem', 
                  fontWeight: 600, 
                  color: '#333',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  Private Showings Available
                </h2>
                <p className="h4 mb-4" style={{ 
                  fontSize: '1.75rem',
                  color: '#28a745',
                  fontWeight: 700,
                  marginBottom: '1.5rem'
                }}>
                  7 Days a Week
                </p>
                <p className="mb-4" style={{ 
                  fontSize: '1.1rem',
                  lineHeight: 1.7,
                  color: '#495057',
                  marginBottom: '2rem'
                }}>
                  Schedule your personalized tour of Turnberry Place luxury condos today. Experience the quality, amenities, and lifestyle firsthand.
                </p>
                <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                  <a 
                    href="tel:7022221988" 
                    className="btn btn-warning btn-lg font-weight-bold" 
                    title="Call or text 702-222-1988"
                    style={{
                      padding: '1rem 2.5rem',
                      fontSize: '1.1rem',
                      borderRadius: '6px',
                      fontWeight: 600,
                      boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)'
                      e.currentTarget.style.boxShadow = '0 6px 16px rgba(0,0,0,0.3)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)'
                      e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)'
                    }}
                  >
                    Call/Text (702) 222-1988
                  </a>
                  <Link 
                    href="/request-details" 
                    className="btn btn-outline-primary btn-lg font-weight-bold" 
                    title="Request Showing"
                    style={{
                      padding: '1rem 2.5rem',
                      fontSize: '1.1rem',
                      borderRadius: '6px',
                      fontWeight: 600,
                      borderWidth: '2px',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)'
                      e.currentTarget.style.backgroundColor = '#007bff'
                      e.currentTarget.style.color = '#fff'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)'
                      e.currentTarget.style.backgroundColor = 'transparent'
                      e.currentTarget.style.color = '#007bff'
                    }}
                  >
                    Request Showing
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Search Widget */}
      <div className="card-content py-5 bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8">
              <QuickSearchWidget />
            </div>
          </div>
        </div>
      </div>

      {/* Featured Listings Section */}
      <div className="card-content py-5 bg-white">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="text-center mb-2">Featured Listings</h2>
              <p className="text-center mb-5 text-muted">Explore our featured luxury condos at Turnberry Place</p>
              <div className="row">
                <div className="col-md-6 col-lg-3 mb-4">
                  <FeaturedListingCard
                    image="https://photos.cribflyer-proxy.com/cdn-cgi/image/width=800,height=600,fit=crop,rotate=0,format=auto,quality=85/4616/60013/2953237/photo.jpg"
                    title="Tower 2, Unit 1501"
                    price="$1,250,000"
                    beds={2}
                    baths={2}
                    sqft={1850}
                    views="Strip Views"
                    tower="Tower 2"
                    unit="Unit 1501"
                    featured={true}
                  />
                </div>
                <div className="col-md-6 col-lg-3 mb-4">
                  <FeaturedListingCard
                    image="https://photos.cribflyer-proxy.com/cdn-cgi/image/width=800,height=600,fit=crop,rotate=0,format=auto,quality=85/4616/60013/2953238/photo.jpg"
                    title="Tower 3, Unit 2205"
                    price="$2,100,000"
                    beds={3}
                    baths={3}
                    sqft={2400}
                    views="Mountain Views"
                    tower="Tower 3"
                    unit="Unit 2205"
                  />
                </div>
                <div className="col-md-6 col-lg-3 mb-4">
                  <FeaturedListingCard
                    image="https://photos.cribflyer-proxy.com/cdn-cgi/image/width=800,height=600,fit=crop,rotate=0,format=auto,quality=85/4616/60013/2953240/photo.jpg"
                    title="Tower 4, Unit 3501"
                    price="$4,500,000"
                    beds={4}
                    baths={4}
                    sqft={3800}
                    views="Panoramic Views"
                    tower="Tower 4"
                    unit="Unit 3501"
                    featured={true}
                  />
                </div>
                <div className="col-md-6 col-lg-3 mb-4">
                  <FeaturedListingCard
                    image="https://photos.cribflyer-proxy.com/cdn-cgi/image/width=800,height=600,fit=crop,rotate=0,format=auto,quality=85/4616/60013/2953239/photo.jpg"
                    title="Tower 1, Unit 1203"
                    price="$950,000"
                    beds={1}
                    baths={1}
                    sqft={1350}
                    views="City Views"
                    tower="Tower 1"
                    unit="Unit 1203"
                  />
                </div>
              </div>
              <div className="text-center mt-5">
                <Link href="/available-condos" className="btn btn-primary btn-lg" style={{ 
                  padding: '0.875rem 2.5rem',
                  fontSize: '1.1rem',
                  borderRadius: '6px',
                  fontWeight: 600
                }}>
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
      <div className="card-content py-5 bg-light" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
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
                        src="https://assets.cribflyer-proxy.com/cdn-cgi/image/width=500,fit=contain,rotate=0,format=auto,quality=100/4616/2/2953539/asset.jpg"
                        alt="Dr. Jan Duffy, Las Vegas real estate expert specializing in Turnberry Place luxury condos"
                        width={225}
                        height={225}
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
