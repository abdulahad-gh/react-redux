import {
  ADD_PRODUCT,
  ADD_TO_CART,
  DELETE_PRODUCT,
  ERROR,
  GET_ALL_PRODUCTS,
  ISLOADING,
  REMOVE_FROM_CART,
} from "../actionTypes/actionTypes";

const initialAppState = {
  products: [],
  carts: [],
  isLoading: false,
  error: null,
};

const productReducer = (state = initialAppState, action) => {
  const selectedCart = state?.carts?.find(
    (cart) => cart?.id === action?.payload?.id
  );
  switch (action.type) {
    case ISLOADING:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
      case ADD_PRODUCT :
        return {
          ...state,
          products:[...state.products,action.payload]
        }
        case DELETE_PRODUCT :
          return{
            ...state,
            products:state.products.filter(product => product.id !== action.payload)
          }
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        isLoading: false,
        products: action.payload,
        error: null,
      };
    case ADD_TO_CART:
      if (selectedCart) {
        selectedCart.quantity = selectedCart.quantity + 1;
        const newCarts = state?.carts?.filter(
          (cart) => cart.id !== selectedCart.id
        );

        return {
          ...state,
          carts: [...newCarts, selectedCart],
        };
      }
      return {
        ...state,
        carts: [...state.carts, { ...action.payload, quantity: 1 }],
      };

    case REMOVE_FROM_CART:
      if (selectedCart.quantity > 1) {
        selectedCart.quantity = selectedCart.quantity - 1;
        const newCart = state.carts.filter(
          (cart) => cart.id !== selectedCart.id
        );
        return {
          ...state,
          carts: [...newCart, selectedCart],
        };
      }
      return {
        ...state,
        carts: state.carts.filter((cart) => cart.id !== selectedCart.id),
      };

    default:
      return state;
  }
};

export default productReducer;
