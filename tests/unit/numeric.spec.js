const numeric = require('../../src/validators/numeric');

describe('numeric validator for age', () => {
  it('should return an error message for non-numeric age', () => {
    const errorMessage = 'Please enter a valid numeric value';

    // Test non-numeric age values
    expect(numeric('abc')).toBe(errorMessage);
    expect(numeric('25abc')).toBe(errorMessage);
    expect(numeric('12.5')).toBe(errorMessage);
    expect(numeric('20 years')).toBe(errorMessage);
  });

  it('should return an error message for negative age', () => {
    const errorMessage = 'Please enter a valid numeric value';

    // Test negative age value
    expect(numeric('-10')).toBe(errorMessage);
  });

  it('should return true for valid age', () => {
    // Test valid age values
    expect(numeric('18')).toBe(true);
    expect(numeric('25')).toBe(true);
    expect(numeric('40')).toBe(true);
  });
});
