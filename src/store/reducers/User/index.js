import { GET_USER, SET_UID } from "../../actions/User/types/user.types";

const initialState = {
  user: {},
};

export const userReducer = (state=initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        user: action.payload,
      };

    case SET_UID:
      return {
        ...state,
        user: {...state.user, uid: action.payload},
      }

    default:
      return state;
  }
};
