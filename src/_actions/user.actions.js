import { alertActions } from "./";
import { history } from "../_helpers";
import { userService } from "../_services";
import { userConstants } from "../_constants";

export const userActions = {
  register,
  // logout,
};

function register(user) {
  return (dispatch) => {
    dispatch(request(user));

    userService
      .register(user)
      .then(() => {
        // dispatch(success(user));
        dispatch(alertActions.success("Registration successful"));
        // historyObject.push("/success");
      })
      .catch((error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      });
  };

  function request(user) {
    return { type: userConstants.REGISTER_REQUEST, user };
  }
  // function success(user) {
  //   return { type: userConstants.REGISTER_SUCCESS, user };
  // }
  function failure(error) {
    return { type: userConstants.REGISTER_FAILURE, error };
  }
}
