import styles from "./CartItem.module.css"
import Button from "../../UI/Button/Button";

  const formatedPrice = meal.price.toLocaleString("en-US", {maximumFractionDigits: 2, minimumFractionDigits: 2})
  };

  return <li key={dummy_meal.id} className={styles["cart-item"]}>
    <div>
      <h2>{dummy_meal.name}</h2>
      <div className={styles.summary}>
          <p className={styles.price}>${formatedPrice}</p>
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
