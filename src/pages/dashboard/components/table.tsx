import { Col, Row } from "antd";
import {
  FileTextOutlined,
  StarOutlined,
  FolderOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import CardStatistic from "../../../components/card/cardStatistic";

const DashboardTable = () => {
  const dashboard = {
    totalNotes: 125,
    importantNotes: 18,
    totalCategories: 7,
    trash: 5,
  };

  return (
    <Row gutter={[20, 20]}>
      <Col xs={24} md={12} xl={6}>
        <CardStatistic
          title="Tổng ghi chú"
          value={dashboard.totalNotes}
          icon={<FileTextOutlined />}
          color="#1677ff"
        />
      </Col>

      <Col xs={24} md={12} xl={6}>
        <CardStatistic
          title="Ghi chú quan trọng"
          value={dashboard.importantNotes}
          icon={<StarOutlined />}
          color="#faad14"
        />
      </Col>

      <Col xs={24} md={12} xl={6}>
        <CardStatistic
          title="Danh mục"
          value={dashboard.totalCategories}
          icon={<FolderOutlined />}
          color="#52c41a"
        />
      </Col>

      <Col xs={24} md={12} xl={6}>
        <CardStatistic
          title="Thùng rác"
          value={dashboard.trash}
          icon={<DeleteOutlined />}
          color="#ff4d4f"
        />
      </Col>
    </Row>
  );
};

export default DashboardTable;
