import { configureStore } from "@reduxjs/toolkit";
import myCartReducer from "./myCartSlice";
import myProductsReducer from "./cartItemSlice";
const store = configureStore({
  reducer: { myCart: myCartReducer, myProducts: myProductsReducer },
});
export default store;
