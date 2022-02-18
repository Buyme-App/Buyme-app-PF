import axios from "axios";
import { saveToken } from "../../components/Login/controllers/tokenFunctions";

// middlewares validacion token

import { verifyTokenRole, sendKey } from "../../middlewares/verifyToken";

// export const ACTION = "ACTION";
// estos son ejemplos

export const LOGIN = "LOGIN";
export const LOADING = "LOADIN";
export const ERROR_MODAL = "ERROR_MODAL";
export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export const GET_PRODUCT_DETAIL = "GET_PRODUCT_DETAIL";
export const GET_PRODUCTS_BY_NAME = "GET_PRODUCTS_BY_NAME";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";
export const POST_NEW_PRODUCT = "POST_NEW_PRODUCT";
export const CLEAR_PRODUCT_DETAIL = "CLEAR_PRODUCT_DETAIL";
export const GET_ALL_USERS = "GET_ALL_USERS";
export const POST_USERS = "POST_USERS";
export const GET_ALL_CATEGORIES = "GET_ALL_CATEGORIES";
export const GET_SUBCATEGORIE_BY_ID = "GET_SUBCATEGORIE_BY_ID";
export const POST_NEW_CATEGORY = "POST_NEW_CATEGORY";
export const POST_NEW_SUBCATEGORY = "POST_NEW_SUBCATEGORY";
export const DELETE_CATEGORY = "DELETE_CATEGORY";
export const DELETE_SUBCATEGORY = "DELETE_SUBCATEGORY";
export const DELETE_USER = "DELETE_USER";
export const GET_CUSTOMER = "GET_CUSTOMER";
export const POST_CUSTOMER = "POST_CUSTOMER";
export const GET_ALL_PRODUCTS_CLIENT = "GET_ALL_PRODUCTS_CLIENT";
export const GET_DETAIL_CLIENT = "GET_DETAIL_CLIENT";
export const GET_PRODUCTS_BY_NAME_CLIENTS = "GET_PRODUCTS_BY_NAME_CLIENTS";
export const ADD_TO_CART = "ADD_TO_CART";
export const CLEAR_CART = "CLEAR_CART";
export const REMOVE_ALL_FROM_CART = "REMOVE_ALL_FROM_CART";
export const REMOVE_ONE_FROM_CART = "REMOVE_ONE_FROM_CART";
export const ADD_ONE_TO_CART = "ADD_ONE_TO_CART";

// Used in Account component
export const UPDATE_USER = "UPDATE_USER";

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
    saveToken(credential.data.data.token);
    dispatch({
      type: LOGIN,
      payload: credential.data.login,
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
  return async function (dispatch) {
    var json = await axios.get(
      "http://localhost:3001/getAllProducts",
      sendKey()
    );
    return dispatch({
      type: GET_ALL_PRODUCTS,
      payload: json.data,
    });
  };
}
//getAll for client
export function getProductsClient() {
  return async function (dispatch) {
    var json = await axios.get(
      "http://localhost:3001/getProductsClient",
      sendKey()
    );
    return dispatch({
      type: GET_ALL_PRODUCTS_CLIENT,
      payload: json.data,
    });
  };
}

export function getProductsByName(name) {
  return async function (dispatch) {
    try {
      var json = await axios.get(
        "http://localhost:3001/productDetail/detail0/?nameProduct=" + name,
        sendKey()
      );
      return dispatch({
        type: GET_PRODUCTS_BY_NAME,
        payload: json.data,
      });
    } catch (error) {
      return dispatch({
        type: GET_PRODUCTS_BY_NAME,
        payload: null,
      });
      // console.log(error)
    }
  };
}

export function getProductsByNameClients(name) {
  return async function (dispatch) {
    try {
      var json = await axios.get(
        "http://localhost:3001/getProDetailClient/detail0/?nameProduct=" + name,
        sendKey()
      );
      return dispatch({
        type: GET_PRODUCTS_BY_NAME_CLIENTS,
        payload: json.data,
      });
    } catch (error) {
      return dispatch({
        type: GET_PRODUCTS_BY_NAME_CLIENTS,
        payload: null,
      });
      // console.log(error)
    }
  };
}

export function getProductDetail(idProduct) {
  return async function (dispatch) {
    try {
      var json = await axios.get(
        "http://localhost:3001/productDetail/detail" + idProduct,
        sendKey()
      );
      return dispatch({
        type: GET_PRODUCT_DETAIL,
        payload: json.data,
      });
    } catch (error) {
      return dispatch({
        type: GET_PRODUCT_DETAIL,
        payload: null,
      });
      // console.log(error)
    }
  };
}

export function getDetailClients(idProduct) {
  return async function (dispatch) {
    try {
      var json = await axios.get(
        "http://localhost:3001/getProDetailClient/detail" + idProduct,
        sendKey()
      );
      return dispatch({
        type: GET_DETAIL_CLIENT,
        payload: json.data,
      });
    } catch (error) {
      return dispatch({
        type: GET_DETAIL_CLIENT,
        payload: null,
      });
      // console.log(error)
    }
  };
}

export function clearProductDetail() {
  return {
    type: CLEAR_PRODUCT_DETAIL,
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
    let response = await axios.put("/updateProduct", product, sendKey());
    console.log("respuesta de update", response);
    await dispatch(getAllProducts());
    return dispatch({
      type: UPDATE_PRODUCT,
    });
  } catch (err) {
    console.log("error en updateProduct", err);
  }
};

export const updateUser = async (dispatch, user) => {
  console.log("updateUser recibido:", user);
  try {
    let response = await axios.put("/updateUser", user, sendKey());
    console.log("respuesta de update user", response);
    let json = await axios.get("http://localhost:3001/getAllUsers", sendKey());
    return dispatch({
      type: UPDATE_USER,
      payload: json.data,
    });
  } catch (err) {
    console.log("error en updateUser", err);
  }
};

export function postUser(payload) {
  return async function () {
    try {
      // console.log('CREate', payload)
      let json = await axios.post(
        "http://localhost:3001/createUser",
        payload,
        sendKey()
      );
      alert("User created successfully!");
      return {
        type: POST_USERS,
        payload: json.data,
      };
    } catch (err) {
      console.log("Error creando usuario", err);
    }
  };
}

export function getAllUsers() {
  return async function (dispatch) {
    let json = await axios.get("http://localhost:3001/getAllUsers", sendKey());
    // console.log('>>>>>>>>>>>>>',json)
    return dispatch({
      type: GET_ALL_USERS,
      payload: json.data,
    });
  };
}

export function getAllCategories() {
  try {
    return async function (dispatch) {
      let json = await axios.get("http://localhost:3001/categories", sendKey());
      return dispatch({
        type: GET_ALL_CATEGORIES,
        payload: json.data,
      });
    };
  } catch (error) {
    console.log(error);
  }
}

export function getSubcategorieById(id) {
  try {
    return async function (dispatch) {
      let json = await axios.get(
        "http://localhost:3001/getSubcat/" + id,
        sendKey()
      );
      return dispatch({
        type: GET_SUBCATEGORIE_BY_ID,
        payload: json.data,
      });
    };
  } catch (error) {
    console.log(error);
  }
}

export function createCategory(payload) {
  return async function () {
    let json = await axios.post(
      "http://localhost:3001/createCat",
      payload,
      sendKey()
    );
    return json;
  };
}

export function createSubcategory(payload) {
  return async function () {
    let json = await axios.post(
      "http://localhost:3001/createSubCat",
      payload,
      sendKey()
    );
    return json;
  };
}

export function deleteCategory(id) {
  return async function () {
    let json = await axios.delete(
      "http://localhost:3001/delCat/" + id,
      sendKey()
    );
    return json;
  };
}

export function deleteSubcategory(id) {
  return async function () {
    let json = await axios.delete(
      "http://localhost:3001/delSubCat/" + id,
      sendKey()
    );
    return json;
  };
}

export function deleteUser(id) {
  return async function () {
    let json = await axios.delete(
      "http://localhost:3001/deleteUser/" + id,
      sendKey()
    );
    return json;
  };
}

export function getCustomer(payload) {
  return async function (dispatch) {
    let json = await axios.get("http://localhost:3001/getCustomer", payload, sendKey());
    return dispatch({
      type: GET_CUSTOMER,
      payload: json.data,
    });
  };
};

export function createCustomer(payload) {
  return async function () {
    let json = await axios.post(
      "http://localhost:3001/createCustomer",
      payload,
      sendKey()
    );
    return json;
  };
}

//Cart
export function addToCart(product, amount) {
  return {
    type: ADD_TO_CART,
    payload: { product, amount },
  };
}
