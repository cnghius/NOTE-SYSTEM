/* eslint-disable @typescript-eslint/no-explicit-any */
import { Avatar, Tag } from "antd";
import ModalMain from "./step/modalMain";
import { getStatusActive } from "../../../typeActive";
import CardLayout from "../../../components/card/card";
import TableCustom from "../../../components/tablePage/tableCustom";
import {
  createCustomer,
  deleteCustomer,
  getCustomer,
  updateCustomer,
} from "../../../apis/customer.api";

const Table = () => {
  const StatusActive = getStatusActive();
  const targetKey = "customers";
  const columnsCustom = [
    {
      headerName: "Khách hàng",
      field: "username",
      flex: 2,
      minWidth: 220,
      cellRenderer: (params: any) => {
        const username = params.value;
        const record = params.data; // Lấy toàn bộ dữ liệu dòng hiện tại

        return (
          <div className="flex items-center gap-3 h-full py-1">
            {/* Lấy chữ cái đầu tiên của username làm Avatar */}
            <Avatar size={38} className="bg-blue-500 uppercase shrink-0">
              {username?.charAt(0) || "K"}
            </Avatar>

            <div className="leading-tight">
              <div className="font-medium text-slate-700">{username}</div>
              {/* Lấy số điện thoại nằm trực tiếp ở gốc object */}
              <div className="text-xs text-gray-400">{record?.phone}</div>
            </div>
          </div>
        );
      },
    },

    {
      headerName: "Email",
      field: "email",
      flex: 2,
      minWidth: 180,
    },

    {
      headerName: "Trạng thái",
      field: "status",
      cellRenderer: (params: any) => {
        const status = StatusActive(params.value); // Nhận chuỗi "active" từ JSON
        return (
          <Tag color={status?.color} variant="solid">
            {status?.text}
          </Tag>
        );
      },
    },
  ];

  return (
    <>
      <CardLayout>
        <TableCustom
          title="KHÁCH HÀNG"
          ModalMain={ModalMain}
          columnsCustom={columnsCustom}
          queryKey={[targetKey]}
          queryFn={() => getCustomer(targetKey)}
          openModal={open}
          resource={targetKey}
          onCreate={(resource: string, data: string) =>
            createCustomer(resource, data)
          }
          onUpdate={(resource: string, data: string, id: string) =>
            updateCustomer(resource, data, id)
          }
          onDelete={(resource, id) => deleteCustomer(resource, id)}
        />
      </CardLayout>
    </>
  );
};
export default Table;
