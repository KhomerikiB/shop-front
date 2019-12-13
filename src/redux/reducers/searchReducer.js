import * as types from "../types";
const initialState = {
  filteredItems: [],
  filteredItemsHeader: []
};
const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ITEMS_BY_SEARCH:
      return {
        ...state,
        filteredItems: action.payload
      };
    case types.RESTORE_SEARCHED_ITEM:
      return {
        ...state,
        filteredItems: []
      };
    default:
      return state;
  }
};

export default searchReducer;
