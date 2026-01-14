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
          <title>{title || "Turnberry Place Las Vegas Condos For Sale | $800K-$10M+ | Dr. Jan Duffy"}</title>
          <meta
            key="description"
            name="description"
            content="Search Turnberry Place luxury high-rise condos near Las Vegas Strip. 4 towers, Stirling Club amenities, 24/7 security. Current listings from $800K-$10M+. Call 702-500-1971"
          />
          <meta
            key="og_title"
            property="og:title"
            content={title || "Turnberry Place Las Vegas Condos For Sale | $800K-$10M+ | Dr. Jan Duffy"}
          />
          <meta
            key="og_description"
            property="og:description"
            content="Search Turnberry Place luxury high-rise condos near Las Vegas Strip. 4 towers, Stirling Club amenities, 24/7 security. Current listings from $800K-$10M+. Call 702-500-1971"
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
            content="Turnberry Place Las Vegas"
          />
          <meta
            key="og_image"
            property="og:image"
            content="https://www.turnberryplaceforsale.com/images/turnberry/Turnberry_Place_For_Sale.jpg"
          />
          <meta
            key="og_image_alt"
            property="og:image:alt"
            content="Turnberry Place Las Vegas luxury high-rise condominiums with Strip views"
          />
          <meta key="og_image_width" property="og:image:width" content="1200" />
          <meta
            key="og_image_height"
            property="og:image:height"
            content="630"
          />
          <meta
            key="twitter_card"
            name="twitter:card"
            content="summary_large_image"
          />
          <meta
            key="twitter_title"
            name="twitter:title"
            content={title || "Turnberry Place Las Vegas Condos For Sale | $800K-$10M+ | Dr. Jan Duffy"}
          />
          <meta
            key="twitter_description"
            name="twitter:description"
            content="Search Turnberry Place luxury high-rise condos near Las Vegas Strip. 4 towers, Stirling Club amenities, 24/7 security. Current listings from $800K-$10M+. Call 702-500-1971"
          />
          <meta
            key="twitter_image"
            name="twitter:image"
            content="https://www.turnberryplaceforsale.com/images/turnberry/Turnberry_Place_For_Sale.jpg"
          />
          <meta
            key="twitter_image_alt"
            name="twitter:image:alt"
            content="Turnberry Place Las Vegas luxury high-rise condominiums with Strip views"
          />
        </>
      )}
    </Head>
  )
}
