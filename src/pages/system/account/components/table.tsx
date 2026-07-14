/* eslint-disable @typescript-eslint/no-explicit-any */
import { Tag } from "antd";
// import { SaveOutlined, IeOutlined } from "@ant-design/icons";
import ModalMain from "./step/modalMain";
import { getStatusActive } from "../../../../typeActive";
import TableCustom from "../../../../components/tablePage/tableCustom";
import {
  createAccount,
  deleteAccount,
  getAccount,
} from "../../../../apis/accout.api";

const TableAccount = () => {
  const queryKey = "account";
  const StatusActive = getStatusActive();

  const userColumns = [
    {
      headerName: "Tài khoản đăng nhập",
      field: "email",
      flex: 1,
    },
    {
      headerName: "Họ và tên nhân viên",
      field: "fullName",
      flex: 1,
    },
    {
      headerName: "Chức vụ hệ thống",
      flex: 1,
      valueGetter: (params: any) => {
        return params.data?.roleSlugId?.roleName ?? "";
      },
    },

    {
      headerName: "Trạng thái",
      flex: 1,
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
      title="account"
      ModalMain={ModalMain}
      queryKey={[queryKey]}
      openModal={open}
      columnsCustom={userColumns}
      resource={queryKey}
      queryFn={() => getAccount(queryKey)}
      onCreate={(resource: string, data: string) => {
        return createAccount(resource, data);
      }}
      onUpdate={() => (resource: string, data: string, id: string) => {
        throw new Error(`dd ${resource}, ${data}, ${id}`);
      }}
      onDelete={(resource: string, id: string) => deleteAccount(resource, id)}
    />
  );
};

export default TableAccount;
