/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ReactNode } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
interface ProductPops {
  moduleCode: string;
  children: ReactNode;
}
// export const Protected: React.FC<ProductPops> = ({ moduleCode, children }) => {
//   const user = useSelector((state: any) => state.auth);
//   console.log("productUser", user);

//   const token = user.token;
//   console.log("token", token);

//   if (!user && !token) {
//     return <Navigate to={"/login"} replace />;
//   }
//   if (user.roleSlugId === "admin" && user.role === "admin") {
//     return <>{children}</>;
//   }
//   const permission: string[] = user.roleSlugId?.permisions || [];
//   if (moduleCode) {
//     const hasSucces = permission.some((p) => p.endsWith(`:${moduleCode}`));
//     if (!hasSucces) {
//       return <Navigate to="/403" replace />;
//     }
//     return <>{children}</>;
//   }
// };
export const Protected: React.FC<ProductPops> = ({ children, moduleCode }) => {
  // const userString = localStorage.getItem("user") as string;
  // const { user, token } = useSelector((state: any) => state.auth);
  const authState = useSelector((state: any) => state.auth);

  // 2. GIẢI PHÁP ĐỒNG BỘ: Nếu Redux chưa kịp nạp (null), tự động lấy trực tiếp từ LocalStorage ra thay thế
  const token = authState.token || localStorage.getItem("token");
  const savedUserStr = localStorage.getItem("user");
  const user =
    authState.user || (savedUserStr ? JSON.parse(savedUserStr) : null);

  if (!user || !token) {
    return <Navigate to="/login" replace />;
  }

  const isAdmin =
    user.role === "admin" ||
    user.roleSlugId === "admin" ||
    user.roleSlugId?.roleSlug === "admin" ||
    user.roleSlugId?.roleName === "admin";

  if (isAdmin) {
    return <>{children}</>;
  }

  const permissions: string[] = Array.isArray(user.roleSlugId?.permissions)
    ? user.roleSlugId.permissions
    : [];
  const normalizedModuleCode = String(moduleCode || "").toUpperCase();
  const normalizedPermissions = permissions.map((p) => String(p).toUpperCase());

  if (moduleCode) {
    const hasSucces = normalizedPermissions.some((p) =>
      p.endsWith(`:${normalizedModuleCode}`),
    );
    if (!hasSucces) {
      return <Navigate to="/" replace />;
    }
  }
  return <>{children}</>;
};
