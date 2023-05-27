import { createSlice } from "@reduxjs/toolkit";
const initialState = { authenticated: false };

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {
      state.authenticated = true;
    },
    logout: (state) => {
      state.authenticated = false;
    },
  },
});

export const authActions = authSlice.actions