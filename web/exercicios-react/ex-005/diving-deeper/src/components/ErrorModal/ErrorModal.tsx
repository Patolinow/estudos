import Card from "../../UI/Card/Card";
import styles from "./ErrorModal.module.css";
import Button from "../../UI/Button/Button";
import ReactDOM from "react-dom";

interface ErrorProps {
  title: string,
  errorMessage: string,
  onError():void
}

const MyModal = ({title ,errorMessage, onError}:ErrorProps): JSX.Element => {

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

const ErrorModal = ({title ,errorMessage, onError}:ErrorProps):JSX.Element => {
  return (<>
  {ReactDOM.createPortal(<MyModal onError={onError} title={title} errorMessage={errorMessage} />, document.getElementById("modal-root")!)}
  </>)
}

export default ErrorModal;
