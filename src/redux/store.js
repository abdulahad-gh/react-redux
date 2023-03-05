import { createStore, combineReducers, applyMiddleware } from "redux";
import productReducer from "./reducers/productReducer";
import { composeWithDevTools } from "@redux-devtools/extension";
import rootReducer from "./reducers/rootReducer";
import counterMiddleware from "./middlewares/counterMiddlware";
import thunk from "redux-thunk";
// import logger from "redux-logger";
const store = createStore(
  combineReducers(rootReducer),
  composeWithDevTools(applyMiddleware(counterMiddleware, thunk))
);

export default store;
