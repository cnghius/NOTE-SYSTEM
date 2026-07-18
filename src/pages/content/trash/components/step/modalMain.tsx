/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, DatePicker, Form, Input, message } from "antd";
import type { TypeAction } from "../../../../../types/typeAction";
// import { useFormModal } from "../../../../../hooks/useFormModal";
import { useEffect } from "react";
import dayjs from "dayjs";
import { useQueryClient } from "@tanstack/react-query";
interface Props {
  close?: () => void;
  typeAction: TypeAction;
  dataModal?: any;
  onCreate?: (resource: string, id: string) => void;
  resource: string;
}

const ModalMain: React.FC<Props> = ({
  close,
  typeAction,
  dataModal,
  onCreate,
  resource,
}) => {
  const isView = typeAction === "view";
  // const isAdd = typeAction === "add";
  const isRestore = typeAction === "edit";
  const [form] = Form.useForm();
  const queryClient = useQueryClient();
  const handleRestore = async () => {
    try {
      if (onCreate) {
        await onCreate?.(resource, dataModal?._id);
        await queryClient.invalidateQueries({ queryKey: [resource] });
        message.success("Khôi phục thành công");
      }
      await close?.();
      form.resetFields();
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (dataModal) {
      form.setFieldsValue({
        ...dataModal,
        createdAt: dayjs(dataModal?.data.createdAt),
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
