import axios from "axios";
import { saveToken } from "../../components/Login/controllers/tokenFunctions";

// middlewares validacion token

// comentado para evitar warnings
// import { verifyTokenRole, sendKey } from "../../middlewares/verifyToken";
import { sendKey } from "../../middlewares/verifyToken";

const REACT_APP_API = process.env.REACT_APP_API
  ? process.env.REACT_APP_API
  : "http://localhost:3001";

// estos son ejemplos

export const LOGIN = "LOGIN";
export const LOG_OUT = 'LOG_OUT';
export const LOADING = "LOADIN";
export const ERROR_MODAL = "ERROR_MODAL";
export const GET_PRODUCTS_INIT = "GET_PRODUCTS_INIT";
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
export const FILL_CART = "FILL_CART";
export const SET_FILTERS = "SET_FILTERS";
export const FILTER_BY_FEATURED_BTN = "FILTER_BY_FEATURED_BTN";
export const FILTER_BY_DISCOUNTED_BTN = "FILTER_BY_DISCOUNTED_BTN";
export const FILTER_BY_FEATURED = "FILTER_BY_FEATURED";
export const ORDER_BY_PRICE = "ORDER_BY_PRICE";
export const ORDER_BY_PRICE_CAT = "ORDER_BY_PRICE_CAT";
export const FILTER_BY_DISCOUNT = "FILTER_BY_DISCOUNT";
export const GET_ALL_INVOICES = "GET_ALL_INVOICES";
export const FILTER_BY_CATEGORY = "FILTER_BY_CATEGORY";
export const FILTER_BY_FEATURED_CAT = "FILTER_BY_FEATURED_CAT";
export const GET_PRODUCTS_BY_CATEGORY = "GET_PRODUCTS_BY_CATEGORY";
export const POST_LOGIN_CUSTOMER = "POST_LOGIN_CUSTOMER";
export const POST_EMAIL = "POST_EMAIL";
export const URL_MP = "URL_MP";

// Used in Account component
export const UPDATE_USER = "UPDATE_USER";

export const login = async (dispatch, email, password) => {
  try {
    let credential = await axios.post(
      `${REACT_APP_API}/login`,
      {
        userEmail: email,
        userPassword: password,
        // headerProxy,
      },
      sendKey()
    );
    console.log("credentials from action", credential);
    saveToken(credential.data.data.token);
    dispatch({
      type: LOGIN,
      payload: credential.data.login,
    });

    // comentado para quitar el warning
    // const roleUser = verifyTokenRole(credential); // Retorna el rol del usuario administrativo

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
    dispatch({
      type: GET_PRODUCTS_INIT,
    });
    var json = await axios.get(`${REACT_APP_API}/getAllProducts`, sendKey());
    return dispatch({
      type: GET_ALL_PRODUCTS,
      payload: json.data,
    });
  };
}
//d
//getAll for client
export function getProductsClient() {
  return async function (dispatch) {
    dispatch({
      type: GET_PRODUCTS_INIT,
    });
    var json = await axios.get(`${REACT_APP_API}/getProductsClient`, sendKey());
    return dispatch({
      type: GET_ALL_PRODUCTS_CLIENT,
      payload: json.data,
    });
  };
}

export function getProductsByName(name) {
  return async function (dispatch) {
    try {
      dispatch({
        type: GET_PRODUCTS_INIT,
      });
      var json = await axios.get(
        `${REACT_APP_API}/productDetail/detail0/?nameProduct=` + name,
        sendKey()
      );
      return dispatch({
        type: GET_PRODUCTS_BY_NAME,
        payload: json.data,
      });
    } catch (error) {
      // return dispatch({
      //   type: GET_PRODUCTS_BY_NAME,
      //   payload: null,
      // });
      // console.log(error)
    }
  };
}

export function getProductsByNameClients(name) {
  return async function (dispatch) {
    try {
      dispatch({
        type: GET_PRODUCTS_INIT,
      });
      var json = await axios.get(
        `${REACT_APP_API}/getProDetailClient/detail0/?nameProduct=` + name,
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
      dispatch({
        type: GET_PRODUCTS_INIT,
      });
      var json = await axios.get(
        `${REACT_APP_API}/productDetail/detail` + idProduct,
        sendKey()
      );
      return dispatch({
        type: GET_PRODUCT_DETAIL,
        payload: json.data,
      });
    } catch (error) {
      // return dispatch({
      //   type: GET_PRODUCT_DETAIL,
      //   payload: null,
      // });
      // console.log(error)
    }
  };
}

export function getProductsByCategory(categoryId) {
  return async function (dispatch) {
    try {
      // dispatch({
      //   type: GET_PRODUCTS_INIT,
      // });
      var json = await axios.get(
        `${REACT_APP_API}/getcatbyid/` + categoryId
      );
      return dispatch({
        type: GET_PRODUCTS_BY_CATEGORY,
        payload: json.data,
      });
    } catch (error) {
      // return dispatch({
      //   type: GET_PRODUCT_DETAIL,
      //   payload: null,
      // });
      // console.log(error)
    }
  };
}

export function getDetailClients(idProduct) {
  return async function (dispatch) {
    try {
      var json = await axios.get(
        `${REACT_APP_API}/getProDetailClient/detail` + idProduct,
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
      `${REACT_APP_API}/createProduct`,
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
    let response = await axios.put(
      `${REACT_APP_API}/updateProduct`,
      product,
      sendKey()
    );
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
    let response = await axios.put(
      `${REACT_APP_API}/updateUser`,
      user,
      sendKey()
    );
    console.log("respuesta de update user", response);
    let json = await axios.get(`${REACT_APP_API}/getAllUsers`, sendKey());
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
        `${REACT_APP_API}/createUser`,
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
    let json = await axios.get(`${REACT_APP_API}/getAllUsers`, sendKey());
    // console.log('>>>>>>>>>>>>>',json)
    return dispatch({
      type: GET_ALL_USERS,
      payload: json.data,
    });
  };
}

export function getAllCategories() {
  return async function (dispatch) {
    try {
      let json = await axios.get(`${REACT_APP_API}/categories`, sendKey());
      return dispatch({
        type: GET_ALL_CATEGORIES,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getSubcategorieById(id) {
  return async function (dispatch) {
    try {
      let json = await axios.get(`${REACT_APP_API}/getSubcat/` + id, sendKey());
      return dispatch({
        type: GET_SUBCATEGORIE_BY_ID,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function createCategory(payload) {
  return async function () {
    let json = await axios.post(
      `${REACT_APP_API}/createCat`,
      payload,
      sendKey()
    );
    return json;
  };
}

export function createSubcategory(payload) {
  return async function () {
    let json = await axios.post(
      `${REACT_APP_API}/createSubCat`,
      payload,
      sendKey()
    );
    return json;
  };
}

export function deleteCategory(id) {
  return async function () {
    let json = await axios.delete(`${REACT_APP_API}/delCat/` + id, sendKey());
    return json;
  };
}

export function deleteSubcategory(id) {
  return async function () {
    let json = await axios.delete(
      `${REACT_APP_API}/delSubCat/` + id,
      sendKey()
    );
    return json;
  };
}

export function deleteUser(id) {
  return async function () {
    let json = await axios.delete(
      `${REACT_APP_API}/deleteUser/` + id,
      sendKey()
    );
    return json;
  };
}

export function getCustomer(email) {
  return async function (dispatch) {
    let json = await axios.get(
      `${REACT_APP_API}/getCustomer`,
      email,
      sendKey()
    );
    return dispatch({
      type: GET_CUSTOMER,
      payload: json.data,
    });
  };
}

export function createCustomer(payload) {
  return async function () {
    let json = await axios.post(
      `${REACT_APP_API}/createCustomer`,
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

export function setFilters(payload) {
  return {
    type: SET_FILTERS,
    payload,
  };
}

export function filterByFeaturedBtn(payload) {
  // console.log(payload)
  return {
    type: FILTER_BY_FEATURED_BTN,
    payload,
  };
}

export function filterByDiscountedBtn(payload) {
  // console.log(payload)
  return {
    type: FILTER_BY_DISCOUNTED_BTN,
    payload,
  };
}

export function filterByCategory(payload) {
  //console.log(payload)
  return {
    type: FILTER_BY_CATEGORY,
    payload,
  };
}

export function filterByFeatured(payload) {
  // console.log(payload)
  return {
    type: FILTER_BY_FEATURED,
    payload,
  };
}

export function filterByFeaturedCat(payload) {
  // console.log(payload)
  return {
    type: FILTER_BY_FEATURED_CAT,
    payload,
  };
}

export function orderByPrice(payload) {
  // console.log(payload)
  return {
    type: ORDER_BY_PRICE,
    payload,
  };
}

export function orderByPriceCat(payload) {
  // console.log(payload)
  return {
    type: ORDER_BY_PRICE_CAT,
    payload,
  };
}

export function filterByDiscount(payload) {
  // console.log(payload)
  return {
    type: FILTER_BY_DISCOUNT,
    payload,
  };
}

export function getAllInvoices() {
  return async function (dispatch) {
    let json = await axios.get(`${REACT_APP_API}/getAllInvoices`, sendKey());
    return dispatch({
      type: GET_ALL_INVOICES,
      payload: json.data,
    });
  };
}

export function loginCustomer(payload) {
  console.log("ACTION<<<<<<<<<<<<<<<<<<", payload);
  return async function (dispatch) {
    let json = await axios.post(`${REACT_APP_API}/loginCostumer`, payload);
    console.log("JSOn<<<<<<<<<<<<<<<<<<", json);
    return dispatch({
      type: POST_LOGIN_CUSTOMER,
      payload: json.data,
    });
  };
}

export function postEmail(payload){
  return async function (dispatch) {
      var response = await axios.post(`${REACT_APP_API}/sendMail`, payload);
      console.log(response);
      return response;
  }
}

// export function sendToMP(payload){
//     return async function (dispatch) {
//       try {
//      let json = await axios.post(`${REACT_APP_API}/mp`,payload);
//      localStorage.setItem("urlMP", JSON.stringify(json.data.url))
//       }catch(error){
//         console.log(error)
//       }
//     }
//   }

  
  export function sendToMpSuccess(payload){
    return async function (dispatch) {
      try {
      await axios.post(`${REACT_APP_API}/mpsuccess`,payload);
      console.log('---------success----------->>',payload);
      }catch(error){
        console.log(error)
      }
    }
  }