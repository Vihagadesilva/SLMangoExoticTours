/**
 * SL MANGO EXOTIC TOURS — MASTER CONFIGURATION
 * 
 * Centralised business contact details, social links, and metadata.
 * Update these details to change business information across the entire website.
 */

const SITE_CONFIG = {
  companyName: "SL Mango Exotic Tours",
  shortName: "SL Mango Tours",
  tagline: "Sri Lanka, Beyond the Ordinary.",
  country: "Sri Lanka",
  logo: "assets/images/logo.png",
  logoIcon: "assets/images/logo-icon-192.png",
  
  // Real or configured contact details (editable by owner)
  contact: {
    phoneDisplay: "+94 77 982 4310",
    phoneTel: "+94779824310",
    whatsappNumber: "94779824310", // International format without '+' for wa.me links
    whatsappDisplay: "+94 77 982 4310",
    email: "explore@slmangoexotictours.com",
    address: "No. 48/2, Temple Road, Colombo & Kandy, Sri Lanka",
    operatingHours: "07:00 – 22:00 Sri Lanka Time (UTC +05:30) • 7 Days a Week"
  },

  // Social handles (for header/footer)
  social: {
    whatsapp: "https://wa.me/94779824310",
    instagram: "https://instagram.com/slmangoexotictours",
    facebook: "https://facebook.com/slmangoexotictours",
    tripadvisor: "https://www.tripadvisor.com" // Placeholder until live listing
  },

  // Trust & Integrity notice
  transparency: {
    isDirectTourOperator: true,
    governmentRegisteredLicense: "SLTDA / Reg: Pending Verification & Direct Chauffeur Registry",
    fleetOwnership: "Dedicated registered executive vehicles with professional licensed chauffeur-guides",
    reviewsStatus: "coming_soon" // "coming_soon" | "live"
  }
};

// Freeze configuration to prevent accidental modification at runtime
if (typeof Object.freeze === 'function') {
  Object.freeze(SITE_CONFIG);
  Object.freeze(SITE_CONFIG.contact);
  Object.freeze(SITE_CONFIG.social);
  Object.freeze(SITE_CONFIG.transparency);
}

// Export for Node/ESM compatibility if needed, attach to window in browser
if (typeof module !== 'undefined' && module.exports) {
  module.exports = SITE_CONFIG;
}
