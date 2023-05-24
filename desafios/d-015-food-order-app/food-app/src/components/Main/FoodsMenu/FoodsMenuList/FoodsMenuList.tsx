import Card from "../../../UI/Card/Card";
import styles from "./FoodsMenuList.module.css";
import FoodsMenuItem from "../FoodsMenuItem/FoodsMenuItem";
import Meal from "../../../../interfaces/Meal";
import useFetch from "../../../../hooks/use-fetch";
import loadingSvg from "../../../../assets/loading.svg";
import { useEffect } from "react";

const FoodsMenuList = (): JSX.Element => {
  const url = "https://max-http-requests-default-rtdb.firebaseio.com/meals.json";
  const { sendRequest, isLoading, errorMessage, requestedData } = useFetch();

  useEffect(() => {
    sendRequest({ url: url, requestMethod: "GET" });
  }, [sendRequest]);

  if (isLoading) {
    return (
      <Card className={styles.meals}>
        <img className={styles.notMeals} src={loadingSvg} alt="Loading..." />
      </Card>
    );
  }

  if (errorMessage) {
    return (
      <Card className={styles.meals}>
        <p className={styles.notMeals}>{errorMessage}</p>
      </Card>
    );
  }

    const meals: Meal[] = [];

    for (const key in requestedData) {
      if (Object.prototype.hasOwnProperty.call(requestedData, key)) {
        const mealRequested: Meal = {
          id: key,
          name: requestedData[key].name,
          description: requestedData[key].description,
          price: requestedData[key].price,
        };
        meals.push(mealRequested);
      }
    }
  
  

  return (
    <Card className={styles.meals}>
      <ul>
        {meals.map((meal) => (
          <FoodsMenuItem meal={meal} key={meal.id} />
        ))}
      </ul>
    </Card>
  );
};

export default FoodsMenuList;
