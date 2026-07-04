/* eslint-disable react-refresh/only-export-components */
import { lazy } from "react";
import { PATH } from "../path";
import { Protected } from "../protected/protect";
import { System } from "../pages/system";
import { Content } from "../pages/content";
const Dashboard = lazy(() => import("../pages/dashboard"));
const Category = lazy(() => import("../pages/content/category"));
const Note = lazy(() => import("../pages/content/note"));
const Trash = lazy(() => import("../pages/content/trash"));
const Customer = lazy(() => import("../pages/customer"));
const Permission = lazy(() => import("../pages/system/permission"));
const Account = lazy(() => import("../pages/system/account"));

export const ROUTE_CONFIG = [
  {
    path: PATH.DASHBOARD,
    element: <Dashboard />,
    role: PATH.DASHBOARD,
  },
  {
    path: PATH.CATEGORY,
    element: <Category />,
    role: PATH.CATEGORY,
  },
  {
    path: PATH.NOTE,
    element: <Note />,
    role: PATH.NOTE,
  },
  {
    path: PATH.TRASH,
    element: <Trash />,
    role: PATH.TRASH,
  },
  {
    path: PATH.CUSTOMER,
    element: <Customer />,
    role: PATH.CUSTOMER,
  },
  {
    path: PATH.PERMISSION,
    element: <Permission />,
    role: PATH.PERMISSION,
  },
  {
    path: PATH.ACCOUT,
    element: <Account />,
    role: PATH.ACCOUT,
  },
  {
    path: PATH.SYSTEM,
    element: <System />,
    role: PATH.SYSTEM,
  },
  {
    path: PATH.CONTENT,
    element: <Content />,
    role: PATH.CONTENT,
  },
];
export const routeRender = ROUTE_CONFIG.map((i) => {
  return {
    path: i.path,
    element: <Protected moduleCode={i.role}>{i.element}</Protected>,
  };
});
