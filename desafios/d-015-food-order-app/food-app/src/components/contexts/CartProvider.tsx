import { PropsWithChildren, useEffect, useState } from "react";
import CartContext from "./CartContext";
import NewMeal from "../../interfaces/NewMeal";
import useLocalStorage from "../../hooks/use-localStorage";

const CartContextProvider = (props: PropsWithChildren) => {
  const mealsKey = "mealsList";
  const reactLocalStorage = useLocalStorage()
  const hasMeal = reactLocalStorage.has(mealsKey);
  if (!hasMeal) {
    reactLocalStorage.set(mealsKey, []);
  }
  const localStorageMeals: NewMeal[] = reactLocalStorage.get(mealsKey);
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

      setMeals(() => {
        reactLocalStorage.set(mealsKey, updatedMeals);
        return updatedMeals;
      });
    } else {
      const newMeals = [...meals, newMeal];
      setMeals(() => {
        reactLocalStorage.set(mealsKey, newMeals);
        return newMeals;
      });
    }
  };

  const resetHandler = () => {
    setMeals([]);
    reactLocalStorage.set(mealsKey, meals);
  };

  const decreaseHandler = (meal: NewMeal) => {
    const actualMealIndex = localStorageMeals.findIndex(
      (localStorageMeal) => localStorageMeal.id === meal.id
    );

    if (actualMealIndex !== -1) {
      const updatedMeals = [...meals];
      updatedMeals[actualMealIndex].amount -= 1;

      setMeals(() => {
        const filteredMeals = updatedMeals.filter((meal) => meal.amount > 0);

        reactLocalStorage.set(mealsKey, filteredMeals);
        return filteredMeals;
      });
    }
  };

  const increaseHandler = (meal: NewMeal) => {
    const actualMealIndex = localStorageMeals.findIndex(
      (localStorageMeal) => localStorageMeal.id === meal.id
    );
    if (actualMealIndex !== -1) {
      const updatedMeals = [...meals];
      updatedMeals[actualMealIndex].amount += 1;
      setMeals(() => {
        reactLocalStorage.set(mealsKey, updatedMeals);
        return updatedMeals;
      });
    }
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

export default CartContextProvider;
