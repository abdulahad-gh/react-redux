import { deleteProduct } from "../../actionsCreators/productActions"

const deleteProductThunk = (id)=>{
    return async(dispatch,getState)=> {
const res = await fetch(`http://localhost:5000/product/${id}`,{
    method:"DELETE",
    headers:{"Content-type":"application/json"}
})
const data = await res.json()

dispatch(deleteProduct(id)) 

    }
}

export default deleteProductThunk