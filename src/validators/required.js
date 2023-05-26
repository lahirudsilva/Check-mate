// Validator function for required fields
function required(value) {
  // Check if the value is not empty
  if (value === '' || value === null || value === undefined) {
    // Return an error message if the field is empty
    return 'This field is required';
  }

  // Return true if the value is not empty (valid)
  return true;
}

module.exports = required;
