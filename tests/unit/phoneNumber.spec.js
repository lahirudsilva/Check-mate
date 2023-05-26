const phoneNumber = require('../../src/validators/phoneNumber');

describe('phoneNumber validator', () => {
  it('should return an error message for invalid phone numbers', () => {
    const errorMessage = 'Please enter a valid phone number';

    // Test invalid phone numbers
    expect(phoneNumber('12345')).toBe(errorMessage);
    expect(phoneNumber('123-456')).toBe(errorMessage);
    expect(phoneNumber('abc1234567')).toBe(errorMessage);
    expect(phoneNumber('(123) 456-7890 ext 123')).toBe(errorMessage);
  });

  it('should return true for valid phone numbers', () => {
    // Test valid phone numbers
    expect(phoneNumber('1234567890')).toBe(true);
    expect(phoneNumber('123-456-7890')).toBe(true);
    expect(phoneNumber('(123) 456-7890')).toBe(true);
  });
});
