// Image Download Script for Turnberry Place
// Downloads images from the live site to local folders

const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

// Image URLs extracted from the live site
// These need to be updated with actual URLs from the site
const imageUrls = [
  // Hero/main images
  { url: 'https://www.turnberryplaceforsale.com/images/hero.jpg', folder: 'turnberry', name: 'hero.jpg' },
  { url: 'https://www.turnberryplaceforsale.com/images/turnberry-main.jpg', folder: 'turnberry', name: 'main.jpg' },
  
  // Photo gallery (4 photos mentioned on site)
  { url: 'https://www.turnberryplaceforsale.com/images/photo1.jpg', folder: 'turnberry', name: 'photo-1.jpg' },
  { url: 'https://www.turnberryplaceforsale.com/images/photo2.jpg', folder: 'turnberry', name: 'photo-2.jpg' },
  { url: 'https://www.turnberryplaceforsale.com/images/photo3.jpg', folder: 'turnberry', name: 'photo-3.jpg' },
  { url: 'https://www.turnberryplaceforsale.com/images/photo4.jpg', folder: 'turnberry', name: 'photo-4.jpg' },
];

function downloadImage(url, outputPath) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;
    
    protocol.get(url, (response) => {
      if (response.statusCode === 200) {
        const fileStream = fs.createWriteStream(outputPath);
        response.pipe(fileStream);
        fileStream.on('finish', () => {
          fileStream.close();
          console.log(`✓ Downloaded: ${outputPath}`);
          resolve(true);
        });
      } else if (response.statusCode === 301 || response.statusCode === 302) {
        // Handle redirects
        downloadImage(response.headers.location, outputPath)
          .then(resolve)
          .catch(reject);
      } else {
        console.log(`✗ Failed: ${url} - Status: ${response.statusCode}`);
        reject(new Error(`HTTP ${response.statusCode}`));
      }
    }).on('error', (err) => {
      console.log(`✗ Failed: ${url} - ${err.message}`);
      reject(err);
    });
  });
}

async function downloadAllImages() {
  console.log('Image Download Script for Turnberry Place');
  console.log('========================================\n');
  
  const baseDir = path.join(__dirname, '..', 'public', 'images');
  let downloaded = 0;
  let failed = 0;
  
  for (const image of imageUrls) {
    const folderPath = path.join(baseDir, image.folder);
    const outputPath = path.join(folderPath, image.name);
    
    // Ensure folder exists
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath, { recursive: true });
    }
    
    try {
      await downloadImage(image.url, outputPath);
      downloaded++;
    } catch (error) {
      failed++;
    }
  }
  
  console.log('\nSummary:');
  console.log(`  Downloaded: ${downloaded}`);
  console.log(`  Failed: ${failed}`);
  console.log('\nNote: Update image URLs in this script with actual URLs from the live site.');
}

downloadAllImages().catch(console.error);
