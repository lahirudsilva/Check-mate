const email = require('../../src/validators/email');

describe('email validator', () => {
  it('should return an error message for invalid email', () => {
    const errorMessage = 'Please enter a valid email address';

    // Test invalid emails
    expect(email('test')).toBe(errorMessage);
    expect(email('test@')).toBe(errorMessage);
    expect(email('test@example')).toBe(errorMessage);
    expect(email('test@example.')).toBe(errorMessage);
  });

  it('should return true for valid email', () => {
    // Test valid emails
    expect(email('test@example.com')).toBe(true);
    expect(email('john.doe@example.com')).toBe(true);
    expect(email('jane.doe123@example.co.uk')).toBe(true);
  });
});
