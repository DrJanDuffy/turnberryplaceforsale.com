// Find and extract image URLs from the live site
const https = require('https');
const http = require('http');

function fetchPage(url) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;
    protocol.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function extractImageUrls() {
  try {
    console.log('Fetching page...');
    const html = await fetchPage('https://www.turnberryplaceforsale.com/');
    
    // Find all img tags
    const imgRegex = /<img[^>]+src=['"]([^'"]+)['"]/gi;
    const images = [];
    let match;
    
    while ((match = imgRegex.exec(html)) !== null) {
      let url = match[1];
      // Convert relative URLs to absolute
      if (url.startsWith('/')) {
        url = 'https://www.turnberryplaceforsale.com' + url;
      } else if (!url.startsWith('http')) {
        url = 'https://www.turnberryplaceforsale.com/' + url;
      }
      images.push(url);
    }
    
    // Find background images in CSS
    const bgRegex = /background-image:\s*url\(['"]?([^'")]+)['"]?\)/gi;
    while ((match = bgRegex.exec(html)) !== null) {
      let url = match[1];
      if (url.startsWith('/')) {
        url = 'https://www.turnberryplaceforsale.com' + url;
      } else if (!url.startsWith('http')) {
        url = 'https://www.turnberryplaceforsale.com/' + url;
      }
      images.push(url);
    }
    
    // Remove duplicates
    const uniqueImages = [...new Set(images)];
    
    console.log(`\nFound ${uniqueImages.length} unique image URLs:\n`);
    uniqueImages.forEach((url, index) => {
      console.log(`${index + 1}. ${url}`);
    });
    
    // Save to file
    const fs = require('fs');
    const output = {
      images: uniqueImages,
      timestamp: new Date().toISOString()
    };
    fs.writeFileSync('scripts/image-urls.json', JSON.stringify(output, null, 2));
    console.log('\n✓ Saved to scripts/image-urls.json');
    
  } catch (error) {
    console.error('Error:', error.message);
  }
}

extractImageUrls();
