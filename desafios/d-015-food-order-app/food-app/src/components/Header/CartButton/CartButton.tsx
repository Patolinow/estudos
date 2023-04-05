import Button from "../../UI/Button/Button";
import CartIcon from "../../../assets/CartIcon.svg";
import styles from "./CartButton.module.css"
import CartModal from "../../CartModal/CartModal";
import { useState } from "react";

const CartButton = (): JSX.Element => {
  const [cartState, setCartState] = useState(false)

  const cartHandler = () => {
    setCartState(true)
  }

  return (<>
    {cartState && <CartModal/>}

    <Button className={`${styles["cart-button"]} ${styles.bump}`} onClick={cartHandler}>
      <img src={CartIcon} className={styles["cart-icon"]} /> 
      <p>Your Cart</p> 
      <div className={styles.badge}>5</div>
    </Button>
    </>
  );
};

export default CartButton;
