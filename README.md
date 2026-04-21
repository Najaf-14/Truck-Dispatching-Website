# Loadify - Truck Dispatching Website

## 🚛 Overview
Loadify is a modern, responsive website for a truck dispatching service. It helps connect truck drivers/owner-operators with high-paying loads, offering 24/7 dispatch support, route optimization, paperwork handling, and more.

**Status:** All links, buttons, and functionality verified working correctly (static + JS analysis). Minor UX suggestion: Remove `target="_blank"` from internal nav links.

## 📁 File Structure
```
d:/Projects/Truck Dispatching/
├── index.html          # Home page (about, services preview, testimonials, FAQ)
├── contact.html        # Contact form + info + map
├── driver.html         # Driver registration form w/ validation
├── pricing.html        # Pricing plans
├── services.html       # Full services page
├── README.md           # This file
├── assests/            # Images, icons, logo
│   └── images/
│       ├── Truck1.jpg
│       └── Truck2.jpg
├── style/              # CSS files (modular by page/section)
│   ├── nav.css
│   ├── footer.css
│   ├── contact.css
│   ├── driver.css
│   ├── pricing.css
│   ├── servicesOwn.css
│   └── ... (9 total)
└── javascript/         # Page-specific JS
    ├── about.js        # About section toggle
    ├── driver.js       # Registration form + terms dropdown
    └── faq.js          # FAQ accordion
```

## ⚡ Quick Start
1. **Live Preview:** Double-click `index.html` or run:
   ```
   start index.html
   ```
2. **Development Server:** (Recommended for full functionality)
   ```
   cd "d:/Projects/Truck Dispatching"
   python -m http.server 8000
   ```
   Open http://localhost:8000

3. **VSCode Live Server:** Right-click index.html → "Open with Live Server"

## 🌟 Features
- **Responsive Design:** Mobile-first, works on all devices.
- **Interactive Elements:**
  - Mobile nav toggle (#menu-toggle)
  - FAQ accordion (faq.js)
  - "Learn More" toggle (about.js)
  - Forms w/ validation (driver.js, contact inline)
- **Pages & Navigation:** Fully linked, all buttons work.
- **Sections:** Parallax hero, stats, testimonials, pricing cards, contact form w/ Google Maps embed.

## ✅ Verified Working
- **Links:** All internal (nav, CTAs, footer) point to correct files.
- **Buttons:** JS handlers functional (toggles, forms).
- **CSS/JS:** All loads correctly.
- **Images:** assests/ paths match folder.

**Suggestion:** Remove `target="_blank"` from internal links (e.g., index.html nav to services.html) for better UX.

## 📱 Screenshots / Demo
Serve locally and navigate all pages/forms.

## 🔧 Tech Stack
- HTML5, CSS3 (modular files)
- Vanilla JavaScript (no frameworks)
- Responsive (flex/grid)

## 🚀 Deployment
Static site - upload all files to any host (Netlify, Vercel, GitHub Pages).

## 📞 Contact
info@loadify.com | +92 (123) 456-7890

Built with ❤️ for Pakistani truckers.

