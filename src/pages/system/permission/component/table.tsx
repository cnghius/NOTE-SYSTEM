/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Tag } from "antd";
// import { SaveOutlined, IeOutlined } from "@ant-design/icons";
import ModalMain from "./step/modalMain";
import { getStatusActive } from "../../../../typeActive";
import TableCustom from "../../../../components/tablePage/tableCustom";
import {
  createPermission,
  getPermission,
} from "../../../../apis/permission.api";

const SystemManagement: React.FC = () => {
  const queryKey = "roles";
  const StatusActive = getStatusActive();
  const userColumns = [
    {
      headerName: "Vai trò",
      field: "roleName",
      flex: 1,
    },
    {
      headerName: "Mã Vai trò",
      field: "roleSlug",
      flex: 1,
    },
    // {
    //   headerName: "Họ và tên nhân viên",
    //   field: "fullName",
    // },
    // {
    //   headerName: "Chức vụ hệ thống",
    //   valueGetter: (params: any) => {
    //     return params.data?.roleSlugId?.roleName ?? "";
    //   },
    // },

    {
      headerName: "Trạng thái",
      field: "status",
      cellRenderer: (params: any) => {
        const status = StatusActive(params?.value);
        return (
          <Tag color={status?.color} variant="solid">
            {status?.text}
          </Tag>
        );
      },
    },
  ];

  return (
    <TableCustom
      title="roles"
      ModalMain={ModalMain}
      queryKey={[queryKey]}
      openModal={open}
      columnsCustom={userColumns}
      resource={queryKey}
      queryFn={() => getPermission("roles")}
      onCreate={(resource: string, data: string) => {
        return createPermission(resource, data);
      }}
      onUpdate={() => (resource: string, data: string, id: string) => {
        throw new Error(`dd ${resource}, ${data}, ${id}`);
      }}
    />
  );
};

export default SystemManagement;
