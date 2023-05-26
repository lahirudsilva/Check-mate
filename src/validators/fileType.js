// Validator function for file type fields
function fileType(value, allowedTypes) {
  // Get the file extension from the value
  const fileExtension = value.split('.').pop();

  // Check if the file extension is in the allowed types
  if (!allowedTypes.includes(fileExtension)) {
    // Return an error message if the file type is not allowed
    return 'Please upload a file of a valid type';
  }

  // Return true if the file type is allowed (valid)
  return true;
}

module.exports = fileType;
