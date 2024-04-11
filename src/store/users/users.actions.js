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
      const { data } = await axios.post(`${API}/account/register/`, formData);
      return data;
    } catch (error) {
      console.log(error);
      dispatch(setError(Object.values(error.response.data).flat(2)[0]));
    }
  }
);
