import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/cart/cartSlice";
import { productApi } from "../features/api/apiSlice";

const store = configureStore({
    reducer:{
        [productApi.reducerPath] : productApi.reducer,
        cart:cartSlice

    },
   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productApi.middleware)

})

export default store;