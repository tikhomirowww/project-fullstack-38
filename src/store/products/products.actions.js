import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getConfig } from "../../helpers/functions";
import { API } from "../../helpers/consts";
import { $axios } from "../../helpers/axios";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    try {
      // console.log("hello");
      const { data } = await $axios.get(`${API}/products/`);
      return data;
    } catch (error) {
      // console.log(error);
    }
  }
);

export const addProduct = createAsyncThunk(
  "products/addProduct",
  async (product) => {
    try {
      console.log("adding_console");
      await $axios.post(`${API}/products/`, product);
      getProducts();
    } catch (error) {
      console.log(error);
    }
  }
);
export const createProduct = createAsyncThunk(
  "products/createProduct",
  async (product) => {
    $axios.post(API, product);
  }
);
