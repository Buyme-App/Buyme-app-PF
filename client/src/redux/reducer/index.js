import { LOGIN } from "../actions";

const initialState = {
  state: [],
  login: null,
};
export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        login: action.payload,
      };

    default:
      return { ...state };
  }
}
