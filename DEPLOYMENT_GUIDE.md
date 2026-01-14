# Turnberry Place Las Vegas - Deployment Guide

## 🚀 Quick Deployment Checklist

### Pre-Deployment Verification

- [x] Build successful (`npm run build` or `vercel build`)
- [x] No TypeScript errors
- [x] No linter errors
- [x] All images optimized
- [x] SEO metadata complete
- [x] Forms functional
- [x] Responsive design verified
- [x] Hero slideshow working correctly
- [x] All 7 hero photos loading properly

---

## 📦 Vercel Deployment

### Option 1: Automatic Deployment (Recommended)
1. Push to GitHub: `git push origin main`
2. Vercel automatically deploys from `main` branch
3. Monitor deployment in Vercel dashboard

### Option 2: Manual Deployment
```bash
# Install Vercel CLI (if not already installed)
npm i -g vercel

# Deploy to production
vercel --prod
```

### Option 3: Using npm scripts
```bash
# Build with Vercel
npm run vbuild

# Deploy
npm run deploy
```

---

## 🔧 Environment Variables

### Required for Production
```env
NEXT_PUBLIC_BASE_URL=https://www.turnberryplaceforsale.com
```

### Optional (for Drupal integration)
```env
NEXT_PUBLIC_DRUPAL_BASE_URL=your-drupal-url
DRUPAL_CLIENT_ID=your-client-id
DRUPAL_CLIENT_SECRET=your-client-secret
DRUPAL_SITE_ID=your-site-id
```

### Google Analytics (Already configured)
- GA4: `G-RZ48JCVXWJ`
- Universal Analytics: `UA-46249003-1`
- Google Ads: `AW-859648231`

---

## 📊 Post-Deployment Tasks

### 1. Google Search Console
- [ ] Submit sitemap: `https://www.turnberryplaceforsale.com/sitemap.xml`
- [ ] Request indexing for homepage
- [ ] Monitor crawl errors
- [ ] Check mobile usability

### 2. Performance Monitoring
- [ ] Run Lighthouse audit
- [ ] Check Core Web Vitals
- [ ] Monitor page load times
- [ ] Verify image optimization

### 3. Form Testing
- [ ] Test lead capture form submission
- [ ] Verify email notifications (if configured)
- [ ] Check form validation
- [ ] Test on mobile devices

### 4. SEO Verification
- [ ] Verify meta tags in page source
- [ ] Check Open Graph tags with Facebook Debugger
- [ ] Test Twitter Card preview
- [ ] Verify JSON-LD schema markup

### 5. Analytics Setup
- [ ] Verify Google Analytics tracking
- [ ] Set up conversion goals
- [ ] Configure event tracking
- [ ] Test CTA click tracking

---

## 🔍 Testing Checklist

### Functionality
- [x] Hero slideshow rotates correctly
- [x] All 7 photos display properly
- [x] Photos 2-3 no longer appear black
- [x] Photo 6 has correct brightness
- [x] Navigation menu works on mobile
- [x] Forms submit successfully
- [x] Floor plan gallery filters work
- [x] Lightbox opens/closes correctly

### Responsive Design
- [x] Mobile menu functions
- [x] Images scale properly
- [x] Text remains readable
- [x] Buttons are touch-friendly
- [x] Forms work on mobile

### Performance
- [x] Images lazy load
- [x] Hero images preload
- [x] Fonts load efficiently
- [x] No console errors
- [x] Build completes successfully

---

## 🐛 Troubleshooting

### Build Fails
```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

### Images Not Loading
- Verify image paths in `public/images/turnberry/`
- Check Next.js image configuration
- Verify remote patterns in `next.config.js`

### Hero Images Appear Black
- Check image file existence
- Verify image paths are correct
- Check browser console for 404 errors
- Ensure images are in `public/images/turnberry/`

### Forms Not Submitting
- Check API endpoint: `/api/leads/submit`
- Verify form validation
- Check browser console for errors
- Test with network tab open

---

## 📈 Performance Optimization

### Already Implemented
- ✅ Image preloading for hero slideshow
- ✅ Lazy loading for below-fold images
- ✅ Code splitting
- ✅ Font optimization
- ✅ CSS/JS minification
- ✅ Individual brightness filters per photo

### Future Optimizations
- [ ] Add service worker for offline support
- [ ] Implement image CDN
- [ ] Add caching headers
- [ ] Optimize bundle size further

---

## 🔐 Security Checklist

- [x] No sensitive data in client-side code
- [x] API routes validate input
- [x] Forms use HTTPS
- [x] No hardcoded credentials
- [x] Environment variables properly configured

---

## 📞 Support & Maintenance

### Contact Information
- **Agent:** Dr. Jan Duffy, REALTOR
- **Phone:** (702) 500-1971
- **License:** S.0197614.LLC

### Regular Maintenance
- **Weekly:** Monitor analytics, check form submissions
- **Monthly:** Update available listings count, refresh photos
- **Quarterly:** SEO audit, performance review

---

## ✅ Deployment Sign-Off

**Status:** ✅ Ready for Production  
**Build:** ✅ Successful  
**Tests:** ✅ Passed  
**Documentation:** ✅ Complete

**Deploy with confidence! 🚀**
