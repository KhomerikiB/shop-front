import * as types from "../types";
const initialState = {
  carts: []
};
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ALL_CARTS:
      return {
        ...state,
        carts: action.payload
      };
    case types.REMOVE_UPDATE_CART_ITEM:
      const filteredArray = state.carts.filter(item => {
        return item._id !== action.payload;
      });
      return {
        ...state,
        carts: filteredArray
      };
    default:
      return state;
  }
};
export default cartReducer;
