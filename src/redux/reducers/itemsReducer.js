import * as types from "../types";
const initialState = {
  allItems: [],
  item: {}
};
const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ALL_ITEMS:
      return {
        ...state,
        allItems: action.payload
      };
    case types.GET_ITEM_BY_ID:
      return {
        ...state,
        item: action.payload
      };
    default:
      return state;
  }
};
export default itemsReducer;
