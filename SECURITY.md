# SL MANGO EXOTIC TOURS — SECURITY POLICY & AUDIT

## 01 — ARCHITECTURE OVERVIEW

The website for **SL Mango Exotic Tours** is built as a hardened, modern static frontend (HTML5, CSS3, Vanilla ES6 JavaScript). It does not require or execute server-side Node.js, PHP execution, Python runtime, or a SQL/NoSQL database on the public hosting tier.

This static design significantly reduces the common attack surfaces associated with content management systems (such as WordPress, Joomla, or custom PHP backends):
- **Zero SQL Injection Risk:** No database queries are performed by the public site.
- **Zero Remote Code Execution (RCE) via Backend:** No server-side templates or file upload endpoints are exposed.
- **Zero Server-Side Session Hijacking:** State is managed purely on the client side via URL query parameters and local JavaScript models.

---

## 02 — CLIENT-SIDE SECURITY MEASURES

### 1. Form Validation & Safe Transmission
- All enquiry inputs (`Full Name`, `Email`, `Phone`, `Travel Dates`, `Message`) undergo strict client-side type and pattern validation before processing.
- Input data is passed exclusively into URL-encoded parameters (`encodeURIComponent`) for direct handoff via official WhatsApp APIs (`https://wa.me/...`) or standard RFC-compliant `mailto:` links.
- No user input is directly evaluated via `eval()`, `new Function()`, or injected into executable DOM nodes.

### 2. External Dependencies Integrity
- External scripts are loaded exclusively over HTTPS from trusted, high-reputation CDNs (Cloudflare cdnjs for GSAP 3.12).
- Google Fonts are requested over secure HTTPS endpoints with preconnect directives.

### 3. Graceful Degradation
- If external script CDNs are blocked by a client's firewall or browser extension, the entire website remains 100% readable and navigable using semantic HTML and CSS styling.

---

## 03 — HOSTINGER DEPLOYMENT SECURITY BEST PRACTICES

When hosting the static files in Hostinger's `public_html`, the following server configuration directives are recommended:

### Recommended `.htaccess` Security Headers (Apache/LiteSpeed)
```apache
# Force HTTPS Strict Transport Security
<IfModule mod_headers.c>
  Header set Strict-Transport-Security "max-age=31536000; includeSubDomains; preload"
  Header set X-Content-Type-Options "nosniff"
  Header set X-Frame-Options "SAMEORIGIN"
  Header set X-XSS-Protection "1; mode=block"
  Header set Referrer-Policy "strict-origin-when-cross-origin"
  Header set Permissions-Policy "geolocation=(), microphone=(), camera=()"
</IfModule>

# Disable Directory Browsing
Options -Indexes

# Custom 404 Error Document
ErrorDocument 404 /404.html
```

---

## 04 — CONTENT & PHOTOGRAPHY INTEGRITY

- **Authentic Geolocation:** Every photograph utilized on this site has been verified to depict genuine Sri Lankan destinations (Sigiriya, Nine Arch Bridge Ella, Kandy Lake & Temple, Nuwara Eliya tea hills, Yala National Park, Galle Fort, and Mirissa).
- **Attribution Registry:** Full licensing metadata and source URLs are maintained in `data/licenses.json`.
- **Zero Fabricated Testimonials:** In accordance with consumer protection standards, review blocks clearly state their upcoming status rather than publishing fabricated customer ratings.

---

## 05 — REPORTING VULNERABILITIES

If you discover a potential security concern or content discrepancy, please contact our administrative team directly:
- **Email:** `explore@slmangoexotictours.com`
- **Subject:** `Security Vulnerability Report — SL Mango Exotic Tours`
- **Response SLA:** Within 24 business hours.
