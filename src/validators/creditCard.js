// Validator function for credit card number fields
function creditCard(value) {
  // Remove any non-digit characters from the value
  const cleanedValue = value.replace(/\D/g, '');

  // Check if the value passes the Luhn algorithm (mod-10 algorithm)
  let sum = 0;
  let shouldDouble = false;
  for (let i = cleanedValue.length - 1; i >= 0; i--) {
    let digit = parseInt(cleanedValue.charAt(i));

    if (shouldDouble) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit;
    shouldDouble = !shouldDouble;
  }

  if (sum % 10 !== 0) {
    // Return an error message if the value is not a valid credit card number
    return 'Please enter a valid credit card number';
  }

  // Return true if the value is a valid credit card number (valid)
  return true;
}

module.exports = creditCard;
