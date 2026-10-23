/**
 * SL MANGO EXOTIC TOURS — GLOBAL APPLICATION SCRIPT
 * 
 * Handles global navigation, sticky header transitions, mobile menu drawer,
 * shared gallery preview rendering, toast notifications, and common utilities.
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initMobileNav();
  initHeroVideo();
  initWondersOfCeylon();
  initSharedGalleryPreviews();
  initCurrentYear();
});

/**
 * Sticky Header on Scroll
 */
function initHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Trigger initial state
}

/**
 * Mobile Navigation Drawer & Backdrop
 */
function initMobileNav() {
  const toggleBtn = document.querySelector('.mobile-menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  let backdrop = document.querySelector('.nav-backdrop');

  if (!toggleBtn || !navMenu) return;

  // Create backdrop element if not already in DOM
  if (!backdrop) {
    backdrop = document.createElement('div');
    backdrop.className = 'nav-backdrop';
    document.body.appendChild(backdrop);
  }

  const openMenu = () => {
    toggleBtn.classList.add('is-active');
    toggleBtn.setAttribute('aria-expanded', 'true');
    navMenu.classList.add('is-open');
    backdrop.classList.add('is-visible');
    document.body.style.overflow = 'hidden';
  };

  const closeMenu = () => {
    toggleBtn.classList.remove('is-active');
    toggleBtn.setAttribute('aria-expanded', 'false');
    navMenu.classList.remove('is-open');
    backdrop.classList.remove('is-visible');
    document.body.style.overflow = '';
  };

  toggleBtn.addEventListener('click', () => {
    const isOpen = navMenu.classList.contains('is-open');
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  backdrop.addEventListener('click', closeMenu);

  // Close menu when clicking any nav link
  navMenu.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('is-open')) {
      closeMenu();
    }
  });
}

/**
 * Curated Sri Lankan destinations for the Floating 3D Carousel
 */
const FLOATING_3D_DESTINATIONS = [
  {
    id: "3d-sigiriya",
    title: "Sigiriya Lion Rock Citadel",
    region: "Central Province",
    pill: "UNESCO World Heritage",
    image: "assets/images/destinations/sigiriya.jpg",
    desc: "A colossal 5th-century royal sky citadel rising 200 metres above emerald jungle canopies with ancient frescoes and landscaped water gardens.",
    caption: "The 5th-century royal sky fortress of King Kashyapa viewed through morning mist."
  },
  {
    id: "3d-ella",
    title: "The Nine Arch Bridge",
    region: "Central Highlands",
    pill: "Highland Pass",
    image: "assets/images/destinations/ella.jpg",
    desc: "Iconic colonial stone viaduct engineering hidden deep within the verdant tea valleys and mountain forests of Demodara.",
    caption: "Colonial stone engineering hidden deep within the verdant hills of Demodara."
  },
  {
    id: "3d-galle",
    title: "Galle Fort Ramparts",
    region: "Southern Coast",
    pill: "Colonial Bastion",
    image: "assets/images/destinations/galle.jpg",
    desc: "400-year-old living maritime fortifications enclosing cobblestone alleys, artisan studios, and panoramic Indian Ocean bastions.",
    caption: "17th-century Dutch maritime fortifications meeting the turquoise Indian Ocean."
  },
  {
    id: "3d-mirissa",
    title: "Coconut Tree Hill",
    region: "Southern Coast",
    pill: "Coastal Haven",
    image: "assets/images/destinations/mirissa.jpg",
    desc: "Picturesque red-earth bluff crowned by curving coconut palms overlooking the turquoise surf and golden beaches of Mirissa Bay.",
    caption: "Iconic ocean promontory overlooking the breaking surf of Mirissa Bay."
  },
  {
    id: "3d-nuwara-eliya",
    title: "Nuwara Eliya Tea Terraces",
    region: "Central Highlands",
    pill: "Ceylon Tea Country",
    image: "assets/images/destinations/nuwara-eliya.jpg",
    desc: "Cool mountain cloud forests wrapped in velvet emerald estates where pure Ceylon tea leaves are hand-plucked in morning mist.",
    caption: "High-grown Ceylon tea estates where the world's most aromatic tea leaves are nurtured."
  },
  {
    id: "3d-yala",
    title: "Wild Leopard in Yala",
    region: "Southern Province",
    pill: "Wildlife Safari",
    image: "assets/images/destinations/yala.jpg",
    desc: "Dry-zone forest and coastal scrublands hosting the world's highest density of wild leopards, Asian elephants, and sloth bears.",
    caption: "Panthera pardus kotiya, the apex predator of the island, camouflaged on a sunlit rock."
  },
  {
    id: "3d-train",
    title: "Highland Mountain Railway",
    region: "Kandy to Ella",
    pill: "Scenic Rail Journey",
    image: "assets/images/destinations/scenic-train.jpg",
    desc: "The world-famous scenic blue train journey curving through dramatic mountain ridges, eucalyptus cloud forests, and tea hills.",
    caption: "The world-famous rail route climbing through misty cloud forests and cascading waterfalls."
  }
];

/**
 * Initializes and mounts the Floating Cinematic 3D Horizontal Gallery Carousel
 */
function initFloating3DGallery() {
  const mounts = document.querySelectorAll('.floating-3d-gallery-mount, .shared-gallery-preview-mount');
  if (!mounts.length) return;

  const items = FLOATING_3D_DESTINATIONS;
  const total = items.length;

  mounts.forEach(mount => {
    let activeIndex = 0;
    let autoplayTimer = null;
    let isDragging = false;
    let dragStartX = 0;
    let dragDeltaX = 0;

    // Create 3D Stage Markup
    const stage = document.createElement('div');
    stage.className = 'gallery-3d-stage';
    stage.setAttribute('role', 'region');
    stage.setAttribute('aria-roledescription', 'carousel');
    stage.setAttribute('aria-label', 'Sri Lanka Floating 3D Destination Gallery');
    stage.tabIndex = 0;

    stage.innerHTML = `
      <button class="gallery-3d-nav-btn gallery-3d-nav-prev" aria-label="Previous destination" title="Previous destination">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>

      <div class="gallery-3d-viewport"></div>

      <button class="gallery-3d-nav-btn gallery-3d-nav-next" aria-label="Next destination" title="Next destination">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>

      <div class="gallery-3d-pagination" role="tablist" aria-label="Destination slides"></div>
    `;

    const viewport = stage.querySelector('.gallery-3d-viewport');
    const pagination = stage.querySelector('.gallery-3d-pagination');
    const prevBtn = stage.querySelector('.gallery-3d-nav-prev');
    const nextBtn = stage.querySelector('.gallery-3d-nav-next');

    // Build Cards & Pagination Dots
    items.forEach((item, index) => {
      // 1. Card
      const card = document.createElement('article');
      card.className = 'gallery-3d-card';
      card.setAttribute('data-index', index);
      card.setAttribute('aria-label', `${item.title} — ${item.region}`);

      card.innerHTML = `
        <div class="gallery-3d-card-inner">
          <div class="gallery-3d-media-frame">
            <img src="${item.image}" alt="${item.title}" loading="lazy" width="400" height="520">
            <div class="gallery-3d-overlay"></div>
          </div>

          <div class="gallery-3d-badge-row">
            <span class="gallery-3d-tag">${item.region}</span>
            <span class="gallery-3d-pill">${item.pill}</span>
          </div>

          <div class="gallery-3d-content">
            <h3 class="gallery-3d-title">${item.title}</h3>
            <p class="gallery-3d-desc">${item.desc}</p>
            <div class="gallery-3d-footer">
              <span class="gallery-3d-action-btn" role="button" tabindex="0">
                <span>View Full Photo</span>
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </span>
            </div>
          </div>
        </div>
      `;

      viewport.appendChild(card);

      // 2. Pagination Dot
      const dot = document.createElement('button');
      dot.className = `gallery-3d-dot ${index === 0 ? 'is-active' : ''}`;
      dot.setAttribute('role', 'tab');
      dot.setAttribute('aria-label', `Go to destination ${index + 1}: ${item.title}`);
      dot.setAttribute('aria-selected', index === 0 ? 'true' : 'false');
      dot.addEventListener('click', () => goTo(index));
      pagination.appendChild(dot);
    });

    const cardElements = viewport.querySelectorAll('.gallery-3d-card');
    const dotElements = pagination.querySelectorAll('.gallery-3d-dot');

    /**
     * Compute and apply 3D positions, rotations, scaling, and z-indices
     */
    function updateTransforms(tiltX = 0, tiltY = 0) {
      const isMobile = window.innerWidth <= 768;
      const spacingX = isMobile ? 74 : 64;
      const depthZ = isMobile ? 80 : 110;
      const rotY = isMobile ? 14 : 18;

      cardElements.forEach((card, i) => {
        let diff = i - activeIndex;

        // Circular loop offset calculation
        if (diff > total / 2) diff -= total;
        if (diff < -total / 2) diff += total;

        const absDiff = Math.abs(diff);

        if (absDiff === 0) {
          // Center Active Card
          const calcTiltX = tiltX * 7;
          const calcTiltY = -tiltY * 5;
          card.style.transform = `translateX(0%) translateZ(0px) rotateY(${calcTiltX}deg) rotateX(${calcTiltY}deg) scale(1)`;
          card.style.opacity = '1';
          card.style.zIndex = '12';
          card.style.filter = 'none';
          card.style.pointerEvents = 'auto';
          card.classList.add('is-active');
          card.setAttribute('aria-hidden', 'false');
        } else if (absDiff === 1) {
          // Immediate Flanking Cards
          const translateX = diff * spacingX;
          const rotateAngle = -diff * rotY;
          card.style.transform = `translateX(${translateX}%) translateZ(-${depthZ}px) rotateY(${rotateAngle}deg) scale(0.88)`;
          card.style.opacity = isMobile ? '0.65' : '0.78';
          card.style.zIndex = '8';
          card.style.filter = 'brightness(0.85)';
          card.style.pointerEvents = 'auto';
          card.classList.remove('is-active');
          card.setAttribute('aria-hidden', 'false');
        } else if (absDiff === 2) {
          // Secondary Flanking Cards
          const translateX = diff * (spacingX * 1.85);
          const rotateAngle = -diff * (rotY * 1.6);
          card.style.transform = `translateX(${translateX}%) translateZ(-${depthZ * 2}px) rotateY(${rotateAngle}deg) scale(0.76)`;
          card.style.opacity = isMobile ? '0' : '0.35';
          card.style.zIndex = '4';
          card.style.filter = 'brightness(0.65)';
          card.style.pointerEvents = isMobile ? 'none' : 'auto';
          card.classList.remove('is-active');
          card.setAttribute('aria-hidden', isMobile ? 'true' : 'false');
        } else {
          // Beyond visible horizon
          const dir = diff > 0 ? 1 : -1;
          card.style.transform = `translateX(${dir * 220}%) translateZ(-350px) scale(0.6)`;
          card.style.opacity = '0';
          card.style.zIndex = '1';
          card.style.pointerEvents = 'none';
          card.classList.remove('is-active');
          card.setAttribute('aria-hidden', 'true');
        }
      });

      // Update Pagination Dots
      dotElements.forEach((dot, idx) => {
        const isActive = idx === activeIndex;
        dot.classList.toggle('is-active', isActive);
        dot.setAttribute('aria-selected', isActive ? 'true' : 'false');
      });
    }

    function goTo(index) {
      activeIndex = (index + total) % total;
      updateTransforms();
    }

    function next() {
      goTo(activeIndex + 1);
    }

    function prev() {
      goTo(activeIndex - 1);
    }

    // Card Click: if active, open Lightbox; if flanking, center card
    cardElements.forEach((card, idx) => {
      card.addEventListener('click', (e) => {
        if (idx === activeIndex) {
          const item = items[idx];
          if (typeof openLightbox === 'function') {
            openLightbox(item.image, item.title, item.caption);
          }
        } else {
          e.preventDefault();
          goTo(idx);
        }
      });

      // Action button inside card
      const actionBtn = card.querySelector('.gallery-3d-action-btn');
      if (actionBtn) {
        actionBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          const item = items[idx];
          if (typeof openLightbox === 'function') {
            openLightbox(item.image, item.title, item.caption);
          }
        });
      }
    });

    // Arrow Button Handlers
    prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      prev();
      pauseAutoplayBriefly();
    });

    nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      next();
      pauseAutoplayBriefly();
    });

    // Keyboard Arrow Navigation
    stage.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prev();
        pauseAutoplayBriefly();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        next();
        pauseAutoplayBriefly();
      }
    });

    // Touch & Pointer Drag Gestures
    viewport.addEventListener('pointerdown', (e) => {
      isDragging = true;
      dragStartX = e.clientX;
      dragDeltaX = 0;
      stopAutoplay();
    });

    viewport.addEventListener('pointermove', (e) => {
      if (!isDragging) return;
      dragDeltaX = e.clientX - dragStartX;
    });

    const handlePointerEnd = () => {
      if (!isDragging) return;
      isDragging = false;
      if (dragDeltaX > 40) {
        prev();
      } else if (dragDeltaX < -40) {
        next();
      }
      pauseAutoplayBriefly();
    };

    viewport.addEventListener('pointerup', handlePointerEnd);
    viewport.addEventListener('pointercancel', handlePointerEnd);

    // Dynamic 3D Mouse Parallax Tilt on Active Card
    stage.addEventListener('mousemove', (e) => {
      if (isDragging) return;
      const rect = stage.getBoundingClientRect();
      const normX = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
      const normY = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
      updateTransforms(Math.max(-1, Math.min(1, normX)), Math.max(-1, Math.min(1, normY)));
    });

    stage.addEventListener('mouseleave', () => {
      updateTransforms(0, 0);
      startAutoplay();
    });

    stage.addEventListener('mouseenter', stopAutoplay);
    stage.addEventListener('focusin', stopAutoplay);
    stage.addEventListener('focusout', startAutoplay);

    // Autoplay Engine (5.5s intervals)
    function startAutoplay() {
      stopAutoplay();
      autoplayTimer = setInterval(next, 5500);
    }

    function stopAutoplay() {
      if (autoplayTimer) {
        clearInterval(autoplayTimer);
        autoplayTimer = null;
      }
    }

    function pauseAutoplayBriefly() {
      stopAutoplay();
      clearTimeout(window.__gallery3dPauseTimeout);
      window.__gallery3dPauseTimeout = setTimeout(startAutoplay, 7000);
    }

    // Responsive window resize
    window.addEventListener('resize', () => {
      updateTransforms();
    }, { passive: true });

    // Mount to DOM
    mount.innerHTML = '';
    mount.appendChild(stage);

    // Initial 3D positioning & autoplay startup
    updateTransforms();
    startAutoplay();
  });
}

/**
 * Shared Gallery Preview initializer (bridges to 3D carousel)
 */
function initSharedGalleryPreviews() {
  initFloating3DGallery();
}

/**
 * Curated Collection of Sri Lanka's 12 Most Famous Attractions
 * "The Wonders of Ceylon" Editorial Travel Journal
 */
const WONDERS_OF_CEYLON_DATA = [
  {
    id: "sigiriya",
    number: "01",
    name: "Sigiriya Rock Fortress",
    category: "heritage",
    categoryLabel: "Heritage",
    location: "Central Province (Matale District)",
    eyebrow: "5th-Century Ancient Sky Citadel",
    image: "assets/images/destinations/sigiriya.jpg",
    alt: "Sigiriya Lion Rock Citadel rising above emerald forests",
    desc: "An astonishing 200-metre sheer granite column transformed by King Kashyapa in the 5th century into an audacious royal citadel, featuring ancient frescoes, polished mirror walls, and landscaped pleasure water gardens.",
    facts: [
      { value: "200 Metres", label: "CITADEL HEIGHT" },
      { value: "477–495 CE", label: "ERA FOUNDED" },
      { value: "UNESCO", label: "WORLD HERITAGE" }
    ],
    link: "tours.html?destination=sigiriya"
  },
  {
    id: "kandy-tooth",
    number: "02",
    name: "Temple of the Sacred Tooth Relic",
    category: "temples",
    categoryLabel: "Temples",
    location: "Central Province (Kandy)",
    eyebrow: "Sacred Shrine of the Buddha's Relic",
    image: "assets/images/destinations/kandy.jpg",
    alt: "Temple of the Sacred Tooth Relic beside Kandy Lake",
    desc: "Sri Lanka's most venerated Buddhist pilgrimage site, nestled beside tranquil Kandy Lake, preserving the sacred left canine tooth relic of Gautama Buddha within seven gold, jewel-encrusted reliquaries.",
    facts: [
      { value: "Sri Dalada", label: "SINHALESE NAME" },
      { value: "Last Kingdom", label: "ROYAL CAPITAL" },
      { value: "UNESCO", label: "WORLD HERITAGE" }
    ],
    link: "tours.html?destination=kandy"
  },
  {
    id: "nine-arch",
    number: "03",
    name: "Nine Arch Bridge, Ella",
    category: "mountains",
    categoryLabel: "Mountains",
    location: "Uva Province (Demodara, Ella)",
    eyebrow: "Iconic Colonial Viaduct in Cloud Forest",
    image: "assets/images/destinations/ella.jpg",
    alt: "Colonial stone Nine Arch Bridge curving through tea hills in Ella",
    desc: "A triumph of early 20th-century colonial railway engineering constructed entirely of hand-hewn stone, brick, and cement without structural steel, curving gracefully 300 feet through verdant mountain tea forests.",
    facts: [
      { value: "300 Feet", label: "SPAN LENGTH" },
      { value: "1921 CE", label: "COMMISSION YEAR" },
      { value: "Demodara Loop", label: "HIGHLAND RAIL" }
    ],
    link: "tours.html?destination=ella"
  },
  {
    id: "galle-fort",
    number: "04",
    name: "Galle Fort and Lighthouse",
    category: "heritage",
    categoryLabel: "Heritage",
    location: "Southern Province (Galle Bay)",
    eyebrow: "17th-Century Living Maritime Bastion",
    image: "assets/images/destinations/galle.jpg",
    alt: "Galle Fort Lighthouse and historic Dutch ocean ramparts",
    desc: "A living 400-year-old European maritime fortress where massive coral-stone ramparts and an iconic 1939 lighthouse enclose cobblestone alleys, Dutch colonial villas, and panoramic Indian Ocean bastions.",
    facts: [
      { value: "1663 CE", label: "DUTCH FORTRESS" },
      { value: "14 Bastions", label: "STONE DEFENSES" },
      { value: "UNESCO", label: "WORLD HERITAGE" }
    ],
    link: "tours.html?destination=galle"
  },
  {
    id: "dambulla",
    number: "05",
    name: "Dambulla Cave Temple",
    category: "temples",
    categoryLabel: "Temples",
    location: "Central Province (Matale District)",
    eyebrow: "Ancient Rock Cave Monasteries",
    image: "assets/images/destinations/dambulla.jpg",
    alt: "Dambulla Rock Cave Temple sanctuary and statues",
    desc: "The largest and best-preserved cave monastery complex in Sri Lanka, spanning five sanctuaries beneath a towering 160-metre rock overhang, housing 157 sacred statues and 2,100 square metres of vibrant ceiling murals.",
    facts: [
      { value: "5 Sanctuaries", label: "CAVE MONASTERIES" },
      { value: "1st Century BCE", label: "FOUNDING ERA" },
      { value: "UNESCO", label: "WORLD HERITAGE" }
    ],
    link: "tours.html?destination=dambulla"
  },
  {
    id: "adams-peak",
    number: "06",
    name: "Adam’s Peak (Sri Pada)",
    category: "mountains",
    categoryLabel: "Mountains",
    location: "Sabaragamuwa Province (Central Highlands)",
    eyebrow: "Sacred Mountain of the Sacred Footprint",
    image: "assets/images/destinations/adams-peak.jpg",
    alt: "Adam's Peak Sri Pada conical mountain pyramid at sunrise above clouds",
    desc: "A holy 2,243-metre pyramid mountain sacred to Buddhists, Hindus, Muslims, and Christians, famous for nighttime pilgrimage climbs through cloud forests and the surreal triangular shadow cast at dawn.",
    facts: [
      { value: "2,243 Metres", label: "SUMMIT PEAK" },
      { value: "5,500 Steps", label: "PILGRIMAGE PATH" },
      { value: "Sri Pada", label: "SACRED FOOTPRINT" }
    ],
    link: "tours.html?destination=adams-peak"
  },
  {
    id: "yala",
    number: "07",
    name: "Yala National Park",
    category: "wildlife",
    categoryLabel: "Wildlife",
    location: "Southern & Uva Provinces",
    eyebrow: "Realm of the Wild Sri Lankan Leopard",
    image: "assets/images/destinations/yala.jpg",
    alt: "Wild Sri Lankan leopard resting upon a rock in Yala",
    desc: "Sri Lanka's premier wildlife sanctuary combining dry-zone forest, coastal lagoons, and rocky outcrops, holding the highest recorded density of wild leopards on Earth alongside Asian elephants and sloth bears.",
    facts: [
      { value: "978 sq km", label: "PROTECTED LAND" },
      { value: "Panthera kotiya", label: "APEX PREDATOR" },
      { value: "Ruhuna Block 1", label: "SAFARI CORRIDOR" }
    ],
    link: "tours.html?destination=yala"
  },
  {
    id: "mirissa",
    number: "08",
    name: "Mirissa Beach",
    category: "beaches",
    categoryLabel: "Beaches",
    location: "Southern Province (Matara District)",
    eyebrow: "Golden Surf Bay & Coconut Tree Hill",
    image: "assets/images/destinations/mirissa.jpg",
    alt: "Coconut Tree Hill overlooking turquoise surf in Mirissa Bay",
    desc: "A picturesque crescent-shaped tropical bay famed for warm golden sand, iconic red-cliff promontories at Coconut Tree Hill, vibrant surf breaks, and world-class blue whale watching expeditions.",
    facts: [
      { value: "Blue Whales", label: "MARINE SAFARI" },
      { value: "Coconut Bluff", label: "PANORAMIC POINT" },
      { value: "Southern Coast", label: "SURF HAVEN" }
    ],
    link: "tours.html?destination=mirissa"
  },
  {
    id: "polonnaruwa",
    number: "09",
    name: "Polonnaruwa Ancient City",
    category: "heritage",
    categoryLabel: "Heritage",
    location: "North Central Province",
    eyebrow: "Medieval Royal Capital & Gal Vihara",
    image: "assets/images/destinations/polonnaruwa.jpg",
    alt: "Colossal rock-hewn Buddha statues at Gal Vihara in Polonnaruwa",
    desc: "The monumental 11th-century medieval kingdom of Sri Lanka, celebrated for royal audience pavilions, the vast Parakrama Samudra reservoir, and the monumental rock-carved Buddha masterpieces of Gal Vihara.",
    facts: [
      { value: "11th Century", label: "MEDIEVAL REALM" },
      { value: "Gal Vihara", label: "STONE MASTERPIECE" },
      { value: "UNESCO", label: "WORLD HERITAGE" }
    ],
    link: "tours.html?destination=polonnaruwa"
  },
  {
    id: "ruwanwelisaya",
    number: "10",
    name: "Ruwanwelisaya Stupa, Anuradhapura",
    category: "temples",
    categoryLabel: "Temples",
    location: "North Central Province (Anuradhapura)",
    eyebrow: "The Great Golden Miracle Stupa",
    image: "assets/images/destinations/anuradhapura.jpg",
    alt: "Ancient Ruwanwelisaya white dome stupa rising in Anuradhapura",
    desc: "A colossal, brilliant white architectural marvel rising 103 metres, commissioned by King Dutugemunu in 140 BCE, enshrining the largest collection of Buddha relics in the world behind an elephant-guarded wall.",
    facts: [
      { value: "103 Metres", label: "STUPA HEIGHT" },
      { value: "140 BCE", label: "KING DUTUGEMUNU" },
      { value: "UNESCO", label: "WORLD HERITAGE" }
    ],
    link: "tours.html?destination=anuradhapura"
  },
  {
    id: "horton-plains",
    number: "11",
    name: "Horton Plains and World’s End",
    category: "mountains",
    categoryLabel: "Mountains",
    location: "Central Highlands (Nuwara Eliya District)",
    eyebrow: "Highland Cloud Forest & Sheer Precipice",
    image: "assets/images/destinations/horton-plains.jpg",
    alt: "Dramatic vertical cliff precipice of World's End at Horton Plains plunging into valleys",
    desc: "A windswept protected plateau 2,100 metres above sea level with montane cloud forests, culminating at World's End—a breathtaking sheer vertical abyss plunging 870 metres into lush tea plantation valleys.",
    facts: [
      { value: "870 Metres", label: "VERTICAL DROP" },
      { value: "2,100 Metres", label: "PLATEAU ALTITUDE" },
      { value: "UNESCO", label: "CENTRAL HIGHLANDS" }
    ],
    link: "tours.html?destination=horton-plains"
  },
  {
    id: "ravana-falls",
    number: "12",
    name: "Ravana Falls",
    category: "waterfalls",
    categoryLabel: "Waterfalls",
    location: "Uva Province (Ella Wildlife Sanctuary)",
    eyebrow: "Cascading Mountain Torrent of Ancient Legend",
    image: "assets/images/gallery/ravana-falls.jpg",
    alt: "Ravana Falls cascading over concave granite tiers amidst lush Ella forests",
    desc: "One of Sri Lanka's widest and most dramatic cascades, tumbling 25 metres over concave granite rock tiers amidst lush mountain forests, steeped in the ancient Ramayana legend of King Ravana.",
    facts: [
      { value: "25 Metres", label: "WATERFALL DROP" },
      { value: "Tiered Granite", label: "GEOLOGICAL FORM" },
      { value: "Ramayana Epic", label: "HISTORIC LEGEND" }
    ],
    link: "tours.html?destination=ella"
  }
];

/**
 * Initializes "The Wonders of Ceylon" Editorial Travel Journal
 */
function initWondersOfCeylon() {
  const journalEl = document.getElementById('wonders-journal');
  if (!journalEl) return;

  const allItems = WONDERS_OF_CEYLON_DATA;
  let currentCategory = 'all';
  let filteredItems = allItems.slice();
  let activeId = allItems[0].id;

  // DOM Elements
  const heroFrame = journalEl.querySelector('.wonders-hero-frame');
  const heroImg = document.getElementById('wonders-hero-img');
  const heroCat = document.getElementById('wonders-hero-cat');
  const heroNum = document.getElementById('wonders-hero-num');
  const heroLocText = document.getElementById('wonders-hero-loc-text');
  const heroOverlayTitle = document.getElementById('wonders-hero-overlay-title');

  const storyEyebrow = document.getElementById('wonders-story-eyebrow');
  const storyTitle = document.getElementById('wonders-story-title');
  const storyLocation = document.getElementById('wonders-story-location');
  const storyDesc = document.getElementById('wonders-story-desc');
  const storyFacts = document.getElementById('wonders-story-facts');
  const exploreBtn = document.getElementById('wonders-explore-btn');

  const selectorList = document.getElementById('wonders-selector-list');
  const filterBtns = document.querySelectorAll('.wonders-cat-btn');

  /**
   * Renders the cards in the right selector column according to current category
   */
  function renderSelectorCards() {
    if (!selectorList) return;
    selectorList.innerHTML = '';

    if (filteredItems.length === 0) {
      selectorList.innerHTML = `
        <div class="wonders-empty-filter">
          No attractions found in this category.
        </div>
      `;
      return;
    }

    filteredItems.forEach((item) => {
      const card = document.createElement('div');
      const isActive = item.id === activeId;
      card.className = `wonders-card ${isActive ? 'is-active' : ''}`;
      card.setAttribute('role', 'tab');
      card.setAttribute('tabindex', '0');
      card.setAttribute('data-id', item.id);
      card.setAttribute('aria-selected', isActive ? 'true' : 'false');
      card.setAttribute('aria-label', `Select ${item.name}, ${item.categoryLabel}`);

      card.innerHTML = `
        <div class="wonders-card-thumb-wrap">
          <img src="${item.image}" alt="${item.name}" class="wonders-card-thumb" loading="lazy" width="66" height="50">
        </div>
        <div class="wonders-card-info">
          <h4 class="wonders-card-name">${item.name}</h4>
          <span class="wonders-card-cat">${item.categoryLabel}</span>
        </div>
        <div class="wonders-card-meta">
          <span class="wonders-card-num">${item.number}</span>
          <span class="wonders-card-arrow" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </span>
        </div>
      `;

      card.addEventListener('click', () => {
        selectAttraction(item.id);
      });

      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          selectAttraction(item.id);
        }
      });

      selectorList.appendChild(card);
    });
  }

  /**
   * Selects an attraction by ID, updating the hero photo, story panel, and active card
   */
  function selectAttraction(id) {
    const attraction = allItems.find(item => item.id === id);
    if (!attraction) return;

    activeId = id;

    // Update active state in selector cards
    const cards = selectorList ? selectorList.querySelectorAll('.wonders-card') : [];
    cards.forEach(card => {
      const match = card.getAttribute('data-id') === id;
      card.classList.toggle('is-active', match);
      card.setAttribute('aria-selected', match ? 'true' : 'false');
    });

    // Scroll active card into view in horizontal mode on mobile/tablet
    const activeCardEl = selectorList ? selectorList.querySelector(`.wonders-card[data-id="${id}"]`) : null;
    if (activeCardEl && window.innerWidth <= 1120) {
      activeCardEl.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }

    // Trigger subtle image crossfade transition
    if (heroFrame) {
      heroFrame.classList.add('is-transitioning');
    }

    if (storyTitle) storyTitle.style.opacity = '0.4';
    if (storyDesc) storyDesc.style.opacity = '0.4';
    if (storyFacts) storyFacts.style.opacity = '0.4';

    setTimeout(() => {
      // Update Left Hero Photo
      if (heroImg) {
        heroImg.src = attraction.image;
        heroImg.alt = attraction.alt || attraction.name;
      }
      if (heroCat) {
        heroCat.textContent = attraction.categoryLabel;
      }
      if (heroNum) {
        heroNum.textContent = `${attraction.number} / 12`;
      }
      if (heroLocText) {
        heroLocText.textContent = attraction.location;
      }
      if (heroOverlayTitle) {
        heroOverlayTitle.textContent = attraction.name;
      }

      // Update Center Story
      if (storyEyebrow) {
        storyEyebrow.textContent = attraction.eyebrow;
      }
      if (storyTitle) {
        storyTitle.textContent = attraction.name;
        storyTitle.style.opacity = '1';
      }
      if (storyLocation) {
        storyLocation.textContent = attraction.location;
      }
      if (storyDesc) {
        storyDesc.textContent = attraction.desc;
        storyDesc.style.opacity = '1';
      }
      if (storyFacts && attraction.facts) {
        storyFacts.innerHTML = attraction.facts.map(fact => `
          <div class="wonders-fact-item">
            <span class="wonders-fact-val">${fact.value}</span>
            <span class="wonders-fact-lbl">${fact.label}</span>
          </div>
        `).join('');
        storyFacts.style.opacity = '1';
      }
      if (exploreBtn) {
        exploreBtn.href = attraction.link || 'tours.html';
      }

      if (heroFrame) {
        heroFrame.classList.remove('is-transitioning');
      }
    }, 180);
  }

  /**
   * Filter attractions by category
   */
  function filterCategory(category) {
    currentCategory = category;

    // Update filter buttons
    filterBtns.forEach(btn => {
      const match = btn.getAttribute('data-category') === category;
      btn.classList.toggle('is-active', match);
      btn.setAttribute('aria-selected', match ? 'true' : 'false');
      btn.setAttribute('aria-pressed', match ? 'true' : 'false');
    });

    if (category === 'all') {
      filteredItems = allItems.slice();
    } else {
      filteredItems = allItems.filter(item => item.category === category);
    }

    renderSelectorCards();

    // If currently active attraction is not in filtered list, select first available
    const isStillVisible = filteredItems.some(item => item.id === activeId);
    if (!isStillVisible && filteredItems.length > 0) {
      selectAttraction(filteredItems[0].id);
    }
  }

  // Setup category button listeners
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const cat = btn.getAttribute('data-category') || 'all';
      filterCategory(cat);
    });
  });

  // Initial render & active selection
  renderSelectorCards();
  selectAttraction(allItems[0].id);
}


/**
 * Updates dynamic year in footer
 */
function initCurrentYear() {
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

/**
 * Global Toast Notification
 */
function showToast(message, duration = 4500) {
  let toast = document.querySelector('.toast-notification');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.innerHTML = `
      <div class="toast-icon">
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M12 16v-4M12 8h.01"></path>
        </svg>
      </div>
      <div class="toast-message"></div>
    `;
    document.body.appendChild(toast);
  }

  const messageBox = toast.querySelector('.toast-message');
  if (messageBox) messageBox.textContent = message;

  toast.classList.add('is-visible');

  clearTimeout(window.__toastTimeout);
  window.__toastTimeout = setTimeout(() => {
    toast.classList.remove('is-visible');
  }, duration);
}

/**
 * Hero Background Video & Audio Controller (WCAG 2.2.2 Compliant)
 * Handles unmuted audio playback, cross-browser autoplay policy unlocking,
 * audio mute/unmute and video play/pause controls, tab visibility transitions,
 * and seamless poster crossfade.
 */
function initHeroVideo() {
  const video = document.querySelector('.hero-bg-video');
  if (!video) return;

  const toggleBtn = document.getElementById('heroVideoToggle');
  const audioToggleBtn = document.getElementById('heroAudioToggle');
  const iconPause = toggleBtn ? toggleBtn.querySelector('.icon-pause') : null;
  const iconPlay = toggleBtn ? toggleBtn.querySelector('.icon-play') : null;
  const iconAudioOn = audioToggleBtn ? audioToggleBtn.querySelector('.icon-audio-on') : null;
  const iconAudioMuted = audioToggleBtn ? audioToggleBtn.querySelector('.icon-audio-muted') : null;
  const poster = document.querySelector('.hero-bg-poster');

  function updateVideoUI(isPlaying) {
    if (!toggleBtn) return;
    if (isPlaying) {
      if (iconPause) iconPause.style.display = 'block';
      if (iconPlay) iconPlay.style.display = 'none';
      toggleBtn.setAttribute('aria-label', 'Pause background video');
      toggleBtn.setAttribute('title', 'Pause background video');
    } else {
      if (iconPause) iconPause.style.display = 'none';
      if (iconPlay) iconPlay.style.display = 'block';
      toggleBtn.setAttribute('aria-label', 'Play background video');
      toggleBtn.setAttribute('title', 'Play background video');
    }
  }

  function updateAudioUI() {
    if (!audioToggleBtn) return;
    const isMuted = video.muted || video.volume === 0;
    if (iconAudioOn) iconAudioOn.style.display = isMuted ? 'none' : 'block';
    if (iconAudioMuted) iconAudioMuted.style.display = isMuted ? 'block' : 'none';
    audioToggleBtn.setAttribute('aria-label', isMuted ? 'Unmute video audio' : 'Mute video audio');
    audioToggleBtn.setAttribute('title', isMuted ? 'Unmute audio' : 'Mute audio');
  }

  function hidePoster() {
    if (poster) {
      poster.classList.add('is-hidden');
      poster.style.opacity = '0';
      poster.style.pointerEvents = 'none';
    }
  }

  function showPoster() {
    if (poster) {
      poster.classList.remove('is-hidden');
      poster.style.opacity = '1';
    }
  }

  // Configure for audio-enabled playback
  video.playsInline = true;
  video.muted = false;
  video.defaultMuted = false;
  video.volume = 1.0;

  // React to playback events
  video.addEventListener('playing', () => {
    updateVideoUI(true);
    hidePoster();
  });

  video.addEventListener('play', () => {
    updateVideoUI(true);
  });

  video.addEventListener('pause', () => {
    updateVideoUI(false);
  });

  video.addEventListener('volumechange', () => {
    updateAudioUI();
  });

  video.addEventListener('error', () => {
    console.warn('Hero video failed to load, falling back to static poster.');
    showPoster();
    if (toggleBtn) toggleBtn.style.display = 'none';
    if (audioToggleBtn) audioToggleBtn.style.display = 'none';
  });

  // Autoplay handler with audio policy fallback & gesture unlock
  function startPlayback() {
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          updateVideoUI(true);
          updateAudioUI();
          hidePoster();
        })
        .catch(() => {
          // Modern browsers restrict unmuted autoplay without prior user interaction.
          // Fallback: Start playback muted so visuals are uninterrupted, then unmute on first gesture.
          video.muted = true;
          video.dataset.autoplayRestricted = 'true';
          updateAudioUI();

          video.play().then(() => {
            updateVideoUI(true);
            hidePoster();
          }).catch(() => {
            updateVideoUI(false);
          });

          const unlockAudioOnGesture = () => {
            if (video.dataset.autoplayRestricted === 'true') {
              video.muted = false;
              video.volume = 1.0;
              delete video.dataset.autoplayRestricted;
              updateAudioUI();
            }
            removeGestureListeners();
          };

          const gestureEvents = ['pointerdown', 'touchstart', 'click', 'keydown'];
          const removeGestureListeners = () => {
            gestureEvents.forEach(evt => {
              window.removeEventListener(evt, unlockAudioOnGesture);
            });
          };

          gestureEvents.forEach(evt => {
            window.addEventListener(evt, unlockAudioOnGesture, { passive: true, once: true });
          });
        });
    }
  }

  if (!video.paused && video.readyState >= 2) {
    updateVideoUI(true);
    updateAudioUI();
    hidePoster();
  } else {
    startPlayback();
  }

  // Audio Toggle Button listener
  if (audioToggleBtn) {
    audioToggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      delete video.dataset.autoplayRestricted;
      if (video.muted || video.volume === 0) {
        video.muted = false;
        video.volume = 1.0;
        if (video.paused) {
          video.play().catch(() => {});
        }
      } else {
        video.muted = true;
      }
      updateAudioUI();
    });
  }

  // Video Play / Pause Toggle Button listener
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      if (video.paused) {
        if (video.dataset.autoplayRestricted === 'true') {
          video.muted = false;
          video.volume = 1.0;
          delete video.dataset.autoplayRestricted;
          updateAudioUI();
        }
        video.play().then(() => {
          updateVideoUI(true);
          hidePoster();
        }).catch(() => {});
      } else {
        video.pause();
        updateVideoUI(false);
      }
    });
  }

  // Tab visibility changes
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      if (!video.paused) {
        video.pause();
        video.dataset.pausedByVisibility = 'true';
      }
    } else {
      if (video.dataset.pausedByVisibility === 'true') {
        delete video.dataset.pausedByVisibility;
        video.play().then(() => {
          updateVideoUI(true);
          hidePoster();
        }).catch(() => {});
      }
    }
  });

  updateVideoUI(!video.paused);
  updateAudioUI();
}
