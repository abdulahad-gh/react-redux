import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../Components/ProductCard";

export default function Cart() {
  const { product } = useSelector((state) => state);
  let content;
  // if (loading) {
  //   content = (
  //     <p>
  //       Loading...
  //       <span
  //         style={{
  //           width: "20px",
  //           height: "20px",
  //           borderRadius: "10px",
  //           backgroundColor: "blue",
  //         }}
  //       ></span>{" "}
  //     </p>
  //   );
  // }
  // if (error) {
  //   content = <p style={{ color: "red" }}>Something went wrong</p>;
  // }
  // console.log(cart.length);
  // if (!loading && !error && cart.length === 0) {
  //   content = <p style={{ color: "orange" }}>Your product is empty!</p>;
  // }
  // if (!loading && !error && cart.length) {
  //   content = cart.map((p) => <ProductCard product={p} />);
  //   console.log(product);
  // }
  content = product.carts
    .sort((a, b) => a.id - b.id)
    .map((c) => <ProductCard product={c} />);
  return <section id="card-container">{content}</section>;
}
