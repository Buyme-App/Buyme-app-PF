import {
  LOGIN,
  LOADING,
  ERROR_MODAL,
  GET_ALL_USERS,
  POST_USERS,
  UPDATE_PRODUCT,
} from "../actions/index";

const initialState = {
  allUsers: [],
  allProducts: [],
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
    case "GET_ALL_PRODUCTS":
      return {
        ...state,
        allProducts: action.payload,
      };
    case "POST_NEW_PRODUCT":
      return {
        ...state,
      };
    case GET_ALL_USERS:
      return {
        ...state,
        allUsers: action.payload,
      };
    case POST_USERS:
      return {
        ...state,
        allUsers: [...state.allUsers, action.payload],
      };
    case UPDATE_PRODUCT:
      return {
        ...state,
      };
    default:
      return state;
  }
}
