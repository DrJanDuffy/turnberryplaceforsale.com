## `public/` (static assets)

Anything in this folder is served at the site root.

### Current structure (do not rename without updating references)

- **`/images/`**: images used across pages
  - `images/turnberry/` (main photo library used by `/photos`, `/amenities`, etc.)
  - `images/towers/`
  - `images/stirling-club/`
  - `images/amenities/`
  - `images/floor-plans/`
- **`/videos/`**: video-related assets (we do **not** commit actual video binaries)
  - `videos/vimeo/posters/` (lightweight poster images used as gallery thumbnails)
- **Top-level**
  - `favicon.ico`
  - `robots.txt`
  - `meta.jpg` (legacy default OG image)

### Add new assets (best practice)

- **Turnberry photos**: add to `public/images/turnberry/` and use a clean, descriptive filename.
- **Vimeo posters**: add to `public/videos/vimeo/posters/` and register the video in:
  - `data/media/vimeo-videos.json`

### Naming guidelines (performance + sanity)

- Prefer **lowercase-with-hyphens** (avoid spaces and `(1)` duplicates).
- Keep posters ~**200–400KB** when possible.
- Use **.jpg** for photos, **.webp/.avif** when you have it, **.svg** for icons.

