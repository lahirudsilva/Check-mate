import * as React from "react";
import { useValidation } from "../index";
import { isRequired, isEmail } from "../validators/validators";

export function FormInput() {
  const { value, error, handleChange } = useValidation("", [
    isRequired,
    isEmail,
  ]);

  return (
    <div>
      <input
        type="email"
        value={value}
        onChange={handleChange}
        placeholder="Enter email"
      />
      {error && <span style={{ color: "red" }}>{error}</span>}
    </div>
  );
}
