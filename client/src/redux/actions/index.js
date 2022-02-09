import axios from "axios";
import { useNavigate } from "react-router";

// export const ACTION = "ACTION";
// estos son ejemplos

export const LOGIN = "LOGIN";
export const LOADING = "LOADIN";
export const ERROR_MODAL = "ERROR_MODAL";
export const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS';
export const GET_ALL_USERS = 'GET_ALL_USERS';
export const POST_USERS = 'POST_USERS';
export const GET_ALL_CATEGORIES = 'GET_ALL_CATEGORIES';
export const GET_SUBCATEGORIE_BY_ID = 'GET_SUBCATEGORIE_BY_ID';

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

export function getAllProducts(){
    return async function(dispatch){
        var json= await axios.get('http://localhost:3001/getAllProducts');
        return dispatch({
            type: GET_ALL_PRODUCTS,
            payload: json.data
        })
    }
}

export function createProduct(payload){
    return async function (dispatch) {
        var response = await axios.post('http://localhost:3001/createProduct', payload);
        // console.log(response);
        return response;
    }
}

export function postUser(payload){
  return async function(){
      let json = await axios.post('http://localhost:3001/createUser', payload);
      return ({
        type: POST_USERS,
        payload: json.data
      })
  }
};

export function getAllUsers(payload){
  return async function(dispatch){
    let json = await axios.get('http://localhost:3001/getAllUsers');
    return dispatch({
      type: GET_ALL_USERS,
      payload: json.data
    })
  }
};

export function getAllCategories(){
  try {
    return async function(dispatch){
      let json = await axios.get('http://localhost:3001/categories');
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
      let json = await axios.get('http://localhost:3001/getSubcat/' + id);
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
      let json = await axios.post('http://localhost:3001/createCat', payload);
      return json;
  }
};

export function createSubcategory(payload){
  return async function () {
      let json = await axios.post('http://localhost:3001/createSubCat', payload);
      return json;
  }
};

export function deleteCategory(id){
  return async function () {
      let json = await axios.delete('http://localhost:3001/delCat/' + id);
      return json;
  }
};

export function deleteSubcategory(id){
  return async function () {
      let json = await axios.delete('http://localhost:3001/delSubCat/' + id);
      return json;
  }
};
