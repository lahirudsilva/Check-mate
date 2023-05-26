const creditCard = require('../../src/validators/creditCard');

describe('creditCard validator', () => {
  it('should return an error message for invalid credit card numbers', () => {
    const errorMessage = 'Please enter a valid credit card number';

    // Test invalid credit card numbers
    expect(creditCard('1234567890123456')).toBe(errorMessage);
    expect(creditCard('1234-5678-9012-3456')).toBe(errorMessage);
    expect(creditCard('abcd-efgh-ijkl-mnop')).toBe(errorMessage);
    expect(creditCard('')).toBe(errorMessage);
  });

  it('should return true for valid credit card numbers', () => {
    // Test valid credit card numbers
    expect(creditCard('4111111111111111')).toBe(true);
    expect(creditCard('5500000000000004')).toBe(true);
    expect(creditCard('6011000000000004')).toBe(true);
  });
});
