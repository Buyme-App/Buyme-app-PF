import {} from "../actions";

const initialState = {
  state: [],
};

function rootReducer (state = initialState, action) {
  switch(action.type) {
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

export default rootReducer;