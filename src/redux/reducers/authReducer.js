import * as types from "../types";
const initialState = {
  token: "",
  isAuthenticated: false
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_ACCESS_TOKEN:
      return {
        ...state,
        token: action.payload.accessToken,
        isAuthenticated: action.payload.accessToken.length > 0 ? true : false
      };
    case types.RESET_USER_DATA:
      return {
        ...state,
        token: "",
        isAuthenticated: false
      };
    default:
      return state;
  }
};
export default authReducer;
