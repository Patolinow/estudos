import "./Modal.css";
import Backdrop from "../Backdrop/Backdrop";
import { createPortal } from "react-dom";

interface IModalProps {
  closed: () => void;
}
const ModalPortal = (props: IModalProps) => (
  <>
    <Backdrop onClick={props.closed} />
    <div className="Modal">
      <h1>A Modal</h1>
      <button className="Button" onClick={props.closed}>
        Dismiss
      </button>
    </div>
  </>
);

const Modal = (props: IModalProps) => {
  const root = document.getElementById("modal-root");
  return createPortal(<ModalPortal closed={props.closed} />, root || document.body);
};

export default Modal;
