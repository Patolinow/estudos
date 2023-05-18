import Card from "../../../UI/Card/Card"
import styles from "./FoodsMenuList.module.css"
import FoodsMenuItem from "../FoodsMenuItem/FoodsMenuItem"
import Meal from "../../../../interfaces/Meal"
import useFetch from "../../../../hooks/use-fetch"
import loadingSvg from "../../../../assets/loading.svg"

// colocar td aki e fazer requisição aki
const FoodsMenuList = ():JSX.Element => {
const url = "https://max-http-requests-default-rtdb.firebaseio.com/meals.json"
const mealsRequest = useFetch({url: url, requestMethod: "GET"})
const meals: Meal[] = []

for (const key in mealsRequest.requestedData) {
  if (Object.prototype.hasOwnProperty.call(mealsRequest.requestedData, key)) {

    const mealRequested:Meal = {
      id: key,
      name: mealsRequest.requestedData[key].name,
      description: mealsRequest.requestedData[key].description,
      price: mealsRequest.requestedData[key].price
    }
    meals.push(mealRequested)
  }
}


const mealsLoaded =  <ul> {meals.map((meal) => <FoodsMenuItem meal={meal} key={meal.id}/>)}</ul>
const loading = mealsRequest.isLoading ? <img className={styles.notMeals} src={loadingSvg} alt="Loading..." /> : undefined
const error = mealsRequest.errorMessage ? <p className={styles.notMeals}>{mealsRequest.errorMessage}</p> : undefined


return (<Card className={styles.meals}>
 {loading || error || mealsLoaded}
</Card>)
}

export default FoodsMenuList