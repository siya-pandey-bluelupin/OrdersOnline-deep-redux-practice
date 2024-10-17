import { useDispatch, useSelector } from 'react-redux';
import classes from './CartButton.module.css';
import { uiActions } from '../../store/ui-slice';

const CartButton = (props) => {
  const dispatch=useDispatch();
  const cartQty=useSelector(state=>state.cart.totalQuantity);
  const handleCartClick=()=>{
dispatch(uiActions.toggleCart());
  }
  return (
    <button className={classes.button} 
   onClick={handleCartClick}
    >
      <span>My Cart</span>
      <span className={classes.badge}>{cartQty}</span>
    </button>
  );
};

export default CartButton;
