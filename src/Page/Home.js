import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../Components/ProductCard";
 import { useGetProductQuery } from "../features/api/apiSlice";

export default function Home() {

  // const { filters, keyword } = filter;
  // const { stock, brand } = useSelector((state) => state.filter.filters);
  // const activeClass = "text-white  bg-blue-800 border-white";
  // console.log(stock);
  const {data, isLoading,isFetching,isSuccess } = useGetProductQuery()
  if(isLoading){
    return <p>Loading...</p>
  }
  console.log(data,isLoading)

// const [products, setProducts] = useState([])
// console.log(product)
//   useEffect(() => {
//     dispatch(getProducts()) ;
//   }, []);
  
  let content;
  // if (data.isLoading) {
  //   content = (
  //     <p>
  //       Loading...
  //       <span
  //         style={{
  //           width: "20px",
  //           height: "20px",
  //           borderRadius: "10px",
  //           backgroundColor: "blue",
  //           fontSize: "300px",
  //         }}
  //       ></span>
  //     </p>
  //   );
  // }
  // if (error) {
  //   content = <p style={{ color: "red" }}>Something went wrong</p>;
  // }
  // console.log(data.length);
  // if (!loading && !error && data.length === 0) {
  //   content = <p style={{ color: "orange" }}>Your product is empty!</p>;
  // }
  // if (!loading && !error && data.length) {
  //   content = data.map((p) => <ProductCard product={p} />);
  //   console.log(product);
  // }
if(isLoading){
content = 'loading......'
}else if(data.isError){
  content = data.errorMessage
}
  else  {
    content = data.map((item) => <ProductCard key={item.id} product={item} />);
  }
 
  //   // if (stock || brand.length) {
  //   //   content = data.products
  //   //     .filter((item) => {
  //   //       if (stock) {
  //   //         return item.status === true;
  //   //       }
  //   //       return data.products;
  //   //     })
  //   //     .filter((item) => {
  //   //       if (brand.length) {
  //   //         return brand.includes(item.brand);
  //   //       }
  //   //       return data.products;
  //   //     })
        
  //   }
  

  return (
    // <>
    //   {/* /* <aside className="aside-container">
    //     <li
    //       onClick={() => dispatch()}
    //       className={`bg-gray-400 rounded-md p-2 cursor-pointer ${
    //         stock === true ? activeClass : null
    //       }`}
    //     >
    //       Stock
    //     </li>
    //     <li
    //       onClick={() => dispatch()}
    //       className={` bg-gray-400 rounded-md p-2 cursor-pointer ${
    //         brand.includes("amd") ? activeClass : null
    //       }`}
    //     >
    //       AMD
    //     </li>
    //     <li
    //       onClick={() => dispatch()}
    //       className={`bg-gray-400 rounded-md p-2 cursor-pointer ${
    //         brand.includes("intel") ? activeClass : null
    //       }`}
    //     >
    //       Intel
    //     </li>
    //     {stock || brand.length ? (
    //       <li
    //         onClick={() => dispatch()}
    //         className="bg-gray-100 rounded-md p-2 cursor-pointer"
    //       >
    //         Clear filter
    //       </li>
    //     ) : null}
    //   </aside> */} */}
      <section id="card-container">{content}</section>
    
  ) }

