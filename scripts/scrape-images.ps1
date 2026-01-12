# Image Scraping Script for Turnberry Place
# This script downloads images from the live site

$baseUrl = "https://www.turnberryplaceforsale.com"
$imageFolders = @{
    "turnberry" = "public\images\turnberry"
    "towers" = "public\images\towers"
    "amenities" = "public\images\amenities"
    "stirling-club" = "public\images\stirling-club"
    "floor-plans" = "public\images\floor-plans"
}

# Common image URLs from the live site (these would need to be extracted from the actual page)
$imageUrls = @(
    # Hero/main images
    @{url = "$baseUrl/images/hero.jpg"; folder = "turnberry"; name = "hero.jpg"},
    @{url = "$baseUrl/images/turnberry-main.jpg"; folder = "turnberry"; name = "main.jpg"},
    
    # Tower images (placeholder URLs - need to be updated with actual URLs)
    @{url = "$baseUrl/images/tower1.jpg"; folder = "towers"; name = "tower-1.jpg"},
    @{url = "$baseUrl/images/tower2.jpg"; folder = "towers"; name = "tower-2.jpg"},
    @{url = "$baseUrl/images/tower3.jpg"; folder = "towers"; name = "tower-3.jpg"},
    @{url = "$baseUrl/images/tower4.jpg"; folder = "towers"; name = "tower-4.jpg"},
    
    # Photo gallery images
    @{url = "$baseUrl/images/photo1.jpg"; folder = "turnberry"; name = "photo-1.jpg"},
    @{url = "$baseUrl/images/photo2.jpg"; folder = "turnberry"; name = "photo-2.jpg"},
    @{url = "$baseUrl/images/photo3.jpg"; folder = "turnberry"; name = "photo-3.jpg"},
    @{url = "$baseUrl/images/photo4.jpg"; folder = "turnberry"; name = "photo-4.jpg"},
)

Write-Host "Image Scraping Script for Turnberry Place" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Function to download image
function Download-Image {
    param(
        [string]$Url,
        [string]$OutputPath
    )
    
    try {
        $response = Invoke-WebRequest -Uri $Url -UseBasicParsing -ErrorAction Stop
        if ($response.StatusCode -eq 200) {
            [System.IO.File]::WriteAllBytes($OutputPath, $response.Content)
            Write-Host "✓ Downloaded: $OutputPath" -ForegroundColor Green
            return $true
        }
    } catch {
        Write-Host "✗ Failed: $Url - $($_.Exception.Message)" -ForegroundColor Red
        return $false
    }
}

# Download images
$downloaded = 0
$failed = 0

foreach ($image in $imageUrls) {
    $folder = $imageFolders[$image.folder]
    $outputPath = Join-Path $folder $image.name
    
    if (Download-Image -Url $image.url -OutputPath $outputPath) {
        $downloaded++
    } else {
        $failed++
    }
}

Write-Host ""
Write-Host "Summary:" -ForegroundColor Cyan
Write-Host "  Downloaded: $downloaded" -ForegroundColor Green
Write-Host "  Failed: $failed" -ForegroundColor Red
Write-Host ""
Write-Host "Note: Update image URLs in this script with actual URLs from the live site." -ForegroundColor Yellow
