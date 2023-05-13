import { useState } from "react";

interface SimpleInputProps {}

const SimpleInput = (props: SimpleInputProps) => {
  const [name, setName] = useState("");
  const [nameIsTouched, setNameIsTouched] = useState(false);
  
  

  const nameIsValid = name.trim() !== "";
  const formValidationCondition = nameIsValid && nameIsValid
  const classVerifier = !nameIsValid && nameIsTouched ? "invalid" : "";
  const errorContent =
    !nameIsValid && nameIsTouched ? <p className="error-text">Name must be filled</p> : undefined;


  const submitHandler: React.FormEventHandler = (event) => {
    event.preventDefault();

    if (!formValidationCondition) {
      console.log("invalid form")
      return;
    }

    setNameIsTouched(false);
    setName("");
  };

  const inputChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const currentName = event.target.value;
    setName(() => currentName);
  };

  const inputBlurHandler: React.FocusEventHandler<HTMLInputElement> = () => {
    setNameIsTouched(true);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={`form-control ${classVerifier}`}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={inputChangeHandler}
          onBlur={inputBlurHandler}
          value={name}
        />
        {errorContent}
      </div>
      <div className="form-actions">
        <button disabled={!formValidationCondition}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
