import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getBlogs } from "./../redux";
import BlogCategoryNav from "./shared/BlogCategoryNav";
const BlogContainer = ({ BlogsData, getBlogs }) => {
  useEffect(() => {
    getBlogs();
  }, []);
  return BlogsData.loading ? (
    <h3>LOADING......</h3>
  ) : BlogsData.error ? (
    <h2>{BlogsData.error}</h2>
  ) : (
    <div>
      <BlogCategoryNav />
      {BlogsData.blogs.map((blog) => {
        return (
          <div key={blog._id}>
            <h2 className='huge-heading'>{blog.title}</h2>
            <h2 className='normal-heading'>{blog.snippet}</h2>
            <p>{blog.body}</p>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    BlogsData: state.Blogs,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getBlogs: () => dispatch(getBlogs()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(BlogContainer);
