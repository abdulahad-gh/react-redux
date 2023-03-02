import fileterReducer from "./filterReducer";
import productReducer from "./productReducer";
const rootReducer = {
  product: productReducer,
  filter: fileterReducer,
};
export default rootReducer;
