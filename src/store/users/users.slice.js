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
    builder.addCase(registerUser.rejected, (state, { payload }) => {
      state.error = payload;
    });
  },
});

export const { setError } = usersSlice.actions;
