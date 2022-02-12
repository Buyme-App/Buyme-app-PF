import axios from "axios";

// middlewares validacion token

import { verifyTokenRole, sendKey } from "../../middlewares/verifyToken";

// export const ACTION = "ACTION";
// estos son ejemplos

export const LOGIN = "LOGIN";
export const LOADING = "LOADIN";
export const ERROR_MODAL = "ERROR_MODAL";
export const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS';
export const GET_PRODUCT_DETAIL = "GET_PRODUCT_DETAIL";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";
export const POST_NEW_PRODUCT = "POST_NEW_PRODUCT";
export const CLEAR_PRODUCT_DETAIL = "CLEAR_PRODUCT_DETAIL";
export const GET_ALL_USERS = 'GET_ALL_USERS';
export const POST_USERS = 'POST_USERS';
export const GET_ALL_CATEGORIES = 'GET_ALL_CATEGORIES';
export const GET_SUBCATEGORIE_BY_ID = 'GET_SUBCATEGORIE_BY_ID';

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

export function getAllProducts(){
    return async function(dispatch){
        var json= await axios.get('http://localhost:3001/getAllProducts', sendKey());
        return dispatch({
            type: GET_ALL_PRODUCTS,
            payload: json.data
        })
    }
}

export function getProductDetail(idProduct){
  return async function (dispatch){
      try{
          var json = await axios.get('http://localhost:3001/productDetail/detail' + idProduct, sendKey());
          return dispatch ({
              type: GET_PRODUCT_DETAIL,
              payload: json.data
          }) 
      }catch(error){
          return dispatch ({
              type: GET_PRODUCT_DETAIL,
              payload: null
          })
          // console.log(error)
      }
  }
}

export function clearProductDetail() {
  return {
    type: CLEAR_PRODUCT_DETAIL,
  }
}

export function createProduct(payload) {
  return async function (dispatch) {
    var response = await axios.post('http://localhost:3001/createProduct', payload, sendKey());
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

export function postUser(payload) {
  return async function () {
    try {
      // console.log('CREate', payload)
      let json = await axios.post('http://localhost:3001/createUser', payload, sendKey());
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

export function getAllUsers() {
  return async function (dispatch) {
    let json = await axios.get('http://localhost:3001/getAllUsers', sendKey());
    // console.log('>>>>>>>>>>>>>',json)
    return dispatch({
      type: GET_ALL_USERS,
      payload: json.data
    })
  }
};

export function getAllCategories(){
  try {
    return async function(dispatch){
      let json = await axios.get('http://localhost:3001/categories', sendKey());
      return dispatch({
        type: GET_ALL_CATEGORIES,
        payload: json.data
      })
    }
  } catch (error) {
      console.log(error);
  }
};

export function getSubcategorieById(id){
  try {
    return async function(dispatch){
      let json = await axios.get('http://localhost:3001/getSubcat/' + id, sendKey());
      return dispatch({
        type: GET_SUBCATEGORIE_BY_ID,
        payload: json.data
      })
    }
  } catch (error) {
      console.log(error);
  }
};

export function createCategory(payload){
  return async function () {
      let json = await axios.post('http://localhost:3001/createCat', payload, sendKey());
      return json;
  }
};

export function createSubcategory(payload){
  return async function () {
      let json = await axios.post('http://localhost:3001/createSubCat', payload, sendKey());
      return json;
  }
};

export function deleteCategory(id){
  return async function () {
      let json = await axios.delete('http://localhost:3001/delCat/' + id, sendKey());
      return json;
  }
};

export function deleteSubcategory(id){
  return async function () {
      let json = await axios.delete('http://localhost:3001/delSubCat/' + id, sendKey());
      return json;
  }
};

export function deleteUser(id){
  return async function () {
      let json = await axios.delete('http://localhost:3001/deleteUser/' + id, sendKey());
      return json;
  }
};