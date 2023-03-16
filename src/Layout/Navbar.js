import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { carts } = useSelector((state) => state.cart);
  console.log(carts)

  return (
    <nav id="navbar">
      <div className="left-side">
        <div className="logo">Shopping now bd</div>
        <div className="search-input">
          <input type="text" placeholder="search your thing" />
        </div>
      </div>
      <div className="nav-links-container">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/top-rated">Top Rated</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/cart" style={{ position: "relative" }}>
              Cart{" "}
              <span
                style={{
                  position: "absolute",
                  top: "-10px",
                  backgroundColor: "blue",
                  padding: "4px",
                  borderRadius: "100%",
                }}
              >
                {carts?.length}
              </span>{" "}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
