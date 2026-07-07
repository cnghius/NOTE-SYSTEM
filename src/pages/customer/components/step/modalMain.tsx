/* eslint-disable @typescript-eslint/no-explicit-any */
// import { InputCustom } from "@/components/input/inputCustom";
import { useQueryClient } from "@tanstack/react-query";
import { Button, DatePicker, Form, Input, message, Select } from "antd";
import type React from "react";
import type { TypeAction } from "../../../../types/typeAction";
import { useFormModal } from "../../../../hooks/useFormModal";
// import { useEffect } from "react";
// import dayjs from "dayjs";

const { TextArea } = Input;

interface ModalProps {
  typeAction: TypeAction;
  close?: () => void;
  dataModal?: any;
  onCreate: (resource: string, data: string) => void;
  onUpdate: (resource: string, data: string, id: string) => void;
  resource: string;
}

const ModalMain: React.FC<ModalProps> = ({
  typeAction,
  onCreate,
  resource,
  onUpdate,
  dataModal,
  close,
}) => {
  const [form] = Form.useForm();
  const queryClient = useQueryClient();
  const isView = typeAction === "view";
  const isAdd = typeAction === "add";
  const isEdit = typeAction === "edit";
  const handleSubmit = async (values: any) => {
    console.log(" queryKey: [resource]", resource);

    const cleanValue = {
      ...values,
      birthday: values.birthday ? values.birthday?.format("YYYY-MM-DD") : null,
    };
    try {
      if (typeAction === "add") {
        await onCreate?.(resource, cleanValue);
        queryClient.invalidateQueries({ queryKey: [resource] });
        message.success("Thêm mới khách hàng thành công");
      }
      if (typeAction === "edit") {
        await onUpdate?.(resource, cleanValue, dataModal._id);
        queryClient.invalidateQueries({ queryKey: [resource] });
        message.success("Chỉnh sửa khách hàng thành công");
      }
      form.resetFields();
      await close?.();
    } catch (error) {
      console.log("kiểm tra lỗi ", error);
      message.error("kiểm tra lại vì lỗi");
    }
  };
  useFormModal({
    form,
    typeAction,
    dataModal,
    dataField: ["birthday"],
  });
  // useEffect(() => {
  //   if (dataModal && (typeAction === "edit" || typeAction === "view")) {
  //     form.setFieldsValue({
  //       username: dataModal.username || "",
  //       phone: dataModal.phone || "",
  //       email: dataModal.email || "",
  //       gender: dataModal.gender || undefined,
  //       birthday: dataModal.birthday ? dayjs(dataModal.birthday) : null,
  //       customerType: dataModal.customerType || undefined,
  //       point: dataModal.point || 0,
  //       status: dataModal.status || "",
  //       address: dataModal.address || "",
  //       note: dataModal.note || "",
  //     });
  //   } else {
  //     form.resetFields();
  //   }
  // }, [typeAction, dataModal, form]);

  return (
    <>
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-slate-800">
          {isAdd && "Thêm Khách hàng "}
          {isEdit && "Chỉnh sửa Khách hàng"}
          {isView && "Chi tiết Khách hàng"}
        </h2>

        <p className="text-gray-500 text-sm mt-1">
          Quản lý thông tin lịch hẹn khách hàng
        </p>
      </div>

      <Form layout="vertical" form={form} onFinish={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {/* Họ tên */}
          <Form.Item
            label="Họ và tên"
            name="username"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập họ tên",
              },
            ]}
          >
            <Input placeholder="Nhập họ tên khách hàng" disabled={isView} />
          </Form.Item>

          {/* SĐT */}
          <Form.Item
            label="Số điện thoại"
            name="phone"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập số điện thoại",
              },
            ]}
          >
            <Input placeholder="Nhập số điện thoại" disabled={isView} />
          </Form.Item>

          {/* Email */}
          <Form.Item label="Email" name="email">
            <Input placeholder="Nhập email" disabled={isView} />
          </Form.Item>

          {/* Giới tính */}
          <Form.Item label="Giới tính" name="gender">
            <Select
              disabled={isView}
              options={[
                { label: "Nam", value: "male" },
                { label: "Nữ", value: "female" },
                { label: "Khác", value: "other" },
              ]}
            />
          </Form.Item>

          {/* Ngày sinh */}
          <Form.Item label="Ngày sinh" name="birthday">
            <DatePicker
              disabled={isView}
              className="w-full"
              format={"YYYY-MM-DD"}
            />
          </Form.Item>

          {/* Loại khách hàng */}
          <Form.Item label="Loại khách hàng" name="customerType">
            <Select
              disabled={isView}
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
          </Form.Item>

          {/* Điểm tích lũy */}
          <Form.Item label="Điểm tích lũy" name="point">
            <Input disabled={isView} placeholder="0" />
          </Form.Item>

          {/* Nguồn khách */}
          {/* <Form.Item label="Nguồn khách hàng" name="source">
            <Select
              disabled={isView}
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
          </Form.Item> */}

          {/* Trạng thái */}
          <Form.Item label="Trạng thái" name="status">
            <Select
              disabled={isView}
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
          </Form.Item>
        </div>

        {/* Địa chỉ */}
        <Form.Item label="Địa chỉ" name="address">
          <Input placeholder="Nhập địa chỉ" disabled={isView} />
        </Form.Item>

        {/* Ghi chú */}
        <Form.Item label="Ghi chú" name="note">
          <TextArea rows={4} disabled={isView} placeholder="Nhập ghi chú..." />
        </Form.Item>
        {!isView && (
          <div className="flex justify-end gap-2">
            {" "}
            <Button onClick={close}>Huỷ</Button>
            <Button type="primary" htmlType="submit">
              {isAdd ? "Thêm KH" : "Cập nhập KH"}
            </Button>
          </div>
        )}
      </Form>
    </>
  );
};

export default ModalMain;
