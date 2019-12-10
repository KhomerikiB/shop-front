import axios from "axios";
const baseAuthURL = "http://localhost:4000/api/auth";
const itemsBaseURL = "http://localhost:4000/api/item";
const cartBaseURL = "http://localhost:4000/api/cart";
export const login = user => {
  return axios.post(`${baseAuthURL}/login`, user, {
    //AxiosRequestConfig parameter
    withCredentials: true //correct
  });
};

export const checkRefreshToken = () => {
  return axios.post(
    `${baseAuthURL}/refresh_token`,
    {},
    {
      withCredentials: true
    }
  );
};
export const logOut = () => {
  return axios.post(
    `${baseAuthURL}/logout`,
    {},
    {
      withCredentials: true
    }
  );
};
export const getAllItems = () => {
  return axios.get(`${itemsBaseURL}`);
};
export const getItemById = id => {
  return axios.get(`${itemsBaseURL}/${id}`);
};
export const addCartItem = id => {
  return axios.post(`${cartBaseURL}`, { id });
};
export const getCartItems = () => {
  return axios.get(`${cartBaseURL}`);
};
export const removeItemFromCart = id => {
  return axios.put(`${cartBaseURL}`, { id });
};
