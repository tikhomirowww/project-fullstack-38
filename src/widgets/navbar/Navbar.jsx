import React, { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styles from "./navbar.module.css";
import Button from "../buttons/Button";
import { checkAuth } from "../../store/users/users.actions";
import { useDispatch } from "react-redux";
const Navbar = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    const tokens = JSON.parse(localStorage.getItem("tokens"));
    if (tokens) {
      dispatch(checkAuth());
      console.log(location);
    }
  }, [location]);
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
      <ul className={styles.navs}>
        <li>
          <NavLink to={"/"}>
            <Button style={{ color: "white" }}>Products list</Button>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/add"}>
            <Button style={{ color: "white" }}>Add productt</Button>
          </NavLink>
        </li>
      </ul>
      <img
        onClick={toggle}
        className={styles.avatar}
        src="https://cdn-icons-png.flaticon.com/512/147/147144.png"
        alt="avatar"
      />

      {open && (
        <div onClick={() => setOpen(!open)} className={styles.navbar}>
          <NavLink to={"/register"}>Register</NavLink>
          <NavLink to={"/login"}>Login</NavLink>
          <span>Logout</span>
        </div>
      )}
    </div>
  );
};

export default Navbar;
