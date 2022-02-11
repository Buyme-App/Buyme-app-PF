import {
  LOGIN,
  LOADING,
  ERROR_MODAL,
  GET_ALL_USERS,
  POST_USERS,
  GET_ALL_CATEGORIES,
  GET_SUBCATEGORIE_BY_ID,
  UPDATE_PRODUCT,
  GET_ALL_PRODUCTS,
  GET_PRODUCT_DETAIL,
  CLEAR_PRODUCT_DETAIL,
  POST_NEW_PRODUCT,
} from "../actions/index";


const initialState = {
  allUsers: [],
  allCategories: [],
  subcategories: [],
  allProducts: [],
  detail: [],
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
        allProducts: action.payload,
      };
      case GET_PRODUCT_DETAIL:
        if(!action.payload){
            return {
                ...state,
                detail: [404]
            }
        } else {
            return {
                ...state,
                detail: action.payload
            }
        };
    case CLEAR_PRODUCT_DETAIL:
        return {
            ...state,
            detail: {},
        };
    case POST_NEW_PRODUCT:
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
    case 'DELETE_CATEGORY':
      return {
          ...state
      };
    case 'DELETE_SUBCATEGORY':
      return {
          ...state
      };
    default:
      return state;
  }
}
