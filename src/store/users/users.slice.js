import { createSlice } from "@reduxjs/toolkit";
import { registerUser } from "./users.actions";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    error: null,
    loading: false,
  },
  reducers: {
    setError: (state, { payload }) => {
      state.error = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerUser.fulfilled, (state) => {
      state.error = null;
    });
  },
});

export const { setError } = usersSlice.actions;
