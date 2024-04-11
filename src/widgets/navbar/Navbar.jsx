import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <NavLink to={"/register"}>Register</NavLink>
      <NavLink to={"/login"}>Login</NavLink> <span>Logout</span>
      <NavLink to={"/"}>Products list</NavLink>
      <NavLink to={"/add"}>Add product</NavLink>
    </div>
  );
};

export default Navbar;