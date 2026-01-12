# Image URL Extraction Guide

## How to Extract Image URLs from Live Site

### Method 1: Browser Developer Tools

1. Open https://www.turnberryplaceforsale.com/ in your browser
2. Press F12 to open Developer Tools
3. Go to the "Network" tab
4. Filter by "Img" to see only images
5. Refresh the page or navigate to different sections
6. Copy image URLs from the network requests

### Method 2: View Page Source

1. Right-click on the page → "View Page Source"
2. Search for `<img` tags
3. Extract `src` attributes
4. Look for image URLs in CSS backgrounds

### Method 3: Inspect Elements

1. Right-click on an image → "Inspect"
2. Look at the `<img>` tag's `src` attribute
3. Copy the full URL

## Image Categories

### Hero/Main Images
- Homepage hero image
- Property overview images

### Tower Images
- Tower 1 exterior/interior
- Tower 2 exterior/interior
- Tower 3 exterior/interior
- Tower 4 exterior/interior

### Photo Gallery
- Property photos
- Interior shots
- Exterior shots
- Amenity photos

### Stirling Club
- Club facilities
- Pool areas
- Fitness center
- Dining areas

### Floor Plans
- Floor plan A through H
- PDF or image format

## Folder Structure

```
public/
  images/
    turnberry/     - Main property images
    towers/        - Individual tower images
    amenities/     - Amenity photos
    stirling-club/ - Stirling Club photos
    floor-plans/   - Floor plan images
```

## Next Steps

1. Extract actual image URLs from the live site
2. Update `scripts/scrape-images.ps1` with real URLs
3. Run the script to download images
4. Update components to use local images
