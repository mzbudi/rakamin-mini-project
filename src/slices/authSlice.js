import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginUser } from "./authApi";

const initialState = {
  value: { auth_token: "" },
  status: "idle",
};

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }) => {
    const response = await loginUser({ email, password });
    return response.data;
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = "loading";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = "idle";
        state.value = { ...action.payload };
      })
      .addCase(login.rejected, (state) => {
        state.status = "idle";
        state.value = { auth_token: "error" };
      });
  },
});

export const selectAuth = (state) => state.auth.value;

export default authSlice.reducer;
