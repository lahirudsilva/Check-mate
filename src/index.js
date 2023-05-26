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

        const validatorParts = validator.split(':');
        const validatorName = validatorParts[0];
        const validatorConstraint = validatorParts[1];

        switch (validatorName) {
          case 'required':
            validationResult = validators.required(fieldValue);
            break;
          case 'equalTo':
            validationResult = validators.equalTo(fieldValue, form.password);
            break;
          case 'email':
            validationResult = validators.email(fieldValue);
            break;
          case 'date':
            validationResult = validators.date(fieldValue);
            break;
          case 'crediCard':
            validationResult = validators.creditCard(fieldValue);
            break;
          case 'maxLength':
            validationResult = validators.maxLength(
              fieldValue,
              validatorConstraint,
            );
            break;
          case 'minLength':
            validationResult = validators.minLength(
              fieldValue,
              validatorConstraint,
            );
            break;
          case 'numeric':
            validationResult = validators.numeric(fieldValue);
            break;
          case 'phoneNumber':
            validationResult = validators.phoneNumber(fieldValue);
            break;
          case 'passwordStrength':
            validationResult = validators.passwordStrength(fieldValue);
            break;
          case 'url':
            validationResult = validators.url(fieldValue);
            break;
          case 'fileType':
            validationResult = validators.fileType(fieldValue);
            break;
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

function getFieldErrors(validationErrors) {
  return Object.values(validationErrors);
}

module.exports = { validateForm, getFieldErrors };
