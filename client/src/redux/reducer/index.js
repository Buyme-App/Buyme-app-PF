import { LOGIN, LOADING, ERROR_MODAL, GET_ALL_USERS, POST_USERS, GET_ALL_CATEGORIES, GET_ALL_PRODUCTS, GET_SUBCATEGORIE_BY_ID } from "../actions";

const initialState = {
  state: [],
  allUsers: [],
  allCategories: [],
  subcategories: [],
  login: null,
  loading: false,
  error: false,
};



export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        login: action.payload,
      };
    case LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case ERROR_MODAL:
      return {
        ...state,
        error: action.payload,
      };
    case GET_ALL_PRODUCTS:
            return {
                ...state,
                allproducts: action.payload
            };
    case 'POST_NEW_PRODUCT':
        return {
            ...state
        };
    case GET_ALL_USERS:
      return {
        ...state,
        allUsers: action.payload
      };
    case POST_USERS:
      return {
          ...state,
          allUsers: [...state.allUsers, action.payload]
      };
    case GET_ALL_CATEGORIES:
      return {
        ...state,
        allCategories: action.payload
      };
    case GET_SUBCATEGORIE_BY_ID:
      return {
        ...state,
        subcategories: action.payload
      };
    case 'POST_NEW_CATEGORY':
      return {
          ...state
      };
    case 'POST_NEW_SUBCATEGORY':
      return {
          ...state
      };
    default:
        return state;
  }

}
