import {
  GET_BLOG_REQUEST,
  GET_BLOG_SUCCESS,
  GET_BLOG_FAILURE,
  POST_BLOG_REQUEST,
  POST_BLOG_SUCCESS,
  POST_BLOG_FAILURE,
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
    case POST_BLOG_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case POST_BLOG_SUCCESS:
      return {
        loading: false,
        blogs: state.blogs.push(action.payload),
        error: "",
      };

    case POST_BLOG_FAILURE:
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
