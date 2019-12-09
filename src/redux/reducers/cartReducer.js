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
    default:
      return state;
  }
};
export default cartReducer;
