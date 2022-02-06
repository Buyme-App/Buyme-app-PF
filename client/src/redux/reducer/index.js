import { LOGIN, LOADING, ERROR_MODAL } from "../actions";

const initialState = {
  state: [],
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
    case 'GET_ALL_PRODUCTS':
            return {
                ...state,
                allproducts: action.payload
            };
    case 'POST_NEW_PRODUCT':
        return {
            ...state
        };

    default:
        return state;
  }

}
