import { Avatar } from "antd";
import Sider from "antd/es/layout/Sider";
import MenuLayout from "./menu";
interface Pops {
  collapsed: boolean;
}
const SiderLayout = ({ collapsed }: Pops) => {
  const siderStyle: React.CSSProperties = {
    overflow: "auto",
    height: "100vh",
    position: "sticky",
    insetInlineStart: 0,
    top: 0,
  };
  return (
    <>
      <div>
        <Sider
          width={260}
          collapsedWidth={80}
          collapsible
          collapsed={collapsed}
          trigger={null}
          //   className="sidebar"
          style={siderStyle}
        >
          <div className="logo">
            <Avatar
              style={{
                background: "#6366f1",
              }}
            >
              N
            </Avatar>

            {!collapsed && <span>NoteSystem</span>}
          </div>

          <MenuLayout />
        </Sider>
      </div>
    </>
  );
};
export default SiderLayout;
