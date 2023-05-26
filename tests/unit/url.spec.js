const url = require('../../src/validators/url');

describe('url validator', () => {
  it('should return an error message for invalid URLs', () => {
    const errorMessage = 'Please enter a valid URL';

    // Test invalid URLs
    expect(url('www.example.com')).toBe(errorMessage);
    expect(url('example.com')).toBe(errorMessage);
    expect(url('ftp://example.com')).toBe(errorMessage);
  });

  it('should return true for valid URLs', () => {
    // Test valid URLs
    expect(url('https://www.example.com')).toBe(true);
    expect(url('http://example.com')).toBe(true);
    expect(url('https://example.com/path')).toBe(true);
    expect(url('http://subdomain.example.com')).toBe(true);
  });
});
