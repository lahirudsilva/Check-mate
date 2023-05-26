const { required, equalTo } = require('../src/validators');

describe('Validators', () => {
  describe('required', () => {
    it('should return an error message for empty value', () => {
      expect(required('')).toEqual('This field is required');
    });

    it('should return true for non-empty value', () => {
      expect(required('John Doe')).toEqual(true);
    });
  });

  describe('equalTo', () => {
    it('should return an error message for non-matching values', () => {
      expect(equalTo('password', 'password123')).toEqual(
        'Passwords do not match',
      );
    });

    it('should return true for matching values', () => {
      expect(equalTo('password', 'password')).toEqual(true);
    });
  });

  // Write similar test cases for other validators
});
