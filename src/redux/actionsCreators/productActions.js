import {
  ADD_TO_CART,
  ERROR,
  GET_ALL_PRODUCTS,
  ISLOADING,
  REMOVE_FROM_CART,
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
