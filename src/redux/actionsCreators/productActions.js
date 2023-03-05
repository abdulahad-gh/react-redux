import {
  ADD_PRODUCT,
  ADD_TO_CART,
  BRAND,
  ERROR,
  GET_ALL_PRODUCTS,
  ISLOADING,
  REMOVE_FILTER,
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
export const addProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    payload:product
  }
}

export const addToCartFunc = (product) => {
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

export const removeFilter = () => {
  return {
    type: REMOVE_FILTER,
  };
};

