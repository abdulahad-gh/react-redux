import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products:[]
}

// export const fetchProduct = 
const prodcutSlice = createSlice({
    name:'product',
    initialState,
    reducers:{
        addToProduct:(state,action)=>{
            state.products.push(action.payload)
        }
    }

})

export const {addToProduct} = prodcutSlice.actions
export default prodcutSlice.reducer