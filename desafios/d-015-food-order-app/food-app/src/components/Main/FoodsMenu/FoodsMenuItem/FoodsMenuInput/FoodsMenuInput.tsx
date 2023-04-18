import styles from "./FoodsMenuInput.module.css";
import Button from "../../../../UI/Button/Button";
import { useContext, useRef } from "react";
import NewMeal from "../../../../../interfaces/NewMeal";
import CartContext from "../../../../contexts/CartContext";

interface InputProps {
  mealInfos: { id: string; name: string; price: number };
}

const FoodsMenuInput = ({ mealInfos }: InputProps): JSX.Element => {
  const cartContext = useContext(CartContext)
  const amountRef = useRef<HTMLInputElement>(null);

  const submitHandler: React.FormEventHandler = (e) => {
    e.preventDefault();

    const handledAmount = Number(amountRef.current!.value);
    
    if (handledAmount <= 0 || handledAmount > 99) {
      return;
    }

    const newMeal: NewMeal = {
      id: mealInfos.id,
      name: mealInfos.name,
      price: mealInfos.price,
      amount: handledAmount,
    };

    cartContext.onNewMeal(newMeal)
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <div className={styles.input}>
        <label htmlFor="numInput">Amout</label>
        <input
          ref={amountRef}
          type="number"
          name="numInput"
          min={1}
          max={99}
          id="numInput"
          defaultValue={1}
        />
      </div>
      <Button>+ Add</Button>
    </form>
  );
};

export default FoodsMenuInput;
