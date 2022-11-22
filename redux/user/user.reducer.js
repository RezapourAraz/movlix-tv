import { userActionTypes } from "./user.type";

const initialState = {
  user: null,
  isLoading: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userActionTypes.USER_SIGN_IN_START:
      return {
        ...state,
        isLoading: true,
      };
    case userActionTypes.USER_SIGN_IN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: action.payload,
      };
    case userActionTypes.USER_SIGN_IN_FAILURE:
      return {
        ...state,
        user: null,
        isLoading: false,
      };
    default:
      return state;
  }
};
export default userReducer;
