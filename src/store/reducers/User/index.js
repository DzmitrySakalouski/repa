import { GET_USER } from "../../actions/User/types/user.types";

const initialState = {
  user: null,
};

export const userReducer = (state=initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        state: action.payload,
      };

    default:
      return state;
  }
};
