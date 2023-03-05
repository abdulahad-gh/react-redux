import { useNavigate } from "react-router-dom";
import { addProduct } from "../../actionsCreators/productActions";


const postProduct = (product)=> {
    return async(dispatch,getState) => {
 
const res = await fetch('http://localhost:5000/add-product',{
    method:'POST',
    body:JSON.stringify(product),
    headers:{'content-type':'application/json'}
});
dispatch(addProduct(product))
const data = await res.json()


console.log(data)
}
}

export default postProduct;