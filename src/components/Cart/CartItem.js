import classes from "./CartItem.module.css";
import { useDispatch } from "react-redux";
import { myProductsActions } from "../../store/cartItemSlice";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const { title, quantity, total, price } = props.item;

  const increaseItemHandler = () => {
    dispatch(myProductsActions.increaseQuantity(title));
  };

  const decreaseItemHandler = () => {
    dispatch(myProductsActions.decreaseQuantity(title));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={decreaseItemHandler}>-</button>
          <button onClick={increaseItemHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
