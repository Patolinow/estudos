import Button from "../../UI/Button/Button";
import CartIcon from "../../../assets/CartIcon.svg";
import styles from "./CartButton.module.css"

const CartButton = (): JSX.Element => {
  return (
    <Button className={`${styles["cart-button"]} ${styles.bump}`}>
      <img src={CartIcon} className={styles["cart-icon"]} /> 
      <p>Your Cart</p> 
      <div className={styles.badge}>5</div>
    </Button>
  );
};

export default CartButton;
