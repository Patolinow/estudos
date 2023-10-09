import React, { useState, useEffect, useReducer, useContext, useRef } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import AuthContext from "../store/auth-context";
import LoginInput from "../UI/Inputs/LoginInput";

interface DispatchInput {
  inputType: string;
  type: string;
  val: string;
}

interface InputState {
  inputType: string;
  value: string;
  isValid: boolean;
}

const reducer = (state: InputState, action: DispatchInput) => {
  const isEmail = action.inputType === "email";
  const emailVerifier = action.val.includes("@");
  const passwordVerifier = action.val.trim().length > 6;

  if (action.type === "USER_INPUT") {
    return {
      value: action.val,
      isValid: isEmail ? emailVerifier : passwordVerifier,
      inputType: state.inputType,
    };
  }

  if (action.type === "INPUT_BLUR") {
    return {
      value: state.value,
      isValid: isEmail ? emailVerifier : passwordVerifier,
      inputType: state.inputType,
    };
  }

  return { value: "", isValid: false, inputType: state.inputType };
};

const Login = (): JSX.Element => {
  const [formIsValid, setFormIsValid] = useState(false);

  const [reducedEmail, dispatchReducedEmail] = useReducer(reducer, {
    value: "",
    isValid: false,
    inputType: "email",
  });
  const [reducedPassword, dispatchReducedPassword] = useReducer(reducer, {
    value: "",
    isValid: false,
    inputType: "password",
  });
  const ctxAuth = useContext(AuthContext)
  const { isValid: emailIsValid } = reducedEmail;
  const { isValid: passwordIsValid } = reducedPassword;
  const emailInputRef = useRef<HTMLInputElement>(null)
  const passwordInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("validating...");
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 500);

    return () => {
      console.log("cleaned");
      clearTimeout(identifier);
    };
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    dispatchReducedEmail({
      inputType: "email",
      type: "USER_INPUT",
      val: event.target.value,
    });
  };

  const passwordChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    dispatchReducedPassword({
      inputType: "password",
      type: "USER_INPUT",
      val: event.target.value,
    });
  };

  const validateEmailHandler = () => {
    dispatchReducedEmail({
      inputType: "email",
      type: "INPUT_BLUR",
      val: reducedEmail.value,
    });
  };

  const validatePasswordHandler = () => {
    dispatchReducedPassword({
      inputType: "password",
      type: "INPUT_BLUR",
      val: reducedPassword.value,
    });
  };

  const submitHandler: React.FormEventHandler = (event) => {
    event.preventDefault();

    if (formIsValid) {
      ctxAuth.onLogin(reducedEmail.value, reducedPassword.value);
    }
    else if (!emailIsValid) {
      emailInputRef.current!.focus()
    }
    else {
      passwordInputRef.current!.focus()
    }

  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <LoginInput ref={emailInputRef} reducedInput={reducedEmail} validateHandler={validateEmailHandler} changeHandler={emailChangeHandler}/>
        <LoginInput ref={passwordInputRef} reducedInput={reducedPassword} validateHandler={validatePasswordHandler} changeHandler={passwordChangeHandler}/>

        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
