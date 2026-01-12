import * as React from "react"
import {
  GetStaticPathsContext,
  GetStaticPathsResult,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from "next"
import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"
import { DrupalNode } from "next-drupal"

import { drupal } from "lib/drupal"
import { getMenus } from "lib/get-menus"
import { absoluteURL } from "lib/utils/absolute-url"
import { getParams } from "lib/get-params"
import { Node } from "components/node"
import { Layout, LayoutProps } from "components/layout"
import { Meta } from "components/meta"
import { ContactForm } from "components/contact-form"
import { TowerSection } from "components/tower-section"
import { HeroSlideshow } from "components/hero-slideshow"

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
        </Head>
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
    "/images/turnberry/photo-2.jpg",
    "/images/turnberry/photo-3.jpg",
    "/images/turnberry/photo-4.jpg",
    "/images/turnberry/photo-5.jpg",
  ]

  return (
    <>
      {/* Hero Section with Slideshow */}
      <HeroSlideshow photos={heroPhotos} />

      {/* Main Content */}
      <section className="py-12 md:py-20">
        <div className="container px-6 mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-4 md:text-5xl">
            Turnberry Place | Las Vegas' Premier High-Rise Community
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Las Vegas, NV 89109
          </p>
        </div>
      </section>

      {/* Tower Sections */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container px-6 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 md:text-4xl">
            4 Luxury Towers
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <TowerSection
              tower={{
                number: 1,
                title: "Tower 1 - Elegant High-Rise Living",
                description: "Turnberry Place Tower 1 represents the inaugural vision of luxury high-rise living, offering spacious residences with stunning views of the Las Vegas Strip and mountains. Completed in 2000, this 38-story tower features private elevator access, 24-hour security, and direct access to The Stirling Club's world-class amenities.",
                features: [
                  "Private elevator access",
                  "24-hour security",
                  "Direct access to The Stirling Club",
                  "Stunning Strip and mountain views",
                ],
                year: 2000,
                stories: 38,
              }}
            />
            <TowerSection
              tower={{
                number: 2,
                title: "Tower 2 - Sophisticated Strip Views",
                description: "Rising 45 stories, Tower 2 delivers breathtaking views and refined luxury living. Built in 2001, this tower showcases larger floor plans, floor-to-ceiling windows, and premium finishes throughout. Residents enjoy private balconies, concierge services, and exclusive access to The Stirling Club's resort-style amenities.",
                features: [
                  "Larger floor plans",
                  "Floor-to-ceiling windows",
                  "Private balconies",
                  "Concierge services",
                ],
                year: 2001,
                stories: 45,
              }}
            />
            <TowerSection
              tower={{
                number: 3,
                title: "Tower 3 - Premium Desert Living",
                description: "The third tower of Turnberry Place stands 45 stories tall, offering contemporary luxury residences with panoramic views. Completed in 2002, Tower 3 features modern designs, spacious terraces, and sophisticated interior finishes. Residents experience the perfect blend of privacy and resort-style living.",
                features: [
                  "Contemporary designs",
                  "Spacious terraces",
                  "Sophisticated finishes",
                  "Panoramic views",
                ],
                year: 2002,
                stories: 45,
              }}
            />
            <TowerSection
              tower={{
                number: 4,
                title: "Tower 4 - Ultimate Luxury Living",
                description: "As the crown jewel of Turnberry Place, Tower 4 represents the pinnacle of luxury high-rise living. This 45-story masterpiece, completed in 2005, offers the most refined residences with unparalleled views, premium amenities, and exceptional finishes. Residents enjoy the finest in desert living with full access to The Stirling Club.",
                features: [
                  "Most refined residences",
                  "Unparalleled views",
                  "Premium amenities",
                  "Exceptional finishes",
                ],
                year: 2005,
                stories: 45,
              }}
            />
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container px-6 mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Link href="/towers">
              <a className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-2">4 Luxury Towers</h3>
                <p className="text-gray-600">Explore our elegant high-rise residences</p>
              </a>
            </Link>
            <Link href="/amenities">
              <a className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-2">World-Class Amenities</h3>
                <p className="text-gray-600">The Stirling Club and more</p>
              </a>
            </Link>
            <Link href="/photos">
              <a className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-2">Photo Gallery</h3>
                <p className="text-gray-600">View our luxury residences</p>
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />
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
