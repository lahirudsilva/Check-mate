// Validator function for password strength
function passwordStrength(value) {
  // Define a regular expression pattern to check for a strong password
  const PASSWORD_REGEX =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  // Check if the value matches the password strength pattern
  if (!PASSWORD_REGEX.test(value)) {
    // Return an error message if the password is not strong enough
    return 'Password must contain at least 8 characters, including uppercase, lowercase, numbers, and special characters';
  }

  // Return true if the password meets the strength requirements (valid)
  return true;
}

module.exports = passwordStrength;
