import { createAsyncThunk } from "@reduxjs/toolkit";
import { LoginApi } from "../../../login.api";
export const LoginThunk = createAsyncThunk(
  "auth/login",
  async (data: { email: string; password: string }) => {
    const response = LoginApi(data);
    return response;
  },
);
