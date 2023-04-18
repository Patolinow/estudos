import styles from "./FoodsMenuItem.module.css";
import FoodsMenuInput from "./FoodsMenuInput/FoodsMenuInput";
import Meal from "../../../../interfaces/Meal";

interface FoodsMenuItemProps {
  meal: Meal;
}

const FoodsMenuItem = ({ meal }: FoodsMenuItemProps): JSX.Element => {
  const mealInfos = {
    id: meal.id,
    name: meal.name,
    price: meal.price,
  };
  const formatedPrice = meal.price.toLocaleString("en-US", {minimumFractionDigits: 2, maximumFractionDigits: 2})

  return (
    <li className={styles.meal}>
      <div>
        <h3>{meal.name}</h3>
        <p className={styles.description}>{meal.description}</p>
        <p className={styles.price}>${formatedPrice}</p>
      </div>
      <FoodsMenuInput
        mealInfos={mealInfos}
      />
    </li>
  );
};

export default FoodsMenuItem;
