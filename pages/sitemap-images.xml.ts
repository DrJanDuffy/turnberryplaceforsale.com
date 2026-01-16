import { GetServerSideProps } from 'next'

// Ensure www is always used as primary domain
const baseUrl = (() => {
  const envUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.turnberryplaceforsale.com'
  if (envUrl.includes('turnberryplaceforsale.com') && !envUrl.includes('www.')) {
    return envUrl.replace('turnberryplaceforsale.com', 'www.turnberryplaceforsale.com')
  }
  return envUrl.replace(/\/$/, '')
})()

// Key images for image sitemap
const imageSitemapImages = [
  {
    loc: `${baseUrl}/images/turnberry/Turnberry_Place_For_Sale.jpg`,
    caption: 'Turnberry Place Las Vegas luxury high-rise condominium community',
    title: 'Turnberry Place Las Vegas',
    geo_location: 'Las Vegas, NV, USA',
  },
  {
    loc: `${baseUrl}/images/turnberry/turnberry-tower-south-view.jpeg`,
    caption: 'Turnberry Place four luxury towers near the Las Vegas Strip',
    title: 'Turnberry Place Towers',
    geo_location: 'Las Vegas, NV, USA',
  },
  {
    loc: `${baseUrl}/images/turnberry/turnberry-tower-nice-view.jpg`,
    caption: 'Turnberry Place luxury high-rise with Strip views',
    title: 'Turnberry Place Las Vegas',
    geo_location: 'Las Vegas, NV, USA',
  },
  {
    loc: `${baseUrl}/images/turnberry/turnberry-towers-las-vegas-nv-primary-photo.jpg`,
    caption: 'Turnberry Place luxury condominium towers',
    title: 'Turnberry Place Towers',
    geo_location: 'Las Vegas, NV, USA',
  },
  {
    loc: `${baseUrl}/images/turnberry/condos_for_sale_Turnberry_Place.jpg`,
    caption: 'Turnberry Place condos for sale in Las Vegas',
    title: 'Turnberry Place Condos for Sale',
    geo_location: 'Las Vegas, NV, USA',
  },
  {
    loc: `${baseUrl}/images/turnberry/sterlingclubpoolwithpeople.jpeg`,
    caption: 'Resort-style pool at The Stirling Club at Turnberry Place',
    title: 'The Stirling Club Pool',
    geo_location: 'Las Vegas, NV, USA',
  },
  {
    loc: `${baseUrl}/images/turnberry/optimized/StirlingClub_CigarBar_View1.optimized.jpg`,
    caption: 'The Stirling Club cigar bar at Turnberry Place',
    title: 'The Stirling Club Cigar Bar',
    geo_location: 'Las Vegas, NV, USA',
  },
  {
    loc: `${baseUrl}/images/turnberry/SterlingClubDinning.avif`,
    caption: 'Fine dining at The Stirling Club',
    title: 'The Stirling Club Dining',
    geo_location: 'Las Vegas, NV, USA',
  },
  {
    loc: `${baseUrl}/images/turnberry/Las-Vegas-High-Rise-Condo-Living-Downtown-Las-Vegas-Turnberry-Place-Interior.jpg`,
    caption: 'Luxury interior at Turnberry Place Las Vegas',
    title: 'Turnberry Place Interior',
    geo_location: 'Las Vegas, NV, USA',
  },
  {
    loc: `${baseUrl}/images/turnberry/turnberry-place-floor-plan-h.png`,
    caption: 'Turnberry Place luxury floor plans',
    title: 'Turnberry Place Floor Plans',
    geo_location: 'Las Vegas, NV, USA',
  },
]

function generateImageSitemap() {
  const today = new Date().toISOString().split('T')[0]
  
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
           xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
     ${imageSitemapImages
       .map((image) => {
         return `
       <url>
           <loc>${baseUrl}/</loc>
           <lastmod>${today}</lastmod>
           <image:image>
               <image:loc>${image.loc}</image:loc>
               <image:caption>${image.caption}</image:caption>
               <image:title>${image.title}</image:title>
               <image:geo_location>${image.geo_location}</image:geo_location>
           </image:image>
       </url>
     `
       })
       .join('')}
   </urlset>
 `
}

function ImageSitemap() {
  // getServerSideProps will do the heavy lifting
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const sitemap = generateImageSitemap()

  res.setHeader('Content-Type', 'text/xml')
  res.write(sitemap)
  res.end()

  return {
    props: {},
  }
}

export default ImageSitemap
