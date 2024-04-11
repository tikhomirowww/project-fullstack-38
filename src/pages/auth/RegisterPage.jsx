import React, { useState } from "react";
import { registerUser } from "../../store/users/users.action";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const RegisterPage = () => {
  const [registerObj, setRegisterOgb] = useState({
    email: "",
    password: "",
    password_confirm: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleChange(e) {
    const { value, name } = e.target;
    setRegisterOgb({ ...registerObj, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    for (let key in registerObj) {
      if (!registerObj[key].trim()) {
        alert("some inputs are empty");
        return;
      }
    }
    dispatch(registerUser({ ...registerObj, navigate }));
  }
  const { error } = useSelector((state) => state.users);

  console.log(error, "erorrrrrrrr");

  return (
    <form onSubmit={handleSubmit}>
      <h2>register form</h2>
      {error && <h2>{error}!!!</h2>}
      <input
        onChange={handleChange}
        name="email"
        value={registerObj.email}
        placeholder="Email"
        type="email"
      />
      <input
        onChange={handleChange}
        name="password"
        value={registerObj.password}
        placeholder="Password"
        type="text"
      />
      <input
        onChange={handleChange}
        name="password_confirm"
        value={registerObj.password_confirm}
        placeholder="Pasword confirm"
        type="text"
      />
      <button>Register</button>
    </form>
  );
};

export default RegisterPage;
