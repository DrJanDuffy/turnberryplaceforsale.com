import Image from "next/image"
import { absoluteURL } from "lib/utils/absolute-url"

interface Tower {
  number: number
  title: string
  description: string
  features: string[]
  year: number
  stories: number
  image?: string
}

interface TowerSectionProps {
  tower: Tower
}

export function TowerSection({ tower }: TowerSectionProps) {
  return (
    <section className="py-12 md:py-20">
      <div className="container px-6 mx-auto">
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
          {tower.image && (
            <div className="order-2 md:order-1">
              <Image
                src={absoluteURL(tower.image)}
                width={600}
                height={400}
                layout="responsive"
                objectFit="cover"
                alt={`Turnberry Place Tower ${tower.number}`}
                className="rounded-lg"
              />
            </div>
          )}
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold mb-4 md:text-4xl lg:text-5xl">
              {tower.title}
            </h2>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              {tower.description}
            </p>
            <div className="space-y-2 text-gray-700">
              <p><strong>Completed:</strong> {tower.year}</p>
              <p><strong>Stories:</strong> {tower.stories}</p>
              {tower.features.length > 0 && (
                <div>
                  <strong>Features:</strong>
                  <ul className="list-disc list-inside ml-4 mt-2">
                    {tower.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
