import { Fragment } from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { sendCartData } from "./store/cartItemSlice";
import { fetchCartData } from "./store/cartItemSlice";
import Notification from "./components/UI/Notification";

let isInitial = true;
function App() {
  const cartProducts = useSelector((state) => state.myProducts.cartProducts);
  const cartChanged = useSelector((state) => state.myProducts.changed);
  const notification = useSelector((state) => state.myCart.notification);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (cartChanged) {
      dispatch(sendCartData(cartProducts));
    }
  }, [cartProducts, dispatch, cartChanged]);

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        <Cart />
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
