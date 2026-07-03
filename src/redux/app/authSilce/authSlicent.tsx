import { createSlice } from "@reduxjs/toolkit";
// import type { Auth } from "@/types/type";
import { LoginThunk } from "../authThunk/thunk";
const saveUser = localStorage.getItem("user");
const initialState = {
  user: saveUser ? JSON.parse(saveUser) : null,
  token: localStorage.getItem("token"),
  loading: false,
  error: null,
};

const AuthSlient = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(LoginThunk.pending, (state) => {
        state.loading = true as boolean;
      })
      .addCase(LoginThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        localStorage.setItem("user", JSON.stringify(action.payload.user));
        localStorage.setItem("token", action.payload.token);
      })
      .addCase(LoginThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as null;
      });
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
    },

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    logOut(state: any) {
      state.user = null;
      state.token = null;
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    },
  },
});
// const user = useSelector((state: any) => state.auth.user);

// console.log("USER", user);
export const { logOut, setToken } = AuthSlient.actions;
export default AuthSlient.reducer;
