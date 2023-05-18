import styles from "./Main.module.css";
import Tagline from "./Tagline/Tagline";
import FoodsMenuList from "./FoodsMenu/FoodsMenuList/FoodsMenuList";

const Main = ():JSX.Element => {
  return (
    <main className={styles.main}>
      <div className={`${styles["main-image"]}`}/>

      <Tagline/>

      <FoodsMenuList/>
    </main>
  );
};

export default Main;
