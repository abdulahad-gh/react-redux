import {
  ADD_TO_CART,
  BRAND,
  ERROR,
  GET_ALL_PRODUCTS,
  ISLOADING,
  REMOVE_FROM_CART,
  STOCK,
} from "../actionTypes/actionTypes";

export const error = (errorMessage) => {
  return {
    type: ERROR,
    payload: errorMessage,
  };
};
export const getAllProduct = (products) => {
  return {
    type: GET_ALL_PRODUCTS,
    payload: products,
  };
};

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};

//arrow function for remove product from cart
export const removeProductCart = (productId) => {
  return {
    type: REMOVE_FROM_CART,
    payload: productId,
  };
};

//action creator for filter
export const Brand = (brandData) => {
  return {
    type: BRAND,
    payload: brandData,
  };
};

export const stockCreator = () => {
  return {
    type: STOCK,
  };
};
