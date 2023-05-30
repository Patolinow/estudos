import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import IItemProps from '../../interfaces/IitemProps';

const ProductItem = ({title, price, description}:IItemProps) => {
 

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
