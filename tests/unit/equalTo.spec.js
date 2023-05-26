const equalTo = require('../../src/validators/equalTo');

describe('equalTo validator', () => {
  it('should return an error message for non-matching values', () => {
    const errorMessage = 'Passwords do not match';

    // Test non-matching values
    expect(equalTo('password123', 'pass123')).toBe(errorMessage);
    expect(equalTo('abc123', 'xyz123')).toBe(errorMessage);
    expect(equalTo(123, 456)).toBe(errorMessage);
  });

  it('should return true for matching values', () => {
    // Test matching values
    expect(equalTo('password123', 'password123')).toBe(true);
    expect(equalTo('abc123', 'abc123')).toBe(true);
    expect(equalTo(123, 123)).toBe(true);
  });
});
