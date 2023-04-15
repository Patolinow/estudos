import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Meal from "./interfaces/Meal";
import { useState, useEffect } from "react";
import LocalStorageController from "./controllers/localStorageController";

function App() {
  const DUMMY_MEALS: Meal[] = [
    {
      id: "m1",
      name: "Sushi",
      description: "Finest fish and veggies",
      price: 22.99,
    },
    {
      id: "m2",
      name: "Schnitzel",
      description: "A german specialty!",
      price: 16.5,
    },
    {
      id: "m3",
      name: "Barbecue Burger",
      description: "American, raw, meaty",
      price: 12.99,
    },
    {
      id: "m4",
      name: "Green Bowl",
      description: "Healthy...and green...",
      price: 18.99,
    },
    {
      id: "m5",
      name: "Mozzarella Cheese Pizza",
      description: "Blessed by Gyro Zeppeli",
      price: 18.66,
    },
  ];
  const [meals, setMeals] = useState(DUMMY_MEALS);

  useEffect(() => {
    const mealsKey = "mealsList"
    const localStorageHasValue = LocalStorageController.has(mealsKey)

    if (!localStorageHasValue) {
      LocalStorageController.set("mealsList", []);
    } 

  }, []);

  return (  
    <div className="App">
      <Header />
      <Main meals={meals} />
    </div>
  );
}

export default App;
