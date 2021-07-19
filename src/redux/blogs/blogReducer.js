import {
  GET_BLOG_REQUEST,
  GET_BLOG_SUCCESS,
  GET_BLOG_FAILURE,
} from "./blogTypes";

const initialValues = {
  loading: false,
  blogs: [],
  error: "",
};

const blogReducer = (state = initialValues, action) => {
  switch (action.type) {
    case GET_BLOG_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_BLOG_SUCCESS:
      return {
        loading: false,
        blogs: action.payload,
        error: "",
      };
    case GET_BLOG_FAILURE:
      return {
        loading: false,
        blogs: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default blogReducer;
