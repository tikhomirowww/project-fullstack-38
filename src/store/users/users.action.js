import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API } from "../../helpers/consts";
import { setError } from "./users.slice";
export const registerUser = createAsyncThunk(
  "users/registerUser",
  async (data, { dispatch }) => {
    console.log(data);
    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("password_confirm", data.password_confirm);
    try {
      const { data: result } = await axios.post(
        `${API}/account/register/`,
        formData
      );
      data.navigate("/login");
      return result;
    } catch (error) {
      console.log(error);
      dispatch(setError(Object.values(error.response.data).flat(2)[0]));
    }
  }
);
export const loginUser = createAsyncThunk(
  "users/loginUser",
  async ({ user, navigate }, { dispatch }) => {
    const formData = new FormData();
    formData.append("email", user.email);
    formData.append("password", user.password);

    try {
      const { data } = await axios.post(`${API}/account/login/`, formData);
      localStorage.setItem("tokens", JSON.stringify(data));
      navigate("/");
      return data;
    } catch (error) {
      dispatch(setError(Object.values(error.response.data).flat(2)[0]));
    }
  }
);
