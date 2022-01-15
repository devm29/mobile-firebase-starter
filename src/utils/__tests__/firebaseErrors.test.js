import { getFirebaseErrorMessage } from '../firebaseErrors';

describe('firebaseErrors utils', () => {
  test('returns known auth error message by code', () => {
    expect(getFirebaseErrorMessage({ code: 'auth/wrong-password' })).toBe(
      'Incorrect password. Please try again.',
    );
  });

  test('falls back to provided error message', () => {
    expect(
      getFirebaseErrorMessage({ code: 'unknown', message: 'Custom failure message' }),
    ).toBe('Custom failure message');
  });

  test('returns default fallback message when error is empty', () => {
    expect(getFirebaseErrorMessage(null)).toBe('An unexpected error occurred.');
  });
});
