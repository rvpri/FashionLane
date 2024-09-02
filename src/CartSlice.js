import { createSlice } from "@reduxjs/toolkit";
const initialStateCart = [];

const CartSlice = createSlice({
  name: "Cart",
  initialState: initialStateCart,
  reducers: {
    AddToCart: {
      prepare(id, dressName, price) {
        return {
          payload: { id, dressName, price }
        };
      },
      reducer(state, action) {
        console.log("Inside reducer");
        state.push(action.payload);
      }
    }
  }
});

export const { AddToCart } = CartSlice.actions;
export default CartSlice.reducer;

