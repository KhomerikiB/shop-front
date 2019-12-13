import * as apiCalls from "../../api";
import * as types from "../types";

export const getSearchedItems = data => {
  return async dispatch => {
    try {
      const result = await apiCalls.getSearchedItems(data);
      console.log(result);
      dispatch({
        type: types.GET_ITEMS_BY_SEARCH,
        payload: result.data.result
      });
    } catch (error) {
      throw error.response;
    }
  };
};
export const restoreSearchedItems = () => {
  return {
    type: types.RESTORE_SEARCHED_ITEM
  };
};
