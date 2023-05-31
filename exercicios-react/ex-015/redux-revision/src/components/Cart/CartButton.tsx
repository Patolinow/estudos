import classes from './CartButton.module.css';
import { useAppDispatch } from '../../hooks/use-redux';
import { cartActions } from '../../store/reducer/CartSlice';

const CartButton = () => {
  const dispatch = useAppDispatch()
  
  const clickHandler = () => {
    dispatch(cartActions.openClose())
  }

  return (
    <button className={classes.button} onClick={clickHandler}>
      <span>My Cart</span>
      <span className={classes.badge}></span>
    </button>
  );
};

export default CartButton;
