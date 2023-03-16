import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../Components/ProductCard";
 

export default function Home() {
  const product = useSelector((state) => state.product);
  // const { filters, keyword } = filter;
  // const { stock, brand } = useSelector((state) => state.filter.filters);
  // const activeClass = "text-white  bg-blue-800 border-white";
  // console.log(stock);
  // const dispatch = useDispatch();

const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/products')
    .then(res => res.json())
    .then(data => setProducts(data))
  }, []);
  
  let content;
  // if (product.isLoading) {
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
  // console.log(product.length);
  // if (!loading && !error && product.length === 0) {
  //   content = <p style={{ color: "orange" }}>Your product is empty!</p>;
  // }
  // if (!loading && !error && product.length) {
  //   content = product.map((p) => <ProductCard product={p} />);
  //   console.log(product);
  // }

  if (product.products?.length) {
    content = product.products?.map((item) => <ProductCard key={item.id} product={item} />);
  }
  else{
    content = 'something went wrong.....'
  }
  //   // if (stock || brand.length) {
  //   //   content = product.products
  //   //     .filter((item) => {
  //   //       if (stock) {
  //   //         return item.status === true;
  //   //       }
  //   //       return product.products;
  //   //     })
  //   //     .filter((item) => {
  //   //       if (brand.length) {
  //   //         return brand.includes(item.brand);
  //   //       }
  //   //       return product.products;
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

