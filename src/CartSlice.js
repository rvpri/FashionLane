import { createSlice } from "@reduxjs/toolkit";

const initialStateCart = [];

const CartSlice = createSlice({
  name: "Cart",
  initialState: initialStateCart,
  reducers: {
    AddToCart: {
      prepare(id, dressName, price, image, selectedSize) {
        return {
          payload: { id, dressName, price, image, selectedSize },
        };
      },
      reducer(state, action) {
        const existingItem = state.find(
          (item) =>
            item.id === action.payload.id &&
            item.selectedSize === action.payload.selectedSize
        );

        if (existingItem) {
          existingItem.quantity += 1;
        } else {
          state.push({ ...action.payload, quantity: 1 });
        }
      },
    },
    removeFromCart: {
      prepare(id, selectedSize) {
        return {
          payload: { id, selectedSize },
        };
      },
      reducer(state, action) {
        return state.filter(
          (item) =>
            !(
              item.id === action.payload.id &&
              item.selectedSize === action.payload.selectedSize
            )
        );
      },
    },
  },
});

export const { AddToCart, removeFromCart } = CartSlice.actions;
export default CartSlice.reducer;
