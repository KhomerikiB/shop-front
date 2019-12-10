import * as apiCalls from "../../api";
import * as types from "../types";
export const addItemToCart = id => {
  return async dispatch => {
    try {
      await apiCalls.addCartItem(id);
      dispatch(getAllCart());
    } catch (error) {
      throw error.response;
    }
  };
};

export const removeItemFromCart = id => {
  return async dispatch => {
    try {
      const result = await apiCalls.removeItemFromCart(id);
      if (result.status === 200) {
        dispatch({
          type: types.REMOVE_UPDATE_CART_ITEM,
          payload: id
        });
      }
    } catch (error) {
      console.log(error);
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
