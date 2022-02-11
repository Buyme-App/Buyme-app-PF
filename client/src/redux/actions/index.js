import axios from "axios";

// middlewares validacion token

import { verifyTokenRole, sendKey } from "../../middlewares/verifyToken";

// export const ACTION = "ACTION";
// estos son ejemplos

export const LOGIN = "LOGIN";
export const LOADING = "LOADIN";
export const ERROR_MODAL = "ERROR_MODAL";
export const GET_ALL_USERS = "GET_ALL_USERS";
export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export const POST_USERS = "POST_USERS";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";
export const POST_NEW_PRODUCT = "POST_NEW_PRODUCT";

export const login = async (dispatch, email, password) => {
  try {
    let credential = await axios.post(
      "/login",
      {
        userEmail: email,
        userPassword: password,
      },
      sendKey()
    );
    console.log("credentials from action", credential);

    dispatch({
      type: LOGIN,
      payload: true,
    });
    const roleUser = verifyTokenRole(credential); // Retona el rol del usuario administrativo
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

export function getAllProducts() {
  console.log("se ejecutó getallProducts");
  return async function (dispatch) {
    var json = await axios.get("http://localhost:3001/getAllProducts");
    return dispatch({
      type: "GET_ALL_PRODUCTS",
      payload: json.data,
    });
  };
}

export function createProduct(payload) {
  return async function (dispatch) {
    var response = await axios.post(
      "http://localhost:3001/createProduct",
      payload,
      sendKey()
    );
    // console.log(response);
    return response;
  };
}
export const updateProduct = async (dispatch, product) => {
  console.log("recibido,", product);
  try {
    let response = await axios.put("/updateProduct", product);
    console.log("respuesta de update", response);
    await dispatch(getAllProducts());
    return dispatch({
      type: UPDATE_PRODUCT,
    });
  } catch (err) {
    console.log("error en updateProduct", err);
  }
};

export function postUser(payload) {
  return async function () {
    try {
      // console.log('CREate', payload)
      let json = await axios.post("http://localhost:3001/createUser", payload, sendKey());
      alert('User created successfully!');
      return {
        type: POST_USERS,
        payload: json.data,
      };
    } catch (err) {
      console.log("Error creando usuario", err);
    }
  };
}

export function getAllUsers(payload) {
  return async function (dispatch) {
    let json = await axios.get("http://localhost:3001/getAllUsers", sendKey());
    // console.log('>>>>>>>>>>>>>',json)
    return dispatch({
      type: GET_ALL_USERS,
      payload: json.data,
    });
  };
}
