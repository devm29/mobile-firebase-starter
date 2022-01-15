import {
  isValidEmail,
  normalizeEmail,
  normalizeEntityText,
  normalizeFullName,
} from '../validation';

describe('validation utils', () => {
  test('normalizeEmail trims and lowercases email', () => {
    expect(normalizeEmail('  USER@Example.COM  ')).toBe('user@example.com');
  });

  test('normalizeFullName trims and collapses internal spaces', () => {
    expect(normalizeFullName('  Jane    Doe  ')).toBe('Jane Doe');
  });

  test('normalizeEntityText trims and collapses whitespace', () => {
    expect(normalizeEntityText('  one   two   three  ')).toBe('one two three');
  });

  test('isValidEmail validates normalized input', () => {
    expect(isValidEmail('  valid.user@example.com  ')).toBe(true);
    expect(isValidEmail('not-an-email')).toBe(false);
  });
});
