// Regular expression for email validation
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Validator function for email fields
function email(value) {
  // Check if the value matches the email pattern
  if (!EMAIL_REGEX.test(value)) {
    // Return an error message if the value is not a valid email
    return 'Please enter a valid email address';
  }

  // Return true if the value is a valid email (valid)
  return true;
}

module.exports = email;
