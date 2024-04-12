import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "./products.actions";

const INIT_STATE = {
  products: [],
  loading: false,
};

export const productsSlice = createSlice({
  name: "products",
  initialState: INIT_STATE,
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProducts.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.products = payload.results;
      });
  },
});
