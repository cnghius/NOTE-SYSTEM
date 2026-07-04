import { MainLayout } from "../layouts/mainLayout";
import { createBrowserRouter } from "react-router-dom";
import { routeRender } from "./routeConfig";
// import Login from "../layouts/loginForm/login";

export const route = createBrowserRouter([
  // {
  //   path: "/login",
  //   element: <Login />,
  // },
  // {
  //   path: "/",
  //   element: <Navigate to="/login" replace />,
  // },
  {
    path: "/",
    element: <MainLayout />,
    children: routeRender,
  },
]);
