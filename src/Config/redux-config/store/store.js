
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../reducer/todoslice"
// import cartReducer from "../reducer/cartSlice"



export const store = configureStore({
    reducer: {
        todos: todoReducer,
        // cart: cartReducer
    }
})
