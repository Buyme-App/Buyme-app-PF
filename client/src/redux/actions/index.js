import axios from "axios";
import { useNavigate } from "react-router";

export const LOGIN = "LOGIN";
export const LOADING = "LOADGIN";
export const ERROR_MODAL = "ERROR_MODAL";
// export const ACTION = "ACTION";
//estos son ejemplos
// export const firstAction = () => {};

export const login = async (dispatch, email, password) => {
  try {
    let credential = await axios.post("/login", {
      userEmail: email,
      userPassword: password,
    });
    console.log("credentials from action", credential);

    dispatch({
      type: LOGIN,
      payload: true,
    });
    return credential;
  } catch (error) {
    loading(dispatch, false);
    dispatch({
      type: LOGIN,
      payload: null,
    });

    console.log(error);
  }
};

export const loading = (dispatch, payload) => {
  dispatch({
    type: LOADING,
    payload,
  });
};
export const errorModal = (dispatch, payload) => {
  dispatch({
    type: ERROR_MODAL,
    payload,
  });
};
