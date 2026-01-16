# Pre-Launch SEO Checklist

## ✅ Schema Validation

### Google Rich Results Test
- [ ] Test homepage: `https://www.turnberryplaceforsale.com/`
- [ ] Test towers page: `https://www.turnberryplaceforsale.com/towers`
- [ ] Test available condos: `https://www.turnberryplaceforsale.com/available-condos`
- [ ] Test stirling club: `https://www.turnberryplaceforsale.com/stirling-club`
- [ ] Test agent page: `https://www.turnberryplaceforsale.com/agent`
- [ ] Verify FAQ rich results appear
- [ ] Verify RealEstateListing schema detected
- [ ] Verify Place schema detected
- [ ] Check for any validation errors

### Schema.org Validator
- [ ] Validate homepage schema at validator.schema.org
- [ ] Validate all page schemas
- [ ] Check for missing required fields
- [ ] Verify @id references are correct

### Google Search Console
- [ ] Submit sitemap: `https://www.turnberryplaceforsale.com/sitemap.xml`
- [ ] Submit image sitemap: `https://www.turnberryplaceforsale.com/sitemap-images.xml`
- [ ] Check for structured data errors
- [ ] Monitor coverage report
- [ ] Review enhancement reports

---

## ✅ Meta Tags

### Title Tags
- [ ] Every page has unique title (50-60 characters)
- [ ] Primary keyword in first 60 characters
- [ ] Location included (Las Vegas)
- [ ] No duplicate titles
- [ ] Brand name included appropriately

### Meta Descriptions
- [ ] Every page has unique description (150-160 characters)
- [ ] Includes call-to-action
- [ ] Phone number where relevant
- [ ] Primary keyword included naturally
- [ ] Compelling and click-worthy

### Canonical URLs
- [ ] All pages have canonical URL
- [ ] Canonical uses https://www. (not http:// or non-www)
- [ ] No trailing slashes (except root)
- [ ] Canonical matches actual URL
- [ ] No self-referencing canonicals

### Open Graph Tags
- [ ] og:title present on all pages
- [ ] og:description present on all pages
- [ ] og:image present (1200x630 dimensions)
- [ ] og:url present and correct
- [ ] og:type set to "website"
- [ ] og:site_name present
- [ ] Test with Facebook Debugger

### Twitter Card Tags
- [ ] twitter:card set to "summary_large_image"
- [ ] twitter:title present
- [ ] twitter:description present
- [ ] twitter:image present
- [ ] Test with Twitter Card Validator

### Hreflang Tags
- [ ] hreflang="en" on all pages
- [ ] hreflang="es" (Google Translate) on all pages
- [ ] hreflang="x-default" set
- [ ] All hreflang URLs are absolute

---

## ✅ Technical SEO

### robots.txt
- [ ] Accessible at `/robots.txt`
- [ ] Allows all search engines
- [ ] Blocks /api/, /_next/, /admin/
- [ ] Sitemap URLs included
- [ ] Test with Google Search Console

### Sitemap
- [ ] Accessible at `/sitemap.xml`
- [ ] Valid XML format
- [ ] All pages included
- [ ] Priorities set correctly
- [ ] Change frequencies appropriate
- [ ] Lastmod dates present
- [ ] Submitted to Google Search Console

### Image Sitemap
- [ ] Accessible at `/sitemap-images.xml`
- [ ] Key images included
- [ ] Captions and titles present
- [ ] Geo location tags where applicable
- [ ] Submitted to Google Search Console

### HTTPS
- [ ] All pages use HTTPS
- [ ] No mixed content warnings
- [ ] SSL certificate valid
- [ ] HTTP redirects to HTTPS

### Mobile Responsiveness
- [ ] Mobile-friendly test passes
- [ ] Viewport meta tag present
- [ ] Touch targets adequate size
- [ ] Text readable without zooming
- [ ] No horizontal scrolling

### Page Speed
- [ ] Lighthouse Performance score 90+
- [ ] First Contentful Paint < 1.8s
- [ ] Largest Contentful Paint < 2.5s
- [ ] Time to Interactive < 3.8s
- [ ] Total Blocking Time < 200ms
- [ ] Cumulative Layout Shift < 0.1

---

## ✅ Content Quality

### Heading Structure
- [ ] Single H1 per page
- [ ] H1 includes primary keyword
- [ ] Logical H2 hierarchy (3+ per page)
- [ ] H3s used appropriately
- [ ] No skipped heading levels
- [ ] Headings are descriptive

### Internal Linking
- [ ] Related pages component on all pages
- [ ] Contextual links in content
- [ ] Breadcrumbs on all pages
- [ ] Navigation menu functional
- [ ] Footer links working
- [ ] No broken internal links

### Images
- [ ] All images have alt text
- [ ] Alt text is descriptive
- [ ] Images optimized (WebP/AVIF)
- [ ] Proper image dimensions
- [ ] Lazy loading for below-fold images
- [ ] Priority for above-fold images

### Content
- [ ] 1500+ words on key pages
- [ ] Unique content on each page
- [ ] No duplicate content
- [ ] FAQ sections with schema
- [ ] Contact information consistent

---

## ✅ Core Web Vitals

### Largest Contentful Paint (LCP)
- [ ] LCP < 2.5 seconds
- [ ] Hero images use priority prop
- [ ] fetchpriority="high" on LCP images
- [ ] Images properly optimized
- [ ] Fonts preloaded

### First Input Delay (FID)
- [ ] FID < 100 milliseconds
- [ ] JavaScript optimized
- [ ] Third-party scripts deferred
- [ ] Code splitting implemented

### Cumulative Layout Shift (CLS)
- [ ] CLS < 0.1
- [ ] Images have explicit dimensions
- [ ] Aspect ratios defined
- [ ] No dynamic content insertion
- [ ] Fonts use font-display: swap

---

## ✅ Accessibility

### WCAG Compliance
- [ ] Color contrast meets AA standards
- [ ] Keyboard navigation works
- [ ] Screen reader compatible
- [ ] ARIA labels on interactive elements
- [ ] Focus states visible
- [ ] Alt text on all images

### Semantic HTML
- [ ] Proper heading hierarchy
- [ ] Semantic elements used (nav, main, article, etc.)
- [ ] Form labels present
- [ ] Links are descriptive

---

## ✅ Analytics & Tracking

### Google Analytics
- [ ] GA4 configured
- [ ] Universal Analytics configured (if needed)
- [ ] Events tracked correctly
- [ ] Conversion goals set
- [ ] Enhanced ecommerce (if applicable)

### Google Search Console
- [ ] Property verified
- [ ] Sitemap submitted
- [ ] Coverage report reviewed
- [ ] Performance report monitored
- [ ] Mobile usability checked

### Other Tracking
- [ ] Google Ads conversion tracking
- [ ] Facebook Pixel (if applicable)
- [ ] Other third-party tracking verified

---

## ✅ Security

### HTTPS
- [ ] SSL certificate valid
- [ ] All pages use HTTPS
- [ ] No mixed content
- [ ] HSTS header set (if applicable)

### Headers
- [ ] Security headers configured
- [ ] X-Frame-Options set
- [ ] X-Content-Type-Options set
- [ ] Referrer-Policy set

---

## ✅ Performance

### Lighthouse Scores
- [ ] Performance: 90+
- [ ] Accessibility: 90+
- [ ] Best Practices: 90+
- [ ] SEO: 90+

### Image Optimization
- [ ] Images use next/image
- [ ] WebP/AVIF formats used
- [ ] Proper sizing attributes
- [ ] Lazy loading implemented
- [ ] Blur placeholders for better UX

### Code Optimization
- [ ] JavaScript minified
- [ ] CSS minified
- [ ] Code splitting implemented
- [ ] Tree shaking enabled
- [ ] Unused code removed

### Caching
- [ ] Static assets cached
- [ ] CDN configured (if applicable)
- [ ] Browser caching headers set
- [ ] Service worker (if PWA)

---

## ✅ Local SEO

### NAP Consistency
- [ ] Name: Dr. Jan Duffy, REALTOR
- [ ] Address: 2827 Paradise Rd, Las Vegas, NV 89109
- [ ] Phone: (702) 500-1971
- [ ] Consistent across all pages
- [ ] Matches Google Business Profile

### Local Schema
- [ ] LocalBusiness schema present
- [ ] Address schema correct
- [ ] Geo coordinates included
- [ ] Area served defined

---

## ✅ Final Checks

### Pre-Launch
- [ ] All pages load without errors
- [ ] No console errors
- [ ] No 404 errors
- [ ] Forms functional
- [ ] All links work
- [ ] Mobile testing complete
- [ ] Cross-browser testing done

### Post-Launch
- [ ] Monitor Google Search Console
- [ ] Track rankings
- [ ] Monitor Core Web Vitals
- [ ] Review analytics
- [ ] Check for crawl errors
- [ ] Monitor page speed

---

## 📊 Testing Tools

### Schema Validation
- Google Rich Results Test: https://search.google.com/test/rich-results
- Schema.org Validator: https://validator.schema.org/

### Meta Tags
- Facebook Debugger: https://developers.facebook.com/tools/debug/
- Twitter Card Validator: https://cards-dev.twitter.com/validator
- LinkedIn Post Inspector: https://www.linkedin.com/post-inspector/

### Technical SEO
- Google Search Console: https://search.google.com/search-console
- PageSpeed Insights: https://pagespeed.web.dev/
- Mobile-Friendly Test: https://search.google.com/test/mobile-friendly

### Performance
- Lighthouse (Chrome DevTools)
- WebPageTest: https://www.webpagetest.org/
- GTmetrix: https://gtmetrix.com/

---

## ✅ Checklist Status

**Total Items:** 100+
**Critical Items:** 50+
**Optional Items:** 50+

**Complete this checklist before launch and periodically after launch.**

---

## 📝 Notes

- Test all pages, not just homepage
- Use incognito mode for testing
- Test on multiple devices
- Monitor Search Console regularly
- Update sitemap when adding new pages
- Review and update quarterly
