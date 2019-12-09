import authReducer from "./authReducer";
import itemsReducer from "./itemsReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  auth: authReducer,
  items: itemsReducer
});
export default rootReducer;
