import { ADD_TO_CART } from "../actionTypes/actionTypes";

const counterMiddleware = (store) => (next) => (action) => {
  if (action.type === ADD_TO_CART) {
    return next({
      ...action,
      payload: {
        ...action.payload,
        position: store.getState().product.carts.length,
      },
    });
  }
  console.log(store);
  next(action);
};

export default counterMiddleware;
