import { PATH } from "../../../../path";

export const SYSTEM_PERMISSIONS = {
  // Dashboard
  [PATH.DASHBOARD]: {
    label: "Dashboard",
    actions: [
      {
        value: `read:${PATH.DASHBOARD}`,
        label: "Xem Dashboard",
      },
    ],
  },

  // Customer
  [PATH.CUSTOMER]: {
    label: "Customer",
    actions: [
      {
        value: `read:${PATH.CUSTOMER}`,
        label: "Xem danh sách Customer",
      },
      {
        value: `create:${PATH.CUSTOMER}`,
        label: "Thêm Customer",
      },
      {
        value: `update:${PATH.CUSTOMER}`,
        label: "Cập nhật Customer",
      },
      {
        value: `delete:${PATH.CUSTOMER}`,
        label: "Xóa Customer",
      },
    ],
  },

  // Category
  [PATH.CATEGORY]: {
    label: "Category",
    actions: [
      {
        value: `read:${PATH.CATEGORY}`,
        label: "Xem danh sách Category",
      },
      {
        value: `create:${PATH.CATEGORY}`,
        label: "Thêm Category",
      },
      {
        value: `update:${PATH.CATEGORY}`,
        label: "Cập nhật Category",
      },
      {
        value: `delete:${PATH.CATEGORY}`,
        label: "Xóa Category",
      },
    ],
  },

  // Note
  [PATH.NOTE]: {
    label: "Note",
    actions: [
      {
        value: `read:${PATH.NOTE}`,
        label: "Xem danh sách Note",
      },
      {
        value: `create:${PATH.NOTE}`,
        label: "Thêm Note",
      },
      {
        value: `update:${PATH.NOTE}`,
        label: "Cập nhật Note",
      },
      {
        value: `delete:${PATH.NOTE}`,
        label: "Xóa Note",
      },
    ],
  },

  // Trash
  [PATH.TRASH]: {
    label: "Trash",
    actions: [
      {
        value: `read:${PATH.TRASH}`,
        label: "Xem danh sách Trash",
      },
      {
        value: `create:${PATH.TRASH}`,
        label: "Thêm Trash",
      },
      {
        value: `update:${PATH.TRASH}`,
        label: "Cập nhật Trash",
      },
      {
        value: `delete:${PATH.TRASH}`,
        label: "Xóa Trash",
      },
    ],
  },

  // Permission
  [PATH.PERMISSION]: {
    label: "Permission",
    actions: [
      {
        value: `read:${PATH.PERMISSION}`,
        label: "Xem danh sách Permission",
      },
      {
        value: `create:${PATH.PERMISSION}`,
        label: "Thêm Permission",
      },
      {
        value: `update:${PATH.PERMISSION}`,
        label: "Cập nhật Permission",
      },
      {
        value: `delete:${PATH.PERMISSION}`,
        label: "Xóa Permission",
      },
    ],
  },
};
