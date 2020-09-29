import storage from "../../utility/storage";
import {
  LOAD_USER,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  USER_FAIL,
  LOAD_TOKEN,
  LOGOUT,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from "../actions/types";

const initialState = {
  token: "",
  user: null,
  loading: true,
  isAuthenticated: false,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case LOAD_TOKEN:
      return {
        ...state,
        token: payload,
      };
    case LOAD_USER:
      return {
        ...state,
        user: payload,
        loading: false,
        isAuthenticated: true,
      };
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      storage.storeToken(payload.token);
      return {
        ...state,
        ...payload,
        loading: false,
        isAuthenticated: true,
      };
    case LOGIN_FAIL:
    case USER_FAIL:
    case REGISTER_FAIL:
    case LOGOUT:
      storage.removeToken();
      return {
        user: null,
        loading: false,
        isAuthenticated: false,
      };
    default:
      return state;
  }
}
