import * as apiCalls from "../../api";
import * as types from "../types";

export const getSimilarItems = data => {
  return async dispatch => {
    try {
      const result = await apiCalls.getSimilarItems(data);
      dispatch({
        type: types.GET_SIMILAR_ITEMS,
        payload: result.data.data
      });
    } catch (error) {
      throw error.response;
    }
  };
};
