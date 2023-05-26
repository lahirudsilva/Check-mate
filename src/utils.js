const validators = require('./validators');
// Import other validators as needed

function validateForm(form, formValidators) {
  const fieldErrors = {};

  for (const fieldName in formValidators) {
    if (Object.prototype.hasOwnProperty.call(formValidators, fieldName)) {
      const fieldValue = form[fieldName];
      const fieldValidators = formValidators[fieldName];

      for (const validator of fieldValidators) {
        let validationResult = true;

        switch (validator) {
          case 'required':
            validationResult = validators.required(fieldValue);
            break;
          case 'equalTo':
            validationResult = validators.equalTo(fieldValue, form.password);
            break;
          // Handle other validators similarly
        }

        if (validationResult !== true) {
          fieldErrors[fieldName] = validationResult;
          break;
        }
      }
    }
  }

  return {
    valid: Object.keys(fieldErrors).length === 0,
    errors: fieldErrors,
  };
}

module.exports = validateForm;
