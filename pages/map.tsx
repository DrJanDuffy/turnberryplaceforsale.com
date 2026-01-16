'use client'

import { GetStaticPropsResult } from "next"
import { useState } from "react"
import { Layout, LayoutProps } from "components/layout"
import { MapHeroSection } from "components/map-hero-section"
import { CategoryFilterTabs } from "components/category-filter-tabs"
import { PlaceCardsGrid } from "components/place-cards-grid"
import { InteractiveMap } from "components/interactive-map"
import { DistanceReferenceSection } from "components/distance-reference-section"
import { NeighborhoodBenefitsSection } from "components/neighborhood-benefits-section"
import { DirectionsContactCTA } from "components/directions-contact-cta"
import { placesData, type Place } from "lib/places-data"
import { getMenus } from "lib/get-menus"
import { Meta } from "components/meta"
import { JsonLdSchema } from "components/json-ld-schema"
import { BreadcrumbSchema } from "components/breadcrumb-schema"
import Image from "next/image"

interface MapPageProps extends LayoutProps {}

export default function MapPage({ menus }: MapPageProps) {
  const [activeCategory, setActiveCategory] = useState("all")
  const [mapQuery, setMapQuery] = useState("map")
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null)
  const mapKey = "AIzaSyDSF9E67HCf0-pecnANALPYA-donlDhIww"
  const baseUrl = "https://www.google.com/maps/embed/v1/"
  const streetAddress = "2827 Paradise Rd, Las Vegas, NV 89109"
  const propertyZip = "89109"
  const mapZoom = 15

  const handleCategoryChange = (categoryId: string, query: string) => {
    setActiveCategory(categoryId)
    setMapQuery(query)
    setSelectedPlace(null) // Clear selection when category changes
  }

  const handlePlaceClick = (place: Place) => {
    setSelectedPlace(place)
    // Scroll to map
    const mapContainer = document.getElementById('map-container')
    if (mapContainer) {
      mapContainer.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  const getMapUrl = (query: string) => {
    if (query === "map") {
      return `${baseUrl}place?key=${mapKey}&q=${encodeURI(streetAddress)}&zoom=${mapZoom}`
    }
    const keywords = `${query} ${propertyZip}`
    return `${baseUrl}search?key=${mapKey}&q=${encodeURI(keywords)}&zoom=${mapZoom - 1}`
  }

  return (
    <Layout menus={menus}>
      <Meta
        title="Map & Nearby Places - Turnberry Place Las Vegas"
        description="Turnberry Place location map near the Las Vegas Strip. Las Vegas Strip High Rise Condos for Sale. Call 702-500-1971."
      />
      <JsonLdSchema type="property" />
      <BreadcrumbSchema items={[{ name: 'Map', url: 'https://www.turnberryplaceforsale.com/map' }]} />
      
      {/* Map Hero Section */}
      <MapHeroSection address={streetAddress} mapKey={mapKey} />
      
      <div className="card-content card-map pt-0 pt-md-5">
        <div className="container-fluid px-0 mx-0">
          <div className="row">
            <div className="col-12">
              <h2 className="text-center mb-4">Explore Nearby Places</h2>
              <p className="lead text-center mb-4">
                Use the interactive map below to discover nearby schools, parks, restaurants, coffee shops, and other amenities that make this location ideal for luxury living.
              </p>
              
              {/* Category Filter Tabs */}
              <CategoryFilterTabs
                activeCategory={activeCategory}
                onCategoryChange={handleCategoryChange}
              />
              {/* Interactive Map */}
              <InteractiveMap
                mapKey={mapKey}
                center={{ lat: 36.1447, lng: -115.1541 }}
                zoom={15}
                activeCategory={activeCategory}
                places={placesData}
                onPlaceClick={handlePlaceClick}
                selectedPlace={selectedPlace}
              />
            </div>
          </div>

          {/* Place Cards Grid */}
          <PlaceCardsGrid 
            activeCategory={activeCategory} 
            onPlaceClick={handlePlaceClick}
          />

          {/* Distance Reference Section */}
          <DistanceReferenceSection />

          {/* Neighborhood Benefits Section */}
          <NeighborhoodBenefitsSection />

          {/* Directions & Contact CTA */}
          <DirectionsContactCTA address={streetAddress} />
          
          <div className="row mt-5">
            <div className="col-12 col-lg-10 mx-auto">
              <h2>Turnberry Place Location and Address</h2>
              <p>
                Turnberry Place is located at 2827 Paradise Rd, Las Vegas, NV 89109, positioning it at the heart of Las Vegas's most dynamic and desirable corridor. This prime location, just one block east of the Las Vegas Strip between the Wynn Encore and Sahara resorts, provides residents with immediate access to world-class amenities, entertainment, dining, and business centers while maintaining the privacy and security that luxury living requires. Understanding this location and its advantages helps buyers appreciate the exceptional value that Turnberry Place offers.
              </p>
              <h3>Exact Location and Directions</h3>
              <p>
                Turnberry Place's exact location at 2827 Paradise Rd places it in the Paradise neighborhood, one of Las Vegas's most prestigious areas. The development is easily accessible from major highways, including Interstate 15 and the Las Vegas Beltway, providing convenient access to the broader metropolitan area. The development's guard-gated entrance on Paradise Road provides controlled access while maintaining convenience for residents and authorized visitors. Understanding the exact location and directions helps visitors and potential buyers find Turnberry Place easily and appreciate its accessibility.
              </p>
              <h3>Proximity to Las Vegas Strip</h3>
              <p>
                Turnberry Place's location just one block from the Las Vegas Strip provides residents with immediate access to the Entertainment Capital of the World's most iconic attractions, restaurants, entertainment venues, and business centers. This proximity creates exceptional convenience for residents who work in the hospitality, entertainment, or business sectors, as well as for those who simply want to be at the center of Las Vegas's vibrant energy. The development's raised elevation and strategic positioning minimize street noise while maintaining this prime location advantage.
              </p>
              <h3>Neighborhood Characteristics</h3>
              <p>
                The Paradise neighborhood surrounding Turnberry Place is characterized by luxury developments, upscale businesses, and proximity to the Strip's most prestigious resorts. This neighborhood context enhances Turnberry Place's luxury positioning and provides residents with access to high-quality services, businesses, and amenities. Understanding neighborhood characteristics helps buyers appreciate the comprehensive value proposition that Turnberry Place's location provides.
              </p>

              <h2>Nearby Schools and Educational Facilities</h2>
              <p>
                Turnberry Place's location provides access to various educational facilities, including public and private schools, colleges, and universities. While the development itself doesn't include schools, its central location provides convenient access to educational institutions throughout the Las Vegas area. Understanding nearby educational options helps families and those who value education appreciate the location's advantages.
              </p>
              <h3>Public and Private Schools</h3>
              <p>
                The Las Vegas area surrounding Turnberry Place includes various public and private schools serving students from elementary through high school. These schools are accessible by car, with many located within a reasonable commute distance. The development's central location provides flexibility in school selection, as families can choose from schools throughout the Las Vegas area based on their preferences and needs. Understanding school options helps families evaluate Turnberry Place's suitability for their educational needs.
              </p>
              <h3>Higher Education Institutions</h3>
              <p>
                Turnberry Place's location provides access to higher education institutions, including the University of Nevada, Las Vegas (UNLV), which is located approximately 3 miles southeast of the development. This proximity to higher education provides convenience for students, faculty, and staff who work or study at UNLV, as well as for residents who value access to educational and cultural resources. The development's location also provides access to other educational and cultural institutions throughout the Las Vegas area.
              </p>

              <h2>Nearby Parks and Recreational Areas</h2>
              <p>
                While Turnberry Place residents enjoy exclusive access to The Stirling Club's recreational facilities, the development's location also provides access to various parks and recreational areas throughout Las Vegas. These outdoor spaces provide additional opportunities for recreation, relaxation, and enjoyment of Las Vegas's pleasant weather and natural beauty.
              </p>
              <h3>Local Parks and Green Spaces</h3>
              <p>
                The Las Vegas area surrounding Turnberry Place includes various parks and green spaces that provide opportunities for outdoor recreation and relaxation. While the development's location is primarily urban, nearby parks offer spaces for walking, jogging, picnicking, and other outdoor activities. These parks complement The Stirling Club's recreational facilities and provide additional options for residents who enjoy outdoor activities.
              </p>
              <h3>Red Rock Canyon and Natural Areas</h3>
              <p>
                Turnberry Place's location provides relatively convenient access to Red Rock Canyon National Conservation Area, located approximately 25 minutes west of the development. This natural area offers hiking, rock climbing, scenic drives, and opportunities to enjoy the natural beauty that surrounds Las Vegas. The development's proximity to natural areas provides residents with opportunities to escape the urban environment and enjoy outdoor recreation in spectacular natural settings.
              </p>

              <h2>Nearby Dining and Entertainment</h2>
              <p>
                Turnberry Place's location provides exceptional access to world-class dining and entertainment options, with over twenty Zagat-rated restaurants within a one-mile radius. This dining and entertainment access is one of the location's most significant advantages, providing residents with immediate access to some of Las Vegas's finest culinary and entertainment experiences.
              </p>
              <h3>Fine Dining Restaurants</h3>
              <p>
                The area surrounding Turnberry Place includes numerous fine dining restaurants, including establishments at the Wynn, Encore, Resorts World, and other nearby resorts. These restaurants represent some of Las Vegas's most prestigious culinary experiences, featuring world-renowned chefs and exceptional cuisine. The development's proximity to these restaurants provides residents with convenient access to fine dining without the inconvenience of long commutes, enhancing the luxury lifestyle that Turnberry Place offers.
              </p>
              <h3>Entertainment Venues</h3>
              <p>
                Turnberry Place's location provides immediate access to Las Vegas's most iconic entertainment venues, including theaters, concert halls, nightclubs, and other entertainment facilities. The T-Mobile Arena, home of the Vegas Golden Knights, and Allegiant Stadium, home of the Las Vegas Raiders, are both nearby, providing residents with convenient access to professional sports and major entertainment events. This entertainment access enhances the lifestyle benefits that Turnberry Place provides.
              </p>
              <h3>Coffee Shops and Casual Dining</h3>
              <p>
                In addition to fine dining, the area surrounding Turnberry Place includes various coffee shops, casual dining establishments, and quick-service restaurants that provide convenient options for everyday meals and beverages. These establishments offer residents convenient access to quality food and beverages without leaving the immediate area, enhancing daily convenience and lifestyle benefits.
              </p>

              <h2>Nearby Services and Conveniences</h2>
              <p>
                Turnberry Place's location provides access to various services and conveniences that enhance daily living, including banks, ATMs, gyms, and other essential services. This service access ensures that residents have convenient access to everything they need for comfortable, convenient living.
              </p>
              <h3>Banks and Financial Services</h3>
              <p>
                The area surrounding Turnberry Place includes various banks and financial service providers, providing residents with convenient access to banking services, ATMs, and financial advice. This financial service access ensures that residents can manage their banking needs conveniently without traveling far from home. The development's central location provides access to major banks and financial institutions throughout the Las Vegas area.
              </p>
              <h3>Fitness and Wellness Facilities</h3>
              <p>
                While Turnberry Place residents enjoy exclusive access to The Stirling Club's fitness facilities, the area surrounding the development also includes various gyms, fitness centers, and wellness facilities. These facilities provide additional options for residents who want to supplement their fitness routines or access specialized fitness services. The development's location ensures that residents have access to comprehensive fitness and wellness resources.
              </p>
              <h3>Retail and Shopping</h3>
              <p>
                Turnberry Place's location provides access to various retail and shopping options, including Fashion Show Mall, Crystals at CityCenter, and other shopping destinations. These shopping options provide residents with convenient access to retail therapy, everyday shopping, and luxury goods. The development's proximity to major shopping destinations enhances the convenience and lifestyle benefits that the location provides.
              </p>

              <h2>Using the Interactive Map</h2>
              <p>
                The interactive map above provides a comprehensive tool for exploring Turnberry Place's location and nearby amenities. Understanding how to use this map helps you discover nearby places, understand the location's advantages, and appreciate the convenience and accessibility that Turnberry Place offers.
              </p>
              <h3>Map Features and Functionality</h3>
              <p>
                The interactive map includes various features and functionality that help you explore Turnberry Place's location and nearby places. You can switch between different map views using the tabs above the map, including views for schools, parks, restaurants, coffee shops, ATMs, and gyms. Each view shows relevant nearby places, helping you understand what's available in the area and how these amenities enhance the location's value proposition.
              </p>
              <h3>Exploring Nearby Places</h3>
              <p>
                Using the map's nearby places features helps you discover restaurants, services, and amenities that are convenient to Turnberry Place. This exploration helps you understand the location's advantages and appreciate how nearby amenities enhance daily living. Understanding nearby places helps you evaluate the location's suitability for your lifestyle needs and preferences.
              </p>
              <h3>Getting Directions</h3>
              <p>
                The map also provides functionality for getting directions to Turnberry Place, helping visitors and potential buyers find the development easily. This direction functionality ensures that you can navigate to Turnberry Place from various locations, whether you're visiting from out of town or are a local resident exploring the area. Understanding how to get directions helps ensure that you can visit Turnberry Place conveniently and explore the location firsthand.
              </p>

              <h2>Location Advantages for Different Lifestyles</h2>
              <p>
                Turnberry Place's location provides advantages for various lifestyles, whether you're a professional working in the hospitality or entertainment industries, a retiree seeking luxury living near world-class amenities, or an investor seeking prime real estate in a desirable location. Understanding these location advantages helps you appreciate how the location aligns with your specific lifestyle needs and preferences.
              </p>
              <h3>Professional and Business Advantages</h3>
              <p>
                For professionals working in the hospitality, entertainment, or business sectors, Turnberry Place's location provides exceptional advantages. The proximity to the Strip, convention center, and business districts ensures convenient commutes, while the development's amenities and services support professional lifestyles. The location's central positioning also provides access to networking opportunities, business services, and professional resources that enhance career success.
              </p>
              <h3>Retirement and Leisure Advantages</h3>
              <p>
                For retirees and those seeking leisure-focused lifestyles, Turnberry Place's location provides access to world-class entertainment, dining, and cultural experiences. The development's amenities, combined with nearby attractions and services, create a comprehensive lifestyle experience that supports active, engaged retirement. The location's convenience and accessibility ensure that residents can enjoy Las Vegas's offerings without the inconvenience of long commutes or travel.
              </p>
              <h3>Investment and Second Home Advantages</h3>
              <p>
                For investors and second-home owners, Turnberry Place's location provides strong investment potential and rental appeal. The prime location, combined with comprehensive amenities and strong demand, creates favorable conditions for investment returns. The location's appeal to both domestic and international buyers and renters enhances investment potential and provides flexibility for various investment strategies.
              </p>

              <h2>Contact Dr. Jan Duffy for Location Information</h2>
              <p>
                Ready to learn more about Turnberry Place's location and nearby amenities? Contact me today to discuss the location's advantages, schedule a visit to experience the area firsthand, or learn more about how this prime location enhances the Turnberry Place living experience. As a Las Vegas real estate expert with over 30 years of experience and deep knowledge of Turnberry Place and the surrounding area, I can provide comprehensive information about the location and help you understand how it aligns with your lifestyle needs and preferences.
              </p>
              <p>
                Whether you're interested in the location's proximity to the Strip, nearby dining and entertainment options, or how the location supports your specific lifestyle, I'm here to provide detailed information and expert guidance. My goal is to help you understand the comprehensive location advantages that Turnberry Place offers and how they enhance the overall value proposition of luxury living at this exceptional development.
              </p>
              <p className="mt-4">
                <strong>Ready to explore Turnberry Place's location?</strong> Contact the office at <a href="tel:7025001971" className="text-decoration-underline">(702) 500-1971</a> to discuss the location's advantages, schedule a visit, or learn more about nearby amenities and services. With my extensive knowledge of Turnberry Place and the Las Vegas area, I can help you appreciate the exceptional location advantages that make Turnberry Place one of Las Vegas's most desirable luxury communities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps(): Promise<GetStaticPropsResult<MapPageProps>> {
  // Handle Drupal connection errors gracefully
  try {
    return {
      props: {
        menus: await getMenus({} as any),
      },
    }
  } catch (error) {
    // If Drupal is not available, return empty menus
    // This allows the build to continue without Drupal
    return {
      props: {
        menus: {
          main: [],
          footer: [],
        },
      },
    }
  }
}
