import classes from './CartItem.module.css';
import ICartItemProps from '../../interfaces/ICartItemProps';
import { useAppDispatch } from '../../hooks/use-redux';
import { cartActions } from '../../store/reducers/CartSlice';

const CartItem = ({item}:{item:ICartItemProps}) => {
  const dispatch = useAppDispatch()
  const increaseHandler = () => {
    dispatch(cartActions.changeQuantity({id: item.id, type: 'increase'}))
  }

  const decreaseHandler = () => {
    dispatch(cartActions.changeQuantity({id: item.id, type: "decrease"}))
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{item.title}</h3>
        <div className={classes.price}>
          ${item.total?.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${item.price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{item.quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={decreaseHandler}>-</button>
          <button onClick={increaseHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
