import Card from "../../../UI/Card/Card"
import styles from "./FoodsMenuList.module.css"
import FoodsMenuItem from "../FoodsMenuItem/FoodsMenuItem"
import Meal from "../../../../interfaces/Meal"

interface FoodsMenuListProps {
  meals: Meal[]
}

const FoodsMenuList = ({meals}:FoodsMenuListProps):JSX.Element => {
return (<Card className={styles.meals}>
  <ul>
    {meals.map((meal) => <FoodsMenuItem meal={meal} key={meal.id}/>)}
  </ul>
</Card>)
}

export default FoodsMenuList