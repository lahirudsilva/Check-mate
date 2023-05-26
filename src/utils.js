export function validateForm(form, validators) {
  // Implement the logic to validate the entire form using the provided validators

  // Create an object to track field-level errors
  const fieldErrors = {};

  // Iterate over the form fields and apply the respective validators
  for (const fieldName in validators) {
    if (Object.prototype.hasOwnProperty.call(validators, fieldName)) {
      const fieldValue = form[fieldName];
      const fieldValidators = validators[fieldName];

      // Iterate over the field validators and check for errors
      for (const validator of fieldValidators) {
        // Execute each validator function and check for errors
        const validationResult = validator(fieldValue);

        if (validationResult !== true) {
          // If there's an error, store it in the fieldErrors object
          fieldErrors[fieldName] = validationResult;
          // Break the loop if there's an error to avoid unnecessary checks
          break;
        }
      }
    }
  }

  // Return the validation result
  // You can consider returning an object with two properties:
  // - valid: a boolean indicating if the form is valid or not
  // - errors: the field-level errors object
  return {
    valid: Object.keys(fieldErrors).length === 0,
    errors: fieldErrors,
  };
}
