// Validator function for date fields
function date(value) {
  const regex = /^\d{4}-\d{2}-\d{2}$/;

  // Check if the value matches the date format (YYYY-MM-DD)
  if (!regex.test(value)) {
    // Return an error message if the value is not in the correct format
    return 'Please enter a valid date in the format YYYY-MM-DD';
  }

  // Extract the year, month, and day from the value
  const [year, month, day] = value.split('-').map(Number);

  // Create a new Date object and validate the date
  const dateObj = new Date(year, month - 1, day);

  // Check if the date values are valid
  if (
    dateObj.getFullYear() !== year ||
    dateObj.getMonth() + 1 !== month ||
    dateObj.getDate() !== day
  ) {
    // Return an error message if the date is invalid
    return 'Please enter a valid date';
  }

  // Return true if the value is a valid date
  return true;
}

module.exports = date;
