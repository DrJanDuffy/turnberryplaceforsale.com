// Download all images from the extracted URLs
const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

// Read extracted URLs
const imageUrls = JSON.parse(fs.readFileSync('scripts/image-urls.json', 'utf8'));

// Filter for high-quality images (not thumbnails)
const highQualityImages = imageUrls.images.filter(url => {
  // Skip thumbnails and small images
  if (url.includes('width=45') || url.includes('width=75') || url.includes('width=141')) {
    return false;
  }
  // Prefer larger images
  if (url.includes('width=1500') || url.includes('width=600') || url.includes('width=400')) {
    return true;
  }
  // Include asset images
  if (url.includes('/asset.jpg') || url.includes('/photo.jpg')) {
    return true;
  }
  return false;
});

// Organize images by type
function categorizeImage(url) {
  if (url.includes('/photo.jpg')) {
    return { folder: 'turnberry', prefix: 'photo' };
  }
  if (url.includes('/asset.jpg')) {
    // Check if it's a floor plan (media folder)
    if (url.includes('/media/')) {
      return { folder: 'floor-plans', prefix: 'floor-plan' };
    }
    return { folder: 'turnberry', prefix: 'asset' };
  }
  return { folder: 'turnberry', prefix: 'image' };
}

function downloadImage(url, outputPath) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;
    
    const request = protocol.get(url, (response) => {
      if (response.statusCode === 200) {
        const fileStream = fs.createWriteStream(outputPath);
        response.pipe(fileStream);
        fileStream.on('finish', () => {
          fileStream.close();
          resolve(true);
        });
      } else if (response.statusCode === 301 || response.statusCode === 302) {
        // Handle redirects
        downloadImage(response.headers.location, outputPath)
          .then(resolve)
          .catch(reject);
      } else {
        reject(new Error(`HTTP ${response.statusCode}`));
      }
    });
    
    request.on('error', reject);
    request.setTimeout(10000, () => {
      request.destroy();
      reject(new Error('Timeout'));
    });
  });
}

async function downloadAllImages() {
  console.log('Downloading Images from Turnberry Place');
  console.log('======================================\n');
  
  const baseDir = path.join(__dirname, '..', 'public', 'images');
  let downloaded = 0;
  let failed = 0;
  const photoCounts = { turnberry: 0, 'floor-plans': 0, towers: 0, amenities: 0, 'stirling-club': 0 };
  
  // Get unique high-quality images
  const uniqueUrls = [...new Set(highQualityImages)];
  console.log(`Found ${uniqueUrls.length} high-quality images to download\n`);
  
  for (let i = 0; i < uniqueUrls.length; i++) {
    const url = uniqueUrls[i];
    const category = categorizeImage(url);
    const folderPath = path.join(baseDir, category.folder);
    
    // Ensure folder exists
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath, { recursive: true });
    }
    
    // Generate filename
    const count = photoCounts[category.folder]++;
    const extension = url.match(/\.(jpg|jpeg|png|gif|webp)/i)?.[1] || 'jpg';
    const filename = `${category.prefix}-${count + 1}.${extension}`;
    const outputPath = path.join(folderPath, filename);
    
    // Skip if already exists
    if (fs.existsSync(outputPath)) {
      console.log(`⊘ Skipped (exists): ${filename}`);
      continue;
    }
    
    try {
      await downloadImage(url, outputPath);
      console.log(`✓ [${i + 1}/${uniqueUrls.length}] ${filename}`);
      downloaded++;
    } catch (error) {
      console.log(`✗ [${i + 1}/${uniqueUrls.length}] Failed: ${filename} - ${error.message}`);
      failed++;
    }
  }
  
  console.log('\n======================================');
  console.log('Summary:');
  console.log(`  Downloaded: ${downloaded}`);
  console.log(`  Failed: ${failed}`);
  console.log(`  Skipped: ${uniqueUrls.length - downloaded - failed}`);
  console.log('\nImages saved to:');
  Object.keys(photoCounts).forEach(folder => {
    if (photoCounts[folder] > 0) {
      console.log(`  public/images/${folder}/`);
    }
  });
}

downloadAllImages().catch(console.error);
