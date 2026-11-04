/**
 * SL MANGO EXOTIC TOURS — ENQUIRY & CONTACT FORM ENGINE
 * 
 * Manages client-side validation, query-string prefilling (for tours and vehicles),
 * and transparent, honest handoffs via WhatsApp or Email without fake database claims.
 */

document.addEventListener('DOMContentLoaded', () => {
  initContactForm();
});

function initContactForm() {
  const form = document.getElementById('enquiry-form');
  if (!form) return;

  prefillFromQueryParams(form);

  form.addEventListener('submit', handleFormSubmit);

  // Clear error states on input
  form.querySelectorAll('input, select, textarea').forEach(field => {
    field.addEventListener('input', () => {
      const group = field.closest('.form-group');
      if (group) group.classList.remove('has-error');
    });
  });
}

/**
 * Prefills Tour or Vehicle interest dropdown from URL parameters
 * Example: contact.html?tour=classic-sri-lanka or contact.html?vehicle=kdh-van
 */
function prefillFromQueryParams(form) {
  const params = new URLSearchParams(window.location.search);
  const tourSlug = params.get('tour');
  const vehicleSlug = params.get('vehicle');
  const interestSelect = form.querySelector('#form-interest');
  const messageArea = form.querySelector('#form-message');

  if (!interestSelect) return;

  if (tourSlug && typeof TOURS_DATA !== 'undefined') {
    const matchedTour = TOURS_DATA.find(t => t.slug === tourSlug);
    if (matchedTour) {
      // Find matching option
      for (let opt of interestSelect.options) {
        if (opt.value.toLowerCase().includes(tourSlug) || opt.text.includes(matchedTour.title)) {
          opt.selected = true;
          break;
        }
      }
      if (messageArea && !messageArea.value) {
        messageArea.value = `Hello SL Mango Exotic Tours, I am interested in planning the "${matchedTour.title}" package (${matchedTour.duration}). We would like to discuss possible dates and customizations.`;
      }
    }
  } else if (vehicleSlug) {
    for (let opt of interestSelect.options) {
      if (opt.value.toLowerCase().includes(vehicleSlug) || opt.value.toLowerCase().includes('transport')) {
        opt.selected = true;
        break;
      }
    }
    if (messageArea && !messageArea.value) {
      const vehicleNames = {
        'prius-premio': 'Prius Car / Premio Car (1–2 Pax, Full A/C & Professional Chauffeur Guide)',
        'kdh-flat-roof': 'KDH Flat Roof Van (4 Pax, Full A/C & Professional Chauffeur Guide)',
        'kdh-high-roof': 'High Roof KDH Luxury Van (6–8 Pax, Full A/C & National Tour Guide / Senior Chauffeur)',
        'coaster-bus': 'Toyota Coaster Bus (10+ Pax, Full Ducted A/C & National Tour Guide)',
        'private-car': 'Prius Car or Premio Car (1–2 Pax)',
        'kdh-van': 'Toyota HiAce KDH Van'
      };
      const vName = vehicleNames[vehicleSlug] || 'Private Transport';
      messageArea.value = `Hello SL Mango Exotic Tours, I would like to enquire about renting a ${vName} with a licensed chauffeur-guide for our upcoming journey in Sri Lanka.`;
    }
  }
}

/**
 * Validates and handles contact form submission
 */
function handleFormSubmit(e) {
  e.preventDefault();
  const form = e.target;

  // Validate fields
  let isValid = true;

  const nameInput = form.querySelector('#form-name');
  const emailInput = form.querySelector('#form-email');
  const phoneInput = form.querySelector('#form-phone');
  const travellersInput = form.querySelector('#form-travellers');
  const datesInput = form.querySelector('#form-dates');
  const interestSelect = form.querySelector('#form-interest');
  const messageInput = form.querySelector('#form-message');

  // Name check
  if (!nameInput.value.trim()) {
    setError(nameInput, 'Please provide your full name.');
    isValid = false;
  }

  // Email check
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailInput.value.trim() || !emailPattern.test(emailInput.value.trim())) {
    setError(emailInput, 'Please provide a valid email address.');
    isValid = false;
  }

  // Message check
  if (!messageInput.value.trim()) {
    setError(messageInput, 'Please write a brief note about your travel plans.');
    isValid = false;
  }

  if (!isValid) {
    if (typeof showToast === 'function') {
      showToast('Please correct the highlighted fields before sending.');
    }
    return;
  }

  // Construct structured enquiry text
  const payload = {
    name: nameInput.value.trim(),
    email: emailInput.value.trim(),
    phone: phoneInput ? phoneInput.value.trim() : '',
    travellers: travellersInput ? travellersInput.value : '2 Adults',
    dates: datesInput ? datesInput.value.trim() : 'Flexible',
    interest: interestSelect ? interestSelect.options[interestSelect.selectedIndex].text : 'General Inquiry',
    message: messageInput.value.trim()
  };

  const formattedMessage = 
`*NEW TRIP ENQUIRY — SL MANGO EXOTIC TOURS*
----------------------------------------
*Client Name:* ${payload.name}
*Email:* ${payload.email}
*Phone / WhatsApp:* ${payload.phone || 'Not provided'}
*Number of Travellers:* ${payload.travellers}
*Proposed Dates:* ${payload.dates}
*Interested Package / Service:* ${payload.interest}

*Message:*
${payload.message}
----------------------------------------
(Sent via slmangoexotictours.com enquiry portal)`;

  // Create honest action modal or handoff options
  showSubmissionActionModal(payload, formattedMessage);
}

function setError(inputEl, message) {
  const group = inputEl.closest('.form-group');
  if (!group) return;

  group.classList.add('has-error');
  const errorEl = group.querySelector('.form-field-error');
  if (errorEl) {
    errorEl.textContent = message;
  }
}

/**
 * Displays honest handoff options (WhatsApp instant send or Email)
 */
function showSubmissionActionModal(payload, formattedText) {
  let modal = document.getElementById('submission-handoff-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'submission-handoff-modal';
    modal.className = 'lightbox-modal';
    modal.innerHTML = `
      <div class="lightbox-dialog" style="background:#FFFFFF; border-radius:14px; padding:2.5rem; max-width:540px; text-align:left; color:#123B52; box-shadow:0 20px 60px rgba(0,0,0,0.3);">
        <img src="assets/images/logo.png" alt="SL Mango Exotic Tours Official Logo" style="width:76px; height:auto; display:block; margin:0 auto 1.25rem; filter:drop-shadow(0 4px 12px rgba(200,164,106,0.35));">
        <h3 style="font-size:1.4rem; margin-bottom:0.75rem; color:#123B52; text-align:center;">Your Trip Details Are Ready</h3>
        <p style="font-size:0.95rem; color:#617782; margin-bottom:1.5rem; line-height:1.6; text-align:center;">
          Thank you, <strong>${payload.name}</strong>! As a direct tour operator, we handle your enquiry with genuine human care. Please choose your preferred way to transmit your request:
        </p>
        
        <div style="display:flex; flex-direction:column; gap:0.85rem; margin-bottom:1.5rem;">
          <a id="handoff-whatsapp-btn" href="#" target="_blank" rel="noopener noreferrer" 
             class="btn btn-primary btn-lg" style="width:100%; text-align:center; background:#25D366; border-color:#25D366;">
            Send Instantly via WhatsApp
          </a>

          <a id="handoff-email-btn" href="#" 
             class="btn btn-navy btn-lg" style="width:100%; text-align:center;">
            Send via Direct Email
          </a>
        </div>

        <p style="font-size:0.8rem; color:#8EACB9; line-height:1.45; text-align:center;">
          Our tour director reviews all requests directly and replies within a few hours (Sri Lanka Time UTC+05:30).
        </p>

        <button id="handoff-cancel-btn" style="margin-top:1rem; width:100%; background:none; border:none; color:#617782; cursor:pointer; font-size:0.85rem; text-decoration:underline;">
          Close and Edit Form
        </button>
      </div>
    `;
    document.body.appendChild(modal);

    modal.querySelector('#handoff-cancel-btn').addEventListener('click', () => {
      modal.classList.remove('is-open');
    });
  }

  // WhatsApp Link
  const waNumber = (typeof SITE_CONFIG !== 'undefined' && SITE_CONFIG.contact && SITE_CONFIG.contact.whatsappNumber) 
    ? SITE_CONFIG.contact.whatsappNumber 
    : '94779824310';
  const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(formattedText)}`;
  const waBtn = modal.querySelector('#handoff-whatsapp-btn');
  if (waBtn) waBtn.href = waUrl;

  // Email Mailto Link
  const targetEmail = (typeof SITE_CONFIG !== 'undefined' && SITE_CONFIG.contact && SITE_CONFIG.contact.email)
    ? SITE_CONFIG.contact.email
    : 'explore@slmangoexotictours.com';
  const mailSubject = encodeURIComponent(`Sri Lanka Journey Enquiry — ${payload.interest} (${payload.name})`);
  const mailtoUrl = `mailto:${targetEmail}?subject=${mailSubject}&body=${encodeURIComponent(formattedText)}`;
  const emailBtn = modal.querySelector('#handoff-email-btn');
  if (emailBtn) emailBtn.href = mailtoUrl;

  modal.classList.add('is-open');
}
