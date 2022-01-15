const ERROR_MESSAGES = {
  'auth/invalid-email': 'Please enter a valid email address.',
  'auth/user-not-found': 'No account was found with this email.',
  'auth/wrong-password': 'Incorrect password. Please try again.',
  'auth/email-already-in-use': 'This email is already registered.',
  'auth/weak-password': 'Password should be at least 6 characters long.',
};

export const getFirebaseErrorMessage = (error) => {
  if (!error) {
    return 'An unexpected error occurred.';
  }

  if (error.code && ERROR_MESSAGES[error.code]) {
    return ERROR_MESSAGES[error.code];
  }

  if (typeof error.message === 'string' && error.message.trim().length > 0) {
    return error.message;
  }

  return 'An unexpected error occurred.';
};
