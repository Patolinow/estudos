import styles from "./CartList.module.css";
import Button from "../../UI/Button/Button";
import CartItem from "../CartItem/CartItem";
import CartContext from "../../contexts/CartContext";
import { useContext, useEffect, useState } from "react";

interface CartListProps {
  onClose(): void;
}
// Corrigir total quando tem scrollbar
const CartList = ({ onClose }: CartListProps): JSX.Element => {
  const cartContext = useContext(CartContext);
  const meals = cartContext.meals;
  const finalValue = cartContext.finalValue.toLocaleString("en-US", {maximumFractionDigits: 2, minimumFractionDigits: 2});
  const decreaseHandler = cartContext.onDecrease;
  const increaseHandler = cartContext.onIncrease;
  const resetHandler = cartContext.onReset;

  const closeHandler = () => {
    onClose();
  };

  const orderHandler = () => {
    // Adicionar useEffect para pedir apenas 1 vez
    console.log("ordering...");
  };

  return (
    <div className={styles["cart-items"]}>
      <ul>
        {meals.map((meal) => (
          <CartItem
            key={meal.id}
            meal={meal}
            onDecrease={decreaseHandler}
            onIncrease={increaseHandler}
          />
        ))}
      </ul>

      <div className={styles.total}>
        <h1>Total Amount</h1>
        <h2>${finalValue}</h2>
      </div>

      <div className={styles.actions}>
        <Button className={styles.reset} onClick={resetHandler}>
          Clear
        </Button>

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
