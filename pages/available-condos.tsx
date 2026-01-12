import { GetStaticPropsResult } from "next"
import Head from "next/head"
import { Layout, LayoutProps } from "components/layout"
import { getMenus } from "lib/get-menus"
import { Meta } from "components/meta"
import { JsonLdSchema } from "components/json-ld-schema"
import Script from "next/script"
import Link from "next/link"

interface AvailableCondosPageProps extends LayoutProps {}

export default function AvailableCondosPage({ menus }: AvailableCondosPageProps) {
  return (
    <Layout menus={menus}>
      <Meta title="Available Las Vegas Condos - Turnberry Place Las Vegas" />
      <Head>
        <title>Available Las Vegas Condos - Turnberry Place Las Vegas</title>
        <meta
          name="description"
          content="Browse available luxury condos for sale at Turnberry Place Las Vegas. 1-4 bedroom residences from $800K-$10M+ with Strip views. Call/text 702-222-1988"
        />
      </Head>
      <JsonLdSchema type="property" propertyPrice="$800,000 - $10,000,000+" />
      <div className="card-content card-embed-widget py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <h1 className="text-center mb-4">Available Las Vegas Condos at Turnberry Place</h1>
              <p className="lead text-center mb-5">
                Browse available luxury condominiums for sale at Turnberry Place Las Vegas, featuring one to four bedroom residences ranging from approximately $800,000 to over $10 million. Each available residence offers premium finishes, stunning views of the Las Vegas Strip or surrounding mountains, and exclusive access to The Stirling Club's world-class amenities. As a Las Vegas real estate expert with over 30 years of experience, I can provide comprehensive information about available properties and help you find the perfect Turnberry Place residence.
              </p>
              <div className="widget-wrapper">
                <Script
                  src="https://em.realscout.com/widgets/realscout-web-components.umd.js"
                  type="module"
                  strategy="lazyOnload"
                />
                <style jsx>{`
                  realscout-office-listings {
                    --rs-listing-divider-color: rgb(101, 141, 172);
                    width: 100%;
                  }
                `}</style>
                {/* @ts-ignore - Custom web component */}
                <realscout-office-listings
                  agent-encoded-id="QWdlbnQtMjI1MDUw"
                  sort-order="PRICE_HIGH"
                  listing-status="For Sale"
                  property-types="TC"
                  price-min="600000"
                ></realscout-office-listings>
              </div>
              <div className="text-center mt-4">
                <p className="mb-3">Interested in viewing these luxury condos?</p>
                <a href="tel:7022221988" className="btn btn-custom btn-lg" title="Call or text 702-222-1988">
                  Call/Text (702) 222-1988
                </a>
              </div>
            </div>
          </div>
          
          <div className="row mt-5">
            <div className="col-12 col-lg-10 mx-auto">
              <h2>Exploring Available Turnberry Place Condominiums</h2>
              <p>
                The available condominiums at Turnberry Place represent some of Las Vegas's most desirable luxury residences, featuring exceptional quality, prime location, and comprehensive amenities. Each available property offers unique characteristics, views, and features that appeal to different buyers with varying needs, preferences, and budgets. Understanding what's available helps you identify properties that align with your goals and provides opportunities to explore luxury living at Turnberry Place.
              </p>
              <h3>Current Inventory and Availability</h3>
              <p>
                Turnberry Place's available inventory changes regularly as properties are sold and new listings come to market. The RealScout widget above displays current available properties, providing real-time information about what's on the market. This current inventory includes residences across all four towers, various floor levels, different sizes, and various price points, creating opportunities for buyers with diverse needs and budgets. Understanding current availability helps you identify opportunities and make timely decisions about properties that interest you.
              </p>
              <h3>Property Types and Sizes</h3>
              <p>
                Available Turnberry Place condominiums include one to four bedroom residences ranging from approximately 1,200 to over 8,000 square feet. One-bedroom residences offer efficient luxury living perfect for professionals or second-home owners, while two-bedroom residences provide additional space for home offices or guest accommodations. Three and four-bedroom residences offer maximum space and flexibility for families, those who entertain frequently, or residents who require additional space for various purposes. Understanding available property types helps you identify residences that match your space requirements and lifestyle needs.
              </p>
              <h3>Price Ranges and Value Propositions</h3>
              <p>
                Available Turnberry Place condominiums span a wide price range, from approximately $800,000 for entry-level one-bedroom residences to over $10 million for premium penthouses. This price range accommodates buyers with various budgets while ensuring that all available properties offer exceptional quality, comprehensive amenities, and prime location advantages. Understanding price ranges helps you identify properties that align with your budget and provides context for evaluating value propositions at different price points.
              </p>

              <h2>Features of Available Turnberry Place Residences</h2>
              <p>
                All available Turnberry Place residences feature premium finishes, sophisticated design, and exceptional quality that define luxury living. While specific features vary by property, all available residences share common characteristics that reflect the development's luxury positioning and commitment to excellence.
              </p>
              <h3>Premium Interior Finishes</h3>
              <p>
                Available Turnberry Place residences feature premium interior finishes, including hardwood or premium tile flooring, granite or quartz countertops, high-end appliances from leading manufacturers, custom cabinetry, and designer fixtures. These finishes create an atmosphere of refined elegance and reflect the development's commitment to quality. Understanding these finishes helps you appreciate the value and sophistication available in every Turnberry Place residence, regardless of size or price point.
              </p>
              <h3>Spectacular Views</h3>
              <p>
                Available Turnberry Place residences offer various view options, including Strip views, mountain views, city views, and combinations of these vistas. View quality varies by floor level, orientation, and tower, with higher floors typically providing more expansive and dramatic views. Understanding view options helps you identify available properties that offer the vistas you value most and provides context for how views affect property values and living experiences.
              </p>
              <h3>Exclusive Access to The Stirling Club</h3>
              <p>
                All available Turnberry Place residences include exclusive access to The Stirling Club, an 80,000-square-foot private membership facility. This access provides residents with world-class amenities, including fitness facilities, pools, tennis courts, spa services, dining venues, and social spaces, without separate membership costs. Understanding this amenity access helps you appreciate the comprehensive lifestyle benefits that come with every Turnberry Place residence, regardless of which specific property you choose.
              </p>

              <h2>Understanding Available Property Listings</h2>
              <p>
                The RealScout widget above provides real-time information about available Turnberry Place properties, including pricing, features, photos, and contact information. Understanding how to use this information helps you identify properties that interest you and take the next steps toward viewing and potentially purchasing your perfect Turnberry Place residence.
              </p>
              <h3>Using the RealScout Widget</h3>
              <p>
                The RealScout widget displays available Turnberry Place properties with detailed information, including photos, pricing, square footage, bedrooms, bathrooms, and other features. You can filter properties by price range, size, or other criteria to identify residences that match your preferences. The widget also provides contact information and the ability to request more information or schedule showings directly. Understanding how to use this widget helps you efficiently explore available properties and identify those that interest you most.
              </p>
              <h3>Property Details and Information</h3>
              <p>
                Each available property listing includes detailed information about features, finishes, views, and characteristics that help you understand what each residence offers. This information enables you to compare properties, identify those that match your preferences, and make informed decisions about which residences to view in person. Understanding property details helps you focus your search on residences that are most likely to meet your needs and preferences.
              </p>
              <h3>Requesting Additional Information</h3>
              <p>
                For available properties that interest you, you can request additional information, schedule private showings, or discuss pricing and terms. I'm available to provide comprehensive information about any available property, answer questions, and help you move forward with your Turnberry Place purchase. This additional information helps you make informed decisions about which properties to pursue and ensures that you have all the details you need to move forward confidently.
              </p>

              <h2>Working with Dr. Jan Duffy on Available Properties</h2>
              <p>
                As a Las Vegas real estate expert with over 30 years of experience and deep knowledge of Turnberry Place, I can provide comprehensive information about available properties, help you identify residences that match your needs, and guide you through the purchase process. My expertise in luxury high-rise condominiums, combined with my understanding of Turnberry Place's unique characteristics, enables me to help you find the perfect available residence.
              </p>
              <h3>Property Search and Selection</h3>
              <p>
                I can help you search available Turnberry Place properties, identify residences that match your preferences, and provide detailed information about properties that interest you. My knowledge of the development, combined with my understanding of your needs and preferences, enables me to help you focus your search on properties that are most likely to meet your requirements. This focused approach saves you time and ensures that you consider all relevant available properties.
              </p>
              <h3>Property Viewings and Evaluations</h3>
              <p>
                I can schedule private showings of available properties, provide detailed information during viewings, and help you evaluate properties to determine which ones best meet your needs. My expertise enables me to point out features, discuss value propositions, and answer questions that help you make informed decisions about available properties. These viewings and evaluations help you identify the perfect available residence and move forward with confidence.
              </p>
              <h3>Purchase Assistance and Negotiation</h3>
              <p>
                For available properties you're interested in purchasing, I can assist with making offers, negotiating terms, and navigating the purchase process. My experience and market knowledge enable me to help you develop competitive offers that reflect market conditions while protecting your interests. This assistance helps you complete successful purchases of available Turnberry Place properties while ensuring that you achieve favorable terms and conditions.
              </p>

              <h2>Market Conditions and Timing</h2>
              <p>
                Understanding current market conditions and timing considerations helps you make informed decisions about available Turnberry Place properties. Market conditions affect pricing, availability, and negotiation dynamics, while timing considerations affect when properties become available and how quickly they sell.
              </p>
              <h3>Current Market Conditions</h3>
              <p>
                Current market conditions in the Las Vegas luxury condominium market affect pricing, availability, and transaction dynamics for available Turnberry Place properties. I can provide information about current market conditions, pricing trends, and how these factors affect available properties. This information helps you understand the market context for available properties and make informed decisions about pricing, timing, and negotiation strategies.
              </p>
              <h3>Inventory Turnover and New Listings</h3>
              <p>
                Turnberry Place's inventory turnover and new listing activity affect what properties are available at any given time. Properties sell regularly, and new listings come to market, creating a dynamic inventory that changes over time. Understanding inventory turnover helps you appreciate the importance of acting quickly on properties that interest you while also recognizing that new opportunities may arise. I can provide information about recent sales, new listings, and inventory trends that help you understand the current market situation.
              </p>
              <h3>Timing Considerations</h3>
              <p>
                Timing considerations affect when properties become available, how quickly they sell, and when might be the best time to make offers or complete purchases. Understanding timing considerations helps you plan your search and purchase strategy, ensuring that you're prepared to act when properties that interest you become available. I can provide guidance about timing considerations that help you optimize your search and purchase timeline.
              </p>

              <h2>Contact Dr. Jan Duffy About Available Properties</h2>
              <p>
                Ready to explore available Turnberry Place condominiums? Contact me today to discuss available properties, schedule private showings, or learn more about the luxury residences currently on the market. As a Las Vegas real estate expert with over 30 years of experience and deep knowledge of Turnberry Place, I can provide comprehensive information about available properties and help you find the perfect residence that meets your needs and exceeds your expectations.
              </p>
              <p>
                Whether you're interested in a specific available property, want to explore multiple options, or are just beginning your search for luxury living in Las Vegas, I'm here to help. My goal is to provide you with the information, guidance, and support you need to make informed decisions about available Turnberry Place properties and complete successful purchases.
              </p>
              <p className="mt-4">
                <strong>Ready to explore available Turnberry Place condominiums?</strong> Call or text me at <a href="tel:7022221988" className="text-decoration-underline">(702) 222-1988</a> to discuss available properties, schedule private showings, or learn more about the luxury residences currently on the market. With my extensive knowledge of Turnberry Place and the Las Vegas luxury market, I can help you find the perfect available residence that meets your needs and budget.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps(): Promise<GetStaticPropsResult<AvailableCondosPageProps>> {
  return {
    props: {
      menus: await getMenus({} as any),
    },
  }
}
