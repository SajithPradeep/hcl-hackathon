import { combineReducers, createStore } from "redux";
import productReducer from "../reducers/productReducer";
import grandTotalReducer from "../reducers/grandTotalReducer";

export default () => {
  const store = createStore(
    combineReducers({
      productsSelected: productReducer,
      grandTotal: grandTotalReducer,
    })
  );
  return store;
};
