import styles from "./Main.module.css";
import Tagline from "./Tagline/Tagline";
import FoodsMenuList from "./FoodsMenu/FoodsMenuList/FoodsMenuList";
import Meal from "../../interfaces/Meal";

interface MainProps {
  meals: Meal[]
}

const Main = ({meals}:MainProps):JSX.Element => {
  return (
    <main className={styles.main}>
      <div className={`${styles["main-image"]}`}/>

      <Tagline/>

      <FoodsMenuList meals={meals}/>
    </main>
  );
};

export default Main;
