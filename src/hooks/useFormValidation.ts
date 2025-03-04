import { useState } from "react";
import { ValidationRule } from "../validators/validators";

export function useValidation(initialValue: string, rules: ValidationRule[]) {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState<string | null>(null);

  const validate = (val: string) => {
    for (let rule of rules) {
      const errorMessage = rule(val);
      if (errorMessage) {
        setError(errorMessage);
        return;
      }
    }
    setError(null);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    validate(event.target.value);
  };

  return { value, error, handleChange };
}
