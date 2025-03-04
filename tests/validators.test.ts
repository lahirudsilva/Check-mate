import { isRequired, isEmail, minLength } from "../src/validators/validators";

test("isRequired should return an error message when the value is empty", () => {
  expect(isRequired("")).toBe("This field is required.");
});

test("isEmail should return an error for invalid emails", () => {
  expect(isEmail("test.com")).toBe("Invalid email address.");
  expect(isEmail("valid@example.com")).toBeNull();
});

test("minLength should enforce minimum length", () => {
  expect(minLength(5)("test")).toBe("Must be at least 5 characters.");
  expect(minLength(5)("hello")).toBeNull();
});
