import { createStore } from "redux";
import ProductReducer from './Product/ProductReducer'
const store = createStore(ProductReducer)
export default store