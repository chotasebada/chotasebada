// src/utils/contact.js

/**
 * Open WhatsApp chat with a pre‑filled message.
 * @param {string} phone - Phone number in international format without + (e.g., "919876543210").
 * @param {string} [message] - Optional message to pre‑fill.
 */
export const openWhatsApp = (phone, message = '') => {
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
};

/**
 * Helper to open a mailto link with optional subject and body.
 * @param {string} to - Recipient email address.
 * @param {string} [subject] - Email subject.
 * @param {string} [body] - Email body.
 */
export const mailto = (to, subject = '', body = '') => {
  const url = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = url;
};
