import { GetStaticPropsResult } from "next"
import Head from "next/head"
import { Layout, LayoutProps } from "components/layout"
import { getMenus } from "lib/get-menus"
import { Meta } from "components/meta"
import { JsonLdSchema } from "components/json-ld-schema"
import { AgentBioModal } from "components/agent-bio-modal"
import { ContactMessageModal } from "components/contact-message-modal"
import { PowerOfNumbers } from "components/power-of-numbers"
import { ClientTestimonials } from "components/client-testimonials"
import { VIPNewsletterSignup } from "components/vip-newsletter-signup"
import Image from "next/image"
import Script from "next/script"

interface AgentPageProps extends LayoutProps {}

export default function AgentPage({ menus }: AgentPageProps) {
  return (
    <Layout menus={menus}>
      <Meta title="Dr. Jan Duffy, REALTOR - Turnberry Place Las Vegas" />
      <Head>
        <title>Dr. Jan Duffy, REALTOR - Turnberry Place Las Vegas</title>
        <meta
          name="description"
          content="Dr. Jan Duffy specializes in luxury high-rise condos at Turnberry Place Las Vegas. Licensed REALTOR (S.0197614.LLC) with Berkshire Hathaway HomeServices. Call/text 702-222-1964"
        />
      </Head>
      <JsonLdSchema type="agent" />
      <div className="card-content card-agent">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <div className="row justify-content-center">
                <div className="col-12 text-center">
                  <h1>Dr. Jan Duffy, REALTOR | Las Vegas Luxury Real Estate Expert</h1>
                  <p className="lead">
                    With over 30 years of experience in Las Vegas real estate, Dr. Jan Duffy specializes in luxury high-rise condominiums, particularly at Turnberry Place. As a licensed REALTOR (S.0197614.LLC) with Berkshire Hathaway HomeServices Nevada Properties, Dr. Duffy brings unparalleled expertise, market knowledge, and dedication to helping buyers and sellers achieve their real estate goals in Las Vegas's premier luxury market.
                  </p>
                  <div className="my-1">
                    The Turnberry Place Team at Berkshire Hathaway HomeServices Nevada Properties
                    <br /> License: S.0197614.LLC
                  </div>
                </div>
                <div className="col-12 py-2 d-flex align-items-center justify-content-center">
                  <Image
                    className="img-fluid agent-photo"
                    src="/images/turnberry/asset-1.jpg"
                    alt="Photo of Dr. Jan Duffy, REALTOR"
                    width={225}
                    height={225}
                  />
                </div>
                <div className="col-12 text-center py-2">
                  <div className="py-2 d-flex flex-column flex-lg-row align-items-center justify-content-center" style={{ gap: "5px" }}>
                    <div className="mx-2">
                      <span className="">Call/Text:</span>{" "}
                      <a href="tel:7022221964" title="Call or text Dr. Jan Duffy">
                        (702) 222-1964
                      </a>
                    </div>
                    <div className="mx-2">
                      <span className="">Office:</span>{" "}
                      <a href="tel:7025001955" title="Berkshire Hathaway office">
                        (702) 500-1955
                      </a>
                    </div>
                  </div>
                  <div className="py-2">
                    <AgentBioModal agentId="14435" />
                  </div>
                </div>
                <div className="col-12 text-center py-2">
                  <div className="d-inline-block" style={{ maxWidth: '300px', width: '100%' }}>
                    <Image
                      className="img-fluid company-logo"
                      src="/images/turnberry/asset-19.jpg"
                      alt="The Turnberry Place Team at Berkshire Hathaway HomeServices Nevada Properties Logo"
                      width={300}
                      height={125}
                    />
                  </div>
                </div>
              </div>

              <div className="row mt-5">
                <div className="col-12 col-lg-10 mx-auto">
                  <h2>Three Decades of Las Vegas Real Estate Excellence</h2>
                  <p>
                    Dr. Jan Duffy's 30+ years of experience in Las Vegas real estate have established her as one of the city's most trusted and knowledgeable luxury real estate professionals. Her deep understanding of the Las Vegas market, combined with her specialization in luxury high-rise condominiums, makes her uniquely qualified to help buyers and sellers navigate the complexities of luxury real estate transactions. Dr. Duffy's expertise extends beyond simple transactions; she provides comprehensive market analysis, investment guidance, and personalized service that reflects her commitment to client success.
                  </p>
                  <h3>Specialization in Luxury High-Rise Condominiums</h3>
                  <p>
                    Dr. Duffy's specialization in luxury high-rise condominiums, particularly at Turnberry Place, reflects her deep understanding of this unique market segment. Her expertise encompasses not only the physical characteristics of luxury condominiums but also the lifestyle, amenities, and investment considerations that make these properties desirable. This specialization enables her to provide clients with insights that go beyond basic property information, helping them understand the full value proposition of luxury high-rise living in Las Vegas.
                  </p>
                  <h3>Market Knowledge and Trends</h3>
                  <p>
                    With three decades of experience, Dr. Duffy has witnessed and adapted to numerous market cycles, economic changes, and industry developments. This historical perspective, combined with her current market knowledge, enables her to provide clients with informed guidance about market trends, pricing strategies, and investment timing. Her ability to analyze market conditions and predict trends helps clients make informed decisions that align with their goals and timelines.
                  </p>
                  <h3>Client-Centered Approach</h3>
                  <p>
                    Dr. Duffy's client-centered approach emphasizes understanding each client's unique needs, preferences, and goals. She takes time to listen, ask questions, and develop a comprehensive understanding of what clients hope to achieve through their real estate transactions. This personalized approach ensures that her recommendations and strategies align with client objectives, whether they're seeking a primary residence, second home, or investment property.
                  </p>

                  <h2>Expertise in Turnberry Place and Luxury Developments</h2>
                  <p>
                    Dr. Duffy's deep knowledge of Turnberry Place and other luxury developments in Las Vegas sets her apart as a specialist in this market segment. Her understanding of Turnberry Place's unique features, amenities, pricing structures, and investment potential enables her to provide clients with comprehensive information that helps them make informed decisions. This expertise is particularly valuable for buyers and sellers who want to work with an agent who truly understands the luxury condominium market.
                  </p>
                  <h3>Comprehensive Turnberry Place Knowledge</h3>
                  <p>
                    Dr. Duffy's comprehensive knowledge of Turnberry Place encompasses all four towers, their unique characteristics, pricing structures, and value propositions. She understands the differences between towers, floor levels, views, and finishes, enabling her to help clients identify residences that best meet their needs and preferences. Her knowledge extends to The Stirling Club's amenities, the development's security features, and the lifestyle benefits that make Turnberry Place desirable. This comprehensive understanding helps clients appreciate the full value proposition of Turnberry Place living.
                  </p>
                  <h3>Understanding of Luxury Market Dynamics</h3>
                  <p>
                    Dr. Duffy's understanding of luxury market dynamics enables her to provide clients with insights into pricing trends, market conditions, and investment potential. She understands how luxury properties differ from standard residential properties in terms of pricing, marketing, and transaction processes. This understanding helps clients navigate the luxury market effectively, whether they're buying or selling. Her ability to analyze comparable properties, assess value, and develop pricing strategies reflects her deep market knowledge and experience.
                  </p>
                  <h3>Network and Relationships</h3>
                  <p>
                    Dr. Duffy's extensive network and relationships within the Las Vegas real estate community provide clients with access to resources, information, and opportunities that might not be available through other agents. Her relationships with other luxury real estate professionals, developers, lenders, and service providers enable her to facilitate transactions efficiently and effectively. These relationships also provide clients with access to off-market opportunities, pre-construction information, and other advantages that can be valuable in luxury real estate transactions.
                  </p>

                  <h2>Professional Credentials and Affiliations</h2>
                  <p>
                    Dr. Jan Duffy's professional credentials and affiliations reflect her commitment to excellence, ongoing education, and adherence to the highest professional standards. Her license (S.0197614.LLC) with the State of Nevada, combined with her affiliation with Berkshire Hathaway HomeServices Nevada Properties, demonstrates her commitment to professional excellence and ethical conduct. These credentials provide clients with confidence that they're working with a qualified, reputable real estate professional.
                  </p>
                  <h3>Nevada Real Estate License</h3>
                  <p>
                    Dr. Duffy's Nevada real estate license (S.0197614.LLC) demonstrates her compliance with state licensing requirements and her commitment to maintaining the knowledge and skills necessary to serve clients effectively. Her license status reflects her ongoing education, ethical conduct, and adherence to state regulations that protect consumers. This licensing provides clients with assurance that they're working with a qualified professional who meets state standards for real estate practice.
                  </p>
                  <h3>Berkshire Hathaway HomeServices Affiliation</h3>
                  <p>
                    Dr. Duffy's affiliation with Berkshire Hathaway HomeServices Nevada Properties provides clients with access to one of the most respected real estate brands in the industry. This affiliation reflects her commitment to working with a company that values excellence, integrity, and client service. Berkshire Hathaway HomeServices' reputation, resources, and marketing capabilities enhance Dr. Duffy's ability to serve clients effectively, whether they're buying or selling luxury properties.
                  </p>
                  <h3>Ongoing Education and Professional Development</h3>
                  <p>
                    Dr. Duffy's commitment to ongoing education and professional development ensures that she remains current with market trends, industry developments, and best practices. Her continuous learning enables her to provide clients with the most current information and advice, reflecting changes in the market, regulations, and industry standards. This commitment to professional development demonstrates her dedication to excellence and her understanding that the real estate industry is constantly evolving.
                  </p>

                  <h2>Services for Buyers</h2>
                  <p>
                    Dr. Duffy provides comprehensive services for buyers seeking luxury properties in Las Vegas, with particular expertise in Turnberry Place and other high-rise condominium developments. Her buyer services encompass property search, market analysis, negotiation, and transaction management, all designed to help buyers find the perfect property and complete successful transactions.
                  </p>
                  <h3>Property Search and Selection</h3>
                  <p>
                    Dr. Duffy's property search and selection services help buyers identify properties that meet their needs, preferences, and budgets. She uses her knowledge of the luxury market, access to listings, and understanding of buyer preferences to identify properties that align with client goals. Her ability to assess properties, compare options, and provide insights helps buyers make informed decisions about which properties to pursue. This service saves buyers time and ensures they consider all relevant options.
                  </p>
                  <h3>Market Analysis and Pricing Guidance</h3>
                  <p>
                    Dr. Duffy's market analysis and pricing guidance help buyers understand market conditions, property values, and negotiation strategies. She analyzes comparable properties, market trends, and property characteristics to provide buyers with informed guidance about pricing and value. This analysis helps buyers make competitive offers that reflect market conditions while protecting their interests. Her pricing guidance helps buyers avoid overpaying while ensuring they remain competitive in the luxury market.
                  </p>
                  <h3>Negotiation and Transaction Management</h3>
                  <p>
                    Dr. Duffy's negotiation and transaction management services help buyers navigate the complexities of luxury real estate transactions. She uses her experience, market knowledge, and negotiation skills to help buyers achieve favorable terms and conditions. Her transaction management ensures that all aspects of the purchase process are handled efficiently and effectively, from initial offer through closing. This comprehensive service helps buyers complete transactions successfully while minimizing stress and complications.
                  </p>

                  <h2>Services for Sellers</h2>
                  <p>
                    Dr. Duffy provides comprehensive services for sellers of luxury properties, helping them market their properties effectively, price them competitively, and complete successful transactions. Her seller services encompass market analysis, pricing strategy, marketing, and transaction management, all designed to help sellers achieve their goals efficiently and effectively.
                  </p>
                  <h3>Market Analysis and Pricing Strategy</h3>
                  <p>
                    Dr. Duffy's market analysis and pricing strategy services help sellers understand market conditions, property values, and optimal pricing strategies. She analyzes comparable properties, market trends, and property characteristics to develop pricing strategies that maximize value while ensuring competitive positioning. This analysis helps sellers price their properties appropriately, avoiding overpricing that can lead to extended market time or underpricing that leaves money on the table.
                  </p>
                  <h3>Marketing and Promotion</h3>
                  <p>
                    Dr. Duffy's marketing and promotion services help sellers showcase their properties effectively to potential buyers. She uses her knowledge of luxury marketing, access to marketing resources, and understanding of buyer preferences to develop marketing strategies that reach the right audience. Her marketing services encompass professional photography, online listings, print materials, and other promotional activities designed to attract qualified buyers. This comprehensive marketing approach helps sellers maximize exposure and attract serious buyers.
                  </p>
                  <h3>Transaction Management and Closing</h3>
                  <p>
                    Dr. Duffy's transaction management and closing services help sellers navigate the complexities of luxury real estate transactions. She coordinates with buyers, their agents, lenders, title companies, and other parties to ensure that transactions proceed smoothly from contract to closing. Her attention to detail, communication, and problem-solving skills help sellers complete transactions successfully while minimizing complications and delays.
                  </p>

                  <h2>Investment Guidance and Market Insights</h2>
                  <p>
                    Dr. Duffy's investment guidance and market insights help clients understand the investment potential of luxury properties, market trends, and strategies for maximizing returns. Her experience with luxury real estate investments, combined with her market knowledge, enables her to provide clients with informed guidance about investment opportunities, risks, and strategies.
                  </p>
                  <h3>Investment Analysis</h3>
                  <p>
                    Dr. Duffy's investment analysis helps clients understand the investment potential of luxury properties, including appreciation potential, rental income possibilities, and tax considerations. She analyzes market trends, property characteristics, and investment factors to provide clients with insights that help them make informed investment decisions. This analysis helps clients understand whether properties align with their investment goals and risk tolerance.
                  </p>
                  <h3>Market Trends and Predictions</h3>
                  <p>
                    Dr. Duffy's understanding of market trends and her ability to analyze market conditions enable her to provide clients with insights into future market developments. Her historical perspective, combined with her current market knowledge, helps her identify trends and predict market movements that can affect property values and investment returns. These insights help clients make informed decisions about timing, pricing, and investment strategies.
                  </p>

                  <h2>Contact Dr. Jan Duffy</h2>
                  <div className="py-3">
                    <ContactMessageModal />
                  </div>
                  <p>
                    Whether you're interested in buying or selling a luxury property at Turnberry Place or another Las Vegas luxury development, Dr. Jan Duffy is ready to help you achieve your real estate goals. Her 30+ years of experience, deep market knowledge, and commitment to client success make her an ideal partner for luxury real estate transactions.
                  </p>
                  <p>
                    To discuss your real estate needs, schedule a property showing, or learn more about Turnberry Place and the Las Vegas luxury market, contact Dr. Jan Duffy today. Her expertise, dedication, and personalized service ensure that you receive the guidance and support you need to make informed decisions and complete successful transactions.
                  </p>
                  <p className="mt-4">
                    <strong>Ready to work with a Las Vegas luxury real estate expert?</strong> Call or text Dr. Jan Duffy at <a href="tel:7022221964" className="text-decoration-underline">(702) 222-1964</a> or contact the office at <a href="tel:7025001955" className="text-decoration-underline">(702) 500-1955</a>. With over 30 years of experience and deep knowledge of Turnberry Place and the Las Vegas luxury market, Dr. Duffy can help you achieve your real estate goals with confidence and expertise.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Sold Listings Section */}
      <div className="card-content py-5 bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <div className="page-header text-center mb-4">
                <h2>Recent Sold Listings</h2>
                <p className="lead">
                  View my recent successful transactions and closed sales. These listings demonstrate my track record of helping clients achieve their real estate goals in Las Vegas.
                </p>
              </div>
              <div className="widget-wrapper">
                <Script
                  src="https://em.realscout.com/widgets/realscout-web-components.umd.js"
                  type="module"
                  strategy="lazyOnload"
                />
                <style jsx>{`
                  realscout-your-listings {
                    --rs-listing-divider-color: rgb(101, 141, 172);
                    width: 100%;
                  }
                `}</style>
                {/* @ts-ignore - Custom web component */}
                <realscout-your-listings 
                  agent-encoded-id="QWdlbnQtMjI1MDUw" 
                  sort-order="STATUS_AND_SIGNIFICANT_CHANGE" 
                  listing-status="For Sale,Sold" 
                  property-types="SFR"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Power of Numbers Section */}
      <PowerOfNumbers />

      {/* Client Testimonials Section */}
      <ClientTestimonials />

      {/* VIP Newsletter Signup */}
      <div className="card-content py-5 bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 col-lg-6">
              <VIPNewsletterSignup 
                title="Stay Connected with Dr. Jan Duffy"
                subtitle="Join our VIP list to receive exclusive Turnberry Place listings, market updates, and luxury real estate insights"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps(): Promise<GetStaticPropsResult<AgentPageProps>> {
  return {
    props: {
      menus: await getMenus({} as any),
    },
  }
}
