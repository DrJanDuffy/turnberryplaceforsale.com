import Image from "next/image"
import { Home, MapPin, Shield, Sparkles } from "lucide-react"

const GOLD = "#D4AF37"

export function YourNeighborSection() {
  const benefits = [
    {
      title: "I Know Every Tower",
      description: "Views, sun exposure, elevator access, and floor plan nuances.",
      icon: <Home className="h-5 w-5" />,
    },
    {
      title: "I Know The Stirling Club",
      description: "Pool, spa, dining, and day-to-day resident experience.",
      icon: <Sparkles className="h-5 w-5" />,
    },
    {
      title: "I Know The Community",
      description: "Concierge, security, HOA details, and what buyers ask most.",
      icon: <Shield className="h-5 w-5" />,
    },
    {
      title: "I’m Always Nearby",
      description: "Fast access for showings, questions, and quick walkthroughs.",
      icon: <MapPin className="h-5 w-5" />,
    },
  ]

  return (
    <section className="bg-gray-900 py-16 lg:py-24 text-white" aria-label="Your neighbor">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif">
              I Don’t Just Sell Here. I Live Here.
            </h2>
            <p className="mt-4 text-white/80 text-lg">
              Turnberry Place isn’t just a pin on a map — it’s my community. That resident-level
              knowledge helps you make smarter decisions, faster.
            </p>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 bg-white/5"
              style={{ borderColor: "rgba(212, 175, 55, 0.35)" }}
            >
              <span
                className="inline-block w-2 h-2 rounded-full"
                style={{ backgroundColor: GOLD }}
                aria-hidden="true"
              />
              <span className="font-semibold">Resident Address:</span>
              <span className="text-white/80">2877 Paradise Rd, Las Vegas</span>
            </div>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {benefits.map((b) => (
                <div
                  key={b.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                  <div className="flex items-start gap-3">
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-xl bg-black/30"
                      style={{ color: GOLD }}
                      aria-hidden="true"
                    >
                      {b.icon}
                    </div>
                    <div>
                      <div className="font-semibold">{b.title}</div>
                      <div className="mt-1 text-sm text-white/75">{b.description}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative h-[360px] md:h-[440px] rounded-2xl overflow-hidden border border-white/10">
              <Image
                src="/images/turnberry/Turnberry_Place_For_Sale.jpg"
                alt="Turnberry Place Las Vegas luxury towers exterior"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <div className="inline-flex items-center gap-2 rounded-full bg-black/50 px-4 py-2 border border-white/10">
                  <MapPin className="h-4 w-4" style={{ color: GOLD }} aria-hidden="true" />
                  <span className="text-white/90 text-sm">
                    Turnberry Place • 2877 Paradise Rd • Las Vegas, NV 89109
                  </span>
                </div>
              </div>
            </div>

            <div
              className="mt-4 text-sm text-white/70"
            >
              Availability note:{" "}
              <span className="text-white/90 font-semibold">
                I respond within 2 hours.
              </span>{" "}
              Evenings and weekends? I’m still around — I live here.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

