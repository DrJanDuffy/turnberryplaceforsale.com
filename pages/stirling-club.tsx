import { GetStaticPropsResult } from "next"
import Head from "next/head"
import { Layout, LayoutProps } from "components/layout"
import { getMenus } from "lib/get-menus"
import { Meta } from "components/meta"
import { JsonLdSchema } from "components/json-ld-schema"
// ClientTestimonials and VIPNewsletterSignup available on homepage and /agent page
import Image from "next/image"

interface StirlingClubPageProps extends LayoutProps {}

export default function StirlingClubPage({ menus }: StirlingClubPageProps) {
  return (
    <Layout menus={menus}>
      <Meta title="The Stirling Club - Turnberry Place Las Vegas" />
      <Head>
        <title>The Stirling Club - Turnberry Place Las Vegas</title>
        <meta
          name="description"
          content="The Stirling Club: 80,000 sq ft private club exclusively for Turnberry Place residents. Fitness center, pools, tennis, spa, dining & more. Call/text 702-222-1988"
        />
      </Head>
      <JsonLdSchema type="property" />
      <div className="card-content card-custom card-custom-03 py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <h1 className="text-center mb-4">The Stirling Club: Exclusive Luxury at Your Doorstep</h1>
              <p className="lead text-center mb-5">
                The Stirling Club stands as the crown jewel of Turnberry Place, an 80,000-square-foot private membership facility exclusively for residents. This recently renovated world-class facility represents one of the most comprehensive private club amenities available in any Las Vegas condominium development. As a Las Vegas real estate expert with over 30 years of experience, I can attest that The Stirling Club's amenities rival the best private clubs worldwide, creating exceptional value for Turnberry Place residents.
              </p>

              <div className="row py-4 justify-content-center">
                <div className="col-12 col-xl-10">
                  <div className="row align-items-center">
                    <div className="col-12 col-md-6">
                      <div className="left-image pb-4 pb-md-0">
                        <Image
                          src="https://assets.cribflyer-proxy.com/cdn-cgi/image/height=400,fit=contain,format=auto,quality=85/4616/5/2976704/asset.jpg"
                          width={600}
                          height={400}
                          alt="The Stirling Club at Turnberry Place Las Vegas"
                        />
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="text-content pt-3 pt-md-0">
                        <h2>World-Class Private Club Amenities</h2>
                        <p>
                          The Stirling Club serves as the social and recreational hub of the Turnberry Place community, providing residents with a private oasis of luxury and convenience. Its extensive offerings contribute significantly to the upscale lifestyle that defines Turnberry Place, making it a central feature that distinguishes this development from other luxury condominiums in Las Vegas. The club's recent renovations have enhanced its facilities, ensuring that they remain state-of-the-art and competitive with the best private clubs globally.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5">
                <h2>Comprehensive Facility Overview</h2>
                <p>
                  The Stirling Club's 80,000 square feet encompass a comprehensive range of facilities designed to meet every aspect of residents' lifestyle needs. From fitness and recreation to dining and business, the club provides everything residents need without leaving the property. This comprehensive approach creates exceptional convenience and value, as residents can access world-class amenities that would typically require multiple separate memberships and significant travel time.
                </p>
                <h3>State-of-the-Art Fitness Center</h3>
                <p>
                  The Stirling Club's fitness center features state-of-the-art equipment from leading manufacturers, including comprehensive cardio machines, strength training equipment, free weights, and functional training areas. The facility offers personal training services from certified trainers, group fitness classes ranging from yoga and Pilates to high-intensity interval training, and specialized programs tailored to residents' individual fitness goals. The fitness center's professional-grade equipment and expert staff ensure that residents can maintain their fitness routines at the highest level without leaving the property, creating convenience that is essential for busy professionals and active lifestyles.
                </p>
                <h3>Resort-Style Swimming Pools</h3>
                <p>
                  The Stirling Club features both indoor and outdoor resort-style swimming pools that provide year-round swimming opportunities regardless of weather conditions. The outdoor pool area includes private cabanas, comfortable lounge areas, poolside service, and a sophisticated poolside bar, creating a true resort experience. The indoor pool provides a climate-controlled environment for swimming, water aerobics, and relaxation, ensuring that residents can enjoy aquatic activities regardless of external weather. Both pool areas are maintained to the highest standards, with professional lifeguard services and pristine water quality that ensures residents enjoy exceptional conditions and service.
                </p>
                <h3>Tennis and Pickleball Courts</h3>
                <p>
                  The Stirling Club includes professionally maintained clay tennis courts and modern pickleball courts that provide residents with opportunities for both recreational and competitive play. The tennis courts are maintained to professional tournament standards, and the club offers tennis instruction from certified professionals, clinics for players of all skill levels, and organized play opportunities that foster community connections. The pickleball courts reflect the growing popularity of this sport and provide additional recreational opportunities for residents who enjoy this fast-paced, social game. These facilities create a vibrant sports community within Turnberry Place, fostering connections among residents who share athletic interests.
                </p>
                <h3>Full-Service Spa and Beauty Services Center</h3>
                <p>
                  The Stirling Club's spa and beauty services center provides residents with access to professional spa treatments, massage therapy, facials, body treatments, and comprehensive beauty services without leaving the property. The spa's professional staff includes licensed massage therapists, estheticians, and beauty professionals who provide services that rival the best spas in Las Vegas. The spa's high-end facilities, including treatment rooms, steam rooms, saunas, and relaxation areas, create a true luxury spa experience. This amenity is particularly valuable for residents who value relaxation, self-care, and convenience, eliminating the need to travel to external spa facilities and providing immediate access to professional wellness services.
                </p>
                <h3>Multiple Dining Venues and Bars</h3>
                <p>
                  The Stirling Club features multiple dining venues and bars that provide residents with exceptional culinary experiences without leaving the property. These venues range from casual dining experiences perfect for everyday meals to fine dining establishments that accommodate special occasions and entertaining. The club's bars provide sophisticated environments for socializing, entertaining, and relaxation, with professional bartenders who craft signature cocktails and maintain extensive wine and spirits selections. The quality of the dining experiences, combined with the convenience of on-site dining, creates significant value for residents who appreciate fine cuisine and social experiences. The club's dining venues also accommodate private events, allowing residents to host gatherings in elegant, convenient settings.
                </p>
                <h3>Business Center and Conference Facilities</h3>
                <p>
                  The Stirling Club's business center includes professional conference rooms, meeting spaces, and comprehensive business facilities that accommodate professional needs. These facilities are particularly valuable for residents who work from home, conduct business from their residences, or need professional meeting spaces for clients, colleagues, or business associates. The business center's technology infrastructure includes high-speed internet, professional presentation equipment, video conferencing capabilities, and printing and copying services. The comfortable, professional environments ensure that residents can conduct business effectively without leaving the property. This amenity is increasingly important in today's remote work environment, where professional meeting spaces are essential for business success.
                </p>
                <h3>Social Lounges and Entertainment Spaces</h3>
                <p>
                  The Stirling Club features various lounges and entertainment spaces that provide residents with opportunities for socializing, relaxation, and entertainment. These spaces include sophisticated media lounges with large-screen displays and premium audio systems, game rooms with billiards and card tables, and social areas that accommodate various activities and group sizes. The club's design emphasizes both intimate spaces for small gatherings and larger areas for community events, creating a flexible environment that serves diverse resident needs. These spaces foster community connections and provide venues for resident-organized events and activities, enhancing the sense of community that defines Turnberry Place.
                </p>

                <h2>The Stirling Club's Role in Turnberry Place Community</h2>
                <p>
                  The Stirling Club serves as more than just a collection of amenities; it functions as the social and recreational heart of the Turnberry Place community. The club's design and programming foster connections among residents, creating a sense of community that is rare in high-rise condominium developments. This community-building aspect enhances the overall living experience and creates value that extends beyond individual amenities.
                </p>
                <h3>Social Hub and Community Center</h3>
                <p>
                  The Stirling Club functions as a social hub where residents can connect, socialize, and build relationships with neighbors who share similar interests and lifestyles. The club's dining venues, lounges, and recreational facilities provide natural gathering spaces where residents can meet casually or participate in organized events and activities. This social aspect creates a sense of community that enhances the overall living experience, as residents benefit from the connections and relationships that the club facilitates. The club's programming includes social events, holiday celebrations, and community activities that bring residents together and foster a vibrant community atmosphere.
                </p>
                <h3>Recreational Activities and Programming</h3>
                <p>
                  The Stirling Club offers comprehensive recreational programming that includes fitness classes, tennis clinics, social events, and educational activities. This programming ensures that residents can take full advantage of the club's facilities while connecting with others who share similar interests. The club's professional staff organizes and facilitates these activities, ensuring that they are well-executed and enjoyable. This programming creates opportunities for residents to explore new interests, maintain active lifestyles, and build relationships within the community.
                </p>
                <h3>Private Events and Entertaining</h3>
                <p>
                  The Stirling Club's facilities accommodate private events and entertaining, allowing residents to host gatherings, celebrations, and business functions in elegant, convenient settings. The club's dining venues, conference rooms, and social spaces can be reserved for private use, providing residents with professional venues for entertaining without leaving the property. This amenity is particularly valuable for residents who frequently host events, as it eliminates the need to secure external venues and provides immediate access to professional facilities and services. The club's event coordination services ensure that private events are executed flawlessly, creating memorable experiences for hosts and guests.
                </p>

                <h2>Recent Renovations and Modern Enhancements</h2>
                <p>
                  The Stirling Club's recent renovations have enhanced its facilities, ensuring that they remain state-of-the-art and competitive with the best private clubs in Las Vegas and beyond. These renovations reflect the commitment to maintaining excellence and providing residents with facilities that meet the highest standards of luxury and quality.
                </p>
                <h3>Updated Fitness Equipment and Facilities</h3>
                <p>
                  The fitness center's recent renovations include updated equipment from leading manufacturers, ensuring that residents have access to the latest fitness technology and equipment. The renovations also enhanced the facility's layout and design, creating a more efficient and enjoyable workout environment. These updates ensure that the fitness center remains competitive with the best private fitness facilities, providing residents with exceptional value and convenience.
                </p>
                <h3>Enhanced Pool Areas and Outdoor Spaces</h3>
                <p>
                  The pool areas' recent renovations enhanced the outdoor spaces with updated cabanas, improved lounge areas, and enhanced poolside service facilities. The renovations also improved the indoor pool area, creating a more sophisticated and comfortable environment for year-round swimming. These enhancements ensure that residents can enjoy resort-style pool experiences that rival the best hotel and resort facilities, all within the convenience of their residential community.
                </p>
                <h3>Modernized Dining and Social Spaces</h3>
                <p>
                  The dining venues and social spaces have been modernized with updated decor, improved layouts, and enhanced technology infrastructure. These renovations create more sophisticated and comfortable environments for dining, socializing, and entertaining. The modernized spaces reflect contemporary design trends while maintaining the elegance and luxury that define The Stirling Club, ensuring that residents enjoy facilities that are both timeless and current.
                </p>

                <h2>Value Proposition of The Stirling Club</h2>
                <p>
                  The Stirling Club's comprehensive amenities create exceptional value for Turnberry Place residents. If residents were to purchase separate memberships for the amenities available through The Stirling Club, the annual costs would exceed tens of thousands of dollars. Understanding this value proposition helps buyers appreciate the development's pricing structure and investment potential.
                </p>
                <h3>Cost Comparison to Separate Memberships</h3>
                <p>
                  Private fitness club memberships in Las Vegas can cost $200 to $500 per month, while spa memberships and services can cost hundreds of dollars per visit. Tennis club memberships, dining club memberships, and business center access would create additional significant expenses. The Stirling Club's inclusion of these amenities in Turnberry Place's HOA fees represents exceptional value, as residents receive access to world-class facilities without separate membership costs. This value proposition is particularly compelling for residents who would otherwise invest in multiple memberships and services, as it consolidates these expenses into a single, predictable monthly fee.
                </p>
                <h3>Convenience and Time Savings</h3>
                <p>
                  The Stirling Club's on-site location creates significant convenience and time savings for residents. The ability to access fitness facilities, pools, spa services, dining venues, and business facilities without leaving the property eliminates travel time and creates efficiency in daily routines. This convenience is particularly valuable for busy professionals, executives, and anyone who values time efficiency. The time savings, combined with the quality of the amenities, creates value that extends beyond financial considerations, as residents can maximize their time while enjoying exceptional facilities.
                </p>
                <h3>Exclusivity and Prestige</h3>
                <p>
                  The Stirling Club's exclusive nature, available only to Turnberry Place residents, creates a sense of exclusivity and prestige that enhances the overall living experience. The club's private membership model ensures that facilities remain uncrowded and provide personalized service, creating a true luxury experience. This exclusivity is difficult to replicate elsewhere and represents a significant value proposition for buyers who appreciate private club amenities and the prestige that comes with exclusive access.
                </p>

                <h2>Contact Dr. Jan Duffy for Stirling Club Information</h2>
                <p>
                  As a Las Vegas real estate expert with over 30 years of experience and deep knowledge of Turnberry Place and The Stirling Club, I can provide comprehensive information about the club's amenities, facilities, and value propositions. My expertise in luxury condominium developments, combined with my understanding of The Stirling Club's unique offerings, enables me to help buyers appreciate the exceptional value that this private club provides.
                </p>
                <p>
                  Whether you're interested in The Stirling Club's fitness facilities, recreational amenities, dining venues, business facilities, or social spaces, I can provide detailed information about how these amenities enhance daily living and create exceptional value. My goal is to help you understand the comprehensive nature of The Stirling Club and how it contributes to Turnberry Place's reputation as Las Vegas's premier high-rise condominium community.
                </p>
                <p className="mt-4">
                  <strong>Ready to experience The Stirling Club?</strong> Call or text me at <a href="tel:7022221988" className="text-decoration-underline">(702) 222-1988</a> to schedule a private tour of The Stirling Club and discuss how this exclusive private club can enhance your luxury lifestyle. With my extensive knowledge of The Stirling Club and Turnberry Place, I can help you appreciate the exceptional value and lifestyle benefits that this world-class facility provides.
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

export async function getStaticProps(): Promise<GetStaticPropsResult<StirlingClubPageProps>> {
  return {
    props: {
      menus: await getMenus({} as any),
    },
  }
}
