import api from "../api/authApi";

const authApi = api.authApi;

const setAuthToken = (token) => {
  if (token) authApi.setHeader("x-auth-token", token);
  else authApi.deleteHeader("x-auth-token");
};

export default setAuthToken;
