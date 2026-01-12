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
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      {tower.image && (
        <div className="mb-4">
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
      <h2 className="text-2xl font-bold mb-3 md:text-3xl">
        {tower.title}
      </h2>
      <p className="text-gray-600 mb-4 leading-relaxed">
        {tower.description}
      </p>
      <div className="space-y-2 text-gray-700 text-sm">
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
  )
}
