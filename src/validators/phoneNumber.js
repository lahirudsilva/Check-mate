// Validator function for phone number fields
function phoneNumber(value) {
  // Check if the value is a valid phone number
  // Customize the regular expression as per your desired phone number format
  const PHONE_NUMBER_REGEX =
    /^\+?\d{0,3}[-\s]?\(?\d{3}\)?[-\s]?\d{3}[-\s]?\d{4}$/;

  if (!PHONE_NUMBER_REGEX.test(value)) {
    // Return an error message if the value is not a valid phone number
    return 'Please enter a valid phone number';
  }

  // Return true if the value is a valid phone number (valid)
  return true;
}

module.exports = phoneNumber;
