# ORBITEGO Website - Quick Start Guide

## 🚀 Getting Started Quickly

### Option 1: Open Directly (Simplest)
1. Double-click `index.html` to open in your default browser
2. Navigate through the site using the menu
3. Test all features on your device

### Option 2: Use a Local Server (Recommended for Development)

#### Windows
```bash
# Using Python (comes with Windows 10+)
python -m http.server 8000
# OR
py -m http.server 8000

# Then open: http://localhost:8000
```

#### Mac/Linux
```bash
# Using Python 3
python3 -m http.server 8000

# Using Node.js
npx http-server

# Then open: http://localhost:8000
```

---

## 📋 Customization Checklist

### Step 1: Basic Information
- [ ] Replace "ORBITEGO" with your agency name
- [ ] Update email: hello@orbitego.com → your@email.com
- [ ] Update phone: (555) 123-4567 → your number
- [ ] Update office addresses
- [ ] Update social media links

**Files to edit:** All `.html` files, particularly in footer and contact page

### Step 2: Company Content
- [ ] Write your own "About Us" content
- [ ] Update team expertise descriptions
- [ ] Replace mission/vision/values
- [ ] Update corporate standards info

**Files to edit:** `about.html`

### Step 3: Services
- [ ] List your actual services
- [ ] Update service descriptions
- [ ] Modify capability tiers
- [ ] Add your specific expertise

**Files to edit:** `services.html`

### Step 4: Portfolio
- [ ] Replace case studies with your projects
- [ ] Update metrics and results
- [ ] Add challenge/solution descriptions
- [ ] Customize success metrics

**Files to edit:** `portfolio.html`

### Step 5: Resources
- [ ] Add your downloadable resources
- [ ] Update resource titles and descriptions
- [ ] Link to actual PDF/Excel files
- [ ] Update file sizes and availability

**Files to edit:** `library.html`, add files to `assets/downloads/`

### Step 6: Branding
- [ ] Add your logo image
- [ ] Update color scheme (optional)
- [ ] Add your company images
- [ ] Update favicon

**Files to edit:** `css/styles.css` for colors, all `.html` files for images

---

## 🎨 Color Customization

1. Open `css/styles.css`
2. Find the `:root` section at the top
3. Update these color variables:

```css
:root {
    --primary-color: #0052CC;      /* Main brand color - blue buttons */
    --secondary-color: #FF6B35;    /* Secondary accent - orange */
    --accent-color: #4ECDC4;       /* Accent color - teal */
    --dark-bg: #0F1419;            /* Dark background */
    --light-bg: #F8FAFB;           /* Light background */
    --text-dark: #1A202C;          /* Dark text */
    --text-light: #718096;         /* Light gray text */
    --border-color: #E2E8F0;       /* Border color */
}
```

**Color Picker:** Use [Color.adobe.com](https://color.adobe.com) to find complementary colors

---

## 🖼️ Adding Images

### Logo
1. Create a `logo.png` file (recommended size: 200x60px)
2. Save to `assets/images/logo.png`
3. Update the nav in HTML files:
```html
<div class="nav-logo">
    <a href="index.html">
        <img src="assets/images/logo.png" alt="ORBITEGO" style="height: 40px;">
    </a>
</div>
```

### Hero Images
1. Replace emoji placeholders with actual images
2. Add images to `assets/images/`
3. Update HTML:
```html
<!-- Replace this: -->
<div class="placeholder-image">📊</div>

<!-- With this: -->
<img src="assets/images/your-image.jpg" alt="Description" class="hero-image">
```

---

## 📧 Form Setup

### Option A: Email Service (Easiest)
Use services like Formspree or Email.js that require minimal setup:

1. Sign up at [Formspree.io](https://formspree.io)
2. Create a form and get your form ID
3. Update the form tag:
```html
<form id="contactForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### Option B: Backend API
Create a backend endpoint and modify `js/script.js`:

```javascript
function handleFormSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    
    fetch('https://your-api.com/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(Object.fromEntries(formData))
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            showFormMessage('Thank you! We\'ll contact you soon.', 'success');
            event.target.reset();
        } else {
            showFormMessage('Error: ' + data.message, 'error');
        }
    })
    .catch(error => showFormMessage('Error: ' + error.message, 'error'));
}
```

---

## 🌐 Deploying Your Website

### Free Options

#### Netlify (Recommended)
1. Go to [Netlify.com](https://netlify.com)
2. Sign up with GitHub
3. Drag and drop your folder
4. Done! Your site is live

#### GitHub Pages
1. Create a GitHub repository
2. Push your files
3. Enable Pages in repository settings
4. Your site appears at `username.github.io`

#### Vercel
1. Go to [Vercel.com](https://vercel.com)
2. Connect your Git repository
3. Deploy automatically

### Paid Hosting
- **GoDaddy** - $2-10/month
- **Namecheap** - $3-8/month
- **Bluehost** - $2.95/month (WordPress-friendly)
- **AWS** - Pay-as-you-go (free tier available)

---

## 🔍 SEO Optimization Quick Guide

### Add Meta Tags
Update each HTML file's `<head>`:
```html
<meta name="description" content="Your unique description for search engines">
<meta name="keywords" content="digital marketing, web design, SEO">
<meta name="author" content="Your Agency Name">
```

### Add Google Analytics
Insert before closing `</head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Create Sitemap
Use [XML-sitemaps.com](https://www.xml-sitemaps.com) to auto-generate `sitemap.xml`

### Submit to Search Engines
- Google Search Console: [Google.com/webmasters](https://search.google.com/search-console)
- Bing Webmaster Tools: [Bing.com/webmasters](https://www.bing.com/webmasters)

---

## 🧪 Testing Checklist

### Desktop Testing
- [ ] Chrome - Latest version
- [ ] Firefox - Latest version
- [ ] Safari - Latest version
- [ ] Edge - Latest version

### Mobile Testing
- [ ] iPhone (Safari)
- [ ] Android (Chrome)
- [ ] iPad (Safari)
- [ ] Small phone (375px width)

### Feature Testing
- [ ] All links work
- [ ] Navigation menu opens/closes on mobile
- [ ] Forms submit correctly
- [ ] Service toggles open/close
- [ ] Images load properly
- [ ] No JavaScript errors in console
- [ ] Page loads quickly (under 3 seconds)

### Accessibility Testing
- [ ] Can tab through all interactive elements
- [ ] Proper heading hierarchy (H1, H2, H3, etc.)
- [ ] Sufficient color contrast
- [ ] Keyboard navigation works

---

## 📞 Support Resources

### HTML Help
- [MDN HTML Docs](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [W3Schools HTML Tutorial](https://www.w3schools.com/html/)

### CSS Help
- [MDN CSS Docs](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [W3Schools CSS Tutorial](https://www.w3schools.com/css/)

### JavaScript Help
- [MDN JavaScript Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [W3Schools JavaScript Tutorial](https://www.w3schools.com/js/)

### Design Inspiration
- [Dribbble.com](https://dribbble.com)
- [Behance.net](https://www.behance.net)
- [LandingFolio.com](https://www.landingfolio.com)

---

## 🐛 Common Issues & Fixes

### "File not found" error
- Check file paths are relative to current directory
- Use forward slashes: `assets/images/image.jpg` (not backslashes)

### Styling looks broken on mobile
- Check viewport meta tag in `<head>`
- Clear browser cache
- Test in different browser

### Form doesn't submit
- Check form endpoint is correct
- Verify form fields have `name` attributes
- Check browser console for JavaScript errors

### Images don't show
- Verify image file exists in folder
- Check file path spelling
- Ensure image format is supported (jpg, png, webp, svg)

---

## 🎯 Next: Production Checklist

Before going live:

- [ ] All placeholder content replaced with real content
- [ ] All images added and optimized
- [ ] Form submission configured
- [ ] Analytics installed
- [ ] SSL certificate enabled (HTTPS)
- [ ] Performance optimized (images compressed)
- [ ] Mobile testing completed
- [ ] All links tested
- [ ] Sitemap created and submitted
- [ ] Google Business Profile created
- [ ] Meta descriptions added to all pages
- [ ] Backup created before deployment

---

## 📱 File Sizes Reference

Keep your website fast:
- **Images**: Keep under 500KB per image
- **CSS**: Should be under 200KB
- **JavaScript**: Should be under 300KB
- **Total page size**: Target under 3MB

Use tools like [TinyPNG.com](https://tinypng.com) to compress images.

---

## 🚀 You're Ready!

Your professional digital marketing agency website is ready to customize and deploy. Follow the checklist above, and you'll have a stunning online presence in no time.

Good luck! 🎉
