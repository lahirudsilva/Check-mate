function url(value) {
  // Check if the value is a valid URL
  try {
    // Create a temporary URL object to validate the URL
    const tempUrl = new URL(value);

    // Check if the URL has a valid scheme
    if (!(tempUrl.protocol === 'http:' || tempUrl.protocol === 'https:')) {
      throw new Error('Invalid scheme');
    }

    // Return true if the value is a valid URL (valid)
    return true;
  } catch (error) {
    // Return an error message if the value is not a valid URL
    return 'Please enter a valid URL';
  }
}

module.exports = url;
