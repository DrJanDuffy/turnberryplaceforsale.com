import { GetStaticPropsResult } from "next"
import Head from "next/head"
import { Layout, LayoutProps } from "components/layout"
import { TowerSection } from "components/tower-section"
import { getMenus } from "lib/get-menus"
import { Meta } from "components/meta"

const towers = [
  {
    number: 1,
    title: "Tower 1 - Elegant High-Rise Living",
    description:
      "Turnberry Place Tower 1 represents the inaugural vision of luxury high-rise living, offering spacious residences with stunning views of the Las Vegas Strip and mountains. Completed in 2000, this 38-story tower features private elevator access, 24-hour security, and direct access to The Stirling Club's world-class amenities.",
    features: [
      "Private elevator access",
      "24-hour security",
      "Direct access to The Stirling Club",
      "Stunning Strip and mountain views",
    ],
    year: 2000,
    stories: 38,
  },
  {
    number: 2,
    title: "Tower 2 - Sophisticated Strip Views",
    description:
      "Rising 45 stories, Tower 2 delivers breathtaking views and refined luxury living. Built in 2001, this tower showcases larger floor plans, floor-to-ceiling windows, and premium finishes throughout. Residents enjoy private balconies, concierge services, and exclusive access to The Stirling Club's resort-style amenities.",
    features: [
      "Larger floor plans",
      "Floor-to-ceiling windows",
      "Private balconies",
      "Concierge services",
    ],
    year: 2001,
    stories: 45,
  },
  {
    number: 3,
    title: "Tower 3 - Premium Desert Living",
    description:
      "The third tower of Turnberry Place stands 45 stories tall, offering contemporary luxury residences with panoramic views. Completed in 2002, Tower 3 features modern designs, spacious terraces, and sophisticated interior finishes. Residents experience the perfect blend of privacy and resort-style living.",
    features: [
      "Contemporary luxury design",
      "Spacious terraces",
      "Sophisticated interior finishes",
      "Panoramic views",
    ],
    year: 2002,
    stories: 45,
  },
  {
    number: 4,
    title: "Tower 4 - Ultimate Luxury Living",
    description:
      "As the crown jewel of Turnberry Place, Tower 4 represents the pinnacle of luxury high-rise living. This 45-story masterpiece, completed in 2005, offers the most refined residences with unparalleled views, premium amenities, and exceptional finishes. Residents enjoy the finest in desert living with full access to The Stirling Club.",
    features: [
      "Most refined residences",
      "Unparalleled views",
      "Premium amenities",
      "Exceptional finishes",
    ],
    year: 2005,
    stories: 45,
  },
]

interface TowersPageProps extends LayoutProps {}

export default function TowersPage({ menus }: TowersPageProps) {
  return (
    <Layout menus={menus}>
      <Meta title="Towers - Turnberry Place Las Vegas" />
      <Head>
        <title>Towers - Turnberry Place Las Vegas</title>
      </Head>
      <div className="card-content card-prop-description py-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="text-center mb-4">
                Turnberry Place | Las Vegas' Premier High-Rise Community
              </h1>
              <div className="desc">
                <h1>Tower 1 - Elegant High-Rise Living</h1>
                <p>Turnberry Place Tower 1 represents the inaugural vision of luxury high-rise living, offering spacious residences with stunning views of the Las Vegas Strip and mountains. Completed in 2000, this 38-story tower features private elevator access, 24-hour security, and direct access to The Stirling Club's world-class amenities.</p>
                <h1>Tower 2 - Sophisticated Strip Views</h1>
                <p>Rising 45 stories, Tower 2 delivers breathtaking views and refined luxury living. Built in 2001, this tower showcases larger floor plans, floor-to-ceiling windows, and premium finishes throughout. Residents enjoy private balconies, concierge services, and exclusive access to The Stirling Club's resort-style amenities.</p>
                <h1>Tower 3 - Premium Desert Living</h1>
                <p>The third tower of Turnberry Place stands 45 stories tall, offering contemporary luxury residences with panoramic views. Completed in 2002, Tower 3 features modern designs, spacious terraces, and sophisticated interior finishes. Residents experience the perfect blend of privacy and resort-style living.</p>
                <h1>Tower 4 - Ultimate Luxury Living</h1>
                <p>As the crown jewel of Turnberry Place, Tower 4 represents the pinnacle of luxury high-rise living. This 45-story masterpiece, completed in 2005, offers the most refined residences with unparalleled views, premium amenities, and exceptional finishes. Residents enjoy the finest in desert living with full access to The Stirling Club.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps(): Promise<GetStaticPropsResult<TowersPageProps>> {
  return {
    props: {
      menus: await getMenus({} as any),
    },
  }
}
