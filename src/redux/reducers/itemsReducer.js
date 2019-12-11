import * as types from "../types";
const initialState = {
  allItems: [],
  filteredArray: [],
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
    case types.GET_ITEMS_BY_CATEGORY:
      return {
        ...state,
        filteredArray: action.payload
      };
    default:
      return state;
  }
};
export default itemsReducer;
