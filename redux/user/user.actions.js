import axios from "axios";
// actions
import { userActionTypes } from "./user.type";
// cookie
import { setCookie } from "cookies-next";
// toast
import { toast } from "react-toastify";

const BASE_URL = "https://movlix-tv.iran.liara.run/";

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
    .post(`${BASE_URL}login`, {
      userName,
      password,
    })
    .then((res) => {
      dispatch(userSignInActionSuccess(res.data.data));
      setCookie("user", res.data.data);
      toast.success(res.data.resultMessage);
      router.push("/");
    })
    .catch((err) => {
      dispatch(userSignInActionFailure(err.message));
      toast.error(err.resultMessage);
      console.log(err.message);
    });
};
