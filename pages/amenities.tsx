import { GetStaticPropsResult } from "next"
import Head from "next/head"
import { Layout, LayoutProps } from "components/layout"
import { AmenitiesGrid } from "components/amenities-grid"
import { getMenus } from "lib/get-menus"
import { Meta } from "components/meta"
import { JsonLdSchema } from "components/json-ld-schema"
// ClientTestimonials and VIPNewsletterSignup available on homepage and /agent page
import { FormattedSection } from "components/formatted-section"

const amenities = [
  { name: "Gated Community" },
  { name: "City View" },
  { name: "Secure Building" },
  { name: "Gym" },
  { name: "Tennis Courts" },
  { name: "Spa" },
  { name: "Swimming Pool" },
  { name: "Workout Room" },
  { name: "Mountains" },
  { name: "Private Patio" },
]

interface AmenitiesPageProps extends LayoutProps {}

export default function AmenitiesPage({ menus }: AmenitiesPageProps) {
  return (
    <Layout menus={menus}>
      <Meta title="Amenities - Turnberry Place Las Vegas" />
      <Head>
        <title>Amenities - Turnberry Place Las Vegas</title>
        <meta
          name="description"
          content="Turnberry Place amenities: Gated community, pools, gym, tennis courts, spa, secure building, city & mountain views. Call/text 702-222-1964"
        />
      </Head>
      <JsonLdSchema type="property" />
      <div className="card-content card-amenities">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <div className="page-header">
                <h1>Turnberry Place Amenities: Luxury Living Redefined</h1>
                <p className="lead">
                Turnberry Place offers an unparalleled suite of amenities that create a true luxury lifestyle experience. From the exclusive Stirling Club to comprehensive security systems, these amenities set Turnberry Place apart as Las Vegas's premier high-rise condominium community. As a Las Vegas real estate expert with over 30 years of experience, I can attest that Turnberry Place's amenities rival the best luxury developments worldwide.
              </p>

              </div>

              <div className="content-section">
                <div className="amenities-border">
                  <h2 className="text-center">Comprehensive Amenities Overview</h2>
                <div className="row pt-2 pt-sm-4 pl-3 pl-sm-5">
                  {amenities.map((amenity, index) => (
                    <div key={index} className="col-6 col-lg-4 py-2 d-flex align-items-center">
                      <div className="mr-2 pb-1">
                        <span className="icon-custom">
                          <svg height="15" width="15" aria-hidden="true" focusable="false" className="d-inline" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path fill="currentColor" d="M413.505 91.951L133.49 371.966l-98.995-98.995c-4.686-4.686-12.284-4.686-16.971 0L6.211 284.284c-4.686 4.686-4.686 12.284 0 16.971l118.794 118.794c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-11.314-11.314c-4.686-4.686-12.284-4.686-16.97 0z"/>
                          </svg>
                        </span>
                      </div>
                      <span className="amenity-name">{amenity.name}</span>
                    </div>
                  ))}
                </div>
                </div>
              </div>

              <div className="content-section">
                <h2>The Stirling Club: Exclusive Private Membership Facility</h2>
                <p>
                  The crown jewel of Turnberry Place amenities is The Stirling Club, an 80,000-square-foot private membership facility exclusively for residents. This world-class facility represents one of the most comprehensive private club amenities available in any Las Vegas condominium development. The club's recent renovations have enhanced its facilities, ensuring that they remain state-of-the-art and competitive with the best private clubs in Las Vegas and beyond.
                </p>
                <h3>State-of-the-Art Fitness Center</h3>
                <p>
                  The Stirling Club's fitness center features state-of-the-art equipment from leading manufacturers, including cardio machines, strength training equipment, free weights, and functional training areas. The facility offers personal training services, group fitness classes, and specialized programs tailored to residents' fitness goals. The fitness center's professional-grade equipment and expert staff ensure that residents can maintain their fitness routines without leaving the property, creating convenience that is essential for busy professionals and active lifestyles.
                </p>
                <h3>Resort-Style Swimming Pools</h3>
                <p>
                  The Stirling Club features both indoor and outdoor resort-style swimming pools that provide year-round swimming opportunities regardless of weather conditions. The outdoor pool area includes cabanas, lounge areas, and poolside service, creating a true resort experience. The indoor pool provides a climate-controlled environment for swimming, water aerobics, and relaxation. Both pool areas are maintained to the highest standards, ensuring that residents enjoy pristine conditions and exceptional service.
                </p>
                <h3>Tennis and Pickleball Courts</h3>
                <p>
                  The Stirling Club includes clay tennis courts and pickleball courts that provide residents with opportunities for recreational and competitive play. The courts are maintained to professional standards, and the club offers tennis instruction, clinics, and organized play for residents of all skill levels. The pickleball courts reflect the growing popularity of this sport and provide additional recreational opportunities. These facilities create a vibrant sports community within Turnberry Place, fostering connections among residents who share athletic interests.
                </p>
                <h3>Full-Service Spa and Beauty Services</h3>
                <p>
                  The Stirling Club's spa and beauty services center provides residents with access to professional spa treatments, massage therapy, facials, and beauty services without leaving the property. The spa's professional staff and high-end facilities create a true luxury spa experience that rivals the best spas in Las Vegas. This amenity is particularly valuable for residents who value relaxation, self-care, and convenience, eliminating the need to travel to external spa facilities.
                </p>
                <h3>Multiple Dining Venues and Bars</h3>
                <p>
                  The Stirling Club features multiple dining venues and bars that provide residents with exceptional culinary experiences without leaving the property. These venues range from casual dining to fine dining experiences, accommodating various occasions and preferences. The club's bars provide sophisticated environments for socializing, entertaining, and relaxation. The quality of the dining experiences, combined with the convenience of on-site dining, creates significant value for residents who appreciate fine cuisine and social experiences.
                </p>
                <h3>Business Center and Conference Facilities</h3>
                <p>
                  The Stirling Club's business center includes conference rooms, meeting spaces, and business facilities that accommodate professional needs. These facilities are particularly valuable for residents who work from home, conduct business from their residences, or need professional meeting spaces. The business center's technology infrastructure, professional presentation equipment, and comfortable environments ensure that residents can conduct business effectively without leaving the property. This amenity is increasingly important in today's remote work environment.
                </p>
                <h3>Social Lounges and Entertainment Spaces</h3>
                <p>
                  The Stirling Club features various lounges and entertainment spaces that provide residents with opportunities for socializing, relaxation, and entertainment. These spaces include media lounges, game rooms, and social areas that accommodate various activities and group sizes. The club's design emphasizes both intimate spaces for small gatherings and larger areas for community events, creating a flexible environment that serves diverse resident needs. These spaces foster community connections and provide venues for resident-organized events and activities.
                </p>

              </div>

              <div className="content-section">
                <h2>Security and Privacy Amenities</h2>
                <p>
                  Turnberry Place's comprehensive security and privacy amenities provide residents with peace of mind and the seclusion that luxury living requires. These amenities are essential for high-profile residents, executives, and anyone who values security and privacy in their home environment. The development's security systems are continuously updated and enhanced, ensuring that they remain state-of-the-art and effective.
                </p>
                <h3>Guard-Gated Community Entrance</h3>
                <p>
                  Turnberry Place features a guard-gated community entrance with 24-hour security personnel who monitor access and provide a visible security presence. The guard-gated entrance creates a controlled access point that enhances security while maintaining convenience for residents and authorized visitors. The security personnel are trained professionals who understand the needs of luxury residential communities and provide both security and concierge services. This amenity creates a sense of exclusivity and safety that is essential for luxury living.
                </p>
                <h3>24-Hour Security Personnel and Video Surveillance</h3>
                <p>
                  Turnberry Place maintains 24-hour security personnel who patrol the property, monitor security systems, and respond to resident needs. The development's comprehensive video surveillance system provides additional security coverage, monitoring common areas, entrances, and parking facilities. These security measures create a safe environment that allows residents to enjoy their homes with confidence. The security personnel also provide concierge services, handling package delivery, visitor management, and other resident needs.
                </p>
                <h3>Secure Building Access and Private Elevators</h3>
                <p>
                  Turnberry Place residences feature secure building access through keycard systems that control entry to building lobbies, elevators, and residential floors. Many residences feature private elevator access that provides direct entry to individual units, ensuring complete privacy and security. These access control systems prevent unauthorized entry while maintaining convenience for residents and authorized visitors. The private elevator access is particularly valuable for high-profile residents who require enhanced privacy and security.
                </p>
                <h3>Raised Elevation and Noise Reduction</h3>
                <p>
                  Turnberry Place's raised elevation and strategic positioning minimize street noise and provide a sense of seclusion despite the proximity to the Las Vegas Strip. The development's design incorporates soundproofing measures that reduce external noise, creating a tranquil environment within the residences. This amenity is particularly valuable for residents who work from home, require quiet environments, or simply value peace and tranquility in their living spaces. The combination of raised elevation and soundproofing creates an environment that feels removed from the urban bustle below.
                </p>

                <h2>Recreational and Lifestyle Amenities</h2>
                <p>
                  Beyond The Stirling Club, Turnberry Place offers additional recreational and lifestyle amenities that enhance daily living and create a true luxury lifestyle experience. These amenities include outdoor spaces, recreational facilities, and services that support residents' active and social lifestyles. The development's comprehensive approach to amenities ensures that residents have access to everything they need for comfortable, convenient, and enjoyable living.
                </p>
                <h3>Gated Community with Manicured Landscaping</h3>
                <p>
                  Turnberry Place's gated community features meticulously manicured landscaping that creates a tropical-inspired oasis within the urban environment. The development's landscaping includes lush palm trees, drought-tolerant flora, shaded courtyards, and water features that create microclimates contrasting with the surrounding desert. The landscaping is maintained to the highest standards, ensuring that the property always presents beautifully. This amenity creates a sense of arrival and luxury that enhances the overall living experience.
                </p>
                <h3>Private Patios and Terraces</h3>
                <p>
                  Many Turnberry Place residences feature private patios and terraces that extend living spaces outdoors, allowing residents to enjoy Las Vegas's year-round pleasant weather while taking in panoramic views. These outdoor spaces range from intimate Juliet balconies to expansive wrap-around terraces that accommodate outdoor dining, entertaining, and relaxation. The terraces are designed to maximize views while providing privacy and comfort. This amenity is particularly valuable for residents who appreciate outdoor living and want to capitalize on Las Vegas's climate and views.
                </p>
                <h3>Valet Parking and Limousine Services</h3>
                <p>
                  Turnberry Place provides valet parking services that eliminate the inconvenience of finding parking spaces and walking to residences. The development also offers limousine services for residents who require transportation for business, entertainment, or special occasions. These services are included in the HOA fees, providing convenience and luxury that enhances daily living. The valet parking is particularly valuable given the development's prime location near the Strip, where parking can be challenging.
                </p>
                <h3>Concierge Services</h3>
                <p>
                  Turnberry Place's concierge services handle a wide range of resident needs, including package delivery, restaurant reservations, transportation arrangements, housekeeping coordination, and event planning. The concierge team understands the needs of luxury living and provides personalized service that enhances the resident experience. This amenity creates a maintenance-free lifestyle that allows residents to focus on enjoying their homes and the Las Vegas lifestyle rather than managing daily tasks and logistics.
                </p>

                <h2>Views and Natural Surroundings</h2>
                <p>
                  Turnberry Place's strategic location and elevated design provide residents with access to some of Las Vegas's most dramatic and desirable views. These views are considered amenities in themselves, as they enhance daily living and create a sense of connection to the surrounding landscape. The development's design maximizes view potential for every residence, ensuring that residents can enjoy Las Vegas's iconic vistas from their homes.
                </p>
                <h3>City Views and Strip Skyline</h3>
                <p>
                  Many Turnberry Place residences offer spectacular city views that showcase Las Vegas's vibrant urban landscape. East-facing and south-facing units provide direct views of the Las Vegas Strip's glowing skyline, creating a front-row seat to one of the world's most iconic cityscapes. These views are particularly dramatic at night when the Strip's lights create a spectacular display. The city views provide a constant connection to Las Vegas's energy and excitement while maintaining the privacy and tranquility of home.
                </p>
                <h3>Mountain Views and Natural Beauty</h3>
                <p>
                  West-facing and north-facing Turnberry Place residences offer stunning views of the Spring Mountain Range, Red Rock Canyon, and the Sheep Mountain Range. These views showcase the natural beauty that surrounds Las Vegas, providing a contrast to the urban energy of the Strip. The mountain views are particularly spectacular during sunrise and sunset, when the changing light creates dramatic displays. These views create a sense of connection to nature and provide a peaceful backdrop for daily living.
                </p>
                <h3>Panoramic Vistas from Upper Floors</h3>
                <p>
                  Upper-floor residences in Turnberry Place, particularly penthouses above the 30th floor, offer panoramic vistas that combine city and mountain views. These views are simply not available from lower floors or other developments, creating a unique value proposition for high-floor residences. The panoramic vistas provide residents with a sense of elevation and perspective that enhances the luxury living experience. These views are particularly valuable for residents who appreciate natural beauty and want to maximize their connection to the surrounding landscape.
                </p>

                <h2>Maintenance and Service Amenities</h2>
                <p>
                  Turnberry Place's maintenance and service amenities ensure that residents enjoy a truly maintenance-free lifestyle. These amenities handle property maintenance, landscaping, security, and other services that would typically require resident attention. The comprehensive nature of these services creates convenience and peace of mind that is essential for luxury living.
                </p>
                <h3>Comprehensive Property Maintenance</h3>
                <p>
                  Turnberry Place's property maintenance services handle all aspects of building and common area maintenance, ensuring that the property always presents beautifully and functions optimally. These services include building maintenance, common area cleaning, landscaping maintenance, pool and spa maintenance, and equipment servicing. The maintenance team's expertise and attention to detail ensure that residents never need to concern themselves with property maintenance issues. This amenity creates a truly maintenance-free lifestyle that allows residents to focus on enjoying their homes.
                </p>
                <h3>Package and Mail Management</h3>
                <p>
                  Turnberry Place's concierge services handle package and mail management, ensuring that residents receive their deliveries securely and conveniently. The development's package management system accommodates the increasing volume of online shopping deliveries, providing secure storage and convenient pickup. This amenity is particularly valuable in today's e-commerce environment, where package delivery is frequent and security is essential. The concierge team's attention to package management ensures that residents never miss deliveries or experience security concerns.
                </p>
                <h3>Housekeeping Coordination Services</h3>
                <p>
                  Turnberry Place's concierge services coordinate housekeeping services for residents who require professional cleaning and maintenance of their residences. The concierge team works with trusted service providers to ensure that residents receive high-quality housekeeping services that meet luxury standards. This coordination eliminates the need for residents to research and manage housekeeping services independently, creating convenience and ensuring quality. The housekeeping coordination is particularly valuable for busy professionals and part-time residents.
                </p>

                <h2>Value of Turnberry Place Amenities</h2>
                <p>
                  Turnberry Place's comprehensive amenities create exceptional value that justifies the development's premium positioning. The combination of exclusive access to The Stirling Club, comprehensive security systems, recreational facilities, and service amenities creates a lifestyle experience that would be difficult and expensive to replicate elsewhere. Understanding the value of these amenities helps buyers appreciate the development's pricing structure and investment potential.
              </p>
              <h3>Cost Comparison to Separate Memberships</h3>
              <p>
                If Turnberry Place residents were to purchase separate memberships for the amenities available through The Stirling Club, the annual costs would exceed tens of thousands of dollars. Private fitness club memberships, spa memberships, tennis club memberships, and dining club memberships would create significant ongoing expenses. Turnberry Place's inclusion of these amenities in the HOA fees represents exceptional value, as residents receive access to world-class facilities without separate membership costs. This value proposition is particularly compelling for residents who would otherwise invest in multiple memberships and services.
              </p>
              <h3>Convenience and Time Savings</h3>
              <p>
                Turnberry Place's on-site amenities create significant convenience and time savings for residents. The ability to access fitness facilities, pools, spa services, dining venues, and business facilities without leaving the property eliminates travel time and creates efficiency in daily routines. This convenience is particularly valuable for busy professionals, executives, and anyone who values time efficiency. The time savings, combined with the quality of the amenities, creates value that extends beyond financial considerations.
              </p>
              <h3>Lifestyle Enhancement and Community Building</h3>
              <p>
                Turnberry Place's amenities enhance residents' lifestyles while fostering community connections. The Stirling Club's social spaces, recreational facilities, and dining venues provide opportunities for residents to connect, socialize, and build relationships. This community-building aspect creates value that extends beyond individual amenities, as residents benefit from the social connections and sense of community that the amenities facilitate. The lifestyle enhancement and community building represent intangible value that significantly enhances the overall living experience.
              </p>
              </div>

              <div className="content-section">
                <h2>Contact Dr. Jan Duffy for Amenities Information</h2>
                <p>
                  As a Las Vegas real estate expert with over 30 years of experience and deep knowledge of Turnberry Place, I can provide comprehensive information about the development's amenities, their value propositions, and how they enhance the luxury living experience. My expertise in luxury condominium developments, combined with my understanding of Turnberry Place's unique amenities, enables me to help buyers appreciate the comprehensive value that these amenities provide.
                </p>
                <p>
                  Whether you're interested in The Stirling Club's exclusive facilities, the development's security systems, recreational amenities, or service offerings, I can provide detailed information about how these amenities enhance daily living and create exceptional value. My goal is to help you understand the comprehensive nature of Turnberry Place's amenities and how they contribute to the development's reputation as Las Vegas's premier high-rise condominium community.
                </p>
                <p>
                  <strong>Ready to learn more about Turnberry Place amenities?</strong> Call or text me at <a href="tel:7022221964" className="text-decoration-underline">(702) 222-1964</a> to schedule a tour of The Stirling Club and discuss how Turnberry Place's comprehensive amenities can enhance your luxury lifestyle. With my extensive knowledge of Turnberry Place and its amenities, I can help you appreciate the exceptional value that these facilities provide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Client Testimonials and VIP Newsletter - Available on homepage and /agent page */}
    </Layout>
  )
}

export async function getStaticProps(): Promise<GetStaticPropsResult<AmenitiesPageProps>> {
  return {
    props: {
      menus: await getMenus({} as any),
    },
  }
}
