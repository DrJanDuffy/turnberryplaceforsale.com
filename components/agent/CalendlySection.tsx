"use client"

import { useState } from "react"
import Image from "next/image"

const GOLD = "#D4AF37"

export function CalendlySection() {
  const calendlyUrl =
    process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/drjanduffy/1-home-tour-30-mins"
  const [showCalendly, setShowCalendly] = useState(false)

  return (
    <section className="bg-white py-16 lg:py-24" aria-label="Schedule a private tour">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900">
              Schedule a Private Tour
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              Pick a time that works for you. The calendar loads only when requested (fast page loads, better
              mobile experience).
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href="tel:+17025001971"
                className="inline-flex items-center justify-center rounded-full px-6 py-3 font-bold text-gray-900 shadow-sm"
                style={{ backgroundColor: GOLD }}
                aria-label="Call (702) 500-1971"
                data-cta="agent-schedule-call"
              >
                Call (702) 500-1971
              </a>
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-full border px-6 py-3 font-bold text-gray-900 hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                style={{ borderColor: "rgba(17, 24, 39, 0.2)", outlineColor: GOLD }}
                onClick={() => setShowCalendly((v) => !v)}
                aria-expanded={showCalendly}
                aria-controls="agent-calendly-frame"
                data-cta="agent-schedule-toggle"
              >
                {showCalendly ? "Hide Calendar" : "Pick a Time"}
              </button>
            </div>

            <div className="mt-6 rounded-2xl border border-gray-200 bg-gray-50 p-5">
              <div className="flex items-center gap-3">
                <div className="relative h-12 w-12 overflow-hidden rounded-full border border-gray-200">
                  <Image
                    src="/images/turnberry/asset-1.jpg"
                    alt="Dr. Jan Duffy"
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Dr. Jan Duffy</div>
                  <div className="text-sm text-gray-600">
                    Turnberry Place Resident • REALTOR (S.0197614.LLC)
                  </div>
                </div>
              </div>
              <div className="mt-3 text-sm text-gray-600">
                Prefer email?{" "}
                <a className="underline" href="mailto:DrDuffy@TurnberryPlaceForSale.com">
                  DrDuffy@TurnberryPlaceForSale.com
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4 md:p-6 shadow-sm">
            {!showCalendly ? (
              <div className="rounded-xl border border-gray-200 bg-white p-6 text-center">
                <div className="text-gray-900 font-semibold">Ready when you are.</div>
                <div className="mt-1 text-sm text-gray-600">
                  Click “Pick a Time” to load the Calendly scheduler.
                </div>
              </div>
            ) : (
              <div id="agent-calendly-frame" className="agent-calendly-frame">
                <iframe
                  title="Schedule a private tour - Calendly"
                  src={`${calendlyUrl}?hide_gdpr_banner=1`}
                  width="100%"
                  height="760"
                  style={{ border: 0 }}
                  loading="lazy"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
