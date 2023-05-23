import styles from "./CartModal.module.css";
import CartList from "./CartList/CartList";
import ManageCartForm from "./ManageCartForm/ManageCartForm";
import ReactDOM from "react-dom";
import { useState } from "react";

interface CartModalProps {
  onClose():void
}

const ModalWrapper = ({onClose}:CartModalProps) => {
  return (
    <div className={styles.backdrop} onClick={onClose}></div>
  )
}

const PortalCartModal = ({onClose}:CartModalProps): JSX.Element => {
  const [showCartList, setShowCartList] = useState(true)
  const proceedReturnHandler = () => {
    setShowCartList(!showCartList)
  }

  return (
      <div className={styles.modal}>
        {showCartList ? <CartList onClose={onClose} onProceedReturn={proceedReturnHandler}/> : <ManageCartForm onClose={onClose} onProceedReturn={proceedReturnHandler}/>}
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
