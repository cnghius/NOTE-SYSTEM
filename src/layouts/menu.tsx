import { Menu } from "antd";
import { items } from "../instant/menuItem";

const MenuLayout = () => {
  return (
    <>
      <div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["user"]}
          className="menu"
          items={items}
        />
      </div>
    </>
  );
};
export default MenuLayout;
