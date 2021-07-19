import React from "react";
import "./BlogCategoryNav.scss";
import { NavLink } from "react-router-dom";
const BlogCategoryNav = () => {
  return (
    <div className='blog-nav'>
      <NavLink to='/blogs/relatioship'> Relationship</NavLink>
      <NavLink to='/blogs/careers'>Careers</NavLink>
      <NavLink to='/blogs/technology'>Tech</NavLink>
      <NavLink to='/blogs/sex'>Sex</NavLink>
      <NavLink to='/blogs/education'>Education</NavLink>
    </div>
  );
};

export default BlogCategoryNav;
