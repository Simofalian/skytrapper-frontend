import {
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
} from "./userTypes";

const initialValues = {
  loading: false,
  users: [],
  error: "",
};

const userReducer = (state = initialValues, action) => {
  switch (action.type) {
    case GET_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_USER_SUCCESS:
      return {
        loading: false,
        users: action.payload,
        error: "",
      };
    case GET_USER_FAILURE:
      return {
        loading: false,
        users: [],
        error: action.payload,
      };
    case SIGNUP_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SIGNUP_SUCCESS:
      return {
        loading: false,
        users: action.payload,
        error: "",
      };
    case SIGNUP_FAILURE:
      return {
        loading: false,
        users: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
