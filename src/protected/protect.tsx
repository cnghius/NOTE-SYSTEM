/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ReactNode } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
interface ProductPops {
  moduleCode: string;
  children: ReactNode;
}
export const Protected: React.FC<ProductPops> = ({ moduleCode, children }) => {
  const user = useSelector((state: any) => state.auth);
  console.log("productUser", user);

  const token = user.token;
  console.log("token", token);

  if (!user && !token) {
    return <Navigate to={"/login"} replace />;
  }
  if (user.role === "admin") {
    return <>{children}</>;
  }
  // const permission: string[] = user.role.permision || [];
  if (moduleCode) {
    // const hasSucces = permission.some((p) => p.endsWith(`:${moduleCode}`));
    // if (!hasSucces) {
    //   return <Navigate to="/" replace />;
    // }
    return <>{children}</>;
  }
};
