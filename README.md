# SL MANGO EXOTIC TOURS
### Complete Premium Sri Lanka Tourism Website — Production Guide

A handcrafted, editorial-grade, multi-page tourism website built for **SL Mango Exotic Tours**, designed for international tourists, couples, honeymooners, families, and adventurous independent travellers visiting Sri Lanka.

---

## 01 — PROJECT ARCHITECTURE

```
sl-mango-exotic-tours/
├── index.html                  # Cinematic Editorial Homepage
├── tours.html                  # Tours Catalog with Category Filters (8 Packages)
├── tour-details.html           # Dedicated Long-Form Tour Itinerary Engine
├── services.html               # Services & Private Chauffeur Fleet Catalogue
├── gallery.html                # Curated Authentic Sri Lanka Gallery with Lightbox
├── about.html                  # About Company, Philosophy & Responsible Tourism
├── contact.html                # Trip Enquiry Form with Tour & Vehicle Prefills
├── privacy-policy.html         # Transparent Privacy Policy
├── terms.html                  # Booking Parameters & Guidelines
├── 404.html                    # Custom 404 Error Page
├── favicon.svg                 # Custom Ceylon Mango & Ocean Crest SVG Emblem
├── robots.txt                  # Search Engine Crawling Directives
├── sitemap.xml                 # XML Sitemap with Canonical URLs
├── SECURITY.md                 # Security Audit & Content Integrity Policy
├── README.md                   # This Comprehensive Documentation
├── assets/
│   ├── css/
│   │   ├── styles.css          # Master Stylesheet (Ocean Luxury Palette & Lexend/Ubuntu)
│   │   └── responsive.css      # Fluid Breakpoints, Mobile Navigation Drawer, Print Rules
│   ├── js/
│   │   ├── site-config.js      # Global Business Info, Phone, WhatsApp, and Email
│   │   ├── destinations-data.js# Researched Sri Lankan Destination Knowledge Base
│   │   ├── gallery-data.js     # Curated Photograph Collection with Licenses
│   │   ├── tours-data.js       # Master Itineraries for all 8 Tours (Day-by-Day Data)
│   │   ├── app.js              # Sticky Header, Mobile Drawer, Shared Gallery Previews
│   │   ├── animations.js       # GSAP & ScrollTrigger Orchestration
│   │   ├── tours.js            # Tour Catalog Filtering & Tour Details Hydration
│   │   ├── gallery.js          # Gallery Filtering & Accessible Lightbox Engine
│   │   └── forms.js            # Contact Form Validation & WhatsApp/Email Handoff
│   └── images/
│       ├── hero/               # High-Resolution Curated Hero Backgrounds
│       ├── destinations/       # Verified Sri Lankan Destination Photography
│       ├── gallery/            # Thematic High-Resolution Photo Assets
│       ├── vehicles/           # Private Fleet Imagery (Sedan, KDH Van, Coaster)
│       └── tours/              # Organized Tour Assets (classic-sri-lanka, etc.)
└── data/
    ├── tours.json              # Pure JSON Export of All 8 Tour Packages
    ├── destinations.json       # Pure JSON Export of Destinations
    ├── gallery.json            # Pure JSON Export of Gallery Collection
    └── licenses.json           # Complete Photographic Licensing & Attribution Records
```

---

## 02 — MANDATORY TYPOGRAPHY & COLOUR SYSTEM

### Typography
- **Headings, Navigation & Buttons:** `Lexend` (Weights: 400, 500, 600)
- **Body, Itineraries, Captions & Forms:** `Ubuntu` (Weights: 300, 400, 500)
- Linked directly from Google Fonts with preconnect directives.

### Ocean Luxury Colour Palette
- **Cloud White:** `#F5FAFC` (Clean background surfaces)
- **Ocean Navy:** `#123B52` (Primary brand accent, cards, headings)
- **Ice Blue:** `#D9EFF8` (Subtle tinting and highlights)
- **Ceylon Gold:** `#C8A46A` (Refined accents, badges, call-to-actions)
- **Jungle Green:** `#315C49` (Nature badges, checkmarks)
- **Mist Grey:** `#E8F0F3` (Divider lines and neutral card backgrounds)
- **Deep Navy:** `#0B2B3B` (Footer and hero contrast)
- **Main Text:** `#234452` (High-contrast, readable body copy)

---

## 03 — LOCAL PREVIEW INSTRUCTIONS

Because the site is 100% static (HTML, CSS, Vanilla JS), you can test it locally in several ways:

### Option A: Using Python (Recommended)
Open a terminal in the project folder and run:
```bash
python -m http.server 8000
```
Then navigate your browser to: `http://localhost:8000`

### Option B: Using Node.js `npx serve`
```bash
npx serve .
```

### Option C: Direct Browser Opening
You can double-click `index.html` directly to open it in any modern web browser (Chrome, Firefox, Safari, Edge).

---

## 04 — EDITING BUSINESS DETAILS

All core business contact details are centralized in **one single file**: `assets/js/site-config.js`.

To update your WhatsApp number, phone, email, or office address:
1. Open `assets/js/site-config.js` in any text editor.
2. Edit the following values:
   ```javascript
   const SITE_CONFIG = {
     contact: {
       phoneDisplay: "+94 77 982 4310",        // Display format
       phoneTel: "+94779824310",                // 'tel:' format without spaces
       whatsappNumber: "94779824310",          // WhatsApp format: Country code + number (no '+' sign)
       email: "explore@slmangoexotictours.com", // Your company email address
       address: "No. 48/2, Temple Road, Colombo & Kandy, Sri Lanka",
       operatingHours: "07:00 – 22:00 Sri Lanka Time (UTC +05:30) • 7 Days a Week"
     }
   };
   ```
3. Save the file. The changes will instantly reflect across headers, footers, enquiry handoffs, and sidebar booking boxes across all pages.

---

## 05 — MANAGING TOUR ITINERARIES & DAY GALLERIES

Tour content is cleanly decoupled from HTML markup in `assets/js/tours-data.js`.

### How to Add an Image to a Specific Day
Inside `assets/js/tours-data.js`, find the tour you wish to edit and locate the relevant day object:
```javascript
{
  day: 1,
  title: "Arrival in Sri Lanka — Coastal Negombo Lagoon",
  destination: "Negombo",
  introduction: "...",
  // ADD YOUR DAY GALLERY PHOTOS HERE:
  dayGallery: [
    {
      src: "assets/images/gallery/negombo-lagoon.jpg",
      alt: "Negombo lagoon at golden hour",
      caption: "Golden hour reflection over the historic fishing canals"
    },
    {
      src: "assets/images/destinations/mirissa.jpg",
      alt: "Tropical coconut palms",
      caption: "Gentle ocean breezes to begin your journey"
    }
  ]
}
```

### How to Attach Photos to Individual Activities
Inside each day's `activities` array, each activity has its own `photos` list:
```javascript
activities: [
  {
    title: "Negombo Lagoon & Catamaran Sunset Walk",
    description: "In the late afternoon, take an unhurried stroll...",
    timing: "Late Afternoon",
    photos: [
      {
        src: "assets/images/gallery/negombo-lagoon.jpg",
        alt: "Artisanal wooden catamarans",
        caption: "Artisanal wooden catamarans resting on the Negombo shoreline"
      }
    ]
  }
]
```

### How to Add or Reorder Days
Simply duplicate or reorder the day objects inside the `days: [...]` array. The template automatically numbers and formats nodes sequentially (`DAY 01`, `DAY 02`, etc.) without altering the HTML structure.

---

## 06 — UPDATING THE FULL PHOTO GALLERY

To add new photos to `gallery.html`:
1. Place your optimized JPG or WebP image inside `assets/images/gallery/`.
2. Open `assets/js/gallery-data.js`.
3. Add a new object to the `GALLERY_DATA` array:
   ```javascript
   {
     id: "gal-26",
     title: "Pigeon Island Coral Sanctuary",
     category: "coastlines", // 'highlands' | 'coastlines' | 'heritage' | 'wildlife' | 'experiences'
     categoryLabel: "Coastlines",
     location: "Nilaveli, Trincomalee",
     image: "assets/images/gallery/pigeon-island.jpg",
     thumb: "assets/images/gallery/pigeon-island.jpg",
     alt: "Turquoise water and coral reef at Pigeon Island",
     caption: "Vibrant coral reef sanctuary off the powdery white shores of Nilaveli.",
     featured: false
   }
   ```
4. Save the file. The new photo will automatically appear under the designated filter tab and open in the accessible fullscreen Lightbox modal.

---

## 07 — HOSTINGER DEPLOYMENT STEP-BY-STEP

Deploying this static website to Hostinger takes under 3 minutes:

1. **Log in to Hostinger hPanel:** Navigate to `hpanel.hostinger.com`.
2. **Access File Manager:** Select your hosting plan and domain, then click **File Manager** (or connect via FTP/SFTP using FileZilla).
3. **Navigate to `public_html`:** Open the root `public_html` directory of your website. Ensure it is empty (or remove the default `default.php` file).
4. **Upload Files:** Upload the contents of this project (or upload `sl-mango-exotic-tours.zip` and use the **Extract** button directly in Hostinger File Manager).
5. **Verify Root Directory:** Ensure `index.html` is located directly in `public_html/index.html` (not nested inside a subfolder like `public_html/sl-mango/...`).
6. **Enable Free SSL / HTTPS:** In hPanel, go to **Security** > **SSL** and click **Install SSL** (Let's Encrypt). Toggle **Force HTTPS** on.
7. **Test Live Site:** Visit `https://yourdomain.com/` in your browser.
   - Verify all 8 tour package detail pages open correctly via `tour-details.html?tour=...`
   - Test the mobile navigation drawer.
   - Test the image Lightbox.
   - Test submitting the enquiry form to verify WhatsApp / Email handoff.

---

## 08 — PHOTOGRAPHIC LICENSING & ATTRIBUTION

All included images depict genuine Sri Lankan landmarks and are legally sourced under permissive Creative Commons licenses from Wikimedia Commons contributors and verified open repositories.
Detailed attributions including photographer credits, Creative Commons license versions (CC BY-SA 4.0 / CC BY 2.0), and source URLs are archived in `data/licenses.json`.

---

## 09 — BROWSER COMPATIBILITY & PERFORMANCE

- **Supported Browsers:** Google Chrome, Mozilla Firefox, Apple Safari, Microsoft Edge, Opera, and mobile iOS/Android web views.
- **Accessibility:** Meets WCAG 2.2 AA guidelines with semantic landmarks, ARIA labels, focus states, and `@media (prefers-reduced-motion)`.
- **Print Friendly:** Dedicated print stylesheet (`@media print`) formats tour itineraries cleanly on paper without headers, dark backgrounds, or buttons.
