// Validator function to check if the value is equal to a given reference value
function equalTo(value, referenceValue) {
  // Check if the value matches the reference value
  if (value !== referenceValue) {
    console.log(value, referenceValue);
    // Return an error message if the value is not equal to the reference value
    return 'Passwords do not match';
  }

  // Return true if the value is equal to the reference value (valid)
  return true;
}

module.exports = equalTo;
