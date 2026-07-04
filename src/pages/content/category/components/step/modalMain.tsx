import { Button, Form, Input, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import type { TypeAction } from "../../../../../types/typeAction";
interface Pops {
  typeAction: TypeAction;
}
const ModalMain: React.FC<Pops> = ({ typeAction }) => {
  const [form] = Form.useForm();
  const isView = typeAction === "view";
  const isAdd = typeAction === "add";
  const handleSubmit = () => {};
  return (
    <>
      <Form layout="vertical" form={form} onFinish={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Tên danh mục */}
          <Form.Item
            label="Tên danh mục"
            name="name"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập tên danh mục",
              },
            ]}
          >
            <Input placeholder="Ví dụ: Công việc" disabled={isView} />
          </Form.Item>

          {/* Slug */}
          <Form.Item label="Slug" name="slug">
            <Input placeholder="cong-viec" disabled={isView} />
          </Form.Item>

          {/* Màu */}
          <Form.Item label="Màu sắc" name="color">
            <Select
              disabled={isView}
              options={[
                { label: "🔵 Xanh dương", value: "#1677ff" },
                { label: "🟢 Xanh lá", value: "#52c41a" },
                { label: "🟣 Tím", value: "#722ed1" },
                { label: "🟠 Cam", value: "#fa8c16" },
                { label: "🔴 Đỏ", value: "#f5222d" },
              ]}
            />
          </Form.Item>

          {/* Icon */}
          <Form.Item label="Biểu tượng" name="icon">
            <Select
              disabled={isView}
              options={[
                { label: "📁 Folder", value: "folder" },
                { label: "💼 Work", value: "work" },
                { label: "🏠 Home", value: "home" },
                { label: "📚 Study", value: "study" },
                { label: "⭐ Favorite", value: "star" },
              ]}
            />
          </Form.Item>

          {/* Danh mục cha */}
          <Form.Item label="Danh mục cha" name="parentId">
            <Select
              disabled={isView}
              allowClear
              placeholder="Không có"
              options={[
                {
                  label: "Công việc",
                  value: "1",
                },
                {
                  label: "Học tập",
                  value: "2",
                },
              ]}
            />
          </Form.Item>

          {/* Trạng thái */}
          <Form.Item label="Trạng thái" name="status" initialValue="active">
            <Select
              disabled={isView}
              options={[
                {
                  label: "Hiển thị",
                  value: "active",
                },
                {
                  label: "Ẩn",
                  value: "inactive",
                },
              ]}
            />
          </Form.Item>
        </div>

        {/* Mô tả */}
        <Form.Item label="Mô tả" name="description">
          <TextArea rows={4} placeholder="Nhập mô tả..." disabled={isView} />
        </Form.Item>

        {!isView && (
          <div className="flex justify-end gap-2">
            <Button onClick={close}>Huỷ</Button>

            <Button type="primary" htmlType="submit">
              {isAdd ? "Thêm danh mục" : "Cập nhật danh mục"}
            </Button>
          </div>
        )}
      </Form>
    </>
  );
};
export default ModalMain;
