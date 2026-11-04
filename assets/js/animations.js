/**
 * SL MANGO EXOTIC TOURS — CINEMATIC MOTION ENGINE
 * 
 * Pure Vanilla JavaScript & IntersectionObserver text transitions,
 * mask reveals, staggered card entrances, and editorial choreography.
 * 
 * - Guaranteed first-paint hero execution with zero layout shift
 * - Single-trigger IntersectionObserver for scroll sections and cards
 * - Screen-reader accessible (aria-label on headings, aria-hidden on mask lines)
 * - Automatic mutation observer for dynamic cards (tours & gallery)
 */

(function () {
  'use strict';

  // Mark motion active on document
  document.documentElement.classList.add('js-motion');

  // Initialize once DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMotionEngine);
  } else {
    initMotionEngine();
  }

  function initMotionEngine() {
    prepareHeroHeadings();
    initScrollReveals();
    initDynamicContentObserver();
    initExperiencesParallax();
    initExperiencesGallery();
    initCeoYearCounter();
  }

  /**
   * Helper: Ensure an element's text content is wrapped in mask-line & mask-line-inner spans
   * if not already provided in the HTML. Preserves full accessibility via aria-label.
   */
  function prepareMaskLines(element) {
    if (!element || element.querySelector('.mask-line')) return;

    const originalText = element.textContent.trim();
    if (!originalText) return;

    // Preserve screen-reader accessibility
    if (!element.getAttribute('aria-label')) {
      element.setAttribute('aria-label', originalText);
    }

    const rawHtml = element.innerHTML.trim();
    if (rawHtml.includes('<br')) {
      const parts = rawHtml.split(/<br\s*\/?>/i);
      element.innerHTML = parts
        .map((part) => `<span class="mask-line" aria-hidden="true"><span class="mask-line-inner">${part.trim()}</span></span>`)
        .join('');
    } else {
      element.innerHTML = `<span class="mask-line" aria-hidden="true"><span class="mask-line-inner">${rawHtml}</span></span>`;
    }
  }

  /**
   * Hero heading preparation: ensure any dynamic or un-spanned hero title is wrapped
   */
  function prepareHeroHeadings() {
    const heroTitle = document.querySelector('.hero .hero-title');
    if (heroTitle && !heroTitle.querySelector('.mask-line')) {
      prepareMaskLines(heroTitle);
    }
  }

  /**
   * Scroll-Triggered Section & Card Reveals via IntersectionObserver
   */
  function initScrollReveals() {
    const isObserverSupported = 'IntersectionObserver' in window;

    // Selectors
    const sectionSelectors = [
      '.section-header',
      '.editorial-content',
      '.editorial-grid',
      '.reviews-placeholder-card',
      '.section-bg-deep-navy',
      '.wonders-category-filters',
      '.wonders-journal-layout',
      '.experiences-editorial-grid',
      '.experience-closing-moment',
      '.ceo-experience-section',
      '.ceo-experience-content-col'
    ];

    const cardSelectors = [
      '.destinations-grid .destination-card',
      '.experiences-editorial-grid .experience-card',
      '.tours-grid .tour-card',
      '.vehicles-grid .vehicle-card',
      '.services-grid .service-card',
      '.steps-grid .step-card',
      '.shared-gallery-preview .preview-thumb',
      '.gallery-grid .gallery-card',
      '.itinerary-day-card',
      '.ceo-experience-card',
      '.ceo-experience-indicator-item'
    ];

    if (!isObserverSupported) {
      document.querySelectorAll(sectionSelectors.concat(cardSelectors).join(', ')).forEach((el) => {
        el.classList.add('is-revealed');
      });
      return;
    }

    // 1. Observer for Section Headers & Storytelling Containers
    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target;
            target.classList.add('is-revealed');
            observer.unobserve(target);
          }
        });
      },
      { root: null, rootMargin: '0px 0px -40px 0px', threshold: 0.1 }
    );

    const observeSectionHeaders = () => {
      const targets = document.querySelectorAll(sectionSelectors.join(', '));
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;

      targets.forEach((target) => {
        // Prepare any titles inside for mask reveal
        const title = target.querySelector('.section-title, .h1, .h2');
        if (title && !title.classList.contains('no-mask-reveal')) {
          prepareMaskLines(title);
        }

        if (target.classList.contains('is-revealed')) return;

        // If off-screen, arm for scroll animation
        const rect = target.getBoundingClientRect();
        if (rect.top > windowHeight) {
          target.classList.add('motion-armed');
        } else {
          // Already in viewport, reveal immediately
          target.classList.add('is-revealed');
          return;
        }

        sectionObserver.observe(target);
      });
    };

    observeSectionHeaders();

    // 2. Observer for Staggered Cards
    const cardObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const card = entry.target;
            const parentGrid = card.parentElement;
            let staggerDelay = 0;

            if (parentGrid) {
              const siblings = Array.from(parentGrid.children).filter((el) =>
                el.matches('.destination-card, .tour-card, .vehicle-card, .service-card, .step-card, .preview-thumb, .gallery-card, .itinerary-day-card, .experience-card, .ceo-experience-card, .ceo-experience-indicator-item')
              );
              const cardIndex = siblings.indexOf(card);
              if (cardIndex >= 0) {
                // Stagger within row: 0ms, 140ms, 280ms, 420ms
                staggerDelay = Math.min((cardIndex % 4) * 140, 420);
              }
            }

            // Prepare destination heading inside card if present
            const cardTitle = card.querySelector('.destination-name');
            if (cardTitle) {
              prepareMaskLines(cardTitle);
            }

            card.style.setProperty('--card-delay', `${staggerDelay}ms`);
            card.classList.add('is-revealed');
            observer.unobserve(card);
          }
        });
      },
      { root: null, rootMargin: '0px 0px -30px 0px', threshold: 0.1 }
    );

    const observeCards = () => {
      const cards = document.querySelectorAll(cardSelectors.join(', '));
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;

      cards.forEach((card) => {
        if (card.classList.contains('is-revealed')) return;

        const rect = card.getBoundingClientRect();
        if (rect.top > windowHeight) {
          card.classList.add('motion-armed');
        } else {
          // Already in viewport, reveal
          card.classList.add('is-revealed');
          return;
        }

        cardObserver.observe(card);
      });
    };

    observeCards();

    // Public hook for re-scanning dynamic elements
    window.refreshMotionReveals = () => {
      observeSectionHeaders();
      observeCards();
    };
  }

  /**
   * Observe DOM mutations for dynamically injected components (tours catalog & gallery)
   */
  function initDynamicContentObserver() {
    const dynamicMounts = document.querySelectorAll(
      '#featured-tours-mount, #tours-catalog-mount, .shared-gallery-preview-mount, #gallery-grid, #itinerary-mount'
    );

    if (!dynamicMounts.length || !('MutationObserver' in window)) return;

    const observer = new MutationObserver(() => {
      if (typeof window.refreshMotionReveals === 'function') {
        window.refreshMotionReveals();
      }
    });

    dynamicMounts.forEach((mount) => {
      observer.observe(mount, { childList: true, subtree: true });
    });
  }

  /**
   * Subtle, lightweight parallax for selected high-impact elements in the Experiences showcase
   * Restricted strictly to #experiences [data-parallax="true"]
   * Throttled via requestAnimationFrame, disabled on mobile (<= 768px) and prefers-reduced-motion.
   */
  function initExperiencesParallax() {
    if (!('requestAnimationFrame' in window)) return;
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const parallaxItems = document.querySelectorAll('#experiences [data-parallax="true"]');
    if (!parallaxItems.length) return;

    let isTicking = false;

    function updateParallax() {
      if (window.innerWidth <= 768) {
        parallaxItems.forEach((el) => el.style.removeProperty('--parallax-y'));
        isTicking = false;
        return;
      }

      const vh = window.innerHeight;

      parallaxItems.forEach((el) => {
        const rect = el.getBoundingClientRect();
        // Only calculate when near or within viewport
        if (rect.bottom > -100 && rect.top < vh + 100) {
          const centerY = rect.top + rect.height / 2;
          const progress = (centerY - vh / 2) / (vh / 2);
          const clamped = Math.max(-1, Math.min(1, progress));
          const offset = (clamped * 14).toFixed(1);
          el.style.setProperty('--parallax-y', `${offset}px`);
        }
      });

      isTicking = false;
    }

    function onScroll() {
      if (!isTicking) {
        isTicking = true;
        window.requestAnimationFrame(updateParallax);
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    // Initial pass
    updateParallax();
  }

  /**
   * Expandable Experiences Gallery (6 initial featured cards -> 16 total cards)
   * Handles keyboard navigation, screen reader announcements, smooth staggered reveal,
   * button state updates, and accessible collapse with smooth scroll to preserve viewport context.
   */
  function initExperiencesGallery() {
    const grid = document.getElementById('experiences-grid');
    const toggleBtn = document.getElementById('experiences-toggle-btn');
    const caption = document.getElementById('experiences-toggle-caption');
    if (!grid || !toggleBtn) return;

    // Progressive enhancement: add .is-collapsible to enable initial 6-card display
    grid.classList.add('is-collapsible');
    toggleBtn.setAttribute('aria-expanded', 'false');

    const btnText = toggleBtn.querySelector('.experiences-toggle-btn-text');

    toggleBtn.addEventListener('click', () => {
      const isExpanded = grid.classList.contains('is-expanded');

      if (!isExpanded) {
        // --- EXPAND GALLERY ---
        grid.classList.add('is-expanded');
        toggleBtn.setAttribute('aria-expanded', 'true');
        if (btnText) btnText.textContent = 'Show Less';
        if (caption) caption.textContent = 'Showing all 16 experiences across Sri Lanka';

        // Re-scan card observers for newly visible items
        if (typeof window.refreshMotionReveals === 'function') {
          window.refreshMotionReveals();
        }

        // Trigger parallax re-calculation
        window.dispatchEvent(new Event('scroll'));
      } else {
        // --- COLLAPSE GALLERY ---
        grid.classList.remove('is-expanded');
        toggleBtn.setAttribute('aria-expanded', 'false');
        if (btnText) btnText.textContent = 'Discover All Experiences';
        if (caption) caption.textContent = 'Explore all 16 experiences across Sri Lanka';

        // Keep focus on the toggle button and ensure comfortable viewport position
        setTimeout(() => {
          toggleBtn.focus({ preventScroll: true });
          const btnRect = toggleBtn.getBoundingClientRect();
          const vh = window.innerHeight;
          // If the button is not nicely centered in viewport, smoothly scroll to it
          if (btnRect.top < 80 || btnRect.bottom > vh - 40) {
            toggleBtn.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }, 50);
      }
    });
  }

  /**
   * Animate the CEO experience year counter smoothly when entering viewport,
   * ensuring the final value 2003 is strictly accurate and reduced-motion is respected.
   */
  function initCeoYearCounter() {
    const yearEls = document.querySelectorAll('.ceo-experience-stat-year, #ceo-stat-year');
    if (!yearEls.length) return;

    const targetYear = 2003;

    // Respect user motion preference
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      yearEls.forEach((el) => { el.textContent = targetYear.toString(); });
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            obs.unobserve(entry.target);
            animateYear(entry.target, targetYear);
          }
        });
      },
      { threshold: 0.25 }
    );

    yearEls.forEach((el) => observer.observe(el));
  }

  function animateYear(el, target) {
    const startYear = target - 8; // e.g., 1995 -> 2003
    const duration = 1200; // ms
    const startTime = performance.now();

    function step(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Cubic-out easing for dignified deceleration
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentVal = Math.round(startYear + (target - startYear) * easeOut);
      el.textContent = currentVal.toString();

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = target.toString(); // Strictly guaranteed 2003
      }
    }

    requestAnimationFrame(step);
  }
})();
