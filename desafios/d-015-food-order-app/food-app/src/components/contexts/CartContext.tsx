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
  const localStorageMeals: NewMeal[] = LocalStorageController.get("mealsList");
  const [meals, setMeals] = useState(localStorageMeals);
  const [totalAmount, setTotalAmount] = useState(0);
  const mealsKey = "mealsList";

  useEffect(() => {
    for (const meal of meals) {
      setTotalAmount((prevAmount) => {
        return (prevAmount += meal.amount);
      });
    }
  }, []);

  const newMealHandler = (newMeal: NewMeal) => {
    
    const parsedLocalStorageMeals: NewMeal[] = LocalStorageController.get(mealsKey);
    let mealExist = false;
    for (const localStorageMeal of parsedLocalStorageMeals) {
      if (localStorageMeal.id === newMeal.id) {
        localStorageMeal.amount += newMeal.amount;
        mealExist = true;
      }
    }

    if (!mealExist) {
      parsedLocalStorageMeals.push(newMeal);
    }

    LocalStorageController.set(mealsKey, parsedLocalStorageMeals);
    LocalStorageController.set(mealsKey, [])

    setMeals((prevMeals) => {
      return [...prevMeals, newMeal];
    });
  };

  const resetHandler = () => {
    
  }

  return (
    <CartContext.Provider
      value={{ onNewMeal: newMealHandler, meals: meals, totalAmount: totalAmount, onReset: resetHandler}}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
