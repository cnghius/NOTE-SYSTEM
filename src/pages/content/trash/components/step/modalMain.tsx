/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, DatePicker, Form, Input } from "antd";
import type { TypeAction } from "../../../../../types/typeAction";
// import { useFormModal } from "../../../../../hooks/useFormModal";
import { useEffect } from "react";
import dayjs from "dayjs";
interface Props {
  close?: () => void;
  typeAction: TypeAction;
  dataModal: any;
}

const ModalMain: React.FC<Props> = ({ close, typeAction, dataModal }) => {
  const isView = typeAction === "view";
  // const isAdd = typeAction === "add";
  const isRestore = typeAction === "restore";
  const [form] = Form.useForm();

  const handleRestore = () => {
    const values = form.getFieldsValue();
    console.log("Khôi phục", values);
  };
  useEffect(() => {
    if (dataModal) {
      form.setFieldsValue({
        ...dataModal,
        createdAt: dayjs(dataModal?.data.createdAt).toISOString(),
        name: dataModal?.data.name,
      });
    }
  }, [dataModal]);
  return (
    <Form layout="vertical" form={form}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Tiêu đề */}
        <Form.Item label="Tiêu đề" name="name">
          <Input disabled />
        </Form.Item>

        {/* Danh mục */}
        <Form.Item label="Danh mục" name="itemType">
          <Input disabled />
        </Form.Item>

        {/* Trạng thái
        <Form.Item label="Trạng thái">
          <Tag color="red">Trong thùng rác</Tag>
        </Form.Item> */}

        {/* Ngày tạo */}
        <Form.Item label="Ngày tạo" name="createdAt">
          <DatePicker disabled className="w-full" />
        </Form.Item>
      </div>
      {/* Footer */}
      {!isView && (
        <div className="flex justify-end gap-2">
          <Button onClick={close}>Đóng</Button>
          <Button type="primary" onClick={handleRestore}>
            {isRestore ? "Khôi Phục" : "Không khôi phục "}
          </Button>
        </div>
      )}
    </Form>
  );
};

export default ModalMain;
