/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Form, Input, message, Tabs } from "antd";
import PermissionMatrix from "../../util/createPer";
import { TeamOutlined, UserOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import type { TypeAction } from "../../../../../types/typeAction";
interface ModalMainProps {
  typeAction: TypeAction;
  close?: () => void;
  dataModal?: any;
  onCreate?: (resource: string, data: string) => void;
  onUpdate?: (resource: string, data: string, id: string) => void;
  resource: string;
}
const ModalMain: React.FC<ModalMainProps> = ({
  typeAction,
  close,
  dataModal,
  onCreate,
  onUpdate,
  resource,
}) => {
  const [form] = Form.useForm();
  const [selectedPermissions, setSelectedPermissions] = useState<string[]>([]);
  const isView = typeAction === "view";
  const isAdd = typeAction === "add";
  const isEdit = typeAction === "edit";
  const queryClient = useQueryClient();
  const handleSubmit = async (values: any) => {
    const valueClean = {
      ...values,
      permissions: selectedPermissions,
    };
    try {
      if (typeAction === "add") {
        await onCreate?.(resource, valueClean);
        await queryClient.invalidateQueries({ queryKey: [resource] });
        message.success("thêm mới thành công");
      }
      if (typeAction === "edit" && onUpdate) {
        await onUpdate?.(resource, valueClean, dataModal._id);
        await queryClient.invalidateQueries({
          queryKey: [resource],
          refetchType: "active",
        });
        message.success("Chỉnh sửa thành công ");
      }
      form.resetFields();
      await close?.();
    } catch (error) {
      console.log(error);
    }
  };
  const handlePermissionChange = (checkedValues: string[]) => {
    setSelectedPermissions(checkedValues);
  };
  useEffect(() => {
    if ((dataModal && isEdit) || isView) {
      form.setFieldsValue({
        roleSlug: dataModal.roleSlug || dataModal.roleSlugId?.roleSlug || "",
        roleName: dataModal.roleName || dataModal.roleSlugId?.roleName || "",
      });
      if (Array.isArray(dataModal.permissions))
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setSelectedPermissions(dataModal.permissions);
    } else {
      setSelectedPermissions([]);
    }
    if (isAdd) {
      form.resetFields();
      setSelectedPermissions([]);
    }
  }, [form, dataModal, isAdd, isEdit, isView]);
  return (
    <>
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-slate-800">
          {isAdd && "Thêm mới"}
          {isEdit && "Chỉnh sửa "}
          {isView && "Chi tiết "}
        </h2>
      </div>

      <div>
        <Tabs type="card" defaultActiveKey="1">
          <Tabs.TabPane
            tab={
              <span>
                <UserOutlined /> 1. Thông tin cá nhân
              </span>
            }
            key={1}
          >
            {" "}
            <Form layout="vertical" form={form} onFinish={handleSubmit}>
              <div className="grid grid-cols-3 md:grid-cols-2 gap-4">
                <Form.Item
                  name="roleSlug"
                  label="Mã vai trò"
                  rules={[{ required: true, message: "Vui lòng nhập tên" }]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name="roleName"
                  label="Vai trò"
                  rules={[
                    { required: true, message: "Vui lòng nhập mã đăng nhập" },
                  ]}
                >
                  <Input placeholder="nv_nguyenvana" />
                </Form.Item>
              </div>
              {!isView && (
                <div>
                  <Button onClick={close}>Huỷ</Button>
                  <Button type="primary" htmlType="submit">
                    {isAdd ? "Thêm mới" : "Huỷ"}
                  </Button>
                </div>
              )}
            </Form>
          </Tabs.TabPane>

          <Tabs.TabPane
            tab={
              <span>
                {" "}
                <TeamOutlined /> 1. Quản lý phân quyền
              </span>
            }
            key={2}
          >
            <Form.Item name="permissions">
              <PermissionMatrix
                selectedPermissions={selectedPermissions}
                onChangePermissions={handlePermissionChange}
              />
            </Form.Item>
          </Tabs.TabPane>
        </Tabs>
      </div>
    </>
  );
};
export default ModalMain;
