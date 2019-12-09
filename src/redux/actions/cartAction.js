import * as apiCalls from "../../api";
import * as types from "../types";
export const addItemToCart = id => {
  return async dispatch => {
    try {
      const result = await apiCalls.addCartItem(id);
      return result;
    } catch (error) {
      throw error.response;
    }
  };
};

export const getAllCart = () => {
  return async dispatch => {
    try {
      const result = await apiCalls.getCartItems();
      dispatch({
        type: types.GET_ALL_CARTS,
        payload: result.data.cart
      });
    } catch (error) {
      throw error.response;
    }
  };
};
