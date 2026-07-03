import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const RegisterThunk = createAsyncThunk(
  "auth/register",
  async (data: { email: string; password: string }) => {
    const response = await axios.post(
      "http://localhost:3000/api/auth/register",
      data,
    );
    console.log("response", response);

    // if (!user) {
    //   return thunkApi.rejectWithValue("không có tài khoản");
    // }
    // return {
    //   response,
    // };
    return response;
  },
);
