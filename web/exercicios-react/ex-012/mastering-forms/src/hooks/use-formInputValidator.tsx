import { useState } from "react";
interface FormInputValidatorProps {
  inputName: string;
  errorCondition: boolean;
  setInput: React.Dispatch<React.SetStateAction<string>>;
}

const useFormInputValidator = ({
  inputName,
  errorCondition,
  setInput,
}: FormInputValidatorProps) => {
  const [inputIsTouched, setInputIsTouched] = useState(false);

  const inputIsValid = errorCondition;
  const inputClass = !inputIsValid && inputIsTouched ? "invalid" : "";
  const inputErrorMessage =
    !inputIsValid && inputIsTouched ? (
      <p className="error-text">{inputName} wasn't filled correctly</p>
    ) : undefined;

  const inputChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const currentInput = event.target.value;
    setInput(() => currentInput);
  };

  const inputBlurHandler: React.FocusEventHandler<HTMLInputElement> = () => {
    setInputIsTouched(true);
  };

  const inputResetHandler = () => {
    setInput("");
    setInputIsTouched(false);
  };

  return { inputBlurHandler, inputChangeHandler, inputResetHandler, inputClass, inputErrorMessage };
};

export default useFormInputValidator;
