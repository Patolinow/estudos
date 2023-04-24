import Button from "../../UI/Button/Button";
import CartIcon from "../../../assets/CartIcon.svg";
import styles from "./CartButton.module.css"
import CartModal from "../../CartModal/CartModal";
import CartContext from "../../contexts/CartContext";
import { useState, useContext, useEffect } from "react";

const CartButton = (): JSX.Element => {
  const [cartState, setCartState] = useState(false)
  const [buttonAnimation, setButtonAnimation] = useState(false)
  const { totalAmount } = useContext(CartContext)
  const buttonClass = `${styles["cart-button"]} ${buttonAnimation ? styles.bump : ""}`

  useEffect(() => {
    setButtonAnimation(true)
    const timer = setTimeout(() => {
      setButtonAnimation(false)
    }, 500)

    return () => {
      clearTimeout(timer)
    }
  }, [totalAmount])

  const openCartHandler = ():void => {
    setCartState(true)
  }

  const closeCartHandler = ():void => {
    setCartState(false)
  }

  return (
    <>
      {cartState && <CartModal onClose={closeCartHandler}/>}

      <Button className={buttonClass} onClick={openCartHandler}>
        <img src={CartIcon} className={styles["cart-icon"]} /> 
        <p>Your Cart</p> 
        <div className={styles.badge}>{totalAmount}</div>
      </Button>
    </>
  );
};

export default CartButton;
