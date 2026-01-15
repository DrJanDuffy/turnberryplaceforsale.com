import { GetStaticPropsResult } from "next"
import { Layout, LayoutProps } from "components/layout"
import { getMenus } from "lib/get-menus"
import { Meta } from "components/meta"
import { JsonLdSchema } from "components/json-ld-schema"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, ChevronDown, Expand, Phone } from "lucide-react"
import "photoswipe/style.css"
import { useEffect, useMemo, useRef, useState } from "react"
import { useRouter } from "next/router"

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

function MasonryTileMedia({
  item,
  eager,
  sizes,
}: {
  item: GalleryItem
  eager: boolean
  sizes: string
}) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [shouldLoad, setShouldLoad] = useState(eager)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    if (eager) {
      setShouldLoad(true)
      return
    }
    if (shouldLoad) return
    if (typeof window === "undefined") return

    // If IntersectionObserver isn't supported, fall back to mounting immediately.
    if (!("IntersectionObserver" in window)) {
      setShouldLoad(true)
      return
    }

    const el = containerRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShouldLoad(true)
          observer.disconnect()
        }
      },
      {
        // Start loading a bit before the tile scrolls into view.
        rootMargin: "600px 0px",
        threshold: 0.01,
      }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [eager, shouldLoad])

  return (
    <div ref={containerRef} className="photos-masonry-media">
      {!shouldLoad ? (
        <div className="photos-skeleton" aria-hidden="true" />
      ) : (
        <>
          {!isLoaded ? <div className="photos-skeleton" aria-hidden="true" /> : null}
          <Image
            src={item.src}
            alt={item.alt}
            fill
            sizes={sizes}
            placeholder="blur"
            blurDataURL={BLUR_DATA_URL}
            quality={85}
            priority={eager}
            className={isLoaded ? "photos-masonry-img is-loaded" : "photos-masonry-img"}
            onLoadingComplete={() => setIsLoaded(true)}
          />
        </>
      )}
    </div>
  )
}

interface PhotosPageProps extends LayoutProps {}

export default function PhotosPage({ menus }: PhotosPageProps) {
  const router = useRouter()
  const heroImage = "/images/turnberry/Turnberry_Place_For_Sale.jpg"
  const photoCount = galleryItems.length

  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "https://www.turnberryplaceforsale.com"

  // Hero background slideshow (crossfade)
  const heroSlides = useMemo(() => {
    const curatedIds = [
      "hero-exterior",
      "penthouse-strip-view",
      "stirling-pool",
      "residence-interior",
    ]
    const curated = curatedIds
      .map((id) => galleryItems.find((g) => g.id === id))
      .filter(Boolean) as GalleryItem[]
    return curated.length ? curated : galleryItems.slice(0, 4)
  }, [])

  const heroIndexRef = useRef(0)
  const [heroActive, setHeroActive] = useState(0)
  const [heroFadeIn, setHeroFadeIn] = useState<number | null>(null)

  useEffect(() => {
    if (heroSlides.length <= 1) return

    const fadeMs = 900
    const intervalMs = 6500

    const interval = window.setInterval(() => {
      const current = heroIndexRef.current
      const next = (current + 1) % heroSlides.length
      setHeroFadeIn(next)
      window.setTimeout(() => {
        heroIndexRef.current = next
        setHeroActive(next)
        setHeroFadeIn(null)
      }, fadeMs)
    }, intervalMs)

    return () => window.clearInterval(interval)
  }, [heroSlides.length])

  const photosMetaDescription =
    "Explore 23 professional photos of Turnberry Place luxury condos, Stirling Club amenities, and panoramic Las Vegas Strip views. Schedule a private tour."

  const photosOgImages = galleryItems.slice(0, 5).map((img) => ({
    url: `${baseUrl}${img.full}`,
    alt: img.alt,
  }))

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: baseUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Photos",
        item: `${baseUrl}/photos`,
      },
    ],
  }

  const imageGallerySchema = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: "Turnberry Place Las Vegas Photo Gallery",
    description: photosMetaDescription,
    url: `${baseUrl}/photos`,
    image: galleryItems.map((img) => ({
      "@type": "ImageObject",
      contentUrl: `${baseUrl}${img.full}`,
      name: img.title,
      description: img.description || img.alt,
      author: {
        "@type": "Person",
        name: "Dr. Jan Duffy",
      },
    })),
  }

  const [activeFilter, setActiveFilter] = useState<GalleryFilter>("All")
  const [isFading, setIsFading] = useState(false)
  const [mobileActiveIndex, setMobileActiveIndex] = useState(0)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const [pullProgress, setPullProgress] = useState(0)
  const [canReleaseRefresh, setCanReleaseRefresh] = useState(false)

  // Mobile-only: enable page-level scroll snapping without affecting other routes.
  useEffect(() => {
    document.body.classList.add("photos-mobile-native")
    // Hide the global navbar on /photos mobile to keep the UI app-like.
    document.documentElement.style.setProperty("--navbar-height", "0px")
    return () => {
      document.body.classList.remove("photos-mobile-native")
      document.documentElement.style.removeProperty("--navbar-height")
    }
  }, [])

  // Mobile: pull-to-refresh (lightweight). Pull down at top, release to refresh.
  useEffect(() => {
    if (typeof window === "undefined") return

    let startY = 0
    let pulling = false

    const onTouchStart = (e: TouchEvent) => {
      if (window.scrollY > 0) return
      startY = e.touches?.[0]?.clientY || 0
      pulling = true
      setPullProgress(0)
      setCanReleaseRefresh(false)
    }

    const onTouchMove = (e: TouchEvent) => {
      if (!pulling) return
      if (window.scrollY > 0) return
      const y = e.touches?.[0]?.clientY || 0
      const dy = Math.max(0, y - startY)
      const progress = Math.min(1, dy / 110)
      setPullProgress(progress)
      setCanReleaseRefresh(dy >= 110)
    }

    const onTouchEnd = () => {
      if (!pulling) return
      const shouldRefresh = canReleaseRefresh
      pulling = false
      setPullProgress(0)
      setCanReleaseRefresh(false)
      if (shouldRefresh) window.location.reload()
    }

    window.addEventListener("touchstart", onTouchStart, { passive: true })
    window.addEventListener("touchmove", onTouchMove, { passive: true })
    window.addEventListener("touchend", onTouchEnd)
    window.addEventListener("touchcancel", onTouchEnd)
    return () => {
      window.removeEventListener("touchstart", onTouchStart)
      window.removeEventListener("touchmove", onTouchMove)
      window.removeEventListener("touchend", onTouchEnd)
      window.removeEventListener("touchcancel", onTouchEnd)
    }
  }, [canReleaseRefresh])

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

  // Mobile: track which tile is "active" while scrolling to update the sticky header counter.
  useEffect(() => {
    if (typeof window === "undefined") return
    if (!("IntersectionObserver" in window)) return

    const items = Array.from(
      document.querySelectorAll<HTMLAnchorElement>("#photos-masonry a[data-gallery-index]")
    )
    if (!items.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) =>
              (b.intersectionRatio || 0) - (a.intersectionRatio || 0)
          )[0]
        if (!visible?.target) return
        const idxStr = (visible.target as HTMLElement).getAttribute("data-gallery-index")
        const idx = idxStr ? Number(idxStr) : 0
        if (!Number.isNaN(idx)) setMobileActiveIndex(idx)
      },
      {
        root: null,
        threshold: [0.55],
      }
    )

    items.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [activeFilter, filteredItems.length])

  // Initialize PhotoSwipe for the currently displayed items (re-inits on filter change for thumb strip).
  useEffect(() => {
    let lightbox: any = null
    let cancelled = false

    function raf(): Promise<void> {
      return new Promise((resolve) => {
        window.requestAnimationFrame(() => resolve())
      })
    }

    async function init() {
      // Wait a tick (or two) for the masonry DOM to exist before initializing PhotoSwipe.
      // If the gallery element isn't present, PhotoSwipe will throw "Element not found".
      for (let i = 0; i < 20; i++) {
        if (
          document.querySelector("#photos-masonry") &&
          document.querySelector("#photos-masonry a[data-pswp-item]")
        ) {
          break
        }
        // eslint-disable-next-line no-await-in-loop
        await raf()
      }

      const gallerySelector = "#photos-masonry"
      const galleryEl = document.querySelector(gallerySelector)
      if (!galleryEl || cancelled) return

      const PhotoSwipeLightbox = (await import("photoswipe/lightbox")).default
      if (cancelled) return

      lightbox = new PhotoSwipeLightbox({
        gallery: gallerySelector,
        children: "a[data-pswp-item]",
        pswpModule: () => import("photoswipe"),
        showHideAnimationType: "fade",
        bgOpacity: 0.92,
        preload: [1, 2],
        wheelToZoom: true,
      })

      lightbox.on("uiRegister", () => {
        const pswp = lightbox.pswp
        if (!pswp?.ui) return

        // Fullscreen toggle
        pswp.ui.registerElement({
          name: "luxFs",
          order: 4,
          isButton: true,
          appendTo: "bar",
          html: "Fullscreen",
          onClick: () => {
            const root = document.documentElement
            if (!document.fullscreenElement) {
              root.requestFullscreen?.()
            } else {
              document.exitFullscreen?.()
            }
          },
        })

        // Caption (title + optional description)
        pswp.ui.registerElement({
          name: "luxCaption",
          order: 9,
          isButton: false,
          appendTo: "root",
          onInit: (el: HTMLElement, pswp: any) => {
            el.className = "pswp__lux-caption"
            el.setAttribute("role", "note")
            el.setAttribute("aria-label", "Photo caption")

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
        pswp.ui.registerElement({
          name: "luxCounter",
          order: 7,
          isButton: false,
          appendTo: "bar",
          onInit: (el: HTMLElement, pswp: any) => {
            el.className = "pswp__lux-counter"
            el.setAttribute("role", "status")
            el.setAttribute("aria-live", "polite")
            const render = () => {
              const idx = (pswp.currIndex ?? 0) + 1
              el.textContent = `${idx} of ${filteredItems.length}`
            }
            pswp.on("change", render)
            render()
          },
        })

        // Share (copy link)
        pswp.ui.registerElement({
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
        pswp.ui.registerElement({
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
        pswp.ui.registerElement({
          name: "luxThumbs",
          order: 10,
          isButton: false,
          appendTo: "root",
          onInit: (el: HTMLElement, pswp: any) => {
            el.className = "pswp__lux-thumbs"

            const thumbUrlFor = (src: string) =>
              `/_next/image?url=${encodeURIComponent(src)}&w=96&q=70`

            const render = () => {
              const current = pswp.currIndex ?? 0
              el.innerHTML = filteredItems
                .map((item, i) => {
                  const active = i === current ? "is-active" : ""
                  const thumbUrl = thumbUrlFor(item.src)
                  return `<button type="button" class="pswp__lux-thumb ${active}" data-idx="${i}" aria-label="${item.title}">
                    <img src="${thumbUrl}" alt="" loading="lazy" />
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

      // Sync mobile counter with lightbox navigation (and hide our header/FABs while open).
      lightbox.on("open", () => {
        setIsLightboxOpen(true)
        const pswp = lightbox.pswp
        if (pswp) {
          setMobileActiveIndex(pswp.currIndex ?? 0)
          pswp.on("change", () => setMobileActiveIndex(pswp.currIndex ?? 0))
        }
      })
      lightbox.on("close", () => {
        setIsLightboxOpen(false)
      })

      lightbox.init()
    }

    init()

    return () => {
      cancelled = true
      if (lightbox) lightbox.destroy()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeFilter, filteredItems.length])

  return (
    <Layout menus={menus}>
      <Head>
        <script
          key="photos_breadcrumb_schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema),
          }}
        />
        <script
          key="photos_image_gallery_schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(imageGallerySchema),
          }}
        />
      </Head>
      <Meta
        title="Photo Gallery - Turnberry Place Las Vegas"
        description={photosMetaDescription}
        ogImages={photosOgImages}
      />
      <JsonLdSchema type="property" />
      <div className="card-content card-photos photos-page">
        {/* Mobile-only sticky header */}
        {!isLightboxOpen ? (
          <div
            className="photos-mobile-header d-sm-none"
            role="banner"
            aria-label="Gallery navigation"
          >
            <div
              className="photos-mobile-pullbar"
              aria-hidden="true"
              style={{ transform: `scaleX(${pullProgress})` }}
            />
            <button
              type="button"
              className="photos-mobile-back"
              onClick={() => {
                if (window.history.length > 1) router.back()
                else router.push("/")
              }}
              aria-label="Go back"
            >
              <ArrowLeft className="photos-mobile-icon" aria-hidden="true" />
            </button>
            <div className="photos-mobile-title">
              {canReleaseRefresh ? "Release to refresh" : "Gallery"}
            </div>
            <div className="photos-mobile-counter" aria-label="Image position">
              {mobileActiveIndex + 1}/{filteredItems.length}
            </div>
          </div>
        ) : null}

        {/* Mobile floating action buttons */}
        {!isLightboxOpen ? (
          <div
            className="photos-mobile-fabs d-sm-none"
            role="complementary"
            aria-label="Quick actions"
          >
            <a
              className="photos-fab"
              href="tel:+17025001971"
              aria-label="Call (702) 500-1971"
            >
              <Phone className="photos-fab-icon" aria-hidden="true" />
            </a>
            <a
              className="photos-fab"
              href={
                process.env.NEXT_PUBLIC_CALENDLY_URL ||
                "https://calendly.com/drjanduffy/1-home-tour-30-mins"
              }
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Schedule a private tour on Calendly"
            >
              <Calendar className="photos-fab-icon" aria-hidden="true" />
            </a>
          </div>
        ) : null}

        {/* HERO */}
        <section className="photos-hero" aria-label="Turnberry Place photo gallery hero">
          <div className="photos-hero-media" aria-hidden="true">
            {/* Active slide (LCP-focused) */}
            <div className="photos-hero-slide is-active">
              <Image
                src={heroSlides[heroActive]?.src || heroImage}
                alt={
                  heroSlides[heroActive]?.alt ||
                  "Turnberry Place Las Vegas luxury high-rise condos"
                }
                fill
                priority
                sizes="100vw"
                quality={85}
                placeholder="blur"
                blurDataURL={BLUR_DATA_URL}
                className="photos-hero-img"
              />
            </div>

            {/* Fade-in slide (preloads next background) */}
            {heroFadeIn !== null ? (
              <div className="photos-hero-slide is-fade-in">
                <Image
                  src={heroSlides[heroFadeIn]?.src || heroImage}
                  alt={
                    heroSlides[heroFadeIn]?.alt ||
                    "Turnberry Place Las Vegas luxury high-rise condos"
                  }
                  fill
                  sizes="100vw"
                  quality={85}
                  placeholder="blur"
                  blurDataURL={BLUR_DATA_URL}
                  className="photos-hero-img"
                />
              </div>
            ) : null}
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
                {filteredItems.map((item, index) => {
                  const eager = index < 4
                  const sizes =
                    "(max-width: 575px) 100vw, (max-width: 991px) 50vw, 25vw"

                  return (
                  <a
                    key={item.id}
                    href={item.full}
                    data-pswp-item
                    data-gallery-index={index}
                    data-pswp-width={item.pswpWidth}
                    data-pswp-height={item.pswpHeight}
                    data-pswp-caption={`<strong>${item.title}</strong>${
                      item.description ? `<br/>${item.description}` : ""
                    }`}
                    className="photos-masonry-item"
                    aria-label={item.title}
                  >
                    <div
                      className="photos-masonry-card"
                      style={{
                        height: item.height,
                        // Provides extra layout stability across browsers and prevents CLS.
                        aspectRatio: `${item.pswpWidth}/${item.pswpHeight}`,
                      }}
                    >
                      <MasonryTileMedia item={item} eager={eager} sizes={sizes} />
                      <div className="photos-mobile-expand" aria-hidden="true">
                        <Expand className="photos-mobile-expand-icon" />
                      </div>
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
                  )
                })}
              </div>
            </div>
          </div>
          
          <div className="row mt-5">
            <div className="col-12 col-lg-10 mx-auto">
              <h2>Turnberry Place Photo Gallery</h2>
              <p>
                These professional photographs showcase Turnberry Place's luxury residences, premium finishes, and world-class amenities. View interior spaces, exterior architecture, and The Stirling Club facilities.
              </p>
              <h2 className="mt-5">Luxury Residences</h2>
              <p>
                Explore interiors, finishes, and open-concept living spaces inside Turnberry Place luxury condos.
              </p>

              <h2 className="mt-4">The Stirling Club</h2>
              <p>
                See resort-style amenities, private club spaces, dining, and wellness experiences available to residents.
              </p>

              <h2 className="mt-4">Panoramic Views</h2>
              <p>
                Discover Las Vegas Strip skyline views, city lights, and dramatic sunsets from high-floor residences.
              </p>

              <h2 className="mt-4">Community Amenities</h2>
              <p>
                Browse the guard-gated entry, arrival experience, and luxury common areas that define Turnberry Place.
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
