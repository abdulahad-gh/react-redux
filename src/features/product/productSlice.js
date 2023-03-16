import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addProductApi, fetchProducts } from "./productAPI";

const initialState = {
    products:[],
    postProduct:false,
    isLoading: false,
    isError : false,
    errorMessage:'',
}

export const getProducts = createAsyncThunk("product/getProducts", async() => {
const products = fetchProducts()
    return products
})
export const addProduct = createAsyncThunk('product/addProduct',async (product)=>{
    await addProductApi(product)
})
console.log(getProducts())
// export const addProduct  = createAsyncThunk ()
const prodcutSlice = createSlice({
    name:'product',
    initialState,
    // reducers:{
    //     addToProduct:(state,action)=>{
    //         state.products.push(action.payload)
    //     }
    // },
    extraReducers : (builder) =>  {
        builder.addCase(getProducts.pending,(state,action)=>{
            state.isLoading = true;
            state.isError = false
        }).addCase(getProducts.fulfilled,  (state,action)=>{
            state.products = action.payload;
            state.isLoading = false
        }).addCase(getProducts.rejected,(state,action) => {
            state.products = []
            state.isLoading = false
            state.isError =  true
            state.errorMessage = action.error.message
        }).addCase(addProduct.pending,(state,action)=>{
            state.isLoading = true;
            state.isError = false;
            state.postProduct = false;
        }).addCase(addProduct.fulfilled,  (state,action)=>{
            state.postProduct = true
            state.isLoading = false
        }).addCase(addProduct.rejected,(state,action) => {
            state.postProduct = false
            state.isLoading = false
            state.isError =  true
            state.errorMessage = action.error.message
        })

    }

})

// export const {addToProduct} = prodcutSlice.actions
export default prodcutSlice.reducer