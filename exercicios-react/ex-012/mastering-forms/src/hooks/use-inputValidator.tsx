import { useState } from "react";

interface InputValidatorProps {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  inputName: string;
  errorCondition: boolean;
}

const useInputValidator = ({inputName ,errorCondition, input, setInput}:InputValidatorProps) => {
  const [inputIsTouched, setInputIsTouched] = useState(false);
  
  

  const inputIsValid = errorCondition;
  // const formValidationCondition = nameIsValid && nameIsValid
  const inputVerifier = !inputIsValid && inputIsTouched ? "invalid" : "";
  const errorContent =
    !inputIsValid && inputIsTouched ? <p>{inputName} must be filled correctly</p> : undefined;




  const inputChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const currentInput = event.target.value;
    setInput(() => currentInput);
  };

  const inputBlurHandler: React.FocusEventHandler<HTMLInputElement> = () => {
    setInputIsTouched(true);
  };

  return {inputBlurHandler, inputChangeHandler, inputVerifier, errorContent, setInputIsTouched}
}

export default useInputValidator