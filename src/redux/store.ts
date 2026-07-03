/* eslint-disable @typescript-eslint/no-require-imports */
import { configureStore } from "@reduxjs/toolkit";
import AuthSlient from "./app/authSilce/authSlicent";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
//Bọc lại <an toàn> cho storage
const webStorage =
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  storage && (storage as any).default ? (storage as any).default : storage;

const AuthPresistsConfig = {
  key: "auth",
  storage: webStorage,
  whitelist: ["user", "token"],
};
const AuthPresistsReduce = persistReducer(AuthPresistsConfig, AuthSlient);
export const store = configureStore({
  reducer: {
    auth: AuthPresistsReduce, // quan ly dang nhap dang xuat
  },
});
export const persistsStore = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
