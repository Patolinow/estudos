import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import IItemProps from '../../interfaces/IitemProps';
import { useAppDispatch } from '../../hooks/use-redux';
import { cartActions } from '../../store/reducers/CartSlice';

const ProductItem = ({id, title, price, description}:IItemProps) => {
 const dispatch = useAppDispatch()
 const clickHandler = () => {
  dispatch(cartActions.addToCart({id, title, price, quantity: 1, total: price}))
 }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={clickHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
