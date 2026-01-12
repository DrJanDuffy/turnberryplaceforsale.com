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

  return (
    <Head>
      <link
        key="canonical_link"
        rel="canonical"
        href={`${process.env.NEXT_PUBLIC_BASE_URL}${
          router.asPath !== "/" ? router.asPath : ""
        }`}
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
          <title>{title || "Turnberry Place Las Vegas | Luxury High-Rise Condos For Sale"}</title>
          <meta
            key="description"
            name="description"
            content="Discover luxury high-rise condos for sale at Turnberry Place Las Vegas. Featuring 1-4 bedroom residences with Strip views, & exclusive Stirling Club"
          />
          <meta
            key="og_title"
            property="og:title"
            content="Turnberry Place Las Vegas | Luxury High-Rise Condos For Sale"
          />
          <meta
            key="og_description"
            property="og:description"
            content="Discover luxury high-rise condos for sale at Turnberry Place Las Vegas. Featuring 1-4 bedroom residences with Strip views, & exclusive Stirling Club"
          />
          <meta
            key="og_url"
            property="og:url"
            content={process.env.NEXT_PUBLIC_BASE_URL || "https://www.turnberryplaceforsale.com"}
          />
          <meta
            key="og_type"
            property="og:type"
            content="website"
          />
          <meta
            key="og_image"
            property="og:image"
            content="https://photos.cribflyer-proxy.com/cdn-cgi/image/width=1200,height=630,fit=crop,rotate=0,format=auto,quality=85/4616/60013/2953237/photo.jpg"
          />
          <meta
            key="twitter_card"
            name="twitter:card"
            content="summary_large_image"
          />
          <meta
            key="twitter_title"
            name="twitter:title"
            content="Discover luxury high-rise condos for sale at Turnberry Place Las Vegas. Featuring 1-4 bedroom residences with Strip views, & exclusive Stirling Club"
          />
          <meta
            key="twitter_description"
            name="twitter:description"
            content="Discover luxury high-rise condos for sale at Turnberry Place Las Vegas. Featuring 1-4 bedroom residences with Strip views, & exclusive Stirling Club"
          />
          <meta
            key="twitter_image"
            name="twitter:image"
            content="https://photos.cribflyer-proxy.com/cdn-cgi/image/width=1200,height=630,fit=crop,rotate=0,format=auto,quality=85/4616/60013/2953237/photo.jpg"
          />
          <meta key="og_image_width" property="og:image:width" content="800" />
          <meta
            key="og_image_height"
            property="og:image:height"
            content="600"
          />
        </>
      )}
    </Head>
  )
}
