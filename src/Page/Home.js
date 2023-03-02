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
  const { stock, brand } = useSelector((state) => state.filter.filters);
  console.log(stock);
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

  if (product.products.length && (stock || brand.length)) {
    content = product.products
      .filter((item) => {
        if (stock) {
          return item.status === true;
        }
        return product.products;
      })
      .filter((item) => {
        if (brand.length) {
          return brand.includes(item.brand);
        }
        return product.products;
      })
      .map((item) => <ProductCard product={item} />);
  }

  return (
    <>
      <aside className="aside-container">
        <li
          onClick={() => dispatch(stockCreator())}
          className={`bg-gray-400 rounded-md p-2 cursor-pointer ${
            stock ? activeClass : null
          }`}
        >
          Stock
        </li>
        <li
          onClick={() => dispatch(Brand("amd"))}
          className={` bg-gray-400 rounded-md p-2 cursor-pointer ${
            brand.includes("amd") ? activeClass : null
          }`}
        >
          AMD
        </li>
        <li
          onClick={() => dispatch(Brand("intel"))}
          className={`bg-gray-400 rounded-md p-2 cursor-pointer ${
            brand.includes("intel") ? activeClass : null
          }`}
        >
          Intel
        </li>
      </aside>
      <section id="card-container">{content}</section>
    </>
  );
}
