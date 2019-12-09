import axios from "axios";
const baseAuthURL = "http://localhost:4000/api/auth";
const itemsBaseURL = "http://localhost:4000/api/item";
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
