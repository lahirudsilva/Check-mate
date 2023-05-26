const validateForm = require('../src/utils');

describe('Form Validation', () => {
  it('should return a valid result for a valid form submission', () => {
    const form = {
      username: 'john.doe',
      password: 'password123',
      confirmPassword: 'password123',
    };

    const validators = {
      username: ['required'],
      password: ['required'],
      confirmPassword: ['required', 'equalTo'],
    };

    const validationResult = validateForm(form, validators);
    expect(validationResult.valid).toEqual(true);
    expect(validationResult.errors).toEqual({});
  });

  it('should return field-level errors for an invalid form submission', () => {
    const form = {
      username: '',
      password: 'password',
      confirmPassword: 'password123',
    };

    const validators = {
      username: ['required'],
      password: ['required'],
      confirmPassword: ['required', 'equalTo'],
    };

    const validationResult = validateForm(form, validators);
    expect(validationResult.valid).toEqual(false);
    expect(validationResult.errors).toEqual({
      username: 'This field is required',
      confirmPassword: 'Passwords do not match',
    });
  });
});
