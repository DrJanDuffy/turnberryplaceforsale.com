import { GetStaticPropsResult } from "next"
import Head from "next/head"
import { Layout, LayoutProps } from "components/layout"
import { getMenus } from "lib/get-menus"
import { Meta } from "components/meta"
import { JsonLdSchema } from "components/json-ld-schema"
import { ContactForm } from "components/contact-form"
// ClientTestimonials and VIPNewsletterSignup available on homepage and /agent page
import Image from "next/image"

interface RequestDetailsPageProps extends LayoutProps {}

export default function RequestDetailsPage({ menus }: RequestDetailsPageProps) {
  return (
    <Layout menus={menus}>
      <Meta title="Request Details - Turnberry Place Las Vegas" />
      <Head>
        <title>Request Details - Turnberry Place Las Vegas</title>
        <meta
          name="description"
          content="Request pricing and details for luxury condos at Turnberry Place Las Vegas. Get information on 1-4 bedroom residences from $800K-$10M+. Call/text 702-222-1988"
        />
      </Head>
      <JsonLdSchema type="property" />
      <div 
        className="card-content card-contact-form py-5" 
        style={{
          backgroundImage: "url(https://photos.cribflyer-proxy.com/cdn-cgi/image/width=1500,height=1000,fit=crop,rotate=0,format=auto,quality=85/4616/60013/2953239/photo.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      >
        <div className="container-fluid">
          <div className="row align-items-center justify-content-center">
            <div className="col-12 col-sm-10 col-md-8 col-lg-7 col-xl-6 text-center px-sm-2">
              <div className="contact-form-box p-4">
                <div className="mt-0 mt-md-2 d-flex align-items-center justify-content-center">
                  <div className="w-10 horiz-line d-none d-sm-block"></div>
                  <h1 className="my-0 mx-2 heading-color" id="contact-label">
                    Turnberry Place Request Pricing & Details
                  </h1>
                  <div className="w-10 horiz-line d-none d-sm-block"></div>
                </div>
                <ContactForm title="Turnberry Place Request Pricing & Details" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="card-content py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <h2>Request Turnberry Place Pricing and Detailed Information</h2>
              <p>
                Use the form above to request comprehensive pricing and detailed information about Turnberry Place Las Vegas luxury high-rise condominiums. Whether you're interested in a specific residence, exploring your options, or seeking general information about Turnberry Place, I'm here to provide you with the detailed information you need to make informed decisions. As a Las Vegas real estate expert with over 30 years of experience and deep knowledge of Turnberry Place, I can provide comprehensive information about pricing, availability, features, amenities, and investment potential.
              </p>
              <h3>What Information You'll Receive</h3>
              <p>
                When you request details through the form above, you'll receive comprehensive information about Turnberry Place residences, including current pricing, available properties, floor plans, features, amenities, and market conditions. I'll also provide information about The Stirling Club, security features, location advantages, and lifestyle benefits that make Turnberry Place desirable. This comprehensive information helps you understand the full value proposition of Turnberry Place living and make informed decisions about whether these luxury residences meet your needs and preferences.
              </p>
              <h3>Personalized Response</h3>
              <p>
                Your request will receive a personalized response tailored to your specific interests and needs. Whether you're interested in a particular price range, size, view, or tower, I'll provide information that's relevant to your situation. This personalized approach ensures that you receive the most useful information for your specific circumstances, helping you make informed decisions about Turnberry Place residences without being overwhelmed by irrelevant details.
              </p>
              <h3>Follow-Up Communication</h3>
              <p>
                After you submit your request, I'll follow up to answer any questions you have, provide additional information, and help you move forward with your Turnberry Place exploration. Whether you're ready to schedule a private showing, need more information about specific residences, or want to discuss financing options, I'm here to help. This ongoing communication ensures that you have all the support you need throughout your Turnberry Place journey.
              </p>

              <h2>Understanding Turnberry Place Pricing</h2>
              <p>
                Turnberry Place pricing reflects the development's luxury positioning, prime location, comprehensive amenities, and exceptional quality. Understanding pricing factors helps you appreciate the value proposition and make informed decisions about which residences align with your budget and goals. Pricing varies by tower, floor level, size, view quality, and finishes, creating opportunities for buyers at various price points.
              </p>
              <h3>Pricing Factors and Value Drivers</h3>
              <p>
                Turnberry Place pricing is influenced by several factors, including tower (Tower 1 offers entry-level pricing, while Tower 4 commands premium prices), floor level (higher floors typically command higher prices due to enhanced views), size (larger residences command higher prices), view quality (Strip views, mountain views, and panoramic vistas affect pricing), and finishes (premium finishes and custom details justify higher prices). Understanding these factors helps you identify residences that offer the best value for your budget and preferences.
              </p>
              <h3>Price Ranges by Residence Type</h3>
              <p>
                Turnberry Place residences are available at various price points: one-bedroom residences typically range from approximately $800,000 to $1.5 million, two-bedroom residences from $1.2 million to $3.5 million, three-bedroom residences from $2 million to $5 million, and four-bedroom residences from $3.5 million to $8 million. Penthouses and high-floor residences command prices from $5 million to over $10 million. Understanding these price ranges helps you identify residences that align with your budget and provides context for evaluating value propositions.
              </p>
              <h3>Investment Considerations</h3>
              <p>
                When requesting pricing information, consider not only purchase prices but also HOA fees, property taxes, insurance costs, and potential appreciation. Understanding these total costs helps you evaluate the complete investment picture and make informed decisions about whether Turnberry Place residences align with your financial goals. I can provide detailed information about these costs and help you understand the complete financial picture of Turnberry Place ownership.
              </p>

              <h2>Available Residences and Inventory</h2>
              <p>
                Turnberry Place's available inventory changes regularly as properties are sold and new listings come to market. When you request details, I'll provide current information about available residences that match your interests, including pricing, features, views, and availability. This current information helps you understand what's available now and identify opportunities that align with your preferences and timeline.
              </p>
              <h3>Current Listings and Availability</h3>
              <p>
                I maintain current information about Turnberry Place listings and availability, enabling me to provide you with up-to-date information about what's available when you request details. This current information includes pricing, features, views, floor levels, and any special circumstances that might affect availability or pricing. Having current information helps you make timely decisions and take advantage of opportunities as they arise.
              </p>
              <h3>Off-Market and Pre-Listing Opportunities</h3>
              <p>
                In addition to current listings, I may have information about off-market opportunities or properties that are coming to market soon. These opportunities can provide advantages for buyers who are ready to move quickly or who want to explore options before they're widely available. When you request details, I'll share information about these opportunities if they align with your interests and timeline.
              </p>
              <h3>New Construction and Future Opportunities</h3>
              <p>
                While Turnberry Place is an established development, I can provide information about resale opportunities and any future development plans that might affect the community. Understanding both current availability and future opportunities helps you make informed decisions about timing and strategy for your Turnberry Place purchase.
              </p>

              <h2>Detailed Property Information</h2>
              <p>
                When you request details, I'll provide comprehensive information about Turnberry Place residences, including floor plans, features, finishes, views, and amenities. This detailed information helps you understand what each residence offers and how it compares to other options, enabling you to make informed decisions about which properties best meet your needs and preferences.
              </p>
              <h3>Floor Plans and Layouts</h3>
              <p>
                Detailed floor plan information helps you understand residence layouts, space utilization, and how properties function for daily living and entertaining. I can provide floor plans, room dimensions, and layout descriptions that help you visualize how you would use and enjoy different residences. This information is particularly valuable for understanding how residences accommodate your lifestyle needs and preferences.
              </p>
              <h3>Features and Finishes</h3>
              <p>
                Detailed information about features and finishes helps you understand the quality and sophistication available in Turnberry Place residences. I can provide information about flooring materials, countertops, appliances, cabinetry, fixtures, and other features that define luxury living. This information helps you assess the quality and value of different residences and understand how finishes contribute to the overall living experience.
              </p>
              <h3>Views and Orientations</h3>
              <p>
                Detailed information about views and orientations helps you understand what vistas are available from different residences and how views affect the living experience. I can provide information about Strip views, mountain views, city views, and how floor level and orientation affect view quality. This information helps you identify residences that offer the views you value most and understand how views contribute to the overall value proposition.
              </p>

              <h2>Financing and Purchase Information</h2>
              <p>
                When you request details, I can also provide information about financing options, purchase processes, and other aspects of acquiring a Turnberry Place residence. This information helps you understand the complete picture of Turnberry Place ownership and prepares you to move forward when you're ready.
              </p>
              <h3>Financing Options</h3>
              <p>
                I can provide information about financing options for Turnberry Place residences, including conventional loans, jumbo loans, and cash purchase considerations. Understanding financing options helps you evaluate affordability and plan for your Turnberry Place purchase. I can also connect you with lenders who specialize in luxury condominium financing if you need assistance with financing arrangements.
              </p>
              <h3>Purchase Process</h3>
              <p>
                Information about the purchase process helps you understand what to expect when buying a Turnberry Place residence, including offer processes, inspections, appraisals, and closing procedures. Understanding the purchase process helps you prepare for your transaction and ensures that you're ready to move forward when you find the perfect residence. I'll guide you through every step of the process to ensure a smooth and successful transaction.
              </p>
              <h3>Timeline and Next Steps</h3>
              <p>
                When you request details, I can also discuss timelines and next steps based on your situation and goals. Whether you're ready to move forward immediately, need time to consider your options, or are planning for a future purchase, I can provide guidance about appropriate timelines and help you plan your next steps. This planning helps ensure that you move forward at a pace that's comfortable for you while taking advantage of opportunities as they arise.
              </p>

              <h2>Why Request Details from Dr. Jan Duffy</h2>
              <p>
                Requesting details from me provides you with access to comprehensive information, expert guidance, and personalized service that helps you make informed decisions about Turnberry Place. My 30+ years of experience, deep knowledge of Turnberry Place, and commitment to client success ensure that you receive the information and support you need throughout your Turnberry Place journey.
              </p>
              <h3>Expert Knowledge and Experience</h3>
              <p>
                My 30+ years of experience in Las Vegas real estate, combined with my deep knowledge of Turnberry Place, enables me to provide comprehensive information and expert guidance that helps you make informed decisions. I understand not only the physical characteristics of Turnberry Place residences but also market conditions, pricing trends, investment potential, and lifestyle benefits that affect your decision-making. This expertise ensures that you receive accurate, relevant, and valuable information.
              </p>
              <h3>Personalized Service and Attention</h3>
              <p>
                When you request details, you'll receive personalized service and attention that reflects my commitment to understanding your unique needs and providing information that's relevant to your situation. I take time to listen, ask questions, and develop a comprehensive understanding of what you're seeking, ensuring that the information I provide aligns with your interests and goals. This personalized approach ensures that you receive the most useful information for your specific circumstances.
              </p>
              <h3>Ongoing Support and Guidance</h3>
              <p>
                Requesting details is just the beginning of our relationship. I'm committed to providing ongoing support and guidance throughout your Turnberry Place journey, whether you're exploring options, ready to make an offer, or need assistance with any aspect of your purchase. This ongoing support ensures that you have the information and assistance you need at every stage of the process.
              </p>

              <h2>Submit Your Request Today</h2>
              <p>
                Ready to learn more about Turnberry Place? Submit your request using the form above, and I'll provide you with comprehensive information about pricing, availability, features, and lifestyle benefits. Whether you're ready to move forward or just beginning your exploration, I'm here to provide the information and guidance you need to make informed decisions about Turnberry Place luxury living.
              </p>
              <p>
                For immediate assistance, you can also call or text me directly at <a href="tel:7022221988" className="text-decoration-underline">(702) 222-1988</a> or contact the office at <a href="tel:7025001955" className="text-decoration-underline">(702) 500-1955</a>. I'm here to help you discover the exceptional quality and lifestyle that Turnberry Place offers and find the perfect luxury residence that meets your needs and exceeds your expectations.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Client Testimonials Section */}
      {/* Client Testimonials and VIP Newsletter - Available on homepage and /agent page */}
    </Layout>
  )
}

export async function getStaticProps(): Promise<GetStaticPropsResult<RequestDetailsPageProps>> {
  return {
    props: {
      menus: await getMenus({} as any),
    },
  }
}
