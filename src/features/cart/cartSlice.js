import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    carts:[]
}

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart : (state,action) => {
            const selectedProduct = state.carts.find(product => product.productTitle === action.payload.productTitle)

            if(!selectedProduct){

                state.carts.push({...action.payload,quantity:1})
            }else{
                selectedProduct.quantity +=1
                state.carts.filter(product => product.productTitle !== selectedProduct.productTitle).push(selectedProduct)
            }
        },
        deleteFromCart : (state,action)=> {
            const selectedProduct  = state.carts.find(product => product.productTitle === action.payload.productTitle)
            
            if(selectedProduct.quantity > 1){
                selectedProduct.quantity -= 1
                state.carts.filter(product => product.productTitle !== selectedProduct.productTitle).push(selectedProduct)
                
            }else{
                state.carts = state.carts.filter(product => product.productTitle !== action.payload.productTitle)
            }
           

        }

    }
})

export const {addToCart,deleteFromCart} = cartSlice.actions

export default cartSlice.reducer