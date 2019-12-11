import * as apiCalls from "../../api";
import * as types from "../types";

export const getAllCategory = () => {
  return async dispatch => {
    try {
      const result = await apiCalls.getCategoryItems();
      dispatch({
        type: types.GET_ALL_CATEGORY,
        payload: result.data.data
      });
    } catch (error) {
      throw error.response;
    }
  };
};
