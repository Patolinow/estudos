import ReactDOM from "react-dom";
import { ModalWrapper } from "../ModalWrapper";
import { ModalForm } from "../ModalForm";

interface ModalProps {
  openCloseHandler(): void;
}

const ModalPortal = ({ openCloseHandler }: ModalProps): JSX.Element => {
  return <ModalForm openCloseHandler={openCloseHandler} />;
};

const Modal = ({ openCloseHandler }: ModalProps): JSX.Element => {
  const modalRoot = document.getElementById("modal-root")!;
  return (
    <>
      {ReactDOM.createPortal(<ModalWrapper onClick={openCloseHandler} />, modalRoot)}
      {ReactDOM.createPortal(<ModalPortal openCloseHandler={openCloseHandler} />, modalRoot)}
    </>
  );
};

export default Modal;
