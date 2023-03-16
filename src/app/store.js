import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import cartSlice from "../features/cart/cartSlice";
import productSlice from "../features/product/productSlice";

const store = configureStore({
    reducer:{
        product:productSlice,
        cart:cartSlice

    },
    middleware:(getDefaultMiddleware)=> getDefaultMiddleware().concat(logger)

})

export default store;