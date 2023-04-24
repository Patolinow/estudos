import styles from "./CartModal.module.css";
import CartList from "./CartList/CartList";
import ReactDOM from "react-dom";

interface CartModalProps {
  onClose():void
}

const ModalWrapper = ({onClose}:CartModalProps) => {
  return (
    <div className={styles.backdrop} onClick={onClose}>

    </div>
  )
}

const PortalCartModal = ({onClose}:CartModalProps): JSX.Element => {
  return (
      <div className={styles.modal}>
        <CartList onClose={onClose}/>
      </div>
  );
};

const CartModal = ({onClose}:CartModalProps): JSX.Element => {
  const modalRoot = document.getElementById("modal-root")!
  return (<>
  {ReactDOM.createPortal(<PortalCartModal onClose={onClose}/>, modalRoot)}
  {ReactDOM.createPortal(<ModalWrapper onClose={onClose}/>, modalRoot)}
  </>)
};

export default CartModal;
