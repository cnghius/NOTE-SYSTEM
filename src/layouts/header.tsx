/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Space, Avatar, Dropdown } from "antd";
import { Header } from "antd/es/layout/layout";
import { useSelector } from "react-redux";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { logOut } from "../redux/app/authSilce/authSlicent";
import { persistsStore } from "../redux/store";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
interface Pops {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}
const HeaderLayout: React.FC<Pops> = ({ collapsed, setCollapsed }) => {
  const handleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  const user = useSelector((state: any) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = async () => {
    dispatch(logOut());
    await persistsStore.purge();
    navigate("/login");
  };
  const items: any = [
    {
      key: "name",
      label: <span style={{ fontWeight: 600 }}>{user?.role}</span>,
      disabled: true,
    },
    {
      type: "divider",
    },
    {
      key: "profile",
      label: "Hồ sơ",
      // onClick: () => navigate("/profile"),
    },
    {
      key: "logout",
      danger: true,
      label: "Đăng xuất",
      onClick: handleLogout,
    },
  ];
  return (
    <>
      <Header className="bg-white! border-b border-gray-200 px-2 flex items-center justify-between">
        <Button
          type="text"
          icon={
            collapsed ? (
              <MenuUnfoldOutlined size={20} />
            ) : (
              <MenuFoldOutlined size={20} />
            )
          }
          onClick={handleCollapsed}
        />

        <Space size={25}>
          <Space className="mb-1">
            <Dropdown
              menu={{ items }}
              trigger={["click"]}
              placement="bottomRight"
            >
              <Avatar
                size={40}
                className="bg-blue-500 uppercase cursor-pointer shrink-0"
              >
                {user.username?.charAt(0)}
              </Avatar>
            </Dropdown>
          </Space>
        </Space>
      </Header>
    </>
  );
};
export default HeaderLayout;
