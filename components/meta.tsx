import React from "react"
import Head from "next/head"
import { useRouter } from "next/router"
import { DrupalMetatag } from "types/drupal"

interface MetaProps {
  title?: string
  path?: string
  tags?: DrupalMetatag[]
}

export function Meta({ title, tags }: MetaProps) {
  const router = useRouter()

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://www.turnberryplaceforsale.com"
  const canonicalUrl = `${baseUrl}${router.asPath !== "/" ? router.asPath : ""}`

  return (
    <Head>
      <link
        key="canonical_link"
        rel="canonical"
        href={canonicalUrl}
      />
      {tags?.length ? (
        tags.map((tag, index) => {
          if (tag.attributes.rel === "canonical") {
            return null
          }

          if (tag.attributes.name === "title") {
            return (
              <title key={tag.attributes.name}>{tag.attributes.content}</title>
            )
          }
          const Tag = tag.tag as keyof React.JSX.IntrinsicElements
          return <Tag key={index} {...tag.attributes}></Tag>
        })
      ) : (
        <>
          {/* Primary SEO Title - Optimized for Luxury Real Estate */}
          <title>{title || "Luxury Real Estate Las Vegas | Turnberry Place For Sale | $800K-$10M+ | Dr. Jan Duffy"}</title>
          
          {/* Enhanced Meta Description with Luxury Keywords */}
          <meta
            key="description"
            name="description"
            content="Luxury Real Estate Las Vegas: Turnberry Place high-rise condos for sale. 4 luxury towers, Stirling Club amenities, 24/7 security. Current listings $800K-$10M+. Near Las Vegas Strip. Expert agent Dr. Jan Duffy. Call 702-500-1971"
          />
          
          {/* Keywords for Luxury Real Estate */}
          <meta
            key="keywords"
            name="keywords"
            content="luxury real estate Las Vegas, Turnberry Place for sale, luxury condos Las Vegas, high-rise condos Las Vegas, luxury real estate agent Las Vegas, Las Vegas Strip condos, luxury homes Las Vegas, Turnberry Place condos, luxury high-rise Las Vegas, Dr. Jan Duffy realtor"
          />
          
          {/* Open Graph Tags - Optimized for Social Sharing */}
          <meta
            key="og_title"
            property="og:title"
            content={title || "Luxury Real Estate Las Vegas | Turnberry Place For Sale | $800K-$10M+"}
          />
          <meta
            key="og_description"
            property="og:description"
            content="Discover Turnberry Place: Las Vegas' premier luxury high-rise condominium community. 4 towers, exclusive Stirling Club access, Strip views. Listings from $800K-$10M+. Expert representation by Dr. Jan Duffy."
          />
          <meta
            key="og_url"
            property="og:url"
            content={canonicalUrl}
          />
          <meta
            key="og_type"
            property="og:type"
            content="website"
          />
          <meta
            key="og_site_name"
            property="og:site_name"
            content="Turnberry Place Las Vegas | Luxury Real Estate"
          />
          {/* High-Quality Social Sharing Image */}
          <meta
            key="og_image"
            property="og:image"
            content="https://www.turnberryplaceforsale.com/images/turnberry/Turnberry_Place_For_Sale.jpg"
          />
          <meta
            key="og_image_alt"
            property="og:image:alt"
            content="Turnberry Place Las Vegas - Luxury High-Rise Condominiums with Panoramic Strip Views"
          />
          <meta key="og_image_width" property="og:image:width" content="1200" />
          <meta
            key="og_image_height"
            property="og:image:height"
            content="630"
          />
          <meta
            key="og_image_type"
            property="og:image:type"
            content="image/jpeg"
          />
          <meta
            key="og_locale"
            property="og:locale"
            content="en_US"
          />
          
          {/* Twitter Card Tags - Optimized */}
          <meta
            key="twitter_card"
            name="twitter:card"
            content="summary_large_image"
          />
          <meta
            key="twitter_title"
            name="twitter:title"
            content={title || "Luxury Real Estate Las Vegas | Turnberry Place For Sale"}
          />
          <meta
            key="twitter_description"
            name="twitter:description"
            content="Turnberry Place: Las Vegas' premier luxury high-rise condos. 4 towers, Stirling Club, Strip views. $800K-$10M+. Expert agent Dr. Jan Duffy."
          />
          <meta
            key="twitter_image"
            name="twitter:image"
            content="https://www.turnberryplaceforsale.com/images/turnberry/Turnberry_Place_For_Sale.jpg"
          />
          <meta
            key="twitter_image_alt"
            name="twitter:image:alt"
            content="Turnberry Place Las Vegas Luxury Condominiums"
          />
          <meta
            key="twitter_site"
            name="twitter:site"
            content="@TurnberryPlaceLV"
          />
        </>
      )}
    </Head>
  )
}
