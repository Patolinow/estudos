import NewMeal from "../../interfaces/NewMeal";
import React from "react";

interface NewGlobalMeal {
  meals: NewMeal[];
  totalAmount: number;
  finalValue: number;
  onNewMeal: (newMeal: NewMeal) => void;
  onReset: () => void;
  onDecrease: (meal: NewMeal) => void;
  onIncrease: (meal: NewMeal) => void;
}

const CartContext = React.createContext<NewGlobalMeal>({
  meals: [],
  totalAmount: 0,
  finalValue: 0,
  onNewMeal: (newMeal: NewMeal) => {},
  onReset: () => {},
  onDecrease: (meal: NewMeal) => {},
  onIncrease: (meal: NewMeal) => {},
});

export default CartContext;
