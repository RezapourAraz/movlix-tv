import axios from "axios";
// actions
import { userActionTypes } from "./user.type";
// cookie
import { setCookie } from "cookies-next";

const BASE_URL = "https://movlix-server.vercel.app/";

// user sign in
const userSigInActionStart = () => ({
  type: userActionTypes.USER_SIGN_IN_START,
});
const userSignInActionSuccess = (user) => ({
  type: userActionTypes.USER_SIGN_IN_SUCCESS,
  payload: user,
});
const userSignInActionFailure = () => ({
  type: userActionTypes.USER_SIGN_IN_FAILURE,
});

export const userSignIn = (userName, password, router) => async (dispatch) => {
  await dispatch(userSigInActionStart());
  await axios
    .get(`${BASE_URL}users?userName=${userName}&password=${password}`)
    .then((res) => {
      const user = res.data.data;
      dispatch(userSignInActionSuccess(user));
      setCookie("user", user);
      router.push("/");
    })
    .catch((err) => dispatch(userSignInActionFailure(err.message)));
};
