import { ALL_PRODUCTS_FAIL, GET_ALL_PRODUCTS } from "../actions/types";

const initialState = {
  products: [],
  product: null,
  loading: true,
  errors: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        products: payload,
        loading: false,
        errors: null,
      };
    case ALL_PRODUCTS_FAIL:
      return {
        ...state,
        products: [],
        loading: false,
        errors: payload,
      };
    default:
      return state;
  }
}
