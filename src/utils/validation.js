export const normalizeEmail = (email = '') => email.trim().toLowerCase();

export const normalizeFullName = (fullName = '') =>
  fullName
    .trim()
    .replace(/\s+/g, ' ');

export const normalizeEntityText = (text = '') =>
  text
    .trim()
    .replace(/\s+/g, ' ');

export const isValidEmail = (email = '') => {
  const normalizedEmail = normalizeEmail(email);
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail);
};
