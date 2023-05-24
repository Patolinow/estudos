import styles from "./CartList.module.css";
import Button from "../../UI/Button/Button";
import CartItem from "../CartItem/CartItem";
import CartContext from "../../contexts/CartContext";
import { useContext } from "react";

interface CartListProps {
  onClose(): void;
  onProceedReturn: () => void;
}
// Corrigir total quando tem scrollbar
const CartList = ({ onClose, onProceedReturn }: CartListProps): JSX.Element => {
  const cartContext = useContext(CartContext);
  const finalValue = cartContext.finalValue.toLocaleString("en-US", {maximumFractionDigits: 2, minimumFractionDigits: 2});
  const decreaseHandler = cartContext.onDecrease;
  const increaseHandler = cartContext.onIncrease;
  const resetHandler = cartContext.onReset;

  const dontHasMeals = <h1 className={styles["no-meals"]}>There are no meals yet</h1>
  const hasMeals =  <ul>
  {cartContext.meals.map((meal) => (
    <CartItem
      key={meal.id}
      meal={meal}
      onDecrease={decreaseHandler}
      onIncrease={increaseHandler}
    />
  ))}
</ul>

  return (
    <div className={styles["cart-items"]}>
     
     {cartContext.meals.length ? hasMeals : dontHasMeals}

      <div className={styles["total-and-actions"]}>
        <div className={styles.total}>
          <h1>Total Amount</h1>
          <h2>${finalValue}</h2>
        </div>
        <div className={styles.actions}>
          <Button className={styles.reset} onClick={resetHandler}>
            Clear
          </Button>
          <Button className={styles.close} onClick={onClose}>
            Close
          </Button>
          <Button className={styles.order} onClick={onProceedReturn}>
            Order
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartList;
