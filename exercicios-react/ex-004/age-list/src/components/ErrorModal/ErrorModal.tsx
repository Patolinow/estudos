import Card from "../../UI/Card/Card";
import styles from "./ErrorModal.module.css";
import Button from "../../UI/Button/Button";
import { useState } from "react";

interface ErrorProps {
  title: string,
  errorMessage: string,
  onError():void
}

const ErrorModal = ({title ,errorMessage, onError}:ErrorProps): JSX.Element => {

  const closeErrorHandler = () => {
    onError()
  };

  return (
    <div className={styles[`error-wrapper`]}>
      <Card>
        <header>
          <h1>{title}</h1>
        </header>

        <main>
          <p>{errorMessage}</p>

          <Button onClick={closeErrorHandler}>Okay</Button>
        </main>
      </Card>
    </div>
  );
};

export default ErrorModal;
