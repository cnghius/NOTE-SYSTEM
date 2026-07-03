import { Button, Space, Badge, Avatar } from "antd";
import { Header } from "antd/es/layout/layout";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  BellOutlined,
} from "@ant-design/icons";

// const { Text } = Typography;
//    const HederCustom: React.CSSProperties = {
//        height: "72px",
//   background: "white",
//   display: "flex",
//   justify-content: "space-between",
//   align-items: "center",
//   padding-inline: "30px",
//   border-bottom: "1px solid #eee",
//   }
interface Pops {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}

const HeaderLayout: React.FC<Pops> = ({ collapsed, setCollapsed }) => {
  const handleCollapsed = () => {
    setCollapsed(!collapsed);
  };

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
          <Badge count={3} className="!mt-6">
            <BellOutlined
              style={{
                fontSize: 22,
              }}
            />
          </Badge>

          <Space className="mb-1">
            <Avatar size={40} />

            {/* <div>
              <Text strong>Admin</Text>

              <br />

              <Text type="secondary">Super Admin</Text>
            </div> */}
          </Space>
        </Space>
      </Header>
    </>
  );
};
export default HeaderLayout;
