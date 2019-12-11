import * as types from "../types";
const initialState = {
  categories: []
};
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ALL_CATEGORY:
      return {
        ...state,
        categories: action.payload
      };
    default:
      return state;
  }
};
export default cartReducer;
