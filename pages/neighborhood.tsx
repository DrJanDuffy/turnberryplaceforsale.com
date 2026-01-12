import { GetStaticPropsResult } from "next"
import Head from "next/head"
import { Layout, LayoutProps } from "components/layout"
import { getMenus } from "lib/get-menus"
import { Meta } from "components/meta"
import Image from "next/image"

interface NeighborhoodPageProps extends LayoutProps {}

const neighborhoodImages = [
  "https://assets.cribflyer-proxy.com/cdn-cgi/image/width=1200,fit=contain,rotate=0,format=auto,quality=85/4616/8/2976700/asset.jpg",
  "https://assets.cribflyer-proxy.com/cdn-cgi/image/width=1200,fit=contain,rotate=0,format=auto,quality=85/4616/8/2976701/asset.jpg",
  "https://assets.cribflyer-proxy.com/cdn-cgi/image/width=1200,fit=contain,rotate=0,format=auto,quality=85/4616/8/2976702/asset.jpg",
  "https://assets.cribflyer-proxy.com/cdn-cgi/image/width=1200,fit=contain,rotate=0,format=auto,quality=85/4616/8/2976694/asset.jpg",
  "https://assets.cribflyer-proxy.com/cdn-cgi/image/width=1200,fit=contain,rotate=0,format=auto,quality=85/4616/8/2976699/asset.jpg",
  "https://assets.cribflyer-proxy.com/cdn-cgi/image/width=1200,fit=contain,rotate=0,format=auto,quality=85/4616/8/2976697/asset.jpg",
]

export default function NeighborhoodPage({ menus }: NeighborhoodPageProps) {
  return (
    <Layout menus={menus}>
      <Meta title="Neighborhood - Turnberry Place Las Vegas" />
      <Head>
        <title>Neighborhood - Turnberry Place Las Vegas</title>
      </Head>
      <div className="card-content card-areas py-5">
        <div className="container-fluid">
          <div className="row align-items-center justify-content-center">
            <div className="col-12 col-sm-11 col-lg-10 col-xl-9">
              <div className="py-4">
                <h1 className="text-center mb-4">Turnberry Place Neighborhood and Area Profile</h1>
                <div className="mb-4 d-flex flex-wrap area-photos align-items-center justify-content-center">
                  {neighborhoodImages.map((img, index) => (
                    <div key={index} className="p-1 thumb-border mx-1">
                      <a
                        href={img}
                        title="Turnberry Place Neighborhood and Area Profile"
                      >
                        <Image
                          src={img}
                          width={500}
                          height={500}
                          alt="Turnberry Place Neighborhood and Area Profile"
                          className="img-area-thumb img-fluid"
                        />
                      </a>
                    </div>
                  ))}
                </div>
                <div className="area-desc">
                  <div>
                    <p>
                      Turnberry Place stands as a pinnacle of luxury living in Las Vegas, offering an unparalleled blend of privacy, convenience, and access to world-class amenities. Situated just one block east of the Las Vegas Strip between the Wynn Encore and Sahara resorts, this guard-gated, four-tower condominium complex redefines upscale urban living with its strategic location and meticulously curated environment. Residents enjoy immediate proximity to the Entertainment Capital of the World while residing in a serene, tropical-inspired oasis adorned with lush palm trees and manicured landscaping.
                    </p>
                    <h2>Prime Location and Accessibility</h2>
                    <p>
                      Turnberry Place's location at 2747–2877 Paradise Road positions it at the heart of Las Vegas' most dynamic corridor. The property lies within a one-mile radius of over twenty Zagat-rated restaurants, including establishments at the Wynn, Encore, and Resorts World. The Strip's iconic attractions—such as the T-Mobile Arena (home of the Vegas Golden Knights) and Allegiant Stadium (home of the Las Vegas Raiders)—are mere minutes away, alongside the Las Vegas Convention Center and McCarran International Airport. Despite its central location, the community maintains a tranquil ambiance, shielded from the Strip's bustle by its elevated design and guarded entrance.
                    </p>
                    <p>
                      The area scores moderately on walkability (46–52) and transit (48–49), reflecting its car-dependent nature, though valet parking and limousine services are included for residents. Major highways, including Interstate 15 and the Las Vegas Beltway, provide swift access to the broader metropolitan area, while the nearby Las Vegas Golf Course adds a touch of greenery to the urban landscape.
                    </p>
                    <h2>Exclusive Community Features</h2>
                    <h2>The Stirling Club</h2>
                    <p>
                      At the heart of Turnberry Place lies the Stirling Club, an 80,000-square-foot private membership facility exclusively for residents. This luxury hub features a state-of-the-art fitness center, resort-style indoor and outdoor pools, clay tennis and pickleball courts, a full-service spa, and multiple dining venues. The club's social spaces—including a business center with conference rooms, a media lounge, and a martini bar—foster a vibrant community atmosphere, allowing residents to host events or unwind without leaving the premises.
                    </p>
                    <h2>Architectural Distinction</h2>
                    <p>
                      Designed with Art Deco influences and Miami-inspired flair, the four 38- to 45-story towers feature curved facades and symmetrical layouts that create a striking silhouette against the Las Vegas skyline. Units prioritize outdoor living, with many offering wrap-around terraces showcasing panoramic views of the Strip, Red Rock Canyon, and the Spring Mountain Range. Penthouses above the 30th floor feature elevated ceilings (up to 12 feet) and expansive floor plans exceeding 8,000 square feet
                    </p>
                    <h2>Nearby Attractions and Lifestyle Amenities</h2>
                    <h2>Dining and Entertainment</h2>
                    <p>Within a 10-minute drive, residents can access:</p>
                    <ul>
                      <li>
                        <p><strong>Fine Dining:</strong> Joël Robuchon at MGM Grand, é by José Andrés, and Twist by Pierre Gagnaire</p>
                      </li>
                      <li>
                        <p><strong>Nightlife:</strong> XS Nightclub at Encore, Omnia at Caesars Palace</p>
                      </li>
                      <li>
                        <p><strong>Cultural Venues:</strong> The Bellagio Gallery of Fine Art, The Smith Center for the Performing Arts</p>
                      </li>
                      <li>
                        <p><strong>Retail Therapy:</strong> Fashion Show Mall, Crystals at CityCenter</p>
                      </li>
                    </ul>
                    <h2>Outdoor and Family Activities</h2>
                    <p>The neighborhood caters to diverse interests:</p>
                    <ul>
                      <li>
                        <p><strong>Golf:</strong> Las Vegas Golf Course (adjacent) and Bali Hai Golf Club (5 minutes south)</p>
                      </li>
                      <li>
                        <p><strong>Nature Exploration:</strong> Springs Preserve (15 minutes northwest) and Red Rock Canyon (25 minutes west)</p>
                      </li>
                      <li>
                        <p><strong>Family Fun:</strong> Discovery Children's Museum and High Roller Observation Wheel</p>
                      </li>
                    </ul>
                    <h2>Security and Privacy</h2>
                    <p>
                      Turnberry Place's guard-gated entrance, 24/7 security personnel, and video surveillance systems ensure a secure environment. The property's raised elevation and strategic positioning minimize street noise, while keycard access and private elevators to residences enhance privacy. A dedicated concierge team handles package delivery, housekeeping coordination, and transportation arrangements, allowing residents to enjoy a seamless lifestyle.
                    </p>
                    <h2>Views and Natural Surroundings</h2>
                    <p>Every residence capitalizes on Las Vegas' dramatic vistas:</p>
                    <ul>
                      <li>
                        <p><strong>West-Facing Units:</strong> Sunset views over Red Rock Canyon and the Spring Mountains</p>
                      </li>
                      <li>
                        <p><strong>East-Facing Units:</strong> Panoramic cityscapes stretching to downtown Las Vegas</p>
                      </li>
                      <li>
                        <p><strong>South-Facing Units:</strong> Direct sightlines to the Strip's glowing skyline</p>
                      </li>
                      <li>
                        <p><strong>North-Facing Units:</strong> Expansive views of the Las Vegas Valley and Sheep Mountain Range</p>
                      </li>
                    </ul>
                    <p>
                      The development's landscaping incorporates drought-tolerant flora and shaded courtyards, creating microclimates that contrast with the surrounding desert. Rooftop terraces on upper floors provide unparalleled vantage points for fireworks displays during major Strip events.
                    </p>
                    <p>
                      This neighborhood profile underscores Turnberry Place's unique position as a sanctuary of luxury within arm's reach of Las Vegas' most iconic experiences. Its fusion of privacy, convenience, and bespoke amenities creates an unrivaled living environment for discerning residents.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps(): Promise<GetStaticPropsResult<NeighborhoodPageProps>> {
  return {
    props: {
      menus: await getMenus({} as any),
    },
  }
}
