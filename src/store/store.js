import { usersSlice } from "./users/users.slice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    users: usersSlice.reducer,
  },
});
