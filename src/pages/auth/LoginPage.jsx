import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../store/users/users.actions";

const LoginPage = () => {
  const [registerObj, setRegisterObj] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleChange(e) {
    const { value, name } = e.target;
    setRegisterObj({ ...registerObj, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    for (let key in registerObj) {
      if (!registerObj[key].trim()) {
        alert("some inputs are empty");
        return;
      }
    }
    console.log("hello");
    dispatch(loginUser({ user: registerObj, navigate }));
  }
  const { error } = useSelector((state) => state.users);
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login form</h2>
      {error && <h2 style={{ color: "red" }}>{error}!!!</h2>}
      <input
        onChange={handleChange}
        value={registerObj.email}
        name="email"
        placeholder="Email"
        type="email"
      />
      <input
        onChange={handleChange}
        value={registerObj.password}
        name="password"
        placeholder="Password"
        type="text"
      />
      <button>Login</button>
    </form>
  );
};

export default LoginPage;
