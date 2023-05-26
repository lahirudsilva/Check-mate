// Validator function for maximum length constraint
function maxLength(value, maxLength) {
  // Check if the value length exceeds the maximum length
  if (value.length > maxLength) {
    // Return an error message with the maximum length constraint
    return `Please enter no more than ${maxLength} characters`;
  }

  // Return true if the value meets the maximum length constraint (valid)
  return true;
}

module.exports = maxLength;
