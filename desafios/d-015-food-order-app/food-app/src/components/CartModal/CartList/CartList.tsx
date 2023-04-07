import styles from "./CartList.module.css";
import Button from "../../UI/Button/Button";
import CartItem from "../CartItem/CartItem";
import { useEffect } from "react";

interface CartListProps {
  onClose():void
}
// Corrigir total quando tem scrollbar
const CartList = ({onClose}:CartListProps): JSX.Element => {

  const closeHandler = () => {
    onClose()
  };

  const orderHandler = () => {
    // Adicionar useEffect para pedir apenas 1 vez
    console.log("ordering...");
  };

  return (
    <div className={styles["cart-items"]}>
      <ul>
        <CartItem />
      </ul>

      <div className={styles.total}>
        <h1>Total Amount</h1>
        <h2>$55.99</h2>
      </div>

      <div className={styles.actions}>
        <Button className={styles.close} onClick={closeHandler}>
          Close
        </Button>

        <Button className={styles.order} onClick={orderHandler}>
          Order
        </Button>
      </div>
    </div>
  );
};

export default CartList;
