/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Checkbox, DatePicker, Form, Input, Select, Tag } from "antd";
import TextArea from "antd/es/input/TextArea";

interface Props {
  close?: () => void;
}

const ModalMain: React.FC<Props> = ({ close }) => {
  const [form] = Form.useForm();

  const handleRestore = () => {
    const values = form.getFieldsValue();
    console.log("Khôi phục", values);
  };

  const handleDeleteForever = () => {
    const values = form.getFieldsValue();
    console.log("Xóa vĩnh viễn", values);
  };

  return (
    <Form layout="vertical" form={form}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Tiêu đề */}
        <Form.Item label="Tiêu đề" name="title">
          <Input disabled />
        </Form.Item>

        {/* Danh mục */}
        <Form.Item label="Danh mục" name="categoryName">
          <Input disabled />
        </Form.Item>

        {/* Độ ưu tiên */}
        <Form.Item label="Độ ưu tiên" name="priority">
          <Select
            disabled
            options={[
              {
                label: "Thấp",
                value: "low",
              },
              {
                label: "Trung bình",
                value: "medium",
              },
              {
                label: "Cao",
                value: "high",
              },
            ]}
          />
        </Form.Item>

        {/* Trạng thái */}
        <Form.Item label="Trạng thái">
          <Tag color="red">Trong thùng rác</Tag>
        </Form.Item>

        {/* Tags */}
        <Form.Item label="Tags" name="tags">
          <Select mode="tags" disabled />
        </Form.Item>

        {/* Nhắc nhở */}
        <Form.Item label="Nhắc nhở" name="reminder">
          <DatePicker disabled showTime className="w-full" />
        </Form.Item>

        {/* Ngày tạo */}
        <Form.Item label="Ngày tạo" name="createdAt">
          <DatePicker disabled className="w-full" />
        </Form.Item>

        {/* Ngày xóa */}
        <Form.Item label="Ngày xóa" name="deletedAt">
          <DatePicker disabled className="w-full" />
        </Form.Item>
      </div>

      {/* Nội dung */}
      <Form.Item label="Nội dung" name="content">
        <TextArea rows={8} disabled />
      </Form.Item>

      {/* Ghim */}
      <Form.Item name="pinned" valuePropName="checked">
        <Checkbox disabled>Ghim ghi chú</Checkbox>
      </Form.Item>

      {/* Footer */}
      <div className="flex justify-end gap-2">
        <Button onClick={close}>Đóng</Button>

        <Button type="primary" onClick={handleRestore}>
          Khôi phục
        </Button>

        <Button danger onClick={handleDeleteForever}>
          Xóa vĩnh viễn
        </Button>
      </div>
    </Form>
  );
};

export default ModalMain;
