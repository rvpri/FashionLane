import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice";
import { clothingApi } from "../services/clothingApi";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    [clothingApi.reducerPath]: clothingApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(clothingApi.middleware),
});

export default store;
