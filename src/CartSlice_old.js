import { createSlice } from "@reduxjs/toolkit";

const initialStateCart = {
    id: null,  
    dressName: "",
    price: 0  
};

const CartSlice = createSlice({
    name: "Cart",
    initialState: initialStateCart,
    reducers: {
        AddToCart: {
        prepare(id, dressName, price){
            return{
                payload: {id, dressName, price}
            }
        },
        reducer(state, action){
            console.log("Inside reducer");
            state.id = action.payload.id;
            state.dressName = action.payload.dressName;
            state.price = action.payload.price;
        }
    }}
})

export const {AddToCart}= CartSlice.actions;
export default CartSlice.reducer;
// console.log(CartSlice);

// console.log(AddToCart(33,"dress", 45));