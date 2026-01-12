import { GetStaticPropsResult } from "next"
import Head from "next/head"
import { Layout, LayoutProps } from "components/layout"
import { PhotoGallery } from "components/photo-gallery"
import { getMenus } from "lib/get-menus"
import { Meta } from "components/meta"

// Placeholder photos - these would come from Drupal in production
const photos = [
  "/images/turnberry-1.jpg",
  "/images/turnberry-2.jpg",
  "/images/turnberry-3.jpg",
  "/images/turnberry-4.jpg",
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
