import { createSlice } from "@reduxjs/toolkit";
import { myCartActions } from "./myCartSlice";

export const allProducts = [
  {
    id: "e1",
    title: "Car",
    price: 600,
    description: "This is a first product - amazing!",
  },
  {
    id: "e2",
    title: "Machine",
    price: 250,
    description: "This is a second product - amazing!",
  },
  {
    id: "e3",
    title: "Bike",
    price: 200,
    description: "This is a 3rd product - amazing!",
  },
];

const cartItemsState = { cartProducts: [], changed: false };
const myProductsSlice = createSlice({
  name: "cartProducts",
  initialState: cartItemsState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.cartProducts.find(
        (item) => item.id === action.payload.id
      );
      state.changed = true;
      if (!item) {
        state.cartProducts.push(action.payload);
      } else {
        item.quantity++;
        item.total = item.price * item.quantity;
      }
    },
    replaceCartData: (state, action) => {
      state.cartProducts = action.payload.cartProducts;
    },

    increaseQuantity: (state, action) => {
      state.changed = true;
      const item = state.cartProducts.find(
        (item) => item.title === action.payload
      );
      item.quantity++;
      item.total = item.price * item.quantity;
    },
    decreaseQuantity: (state, action) => {
      state.changed = true;
      const item = state.cartProducts.find(
        (item) => item.title === action.payload
      );
      item.quantity--;
      item.total = item.price * item.quantity;
      if (item.quantity === 0) {
        state.cartProducts = state.cartProducts.filter(
          (item) => item.quantity !== 0
        );
      }
    },
  },
});
/////////////////fetching cart data from server////////////
export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://cartproducts-d4fbb-default-rtdb.firebaseio.com/carts.json"
        );

        if (!response.ok) {
          throw new Error("Couldn't fetch Cart Data Failed");
        }
        const data = await response.json();

        return data;
      } catch (error) {
        dispatch(
          myCartActions.showNotification({
            status: "error",
            title: "Error!",
            message: "Fetching Cart Data Failed",
          })
        );
      }
    };

    const cartData = await fetchData();

    dispatch(
      myProductsSlice.actions.replaceCartData({
        cartProducts:
          cartData === null || cartData === undefined ? [] : cartData,
        changed: false,
      })
    );
  };
};

/////////////////////////sending data to server/////////////////////////////////////
export const sendCartData = (cartProducts) => {
  return (dispatch) => {
    dispatch(
      myCartActions.showNotification({
        status: "pending",
        title: "sending",
        message: "sending cart data",
      })
    );
    const sendRequest = async () => {
      try {
        const response = await fetch(
          "https://cartproducts-d4fbb-default-rtdb.firebaseio.com/carts.json",
          {
            method: "PUT",
            body: JSON.stringify(cartProducts),
          }
        );
        if (!response.ok) {
          throw new Error("Sending Cart Data Failed");
        }
        dispatch(
          myCartActions.showNotification({
            status: "success",
            title: "Success!",
            message: "Sent Cart Data Successfully",
          })
        );
      } catch (error) {
        dispatch(
          myCartActions.showNotification({
            status: "error",
            title: "Error!",
            message: "Sending Cart Data Failed",
          })
        );
      }
    };
    sendRequest();
  };
};

export const myProductsActions = myProductsSlice.actions;
export default myProductsSlice.reducer;
