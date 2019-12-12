import * as apiCalls from "../../api";
import * as types from "../types";

export const registerUser = data => {
  return async dispatch => {
    try {
      await apiCalls.registerUser(data);
    } catch (error) {
      throw error.response;
    }
  };
};

export const login = user => {
  return async dispatch => {
    try {
      const result = await apiCalls.login(user);
      dispatch({
        type: types.UPDATE_ACCESS_TOKEN,
        payload: result.data
      });
      return result;
    } catch (error) {
      throw error.response;
    }
  };
};
export const checkRefreshToken = () => {
  return async dispatch => {
    try {
      const result = await apiCalls.checkRefreshToken();
      dispatch({
        type: types.UPDATE_ACCESS_TOKEN,
        payload: result.data
      });
    } catch (error) {
      throw error.response;
    }
  };
};
export const logOutUser = () => {
  return async dispatch => {
    try {
      await apiCalls.logOut();
      dispatch({
        type: types.RESET_USER_DATA
      });
    } catch (error) {
      throw error.response;
    }
  };
};
