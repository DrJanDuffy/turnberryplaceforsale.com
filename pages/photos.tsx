import { GetStaticPropsResult } from "next"
import Head from "next/head"
import { Layout, LayoutProps } from "components/layout"
import { PhotoGallery } from "components/photo-gallery"
import { getMenus } from "lib/get-menus"
import { Meta } from "components/meta"

// Photos downloaded from live site
const photos = [
  "/images/turnberry/photo-2.jpg",
  "/images/turnberry/photo-3.jpg",
  "/images/turnberry/photo-4.jpg",
  "/images/turnberry/photo-5.jpg",
  "/images/turnberry/photo-6.jpg",
  "/images/turnberry/photo-7.jpg",
  "/images/turnberry/photo-8.jpg",
  "/images/turnberry/photo-9.jpg",
  "/images/turnberry/photo-21.jpg",
  "/images/turnberry/photo-22.jpg",
]

interface PhotosPageProps extends LayoutProps {}

export default function PhotosPage({ menus }: PhotosPageProps) {
  return (
    <Layout menus={menus}>
      <Meta title="Photo Gallery - Turnberry Place Las Vegas" />
      <Head>
        <title>Photo Gallery - Turnberry Place Las Vegas</title>
      </Head>
      <PhotoGallery photos={photos} title="Photo Gallery" />
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
