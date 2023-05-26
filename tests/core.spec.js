const required = require('../src/validators/required');

describe('Validators', () => {
  describe('required', () => {
    it('should return an error message for empty value', () => {
      expect(required('')).toEqual('This field is required');
    });

    it('should return true for non-empty value', () => {
      expect(required('John Doe')).toEqual(true);
    });
  });

  // Write similar test cases for other validators
});
