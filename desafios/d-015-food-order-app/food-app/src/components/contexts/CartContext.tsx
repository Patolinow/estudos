import React, { PropsWithChildren, useContext, useEffect, useState } from "react";
import NewMeal from "../../interfaces/NewMeal";
import LocalStorageController from "../../controllers/localStorageController";

interface NewGlobalMeal {
  onNewMeal: (newMeal: NewMeal) => void;
  meals: NewMeal[];
  totalAmount: number;
  onReset: () => void;
}

const CartContext = React.createContext<NewGlobalMeal>({
  onNewMeal: (newMeal: NewMeal) => {},
  meals: [],
  totalAmount: 0,
  onReset: () => {}
});

export const CartContextProvider = (props: PropsWithChildren) => {
  const mealsKey = "mealsList";
  const localStorageMeals: NewMeal[] = LocalStorageController.get(mealsKey);
  const [meals, setMeals] = useState(localStorageMeals);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const calculatedTotalAmount = meals.reduce(
      (total, meal) => total + meal.amount,
      0
    );
    setTotalAmount(calculatedTotalAmount);
  }, [meals]);

  const newMealHandler = (newMeal: NewMeal) => {
    const existingMealIndex = meals.findIndex(meal => meal.id === newMeal.id);

    if (existingMealIndex !== -1) {
      const updatedMeals = [...meals];
      updatedMeals[existingMealIndex].amount += newMeal.amount;
      setMeals(updatedMeals);
    } else {
      const newMeals = [...meals, newMeal];
      setMeals(newMeals);
    }

    LocalStorageController.set(mealsKey, meals);
  };

  const resetHandler = () => {
    LocalStorageController.set(mealsKey, []);
  };

  return (
    <CartContext.Provider
      value={{
        onNewMeal: newMealHandler,
        meals: meals,
        totalAmount: totalAmount,
        onReset: resetHandler
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
