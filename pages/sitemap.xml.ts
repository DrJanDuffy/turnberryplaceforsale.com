import { GetServerSideProps } from 'next'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.turnberryplaceforsale.com'

// All static pages
const staticPages = [
  '',
  '/price-features',
  '/towers',
  '/amenities',
  '/photos',
  '/map',
  '/open-house',
  '/request-details',
  '/agent',
  '/available-condos',
  '/floor-plans',
  '/share',
  '/stirling-club',
  '/neighborhood',
  '/accessibility',
]

function generateSiteMap() {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
           xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
           xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
           http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
     ${staticPages
       .map((path) => {
         const url = `${baseUrl}${path}`
         const priority = path === '' ? '1.0' : '0.8'
         const changefreq = path === '' ? 'daily' : 'weekly'
         return `
       <url>
           <loc>${url}</loc>
           <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
           <changefreq>${changefreq}</changefreq>
           <priority>${priority}</priority>
       </url>
     `
       })
       .join('')}
   </urlset>
 `
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  // Generate the XML sitemap with the blog data
  const sitemap = generateSiteMap()

  res.setHeader('Content-Type', 'text/xml')
  // Write the XML to the response
  res.write(sitemap)
  res.end()

  return {
    props: {},
  }
}

export default SiteMap
