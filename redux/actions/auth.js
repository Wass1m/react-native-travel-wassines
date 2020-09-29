import api from "../../api/authApi";
import storage from "../../utility/storage";
import setAuthToken from "../setAuthToken";
import {
  LOAD_USER,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  USER_FAIL,
  LOAD_TOKEN,
  LOGOUT,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from "./types";

export const loadUser = () => async (dispatch) => {
  const token = await storage.getToken();
  if (token) {
    console.log(token);
    setAuthToken(token);
  }
  const res = await api.authApi.get("api/auth");
  if (!res.ok) {
    dispatch({
      type: USER_FAIL,
    });
  } else {
    console.log("from action", res.data);
    dispatch({
      type: LOAD_USER,
      payload: res.data,
    });
  }
};

export const login = (formData) => async (dispatch) => {
  const res = await api.authApi.post("/api/auth", formData);
  if (!res.ok) {
    dispatch({
      type: LOGIN_FAIL,
    });
  }
  console.log("from action", res.data);
  dispatch({
    type: LOGIN_SUCCESS,
    payload: res.data,
  });
  dispatch(loadUser());
};

export const register = (formData) => async (dispatch) => {
  const res = await api.authApi.post("/api/user", formData);
  if (!res.ok) {
    dispatch({
      type: REGISTER_FAIL,
    });
  }
  console.log("from action", res.data);
  dispatch({
    type: REGISTER_SUCCESS,
    payload: res.data,
  });
  dispatch(loadUser());
};

export const getToken = () => async (dispatch) => {
  const token = await storage.getToken();
  dispatch({
    type: LOAD_TOKEN,
    payload: token,
  });
};

export const logOut = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};
