/* eslint-disable @typescript-eslint/no-explicit-any */
import { ROUTE_CONFIG } from "../routes/routeConfig";
import { items } from "../utils/menuItem";
import { Menu } from "antd";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const MenuLayout = () => {
  const navigate = useNavigate();
  const user = useSelector((state: any) => state.auth.user);
  const permision: string[] = user?.roleSlugId?.permissions;
  const pathKey = ROUTE_CONFIG.filter((r: any) => {
    if (user?.role === "admin" && user?.roleSlugId) {
      return true;
    }
    if (!r.role) {
      return false;
    }
    const currentRole = Array.isArray(r.role) ? r.role : [r.role];
    return permision?.some((p) =>
      currentRole?.some((c: any) => p.endsWith(`:${c}`)),
    );
  }).map((i) => i.path);
  const menuItem = useMemo(() => {
    console.log(
      "items",
      items.map((i) => i?.key),
    );
    return items.filter((i) => pathKey.includes(i?.key as string));
    // return items.map((i) => {
    //   if(i?.chil)
    // } )
  }, [pathKey]);
  console.log("menuItem", menuItem);
  console.log("pathKey", pathKey);

  return (
    <>
      <div>
        <Menu
          theme="dark"
          mode="inline"
          className="menu"
          items={menuItem}
          onClick={({ key }) => navigate(key)}
        />
      </div>
    </>
  );
};
export default MenuLayout;
