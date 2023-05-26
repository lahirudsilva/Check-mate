const { required } = require('../../src/validators');

describe('required validator', () => {
  it('should return an error message for an empty value', () => {
    const errorMessage = 'This field is required';

    // Test empty value
    expect(required('')).toBe(errorMessage);
    expect(required(null)).toBe(errorMessage);
    expect(required(undefined)).toBe(errorMessage);
  });

  it('should return true for a non-empty value', () => {
    // Test non-empty value
    expect(required('John Doe')).toBe(true);
    expect(required(123)).toBe(true);
    expect(required(['a', 'b', 'c'])).toBe(true);
    expect(required({ name: 'John', age: 30 })).toBe(true);
  });
});
