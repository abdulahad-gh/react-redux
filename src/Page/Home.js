import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../Components/ProductCard";
import { error, getAllProduct } from "../redux/actionsCreators/productActions";

export default function Home() {
  const state = useSelector((state) => state.product);
  console.log(state);
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
  console.log(state);
  let content;
  if (state.isLoading) {
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

  if (state.error) {
    content = state.error;
  } else {
    content = state?.products?.map((p) => <ProductCard product={p} />);
  }
  return (
    <>
      <aside className="aside-container">
        <li>Stock</li>
        <li>AMD</li>
        <li>Intel</li>
      </aside>
      <section id="card-container">{content}</section>
    </>
  );
}
