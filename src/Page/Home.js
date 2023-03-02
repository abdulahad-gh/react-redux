import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../Components/ProductCard";
import {
  Brand,
  error,
  getAllProduct,
  stockCreator,
} from "../redux/actionsCreators/productActions";

export default function Home() {
  const { product, filter } = useSelector((state) => state);
  const { filters, keyword } = filter;
  const { stock, brand } = filters;
  const activeClass = "text-white bg-blue-500 border-white";
  console.log(stock);
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("http://localhost:5000/products")
      .then((data) => {
        dispatch(getAllProduct(data.data));
      })
      .catch((errormsg) => {
        dispatch(error(errormsg.response.statusText));
      });
  }, []);
  let content;
  if (product.isLoading) {
    content = (
      <p>
        Loading...
        <span
          style={{
            width: "20px",
            height: "20px",
            borderRadius: "10px",
            backgroundColor: "blue",
            fontSize: "300px",
          }}
        ></span>
      </p>
    );
  }
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

  if (product.error) {
    content = product.error;
  } else {
    content = product?.products?.map((p) => <ProductCard product={p} />);
  }
  return (
    <>
      <aside className="aside-container">
        <li
          onClick={() => dispatch(stockCreator())}
          className={`bg-gray-400 rounded-md p-2 cursor-pointer ${
            stock === true ? activeClass : null
          }`}
        >
          Stock
        </li>
        <li
          onClick={() => dispatch(Brand("AMD"))}
          className={` bg-gray-400 rounded-md p-2 cursor-pointer ${
            brand.includes("AMD") ? activeClass : null
          }`}
        >
          AMD
        </li>
        <li
          onClick={() => dispatch(Brand("INTEL"))}
          className={`bg-gray-400 rounded-md p-2 cursor-pointer ${
            brand.includes("INTEL") ? activeClass : null
          }`}
        >
          Intel
        </li>
      </aside>
      <section id="card-container">{content}</section>
    </>
  );
}
