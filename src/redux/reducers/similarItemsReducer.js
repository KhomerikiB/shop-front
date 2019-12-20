import * as types from "../types";
const initialState = {
  items: []
};
const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_SIMILAR_ITEMS:
      return {
        ...state,
        items: action.payload
      };

    default:
      return state;
  }
};
export default itemsReducer;
