import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart:[]
}

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart : (state,action) => {
            const selectedProduct = state.cart.find(product => product.id === action.payload.id)

            if(!selectedProduct){

                state.cart.push({...action.payload,quantity:1})
            }else{
                selectedProduct.quantity +=1
                state.cart.filter(product => product.id !== selectedProduct.id).push(selectedProduct)
            }
        },
        deleteFromCart : (state,action)=> {
            state.cart.filter(product => product.id !== action.payload.id)
        }

    }
})


export default cartSlice.reducer