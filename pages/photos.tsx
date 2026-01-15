import { GetStaticPropsResult } from "next"
import { Layout, LayoutProps } from "components/layout"
import { getMenus } from "lib/get-menus"
import { Meta } from "components/meta"
import { JsonLdSchema } from "components/json-ld-schema"
import Image from "next/image"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import "photoswipe/style.css"
import { useEffect, useMemo, useState } from "react"

type GalleryCategory = "Residences" | "Stirling Club" | "Views" | "Amenities"
type GalleryFilter = "All" | GalleryCategory

type GalleryItem = {
  id: string
  src: string
  full: string
  category: GalleryCategory
  title: string
  description?: string
  alt: string
  height: string
  pswpWidth: number
  pswpHeight: number
}

// Generic blur placeholder for string `src` images (lightweight blur-up).
const BLUR_DATA_URL =
  "data:image/svg+xml;base64," +
  "PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxNiAxMiIg" +
  "eG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9" +
  "IjE2IiBoZWlnaHQ9IjEyIiBmaWxsPSIjMTExIi8+Cjwvc3ZnPg=="

// Gallery items (23) with category, unique alt text, and lightbox captions.
const galleryItems: GalleryItem[] = [
  {
    id: "hero-exterior",
    src: "/images/turnberry/Turnberry_Place_For_Sale.jpg",
    full: "/images/turnberry/Turnberry_Place_For_Sale.jpg",
    category: "Views",
    title: "Turnberry Place Towers",
    description: "Signature luxury high-rise community near the Las Vegas Strip",
    alt: "Turnberry Place luxury high-rise towers near the Las Vegas Strip",
    height: "20rem",
    pswpWidth: 1600,
    pswpHeight: 1000,
  },
  {
    id: "penthouse-strip-view",
    src: "/images/turnberry/Turnberry Tower Nice Vew.jpg",
    full: "/images/turnberry/Turnberry Tower Nice Vew.jpg",
    category: "Views",
    title: "Panoramic Strip View",
    description: "Nighttime city lights and skyline from above",
    alt: "Turnberry Place panoramic Strip view from a high-floor residence",
    height: "15rem",
    pswpWidth: 1600,
    pswpHeight: 1000,
  },
  {
    id: "tower-south-view",
    src: "/images/turnberry/Turnberry Tower South View.jpeg",
    full: "/images/turnberry/Turnberry Tower South View.jpeg",
    category: "Views",
    title: "Tower & City Views",
    description: "Sunset tones across the Las Vegas skyline",
    alt: "Turnberry Place towers at sunset with Las Vegas skyline views",
    height: "18rem",
    pswpWidth: 1920,
    pswpHeight: 1080,
  },
  {
    id: "residence-interior",
    src: "/images/turnberry/Las-Vegas-High-Rise-Condo-Living-Downtown-Las-Vegas-Turnberry-Place-Interior.jpg",
    full: "/images/turnberry/Las-Vegas-High-Rise-Condo-Living-Downtown-Las-Vegas-Turnberry-Place-Interior.jpg",
    category: "Residences",
    title: "Luxury Residence Interior",
    description: "Premium finishes and open-concept living",
    alt: "Turnberry Place luxury condo interior with premium finishes and open living space",
    height: "22rem",
    pswpWidth: 1600,
    pswpHeight: 1000,
  },
  {
    id: "stirling-pool",
    src: "/images/turnberry/sterlingclubpool-.jpeg",
    full: "/images/turnberry/sterlingclubpool-.jpeg",
    category: "Stirling Club",
    title: "Stirling Club Pool",
    description: "Resort-style pool experience for residents",
    alt: "Resort-style pool at The Stirling Club at Turnberry Place",
    height: "16rem",
    pswpWidth: 1600,
    pswpHeight: 1000,
  },
  {
    id: "stirling-cigar-bar",
    src: "/images/turnberry/StirlingClub_CigarBar_View1.jpg",
    full: "/images/turnberry/StirlingClub_CigarBar_View1.jpg",
    category: "Stirling Club",
    title: "Stirling Club Cigar Lounge",
    description: "Leather seating and a refined club atmosphere",
    alt: "Stirling Club cigar lounge with leather seating at Turnberry Place",
    height: "20rem",
    pswpWidth: 1600,
    pswpHeight: 1000,
  },
  {
    id: "stirling-dining",
    src: "/images/turnberry/SterlingClubDinning.avif",
    full: "/images/turnberry/SterlingClubDinning.avif",
    category: "Stirling Club",
    title: "Stirling Club Dining",
    description: "On-site dining and social venues",
    alt: "Dining venue at The Stirling Club at Turnberry Place",
    height: "17rem",
    pswpWidth: 1600,
    pswpHeight: 1000,
  },
  {
    id: "stirling-spa-ambience",
    src: "/images/turnberry/SterlingClubWhiteRoses.jpg",
    full: "/images/turnberry/SterlingClubWhiteRoses.jpg",
    category: "Stirling Club",
    title: "Wellness & Spa Ambience",
    description: "Luxury details and calm, private atmosphere",
    alt: "Luxury wellness ambiance at The Stirling Club at Turnberry Place",
    height: "19rem",
    pswpWidth: 1600,
    pswpHeight: 1000,
  },
  {
    id: "stirling-pool-with-people",
    src: "/images/turnberry/sterlingclubpoolwithpeople.jpeg",
    full: "/images/turnberry/sterlingclubpoolwithpeople.jpeg",
    category: "Stirling Club",
    title: "Resort-Style Pool Experience",
    description: "A private club lifestyle built into your residence",
    alt: "Resort-style pool at The Stirling Club with lounge seating and guests",
    height: "15rem",
    pswpWidth: 1600,
    pswpHeight: 1000,
  },
  {
    id: "stirling-lounge",
    src: "/images/turnberry/CigarLounge.jpeg",
    full: "/images/turnberry/CigarLounge.jpeg",
    category: "Stirling Club",
    title: "Club Lounge",
    description: "Warm lighting and elegant finishes",
    alt: "Stirling Club lounge with warm lighting and upscale finishes at Turnberry Place",
    height: "18rem",
    pswpWidth: 1200,
    pswpHeight: 800,
  },
  {
    id: "entry-drive",
    src: "/images/turnberry/photo-2.jpg",
    full: "/images/turnberry/photo-2.jpg",
    category: "Amenities",
    title: "Guard-Gated Entry",
    description: "Signature arrival and controlled access",
    alt: "Turnberry Place guard-gated entry and landscaped arrival drive",
    height: "16rem",
    pswpWidth: 1200,
    pswpHeight: 800,
  },
  {
    id: "exterior-approach",
    src: "/images/turnberry/photo-3.jpg",
    full: "/images/turnberry/photo-3.jpg",
    category: "Amenities",
    title: "Exterior Approach",
    description: "Iconic architecture near the Strip corridor",
    alt: "Turnberry Place exterior approach with towers and palm-lined landscaping",
    height: "20rem",
    pswpWidth: 1200,
    pswpHeight: 800,
  },
  {
    id: "arrival-courtyard",
    src: "/images/turnberry/photo-4.jpg",
    full: "/images/turnberry/photo-4.jpg",
    category: "Amenities",
    title: "Arrival Courtyard",
    description: "Landscaping and porte-cochère style arrival",
    alt: "Turnberry Place arrival courtyard with landscaping and tower backdrop",
    height: "14rem",
    pswpWidth: 1200,
    pswpHeight: 800,
  },
  {
    id: "clock-tower",
    src: "/images/turnberry/photo-5.jpg",
    full: "/images/turnberry/photo-5.jpg",
    category: "Amenities",
    title: "Signature Entry Architecture",
    description: "Distinctive design details at the entrance",
    alt: "Turnberry Place signature entry architecture with clock tower and palm trees",
    height: "18rem",
    pswpWidth: 1200,
    pswpHeight: 800,
  },
  {
    id: "entry-wide",
    src: "/images/turnberry/photo-6.jpg",
    full: "/images/turnberry/photo-6.jpg",
    category: "Amenities",
    title: "Entrance & Towers",
    description: "A luxury high-rise arrival experience",
    alt: "Turnberry Place entrance with towers visible above the gated community",
    height: "16rem",
    pswpWidth: 1200,
    pswpHeight: 800,
  },
  {
    id: "porte-cochere",
    src: "/images/turnberry/photo-7.jpg",
    full: "/images/turnberry/photo-7.jpg",
    category: "Amenities",
    title: "Porte-Cochère Arrival",
    description: "Covered arrival and concierge-style service",
    alt: "Turnberry Place porte-cochère arrival with landscaping and tower views",
    height: "20rem",
    pswpWidth: 1200,
    pswpHeight: 800,
  },
  {
    id: "entry-detail",
    src: "/images/turnberry/photo-8.jpg",
    full: "/images/turnberry/photo-8.jpg",
    category: "Amenities",
    title: "Entry Detail",
    description: "Architectural detail and landscaped perimeter",
    alt: "Turnberry Place entry detail with landscaping and high-rise towers",
    height: "14rem",
    pswpWidth: 1200,
    pswpHeight: 800,
  },
  {
    id: "grand-lobby-stairs",
    src: "/images/turnberry/photo-9.jpg",
    full: "/images/turnberry/photo-9.jpg",
    category: "Amenities",
    title: "Grand Lobby",
    description: "Elegant lobby staircase and chandelier",
    alt: "Turnberry Place grand lobby staircase with chandelier and decorative railings",
    height: "22rem",
    pswpWidth: 1280,
    pswpHeight: 720,
  },
  {
    id: "night-city",
    src: "/images/turnberry/photo-21.jpg",
    full: "/images/turnberry/photo-21.jpg",
    category: "Views",
    title: "Las Vegas at Night",
    description: "City lights and skyline atmosphere",
    alt: "Las Vegas skyline at night near Turnberry Place",
    height: "15rem",
    pswpWidth: 1200,
    pswpHeight: 800,
  },
  {
    id: "day-exterior",
    src: "/images/turnberry/photo-22.jpg",
    full: "/images/turnberry/photo-22.jpg",
    category: "Views",
    title: "Turnberry Place Exterior",
    description: "Daytime view of towers and community grounds",
    alt: "Turnberry Place exterior daytime view of luxury high-rise towers",
    height: "18rem",
    pswpWidth: 1200,
    pswpHeight: 800,
  },
  {
    id: "primary-exterior",
    src: "/images/turnberry/turnberry-towers-las-vegas-nv-primary-photo.jpg",
    full: "/images/turnberry/turnberry-towers-las-vegas-nv-primary-photo.jpg",
    category: "Views",
    title: "Towers & Grounds",
    description: "Iconic towers with landscaped amenities",
    alt: "Turnberry Place towers with landscaped grounds near the Las Vegas Strip",
    height: "19rem",
    pswpWidth: 1600,
    pswpHeight: 1000,
  },
  {
    id: "historic-photo",
    src: "/images/turnberry/Turnberry-Place-May-21-2010.jpeg",
    full: "/images/turnberry/Turnberry-Place-May-21-2010.jpeg",
    category: "Views",
    title: "Turnberry Place (Exterior)",
    description: "Classic exterior photo of the community",
    alt: "Turnberry Place exterior photo showing the luxury high-rise towers",
    height: "14rem",
    pswpWidth: 1200,
    pswpHeight: 800,
  },
  {
    id: "monorail",
    src: "/images/turnberry/Turnberry_Towers_Las_Vegas_Monorail.jpg",
    full: "/images/turnberry/Turnberry_Towers_Las_Vegas_Monorail.jpg",
    category: "Views",
    title: "Turnberry Towers Location",
    description: "Close proximity to the Las Vegas Strip corridor",
    alt: "Turnberry towers location near Las Vegas monorail and Strip area",
    height: "16rem",
    pswpWidth: 1600,
    pswpHeight: 1000,
  },
]

interface PhotosPageProps extends LayoutProps {}

export default function PhotosPage({ menus }: PhotosPageProps) {
  const heroImage = "/images/turnberry/Turnberry_Place_For_Sale.jpg"
  const photoCount = galleryItems.length

  const [activeFilter, setActiveFilter] = useState<GalleryFilter>("All")
  const [isFading, setIsFading] = useState(false)

  const counts = useMemo(() => {
    const byCategory: Record<GalleryCategory, number> = {
      Residences: 0,
      "Stirling Club": 0,
      Views: 0,
      Amenities: 0,
    }
    galleryItems.forEach((i) => {
      byCategory[i.category] += 1
    })
    return byCategory
  }, [])

  const filteredItems = useMemo(() => {
    if (activeFilter === "All") return galleryItems
    return galleryItems.filter((i) => i.category === activeFilter)
  }, [activeFilter])

  useEffect(() => {
    setIsFading(true)
    const t = window.setTimeout(() => setIsFading(false), 160)
    return () => window.clearTimeout(t)
  }, [activeFilter])

  // Initialize PhotoSwipe for the currently displayed items (re-inits on filter change for thumb strip).
  useEffect(() => {
    let lightbox: any = null
    let destroyed = false

    async function init() {
      const PhotoSwipeLightbox = (await import("photoswipe/lightbox")).default
      lightbox = new PhotoSwipeLightbox({
        gallery: "#photos-masonry",
        children: "a[data-pswp-item]",
        pswpModule: () => import("photoswipe"),
        showHideAnimationType: "fade",
        bgOpacity: 0.92,
        preload: [1, 2],
        wheelToZoom: true,
      })

      lightbox.on("uiRegister", () => {
        // Caption (title + optional description)
        lightbox.pswp?.ui?.registerElement({
          name: "luxCaption",
          order: 9,
          isButton: false,
          appendTo: "root",
          onInit: (el: HTMLElement, pswp: any) => {
            el.className = "pswp__lux-caption"

            const render = () => {
              const idx = pswp.currIndex ?? 0
              const item = filteredItems[idx]
              if (!item) return
              const title = item.title
              const desc = item.description ? `<div class="pswp__lux-desc">${item.description}</div>` : ""
              el.innerHTML = `<div class="pswp__lux-title">${title}</div>${desc}`
            }
            pswp.on("change", render)
            render()
          },
        })

        // Counter: "3 of 23"
        lightbox.pswp?.ui?.registerElement({
          name: "luxCounter",
          order: 7,
          isButton: false,
          appendTo: "bar",
          onInit: (el: HTMLElement, pswp: any) => {
            el.className = "pswp__lux-counter"
            const render = () => {
              const idx = (pswp.currIndex ?? 0) + 1
              el.textContent = `${idx} of ${filteredItems.length}`
            }
            pswp.on("change", render)
            render()
          },
        })

        // Share (copy link)
        lightbox.pswp?.ui?.registerElement({
          name: "luxShare",
          order: 5,
          isButton: true,
          appendTo: "bar",
          html: "Share",
          onClick: async (event: any, el: HTMLElement, pswp: any) => {
            const idx = pswp.currIndex ?? 0
            const item = filteredItems[idx]
            if (!item) return
            const url = new URL(window.location.href)
            url.searchParams.set("photo", item.id)
            url.searchParams.set("filter", activeFilter)
            try {
              await navigator.clipboard.writeText(url.toString())
              el.classList.add("is-copied")
              window.setTimeout(() => el.classList.remove("is-copied"), 900)
            } catch {
              // Fallback: prompt
              // eslint-disable-next-line no-alert
              window.prompt("Copy link:", url.toString())
            }
          },
        })

        // Download button
        lightbox.pswp?.ui?.registerElement({
          name: "luxDownload",
          order: 6,
          isButton: true,
          appendTo: "bar",
          html: "Download",
          onClick: (event: any, el: HTMLElement, pswp: any) => {
            const src = pswp.currSlide?.data?.src
            if (!src) return
            const a = document.createElement("a")
            a.href = src
            a.download = ""
            document.body.appendChild(a)
            a.click()
            a.remove()
          },
        })

        // Thumbnails strip (simple)
        lightbox.pswp?.ui?.registerElement({
          name: "luxThumbs",
          order: 10,
          isButton: false,
          appendTo: "root",
          onInit: (el: HTMLElement, pswp: any) => {
            el.className = "pswp__lux-thumbs"

            const render = () => {
              const current = pswp.currIndex ?? 0
              el.innerHTML = filteredItems
                .map((item, i) => {
                  const active = i === current ? "is-active" : ""
                  return `<button type="button" class="pswp__lux-thumb ${active}" data-idx="${i}" aria-label="${item.title}">
                    <img src="${item.src}" alt="" loading="lazy" />
                  </button>`
                })
                .join("")
            }

            el.addEventListener("click", (e) => {
              const target = e.target as HTMLElement
              const btn = target.closest("button[data-idx]") as HTMLButtonElement | null
              if (!btn) return
              const idx = Number(btn.getAttribute("data-idx"))
              if (!Number.isNaN(idx)) pswp.goTo(idx)
            })

            pswp.on("change", render)
            render()
          },
        })
      })

      lightbox.init()
    }

    init()

    return () => {
      destroyed = true
      if (lightbox && !destroyed) {
        lightbox.destroy()
      } else if (lightbox) {
        lightbox.destroy()
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeFilter, filteredItems.length])

  return (
    <Layout menus={menus}>
      <Meta
        title="Photo Gallery - Turnberry Place Las Vegas"
        description="Photo gallery of Turnberry Place luxury high-rise condos near the Las Vegas Strip. Turnberry Towers Las Vegas High Rise Condos & Las Vegas Strip High Rise Condos for Sale. Call 702-500-1971."
        ogImage="https://www.turnberryplaceforsale.com/images/turnberry/Turnberry_Place_For_Sale.jpg"
        ogImageAlt="Turnberry Place Las Vegas luxury high-rise photo gallery"
      />
      <JsonLdSchema type="property" />
      <div className="card-content card-photos photos-page">
        {/* HERO */}
        <section className="photos-hero" aria-label="Turnberry Place photo gallery hero">
          <div className="photos-hero-media" aria-hidden="true">
            <Image
              src={heroImage}
              alt="Turnberry Place Las Vegas luxury high-rise condos"
              fill
              priority
              sizes="100vw"
              className="photos-hero-img"
            />
          </div>
          <div className="photos-hero-overlay" aria-hidden="true" />
          <div className="container photos-hero-inner">
            <div className="row justify-content-center">
              <div className="col-12 col-lg-10 text-center">
                <h1 className="photos-hero-title">Experience Turnberry Place</h1>
                <p className="photos-hero-subtitle">
                  {photoCount} Images of Las Vegas Luxury Living
                </p>
              </div>
            </div>
          </div>
          <div className="photos-hero-scroll" aria-hidden="true">
            <ChevronDown className="photos-hero-chevron" />
          </div>
        </section>

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              {/* Filter tabs + actions */}
              <div className="photos-toolbar">
                <div className="photos-tabs" role="tablist" aria-label="Photo categories">
                  {(["All", "Residences", "Stirling Club", "Views", "Amenities"] as const).map(
                    (label) => {
                      const count =
                        label === "All"
                          ? galleryItems.length
                          : counts[label as GalleryCategory]
                      const isActive = activeFilter === label
                      return (
                        <button
                          key={label}
                          type="button"
                          className={isActive ? "photos-tab is-active" : "photos-tab"}
                          onClick={() => setActiveFilter(label as GalleryFilter)}
                          role="tab"
                          aria-selected={isActive}
                        >
                          <span className="photos-tab-label">{label}</span>
                          <span className="photos-tab-count" aria-hidden="true">
                            {count}
                          </span>
                        </button>
                      )
                    }
                  )}
            </div>
                <div className="photos-toolbar-actions">
                  <Link
                    href="/tour"
                    className="photos-slideshow-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Launch Slideshow
                  </Link>
                </div>
              </div>
            </div>
          </div>
              <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div
                id="photos-masonry"
                className={isFading ? "photos-masonry is-fading" : "photos-masonry"}
                aria-live="polite"
              >
                {filteredItems.map((item) => (
                  <a
                    key={item.id}
                    href={item.full}
                    data-pswp-item
                    data-pswp-width={item.pswpWidth}
                    data-pswp-height={item.pswpHeight}
                    data-pswp-caption={`<strong>${item.title}</strong>${
                      item.description ? `<br/>${item.description}` : ""
                    }`}
                    className="photos-masonry-item"
                    aria-label={item.title}
                  >
                    <div className="photos-masonry-card" style={{ height: item.height }}>
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        sizes="(max-width: 575px) 100vw, (max-width: 991px) 50vw, 25vw"
                        placeholder="blur"
                        blurDataURL={BLUR_DATA_URL}
                        className="photos-masonry-img"
                      />
                      <div className="photos-masonry-overlay" aria-hidden="true">
                        <div className="photos-masonry-caption">
                          <div className="photos-masonry-title">{item.title}</div>
                          {item.description ? (
                            <div className="photos-masonry-desc">{item.description}</div>
                          ) : null}
                </div>
                      </div>
                    </div>
                  </a>
                    ))}
              </div>
            </div>
          </div>
          
          <div className="row mt-5">
            <div className="col-12 col-lg-10 mx-auto">
              <h2>Turnberry Place Photo Gallery</h2>
              <p>
                These professional photographs showcase Turnberry Place's luxury residences, premium finishes, and world-class amenities. View interior spaces, exterior architecture, and The Stirling Club facilities.
              </p>
              <p className="mt-4">
                <strong>Ready to see Turnberry Place in person?</strong> Contact the office at <a href="tel:7025001971" className="text-decoration-underline">(702) 500-1971</a> to schedule a private showing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps(): Promise<GetStaticPropsResult<PhotosPageProps>> {
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
