import * as types from "../types";
const initialState = {
  allItems: []
};
const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ALL_ITEMS:
      return {
        ...state,
        allItems: action.payload
      };
    default:
      return state;
  }
};
export default itemsReducer;
