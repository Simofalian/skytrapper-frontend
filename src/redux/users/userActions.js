import axios from "axios";
import {
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from "./userTypes";

export const getUserRequest = () => {
  return {
    type: GET_USER_REQUEST,
  };
};

export const getUserSuccess = (user) => {
  return {
    type: GET_USER_SUCCESS,
    payload: user,
  };
};

export const getUserFailure = (error) => {
  return {
    type: GET_USER_FAILURE,
    payload: error,
  };
};

export const getUsers = () => {
  return (dispatch) => {
    dispatch(getUserRequest);
    axios
      .get("http://127.0.0.1:8000/api/v1/users")
      .then((response) => {
        const users = response.data.data.users;
        console.log(users);
        dispatch(getUserSuccess(users));
      })
      .catch((err) => {
        const error = err.message;
        dispatch(getUserFailure(error));
      });
  };
};

//SIGNUP Actions

export const signUpRequest = () => {
  return {
    type: SIGNUP_REQUEST,
  };
};

export const signUpSuccess = () => {
  return {
    type: SIGNUP_SUCCESS,
    payload: "Signed up successfully",
  };
};
export const signUpFailure = (error) => {
  return {
    type: SIGNUP_FAILURE,
    payload: error,
  };
};

export const signUp = (user) => {
  return (dispatch) => {
    dispatch(signUpRequest);
    fetch("http://127.0.0.1:8000/api/v1/users/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      user,
    })
      .then((res) => {
        console.log(res);
        dispatch(signUpSuccess());
      })
      .catch((err) => {
        const error = err.message;
        dispatch(signUpFailure(error));
      });
  };
};
