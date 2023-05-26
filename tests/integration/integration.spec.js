const { validateForm, getFieldErrors } = require('../../src');

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

  it('should return an error message for invalid email format', () => {
    const form = {
      email: 'invalid',
    };

    const validators = {
      email: ['email'],
    };

    const validationResult = validateForm(form, validators);
    expect(validationResult.valid).toEqual(false);
    expect(validationResult.errors).toEqual({
      email: 'Please enter a valid email address',
    });
  });

  it('should return an error message for invalid date format', () => {
    const form = {
      date: '2021-22-01',
    };

    const validators = {
      date: ['date'],
    };

    const validationResult = validateForm(form, validators);
    expect(validationResult.valid).toEqual(false);
    expect(validationResult.errors).toEqual({
      date: 'Please enter a valid date',
    });
  });

  it('should return an error message for invalid URL format', () => {
    const form = {
      website: 'example',
    };

    const validators = {
      website: ['url'],
    };

    const validationResult = validateForm(form, validators);
    expect(validationResult.valid).toEqual(false);
    expect(validationResult.errors).toEqual({
      website: 'Please enter a valid URL',
    });
  });

  it('should return an error message for invalid phone number format', () => {
    const form = {
      phone: '1234',
    };

    const validators = {
      phone: ['phoneNumber'],
    };

    const validationResult = validateForm(form, validators);
    expect(validationResult.valid).toEqual(false);
    expect(validationResult.errors).toEqual({
      phone: 'Please enter a valid phone number',
    });
  });

  it('should return an error message for invalid credit card number', () => {
    const form = {
      creditCardNumber: '1234567890123456',
    };

    const validators = {
      creditCardNumber: ['creditCard'],
    };

    const validationResult = validateForm(form, validators);
    expect(validationResult.valid).toEqual(false);
    expect(validationResult.errors).toEqual({
      creditCardNumber: 'Please enter a valid credit card number',
    });
  });

  it('should return an error message for non-numeric value', () => {
    const form = {
      age: 'abc',
    };

    const validators = {
      age: ['numeric'],
    };

    const validationResult = validateForm(form, validators);
    expect(validationResult.valid).toEqual(false);
    expect(validationResult.errors).toEqual({
      age: 'Please enter a valid numeric value',
    });
  });

  //   it('should return an error message when value is shorter than minimum length', () => {
  //     const form = {
  //       password: 'abc',
  //     };

  //     const validators = {
  //       password: ['minLength:5'],
  //     };

  //     const validationResult = validateForm(form, validators);
  //     expect(validationResult.valid).toEqual(false);
  //     expect(validationResult.errors).toEqual({
  //       password: 'Please enter at least 5 characters',
  //     });
  //   });

  //   it('should return an error message when value exceeds maximum length', () => {
  //     const form = {
  //       address: '1234567890',
  //     };

  //     const validators = {
  //       address: ['maxLength:25'],
  //     };

  //     const validationResult = validateForm(form, validators);
  //     expect(validationResult.valid).toEqual(false);
  //     expect(validationResult.errors).toEqual({
  //       address: 'Please enter no more than 5 characters',
  //     });
  //   });

  it('should return an error message for weak password strength', () => {
    const form = {
      password: 'password',
    };

    const validators = {
      password: ['passwordStrength'],
    };

    const validationResult = validateForm(form, validators);
    expect(validationResult.valid).toEqual(false);
    expect(validationResult.errors).toEqual({
      password:
        'Password must contain at least 8 characters, including uppercase, lowercase, numbers, and special characters',
    });
  });

  it('should return an error message for invalid file type', () => {
    const form = {
      file: 'file.txt',
    };

    const validators = {
      file: ['fileType'],
    };

    const validationResult = validateForm(form, validators);
    expect(validationResult.valid).toEqual(false);
    expect(validationResult.errors).toEqual({
      file: 'Please upload a file of a valid type',
    });
  });

  describe('getFieldErrors', () => {
    it('should return an empty array for a form without errors', () => {
      const validationErrors = {};

      expect(getFieldErrors(validationErrors)).toEqual([]);
    });

    it('should return an array of field error messages for a form with errors', () => {
      const validationErrors = {
        firstName: 'This field is required',
        email: 'Please enter a valid email',
      };

      expect(getFieldErrors(validationErrors)).toEqual([
        'This field is required',
        'Please enter a valid email',
      ]);
    });
  });
});
