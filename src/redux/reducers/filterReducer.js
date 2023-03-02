import { BRAND, STOCK, TEST } from "../actionTypes/actionTypes";

const initialState = {
  filters: {
    stock: false,
    brand: [],
  },
  keyword: "",
};

const fileterReducer = (state = initialState, action) => {
  switch (action.type) {
    case STOCK:
      return {
        ...state,
        filters: { ...state.filters, stock: !state.filters.stock },
      };
    case BRAND:
      if (state.filters.brand.includes(action.payload)) {
        return {
          ...state,
          filters: {
            ...state.filters,
            brand: state.filters.brand.filter((b) => b !== action.payload),
          },
        };
      }
      return {
        ...state,
        filters: {
          ...state.filters,
          brand: [...state.filters.brand, action.payload],
        },
      };

    default:
      return state;
  }
};

export default fileterReducer;
