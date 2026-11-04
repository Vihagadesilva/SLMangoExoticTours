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
    const isPremium = tour.slug === 'golden-pearl-of-sri-lanka' || tour.isGoldPackage;
    card.className = `tour-card ${isPremium ? 'tour-card-premium tour-card-gold-package' : ''}`;
    card.setAttribute('data-category', tour.categorySlug);

    const highlightsPreview = tour.highlights.slice(0, 3).map(h => `
      <div class="tour-highlight-item">${h}</div>
    `).join('');

    const subtitleHtml = tour.subtitle ? `
      <div class="tour-card-subtitle">${tour.subtitle}</div>
    ` : '';

    const badgesHtml = tour.activityBadges && tour.activityBadges.length ? `
      <div class="tour-card-badges">
        ${tour.activityBadges.slice(0, 4).map(b => `<span class="activity-badge-pill">${b}</span>`).join('')}
        ${tour.activityBadges.length > 4 ? `<span class="activity-badge-pill more">+${tour.activityBadges.length - 4} More</span>` : ''}
      </div>
    ` : '';

    const buttonLabel = isPremium ? 'Explore Tour' : 'View Full Itinerary';
    const tourLink = `tour-details.html?tour=${tour.slug}`;

    const isGoldTour = isPremium;
    const badgeHtml = isGoldTour ? `
      <span class="badge badge-gold tour-card-badge tour-card-badge-gold" aria-label="Gold Tour Package - Grand Discovery">
        <svg class="gold-badge-crown-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M4 16L2 7L7.5 10.5L12 5L16.5 10.5L22 7L20 16H4Z" fill="url(#goldCrownGrad-${tour.slug})" stroke="#8D6516" stroke-width="0.75" stroke-linejoin="round"/>
          <circle cx="2" cy="7" r="1.3" fill="#FFF9A6" stroke="#8D6516" stroke-width="0.5"/>
          <circle cx="7.5" cy="10.5" r="1.1" fill="#FFF9A6" stroke="#8D6516" stroke-width="0.5"/>
          <circle cx="12" cy="5" r="1.6" fill="#FFFFFF" stroke="#8D6516" stroke-width="0.5"/>
          <circle cx="16.5" cy="10.5" r="1.1" fill="#FFF9A6" stroke="#8D6516" stroke-width="0.5"/>
          <circle cx="22" cy="7" r="1.3" fill="#FFF9A6" stroke="#8D6516" stroke-width="0.5"/>
          <path d="M4 18H20C20.55 18 21 18.45 21 19C21 19.55 20.55 20 20 20H4C3.45 20 3 19.55 3 19C3 18.45 3.45 18 4 18Z" fill="url(#goldCrownGrad-${tour.slug})" stroke="#8D6516" stroke-width="0.5"/>
          <defs>
            <linearGradient id="goldCrownGrad-${tour.slug}" x1="2" y1="5" x2="22" y2="20" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stop-color="#FFF3B0"/>
              <stop offset="25%" stop-color="#FFD700"/>
              <stop offset="60%" stop-color="#D4AF37"/>
              <stop offset="100%" stop-color="#8D6516"/>
            </linearGradient>
          </defs>
        </svg>
        <span class="gold-badge-label">Gold Package &bull; ${tour.badge}</span>
      </span>
    ` : `
      <span class="badge badge-gold tour-card-badge">${tour.badge}</span>
    `;

    card.innerHTML = `
      <div class="tour-card-media">
        <img src="${tour.heroImage}" alt="${tour.title} in Sri Lanka" loading="lazy" width="600" height="375" onerror="this.onerror=null;this.src='assets/images/destinations/sigiriya.jpg';">
        ${badgeHtml}
        <span class="tour-card-duration">${tour.duration}</span>
      </div>
      <div class="tour-card-body">
        <span class="tour-card-category">${tour.category}</span>
        <h3 class="tour-card-title">${tour.title}</h3>
        ${subtitleHtml}
        <div class="tour-card-route">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          <span>${tour.destinationsSummary}</span>
        </div>
        ${badgesHtml}
        <p class="tour-card-desc">${tour.shortDescription}</p>
        <div class="tour-card-highlights">
          ${highlightsPreview}
        </div>
        <div class="tour-card-footer">
          <a href="${tourLink}" class="btn btn-navy btn-sm btn-icon-arrow tour-explore-btn">
            <span>${buttonLabel}</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
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

  const isGoldenPearl = tour.slug === 'golden-pearl-of-sri-lanka';

  // Update page title & meta tags
  document.title = `${tour.title} — ${tour.duration} | SL Mango Exotic Tours`;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    metaDesc.setAttribute('content', `${tour.title}: ${tour.shortDescription}`);
  }

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
    if (isGoldenPearl || tour.isGoldPackage) {
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

    subtitleBlock.innerHTML = `
      ${tour.subtitle ? `<div style="font-family: var(--font-heading); font-size: clamp(1.1rem, 2vw, 1.45rem); font-weight: 500; color: var(--color-ceylon-gold); margin-top: -0.25rem; margin-bottom: 0.75rem; letter-spacing: 0.03em;">${tour.subtitle}</div>` : ''}
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
      </div>
    `;
  }

  // 4. Hydrate Day-by-Day Itinerary (Interactive Expand/Collapse with Photos)
  const itineraryMount = document.getElementById('detail-itinerary-mount');
  if (itineraryMount) {
    itineraryMount.innerHTML = '';

    // Render Itinerary Header Controls (Expand All / Collapse All)
    const controlsBar = document.createElement('div');
    controlsBar.className = 'itinerary-header-bar';
    controlsBar.innerHTML = `
      <div>
        <span style="font-family: var(--font-heading); font-size: 0.85rem; font-weight: 600; color: var(--color-ceylon-gold); text-transform: uppercase; letter-spacing: 0.05em;">Interactive Itinerary</span>
        <div style="font-size: 0.95rem; color: var(--color-text-muted);">Explore all ${tour.days.length} days with verified destination photography & timings.</div>
      </div>
      <div class="itinerary-controls">
        <button type="button" class="itinerary-control-btn active" id="btn-expand-all">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><polyline points="7 13 12 18 17 13"></polyline><polyline points="7 6 12 11 17 6"></polyline></svg>
          <span>Expand All Days</span>
        </button>
        <button type="button" class="itinerary-control-btn" id="btn-collapse-all">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><polyline points="17 11 12 6 7 11"></polyline><polyline points="17 18 12 13 7 18"></polyline></svg>
          <span>Collapse All Days</span>
        </button>
      </div>
    `;
    itineraryMount.appendChild(controlsBar);

    tour.days.forEach(day => {
      const dayEl = document.createElement('div');
      dayEl.className = 'itinerary-day-card';
      dayEl.id = `day-${day.day}`;

      const formattedDayNum = String(day.day).padStart(2, '0');

      // Activities HTML with dedicated photos
      const activitiesHtml = day.activities.map(act => {
        const actPhotosHtml = act.photos && act.photos.length ? `
          <div class="activity-photos-grid">
            ${act.photos.map(p => `
              <div class="activity-photo-item" onclick="openLightbox('${p.src}', '${escapeHtml(p.caption)}', '${escapeHtml(p.alt)}')" role="button" tabindex="0" aria-label="View photo: ${escapeHtml(p.caption)}">
                <img src="${p.src}" alt="${p.alt}" loading="lazy" width="400" height="250" onerror="this.onerror=null;this.src='assets/images/destinations/sigiriya.jpg';">
                <div class="activity-photo-caption">${p.caption}</div>
              </div>
            `).join('')}
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

      // Dedicated Day Visual Highlights (Day Gallery)
      let dayGalleryHtml = '';
      if (day.dayGallery && day.dayGallery.length) {
        const galleryItems = day.dayGallery.map((img, idx) => `
          <div class="day-gallery-item ${idx === 0 ? 'featured' : 'secondary'}" onclick="openLightbox('${img.src}', '${escapeHtml(img.caption)}', '${escapeHtml(img.alt)}')" role="button" tabindex="0" aria-label="View photo: ${escapeHtml(img.caption)}">
            <img src="${img.src}" alt="${img.alt}" loading="lazy" width="600" height="375" onerror="this.onerror=null;this.src='assets/images/destinations/sigiriya.jpg';">
            <div class="day-gallery-overlay">
              <span class="day-gallery-caption">${img.caption}</span>
            </div>
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
              <div>
                <div class="day-meta-tags">
                  <span class="badge badge-gold">DAY ${formattedDayNum}</span>
                  <span class="badge badge-navy">${day.destination}</span>
                  ${day.overnight ? `<span class="badge" style="background:#EBF5F9; color:#123B52; font-weight:500;">Overnight: ${day.overnight}</span>` : ''}
                </div>
                <h3 class="day-title">${day.title}</h3>
                ${day.subtitle ? `<div class="day-subtitle">${day.subtitle}</div>` : ''}
              </div>
              <button class="day-toggle-btn" aria-label="Toggle details for Day ${formattedDayNum}">
                <span class="toggle-text">Collapse</span>
                <svg class="day-toggle-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
            </div>
            <div class="day-preview-strip">
              ${previewThumbnails}
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
          const toggleText = card.querySelector('.toggle-text');
          if (toggleText) toggleText.textContent = 'Collapse';
        });
        btnExpandAll.classList.add('active');
        btnCollapseAll.classList.remove('active');
      });

      btnCollapseAll.addEventListener('click', () => {
        document.querySelectorAll('.itinerary-day-card').forEach(card => {
          card.classList.add('is-collapsed');
          const header = card.querySelector('.day-header');
          if (header) header.setAttribute('aria-expanded', 'false');
          const toggleText = card.querySelector('.toggle-text');
          if (toggleText) toggleText.textContent = 'Expand';
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
    sidebarMount.innerHTML = `
      <div class="enquiry-card-sticky">
        <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:0.85rem;">
          <span class="badge badge-gold">${tour.badge || 'Tailored Private Tour'}</span>
          <img src="assets/images/logo.png" alt="SL Mango Exotic Tours Emblem" style="width:48px; height:auto; filter:drop-shadow(0 2px 6px rgba(200,164,106,0.35));">
        </div>
        <h3 class="enquiry-card-title">${tour.title}</h3>
        <p class="enquiry-card-subtitle">${tour.duration} • Private Executive Journey</p>

        <div class="sidebar-features-list">
          <div class="sidebar-feature-row">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span>National Tourist Guide throughout</span>
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
  const toggleText = dayCardEl.querySelector('.toggle-text');

  if (header) {
    header.setAttribute('aria-expanded', !isCollapsed);
  }
  if (toggleText) {
    toggleText.textContent = isCollapsed ? 'Expand' : 'Collapse';
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

  enquirySection.innerHTML = `
    <div class="container">
      <div class="tour-enquiry-card">
        <div class="tour-enquiry-header">
          <span class="section-tag">Start Planning Your Ceylon Journey</span>
          <h2 class="tour-enquiry-title">Let Your Sri Lankan Story Begin</h2>
          <div class="tour-enquiry-subtitle">Fourteen days. Countless experiences. One unforgettable journey.</div>
          <p style="color: var(--color-text-muted); font-size: 0.95rem; margin-top: 0.5rem; margin-bottom: 0;">
            Share your preferred dates and travel rhythm. Our tour director will personally review your request, customise the itinerary to your wishes, and return a transparent quotation within a few hours.
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
              <label for="enq-phone" class="form-label">WhatsApp / Phone Number</label>
              <input type="tel" id="enq-phone" name="phone" class="form-control" placeholder="e.g. +44 7911 123456">
            </div>

            <div class="form-group">
              <label for="enq-dates" class="form-label">Preferred Travel Dates</label>
              <input type="text" id="enq-dates" name="dates" class="form-control" placeholder="e.g. November 2026 / 14 Days">
            </div>

            <div class="form-group">
              <label for="enq-travellers" class="form-label">Number of Travellers</label>
              <select id="enq-travellers" name="travellers" class="form-control">
                <option value="2 Adults (Couple)" selected>2 Adults (Couple / Honeymoon)</option>
                <option value="1 Adult (Solo Traveller)">1 Adult (Solo Traveller)</option>
                <option value="3-4 Persons (Family / Friends)">3–4 Persons (Family / Friends)</option>
                <option value="5-8 Persons (Small Group)">5–8 Persons (Small Group)</option>
                <option value="8+ Persons (Private Group Tour)">8+ Persons (Private Group Tour)</option>
              </select>
            </div>

            <div class="form-group">
              <label for="enq-accommodation" class="form-label">Preferred Accommodation Category</label>
              <select id="enq-accommodation" name="accommodation" class="form-control">
                <option value="3-Star Standard & Above (Included in Package)" selected>3-Star Standard &amp; Above (Included in Package)</option>
                <option value="4-Star Premium Comfort (Upgrade Request)">4-Star Premium Comfort (Upgrade Request)</option>
                <option value="5-Star Luxury / Boutique Resorts (Upgrade Request)">5-Star Luxury / Boutique Resorts (Upgrade Request)</option>
              </select>
            </div>

            <div class="form-group tour-enquiry-full">
              <label for="enq-requests" class="form-label">Additional Requests or Tailoring Preferences</label>
              <textarea id="enq-requests" name="requests" class="form-control" rows="4" placeholder="Tell us about your interests: e.g. special dietary needs, community school visit participation, room preferences, extra beach relaxation, or photography focus..."></textarea>
            </div>
          </div>

          <div class="enquiry-action-row">
            <button type="submit" class="btn btn-primary btn-lg btn-icon-arrow" id="btn-submit-enquiry">
              <span>Request Your Tour</span>
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
            <span>Direct Sri Lankan tour operator • 100% bespoke tailoring • No hidden reservation charges</span>
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
      const datesInput = document.getElementById('enq-dates');
      const travellersSelect = document.getElementById('enq-travellers');
      const accomSelect = document.getElementById('enq-accommodation');
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
        phone: phoneInput ? phoneInput.value.trim() : 'Not provided',
        dates: datesInput && datesInput.value.trim() ? datesInput.value.trim() : 'Flexible',
        travellers: travellersSelect ? travellersSelect.value : '2 Adults',
        accommodation: accomSelect ? accomSelect.value : '3-Star Standard',
        requests: requestsInput && requestsInput.value.trim() ? requestsInput.value.trim() : 'None specified',
        interest: tour.title
      };

      const formattedText = 
`*NEW TOUR ENQUIRY — SL MANGO EXOTIC TOURS*
----------------------------------------
*Tour Package:* ${tour.title} (${tour.duration})
*Client Name:* ${payload.name}
*Email:* ${payload.email}
*Phone / WhatsApp:* ${payload.phone}
*Proposed Dates:* ${payload.dates}
*Number of Travellers:* ${payload.travellers}
*Accommodation Category:* ${payload.accommodation}

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
