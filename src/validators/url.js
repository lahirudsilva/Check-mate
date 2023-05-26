// Validator function for URL fields
function url(value) {
  // Check if the value is a valid URL
  try {
    new URL(value);
    // Return true if the value is a valid URL (valid)
    return true;
  } catch (error) {
    // Return an error message if the value is not a valid URL
    return 'Please enter a valid URL';
  }
}

module.exports = url;
