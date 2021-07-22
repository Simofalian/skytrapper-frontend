import React from "react";
import BlogCategoryNav from "../shared/BlogCategoryNav";
const BlogCategory = () => {
  return (
    <div className='read-blog'>
      <BlogCategoryNav />
      <h2 className='huge-heading'>Blog Heading</h2>
      <h2 className='normal-heading'>Blog Snippet</h2>
    </div>
  );
};

export default BlogCategory;
