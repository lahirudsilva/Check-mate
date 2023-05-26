const passwordStrength = require('../../src/validators/passwordStrength');

describe('passwordStrength validator', () => {
  it('should return an error message for weak passwords', () => {
    const errorMessage =
      'Password must contain at least 8 characters, including uppercase, lowercase, numbers, and special characters';

    // Test weak passwords
    expect(passwordStrength('123456')).toBe(errorMessage);
    expect(passwordStrength('password')).toBe(errorMessage);
    expect(passwordStrength('abcdef')).toBe(errorMessage);
    expect(passwordStrength('abc123')).toBe(errorMessage);
  });

  it('should return true for strong passwords', () => {
    // Test strong passwords
    expect(passwordStrength('Pa$$w0rd')).toBe(true);
    expect(passwordStrength('Str0ngP@ssw0rd')).toBe(true);
    expect(passwordStrength('P@ssw0rd!')).toBe(true);
    expect(passwordStrength('C0mpl3xP@ssw0rd')).toBe(true);
  });
});
