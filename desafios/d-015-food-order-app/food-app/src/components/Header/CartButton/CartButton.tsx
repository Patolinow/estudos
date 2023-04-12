import Button from "../../UI/Button/Button";
import CartIcon from "../../../assets/CartIcon.svg";
import styles from "./CartButton.module.css"
import CartModal from "../../CartModal/CartModal";
import CartContext from "../../contexts/CartContext";
import { useState, useContext } from "react";

const CartButton = (): JSX.Element => {
  const [cartState, setCartState] = useState(false)
  const cartContext = useContext(CartContext)


  const openCartHandler = ():void => {
    setCartState(true)
  }

  const closeCartHandler = ():void => {
    setCartState(false)
  }

  return (<>
    {cartState && <CartModal onClose={closeCartHandler}/>}

    <Button className={`${styles["cart-button"]} ${styles.bump}`} onClick={openCartHandler}>
      <img src={CartIcon} className={styles["cart-icon"]} /> 
      <p>Your Cart</p> 
      <div className={styles.badge}>{cartContext.totalAmount}</div>
    </Button>
    </>
  );
};

export default CartButton;
