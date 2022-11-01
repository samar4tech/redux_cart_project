import classes from "./CartButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { myCartActions } from "../../store/myCartSlice";

const CartButton = (props) => {
  const cartItems = useSelector((state) => state.myProducts.cartProducts);
  const dispatch = useDispatch();

  const toggleCartHandler = () => {
    dispatch(myCartActions.toggleShoppingCart());
  };

  return (
    <button onClick={toggleCartHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartItems.length}</span>
    </button>
  );
};

export default CartButton;
