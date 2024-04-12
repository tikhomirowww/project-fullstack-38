import React from "react";
import styles from "./input.module.css";

const Input = ({ children, name, type, onChange, value, placeholder }) => {
  return (
    <div className={styles.inputbox}>
      <input
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        type={type}
        required="required"
      />
      <span>{children}</span>
      <i></i>
    </div>
  );
};

export default Input;
