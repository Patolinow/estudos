import { useState } from "react";

interface InputValidatorProps {
  setInput: React.Dispatch<React.SetStateAction<string>>;
  inputName: string;
  errorCondition: boolean;
}

const useInputValidator = ({ inputName, errorCondition, setInput }: InputValidatorProps) => {
  const [inputIsTouched, setInputIsTouched] = useState(false);

  const inputIsValid = errorCondition;
  const inputVerifier = !inputIsValid && inputIsTouched ? "invalid" : "";
  const errorContent =
    !inputIsValid && inputIsTouched ? (
      <p className="error-text">{inputName} must be filled correctly</p>
    ) : undefined;

  const inputChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const currentInput = event.target.value;
    setInput(() => currentInput);
  };

  const inputBlurHandler: React.FocusEventHandler<HTMLInputElement> = () => {
    setInputIsTouched(true);
  };

  const inputResetHandler = () => {
    setInput("")
    setInputIsTouched(false)
  }

  return { inputBlurHandler, inputChangeHandler, inputVerifier, errorContent, inputResetHandler};
};

export default useInputValidator;
