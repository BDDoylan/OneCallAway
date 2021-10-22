import user from "../api/user";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL
} from "../types";

export const registerUser = values => async dispatch => {
  try {
    const { data } = await user.post("/register", values);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: data
    });

    alert("Registered!");
  } catch (error) {
    console.error(error);

    dispatch({
      type: REGISTER_FAIL
    });
    alert("Register failed");
  }
};

export const loginUser = formValues => async dispatch => {
  try {
    const { data } = await user.post("/users/login", formValues);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: data
    });

    alert("Logged in!");
  } catch (err) {
    console.error(err);

    alert("Login failed");

    dispatch({
      type: LOGIN_FAIL
    });
  }
};
