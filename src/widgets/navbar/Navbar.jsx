import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./navbar.module.css";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navbarRef = useRef(null);
  const toggle = () => {
    setOpen(!open);
  };
  const handleClickOutside = (event) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      setOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);
  return (
    <div ref={navbarRef} className={styles.container}>
      <img
        onClick={toggle}
        className={styles.avatar}
        src="https://cdn-icons-png.flaticon.com/512/147/147144.png"
        alt="avatar"
      />
      {open && (
        <div className={styles.navbar}>
          <NavLink to={"/register"}>Register</NavLink>
          <NavLink to={"/login"}>Login</NavLink>
          <span>Logout</span>
          <NavLink to={"/"}>Products list</NavLink>
          <NavLink to={"/add"}>Add product</NavLink>
        </div>
      )}
    </div>
  );
};

export default Navbar;
