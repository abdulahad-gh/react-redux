import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";


export default function ProductCard({ product }) {
  const location = useLocation();
  const dispatch = useDispatch();

  return (
    <div className="card ">
      {location.pathname.includes("cart") && (
        <div className="quantity">{product.quantity}</div>
      )}
      <img width="200px" className="card-img" src={product.productImg} alt="" />
      <div>
        <h4 className="card-title">{product.productTitle}</h4>
        <h5 className="price">{product.productPrice}</h5>
      </div>
      <div>
        {location.pathname === "/cart" ? (
          <button
            className="card-btn"
            onClick={() => dispatch((product))}
            style={{ color: "red" }}
          >
            Remove from cart
          </button>
        ) : (
          <button
            className="card-btn"
            onClick={() => dispatch((product))}
          >
            Add to card
          </button>
        )}
        <button className="card-btn">Buy</button>
      </div>
    </div>
  );
}
