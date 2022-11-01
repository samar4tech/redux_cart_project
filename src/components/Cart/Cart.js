import { Fragment } from "react";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Cart = (props) => {
  const isVisible = useSelector((state) => state.myCart.isShoppingCartVisible);
  const cartItem = useSelector((state) => state.myProducts.cartProducts);

  const cartItemToDisplay = cartItem.map((item) => {
    return (
      <CartItem
        key={item.id}
        item={{
          title: item.title,
          quantity: item.quantity,
          total: item.total,
          price: item.price,
        }}
      />
    );
  });

  return (
    <Fragment>
      {isVisible && (
        <Card className={classes.cart}>
          <h2>Your Shopping Cart</h2>
          <ul>
            {cartItem.length === 0 && <p>Cart is Empty. Start Shopping....</p>}
            {cartItem.length > 0 && cartItemToDisplay}
          </ul>
        </Card>
      )}
    </Fragment>
  );
};

export default Cart;
