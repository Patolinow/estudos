import Card from '../UI/Card';
import classes from './Cart.module.css';
import ICartItemProps from '../../interfaces/ICartItemProps';
import CartItem from './CartItem';

const Cart = () => {
  const items:ICartItemProps[] = []
  return (
    <Card className={classes.cart}>
        <h2>Your Shopping Cart</h2>
        <ul>
          {items.map((item) => 
             <CartItem item={item} key={item.id}/>
          )}
          
        </ul>
    </Card>
  );
};

export default Cart;
