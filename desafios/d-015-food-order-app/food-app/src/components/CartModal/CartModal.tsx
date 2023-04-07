import styles from "./CartModal.module.css";
import CartList from "./CartList/CartList";
import ReactDOM from "react-dom";

interface CartModalProps {
  onClose():void
}

const PortalCartModal = ({onClose}:CartModalProps): JSX.Element => {
  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <CartList onClose={onClose}/>
      </div>
    </div>
  );
};

const CartModal = ({onClose}:CartModalProps): JSX.Element => {
  return (<>
  {ReactDOM.createPortal(<PortalCartModal onClose={onClose}/>, document.getElementById("modal-root")!)}
  </>)
};

export default CartModal;
