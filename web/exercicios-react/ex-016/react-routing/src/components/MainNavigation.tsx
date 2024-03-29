import {NavLink} from "react-router-dom"
import styles from "./MainNavigation.module.css"

const MainNavigation = () => {
  return (<header className={styles.header}>
    <nav>
      <ul className={styles.list}>
        <li><NavLink to={""} className={({isActive}) => isActive ? styles.active : ""}>Home</NavLink></li>
        <li><NavLink to={"products"} className={({isActive}) => isActive ? styles.active : ""}>Products</NavLink></li>
      </ul>
    </nav>
  </header>)
}

export default MainNavigation