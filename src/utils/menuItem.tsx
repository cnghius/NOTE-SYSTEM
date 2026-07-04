import type { MenuProps } from "antd";
import type { ReactNode } from "react";
import { PATH } from "../path";
import {
  DeleteOutlined,
  FileTextOutlined,
  FolderOpenOutlined,
  SafetyCertificateOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { MdContentPasteSearch } from "react-icons/md";

import { IoPeopleSharp, IoServerOutline } from "react-icons/io5";

export type MenuItem = Required<MenuProps>["items"][number];

const getItem = (
  key: React.Key,
  label: ReactNode,
  icon?: ReactNode,
  children?: MenuItem[],
): MenuItem => {
  return {
    key,
    label,
    icon,
    children,
  } as MenuItem;
};
export const items: MenuItem[] = [
  getItem(PATH.DASHBOARD, "dashboard", <UserOutlined />),
  getItem(PATH.CONTENT, " Quản lý nội dung", <MdContentPasteSearch />, [
    getItem(PATH.NOTE, "Ghi chú", <FileTextOutlined />),
    getItem(PATH.CATEGORY, "Danh mục", <FolderOpenOutlined />),
    getItem(PATH.TRASH, "Thùng rác", <DeleteOutlined />),
  ]),
  getItem(PATH.CUSTOMER, "Người dùng", <TeamOutlined />),
  getItem(PATH.SYSTEM, "Cài đặt", <IoServerOutline />, [
    getItem(PATH.ACCOUT, "Tài khoản", <IoPeopleSharp />),
    getItem(PATH.PERMISSION, "Vai trò", <SafetyCertificateOutlined />),
  ]),
];
