## Vimeo videos for `/photos`

This folder is for **lightweight, Git-friendly assets** that support Vimeo videos in the gallery:

- **Poster images** live in `public/videos/vimeo/posters/`
- **Video registry** lives in `data/media/vimeo-videos.json`

### Add a new Vimeo video to the gallery

1. Get the Vimeo ID from the URL:
   - Example: `https://vimeo.com/1029079644` → ID is `1029079644`
2. Add a poster image (recommended: JPG, ~200–400KB):
   - `public/videos/vimeo/posters/turnberry-place-video-<ID>.jpg`
3. Add a new entry in `data/media/vimeo-videos.json`:
   - `vimeoId`: the numeric ID
   - `poster`: the poster path under `/videos/vimeo/posters/...`
   - `category`: one of `Residences | Stirling Club | Views | Amenities`

### Notes

- We **do not** commit actual video binaries to Git.
- Vimeo embeds load **only when opened** in the lightbox (lazy), so they won’t impact initial LCP.

