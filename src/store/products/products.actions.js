import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getConfig } from "../../helpers/functions";
import { API } from "../../helpers/consts";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    try {
      console.log("hello");
      const { data } = await axios.get(`${API}/products/`, getConfig());
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const createProduct = createAsyncThunk(
  "products/createProduct",
  async (product) => {
    axios.post(API, product);
  }
);
