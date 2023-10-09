import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "../actions/counterSlice";
import { authSlice } from "../actions/authSlice";

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

export default store;
