// Validator function for minimum length constraint
function minLength(value, minLength) {
  // Check if the value length is less than the minimum length
  if (value.length < minLength) {
    // Return an error message with the minimum length constraint
    return `Please enter at least ${minLength} characters`;
  }

  // Return true if the value meets the minimum length constraint (valid)
  return true;
}

module.exports = minLength;
