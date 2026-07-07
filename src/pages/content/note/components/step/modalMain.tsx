/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Checkbox, DatePicker, Form, Input, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import type { TypeAction } from "../../../../../types/typeAction";

interface Props {
  typeAction: TypeAction;
  close?: () => void;
}

const ModalMain: React.FC<Props> = ({ typeAction, close }) => {
  const [form] = Form.useForm();

  const isView = typeAction === "view";
  const isAdd = typeAction === "add";

  const handleSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <>
      <Form layout="vertical" form={form} onFinish={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Tiêu đề */}
          <Form.Item
            label="Tiêu đề"
            name="title"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập tiêu đề",
              },
            ]}
          >
            <Input disabled={isView} placeholder="Ví dụ: Học React Query" />
          </Form.Item>

          {/* Danh mục */}
          <Form.Item
            label="Danh mục"
            name="categoryId"
            rules={[
              {
                required: true,
                message: "Vui lòng chọn danh mục",
              },
            ]}
          >
            <Select
              disabled={isView}
              placeholder="Chọn danh mục"
              options={[
                {
                  label: "Công việc",
                  value: "1",
                },
                {
                  label: "Học tập",
                  value: "2",
                },
                {
                  label: "Cá nhân",
                  value: "3",
                },
              ]}
            />
          </Form.Item>

          {/* Độ ưu tiên */}
          <Form.Item label="Độ ưu tiên" name="priority">
            <Select
              disabled={isView}
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
          <Form.Item label="Trạng thái" name="status" initialValue="active">
            <Select
              disabled={isView}
              options={[
                {
                  label: "Đang hoạt động",
                  value: "active",
                },
                {
                  label: "Đã lưu trữ",
                  value: "archived",
                },
              ]}
            />
          </Form.Item>

          {/* Tags */}
          <Form.Item label="Tags" name="tags">
            <Select mode="tags" disabled={isView} placeholder="Nhập tag" />
          </Form.Item>

          {/* Nhắc nhở */}
          <Form.Item label="Nhắc nhở" name="reminder">
            <DatePicker showTime className="w-full" disabled={isView} />
          </Form.Item>
        </div>

        <Form.Item
          label="Nội dung"
          name="content"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập nội dung",
            },
          ]}
        >
          <TextArea disabled={isView} placeholder="Nhập nội dung ghi chú..." />
        </Form.Item>

        {/* Ghim */}
        <Form.Item name="pinned" valuePropName="checked">
          <Checkbox disabled={isView}>Ghim ghi chú</Checkbox>
        </Form.Item>

        {!isView && (
          <div className="flex justify-end gap-2">
            <Button onClick={close}>Huỷ</Button>

            <Button type="primary" htmlType="submit">
              {isAdd ? "Thêm ghi chú" : "Cập nhật ghi chú"}
            </Button>
          </div>
        )}
      </Form>
    </>
  );
};

export default ModalMain;
