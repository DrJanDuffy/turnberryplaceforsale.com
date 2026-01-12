# Image Setup Guide

## Folder Structure Created

The following image folders have been created in `public/images/`:

```
public/
  images/
    turnberry/      - Main property and hero images
    towers/         - Individual tower images (Tower 1-4)
    amenities/      - Amenity photos
    stirling-club/  - Stirling Club facility photos
    floor-plans/    - Floor plan images (A-H)
```

## How to Add Images

### Option 1: Manual Download

1. Visit https://www.turnberryplaceforsale.com/
2. Open browser Developer Tools (F12)
3. Go to Network tab → Filter by "Img"
4. Navigate through the site to load images
5. Right-click on images → "Save image as..."
6. Save to appropriate folder in `public/images/`

### Option 2: Use the Download Script

1. Extract actual image URLs from the live site:
   - Use browser DevTools Network tab
   - Or inspect image elements
   - Copy full image URLs

2. Update `scripts/download-images.js` with real URLs

3. Run the script:
   ```bash
   node scripts/download-images.js
   ```

### Option 3: Use PowerShell Script

1. Update `scripts/scrape-images.ps1` with actual image URLs
2. Run:
   ```powershell
   .\scripts\scrape-images.ps1
   ```

## Image Requirements

### Hero Image
- **Location**: `public/images/turnberry/hero.jpg`
- **Size**: Recommended 1920x1080 or larger
- **Format**: JPG, WebP, or PNG

### Photo Gallery
- **Location**: `public/images/turnberry/photo-*.jpg`
- **Count**: At least 4 images
- **Size**: Recommended 1200x800 or larger

### Tower Images
- **Location**: `public/images/towers/tower-*.jpg`
- **Files**: tower-1.jpg, tower-2.jpg, tower-3.jpg, tower-4.jpg
- **Size**: Recommended 800x600 or larger

### Floor Plans
- **Location**: `public/images/floor-plans/`
- **Files**: floor-plan-a.jpg through floor-plan-h.jpg
- **Format**: JPG or PNG

## Updating Components

After adding images, update the components:

### Photo Gallery (`pages/photos.tsx`)
```typescript
const photos = [
  "/images/turnberry/photo-1.jpg",
  "/images/turnberry/photo-2.jpg",
  "/images/turnberry/photo-3.jpg",
  "/images/turnberry/photo-4.jpg",
]
```

### Home Page Hero (`pages/index.tsx`)
```typescript
// Add background image to hero section
style={{ backgroundImage: 'url(/images/turnberry/hero.jpg)' }}
```

### Tower Sections (`pages/towers.tsx`)
```typescript
tower.image = "/images/towers/tower-1.jpg"
```

## Next Steps

1. ✅ Folders created
2. ⏳ Extract image URLs from live site
3. ⏳ Download images to folders
4. ⏳ Update components with image paths
5. ⏳ Test image display

## Notes

- Images in `public/` are served statically by Next.js
- Use relative paths starting with `/images/` in components
- Optimize images before committing (use tools like ImageOptim or Squoosh)
- Consider using Next.js Image component for optimization
