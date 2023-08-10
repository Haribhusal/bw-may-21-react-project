import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    logggedin: false,
}


export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, payload) => {
            state.cartItems = [...state.cartItems, payload.payload]
        },
        removeItemFromCart: (state, payload) => {
            console.log(payload)
            state.cartItems = state.cartItems.filter((item) => item.id !== payload.payload)
        }
    }

})

export const { addToCart, removeItemFromCart } = cartSlice.actions;

export default cartSlice.reducer;