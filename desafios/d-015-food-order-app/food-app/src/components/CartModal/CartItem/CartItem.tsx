import styles from "./CartItem.module.css";
import Button from "../../UI/Button/Button";
import NewMeal from "../../../interfaces/NewMeal";

interface CartItemProps {
  meal: NewMeal;
  onDecrease: (meal:NewMeal) => void;
  onIncrease: (meal:NewMeal) => void;
}

// Adicionar botão para limpar
const CartItem = ({ meal, onDecrease, onIncrease }: CartItemProps): JSX.Element => {
  const formatedPrice = meal.price.toLocaleString("en-US", {maximumFractionDigits: 2, minimumFractionDigits: 2})
  
  const decreaseHandler = () => {
    onDecrease(meal)
  };

  const increaseHandler = () => {
    onIncrease(meal)
  }


  return (
    <li key={meal.id} className={styles["cart-item"]}>
      <div>
        <h2>{meal.name}</h2>
        <div className={styles.summary}>
          <p className={styles.price}>${formatedPrice}</p>
          <p className={styles.amount}>x {meal.amount}</p>
        </div>
      </div>

      <div className={styles.actions}>
        <Button onClick={decreaseHandler}>-</Button>
        <Button onClick={increaseHandler}>+</Button>
      </div>
    </li>
  );
};

export default CartItem;
