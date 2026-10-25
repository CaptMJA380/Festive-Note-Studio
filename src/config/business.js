/**
 * Festive Notes Studio - Business Configuration
 * Central source of truth for branding, contact details, and messaging.
 * Update these placeholders before deploying to production.
 */

export const BUSINESS_CONFIG = {
  // Brand details
  BRAND_NAME: "Festive Notes Studio",
  TAGLINE: "Bespoke Personalised Diwali Cards for Corporate Hampers",
  LOCATION: "Pune, Maharashtra, India",

  // Contact details
  // Format WHATSAPP_NUMBER as country code + number without spaces or symbols (e.g. 919876543210 for India)
  WHATSAPP_NUMBER: "919359189558",
  BUSINESS_EMAIL: "festivenotestudio@gmail.com",
  PHONE_NUMBER: "+91 93591 89558",

  // Flag to indicate if placeholders are still being used
  IS_CONFIGURED: true,

  // WhatsApp prefilled message templates
  WHATSAPP_MESSAGES: {
    general:
      "Hi! I’m interested in personalised Diwali greeting cards for our corporate hamper orders. Please share your bulk pricing and customisation options.",
    designSpecific: (designName, monument) =>
      `Hi! I'm interested in ${designName}${monument ? ` — ${monument}` : ''} design for our corporate Diwali hampers. Please share bulk pricing and personalisation options.`,
  },

  // Email subject line
  EMAIL_SUBJECT: "Corporate Diwali Greeting Cards Enquiry",
};

/**
 * Generate a clean WhatsApp click-to-chat URL
 * @param {string} text - The prefilled message
 * @returns {string} Fully encoded WhatsApp URL
 */
export function getWhatsAppUrl(text = BUSINESS_CONFIG.WHATSAPP_MESSAGES.general) {
  const cleanNumber = BUSINESS_CONFIG.WHATSAPP_NUMBER.replace(/[^0-9]/g, "");
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(text)}`;
}

/**
 * Generate a mailto link with prefilled subject
 * @param {string} customSubject - Optional custom subject
 * @returns {string} Mailto link
 */
export function getMailtoUrl(customSubject = BUSINESS_CONFIG.EMAIL_SUBJECT) {
  return `mailto:${BUSINESS_CONFIG.BUSINESS_EMAIL}?subject=${encodeURIComponent(customSubject)}`;
}

/**
 * Generate a tel link
 * @returns {string} Tel link
 */
export function getTelUrl() {
  const cleanNumber = BUSINESS_CONFIG.PHONE_NUMBER.replace(/\s+/g, "");
  return `tel:${cleanNumber}`;
}
