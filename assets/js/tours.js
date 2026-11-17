/**
 * SL MANGO EXOTIC TOURS — TOURS ENGINE (ENHANCED)
 * 
 * Manages tour catalog rendering, category filtering, 3D card interactions,
 * and the dedicated long-form Tour Details experience with rich day-by-day itineraries,
 * expand/collapse day cards, activity photos, day galleries, interactive destination
 * photo galleries with lightbox controls, and seamless enquiry prefilling.
 */

document.addEventListener('DOMContentLoaded', () => {
  // If on tours.html or homepage with #featured-tours-mount or #tours-catalog-mount
  initToursCatalog();

  // If on tour-details.html or standalone tour page with #tour-detail-mount
  if (document.getElementById('tour-detail-mount')) {
    initTourDetailPage();
  }
});

/**
 * Renders tour cards in the catalog or homepage featured section
 */
function initToursCatalog() {
  const mount = document.getElementById('tours-catalog-mount') || document.getElementById('featured-tours-mount');
  if (!mount || typeof TOURS_DATA === 'undefined') return;

  const isHomeFeatured = mount.id === 'featured-tours-mount';
  // If home featured, display top 3 packages (starting with Golden Pearl flagship); if catalog, display all
  const toursToRender = isHomeFeatured ? TOURS_DATA.slice(0, 3) : TOURS_DATA;

  renderTourCards(mount, toursToRender);

  // Filter tabs on tours.html
  const filterBtns = document.querySelectorAll('.filter-btn[data-category]');
  if (filterBtns.length) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => {
          b.classList.remove('active');
          b.setAttribute('aria-selected', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');

        const cat = btn.getAttribute('data-category').toLowerCase();
        if (cat === 'all') {
          renderTourCards(mount, TOURS_DATA);
        } else {
          const filtered = TOURS_DATA.filter(t => {
            const catSlug = (t.categorySlug || '').toLowerCase();
            const catName = (t.category || '').toLowerCase();
            const hasBadge = t.activityBadges && t.activityBadges.some(b => b.toLowerCase().includes(cat));
            return catSlug === cat || catName.includes(cat) || hasBadge;
          });
          renderTourCards(mount, filtered.length ? filtered : TOURS_DATA);
        }

        // Re-trigger motion reveals
        if (typeof window.refreshMotionReveals === 'function') {
          setTimeout(() => window.refreshMotionReveals(), 50);
        }
        if (typeof ScrollTrigger !== 'undefined') {
          setTimeout(() => ScrollTrigger.refresh(), 100);
        }
      });
    });
  }
}

/**
 * Helper to render an array of tour cards into a mount container
 */
function renderTourCards(container, toursList) {
  container.innerHTML = '';

  if (!toursList.length) {
    container.innerHTML = `<div class="no-tours-found"><p>No tour packages found matching this category.</p></div>`;
    return;
  }

  toursList.forEach(tour => {
    const card = document.createElement('article');
    const isGold = tour.slug === 'golden-pearl-of-sri-lanka' || Boolean(tour.isGoldPackage);
    const isSilver = tour.slug === 'silver-isle-explorer' || Boolean(tour.isSilverPackage);

    let packageClass = 'tour-card-standard';
    if (isGold) packageClass = 'tour-card-premium tour-card-gold-package';
    else if (isSilver) packageClass = 'tour-card-premium tour-card-silver-package';

    card.className = `tour-card ${packageClass}`;
    card.setAttribute('data-category', tour.categorySlug || 'all');

    // Button label
    let buttonLabel = 'Explore Tour';
    if (isSilver) buttonLabel = 'View Tour';
    const tourLink = `tour-details.html?tour=${tour.slug}`;

    // 1 & 2: Standardized Package Badge
    let badgeHtml = '';
    if (isGold) {
      badgeHtml = `
        <span class="tour-card-badge tour-badge-gold" aria-label="Gold Package · Grand Discovery">
          <svg class="tour-badge-icon gold-crown-icon" viewBox="0 0 24 24" width="14" height="14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M3 17L2 7L7 10L12 4L17 10L22 7L21 17H3Z" fill="url(#goldCrownFill-${tour.slug})" stroke="#8D6516" stroke-width="0.75" stroke-linejoin="round"/>
            <circle cx="2" cy="7" r="1.1" fill="#FEF08A"/>
            <circle cx="7" cy="10" r="1.1" fill="#FEF08A"/>
            <circle cx="12" cy="4" r="1.3" fill="#FFFFFF"/>
            <circle cx="17" cy="10" r="1.1" fill="#FEF08A"/>
            <circle cx="22" cy="7" r="1.1" fill="#FEF08A"/>
            <rect x="3" y="17.5" width="18" height="2" rx="0.5" fill="url(#goldCrownFill-${tour.slug})" stroke="#8D6516" stroke-width="0.5"/>
            <defs>
              <linearGradient id="goldCrownFill-${tour.slug}" x1="2" y1="4" x2="22" y2="20" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stop-color="#FFF3B0"/>
                <stop offset="35%" stop-color="#FFD700"/>
                <stop offset="70%" stop-color="#D4AF37"/>
                <stop offset="100%" stop-color="#8D6516"/>
              </linearGradient>
            </defs>
          </svg>
          <span class="tour-badge-text">GOLD PACKAGE · GRAND DISCOVERY</span>
        </span>
      `;
    } else if (isSilver) {
      badgeHtml = `
        <span class="tour-card-badge tour-badge-silver" aria-label="Silver Package · Isle Explorer">
          <svg class="tour-badge-icon silver-coin-icon" viewBox="0 0 24 24" width="14" height="14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <circle cx="12" cy="12" r="10" stroke="url(#silverCoinStroke-${tour.slug})" stroke-width="1.5" fill="url(#silverCoinFill-${tour.slug})"/>
            <circle cx="12" cy="12" r="7.2" stroke="#94A3B8" stroke-width="0.75" stroke-dasharray="1.5 1.5" fill="none"/>
            <path d="M12 5.5L13.7 9.2L17.5 9.8L14.7 12.5L15.4 16.3L12 14.5L8.6 16.3L9.3 12.5L6.5 9.8L10.3 9.2L12 5.5Z" fill="url(#silverStarFill-${tour.slug})"/>
            <defs>
              <linearGradient id="silverCoinStroke-${tour.slug}" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stop-color="#FFFFFF"/>
                <stop offset="50%" stop-color="#CBD5E1"/>
                <stop offset="100%" stop-color="#94A3B8"/>
              </linearGradient>
              <linearGradient id="silverCoinFill-${tour.slug}" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stop-color="#334155"/>
                <stop offset="100%" stop-color="#0F172A"/>
              </linearGradient>
              <linearGradient id="silverStarFill-${tour.slug}" x1="6" y1="5" x2="18" y2="17" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stop-color="#FFFFFF"/>
                <stop offset="60%" stop-color="#E2E8F0"/>
                <stop offset="100%" stop-color="#94A3B8"/>
              </linearGradient>
            </defs>
          </svg>
          <span class="tour-badge-text">SILVER PACKAGE · ISLE EXPLORER</span>
        </span>
      `;
    } else {
      const badgeName = (tour.badge || 'SIGNATURE').toUpperCase();
      badgeHtml = `
        <span class="tour-card-badge tour-badge-standard" aria-label="Curated · ${tour.badge || 'Signature'}">
          <svg class="tour-badge-icon standard-compass-icon" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="10"></circle>
            <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" fill="#8EC4DE" stroke="none"></polygon>
          </svg>
          <span class="tour-badge-text">CURATED · ${badgeName}</span>
        </span>
      `;
    }

    // 6. Subtitle
    const subtitleText = tour.subtitle || `${tour.duration} Curated Private Tour`;

    // 8. Experience Highlights (properly separated with · )
    let highlightsList = [];
    if (tour.activityBadges && tour.activityBadges.length) {
      highlightsList = tour.activityBadges;
    } else if (tour.highlights && tour.highlights.length) {
      highlightsList = tour.highlights.slice(0, 4);
    }
    const visibleHighlights = highlightsList.slice(0, 4);
    let highlightsText = visibleHighlights.join(' · ');
    if (highlightsList.length > 4) {
      highlightsText += ` · +${highlightsList.length - 4} More`;
    }

    // 10. Existing inclusions / package features (3 bullets)
    const featuresHtml = (tour.highlights || []).slice(0, 3).map(feat => `
      <div class="tour-card-feature-item" title="${escapeHtml(feat)}">
        <svg class="feature-bullet-icon" viewBox="0 0 20 20" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <polyline points="4 10 8 14 16 6"></polyline>
        </svg>
        <span class="feature-bullet-text">${feat}</span>
      </div>
    `).join('');

    // Mandatory 11-step structure in exact specified order:
    // 1. Tour destination image
    // 2. Package category badge (top-left 14px)
    // 3. Tour duration badge (bottom-right 14px)
    // 4. Experience category labels
    // 5. Main tour package title
    // 6. Tour subtitle
    // 7. Destination itinerary with location icon
    // 8. Tour experience highlights
    // 9. Short tour description
    // 10. Existing inclusions or package features
    // 11. Existing call-to-action buttons
    card.innerHTML = `
      <div class="tour-card-media">
        <img src="${tour.heroImage}" alt="${tour.title} in Sri Lanka" loading="lazy" width="600" height="230" onerror="this.onerror=null;this.src='assets/images/destinations/sigiriya.jpg';">
        ${badgeHtml}
        <span class="tour-card-duration" aria-label="Duration: ${tour.duration}">
          <svg class="tour-duration-icon" viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
          <span>${tour.duration}</span>
        </span>
      </div>
      <div class="tour-card-body">
        <div class="tour-card-category">${tour.category}</div>
        <h3 class="tour-card-title">${tour.title}</h3>
        <div class="tour-card-subtitle">${subtitleText}</div>
        <div class="tour-card-route">
          <svg class="tour-route-icon" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          <span class="tour-route-text">${tour.destinationsSummary}</span>
        </div>
        <div class="tour-card-experience-highlights">
          <span class="experience-highlights-text">${highlightsText}</span>
        </div>
        <p class="tour-card-desc">${tour.shortDescription}</p>
        <div class="tour-card-features">
          ${featuresHtml}
        </div>
        <div class="tour-card-footer">
          <a href="${tourLink}" class="btn btn-navy btn-sm btn-icon-arrow tour-explore-btn">
            <span>${buttonLabel}</span>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    `;

    // Add subtle 3D tilt interaction on mousemove for desktop
    attach3DTilt(card);

    container.appendChild(card);
  });
}

/**
 * Attaches a refined 3D mouse tilt effect to a card element
 */
function attach3DTilt(element) {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  element.addEventListener('mousemove', (e) => {
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -4;
    const rotateY = ((x - centerX) / centerX) * 4;

    element.style.transform = `perspective(1000px) translateY(-8px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  element.addEventListener('mouseleave', () => {
    element.style.transform = '';
  });
}

/**
 * Hydrates the long-form Tour Details Page (tour-details.html)
 */
function initTourDetailPage() {
  if (typeof TOURS_DATA === 'undefined') return;

  const urlParams = new URLSearchParams(window.location.search);
  const slug = urlParams.get('tour') || 'golden-pearl-of-sri-lanka';

  // Find matching tour (defaults to Golden Pearl)
  let tour = TOURS_DATA.find(t => t.slug === slug);
  if (!tour) {
    tour = TOURS_DATA[0];
  }

  const isGoldenPearl = tour.slug === 'golden-pearl-of-sri-lanka' || tour.isGoldPackage;
  const isSilverExplorer = tour.slug === 'silver-isle-explorer' || tour.isSilverPackage;

  // Update page title & meta tags
  if (isSilverExplorer) {
    document.title = `${tour.title} — 10-Day Sri Lanka Discovery Journey | SL Mango Exotic Tours`;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', `10 Day Sri Lanka Tour Package: Explore Sri Lanka through ancient heritage, elephant encounters, mountain adventures, tea country, river safaris and tropical beaches. Private guided tour by SL Mango Exotic Tours.`);
    }
  } else {
    document.title = `${tour.title} — ${tour.duration} | SL Mango Exotic Tours`;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', `${tour.title}: ${tour.shortDescription}`);
    }
  }

  // Update Open Graph Metadata
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute('content', `${tour.title} — ${tour.subtitle || tour.duration}`);
  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) ogDesc.setAttribute('content', tour.shortDescription);
  const ogImage = document.querySelector('meta[property="og:image"]');
  if (ogImage) ogImage.setAttribute('content', tour.heroImage);

  // Inject or Update Schema.org TouristTrip JSON-LD
  let schemaScript = document.getElementById('tour-schema-jsonld');
  if (!schemaScript) {
    schemaScript = document.createElement('script');
    schemaScript.id = 'tour-schema-jsonld';
    schemaScript.type = 'application/ld+json';
    document.head.appendChild(schemaScript);
  }
  const tripSchema = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "name": tour.title,
    "description": tour.shortDescription,
    "touristType": tour.suitableFor,
    "itinerary": {
      "@type": "ItemList",
      "numberOfItems": tour.days.length,
      "itemListElement": tour.days.map((d, idx) => ({
        "@type": "ListItem",
        "position": idx + 1,
        "item": {
          "@type": "TouristAttraction",
          "name": `Day ${d.day}: ${d.title}`,
          "description": d.introduction
        }
      }))
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "EUR",
      "availability": "https://schema.org/InStock",
      "url": window.location.href
    },
    "provider": {
      "@type": "TravelAgency",
      "name": "SL Mango Exotic Tours",
      "url": "https://slmangoexotictours.com/"
    }
  };
  schemaScript.textContent = JSON.stringify(tripSchema, null, 2);

  // 1. Hydrate Cinematic Hero
  const heroTitle = document.getElementById('detail-hero-title');
  const heroBadge = document.getElementById('detail-hero-badge');
  const heroDuration = document.getElementById('detail-hero-duration');
  const heroLead = document.getElementById('detail-hero-lead');
  const heroBg = document.getElementById('detail-hero-bg');
  const heroCta = document.getElementById('detail-hero-cta');

  if (heroTitle) {
    heroTitle.setAttribute('aria-label', tour.title);
    heroTitle.innerHTML = `<span class="mask-line" aria-hidden="true"><span class="mask-line-inner">${tour.title}</span></span>`;
  }
  if (heroBadge) {
    if (isSilverExplorer) {
      heroBadge.className = 'badge badge-silver tour-card-badge-silver';
      heroBadge.innerHTML = `
        <img src="assets/images/silver-coin-emblem.svg" alt="Silver Isle Explorer Silver Coin Emblem" class="silver-coin-badge-icon">
        <span>Silver Collection &bull; ${tour.subtitle || '10-Day Sri Lanka Discovery Journey'}</span>
      `;
    } else if (isGoldenPearl || tour.isGoldPackage) {
      heroBadge.className = 'badge badge-gold tour-card-badge-gold';
      heroBadge.innerHTML = `
        <svg class="gold-badge-crown-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M4 16L2 7L7.5 10.5L12 5L16.5 10.5L22 7L20 16H4Z" fill="url(#heroGoldCrownGrad)" stroke="#8D6516" stroke-width="0.75" stroke-linejoin="round"/>
          <circle cx="2" cy="7" r="1.3" fill="#FFF9A6" stroke="#8D6516" stroke-width="0.5"/>
          <circle cx="7.5" cy="10.5" r="1.1" fill="#FFF9A6" stroke="#8D6516" stroke-width="0.5"/>
          <circle cx="12" cy="5" r="1.6" fill="#FFFFFF" stroke="#8D6516" stroke-width="0.5"/>
          <circle cx="16.5" cy="10.5" r="1.1" fill="#FFF9A6" stroke="#8D6516" stroke-width="0.5"/>
          <circle cx="22" cy="7" r="1.3" fill="#FFF9A6" stroke="#8D6516" stroke-width="0.5"/>
          <path d="M4 18H20C20.55 18 21 18.45 21 19C21 19.55 20.55 20 20 20H4C3.45 20 3 19.55 3 19C3 18.45 3.45 18 4 18Z" fill="url(#heroGoldCrownGrad)" stroke="#8D6516" stroke-width="0.5"/>
          <defs>
            <linearGradient id="heroGoldCrownGrad" x1="2" y1="5" x2="22" y2="20" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stop-color="#FFF3B0"/>
              <stop offset="25%" stop-color="#FFD700"/>
              <stop offset="60%" stop-color="#D4AF37"/>
              <stop offset="100%" stop-color="#8D6516"/>
            </linearGradient>
          </defs>
        </svg>
        <span>Gold Package &bull; Grand Discovery</span>
      `;
    } else {
      heroBadge.textContent = tour.category;
    }
  }
  if (heroDuration) heroDuration.textContent = tour.duration;
  if (heroLead) heroLead.textContent = tour.shortDescription;
  if (heroBg) {
    heroBg.src = tour.heroImage;
    heroBg.alt = `${tour.title} Cover Scene`;
  }

  // Add subtitle & activity badges to hero content if available
  const heroContent = document.querySelector('.hero-tour-detail .hero-content');
  if (heroContent && !document.getElementById('detail-hero-subtitle-block')) {
    const subtitleBlock = document.createElement('div');
    subtitleBlock.id = 'detail-hero-subtitle-block';
    
    let badgesMarkup = '';
    if (tour.activityBadges && tour.activityBadges.length) {
      badgesMarkup = `
        <div class="hero-badges-strip">
          ${tour.activityBadges.map(b => `<span class="hero-activity-pill">${b}</span>`).join('')}
        </div>
      `;
    }

    let coinMedallionMarkup = '';
    if (isSilverExplorer) {
      coinMedallionMarkup = `
        <div class="silver-hero-coin-container" style="margin-bottom: 1rem;">
          <img src="assets/images/silver-coin-emblem.svg" alt="Silver Isle Explorer Coin Emblem" class="silver-hero-coin-img">
          <div class="silver-hero-coin-text">
            <span class="silver-hero-coin-collection">Silver Collection</span>
            <span class="silver-hero-coin-title">Silver Isle Explorer &bull; 10-Day Discovery Journey</span>
          </div>
        </div>
      `;
    }

    const subtitleColor = isSilverExplorer ? '#E2E8F0' : 'var(--color-ceylon-gold)';
    subtitleBlock.innerHTML = `
      ${coinMedallionMarkup}
      ${tour.subtitle ? `<div style="font-family: var(--font-heading); font-size: clamp(1.1rem, 2vw, 1.45rem); font-weight: 500; color: ${subtitleColor}; margin-top: -0.25rem; margin-bottom: 0.75rem; letter-spacing: 0.03em;">${tour.subtitle}</div>` : ''}
      ${badgesMarkup}
    `;

    // Insert after title
    if (heroTitle && heroTitle.nextSibling) {
      heroContent.insertBefore(subtitleBlock, heroTitle.nextSibling);
    }
  }

  // Configure Hero buttons
  const heroActions = document.querySelector('.hero-tour-detail .hero-actions');
  if (heroActions) {
    heroActions.innerHTML = `
      <a href="#itinerary" class="btn btn-outline-white btn-lg" id="detail-hero-itinerary-btn">
        <span>Explore the Itinerary</span>
      </a>
      <a href="#enquiry-section" class="btn btn-primary btn-lg btn-icon-arrow" id="detail-hero-cta">
        <span>Request Your Tour</span>
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </a>
    `;
  }

  // 2. Hydrate Meta Strip
  const metaStripMount = document.getElementById('detail-meta-strip');
  if (metaStripMount) {
    metaStripMount.innerHTML = `
      <div class="tour-meta-block">
        <span class="tour-meta-label">Duration</span>
        <span class="tour-meta-value">${tour.duration}</span>
      </div>
      <div class="tour-meta-block">
        <span class="tour-meta-label">Travel Style</span>
        <span class="tour-meta-value">${tour.pace}</span>
      </div>
      <div class="tour-meta-block">
        <span class="tour-meta-label">Suitable For</span>
        <span class="tour-meta-value">${tour.suitableFor}</span>
      </div>
      <div class="tour-meta-block">
        <span class="tour-meta-label">Destinations</span>
        <span class="tour-meta-value">${tour.destinationsSummary}</span>
      </div>
    `;
  }

  // 3. Hydrate Overview & Special Features
  const overviewMount = document.getElementById('detail-overview-mount');
  if (overviewMount) {
    const highlightsList = tour.highlights.map(h => `
      <li>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        <span>${h}</span>
      </li>
    `).join('');

    let specialFeaturesHtml = '';
    if (tour.specialFeatures && tour.specialFeatures.length) {
      const featureIcons = {
        'Culture & Heritage': '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v4M12 14v4M16 14v4"/></svg>',
        'Wildlife & Nature': '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a9 9 0 0 1 9 9c0 7-9 11-9 11S3 18 3 11a9 9 0 0 1 9-9z"/><circle cx="12" cy="10" r="3"/></svg>',
        'Authentic Local Experiences': '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20M2 12h20"/></svg>',
        'Scenic Hill Country': '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><path d="m8 3 4 8 5-5 5 15H2L8 3z"/></svg>',
        'Coastal Adventures': '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12h20M2 16h20M2 20h20M2 8c2-2 4-2 6 0s4 2 6 0 4-2 6 0"/></svg>',
        'Community Giving': '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>'
      };

      specialFeaturesHtml = `
        <div class="special-features-section" style="margin-top: 2.5rem;">
          <div class="section-header text-left" style="margin-bottom: 1rem;">
            <span class="section-tag">Grand Discovery Pillars</span>
            <h3 class="h3" style="color: var(--color-ocean-navy);">What Makes This Gold Package Special?</h3>
            <span class="accent-line"></span>
          </div>
          <div class="special-features-grid">
            ${tour.specialFeatures.map(f => `
              <div class="special-feature-card">
                <div class="special-feature-icon">
                  ${featureIcons[f.title] || '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/></svg>'}
                </div>
                <h4 class="special-feature-title">${f.title}</h4>
                <p class="special-feature-desc">${f.desc}</p>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }

    // Guide Selection Section
    let guideSectionHtml = '';
    if (tour.guideOptions) {
      const go = tour.guideOptions;
      guideSectionHtml = `
        <div class="guide-selection-section" id="guide-selection">
          <div class="section-header text-left" style="margin-bottom: 0.75rem;">
            <span class="section-tag" style="background: rgba(140, 153, 168, 0.18); color: #4A5568;">Dedicated Expert Guidance</span>
            <h3 class="h3" style="color: var(--color-ocean-navy);">${go.title}</h3>
            <span class="accent-line" style="background: #8C99A8;"></span>
          </div>
          <p style="font-size: 0.95rem; color: var(--color-text-main); margin-bottom: 1rem; line-height: 1.6;">
            To ensure your Sri Lankan journey matches your personal travel preferences, SL Mango Exotic Tours offers two distinct guide services. Please indicate your preferred option in your booking enquiry:
          </p>
          <div class="guide-options-grid">
            <div class="guide-option-card">
              <div class="guide-option-header">
                <div class="guide-option-icon">
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a9 9 0 0 1 9 9c0 7-9 11-9 11S3 18 3 11a9 9 0 0 1 9-9z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div>
                  <span class="guide-option-badge">${go.optionA.badge}</span>
                  <h4 class="guide-option-title">${go.optionA.name}</h4>
                </div>
              </div>
              <ul class="guide-option-list">
                ${go.optionA.features.map(f => `<li>${f}</li>`).join('')}
              </ul>
            </div>

            <div class="guide-option-card">
              <div class="guide-option-header">
                <div class="guide-option-icon">
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
                </div>
                <div>
                  <span class="guide-option-badge">${go.optionB.badge}</span>
                  <h4 class="guide-option-title">${go.optionB.name}</h4>
                </div>
              </div>
              <ul class="guide-option-list">
                ${go.optionB.features.map(f => `<li>${f}</li>`).join('')}
              </ul>
            </div>
          </div>
          <div class="guide-option-notice">
            <strong>Important Notice:</strong> ${go.notice}
          </div>
        </div>
      `;
    }

    // Accommodation Section
    let accommodationSectionHtml = '';
    if (tour.accommodationInfo) {
      const acc = tour.accommodationInfo;
      accommodationSectionHtml = `
        <div class="accommodation-section-box" id="accommodation-section">
          <div class="section-header text-left" style="margin-bottom: 0.75rem;">
            <span class="section-tag" style="background: rgba(140, 153, 168, 0.18); color: #4A5568;">Curated Hospitality</span>
            <h3 class="h3" style="color: var(--color-ocean-navy);">${acc.title}</h3>
            <span class="accent-line" style="background: #8C99A8;"></span>
          </div>
          <p style="font-size: 0.95rem; color: var(--color-text-main); margin-bottom: 1.25rem; line-height: 1.6;">
            ${acc.description}
          </p>
          <div class="accommodation-tier-grid">
            ${acc.tiers.map((t, idx) => `
              <div class="accommodation-tier-card ${idx === 0 ? 'included' : ''}">
                <span class="accommodation-tier-tag ${idx === 0 ? 'included-tag' : 'upgrade-tag'}">${t.tag}</span>
                <h4 class="accommodation-tier-title">${t.name}</h4>
                <p class="accommodation-tier-desc">${t.desc}</p>
              </div>
            `).join('')}
          </div>
          <div class="pricing-guidance-box">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="16" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12.01" y2="8"></line>
            </svg>
            <div class="pricing-guidance-content">
              <strong>Transparent Booking Policy:</strong> Hotel names, exact room categories, and any upgrade adjustments will be confirmed in your final written quotation. Custom accommodation upgrades may involve additional charges.
            </div>
          </div>
        </div>
      `;
    }

    overviewMount.innerHTML = `
      <div class="tour-narrative-overview">
        <span class="section-tag">Tour Overview</span>
        <h2 class="h2" style="margin-bottom: 1.25rem;">About This Handcrafted Journey</h2>
        <p class="lead">${tour.shortDescription}</p>
        <p>${tour.overview}</p>
        <p><strong>Route Circuit:</strong> ${tour.routeOverview}</p>

        <div class="tour-highlights-box">
          <h4>Signature Highlights Included in This Route</h4>
          <ul class="tour-highlights-list">
            ${highlightsList}
          </ul>
        </div>

        ${specialFeaturesHtml}
        ${guideSectionHtml}
        ${accommodationSectionHtml}
      </div>
    `;
  }

  // 4. Hydrate Day-by-Day Itinerary (Interactive Expand/Collapse with Photos)
  const itineraryMount = document.getElementById('detail-itinerary-mount');
  if (itineraryMount) {
    itineraryMount.innerHTML = '';

    // Helper function to determine if photo caption adds valuable distinct context not already in paragraph
    function shouldDisplayPhotoCaption(caption, description) {
      if (!caption || !caption.trim()) return false;
      if (!description || !description.trim()) return true;
      const cleanCap = caption.trim().toLowerCase().replace(/[^\w\s]/g, '');
      const cleanDesc = description.trim().toLowerCase().replace(/[^\w\s]/g, '');
      return cleanDesc !== cleanCap && !cleanDesc.includes(cleanCap);
    }

    // Render Itinerary Header Controls (Expand All / Collapse All)
    let controlsBar = document.getElementById('itinerary-controls-bar');
    if (!controlsBar) {
      controlsBar = document.createElement('div');
      controlsBar.id = 'itinerary-controls-bar';
      controlsBar.className = 'itinerary-header-bar';
      itineraryMount.parentElement.insertBefore(controlsBar, itineraryMount);
    }
    controlsBar.innerHTML = `
      <div class="itinerary-header-info">
        <span class="itinerary-header-tag">Interactive Itinerary</span>
        <div class="itinerary-header-sub">Explore all ${tour.days.length} days with verified destination photography &amp; timings.</div>
      </div>
      <div class="itinerary-controls">
        <button type="button" class="btn-itinerary-expand active" id="btn-expand-all" aria-label="Expand all days">
          <svg class="itinerary-ctrl-icon" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#D6AD68" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="7 13 12 18 17 13"></polyline>
            <polyline points="7 6 12 11 17 6"></polyline>
          </svg>
          <span>Expand All Days</span>
        </button>
        <button type="button" class="btn-itinerary-collapse" id="btn-collapse-all" aria-label="Collapse all days">
          <svg class="itinerary-ctrl-icon" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#173B4D" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="17 11 12 6 7 11"></polyline>
            <polyline points="17 18 12 13 7 18"></polyline>
          </svg>
          <span>Collapse All Days</span>
        </button>
      </div>
    `;

    tour.days.forEach(day => {
      const dayEl = document.createElement('div');
      dayEl.className = 'itinerary-day-card';
      dayEl.id = `day-${day.day}`;

      const formattedDayNum = String(day.day).padStart(2, '0');

      // Activities HTML with dedicated photos and clean captions below
      const activitiesHtml = day.activities.map(act => {
        const actPhotosHtml = act.photos && act.photos.length ? `
          <div class="activity-photos-grid">
            ${act.photos.map(p => {
              const showCaption = shouldDisplayPhotoCaption(p.caption, act.description);
              return `
                <div class="activity-photo-wrapper">
                  <div class="activity-photo-item" onclick="openLightbox('${p.src}', '${escapeHtml(p.caption)}', '${escapeHtml(p.alt)}')" role="button" tabindex="0" aria-label="View photo: ${escapeHtml(p.caption)}">
                    <img src="${p.src}" alt="${p.alt}" loading="lazy" width="400" height="250" onerror="this.onerror=null;this.src='assets/images/destinations/sigiriya.jpg';">
                  </div>
                  ${showCaption ? `<div class="photo-caption-below">${escapeText(p.caption)}</div>` : ''}
                </div>
              `;
            }).join('')}
          </div>
        ` : '';

        return `
          <div class="activity-block">
            <div class="activity-header">
              <h4 class="activity-title">${act.title}</h4>
              ${act.timing ? `<span class="activity-timing">${act.timing}</span>` : ''}
            </div>
            <p class="activity-desc">${act.description}</p>
            ${actPhotosHtml}
          </div>
        `;
      }).join('');

      // Dedicated Day Visual Highlights (Day Gallery) with clean captions below
      let dayGalleryHtml = '';
      if (day.dayGallery && day.dayGallery.length) {
        const galleryItems = day.dayGallery.map((img, idx) => `
          <div class="day-gallery-card ${idx === 0 ? 'featured' : 'secondary'}">
            <div class="day-gallery-item" onclick="openLightbox('${img.src}', '${escapeHtml(img.caption)}', '${escapeHtml(img.alt)}')" role="button" tabindex="0" aria-label="View photo: ${escapeHtml(img.caption)}">
              <img src="${img.src}" alt="${img.alt}" loading="lazy" width="600" height="375" onerror="this.onerror=null;this.src='assets/images/destinations/sigiriya.jpg';">
            </div>
            ${img.caption ? `<div class="photo-caption-below">${escapeText(img.caption)}</div>` : ''}
          </div>
        `).join('');

        dayGalleryHtml = `
          <div class="day-gallery-container">
            <div class="day-gallery-label">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <circle cx="8.5" cy="8.5" r="1.5"></circle>
                <polyline points="21 15 16 10 5 21"></polyline>
              </svg>
              <span>Day ${formattedDayNum} Visual Highlights</span>
            </div>
            <div class="day-gallery-grid">
              ${galleryItems}
            </div>
          </div>
        `;
      }

      // Day 8 Safety Callout Notice (Diyaluma Pools)
      let safetyNoticeHtml = '';
      if (day.day === 8) {
        safetyNoticeHtml = `
          <div class="day-safety-box">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
            <div>
              <strong>Important Waterfall Safety Notice:</strong> Access to natural waterfall pools and certain upper hiking ledges is strictly governed by daily weather, mountain rainfall, and water level conditions. Swimming or traversing natural pools is permitted only when approved as safe by your licensed guide. Rocky trails can be slippery; suitable footwear is required.
            </div>
          </div>
        `;
      }

      // Teaser preview images for collapsed state
      const previewThumbnails = (day.dayGallery && day.dayGallery.length) 
        ? day.dayGallery.slice(0, 3).map(img => `<img src="${img.src}" alt="${img.alt}" class="day-preview-thumb" loading="lazy">`).join('')
        : '';

      dayEl.innerHTML = `
        <div class="day-marker">
          <div class="day-marker-node">
            <span class="node-day">DAY</span>
            <span class="node-num">${formattedDayNum}</span>
          </div>
        </div>
        <div class="day-content-card">
          <div class="day-header" role="button" tabindex="0" aria-expanded="true" aria-controls="day-body-${day.day}">
            <div class="day-header-top">
              <div class="day-header-info">
                <div class="day-meta-tags">
                  <span class="badge badge-gold">DAY ${formattedDayNum}</span>
                  <span class="badge badge-navy">${day.destination}</span>
                  ${day.overnight ? `<span class="badge" style="background:#EBF5F9; color:#123B52; font-weight:500;">Overnight: ${day.overnight}</span>` : ''}
                </div>
                <h3 class="day-title">${day.title}</h3>
                ${day.subtitle ? `<div class="day-subtitle">${day.subtitle}</div>` : ''}
              </div>
              <button class="day-toggle-btn" type="button" aria-label="Collapse Day ${formattedDayNum} details">
                <svg class="day-toggle-chevron" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="#D6AD68" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
            </div>
          </div>

          <div class="day-expandable-body" id="day-body-${day.day}">
            <div class="day-expandable-inner">
              <p class="day-intro">${day.introduction}</p>

              <div class="day-activities-list">
                ${activitiesHtml}
              </div>

              ${safetyNoticeHtml}

              ${dayGalleryHtml}

              <div class="day-practical-footer">
                <div class="practical-chip">
                  <span class="practical-chip-label">Overnight Location</span>
                  <span class="practical-chip-val">${day.overnight}</span>
                </div>
                <div class="practical-chip">
                  <span class="practical-chip-label">Travel Notes</span>
                  <span class="practical-chip-val">${day.travelNotes}</span>
                </div>
                ${day.optionalActivities ? `
                  <div class="practical-chip">
                    <span class="practical-chip-label">Optional Experiences</span>
                    <span class="practical-chip-val">${day.optionalActivities}</span>
                  </div>
                ` : ''}
                ${day.practicalNotes ? `
                  <div class="practical-chip">
                    <span class="practical-chip-label">Visitor Guidance</span>
                    <span class="practical-chip-val">${day.practicalNotes}</span>
                  </div>
                ` : ''}
              </div>
            </div>
          </div>
        </div>
      `;

      // Attach expand/collapse toggle listener
      const headerEl = dayEl.querySelector('.day-header');
      headerEl.addEventListener('click', (e) => {
        // Prevent toggle if clicking on interactive elements inside header
        if (e.target.closest('a')) return;
        toggleDayCard(dayEl);
      });

      headerEl.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          if (e.target.closest('button')) return;
          e.preventDefault();
          toggleDayCard(dayEl);
        }
      });

      itineraryMount.appendChild(dayEl);
    });

    // Expand All / Collapse All functionality
    const btnExpandAll = document.getElementById('btn-expand-all');
    const btnCollapseAll = document.getElementById('btn-collapse-all');

    if (btnExpandAll && btnCollapseAll) {
      btnExpandAll.addEventListener('click', () => {
        document.querySelectorAll('.itinerary-day-card').forEach(card => {
          card.classList.remove('is-collapsed');
          const header = card.querySelector('.day-header');
          if (header) header.setAttribute('aria-expanded', 'true');
          const toggleBtn = card.querySelector('.day-toggle-btn');
          const dayNum = card.id ? card.id.replace('day-', '') : '';
          if (toggleBtn) {
            toggleBtn.setAttribute('aria-expanded', 'true');
            toggleBtn.setAttribute('aria-label', `Collapse Day ${dayNum} details`);
          }
        });
        btnExpandAll.classList.add('active');
        btnCollapseAll.classList.remove('active');
      });

      btnCollapseAll.addEventListener('click', () => {
        document.querySelectorAll('.itinerary-day-card').forEach(card => {
          card.classList.add('is-collapsed');
          const header = card.querySelector('.day-header');
          if (header) header.setAttribute('aria-expanded', 'false');
          const toggleBtn = card.querySelector('.day-toggle-btn');
          const dayNum = card.id ? card.id.replace('day-', '') : '';
          if (toggleBtn) {
            toggleBtn.setAttribute('aria-expanded', 'false');
            toggleBtn.setAttribute('aria-label', `Expand Day ${dayNum} details`);
          }
        });
        btnCollapseAll.classList.add('active');
        btnExpandAll.classList.remove('active');
      });
    }
  }

  // 5. Hydrate Inclusions & Exclusions & Community Giving
  const inclusionsMount = document.getElementById('detail-inclusions-mount');
  if (inclusionsMount) {
    const incHtml = tour.inclusions.map(i => `
      <li>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        <span>${i}</span>
      </li>
    `).join('');

    const excHtml = tour.exclusions.map(e => `
      <li>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
        <span>${e}</span>
      </li>
    `).join('');

    let communityGivingHtml = '';
    if (tour.communityGiving) {
      const cg = tour.communityGiving;
      communityGivingHtml = `
        <div class="community-giving-box">
          <div class="community-giving-header">
            <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="var(--color-jungle-green)" stroke-width="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
            <div>
              <span class="community-giving-tag">Community Giving &amp; Responsible Travel</span>
              <h3 class="community-giving-title">${cg.title}</h3>
            </div>
          </div>
          <p style="font-size: 0.95rem; line-height: 1.65; color: var(--color-text-main); margin-bottom: 1rem;">
            ${cg.description}
          </p>

          <h5 style="font-size: 0.95rem; color: var(--color-ocean-navy); margin-bottom: 0.5rem; font-weight: 600;">
            Suggested Educational Donation Items:
          </h5>
          <div class="community-donation-items-grid">
            ${cg.items.map(item => `
              <div class="community-donation-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>${item}</span>
              </div>
            `).join('')}
          </div>

          <p class="community-disclaimer">
            ${cg.disclaimer}
          </p>
        </div>
      `;
    }

    inclusionsMount.innerHTML = `
      <div class="inclusions-exclusions-grid">
        <div class="inclusions-box">
          <h3>
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="var(--color-jungle-green)" stroke-width="2">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span>What Is Included</span>
          </h3>
          <ul class="check-list">
            ${incHtml}
          </ul>
        </div>
        <div class="exclusions-box">
          <h3>
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#B25353" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
            <span>What Is Excluded</span>
          </h3>
          <ul class="cross-list">
            ${excHtml}
          </ul>
        </div>
      </div>

      <!-- Luxury Upgrade Banner -->
      <div class="tour-highlights-box" style="margin-top: 2rem; background: #FFFFFF; border-left: 4px solid var(--color-ceylon-gold);">
        <h4 style="color: var(--color-ocean-navy); margin-bottom: 0.4rem;">Want a More Luxurious Stay?</h4>
        <p style="font-size: 0.92rem; color: var(--color-text-muted); margin-bottom: 0;">
          Accommodation at hotels meeting a minimum 3-star standard is included in the package, subject to availability. Guests who prefer 4-star or 5-star hotels, luxury resorts, or private boutique villas can contact SL Mango Exotic Tours. We are delighted to customize the package to your preferred hotel category, travel style, and budget. Upgrades may incur additional charges.
        </p>
      </div>

      ${communityGivingHtml}
    `;
  }

  // 6. Hydrate Interactive Destination Photo Gallery
  renderDedicatedDestinationGallery(tour);

  // 7. Hydrate Tour Enquiry Section ("Let Your Sri Lankan Story Begin")
  renderTourEnquirySection(tour);

  // 8. Hydrate Sticky Sidebar
  const sidebarMount = document.getElementById('detail-sidebar-mount');
  if (sidebarMount) {
    let sidebarBadge = `<span class="badge badge-gold">${tour.badge || 'Tailored Private Tour'}</span>`;
    let sidebarEmblem = `<img src="assets/images/logo.png" alt="SL Mango Exotic Tours Emblem" style="width:48px; height:auto; filter:drop-shadow(0 2px 6px rgba(200,164,106,0.35));">`;
    let guideRowText = 'National Tourist Guide throughout';

    if (isSilverExplorer) {
      sidebarBadge = `
        <span class="badge badge-silver tour-card-badge-silver" style="font-size:0.75rem; padding:0.35rem 0.75rem;">
          <img src="assets/images/silver-coin-emblem.svg" alt="Silver Coin" class="silver-coin-badge-icon" style="width:18px;height:18px;">
          <span>${tour.badge || 'Silver Collection'}</span>
        </span>
      `;
      sidebarEmblem = `<img src="assets/images/silver-coin-emblem.svg" alt="Silver Isle Explorer Medallion" style="width:52px; height:52px; filter:drop-shadow(0 2px 8px rgba(180,195,215,0.5));">`;
      guideRowText = 'Choice of National Guide or Chauffeur Guide';
    }

    sidebarMount.innerHTML = `
      <div class="enquiry-card-sticky">
        <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:0.85rem;">
          ${sidebarBadge}
          ${sidebarEmblem}
        </div>
        <h3 class="enquiry-card-title">${tour.title}</h3>
        <p class="enquiry-card-subtitle">${tour.duration} • ${tour.subtitle || 'Private Executive Journey'}</p>

        <div class="sidebar-features-list">
          <div class="sidebar-feature-row">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span>${guideRowText}</span>
          </div>
          <div class="sidebar-feature-row">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span>Private A/C vehicle & chauffeur</span>
          </div>
          <div class="sidebar-feature-row">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span>Flexible daily departure schedule</span>
          </div>
          <div class="sidebar-feature-row">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span>3-Star minimum with 4★/5★ upgrade options</span>
          </div>
          <div class="sidebar-feature-row">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span>Direct tour operator (No middlemen)</span>
          </div>
        </div>

        <a href="#enquiry-section" class="btn btn-primary btn-lg" style="width: 100%; text-align: center; margin-bottom: 0.75rem;">
          Request This Tour
        </a>

        <a href="https://wa.me/${SITE_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(`Hello SL Mango Exotic Tours, I am interested in booking / customizing "${tour.title}" (${tour.duration}). Could you please share more details?`)}" 
           target="_blank" rel="noopener noreferrer" 
           class="btn btn-secondary btn-sm" style="width: 100%; text-align: center;">
          Chat on WhatsApp
        </a>

        <div class="sidebar-contact-direct">
          Prefer to speak directly? Call us at <br>
          <a href="tel:${SITE_CONFIG.contact.phoneTel}">${SITE_CONFIG.contact.phoneDisplay}</a>
        </div>
      </div>
    `;
  }

  // 9. Hydrate Related Tours
  const relatedMount = document.getElementById('detail-related-mount');
  if (relatedMount) {
    const relatedTours = TOURS_DATA.filter(t => t.slug !== tour.slug).slice(0, 3);
    renderTourCards(relatedMount, relatedTours);
  }
}

/**
 * Toggles a day card between expanded and collapsed states
 */
function toggleDayCard(dayCardEl) {
  const isCollapsed = dayCardEl.classList.toggle('is-collapsed');
  const header = dayCardEl.querySelector('.day-header');
  const toggleBtn = dayCardEl.querySelector('.day-toggle-btn');
  const dayNum = dayCardEl.id ? dayCardEl.id.replace('day-', '') : '';

  if (header) {
    header.setAttribute('aria-expanded', !isCollapsed);
  }
  if (toggleBtn) {
    toggleBtn.setAttribute('aria-expanded', !isCollapsed);
    toggleBtn.setAttribute('aria-label', `${isCollapsed ? 'Expand' : 'Collapse'} Day ${dayNum} details`);
  }

  // Synchronize global Expand/Collapse controls
  const allCards = document.querySelectorAll('.itinerary-day-card');
  const totalCards = allCards.length;
  const collapsedCards = document.querySelectorAll('.itinerary-day-card.is-collapsed').length;
  const btnExpandAll = document.getElementById('btn-expand-all');
  const btnCollapseAll = document.getElementById('btn-collapse-all');

  if (btnExpandAll && btnCollapseAll && totalCards > 0) {
    if (collapsedCards === 0) {
      btnExpandAll.classList.add('active');
      btnCollapseAll.classList.remove('active');
    } else if (collapsedCards === totalCards) {
      btnCollapseAll.classList.add('active');
      btnExpandAll.classList.remove('active');
    } else {
      btnExpandAll.classList.remove('active');
      btnCollapseAll.classList.remove('active');
    }
  }
}

/**
 * Renders the dedicated interactive Destination Photo Gallery with category tabs
 */
function renderDedicatedDestinationGallery(tour) {
  let galleryMount = document.getElementById('tour-destination-gallery-mount');
  if (!galleryMount) {
    // If mount point not present in HTML, place before related tours or shared preview
    const parentContainer = document.querySelector('.shared-gallery-preview-mount');
    if (parentContainer && parentContainer.closest('section')) {
      const section = parentContainer.closest('section');
      section.className = 'section section-bg-cloud tour-destination-gallery-section';
      section.id = 'tour-gallery-section';
      section.innerHTML = `
        <div class="container">
          <div class="section-header text-center">
            <span class="section-tag">Visual Storytelling</span>
            <h2 class="section-title">Scenes from This 14-Day Grand Discovery</h2>
            <span class="accent-line"></span>
            <p class="section-description">
              A curated photographic journey through the ancient temples, misty highlands, wild elephant corridors, and golden coastlines featured across this itinerary.
            </p>
          </div>
          <div id="tour-destination-gallery-mount"></div>
        </div>
      `;
      galleryMount = document.getElementById('tour-destination-gallery-mount');
    }
  }

  if (!galleryMount) return;

  const galleryItems = tour.destinationGallery || (typeof GALLERY_DATA !== 'undefined' ? GALLERY_DATA.slice(0, 18) : []);
  if (!galleryItems.length) return;

  // Active gallery dataset for Lightbox navigation
  window.activeTourGallerySet = [...galleryItems];

  const categories = [
    { key: 'all', label: 'All Highlights' },
    { key: 'culture', label: 'Culture & Heritage' },
    { key: 'wildlife', label: 'Wildlife Safari' },
    { key: 'highlands', label: 'Hill Country & Tea' },
    { key: 'waterfalls', label: 'Waterfalls & Adventure' },
    { key: 'train', label: 'Scenic Train Journey' },
    { key: 'beaches', label: 'Tropical Beaches' },
    { key: 'experiences', label: 'Local Experiences' }
  ];

  galleryMount.innerHTML = `
    <div class="tour-gallery-filter-tabs" role="tablist" aria-label="Filter destination gallery">
      ${categories.map((c, i) => `
        <button class="tour-gallery-filter-btn ${i === 0 ? 'active' : ''}" data-cat="${c.key}" role="tab" aria-selected="${i === 0}">
          ${c.label}
        </button>
      `).join('')}
    </div>
    <div class="tour-gallery-grid" id="tour-gallery-grid-inner"></div>
  `;

  const gridInner = document.getElementById('tour-gallery-grid-inner');
  renderDestinationGalleryCards(gridInner, galleryItems);

  // Tab click listeners
  const tabBtns = galleryMount.querySelectorAll('.tour-gallery-filter-btn');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const cat = btn.getAttribute('data-cat');
      const filtered = cat === 'all' 
        ? galleryItems 
        : galleryItems.filter(item => item.category === cat);

      window.activeTourGallerySet = filtered;
      renderDestinationGalleryCards(gridInner, filtered);
    });
  });
}

function renderDestinationGalleryCards(container, items) {
  container.innerHTML = '';
  if (!items.length) {
    container.innerHTML = `<p style="grid-column:1/-1; text-align:center; color:var(--color-text-muted);">No photographs found in this category.</p>`;
    return;
  }

  items.forEach((item, index) => {
    const card = document.createElement('div');
    card.className = 'tour-gallery-card';
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', `View photograph: ${item.title}`);

    card.innerHTML = `
      <img src="${item.thumb || item.image}" alt="${item.alt}" loading="lazy" width="600" height="450" onerror="this.onerror=null;this.src='assets/images/destinations/sigiriya.jpg';">
      <div class="tour-gallery-card-overlay">
        <span class="tour-gallery-category-tag">${item.categoryLabel || item.category}</span>
        <h4 class="tour-gallery-card-title">${item.title}</h4>
        <p class="tour-gallery-card-caption">${item.caption}</p>
      </div>
    `;

    card.addEventListener('click', () => {
      if (typeof openLightboxByIndex === 'function') {
        openLightboxByIndex(index, window.activeTourGallerySet);
      } else if (typeof openLightbox === 'function') {
        openLightbox(item.image, item.title, item.caption);
      }
    });

    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        card.click();
      }
    });

    container.appendChild(card);
  });
}

/**
 * Renders the Tour Enquiry Section at the bottom of the page
 */
function renderTourEnquirySection(tour) {
  let enquirySection = document.getElementById('enquiry-section');
  if (!enquirySection) {
    // Insert before footer
    const footer = document.querySelector('.site-footer');
    if (footer) {
      enquirySection = document.createElement('section');
      enquirySection.className = 'tour-enquiry-section';
      enquirySection.id = 'enquiry-section';
      footer.parentNode.insertBefore(enquirySection, footer);
    }
  }

  if (!enquirySection) return;

  const isSilver = tour.slug === 'silver-isle-explorer' || tour.isSilverPackage;
  const tourSubtitle = tour.subtitle || `${tour.duration} Handcrafted Itinerary`;

  enquirySection.innerHTML = `
    <div class="container">
      <div class="tour-enquiry-card">
        <div class="tour-enquiry-header">
          <span class="section-tag">${isSilver ? 'Silver Collection Booking &amp; Tailoring' : 'Start Planning Your Ceylon Journey'}</span>
          <h2 class="tour-enquiry-title">Enquire About ${tour.title}</h2>
          <div class="tour-enquiry-subtitle">${tour.duration}. Countless authentic experiences. One seamless private journey.</div>
          <p style="color: var(--color-text-muted); font-size: 0.95rem; margin-top: 0.5rem; margin-bottom: 0;">
            Share your preferred dates, party size, and travel style. Our tour director reviews all enquiries directly and returns a comprehensive, transparent quotation with confirmed hotel categories within a few hours.
          </p>
        </div>

        <form id="tour-package-enquiry-form" class="tour-enquiry-form" novalidate>
          <div class="tour-enquiry-grid">
            <div class="form-group">
              <label for="enq-name" class="form-label">Full Name <span style="color:#d9534f;">*</span></label>
              <input type="text" id="enq-name" name="name" class="form-control" placeholder="e.g. David &amp; Sarah Jenkins" required>
              <span class="form-field-error">Please provide your full name.</span>
            </div>

            <div class="form-group">
              <label for="enq-email" class="form-label">Email Address <span style="color:#d9534f;">*</span></label>
              <input type="email" id="enq-email" name="email" class="form-control" placeholder="e.g. david.jenkins@example.com" required>
              <span class="form-field-error">Please provide a valid email address.</span>
            </div>

            <div class="form-group">
              <label for="enq-phone" class="form-label">WhatsApp Number <span style="font-size:0.8rem; color:var(--color-text-muted); font-weight:normal;">(Recommended)</span></label>
              <input type="tel" id="enq-phone" name="phone" class="form-control" placeholder="e.g. +44 7911 123456">
            </div>

            <div class="form-group">
              <label for="enq-country" class="form-label">Country of Residence</label>
              <input type="text" id="enq-country" name="country" class="form-control" placeholder="e.g. United Kingdom, Germany, Australia, USA">
            </div>

            <div class="form-group">
              <label for="enq-dates" class="form-label">Preferred Travel Date</label>
              <input type="text" id="enq-dates" name="dates" class="form-control" placeholder="e.g. November 2026 or Flexible">
            </div>

            <div class="form-group">
              <label class="form-label">Party Size</label>
              <div class="form-row-2col">
                <div>
                  <label for="enq-adults" style="font-size:0.8rem; color:var(--color-text-muted); display:block; margin-bottom:0.25rem;">Adults</label>
                  <select id="enq-adults" name="adults" class="form-control">
                    <option value="1 Adult">1 Adult</option>
                    <option value="2 Adults" selected>2 Adults</option>
                    <option value="3 Adults">3 Adults</option>
                    <option value="4 Adults">4 Adults</option>
                    <option value="5 Adults">5 Adults</option>
                    <option value="6+ Adults (Group)">6+ Adults</option>
                  </select>
                </div>
                <div>
                  <label for="enq-children" style="font-size:0.8rem; color:var(--color-text-muted); display:block; margin-bottom:0.25rem;">Children (&lt;12 yrs)</label>
                  <select id="enq-children" name="children" class="form-control">
                    <option value="0 Children" selected>0 Children</option>
                    <option value="1 Child">1 Child</option>
                    <option value="2 Children">2 Children</option>
                    <option value="3+ Children">3+ Children</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="form-group">
              <label for="enq-accommodation" class="form-label">Preferred Accommodation Category</label>
              <select id="enq-accommodation" name="accommodation" class="form-control">
                <option value="3-Star Standard (Included in Package)" selected>3-Star Standard (Included in Package)</option>
                <option value="4-Star Premium Comfort (Upgrade Request)">4-Star Premium Comfort (Upgrade Request)</option>
                <option value="5-Star Luxury &amp; Boutique (Upgrade Request)">5-Star Luxury &amp; Boutique (Upgrade Request)</option>
                <option value="Luxury Private Villas &amp; Exclusive Hideaways">Luxury Private Villas &amp; Exclusive Hideaways</option>
              </select>
            </div>

            <div class="form-group">
              <label for="enq-guide" class="form-label">Preferred Guide Experience</label>
              <select id="enq-guide" name="guide" class="form-control">
                <option value="Option A – National Tourist Guide (In-depth culture &amp; heritage)" selected>Option A – National Tourist Guide (In-depth culture &amp; heritage)</option>
                <option value="Option B – Chauffeur Guide (Flexible, traveler-led guidance)">Option B – Chauffeur Guide (Flexible, traveler-led guidance)</option>
              </select>
            </div>

            <div class="form-group tour-enquiry-full">
              <label for="enq-requests" class="form-label">Additional Requirements or Tailoring Preferences</label>
              <textarea id="enq-requests" name="requests" class="form-control" rows="4" placeholder="Share any specific wishes: e.g. hot-air balloon ride booking, dietary preferences, extra beach leisure, room types, or community school visit participation..."></textarea>
            </div>
          </div>

          <div class="enquiry-action-row">
            <button type="submit" class="btn btn-primary btn-lg btn-icon-arrow" id="btn-submit-enquiry">
              <span>Submit Tour Enquiry</span>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>

            <a href="https://wa.me/${SITE_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(`Hello SL Mango Exotic Tours, I am interested in booking / customizing "${tour.title}" (${tour.duration}). Could you please share more details?`)}" 
               target="_blank" rel="noopener noreferrer" 
               class="btn btn-whatsapp-enquiry btn-lg" id="btn-whatsapp-enquiry">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
              <span>Chat on WhatsApp Directly</span>
            </a>
          </div>

          <div class="tour-enquiry-guarantee">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
            <span>Direct Sri Lankan tour operator • Fully customizable itineraries • Transparent quotes • No hidden reservation charges</span>
          </div>
        </form>
      </div>
    </div>
  `;

  // Bind Form Submission
  const form = document.getElementById('tour-package-enquiry-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;

      const nameInput = document.getElementById('enq-name');
      const emailInput = document.getElementById('enq-email');
      const phoneInput = document.getElementById('enq-phone');
      const countryInput = document.getElementById('enq-country');
      const datesInput = document.getElementById('enq-dates');
      const adultsSelect = document.getElementById('enq-adults');
      const childrenSelect = document.getElementById('enq-children');
      const accomSelect = document.getElementById('enq-accommodation');
      const guideSelect = document.getElementById('enq-guide');
      const requestsInput = document.getElementById('enq-requests');

      // Validation
      if (!nameInput.value.trim()) {
        nameInput.closest('.form-group').classList.add('has-error');
        isValid = false;
      } else {
        nameInput.closest('.form-group').classList.remove('has-error');
      }

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailInput.value.trim() || !emailPattern.test(emailInput.value.trim())) {
        emailInput.closest('.form-group').classList.add('has-error');
        isValid = false;
      } else {
        emailInput.closest('.form-group').classList.remove('has-error');
      }

      if (!isValid) return;

      const payload = {
        name: nameInput.value.trim(),
        email: emailInput.value.trim(),
        phone: phoneInput && phoneInput.value.trim() ? phoneInput.value.trim() : 'Not provided',
        country: countryInput && countryInput.value.trim() ? countryInput.value.trim() : 'Not specified',
        dates: datesInput && datesInput.value.trim() ? datesInput.value.trim() : 'Flexible',
        adults: adultsSelect ? adultsSelect.value : '2 Adults',
        children: childrenSelect ? childrenSelect.value : '0 Children',
        accommodation: accomSelect ? accomSelect.value : '3-Star Standard',
        guide: guideSelect ? guideSelect.value : 'Option A – National Tourist Guide',
        requests: requestsInput && requestsInput.value.trim() ? requestsInput.value.trim() : 'None specified',
        interest: tour.title
      };

      const formattedText = 
`*NEW TOUR ENQUIRY — SL MANGO EXOTIC TOURS*
----------------------------------------
*Tour Package:* ${tour.title} (${tour.duration})
*Collection:* ${tour.collection || (tour.isSilverPackage ? 'Silver Collection' : (tour.isGoldPackage ? 'Gold Collection' : 'Curated Private Journey'))}
*Client Name:* ${payload.name}
*Email:* ${payload.email}
*WhatsApp Number:* ${payload.phone}
*Country of Residence:* ${payload.country}
*Preferred Travel Date:* ${payload.dates}
*Party Size:* ${payload.adults}, ${payload.children}
*Preferred Guide Experience:* ${payload.guide}
*Preferred Accommodation:* ${payload.accommodation}

*Special Requests & Notes:*
${payload.requests}
----------------------------------------
(Sent via slmangoexotictours.com package booking engine)`;

      // Trigger honest handoff modal from forms.js
      if (typeof showSubmissionActionModal === 'function') {
        showSubmissionActionModal(payload, formattedText);
      } else {
        // Fallback directly to WhatsApp
        const waUrl = `https://wa.me/${SITE_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(formattedText)}`;
        window.open(waUrl, '_blank');
      }
    });

    // Clear errors on typing
    form.querySelectorAll('input, select, textarea').forEach(field => {
      field.addEventListener('input', () => {
        const group = field.closest('.form-group');
        if (group) group.classList.remove('has-error');
      });
    });
  }
}

function escapeHtml(text) {
  if (!text) return '';
  return text.replace(/'/g, "\\'").replace(/"/g, '&quot;');
}

function escapeText(text) {
  if (!text) return '';
  return String(text).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
