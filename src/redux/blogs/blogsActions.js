import axios from "axios";
import {
  GET_BLOG_REQUEST,
  GET_BLOG_SUCCESS,
  GET_BLOG_FAILURE,
} from "./blogTypes";

export const getBlogRequest = () => {
  return {
    type: GET_BLOG_REQUEST,
  };
};

export const getBlogSuccess = (blogs) => {
  return {
    type: GET_BLOG_SUCCESS,
    payload: blogs,
  };
};
export const getBlogFailure = (error) => {
  return {
    type: GET_BLOG_FAILURE,
    payload: error,
  };
};

export const getBlogs = () => {
  return (dispatch) => {
    dispatch(getBlogRequest);
    axios
      .get("http://127.0.0.1:8000/api/v1/blogs")
      .then((response) => {
        const blogs = response.data.data.blogs;
        console.log(blogs);
        dispatch(getBlogSuccess(blogs));
      })
      .catch((err) => {
        const error = err.message;
        dispatch(getBlogFailure(error));
      });
  };
};
