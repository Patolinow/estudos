import styles from "./Header.module.css"
import CartButton from "./CartButton/CartButton"

const Header = ():JSX.Element => {
  return (<header className={styles.header}>
<h1><a href="#">ReactMeals</a></h1>
<CartButton/>
  </header>)
}

export default Header