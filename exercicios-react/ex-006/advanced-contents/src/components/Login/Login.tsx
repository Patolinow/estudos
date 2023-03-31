import React, { useState, useEffect, useReducer } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";

interface LoginProps {
  onLogin(email: string, password: string): void;
}

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

const Login = (props: LoginProps): JSX.Element => {
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

  const { isValid: emailIsValid } = reducedEmail;
  const { isValid: passwordIsValid } = reducedPassword;

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
    props.onLogin(reducedEmail.value, reducedPassword.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            reducedEmail.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={reducedEmail.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            reducedPassword.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={reducedPassword.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
