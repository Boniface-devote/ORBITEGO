# ORBITEGO Website

A professional, modern HTML/CSS/JavaScript website for ORBITEGO - East Africa's premier strategic branding, digital cultivation, and marketing architecture agency.

## 📋 Project Overview

ORBITEGO is a full-service marketing and branding agency headquartered in Kampala, Uganda, with operations across Kenya, Tanzania, and Rwanda. This website showcases the agency's:

- **Core Services**: Brand Architecture, Social Media Management, Performance Marketing, Media Production, and Post-Production
- **Expertise**: Real Estate, Corporate/Financial, Hospitality/Luxury, and Tech Startups
- **Portfolio**: Case studies and successful brand transformations
- **Contact**: Direct engagement channels and regional office locations

## 🏗️ Project Structure

```
ORBITEGO/
├── index.html                 # Home page
├── pages/
│   ├── about.html            # About Us page
│   ├── services.html         # Services page (detailed)
│   ├── portfolio.html        # Portfolio & case studies
│   └── contact.html          # Contact & inquiry form
├── assets/
│   ├── css/
│   │   └── style.css         # Main stylesheet (responsive design)
│   ├── js/
│   │   └── main.js           # Navigation & form handling
│   └── images/               # Image placeholders (to be replaced)
├── .github/
│   └── copilot-instructions.md  # Project documentation
└── README.md                 # This file
```

## 🎨 Design Features

- **Modern, Professional Aesthetic**: Dark theme with cyan (#00d4ff) accent colors
- **Responsive Design**: Mobile-first approach, works on all devices
- **Smooth Interactions**: Hover effects, smooth scrolling, fade-in animations
- **Fast Performance**: Vanilla HTML/CSS/JS (no heavy dependencies)
- **Accessibility**: Semantic HTML structure with proper navigation

## 📄 Pages

### 1. **Home (index.html)**
   - Hero section with value proposition
   - Services overview (6 core pillars)
   - Statistics showcase
   - Call-to-action buttons
   - Footer with contact info

### 2. **About Us (pages/about.html)**
   - Company story and heritage
   - Vision, Mission, and Core Values
   - Operational scope (4 countries)
   - Industry specializations

### 3. **Services (pages/services.html)**
   - Detailed breakdown of 5 core service pillars
   - Extended toolkit services
   - Brand Map Framework (4-stage methodology)
   - Service-specific features

### 4. **Portfolio (pages/portfolio.html)**
   - 9 portfolio items across 5 categories
   - Interactive filtering system
   - Project case studies
   - Results and impact metrics

### 5. **Contact (pages/contact.html)**
   - Contact form with validation
   - Office locations and direct contact
   - FAQ section
   - Engagement expectations

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No server-side dependencies required

### Local Development

1. **Clone or download the project**
   ```bash
   git clone <repository-url>
   cd ORBITEGO
   ```

2. **Open in browser**
   - Double-click `index.html` to open directly, or
   - Use a local server (recommended for best experience):
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Or using Node.js (if installed)
     npx http-server
     ```
   - Visit `http://localhost:8000` in your browser

3. **Customize content**
   - Replace placeholder text with your company information
   - Update images in `assets/images/`
   - Modify colors in `assets/css/style.css` (CSS variables at the top)
   - Update contact information in footer sections

## 🎯 Key Features

### Navigation
- Fixed header with smooth scroll behavior
- Mobile hamburger menu
- Active page highlighting
- Responsive navigation layout

### Interactive Elements
- Service card hover effects with elevation
- Portfolio filtering system (by category)
- Form validation and submission handling
- Scroll-triggered animations
- Smooth anchor link navigation

### Performance
- Optimized CSS with mobile-first design
- Minimal JavaScript (vanilla, no frameworks)
- Fast load times
- SEO-friendly structure

## 🛠️ Customization Guide

### Colors
Edit the CSS variables at the top of `assets/css/style.css`:
```css
:root {
  --primary-color: #0f1419;      /* Dark background */
  --accent-color: #00d4ff;       /* Cyan highlight */
  --text-light: #e8eef5;         /* Light text */
  --text-muted: #a8b4c4;         /* Muted text */
  /* ... more colors */
}
```

### Contact Information
Update these sections in all pages:
1. Footer section (all pages)
2. Contact page hero section
3. Contact page sidebar information

### Portfolio Items
Edit `pages/portfolio.html` to:
- Replace placeholder categories
- Add real case study descriptions
- Include actual project images
- Update results and metrics

### Services
Customize service descriptions in:
1. `index.html` - Services overview grid
2. `pages/services.html` - Detailed service pages

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

The website is fully responsive and tested across all breakpoints.

## 📧 Contact Form

The contact form in `pages/contact.html` currently displays a success message. For production use, integrate with:
- Email service (SendGrid, Mailgun, etc.)
- Form backend (Node.js, Python, PHP, etc.)
- CMS platform (WordPress, Webflow, etc.)

Example integration point in `assets/js/main.js`:
```javascript
// Modify handleFormSubmit() function to send data to your backend
const response = await fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data)
});
```

## 🌐 Deployment Options

### Option 1: GitHub Pages
```bash
# Commit and push to GitHub
# Go to repository Settings > Pages
# Select main branch as source
```

### Option 2: Netlify
```bash
# Drag and drop the project folder to Netlify.com
# Or connect GitHub repository for auto-deployment
```

### Option 3: Traditional Hosting
- Upload all files to your web host via FTP
- Ensure all relative paths are correct
- Test all links and forms

### Option 4: Firebase Hosting
```bash
npm install -g firebase-tools
firebase init
firebase deploy
```

## 📊 Analytics Integration

Add Google Analytics by inserting this in the `<head>` section of each HTML file:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🔐 Security Considerations

- All links use HTTPS
- Form data should be validated server-side
- Contact form endpoints should implement rate limiting
- Consider CSRF protection for form submissions

## 🐛 Browser Compatibility

- ✅ Chrome/Chromium (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📈 SEO Optimization

- Semantic HTML structure
- Meta descriptions on all pages
- Proper heading hierarchy (H1, H2, H3)
- Mobile-responsive design
- Fast page load times
- Schema markup ready (ready for structured data)

## 🎓 Next Steps

1. **Add Real Content**
   - Replace placeholder case studies with actual projects
   - Upload professional photography
   - Add team member profiles

2. **Enhance Functionality**
   - Integrate email service for contact form
   - Add blog section
   - Implement client testimonials

3. **Advanced Features**
   - Add animations library (AOS, Framer Motion)
   - Integrate CMS (Contentful, Strapi)
   - Add e-commerce capabilities

4. **Marketing**
   - Set up Google Analytics
   - Submit sitemap to Google Search Console
   - Implement basic SEO improvements

## 📝 License

This website template is created for ORBITEGO. All content related to ORBITEGO's branding, services, and methodology is proprietary.

## 🤝 Support

For questions or modifications, contact ORBITEGO:
- **Phone**: +256 706 811 906
- **Email**: orbitegoeastafrica@gmail.com
- **Office**: Liberty Road, Sonde, Kampala, Uganda

---

**Version**: 1.0  
**Last Updated**: 2024  
**Status**: Production Ready
