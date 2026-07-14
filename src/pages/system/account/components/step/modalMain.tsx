/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Button, Form, Input, message, Select } from "antd";
import { useEffect } from "react";
import type { TypeAction } from "../../../../../types/typeAction";
import { getPermission } from "../../../../../apis/permission.api";
// import TabSystem from "../util/tab";

interface ModalMainProps {
  typeAction: TypeAction;
  close?: () => void;
  dataModal?: any;
  onCreate?: (resource: string, data: any) => void;
  onUpdate?: (resource: string, data: any, id: string) => void;
  resource: string;
}
const ModalMain: React.FC<ModalMainProps> = ({
  typeAction,
  close,
  onCreate,
  onUpdate,
  resource,
  dataModal,
}) => {
  const [form] = Form.useForm();
  const isView = typeAction === "view";
  const isAdd = typeAction === "add";
  const isEdit = typeAction === "edit";
  const queryClient = useQueryClient();
  // const [search, setSearch] = useState("");
  // const onChangSearch = UseDeboune(search, 500);
  const handleSubmit = async (values: any) => {
    const valueClean = {
      ...values,
      // roleSlugId: values.roleSlugId ?? "",
    };
    const tagetKey = "account";
    try {
      if (typeAction === "add" && onCreate) {
        await onCreate?.(resource, valueClean);
        message.success("thêm mới thành công ");
        await queryClient.invalidateQueries({
          queryKey: [tagetKey],
          refetchType: "active",
        });
      }
      if (typeAction === "edit" && onUpdate) {
        await onUpdate?.(resource, valueClean, dataModal._id);
        await queryClient.invalidateQueries({
          queryKey: [tagetKey],
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
  // API trả về roleSlugId dưới dạng object.
  // Chuyển roleSlugId thành roleSlugId.roleName để Select hiển thị đúng tên chức vụ
  // và payload gửi lên backend đúng định dạng tên chức vụ.
  useEffect(() => {
    if (dataModal && (isEdit || isView)) {
      form.setFieldsValue({
        fullName: dataModal.fullName ?? "",
        username: dataModal.username ?? "",
        email: dataModal.email ?? "",
        password: dataModal.password ?? "",
        roleSlugId:
          dataModal.roleSlugId?.roleName ?? dataModal.roleSlugId ?? "",
      });
    } else {
      form.resetFields();
    }
  }, [dataModal, form, isEdit, isView]);
  const { data: permissionData } = useQuery({
    queryKey: ["roles"],
    queryFn: () => getPermission("roles"),
  });
  const permissionList = permissionData?.data;

  const handleChangeRoleSlug = (roleSlugId: string) => {
    const roles = permissionList.find((p: any) => p._id === roleSlugId || null);
    console.log("roles", roles);
  };

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
        <Form layout="vertical" form={form} onFinish={handleSubmit}>
          <div className="grid grid-cols-3 md:grid-cols-2 gap-4">
            <Form.Item
              name="fullName"
              label="Họ và tên nhân viên"
              rules={[{ required: true, message: "Vui lòng nhập tên" }]}
            >
              <Input placeholder="Nguyễn Văn A" />
            </Form.Item>
            <Form.Item
              name="username"
              label="Tên đăng nhập (Mã NV)"
              rules={[
                { required: true, message: "Vui lòng nhập mã đăng nhập" },
              ]}
            >
              <Input placeholder="nv_nguyenvana" />
            </Form.Item>
            <Form.Item
              name="email"
              label="email"
              rules={[{ required: true, message: "Vui lòng nhập email" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="password"
              label="Mật khẩu ban đầu"
              rules={[{ required: true, message: "Nhập mật khẩu" }]}
            >
              <Input.Password placeholder="******" />
            </Form.Item>
            <Form.Item
              name="roleSlugId"
              label="Gán vai trò chức vụ"
              rules={[{ required: true, message: "Hãy chọn 1 nhóm chức vụ" }]}
            >
              <Select
                showSearch
                // onSearch={(value) => {
                //   setSearch(value);
                // }}
                filterOption={(input, option) =>
                  String(option?.label ?? "")
                    .toLowerCase()
                    .includes(String(input).toLowerCase())
                }
                allowClear
                optionLabelProp="label"
                placeholder="Chọn chức vụ"
                onChange={handleChangeRoleSlug}
                disabled={isView}
                options={permissionList?.map((p: any) => {
                  return {
                    label: p.roleName,
                    value: p.roleName,
                  };
                })}
              />
            </Form.Item>
          </div>
          {!isView && (
            <div>
              <Button onClick={close}>Huỷ</Button>
              <Button type="primary" htmlType="submit">
                {isAdd ? "Thêm mới" : "Cập nhập"}
              </Button>
            </div>
          )}
        </Form>
      </div>
    </>
  );
};
export default ModalMain;
