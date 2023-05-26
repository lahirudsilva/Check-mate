// Validator function for date fields
function date(value) {
  // Check if the value is a valid date
  if (!Date.parse(value)) {
    // Return an error message if the value is not a valid date
    return 'Please enter a valid date';
  }

  // Return true if the value is a valid date (valid)
  return true;
}

module.exports = date;
