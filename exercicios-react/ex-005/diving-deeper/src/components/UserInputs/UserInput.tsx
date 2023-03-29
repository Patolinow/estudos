import Card from "../../UI/Card/Card";
import Button from "../../UI/Button/Button";
import styles from "./UserInput.module.css";
import { useRef, useState } from "react";
import User from "../../interfaces/User";
import ErrorModal from "../ErrorModal/ErrorModal";

interface UserInputProps {
  onListChange(newUser: User): void;
}

const UserInput = ({ onListChange }: UserInputProps): JSX.Element => {
  const usernameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);

  const [title, setTitle] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const errorHandler = () => {
    setTitle("")
    setErrorMessage("")
  }

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const username = usernameRef.current!.value;
    const age = Number(ageRef.current!.value);
    const id = Math.random();

    if (age <= 0){
      setTitle("Invalid Age")
      setErrorMessage("Age must be 1 or higher")
    }

    if (!username && !age) {
      setTitle("Empty Inputs")
      setErrorMessage(`Fields "username" and "age" can't be empty.`)
      return;
    }

    if (!username || !age) {
      setTitle("Empty Input")
      setErrorMessage(`Field ${!username ? '"username"' : '"age"'} can't be empty.`)
      return;
    }

    usernameRef.current!.value = "";
    ageRef.current!.value = "";
    setTitle("")
    setErrorMessage("")

    const newUser: User = { id: id, username: username, age: age };

    onListChange(newUser);
  };

  return (
    <>
      { errorMessage && <ErrorModal title={title} errorMessage={errorMessage} onError={errorHandler} />}

      <Card className={styles.form}>
        <form onSubmit={submitHandler}>
          <div>
            <label htmlFor="username">Username</label>
            <br />
            <input type="text" id="username" ref={usernameRef} />
          </div>

          <div>
            <label htmlFor="age">Age</label>
            <br />
            <input type="number" id="age" ref={ageRef} />
          </div>

          <Button>Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default UserInput;
