import ReactDOM from "react-dom";
import { ModalWrapper } from "../ModalWrapper";
import { ModalForm } from "../ModalForm";

const ModalPortal = (): JSX.Element => {
  
  return (
    <ModalWrapper>
      <ModalForm/>
    </ModalWrapper>
  );
};

const Modal = (): JSX.Element => {
  return <>{ReactDOM.createPortal(<ModalPortal />, document.getElementById("modal-root")!)}</>;
};

export default Modal;
