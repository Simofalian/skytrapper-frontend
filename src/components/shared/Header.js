import React from "react";
import "./Header.scss";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <h1>SkyTrappers</h1>
      <div className="header__nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/users">Users</NavLink>
        <NavLink to="/blogs">Blogs</NavLink>
        <NavLink to="/create">Create</NavLink>
        <NavLink to="/register">register</NavLink>
        <NavLink to="/login">Login</NavLink>
      </div>
    </div>
  );
};

export default Header;
