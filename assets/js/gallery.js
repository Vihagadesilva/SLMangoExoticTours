/**
 * SL MANGO EXOTIC TOURS — GALLERY & LIGHTBOX ENGINE
 * 
 * Manages photo gallery filtering, responsive masonry/grid rendering,
 * and the accessible, keyboard-controlled Lightbox modal with next/prev controls.
 */

let currentLightboxIndex = 0;
let activeGallerySet = [];

document.addEventListener('DOMContentLoaded', () => {
  initGalleryPage();
  createLightboxModal();
});

/**
 * Initializes the full gallery page if #gallery-grid-mount exists
 */
function initGalleryPage() {
  const mount = document.getElementById('gallery-grid-mount');
  if (!mount || typeof GALLERY_DATA === 'undefined') return;

  activeGallerySet = [...GALLERY_DATA];
  renderGalleryGrid(mount, activeGallerySet);

  // Category filter tabs on gallery.html
  const filterBtns = document.querySelectorAll('.gallery-filter-btn[data-category]');
  if (filterBtns.length) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const cat = btn.getAttribute('data-category');
        if (cat === 'all') {
          activeGallerySet = [...GALLERY_DATA];
        } else {
          activeGallerySet = GALLERY_DATA.filter(item => item.category === cat);
        }

        renderGalleryGrid(mount, activeGallerySet);

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
 * Renders gallery cards into the mount container
 */
function renderGalleryGrid(container, items) {
  container.innerHTML = '';

  if (!items.length) {
    container.innerHTML = `<div class="no-photos-found"><p>No photographs found in this category.</p></div>`;
    return;
  }

  items.forEach((item, index) => {
    const card = document.createElement('div');
    card.className = 'gallery-card';
    card.setAttribute('data-index', index);
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `View photograph: ${item.title}`);

    card.innerHTML = `
      <img src="${item.thumb}" alt="${item.alt}" loading="lazy" width="600" height="450">
      <div class="gallery-card-overlay">
        <h4 class="gallery-card-title">${item.title}</h4>
        <span class="gallery-card-location">${item.location}</span>
      </div>
    `;

    card.addEventListener('click', () => {
      openLightboxByIndex(index, items);
    });

    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openLightboxByIndex(index, items);
      }
    });

    container.appendChild(card);
  });
}

/**
 * Creates the Lightbox Modal DOM structure
 */
function createLightboxModal() {
  if (document.querySelector('.lightbox-modal')) return;

  const modal = document.createElement('div');
  modal.className = 'lightbox-modal';
  modal.setAttribute('role', 'dialog');
  modal.setAttribute('aria-modal', 'true');
  modal.setAttribute('aria-label', 'Image preview');

  modal.innerHTML = `
    <div class="lightbox-dialog">
      <button class="lightbox-close-btn" aria-label="Close lightbox">&times;</button>
      <button class="lightbox-nav-btn lightbox-nav-prev" aria-label="Previous photograph">
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>
      <div class="lightbox-image-wrap">
        <img src="" alt="" id="lightbox-active-img">
      </div>
      <button class="lightbox-nav-btn lightbox-nav-next" aria-label="Next photograph">
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>
      <div class="lightbox-caption-box">
        <h4 class="lightbox-caption-title" id="lightbox-caption-title"></h4>
        <p class="lightbox-caption-text" id="lightbox-caption-text"></p>
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  // Close button listener
  modal.querySelector('.lightbox-close-btn').addEventListener('click', closeLightbox);

  // Outside click to close
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeLightbox();
    }
  });

  // Next / Prev buttons
  modal.querySelector('.lightbox-nav-prev').addEventListener('click', (e) => {
    e.stopPropagation();
    navigateLightbox(-1);
  });

  modal.querySelector('.lightbox-nav-next').addEventListener('click', (e) => {
    e.stopPropagation();
    navigateLightbox(1);
  });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('is-open')) return;

    if (e.key === 'Escape') {
      closeLightbox();
    } else if (e.key === 'ArrowLeft') {
      navigateLightbox(-1);
    } else if (e.key === 'ArrowRight') {
      navigateLightbox(1);
    }
  });
}

/**
 * Opens Lightbox by array index from a specific dataset
 */
function openLightboxByIndex(index, dataset = activeGallerySet) {
  if (!dataset || !dataset[index]) return;

  activeGallerySet = dataset;
  currentLightboxIndex = index;
  const item = dataset[index];

  openLightbox(item.image, item.title, item.caption || item.location);
}

/**
 * Standalone global function to open any image in the Lightbox
 */
function openLightbox(src, title = '', caption = '') {
  let modal = document.querySelector('.lightbox-modal');
  if (!modal) {
    createLightboxModal();
    modal = document.querySelector('.lightbox-modal');
  }

  const img = document.getElementById('lightbox-active-img');
  const titleEl = document.getElementById('lightbox-caption-title');
  const textEl = document.getElementById('lightbox-caption-text');
  const prevBtn = modal.querySelector('.lightbox-nav-prev');
  const nextBtn = modal.querySelector('.lightbox-nav-next');

  if (img) {
    img.src = src;
    img.alt = title || 'Sri Lanka Photograph';
  }
  if (titleEl) titleEl.textContent = title;
  if (textEl) textEl.textContent = caption;

  // Show navigation buttons only if more than 1 item in active set
  const hasNav = activeGallerySet && activeGallerySet.length > 1;
  if (prevBtn) prevBtn.style.display = hasNav ? 'flex' : 'none';
  if (nextBtn) nextBtn.style.display = hasNav ? 'flex' : 'none';

  modal.classList.add('is-open');
  document.body.style.overflow = 'hidden';
}

/**
 * Closes the Lightbox Modal
 */
function closeLightbox() {
  const modal = document.querySelector('.lightbox-modal');
  if (modal) {
    modal.classList.remove('is-open');
    document.body.style.overflow = '';
  }
}

/**
 * Navigates to previous or next photo in active set
 */
function navigateLightbox(direction) {
  if (!activeGallerySet || !activeGallerySet.length) return;

  currentLightboxIndex = (currentLightboxIndex + direction + activeGallerySet.length) % activeGallerySet.length;
  const item = activeGallerySet[currentLightboxIndex];

  const img = document.getElementById('lightbox-active-img');
  const titleEl = document.getElementById('lightbox-caption-title');
  const textEl = document.getElementById('lightbox-caption-text');

  if (img) {
    img.src = item.image;
    img.alt = item.title;
  }
  if (titleEl) titleEl.textContent = item.title;
  if (textEl) textEl.textContent = item.caption || item.location;
}
