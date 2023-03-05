import { getAllProduct } from "../../actionsCreators/productActions";

const fetchData = () => {
  return async (dispatch,getState) => {
    const url = await fetch("http://localhost:5000/products");
    const data = await url.json(); 
    // console.log(data.data)   
   if(data.length){

     dispatch(getAllProduct(data))
   }
  };
};
export default fetchData;
