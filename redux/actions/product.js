import { GET_ALL_PRODUCTS, ALL_PRODUCTS_FAIL, LOADING } from "./types";
import api from "../../api/authApi";

export const get_all_products = () => async (dispatch) => {
  dispatch(loading());
  const res = await api.authApi.post("/api/product");
  if (!res.ok) {
    dispatch({
      type: ALL_PRODUCTS_FAIL,
    });
    console.log(res.data);
  } else {
    console.log(res.data);
    dispatch({
      type: GET_ALL_PRODUCTS,
      payload: res.data,
    });
  }
};

export const loading = () => async (dispatch) => {
  dispatch({
    type: LOADING,
  });
};

export const get_products = () => api.authApi.post("/api/product");
