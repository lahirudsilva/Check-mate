// Validator function for numeric fields (age)
function numeric(value) {
  // Check if the value is a valid numeric input
  const age = parseInt(value, 10);

  if (isNaN(age) || age < 0 || String(age) !== value) {
    // Return an error message if the value is not a valid age
    return 'Please enter a valid numeric value';
  }

  // Return true if the value is a valid age (valid)
  return true;
}

module.exports = numeric;
