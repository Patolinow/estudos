import { PropsWithChildren, useEffect, useState } from "react";
import CartContext from "./CartContext";
import LocalStorageController from "../../controllers/localStorageController";
import NewMeal from "../../interfaces/NewMeal";


const CartContextProvider = (props: PropsWithChildren) => {
  const mealsKey = "mealsList";
  const hasMeal = LocalStorageController.has(mealsKey)
  if (!hasMeal) {
    LocalStorageController.set(mealsKey, [])
  }
  const localStorageMeals: NewMeal[] = LocalStorageController.get(mealsKey);
  const [meals, setMeals] = useState(localStorageMeals);
  const [totalAmount, setTotalAmount] = useState(0);
  const [finalValue, setFinalValue] = useState(0);

  useEffect(() => {
    const calculatedTotalAmount = meals.reduce((total, meal) => total + meal.amount, 0);
    setTotalAmount(calculatedTotalAmount);

    const calculateFinalValue = meals.reduce((total, meal) => total + meal.amount * meal.price, 0);
    setFinalValue(calculateFinalValue);
  }, [meals]);

  const newMealHandler = (newMeal: NewMeal) => {
    const existingMealIndex = meals.findIndex((meal) => meal.id === newMeal.id);

    if (existingMealIndex !== -1) {
      const updatedMeals = [...meals];
      updatedMeals[existingMealIndex].amount += newMeal.amount;
      
      setMeals( () => {
        LocalStorageController.set(mealsKey, meals);
        return updatedMeals
      });
    } else {
      const newMeals = [...meals, newMeal];
      setMeals(() => {
        LocalStorageController.set(mealsKey, meals);
        return newMeals
      });
    }

    
  };

  const resetHandler = () => {
    setMeals([]);
    LocalStorageController.set(mealsKey, meals);
  };

  const decreaseHandler = (meal: NewMeal) => {
    const actualMealIndex = localStorageMeals.findIndex(
      (localStorageMeal) => localStorageMeal.id === meal.id
    );

    if (actualMealIndex !== -1) {
      const updatedMeals = [...meals];
      updatedMeals[actualMealIndex].amount -= 1;

      setMeals(() => {
        return updatedMeals.filter((meal) => meal.amount > 0)
      });
    }

    LocalStorageController.set(mealsKey, meals);
  };

  const increaseHandler = (meal: NewMeal) => {
    const actualMealIndex = localStorageMeals.findIndex(
      (localStorageMeal) => localStorageMeal.id === meal.id
    );
    if (actualMealIndex !== -1) {
      const updatedMeals = [...meals];
      updatedMeals[actualMealIndex].amount += 1;
      setMeals(() => {
        return updatedMeals
      });
    }

    LocalStorageController.set(mealsKey, meals);
  };

  return (
    <CartContext.Provider
      value={{
        finalValue: finalValue,
        meals: meals,
        totalAmount: totalAmount,
        onNewMeal: newMealHandler,
        onReset: resetHandler,
        onDecrease: decreaseHandler,
        onIncrease: increaseHandler,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider