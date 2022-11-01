import { createSlice } from "@reduxjs/toolkit";

const cartState = { isShoppingCartVisible: false, notification: null };
const myCartSlice = createSlice({
  name: "cart",
  initialState: cartState,
  reducers: {
    toggleShoppingCart: (state) => {
      state.isShoppingCartVisible = !state.isShoppingCartVisible;
    },
    showNotification: (state, action) => {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});
export const myCartActions = myCartSlice.actions;
export default myCartSlice.reducer;
