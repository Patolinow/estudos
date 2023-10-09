import "./Modal.css";
import Backdrop from "../Backdrop/Backdrop";
import { createPortal } from "react-dom";
import {animated, SpringValues, Lookup} from "@react-spring/web"

interface IModalProps {
  closed: () => void;
  style: SpringValues<Lookup<number>>;
}

const ModalPortal = (props: IModalProps) => (
  <>
    <Backdrop onClick={props.closed} style={props.style} />
    <animated.div style={props.style} className="Modal">
      <h1>A Modal</h1>
      <button className="Button" onClick={props.closed}>
        Dismiss
      </button>
    </animated.div>
  </>
);

const Modal = (props: IModalProps) => {
  const root = document.getElementById("modal-root");
  return createPortal(<ModalPortal style={props.style} closed={props.closed} />, root || document.body);
};

export default Modal;
