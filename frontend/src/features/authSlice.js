import { createSlice } from "@reduxjs/toolkit";
import jwtDecode from "jwt-decode";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: localStorage.getItem("authToken") || null,
  },
  reducers: {
    loginSuccess(state, action) {
      const token = action.payload;
      localStorage.setItem("authToken", token);
      state.token = token;
      state.user = jwtDecode(token);
    },
    logout(state) {
      localStorage.removeItem("authToken");
      state.token = null;
      state.user = null;
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
