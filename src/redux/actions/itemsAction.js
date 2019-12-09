import * as apiCalls from "../../api";
import * as types from "../types";
export const getItems = () => {
  return async dispatch => {
    try {
      const result = await apiCalls.getAllItems();
      dispatch({
        type: types.GET_ALL_ITEMS,
        payload: result.data.data
      });
    } catch (error) {
      throw error.response;
    }
  };
};

export const getItemById = id => {
  return async dispatch => {
    try {
      const result = await apiCalls.getItemById(id);
      dispatch({
        type: types.GET_ITEM_BY_ID,
        payload: result.data.data
      });
    } catch (error) {
      throw error.response;
    }
  };
};
