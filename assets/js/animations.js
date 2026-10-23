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
      '.experience-closing-moment'
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
      '.itinerary-day-card'
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
                el.matches('.destination-card, .tour-card, .vehicle-card, .service-card, .step-card, .preview-thumb, .gallery-card, .itinerary-day-card')
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
})();
