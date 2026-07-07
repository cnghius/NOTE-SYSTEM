import { PATH } from "../../../../path";

export const SYSTEM_PERMISSIONS = {
  // 1. Bảng điều khiển (DASHBOARD)
  [PATH.DASHBOARD]: {
    label: "Bảng điều khiển (Dashboard)",
    actions: [
      {
        value: `read:${PATH.DASHBOARD}`,
        label: "Xem số liệu tổng quan Dashboard",
      },
    ],
  },

  // 2. Khách hàng (CUSTOMER)
  [PATH.CUSTOMER]: {
    label: "Quản lý Khách hàng",
    actions: [
      { value: `read:${PATH.CUSTOMER}`, label: "Xem danh sách khách hàng" },
      { value: `create:${PATH.CUSTOMER}`, label: "Thêm mới khách hàng" },
      { value: `update:${PATH.CUSTOMER}`, label: "Sửa thông tin khách hàng" },
      { value: `delete:${PATH.CUSTOMER}`, label: "Xóa hồ sơ khách hàng" },
    ],
  },

  // 3. Kỹ thuật viên / Nhân sự (THERAPIST)
  [PATH.CATEGORY]: {
    label: "Quản lý Kỹ thuật viên / Nhân sự",
    actions: [
      { value: `read:${PATH.CATEGORY}`, label: "Xem danh sách kỹ thuật viên" },
      {
        value: `create:${PATH.CATEGORY}`,
        label: "Thêm mới nhân sự / kỹ thuật viên",
      },
      {
        value: `update:${PATH.CATEGORY}`,
        label: "Cập nhật thông tin / trạng thái làm việc",
      },
      { value: `delete:${PATH.CATEGORY}`, label: "Xóa tài khoản nhân sự" },
    ],
  },

  // 4. Lịch hẹn Spa (BOOKING -> appointment)
  [PATH.NOTE]: {
    label: "Quản lý Lịch hẹn (Appointment)",
    actions: [
      {
        value: `read:${PATH.NOTE}`,
        label: "Xem danh sách / Lịch trình hẹn",
      },
      { value: `create:${PATH.NOTE}`, label: "Đặt lịch hẹn mới" },
      {
        value: `update:${PATH.NOTE}`,
        label: "Thay đổi thời gian / Xếp phòng / Đổi nhân sự",
      },
      { value: `delete:${PATH.NOTE}`, label: "Hủy lịch hẹn" },
    ],
  },

  // 5. Dịch vụ Spa (SERVICE)
  [PATH.TRASH]: {
    label: "Quản lý Danh mục Dịch vụ",
    actions: [
      { value: `read:${PATH.TRASH}`, label: "Xem danh sách dịch vụ" },
      {
        value: `create:${PATH.TRASH}`,
        label: "Thêm dịch vụ mới (Gội đầu, Massage...)",
      },
      {
        value: `update:${PATH.TRASH}`,
        label: "Cập nhật bảng giá / Thời gian liệu trình",
      },
      { value: `delete:${PATH.TRASH}`, label: "Xóa dịch vụ" },
    ],
  },

  // 6. Gói sản phẩm Spa (SPAPACKAGE -> product)
  [PATH.PERMISSION]: {
    label: "Quản lý Gói Sản phẩm / Combo (Product)",
    actions: [
      {
        value: `read:${PATH.PERMISSION}`,
        label: "Xem danh sách gói sản phẩm / Combo",
      },
      {
        value: `create:${PATH.PERMISSION}`,
        label: "Tạo gói Combo dịch vụ mới",
      },
      {
        value: `update:${PATH.PERMISSION}`,
        label: "Sửa giá / Nội dung gói sản phẩm",
      },
      { value: `delete:${PATH.PERMISSION}`, label: "Xóa gói sản phẩm" },
    ],
  },
};
