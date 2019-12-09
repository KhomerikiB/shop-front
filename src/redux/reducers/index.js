import authReducer from "./authReducer";
import itemsReducer from "./itemsReducer";
import cartReducer from "./cartReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  auth: authReducer,
  items: itemsReducer,
  cart: cartReducer
});
export default rootReducer;
