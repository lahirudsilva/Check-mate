export type ValidationRule = (value: string) => string | null;

export const isRequired: ValidationRule = (value) => {
  return value.trim() ? null : "This field is required.";
};

export const isEmail: ValidationRule = (value) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
    ? null
    : "Invalid email address.";
};

export const minLength = (length: number): ValidationRule => {
  return (value) =>
    value.length >= length ? null : `Must be at least ${length} characters.`;
};
