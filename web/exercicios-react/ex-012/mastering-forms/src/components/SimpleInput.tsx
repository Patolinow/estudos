import { useState } from "react";
import useInputValidator from "../hooks/use-inputValidator";

interface SimpleInputProps {}

const SimpleInput = (props: SimpleInputProps) => {
  const [name, setName] = useState("");
  const nameCondition = name.trim() !== "" && name.length <= 50;
  const nameValidator = useInputValidator({
    setInput: setName,
    inputName: "Name",
    errorCondition: nameCondition,
  });

  const [email, setEmail] = useState("");
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  const emailCondition = email.match(emailRegex) ? true : false && email.length <= 100;
  const emailValidator = useInputValidator({
    setInput: setEmail,
    inputName: "Email",
    errorCondition: emailCondition,
  });

  const formValidationCondition = nameCondition && emailCondition;

  const submitHandler: React.FormEventHandler = (event) => {
    event.preventDefault();

    if (!formValidationCondition) {
      console.log("invalid form");
      return;
    }

    nameValidator.inputResetHandler();
    emailValidator.inputResetHandler()
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={`form-control ${nameValidator.inputVerifier}`}>
        <label htmlFor="nameSimple">Your Name</label>
        <input
          type="text"
          id="nameSimple"
          onChange={nameValidator.inputChangeHandler}
          onBlur={nameValidator.inputBlurHandler}
          value={name}
        />
        {nameValidator.errorContent}
      </div>

      <div className={`form-control ${emailValidator.inputVerifier}`}>
        <label htmlFor="emailSimple">Your email</label>
        <input
          type="email"
          id="emailSimple"
          onChange={emailValidator.inputChangeHandler}
          onBlur={emailValidator.inputBlurHandler}
          value={email}
        />
        {emailValidator.errorContent}
      </div>

      <div className="form-actions">
        <button disabled={!formValidationCondition}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
