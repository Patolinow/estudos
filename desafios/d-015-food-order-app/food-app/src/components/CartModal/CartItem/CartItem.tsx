import styles from "./CartItem.module.css"
import Button from "../../UI/Button/Button";

const CartItem = (): JSX.Element => {
  const dummy_meal = {
    id: "m1",
    name: "Sushi",
    amount: 2,
    price: 22.99,
  };

  return <li key={dummy_meal.id} className={styles["cart-item"]}>
    <div>
      <h2>{dummy_meal.name}</h2>
      <div className={styles.summary}>
        <p className={styles.price}>${dummy_meal.price}</p>
        <p className={styles.amount}>x {dummy_meal.amount}</p>
      </div>
    </div>

    <div className={styles.actions}>
      <Button>-</Button>
      <Button>+</Button>
    </div>
  </li>;
};

export default CartItem;
