const {
  required,
  equalTo,
  email,
  date,
  creditCard,
  fileType,
  maxLength,
  minLength,
  numeric,
  phoneNumber,
  url,
  passwordStrength,
} = require('../src/validators');

describe('Validators', () => {
  describe('required', () => {
    it('should return an error message for empty value', () => {
      expect(required('')).toEqual('This field is required');
    });

    it('should return true for non-empty value', () => {
      expect(required('John Doe')).toEqual(true);
    });
  });

  describe('equalTo', () => {
    it('should return an error message for non-matching values', () => {
      expect(equalTo('password', 'password123')).toEqual(
        'Passwords do not match',
      );
    });

    it('should return true for matching values', () => {
      expect(equalTo('password', 'password')).toEqual(true);
    });
  });

  describe('minLength', () => {
    it('should return an error message for value shorter than the minimum length', () => {
      expect(minLength('abc', 5)).toEqual('Please enter at least 5 characters');
    });

    it('should return true for value equal to the minimum length', () => {
      expect(minLength('hello', 5)).toEqual(true);
    });

    it('should return true for value longer than the minimum length', () => {
      expect(minLength('hello world', 5)).toEqual(true);
    });
  });

  describe('email', () => {
    it('should return an error message for invalid email', () => {
      expect(email('invalid')).toEqual('Please enter a valid email address');
    });

    it('should return true for valid email', () => {
      expect(email('test@example.com')).toEqual(true);
    });
  });

  describe('passwordStrength', () => {
    it('should return an error message for weak password', () => {
      expect(passwordStrength('password')).toEqual(
        'Password must contain at least 8 characters, including uppercase, lowercase, numbers, and special characters',
      );
    });

    it('should return true for strong password', () => {
      expect(passwordStrength('P@ssw0rd')).toEqual(true);
    });
  });

  describe('date', () => {
    it('should return an error message for invalid date', () => {
      expect(date('2021-22-01')).toEqual('Please enter a valid date');
    });

    it('should return true for valid date', () => {
      expect(date('2021-01-22')).toEqual(true);
    });
  });

  describe('url', () => {
    it('should return an error message for invalid URL', () => {
      expect(url('example')).toEqual('Please enter a valid URL');
    });

    it('should return true for valid URL', () => {
      expect(url('http://www.example.com')).toEqual(true);
    });
  });

  describe('phoneNumber', () => {
    it('should return an error message for invalid phone number', () => {
      expect(phoneNumber('1234')).toEqual(
        'Please enter a valid phone number in the format +1-123-456-7890',
      );
    });

    it('should return true for valid phone number', () => {
      expect(phoneNumber('+1-123-456-7890')).toEqual(true);
    });
  });

  describe('fileType', () => {
    it('should return an error message for invalid file type', () => {
      expect(fileType('file.txt', ['jpg', 'png'])).toEqual(
        'Please upload a file of a valid type',
      );
    });

    it('should return true for valid file type', () => {
      expect(fileType('image.jpg', ['jpg', 'png'])).toEqual(true);
    });
  });

  describe('creditCard', () => {
    it('should return an error message for invalid credit card number', () => {
      expect(creditCard('1234567890123456')).toEqual(
        'Please enter a valid credit card number',
      );
    });

    it('should return true for valid credit card number', () => {
      expect(creditCard('4111111111111111')).toEqual(true);
    });
  });

  describe('numeric', () => {
    it('should return an error message for non-numeric value', () => {
      expect(numeric('abc')).toEqual('Please enter a valid numeric value');
    });

    it('should return true for numeric value', () => {
      expect(numeric('123')).toEqual(true);
    });
  });

  describe('maxLength', () => {
    it('should return an error message when value exceeds maximum length', () => {
      const maxLengthConstraint = 5;
      const value = '123456';

      expect(maxLength(value, maxLengthConstraint)).toEqual(
        `Please enter no more than ${maxLengthConstraint} characters`,
      );
    });

    it('should return true when value meets maximum length constraint', () => {
      const maxLengthConstraint = 10;
      const value = '12345';

      expect(maxLength(value, maxLengthConstraint)).toEqual(true);
    });
  });
});
