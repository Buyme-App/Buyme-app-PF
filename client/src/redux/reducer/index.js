import {} from "../actions";

const initialState = {
  state: [],
};
export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    //   case ACTION:
    //     return {
    //       ...state,

    //     };

    default:
      return { ...state };
  }
}
