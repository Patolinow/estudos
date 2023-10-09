import React, { useRef, useEffect, useImperativeHandle } from "react";
import classes from "./LoginInput.module.css"

interface LoginInputProps {
  reducedInput: {
    value: string;
    isValid: boolean;
    inputType: string;
  }
  validateHandler():void,
  changeHandler(event: React.ChangeEvent<HTMLInputElement>):void
}

const LoginInput = React.forwardRef(({reducedInput, validateHandler, changeHandler}:LoginInputProps, ref):JSX.Element => {
  const inputRef = useRef<HTMLInputElement>(null)
  const activate = () => {
    inputRef.current!.focus()
  }

  useImperativeHandle(ref, () => {
    return {
      focus: activate
    }
  })

  return (
    <div
          className={`${classes.control} ${
            reducedInput.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor={reducedInput.inputType}>{reducedInput.inputType}</label>
          <input
          ref={inputRef}
            type={reducedInput.inputType}
            id={reducedInput.inputType}
            value={reducedInput.value}
            onChange={changeHandler}
            onBlur={validateHandler}
          />
        </div>
  )
})

export default LoginInput