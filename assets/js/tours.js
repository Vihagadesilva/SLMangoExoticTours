/**
 * SL MANGO EXOTIC TOURS — TOURS ENGINE
 * 
 * Manages tour catalog rendering, category filtering, and the dedicated
 * long-form Tour Details experience with rich day-by-day itineraries,
 * activity photos, day galleries, and seamless enquiry prefilling.
 */

document.addEventListener('DOMContentLoaded', () => {
  // If on tours.html or homepage with #tours-grid mount
  initToursCatalog();

  // If on tour-details.html
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
  // If home featured, display 3-4 top packages; if catalog, display all 8
  const toursToRender = isHomeFeatured ? TOURS_DATA.slice(0, 3) : TOURS_DATA;

  renderTourCards(mount, toursToRender);

  // Filter tabs on tours.html
  const filterBtns = document.querySelectorAll('.filter-btn[data-category]');
  if (filterBtns.length) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const cat = btn.getAttribute('data-category');
        if (cat === 'all') {
          renderTourCards(mount, TOURS_DATA);
        } else {
          const filtered = TOURS_DATA.filter(t => t.categorySlug === cat || t.category.toLowerCase().includes(cat));
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
    card.className = 'tour-card';
    card.setAttribute('data-category', tour.categorySlug);

    const highlightsPreview = tour.highlights.slice(0, 3).map(h => `
      <div class="tour-highlight-item">${h}</div>
    `).join('');

    card.innerHTML = `
      <div class="tour-card-media">
        <img src="${tour.heroImage}" alt="${tour.title} in Sri Lanka" loading="lazy" width="600" height="375">
        <span class="badge badge-gold tour-card-badge">${tour.badge}</span>
        <span class="tour-card-duration">${tour.duration}</span>
      </div>
      <div class="tour-card-body">
        <span class="tour-card-category">${tour.category}</span>
        <h3 class="tour-card-title">${tour.title}</h3>
        <div class="tour-card-route">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          <span>${tour.destinationsSummary}</span>
        </div>
        <p class="tour-card-desc">${tour.shortDescription}</p>
        <div class="tour-card-highlights">
          ${highlightsPreview}
        </div>
        <div class="tour-card-footer">
          <a href="tour-details.html?tour=${tour.slug}" class="btn btn-navy btn-sm btn-icon-arrow">
            <span>View Full Itinerary</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    `;

    container.appendChild(card);
  });
}

/**
 * Hydrates the long-form Tour Details Page (tour-details.html)
 */
function initTourDetailPage() {
  if (typeof TOURS_DATA === 'undefined') return;

  const urlParams = new URLSearchParams(window.location.search);
  const slug = urlParams.get('tour') || 'classic-sri-lanka';

  // Find matching tour
  let tour = TOURS_DATA.find(t => t.slug === slug);
  if (!tour) {
    tour = TOURS_DATA[0]; // Fallback to Classic Sri Lanka
  }

  // Update page title & meta
  document.title = `${tour.title} — ${tour.duration} | SL Mango Exotic Tours`;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    metaDesc.setAttribute('content', `${tour.title}: ${tour.shortDescription}`);
  }

  // 1. Hydrate Hero
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
  if (heroBadge) heroBadge.textContent = tour.category;
  if (heroDuration) heroDuration.textContent = tour.duration;
  if (heroLead) heroLead.textContent = tour.shortDescription;
  if (heroBg) {
    heroBg.src = tour.heroImage;
    heroBg.alt = `${tour.title} Cover Scene`;
  }
  if (heroCta) {
    heroCta.href = `contact.html?tour=${tour.slug}`;
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

  // 3. Hydrate Overview & Highlights
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
      </div>
    `;
  }

  // 4. Hydrate Day-by-Day Itinerary (Mandatory Core Feature)
  const itineraryMount = document.getElementById('detail-itinerary-mount');
  if (itineraryMount) {
    itineraryMount.innerHTML = '';

    tour.days.forEach(day => {
      const dayEl = document.createElement('div');
      dayEl.className = 'itinerary-day-card';
      dayEl.id = `day-${day.day}`;

      // Format Day number like '01', '02'
      const formattedDayNum = String(day.day).padStart(2, '0');

      // Activities HTML
      const activitiesHtml = day.activities.map(act => {
        // Activity photos
        const actPhotosHtml = act.photos && act.photos.length ? `
          <div class="activity-photos-grid">
            ${act.photos.map(p => `
              <div class="activity-photo-item" onclick="openLightbox('${p.src}', '${escapeHtml(p.caption)}', '${escapeHtml(p.alt)}')">
                <img src="${p.src}" alt="${p.alt}" loading="lazy" width="400" height="250">
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

      // Dedicated Day Activity Gallery HTML
      let dayGalleryHtml = '';
      if (day.dayGallery && day.dayGallery.length) {
        const galleryItems = day.dayGallery.map((img, idx) => `
          <div class="day-gallery-item ${idx === 0 ? 'featured' : 'secondary'}" onclick="openLightbox('${img.src}', '${escapeHtml(img.caption)}', '${escapeHtml(img.alt)}')">
            <img src="${img.src}" alt="${img.alt}" loading="lazy" width="600" height="375">
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

      dayEl.innerHTML = `
        <div class="day-marker">
          <div class="day-marker-node">
            <span class="node-day">DAY</span>
            <span class="node-num">${formattedDayNum}</span>
          </div>
        </div>
        <div class="day-content-card">
          <div class="day-header">
            <div class="day-meta-tags">
              <span class="badge badge-gold">DAY ${formattedDayNum}</span>
              <span class="badge badge-navy">${day.destination}</span>
            </div>
            <h3 class="day-title">${day.title}</h3>
          </div>

          <p class="day-intro">${day.introduction}</p>

          <div class="day-activities-list">
            ${activitiesHtml}
          </div>

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
      `;

      itineraryMount.appendChild(dayEl);
    });
  }

  // 5. Hydrate Inclusions & Exclusions
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
    `;
  }

  // 6. Hydrate Sticky Sidebar
  const sidebarMount = document.getElementById('detail-sidebar-mount');
  if (sidebarMount) {
    sidebarMount.innerHTML = `
      <div class="enquiry-card-sticky">
        <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:0.85rem;">
          <span class="badge badge-gold">Tailored Private Tour</span>
          <img src="assets/images/logo.png" alt="SL Mango Exotic Tours Emblem" style="width:48px; height:auto; filter:drop-shadow(0 2px 6px rgba(200,164,106,0.35));">
        </div>
        <h3 class="enquiry-card-title">Enquire for This Journey</h3>
        <p class="enquiry-card-subtitle">Customized to your travel dates, preferred hotels, and pace.</p>

        <div class="sidebar-features-list">
          <div class="sidebar-feature-row">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span>Private chauffeur-guide & dedicated vehicle</span>
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
            <span>Transparent pricing with no hidden charges</span>
          </div>
          <div class="sidebar-feature-row">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span>Direct operator support (No middlemen)</span>
          </div>
        </div>

        <a href="contact.html?tour=${tour.slug}" class="btn btn-primary btn-lg" style="width: 100%; text-align: center; margin-bottom: 0.75rem;">
          Plan This Itinerary
        </a>

        <a href="https://wa.me/${SITE_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(`Hello SL Mango Exotic Tours, I am interested in the ${tour.title} package (${tour.duration}). Could you please share more details?`)}" 
           target="_blank" rel="noopener noreferrer" 
           class="btn btn-secondary btn-sm" style="width: 100%; text-align: center;">
          Chat on WhatsApp
        </a>

        <div class="sidebar-contact-direct">
          Prefer to talk? Call us at <br>
          <a href="tel:${SITE_CONFIG.contact.phoneTel}">${SITE_CONFIG.contact.phoneDisplay}</a>
        </div>
      </div>
    `;
  }

  // 7. Hydrate Related Tours
  const relatedMount = document.getElementById('detail-related-mount');
  if (relatedMount) {
    const relatedTours = TOURS_DATA.filter(t => t.slug !== tour.slug).slice(0, 2);
    renderTourCards(relatedMount, relatedTours);
  }
}

function escapeHtml(text) {
  if (!text) return '';
  return text.replace(/'/g, "\\'").replace(/"/g, '&quot;');
}
