import { GetStaticPropsResult } from "next"
import Head from "next/head"
import { Layout, LayoutProps } from "components/layout"
import { TowerSection } from "components/tower-section"
import { QuickSearchWidget } from "components/quick-search-widget"
import { FeaturedListingCard } from "components/featured-listing-card"
import { getMenus } from "lib/get-menus"
import { Meta } from "components/meta"
import { JsonLdSchema } from "components/json-ld-schema"
import Link from "next/link"

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
        <meta
          name="description"
          content="Explore Turnberry Place's 4 luxury towers: Tower 1 (38 stories), Tower 2-4 (45 stories). Completed 2000-2005, featuring Strip views & Stirling Club access. Call/text 702-222-1988"
        />
      </Head>
      <JsonLdSchema type="property" />
      <div className="card-content card-prop-description py-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="text-center mb-4">
                Turnberry Place Towers | Las Vegas' Premier High-Rise Community
              </h1>
              
              <div className="desc">
                <p className="lead mb-4">
                  Turnberry Place represents the pinnacle of luxury high-rise living in Las Vegas, featuring four distinct towers that have redefined upscale urban living since 2000. Each tower offers unique architectural features, premium amenities, and breathtaking views of the Las Vegas Strip, Red Rock Canyon, and the Spring Mountain Range. As a Las Vegas real estate expert with over 30 years of experience, I can attest that Turnberry Place stands as one of the most prestigious condominium communities in the Entertainment Capital of the World.
                </p>

                <h2>Overview of Turnberry Place Towers</h2>
                <p>
                  The Turnberry Place development consists of four luxury towers strategically positioned just one block east of the Las Vegas Strip, between the Wynn Encore and Sahara resorts. These towers range from 38 to 45 stories, housing approximately 1,200 luxury residences combined. Each tower was completed in phases between 2000 and 2005, representing the evolution of luxury high-rise design in Las Vegas. The development's Art Deco influences and Miami-inspired architecture create a striking silhouette against the Las Vegas skyline, making it instantly recognizable to residents and visitors alike.
                </p>
                <p>
                  What sets Turnberry Place apart from other luxury condominium developments in Las Vegas is its exclusive access to The Stirling Club, an 80,000-square-foot private membership facility. This world-class amenity, combined with 24-hour security, private elevator access, and concierge services, creates an unparalleled living experience that attracts discerning buyers from around the world. The development's guard-gated entrance and raised elevation provide both security and privacy, while maintaining immediate proximity to the Strip's most iconic attractions.
                </p>

                <h2>Tower 1 - Elegant High-Rise Living</h2>
                <p>
                  Turnberry Place Tower 1 represents the inaugural vision of luxury high-rise living in Las Vegas, setting the standard for what would become one of the city's most prestigious residential communities. Completed in 2000, this 38-story tower was the first to welcome residents to the Turnberry Place lifestyle, establishing the development's reputation for excellence in design, amenities, and service.
                </p>
                <h3>Architectural Features and Design</h3>
                <p>
                  Tower 1 features elegant Art Deco influences that pay homage to Las Vegas's golden era while incorporating modern luxury living standards. The tower's curved facade and symmetrical layout create visual interest from every angle, while the building's strategic positioning maximizes views of both the Strip and the surrounding mountains. Each residence in Tower 1 was designed with attention to detail, featuring premium finishes, spacious layouts, and private balconies that capitalize on Las Vegas's dramatic vistas.
                </p>
                <h3>Residence Features and Amenities</h3>
                <p>
                  Residences in Tower 1 range from approximately 1,200 to over 4,000 square feet, offering one to four bedrooms to accommodate various lifestyle needs. Each unit features private elevator access, ensuring complete privacy and convenience for residents. The tower's 24-hour security system, combined with keycard access and video surveillance, provides peace of mind that is essential for luxury living in an urban environment.
                </p>
                <h3>Direct Access to The Stirling Club</h3>
                <p>
                  One of Tower 1's most significant advantages is its direct access to The Stirling Club, allowing residents to enjoy world-class amenities without leaving the building. This 80,000-square-foot private club features a state-of-the-art fitness center, resort-style pools, tennis courts, spa services, and multiple dining venues. The club serves as the social hub of the Turnberry Place community, fostering connections among residents while providing an exclusive retreat from the bustling Strip below.
                </p>
                <h3>Views and Location Benefits</h3>
                <p>
                  Tower 1 residents enjoy stunning views of the Las Vegas Strip, the Spring Mountain Range, and Red Rock Canyon. The tower's east-facing orientation provides spectacular sunrise views, while west-facing units capture breathtaking sunsets over the mountains. The building's elevated position, combined with floor-to-ceiling windows in many units, ensures that every residence maximizes its view potential.
                </p>

                <h2>Tower 2 - Sophisticated Strip Views</h2>
                <p>
                  Rising 45 stories above the Las Vegas landscape, Tower 2 represents the evolution of luxury living at Turnberry Place. Completed in 2001, this tower builds upon Tower 1's success while introducing larger floor plans, enhanced amenities, and even more sophisticated design elements. Tower 2's increased height provides residents with even more dramatic views of the Strip and surrounding areas.
                </p>
                <h3>Enhanced Floor Plans and Design</h3>
                <p>
                  Tower 2 showcases larger floor plans compared to Tower 1, with residences ranging from approximately 1,500 to over 5,000 square feet. The tower's design emphasizes open-concept living spaces, with floor-to-ceiling windows that flood interiors with natural light while framing spectacular views. Premium finishes throughout include hardwood flooring, granite countertops, high-end appliances, and custom cabinetry that reflect the sophisticated tastes of luxury homebuyers.
                </p>
                <h3>Private Balconies and Outdoor Living</h3>
                <p>
                  Many Tower 2 residences feature private balconies that extend the living space outdoors, allowing residents to enjoy Las Vegas's year-round pleasant weather while taking in panoramic views. These outdoor spaces range from intimate Juliet balconies to expansive terraces that accommodate outdoor dining and entertaining. The tower's design ensures that outdoor living is seamlessly integrated with indoor spaces, creating a true indoor-outdoor lifestyle experience.
                </p>
                <h3>Concierge Services and Resident Support</h3>
                <p>
                  Tower 2 residents benefit from comprehensive concierge services that handle everything from package delivery to restaurant reservations, transportation arrangements, and housekeeping coordination. The tower's dedicated concierge team understands the needs of luxury living and provides personalized service that enhances the resident experience. This level of service, combined with 24-hour security and valet parking, ensures that Tower 2 residents enjoy a truly maintenance-free lifestyle.
                </p>
                <h3>Exclusive Access to Resort-Style Amenities</h3>
                <p>
                  Like all Turnberry Place towers, Tower 2 residents enjoy exclusive access to The Stirling Club's resort-style amenities. The club's fitness center features state-of-the-art equipment, personal training services, and group fitness classes. The resort-style pools, both indoor and outdoor, provide year-round swimming opportunities, while the spa and beauty services center offers relaxation and rejuvenation. Multiple dining venues within the club eliminate the need to leave the property for exceptional culinary experiences.
                </p>

                <h2>Tower 3 - Premium Desert Living</h2>
                <p>
                  The third tower of Turnberry Place, completed in 2002, stands 45 stories tall and represents the perfect blend of contemporary luxury and desert-inspired design. Tower 3 offers contemporary luxury residences with panoramic views that showcase both the urban energy of the Strip and the natural beauty of the surrounding desert landscape. This tower appeals to buyers seeking modern design elements combined with the timeless luxury that defines Turnberry Place.
                </p>
                <h3>Contemporary Design Elements</h3>
                <p>
                  Tower 3 features modern designs that incorporate clean lines, minimalist aesthetics, and sophisticated color palettes inspired by the desert environment. The tower's architecture emphasizes natural light, with expansive windows and open floor plans that create bright, airy living spaces. Contemporary finishes include sleek cabinetry, modern fixtures, and designer appliances that appeal to buyers with contemporary tastes while maintaining the luxury standards expected at Turnberry Place.
                </p>
                <h3>Spacious Terraces and Outdoor Spaces</h3>
                <p>
                  Tower 3 residences feature spacious terraces that provide private outdoor retreats with stunning views. These terraces are designed for both relaxation and entertaining, with many units featuring outdoor kitchens, fire features, and comfortable seating areas. The tower's design maximizes outdoor living opportunities, recognizing that Las Vegas's climate allows for year-round enjoyment of outdoor spaces. These terraces become extensions of the interior living spaces, creating seamless transitions between indoor and outdoor environments.
                </p>
                <h3>Sophisticated Interior Finishes</h3>
                <p>
                  The interior finishes in Tower 3 reflect sophisticated design sensibilities, with attention to detail evident in every aspect of the residences. High ceilings, premium flooring materials, custom lighting, and designer fixtures create an atmosphere of refined luxury. The tower's design philosophy emphasizes quality over quantity, ensuring that every square foot is thoughtfully designed and finished to the highest standards. This approach results in residences that feel both luxurious and livable, meeting the needs of discerning buyers who value both aesthetics and functionality.
                </p>
                <h3>Privacy and Resort-Style Living</h3>
                <p>
                  Tower 3 residents experience the perfect blend of privacy and resort-style living, with the tower's design ensuring that each residence feels like a private retreat while providing access to world-class amenities. The building's security systems, private elevator access, and soundproofing create a sense of seclusion and tranquility, while The Stirling Club provides resort-style amenities just steps away. This combination of privacy and convenience is rare in urban high-rise living and represents one of Turnberry Place's most compelling value propositions.
                </p>

                <h2>Tower 4 - Ultimate Luxury Living</h2>
                <p>
                  As the crown jewel of Turnberry Place, Tower 4 represents the pinnacle of luxury high-rise living in Las Vegas. This 45-story masterpiece, completed in 2005, offers the most refined residences in the development, with unparalleled views, premium amenities, and exceptional finishes that set new standards for luxury condominium living. Tower 4 represents the culmination of lessons learned from the previous three towers, incorporating the best features while introducing new innovations in luxury living.
                </p>
                <h3>Most Refined Residences</h3>
                <p>
                  Tower 4's residences are the most refined in the Turnberry Place development, with floor plans ranging from approximately 2,000 to over 8,000 square feet. The tower's penthouses, located above the 30th floor, feature elevated ceilings up to 12 feet, creating dramatic interior spaces that feel both grand and intimate. These residences showcase the finest materials and finishes available, with custom details that reflect the sophisticated tastes of luxury buyers. The tower's design emphasizes both functionality and aesthetics, ensuring that every residence is both beautiful and practical for daily living.
                </p>
                <h3>Unparalleled Views and Vantage Points</h3>
                <p>
                  Tower 4's increased height and strategic positioning provide residents with unparalleled views that are simply not available in lower towers or other Las Vegas developments. The tower's west-facing units offer spectacular sunset views over Red Rock Canyon and the Spring Mountains, while east-facing units provide panoramic cityscapes stretching to downtown Las Vegas. South-facing units have direct sightlines to the Strip's glowing skyline, creating a front-row seat to Las Vegas's most iconic views. North-facing units offer expansive views of the Las Vegas Valley and the Sheep Mountain Range, showcasing the natural beauty that surrounds the city.
                </p>
                <h3>Premium Amenities and Services</h3>
                <p>
                  Tower 4 residents enjoy access to the most comprehensive suite of amenities and services in the Turnberry Place development. The tower's concierge services are enhanced compared to earlier towers, with dedicated staff members who provide personalized attention to residents' needs. Valet parking, limousine services, and housekeeping coordination are all included, ensuring that Tower 4 residents enjoy a truly maintenance-free lifestyle. The building's security systems are state-of-the-art, providing peace of mind while maintaining the convenience and accessibility that luxury living requires.
                </p>
                <h3>Exceptional Finishes and Custom Details</h3>
                <p>
                  The finishes in Tower 4 residences are exceptional, with no detail overlooked in the pursuit of luxury. Custom millwork, designer fixtures, premium appliances, and high-end materials create an atmosphere of refined elegance throughout each residence. The tower's design philosophy emphasizes both timeless elegance and contemporary sophistication, ensuring that residences remain desirable and relevant for years to come. This attention to detail and quality is evident in every aspect of Tower 4, from the building's common areas to the most intimate spaces within each residence.
                </p>
                <h3>Full Access to The Stirling Club</h3>
                <p>
                  Like all Turnberry Place residents, Tower 4 owners enjoy full access to The Stirling Club's extensive amenities. This 80,000-square-foot private club serves as the social and recreational hub of the community, providing residents with opportunities for fitness, relaxation, dining, and socializing without leaving the property. The club's recent renovations have enhanced its facilities, ensuring that they remain state-of-the-art and competitive with the best private clubs in Las Vegas. Tower 4 residents particularly appreciate the club's business center, which provides professional meeting spaces and conference facilities for those who work from home or need to conduct business while maintaining their luxury lifestyle.
                </p>

                <h2>Comparing the Four Towers</h2>
                <p>
                  While each Turnberry Place tower offers luxury living, understanding the differences between them helps buyers make informed decisions. Tower 1, as the original tower, established the development's reputation and offers proven value with its established community and direct access to amenities. Tower 2 introduced larger floor plans and enhanced services, appealing to buyers who prioritize space and convenience. Tower 3's contemporary design attracts buyers with modern aesthetic preferences, while Tower 4 represents the ultimate in luxury living for those seeking the finest available.
                </p>
                <h3>Price Points and Value Propositions</h3>
                <p>
                  Each tower offers different value propositions based on completion date, features, and market positioning. Tower 1 residences typically represent excellent value for buyers seeking entry into the Turnberry Place community, with prices generally starting around $800,000. Tower 2 and Tower 3 residences command premium prices due to their larger floor plans and enhanced features, with prices ranging from $1.2 million to $5 million depending on size, floor level, and view quality. Tower 4 residences represent the pinnacle of pricing, with penthouses and high-floor units commanding prices from $3 million to over $10 million, reflecting their exceptional features, views, and finishes.
                </p>
                <h3>Community and Lifestyle Considerations</h3>
                <p>
                  All four towers share access to The Stirling Club and the development's common amenities, creating a unified community experience. However, each tower has developed its own character and community feel over the years. Tower 1's established community appeals to long-term residents who value stability and proven quality. Tower 2 and Tower 3 attract a mix of full-time residents and second-home owners, creating vibrant communities with diverse interests. Tower 4's exclusive nature appeals to buyers seeking the ultimate in privacy and luxury, with a community that values both sophistication and discretion.
                </p>

                <h2>Investment Potential and Market Position</h2>
                <p>
                  Turnberry Place towers represent exceptional investment opportunities in the Las Vegas luxury real estate market. The development's prime location, world-class amenities, and established reputation create strong demand among both domestic and international buyers. The towers' proximity to the Strip, combined with their exclusive amenities and security features, ensures that they remain desirable regardless of market conditions. As a Las Vegas real estate expert, I've observed consistent appreciation in Turnberry Place values over the years, making these towers attractive to both owner-occupants and investors.
                </p>
                <h3>Market Trends and Appreciation</h3>
                <p>
                  The Las Vegas luxury condominium market has shown strong appreciation trends, with Turnberry Place consistently outperforming the broader market. The development's limited inventory, combined with strong demand from buyers seeking luxury living near the Strip, creates favorable conditions for price appreciation. Tower 4, in particular, has shown exceptional appreciation due to its limited availability and premium positioning. All towers benefit from the development's established reputation and ongoing improvements to The Stirling Club and common areas.
                </p>
                <h3>Rental Potential and Investment Returns</h3>
                <p>
                  While many Turnberry Place residents are owner-occupants, the development also offers strong rental potential for investors. The towers' prime location, luxury amenities, and established reputation create strong demand among high-end renters seeking temporary or long-term luxury accommodations. The development's proximity to the Strip makes it particularly attractive to executives, entertainers, and high-net-worth individuals who require luxury accommodations in Las Vegas. Rental rates for Turnberry Place residences typically command premium prices, reflecting the development's luxury positioning and comprehensive amenities.
                </p>

                <h2>Why Choose Turnberry Place Towers?</h2>
                <p>
                  Choosing a residence in one of Turnberry Place's four towers means investing in a lifestyle that combines luxury, convenience, and exclusivity. The development's prime location, world-class amenities, and established reputation create an unparalleled living experience that is difficult to replicate elsewhere in Las Vegas. Whether you're seeking a primary residence, second home, or investment property, Turnberry Place towers offer compelling value propositions that appeal to discerning buyers.
                </p>
                <h3>Unmatched Location and Convenience</h3>
                <p>
                  Turnberry Place's location just one block from the Las Vegas Strip provides unmatched convenience for residents who want to enjoy the city's entertainment, dining, and cultural offerings. The development's proximity to world-class restaurants, entertainment venues, shopping, and business centers means that residents can enjoy everything Las Vegas offers without the inconvenience of long commutes. This location advantage is particularly valuable for those who work in the hospitality, entertainment, or business sectors, as well as for those who simply want to be at the center of Las Vegas's vibrant energy.
                </p>
                <h3>Exclusive Access to The Stirling Club</h3>
                <p>
                  The Stirling Club represents one of Turnberry Place's most significant value propositions, providing residents with access to amenities that would typically require separate club memberships costing tens of thousands of dollars annually. This 80,000-square-foot private facility includes fitness centers, pools, tennis courts, spa services, dining venues, and business facilities that rival the best private clubs in Las Vegas. The club's exclusive nature ensures that it remains uncrowded and provides a true luxury experience for residents, creating a sense of exclusivity and privilege that enhances the overall living experience.
                </p>
                <h3>Security and Privacy</h3>
                <p>
                  Turnberry Place's comprehensive security systems, guard-gated entrance, and private elevator access provide residents with the security and privacy that luxury living requires. The development's raised elevation and strategic positioning minimize street noise and provide a sense of seclusion despite the proximity to the Strip. This combination of security and privacy is essential for high-profile residents, executives, and anyone who values peace of mind in their home environment. The development's security measures are continuously updated and enhanced, ensuring that they remain state-of-the-art and effective.
                </p>

                <h2>Contact Dr. Jan Duffy for Tower Information</h2>
                <p>
                  As a Las Vegas real estate expert with over 30 years of experience and deep knowledge of Turnberry Place, I can provide comprehensive information about each tower's features, availability, pricing, and investment potential. My expertise in luxury high-rise condominiums, combined with my understanding of the Las Vegas market, enables me to help buyers make informed decisions about which tower best meets their needs, preferences, and investment goals.
                </p>
                <p>
                  Whether you're interested in Tower 1's established value, Tower 2's enhanced features, Tower 3's contemporary design, or Tower 4's ultimate luxury, I can provide detailed information about available residences, market conditions, and the unique characteristics of each tower. My goal is to help you find the perfect Turnberry Place residence that meets your lifestyle needs while representing a sound investment in Las Vegas luxury real estate.
                </p>
                <p className="mt-4">
                  <strong>Ready to explore Turnberry Place towers?</strong> Call or text me at <a href="tel:7022221988" className="text-decoration-underline">(702) 222-1988</a> to schedule a private showing or discuss your luxury condominium needs. With my extensive knowledge of Turnberry Place and the Las Vegas luxury market, I can help you find the perfect tower residence that exceeds your expectations.
                </p>
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

      {/* Featured Listings by Tower */}
      <div className="card-content py-5 bg-white">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="text-center mb-4">Featured Listings by Tower</h2>
              <p className="text-center mb-5 text-muted">Explore available residences across all four Turnberry Place towers</p>
              <div className="row">
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
              </div>
              <div className="text-center mt-4">
                <Link href="/available-condos" className="btn btn-primary btn-lg">
                  View All Available Condos
                </Link>
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
