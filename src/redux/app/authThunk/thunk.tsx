import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const LoginThunk = createAsyncThunk(
  "auth/login",
  async (data: { email: string; password: string }) => {
    const response = await axios.post(
      "http://localhost:3000/api/auth/login",
      data,
    );
    return response;
  },
);
