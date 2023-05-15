import { useState } from "react";
import useFormInputValidator from "../hooks/use-formInputValidator";
import "../index.css"

interface BasicFormProps {}

const BasicForm = (props: BasicFormProps) => {
  const [firstNameInput, setFirstNameInput] = useState("");
  const firstNameCondition = firstNameInput.trim() !== "" && firstNameInput.length <= 50;
  const firstName = useFormInputValidator({
    inputName: "First name",
    errorCondition: firstNameCondition,
    setInput: setFirstNameInput,
  });

  const [lastNameInput, setLastNameInput] = useState("");
  const lastNameCondition = lastNameInput.trim() !== "" && lastNameInput.length <= 50;
  const lastName = useFormInputValidator({
    inputName: "Last name",
    errorCondition: lastNameCondition,
    setInput: setLastNameInput,
  });

  const [emailInput, setEmailInput] = useState("");
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  const emailCondition =
    emailInput.match(emailRegex) && emailInput.length <= 100 ? true : false;
  const email = useFormInputValidator({
    inputName: "Email",
    errorCondition: emailCondition,
    setInput: setEmailInput,
  });

  const formPassCondition =
    firstNameCondition && lastNameCondition && emailCondition;
  const formHandler: React.FormEventHandler = (event) => {
    event.preventDefault();

    if (!formPassCondition) {
      return;
    }

    console.log(`name: ${firstNameInput} ${lastNameInput}\n email: ${emailInput}`);
    firstName.inputResetHandler();
    lastName.inputResetHandler();
    email.inputResetHandler();
  };

  return (
    <form onSubmit={formHandler}>
      
        <div className="control-group">
          <div className={`form-control ${firstName.inputClass}`}>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              onChange={firstName.inputChangeHandler}
              onBlur={firstName.inputBlurHandler}
              value={firstNameInput}
            />
            {firstName.inputErrorMessage}
          </div>
          <div className={`form-control ${lastName.inputClass}`}>
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              onChange={lastName.inputChangeHandler}
              onBlur={lastName.inputBlurHandler}
              value={lastNameInput}
            />
            {lastName.inputErrorMessage}
          </div>
        </div>

        <div className={`form-control ${email.inputClass}`}>
          <label htmlFor="email">E-Mail Address</label>
          <input
            type="email"
            id="email"
            onChange={email.inputChangeHandler}
            onBlur={email.inputBlurHandler}
            value={emailInput}
          />
          {email.inputErrorMessage}
        </div>
      
      <div className="form-actions">
        <button disabled={!formPassCondition}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
