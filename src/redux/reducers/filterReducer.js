import { TEST } from "../actionTypes/actionTypes";

const initialState = {
  filters: {
    stock: false,
    brand: [],
  },
  keyword: "",
};

const fileterReducer = (state = initialState, action) => {
  switch (action.type) {
    case TEST:
      return {
        ...state,
        testt: 33,
      };
    default:
      return state;
  }
};

export default fileterReducer;
