// Validator function for numeric fields
function numeric(value) {
  // Check if the value is a valid numeric input
  if (isNaN(value)) {
    // Return an error message if the value is not numeric
    return 'Please enter a valid numeric value';
  }

  // Return true if the value is a valid numeric input (valid)
  return true;
}

module.exports = numeric;
