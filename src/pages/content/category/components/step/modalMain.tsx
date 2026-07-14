/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Form, Input, message, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import type { TypeAction } from "../../../../../types/typeAction";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getParentCate } from "../../../../../apis/parentCate.api";
import { useEffect } from "react";

interface ModalProps {
  typeAction: TypeAction;
  close?: () => void;
  dataModal?: any;
  onCreate?: (resource: string, data: string) => void;
  onUpdate?: (resource: string, data: string, id: string) => void;
  resource: string;
}
const ModalMain: React.FC<ModalProps> = ({
  typeAction,
  onCreate,
  onUpdate,
  close,
  resource,
  dataModal,
}) => {
  const [form] = Form.useForm();
  const isView = typeAction === "view";
  const isAdd = typeAction === "add";
  const isEdit = typeAction === "edit";
  const queryClient = useQueryClient();
  const handleSubmit = async (value: any) => {
    const valueClean = {
      ...value,
      parentId: value.parentId,
    };

    try {
      if (onCreate && typeAction === "add") {
        await onCreate?.(resource, valueClean);
        message.success("thêm mới thành công ");
        await queryClient.invalidateQueries({ queryKey: [resource] });
      }

      if (onUpdate && typeAction === "edit") {
        await onUpdate?.(resource, valueClean, dataModal._id);
        message.success("Chỉnh sửa thành công ");
        await queryClient.invalidateQueries({ queryKey: [resource] });
      }
      form.resetFields();
      await close?.();
    } catch (error) {
      console.log(error);
      message.error("Không thể post lên được");
    }
  };

  useEffect(() => {
    if (dataModal && !isAdd) {
      form.setFieldsValue({
        ...dataModal,
        parentId: dataModal.parentId?._id || dataModal.parentId || "",
      });
    }
  }, [dataModal, isView, isEdit]);
  const { data: parentCate } = useQuery({
    queryKey: ["parent-categories"],
    queryFn: () => getParentCate("parent-categories"),
  });
  const ParentCateList = parentCate?.data;
  console.log("ParentCateList", ParentCateList);

  const handleListParentCate = (parentId: string) => {
    return ParentCateList?.find((p: any) => p._id == parentId || null);
  };
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
              onChange={handleListParentCate}
              options={ParentCateList?.map((p: any) => {
                return {
                  label: p.nameParent,
                  value: p._id,
                };
              })}
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
