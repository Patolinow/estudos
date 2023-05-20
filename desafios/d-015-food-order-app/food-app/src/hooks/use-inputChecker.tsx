import { useState } from "react";

interface UseInputCheckerProps {
  setInput: React.Dispatch<React.SetStateAction<string>>;
  inputCondition: boolean;
  inputName: string;
  styles: CSSModuleClasses;
}

const useInputChecker = ({setInput, inputCondition, inputName, styles}: UseInputCheckerProps) => {
  
  const [isTouched, setIsTouched] = useState(false);
  const isValidInput = !inputCondition && isTouched;
  const hasInvalidClass = isValidInput ? styles.invalid : ""
  const inputError =  isValidInput ? <p>{inputName} must be filled correctly</p> : undefined

  const changeHandler: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const currentInput = event.target.value;
    setInput(currentInput);
  };

  const blurHandler = () => {
    setIsTouched(true);
  };

  return {blurHandler, changeHandler, isValidInput, inputError, hasInvalidClass}

}

export default useInputChecker