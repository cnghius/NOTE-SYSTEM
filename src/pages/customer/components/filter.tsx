import { Button, DatePicker, Select, Row, Col, Form, Input } from "antd";
import { SearchOutlined, ReloadOutlined } from "@ant-design/icons";
// import { InputCustom } from "@/components/input/inputCustom";

const FilterCustomer = () => {
  const [form] = Form.useForm();
  const handleReset = () => {
    form.resetFields();
  };
  return (
    <div>
      <Form form={form}>
        <Row gutter={[8, 8]}>
          {/* Tìm kiếm */}
          <Col xs={24} sm={24} md={12} lg={8}>
            <Input placeholder="Tên khách hàng / SĐT" />
          </Col>

          {/* Loại khách hàng */}
          <Col xs={24} sm={12} md={12} lg={8}>
            <Select
              className="w-full"
              placeholder="Loại khách hàng"
              allowClear
              options={[
                {
                  label: "Khách mới",
                  value: "new",
                },
                {
                  label: "Thân thiết",
                  value: "member",
                },
                {
                  label: "VIP",
                  value: "vip",
                },
              ]}
            />
          </Col>

          {/* Trạng thái */}
          <Col xs={24} sm={12} md={12} lg={8}>
            <Select
              className="w-full"
              placeholder="Trạng thái"
              allowClear
              options={[
                {
                  label: "Đang hoạt động",
                  value: "active",
                },
                {
                  label: "Ngừng chăm sóc",
                  value: "inactive",
                },
              ]}
            />
          </Col>

          {/* Nguồn khách */}
          {/* <Col xs={24} sm={12} md={12} lg={8}>
            <Select
              className="w-full"
              placeholder="Nguồn khách"
              allowClear
              options={[
                {
                  label: "Facebook",
                  value: "facebook",
                },
                {
                  label: "TikTok",
                  value: "tiktok",
                },
                {
                  label: "Website",
                  value: "website",
                },
                {
                  label: "Giới thiệu",
                  value: "referral",
                },
              ]}
            />
          </Col> */}

          {/* Ngày tạo */}
          <Col xs={24} sm={12} md={12} lg={8}>
            <DatePicker placeholder="Ngày tạo" className="w-full" />
          </Col>
        </Row>
      </Form>

      <div className="flex justify-end gap-2 mt-4">
        <Button onClick={handleReset} icon={<ReloadOutlined />}>
          Làm mới
        </Button>

        <Button type="primary" icon={<SearchOutlined />}>
          Tìm kiếm
        </Button>
      </div>
    </div>
  );
};

export default FilterCustomer;
