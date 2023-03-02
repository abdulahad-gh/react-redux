import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddProduct() {
  const [imgAssest, setImgAssest] = useState(false);
  const apiKey = "3b28fffb6dd5b0231009483b4f31d4ed";
  const navigate = useNavigate();
  const uploadImg = (e) => {
    const imgData = e.target.files[0];
    const formData = new FormData();
    formData.append("image", imgData);
    const url = `https://api.imgbb.com/1/upload?key=${apiKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          alert("img uploaded successfully.");
          const imgUrl = result.data.url;
          setImgAssest(imgUrl);
        } else {
          alert("something went wrong!");
        }
      });
  };
  const submitProduct = (e) => {
    e.preventDefault();
    const productTitle = e.target.productTitle.value;
    const productDesc = e.target.productDesc.value;
    const productPrice = e.target.productPrice.value;
    const productBrand = e.target.productBrand.value;
    const productImg = imgAssest;
    const productStatus =
      String(e.target.productStatus.value).toLowerCase() === "true";
    const productData = {
      productTitle,
      productDesc,
      productPrice,
      productImg,
      status: productStatus,
      brand: productBrand,
    };
    console.log(productData);

    axios
      .post("http://localhost:5000/add-product", productData)
      .then((res) => {
        console.log(res);
        if (!res.data.exists) {
          alert("product added successfully");
          navigate("/");
        } else {
          alert("your product is alreay exists");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="add-product-form">
      <div>
        <h3>Add new product</h3>
        <form onSubmit={submitProduct}>
          <input
            className="product-title"
            type="text"
            name="productTitle"
            placeholder="Title"
          />
          <input
            className="product-price"
            type="number"
            name="productPrice"
            placeholder="Price"
          />
          <select className="product-status" name="productBrand">
            <option value={"no-brand"}>Select Brand</option>
            <option value={"amd"}> Amd</option>
            <option value={"intel"}> Intel</option>
          </select>

          <select className="product-status" name="productStatus">
            <option value={true}>Select Stock status</option>
            <option value={true}> true</option>
            <option value={false}> false</option>
          </select>

          <input
            className="product-desc"
            type="text"
            name="productDesc"
            placeholder="Description"
          />
          <label className="product-img">
            {!imgAssest ? (
              <div className="upload-img-temp">
                <p>Upload product image</p>
                <input
                  className="input-img"
                  type="file"
                  accept="image/*"
                  name="productImg"
                  onChange={uploadImg}
                />
              </div>
            ) : (
              <>
                <div>
                  <img
                    src={imgAssest}
                    alt="product-img"
                    width="200px"
                    height="200px"
                    style={{ objectFit: "cover", borderRadius: "10px" }}
                  />
                </div>
              </>
            )}
          </label>
          <input className="input-img" type="submit" value="Add Product" />
        </form>
      </div>
    </div>
  );
}
