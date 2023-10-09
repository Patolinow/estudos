import classes from "./CartButton.module.css"
import { useAppDispatch, useAppSelector } from "../../hooks/use-redux"
import { cartActions } from "../../store/reducers/CartSlice"

const CartButton = () => {
  const totalQuantity = useAppSelector((state) => state.cart.totalQuantity)
  const dispatch = useAppDispatch()

  const clickHandler = () => {
    dispatch(cartActions.openClose())
  }

  return (
    <button className={classes.button} onClick={clickHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  )
}

export default CartButton
