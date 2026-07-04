import { Layout } from "antd";
// import { Content } from "antd/es/layout/layout";
import SiderLayout from "./sider";
import HeaderLayout from "./header";
import { useState } from "react";
import { Content } from "antd/es/layout/layout";
import { Outlet } from "react-router-dom";
// const { Title, Text } = Typography;

export const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <SiderLayout collapsed={collapsed} />
      <Layout>
        <HeaderLayout collapsed={collapsed} setCollapsed={setCollapsed} />
        <Content
          style={{
            marginLeft: "10px",
            marginTop: "4px",
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
