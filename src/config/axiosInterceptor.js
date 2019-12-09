import axios from "axios";
import store from "../store";

const axiosInterceptor = () => {
  axios.interceptors.request.use(
    async config => {
      const token = store.getState().auth.token;
      //   let accessToken = getAccessToken();
      //   let serverCallUrl = new URL(config.url);

      //   if (serverCallUrl.pathname.includes("/auth")) return config;

      //   if (accessToken && axiosUserContext.user) {
      // const { exp } = jwtDecode(accessToken);

      // if (Date.now() > exp * 1000) {
      //   if (typeof axiosUserContext.refreshAccessToken !== "function") {
      //     throw new Error("Access Token cannot be refreshed");
      //   }
      //   await axiosUserContext.refreshAccessToken();
      //   accessToken = getAccessToken();
      // }

      config.headers["authorization"] = `Bearer ${token}`;
      config.headers["cache-control"] = `no-cache`;
      //   }

      return config;
      // or throw new Error('User required')
    },
    // I don't think this function is required
    function(error) {
      return Promise.reject(error);
    }
  );
  // axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

export default axiosInterceptor;
