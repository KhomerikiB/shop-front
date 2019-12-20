import authReducer from "./authReducer";
import itemsReducer from "./itemsReducer";
import cartReducer from "./cartReducer";
import categoryReducer from "./categoryReducer";
import searchReducer from "./searchReducer";
import similarItemsReducer from "./similarItemsReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  auth: authReducer,
  items: itemsReducer,
  cart: cartReducer,
  categories: categoryReducer,
  search: searchReducer,
  similarItems: similarItemsReducer
});
export default rootReducer;
