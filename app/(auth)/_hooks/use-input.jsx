// hooks/use-input.js
import { useState } from "react";

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const validationResult = validateValue(enteredValue);
  const isValid = validationResult.isValid;
  const errorMessages = validationResult.errorMessages;
  const hasError = !isValid && isTouched;

  const changeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const blurHandler = () => {
    setIsTouched(true);
  };

  return {
    value: enteredValue,
    isValid,
    hasError,
    errorMessages,
    changeHandler,
    blurHandler,
  };
};

export default useInput;
