# @lahiru.dev/check-mate

Here’s an example of how you can structure your **README.md** for your **Form Validation Library** npm package. It follows open-source best practices, includes clear **installation** and **usage instructions**, and provides helpful **examples** to make it easy for developers to get started.

---

# Form Validation Library for React

A simple, lightweight, and flexible form validation library for React applications, built with TypeScript. Easily validate form fields with custom validation rules and error messages.

## 🚀 Features
- **Flexible Validation Rules:** Built-in rules like `required`, `email`, and customizable rules.
- **React Hook-based:** Utilizes React's `useState` hook for managing form input and error states.
- **TypeScript Support:** Full TypeScript support for type safety and developer experience.
- **Easy to Use:** Simple API for quick integration into React forms.

## 📦 Installation

To install the library, run the following command:

```bash
npm install @lahiru.dev/check-mate
```

Or if you are using yarn:

```bash
yarn add @lahiru.dev/check-mate
```

## ⚡ Usage

### 1. Import the necessary hooks and validators:

```tsx
import { useValidation } from "@lahiru.dev/check-mate";
import { isRequired, isEmail } from "@lahiru.dev/check-mate/validators";
```

### 2. Use the `useValidation` hook to handle form validation:

```tsx
function EmailInput() {
  const { value, error, handleChange } = useValidation("", [isRequired, isEmail]);

  return (
    <div>
      <input
        type="email"
        value={value}
        onChange={handleChange}
        placeholder="Enter your email"
      />
      {error && <span style={{ color: "red" }}>{error}</span>}
    </div>
  );
}
```

### 3. Full Example: Using Multiple Fields in a Form

```tsx
import React, { useState } from "react";
import { useValidation } from "@lahiru.dev/check-mate";
import { isRequired, isEmail } from "@lahiru.dev/check-mate/validators";

function SignUpForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const { value: email, error: emailError, handleChange: handleEmailChange } = useValidation("", [isRequired, isEmail]);
  const { value: name, error: nameError, handleChange: handleNameChange } = useValidation("", [isRequired]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailError && !nameError) {
      setIsSubmitted(true);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
        />
        {emailError && <span style={{ color: "red" }}>{emailError}</span>}
      </div>

      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
        />
        {nameError && <span style={{ color: "red" }}>{nameError}</span>}
      </div>

      <button type="submit">Submit</button>

      {isSubmitted && <p>Form submitted successfully!</p>}
    </form>
  );
}

export default SignUpForm;
```

---

## 🧑‍💻 API

### `useValidation(initialValue: string, rules: ValidationRule[])`

A custom React hook that handles the form field value, validation, and error message.

#### Arguments:
- `initialValue` (string): The initial value of the form field.
- `rules` (ValidationRule[]): An array of validation rules to be applied to the field.

#### Returns:
- `value` (string): The current value of the form field.
- `error` (string | null): The error message if validation fails, or `null` if validation is successful.
- `handleChange` (function): A handler function to update the form field value and trigger validation.

### Validation Rules

- `isRequired(value: string): string | null`  
  Returns an error message if the field is empty, otherwise returns `null`.

- `isEmail(value: string): string | null`  
  Returns an error message if the value is not a valid email address, otherwise returns `null`.

#### Example:

```ts
const isRequired: ValidationRule = (value) => {
  return value.trim() ? null : "This field is required.";
};

const isEmail: ValidationRule = (value) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? null : "Invalid email address.";
};
```

---

## 🎉 Thank you for using the library! 🎉

---

This **README.md** covers everything needed to introduce your library to developers and help them integrate it into their applications quickly. 

Would you like to add more details like **advanced configurations**, **API examples**, or **error handling** in your documentation? Let me know!