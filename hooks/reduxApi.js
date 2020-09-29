import { useState } from "react";

export default useRedux = (apiFunc, onSuccess, onFail) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const request = (...args) => async (dispatch) => {
    console.log("khra");
    setLoading(true);
    const res = await apiFunc(...args);
    setLoading(false);
    if (!res.ok) {
      dispatch({
        type: onFail,
      });
    } else {
      dispatch({
        type: onSuccess,
        payload: res.data,
      });
    }
    setError(!res.ok);
    setData(res.data);
  };
  console.log("khraglobal");
  return { data, error, loading, request };
};
