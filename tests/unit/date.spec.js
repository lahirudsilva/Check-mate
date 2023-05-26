const date = require('../../src/validators/date');

describe('date validator', () => {
  it('should return an error message for invalid date', () => {
    const errorMessage = 'Please enter a valid date';

    // Test invalid dates
    expect(date('2020-13-01')).toBe(errorMessage);
    expect(date('2021-02-31')).toBe(errorMessage);
    expect(date('2022-06-31')).toBe(errorMessage);
    expect(date('2023-09-31')).toBe(errorMessage);
  });

  it('should return true for valid date', () => {
    // Test valid dates
    expect(date('2021-01-01')).toBe(true);
    expect(date('2022-02-28')).toBe(true);
    expect(date('2023-03-15')).toBe(true);
    expect(date('2024-04-30')).toBe(true);
  });
});
