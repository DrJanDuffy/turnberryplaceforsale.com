'use client'

import Head from "next/head"
import { useState, useEffect } from "react"
import { Layout, LayoutProps } from "components/layout"
import { Meta } from "components/meta"
import { JsonLdSchema } from "components/json-ld-schema"
import Image from "next/image"
import classNames from "classnames"

const floorPlans = [
  "Turnberry Place Floor Plan A",
  "Turnberry Place Floor Plan B",
  "Turnberry Place Floor Plan C",
  "Turnberry Place Floor Plan D",
  "Turnberry Place Floor Plan E",
  "Turnberry Place Floor Plan ER",
  "Turnberry Place Floor Plan F",
  "Turnberry Place Floor Plan G",
  "Turnberry Place Floor Plan H",
]

export default function FloorPlansPage() {
  // Use empty menus for client component - layout handles gracefully
  const menus = { main: [], footer: [] }
  const [activeTab, setActiveTab] = useState(0)
  
  const floorPlanImages = [
    "/images/turnberry/turnberry-place-floor-plan-a.png",
    "/images/turnberry/turnberry-place-floor-plan-b.png",
    "/images/turnberry/turnberry-place-floor-plan-c.png",
    "/images/turnberry/turnberry-place-floor-plan-d.png",
    "/images/turnberry/turnberry-place-floor-plan-e.png",
    "/images/turnberry/turnberry-place-floor-plan-er.png",
    "/images/turnberry/turnberry-place-floor-plan-f.png",
    "/images/turnberry/turnberry-place-floor-plan-g.png",
    "/images/turnberry/turnberry-place-floor-plan-h.png",
  ]

  return (
    <Layout menus={menus}>
      <Meta title="Floor Plans - Turnberry Place Las Vegas" />
      <Head>
        <title>Floor Plans - Turnberry Place Las Vegas</title>
        <meta
          name="description"
          content="View Turnberry Place Las Vegas floor plans: 1-4 bedroom luxury condo layouts from $800K-$10M+. See detailed floor plans for all 4 towers. Call 702-500-1971"
        />
      </Head>
      <JsonLdSchema type="property" />
      <div className="card-content card-floor-plans">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <div className="page-header">
                <h1>Turnberry Place Las Vegas Floor Plans</h1>
                <p className="lead">
                  Explore the comprehensive floor plans available at Turnberry Place Las Vegas, featuring luxury high-rise condominiums ranging from one to four bedrooms. These detailed floor plans showcase the thoughtful design, spacious layouts, and premium features that define luxury living at Turnberry Place. As a Las Vegas real estate expert with over 30 years of experience, I can provide insights into how these floor plans accommodate various lifestyle needs and preferences.
                </p>
              </div>
            </div>
          </div>
          <div className="row align-items-center justify-content-center">
            <div className="col-12 col-lg-11 col-xl-10 text-center">
              <div className="py-4">
                <ul className="nav nav-tabs justify-content-center floor-plan-tabs" id="fpTabs" role="tablist">
                  {floorPlans.map((plan, index) => (
                    <li key={index} className="nav-item">
                      <button
                        className={classNames("nav-link floor-plan-tab", activeTab === index && "active")}
                        id={`fp-tab-${59361 + index}`}
                        onClick={(e) => {
                          e.preventDefault();
                          setActiveTab(index);
                        }}
                        role="tab"
                        aria-controls={`fp-${59361 + index}`}
                        aria-selected={activeTab === index}
                        type="button"
                      >
                        {plan}
                      </button>
                    </li>
                  ))}
                </ul>
                <div className={classNames("tab-content p-4", floorPlans.length === 1 && "just-one")} id="myTabContent">
                  {floorPlans.map((plan, index) => (
                    <div
                      key={index}
                      className={classNames(
                        "tab-pane fade",
                        activeTab === index && "show active"
                      )}
                      style={{ display: activeTab === index ? 'block' : 'none' }}
                      id={`fp-${59361 + index}`}
                      role="tabpanel"
                      aria-labelledby={`fp-tab-${59361 + index}`}
                    >
                      <div className="text-center fp-image">
                        <Image
                          src={floorPlanImages[index]}
                          width={800}
                          height={600}
                          alt={plan}
                          className="img-thumbnail cursor-pointer"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="content-section">
                <h2>Understanding Turnberry Place Floor Plans</h2>
              <p>
                Turnberry Place floor plans are designed to maximize space, functionality, and luxury living. Each floor plan has been thoughtfully crafted to provide residents with comfortable, elegant living spaces that accommodate various lifestyle needs. Understanding the characteristics of different floor plans helps buyers identify residences that best meet their requirements for space, layout, and functionality.
              </p>
              <h3>Floor Plan Categories and Sizes</h3>
              <p>
                Turnberry Place offers floor plans ranging from approximately 1,200 to over 8,000 square feet, accommodating one to four or more bedrooms. The floor plans are organized by size and configuration, with options for single-level residences, multi-level penthouses, and residences with private terraces. Each category offers distinct advantages, from efficient one-bedroom layouts perfect for professionals or second-home owners to expansive penthouses designed for entertaining and luxury living.
              </p>
              <h3>Design Philosophy and Layout Principles</h3>
              <p>
                Turnberry Place floor plans reflect a design philosophy that emphasizes open-concept living, natural light, and seamless indoor-outdoor flow. The layouts prioritize views, with floor-to-ceiling windows that frame spectacular vistas of the Las Vegas Strip, Red Rock Canyon, and the Spring Mountain Range. The design principles ensure that every residence maximizes its potential for comfortable daily living while providing elegant spaces for entertaining and relaxation.
              </p>
              <h3>Premium Features and Finishes</h3>
              <p>
                All Turnberry Place floor plans include premium features and finishes that reflect the development's luxury positioning. These features include hardwood or premium tile flooring, granite or quartz countertops, high-end appliances, custom cabinetry, designer fixtures, and floor-to-ceiling windows. The floor plans are designed to showcase these premium features while maintaining functionality and livability. Understanding these features helps buyers appreciate the value and quality available in every Turnberry Place residence.
              </p>
              </div>

              <div className="content-section">
                <h2>One and Two Bedroom Floor Plans</h2>
              <p>
                Turnberry Place's one and two bedroom floor plans offer efficient, elegant living spaces perfect for professionals, couples, or those seeking a second home in Las Vegas. These floor plans range from approximately 1,200 to 2,500 square feet and provide all the amenities and features of larger residences in more compact, manageable spaces.
              </p>
              <h3>One Bedroom Residences</h3>
              <p>
                One bedroom floor plans at Turnberry Place typically range from approximately 1,200 to 1,800 square feet and feature open-concept living areas, well-appointed kitchens, spacious bedrooms with walk-in closets, and luxurious bathrooms. Many one-bedroom residences feature private balconies or terraces that extend the living space outdoors. These floor plans are perfect for professionals, single residents, or couples who value efficient use of space without sacrificing luxury and quality.
              </p>
              <h3>Two Bedroom Residences</h3>
              <p>
                Two bedroom floor plans at Turnberry Place typically range from approximately 1,800 to 2,500 square feet and provide additional space for home offices, guest accommodations, or flexible living arrangements. These floor plans feature spacious living areas, well-designed kitchens, two bedrooms with ample closet space, and multiple bathrooms. Many two-bedroom residences feature private terraces and enhanced views, making them ideal for residents who want more space while maintaining the convenience and luxury of Turnberry Place living.
              </p>
              </div>

              <div className="content-section">
                <h2>Three and Four Bedroom Floor Plans</h2>
              <p>
                Turnberry Place's three and four bedroom floor plans offer expansive living spaces designed for families, those who frequently entertain, or residents who require additional space for home offices, hobbies, or guest accommodations. These floor plans range from approximately 2,500 to over 5,000 square feet and provide the ultimate in luxury high-rise living.
              </p>
              <h3>Three Bedroom Residences</h3>
              <p>
                Three bedroom floor plans at Turnberry Place typically range from approximately 2,500 to 4,000 square feet and feature spacious living areas, formal dining spaces, well-appointed kitchens, three bedrooms with walk-in closets, and multiple bathrooms. Many three-bedroom residences feature private terraces, enhanced views, and additional spaces for home offices or media rooms. These floor plans are ideal for families, those who entertain frequently, or residents who value space and flexibility in their living arrangements.
              </p>
              <h3>Four Bedroom and Larger Residences</h3>
              <p>
                Four bedroom and larger floor plans at Turnberry Place typically range from approximately 4,000 to over 8,000 square feet and represent the pinnacle of luxury living. These floor plans feature expansive living areas, formal dining rooms, gourmet kitchens, multiple bedrooms with walk-in closets, numerous bathrooms, and additional spaces for home offices, media rooms, or entertainment areas. Many larger residences feature multiple terraces, panoramic views, and premium finishes throughout. These floor plans are ideal for those seeking the ultimate in luxury high-rise living with maximum space and amenities.
              </p>
              </div>

              <div className="content-section">
                <h2>Penthouse and High-Floor Floor Plans</h2>
              <p>
                Turnberry Place's penthouse and high-floor residences offer the most exceptional floor plans in the development, featuring elevated ceilings, expansive layouts, and the most dramatic views available. These residences, typically located above the 30th floor, represent the ultimate in luxury living at Turnberry Place.
              </p>
              <h3>Penthouse Features and Characteristics</h3>
              <p>
                Penthouse floor plans at Turnberry Place feature elevated ceilings up to 12 feet, expansive layouts exceeding 8,000 square feet, multiple terraces with panoramic views, and the most exceptional finishes available. These residences often feature private elevator access, wine cellars, home theaters, and additional luxury amenities. The penthouse floor plans are designed for those seeking the ultimate in luxury living with maximum space, views, and amenities.
              </p>
              <h3>High-Floor Advantages</h3>
              <p>
                High-floor residences at Turnberry Place, typically located above the 20th floor, offer enhanced views, increased privacy, and elevated ceilings compared to lower-floor residences. These floor plans feature the same quality and finishes as other residences but benefit from the dramatic views and sense of elevation that come with higher floor levels. Understanding these advantages helps buyers appreciate the value and lifestyle benefits of high-floor residences.
              </p>
              </div>

              <div className="content-section">
                <h2>Selecting the Right Floor Plan</h2>
              <p>
                Selecting the right floor plan at Turnberry Place requires understanding your lifestyle needs, space requirements, and preferences for layout and functionality. Working with an experienced real estate professional who understands Turnberry Place floor plans can help you identify the perfect residence that meets your needs while fitting your budget.
              </p>
              <h3>Assessing Your Space Requirements</h3>
              <p>
                Assessing your space requirements involves considering your current and future needs for bedrooms, living areas, storage, and flexible spaces. Factors to consider include family size, frequency of entertaining, need for home office space, guest accommodations, and lifestyle preferences. Understanding these requirements helps you identify floor plans that provide adequate space without excess that goes unused.
              </p>
              <h3>Evaluating Layout and Flow</h3>
              <p>
                Evaluating layout and flow involves considering how the floor plan accommodates your daily routines, entertaining needs, and lifestyle preferences. Factors to consider include the relationship between spaces, natural light, views, privacy, and accessibility. Understanding these layout characteristics helps you identify floor plans that function well for your specific needs and preferences.
              </p>
              <h3>Considering View and Orientation</h3>
              <p>
                Considering view and orientation involves understanding how different floor plans and orientations provide access to the views you value most. Factors to consider include whether you prefer Strip views, mountain views, city views, or a combination, and how floor level and orientation affect view quality. Understanding these view characteristics helps you identify floor plans that provide the views you desire.
              </p>
              </div>

              <div className="content-section">
                <h2>Contact Dr. Jan Duffy for Floor Plan Information</h2>
                <p>
                  As a Las Vegas real estate expert with over 30 years of experience and deep knowledge of Turnberry Place floor plans, I can provide comprehensive information about available floor plans, their characteristics, and how they accommodate various lifestyle needs. My expertise in luxury high-rise condominiums, combined with my understanding of Turnberry Place's unique floor plans, enables me to help buyers identify the perfect residence that meets their needs and preferences.
                </p>
                <p>
                  Whether you're interested in one-bedroom efficiency, two-bedroom flexibility, three-bedroom space, or four-bedroom luxury, I can provide detailed information about available floor plans, their features, and how they compare to help you make informed decisions. My goal is to help you find the perfect Turnberry Place residence that meets your space requirements, lifestyle needs, and budget while providing exceptional value and luxury living.
                </p>
                <p>
                  <strong>Ready to explore Turnberry Place floor plans?</strong> Contact the office at <a href="tel:7025001971" className="text-decoration-underline">(702) 500-1971</a> to discuss available floor plans, schedule a private showing, and learn how different floor plans can accommodate your lifestyle needs. With my extensive knowledge of Turnberry Place floor plans, I can help you find the perfect residence that exceeds your expectations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

