interface Amenity {
  name: string
  icon?: string
}

interface AmenitiesGridProps {
  amenities: Amenity[]
}

export function AmenitiesGrid({ amenities }: AmenitiesGridProps) {
  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="container px-6 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 md:text-4xl lg:text-5xl">
          Amenities
        </h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
            >
              {amenity.icon && (
                <div className="text-4xl mb-3">{amenity.icon}</div>
              )}
              <h3 className="font-semibold text-gray-800">{amenity.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
