import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./antd.scss";
// import Login from "./layouts/loginForm/login.tsx";
import AppProvider from "./redux/app/provider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppProvider />
  </StrictMode>,
);
