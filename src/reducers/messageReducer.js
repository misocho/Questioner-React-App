import actionTypes from "../actions/actionTypes";

export const messageReducer = (state = {}, action) => {
  console.log(action, "We are here");
  switch (action.type) {
    case actionTypes.DISPLAY_MESSAGE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
