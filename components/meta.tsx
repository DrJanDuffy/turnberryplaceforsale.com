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
          <title>{`${title} | Turnberry Place Las Vegas`}</title>
          <meta
            key="description"
            name="description"
            content="Luxury high-rise condos for sale in Las Vegas. Built with Next.js, powered by Drupal, developed with Cursor AI, and deployed on Vercel."
          />
          <meta
            key="og_image"
            property="og:image"
            content={`${process.env.NEXT_PUBLIC_BASE_URL}/images/meta.jpg`}
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
