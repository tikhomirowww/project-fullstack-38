import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../store/users/users.actions";

const RegisterPage = () => {
  const [registerObj, setRegisterObj] = useState({
    email: "",
    password: "",
    password_confirm: "",
  });

  const dispatch = useDispatch();

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
    dispatch(registerUser(registerObj));
  }

  const { error } = useSelector((state) => state.users);

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register form</h2>
      {error && <h2>{error}</h2>}
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
      <input
        onChange={handleChange}
        value={registerObj.password_confirm}
        name="password_confirm"
        placeholder="Password confirm"
        type="text"
      />
      <button>Register</button>
    </form>
  );
};

export default RegisterPage;
