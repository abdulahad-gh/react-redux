import fileterReducer from "./filterReducer";
import productReducer from "./productReducer";
const rootReducer = {
  product: productReducer,
  fileter: fileterReducer,
};
export default rootReducer;
