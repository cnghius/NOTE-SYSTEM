/* eslint-disable @typescript-eslint/no-explicit-any */
import { Tag } from "antd";
import { FolderOpenOutlined } from "@ant-design/icons";
import ModalMain from "./step/modalMain";
import TableCustom from "../../../../components/tablePage/tableCustom";
const Table = () => {
  const columnsCustom = [
    {
      headerName: "Danh mục",
      field: "name",
      flex: 1,
      minWidth: 240,
      cellRenderer: (params: any) => {
        return (
          <div className="flex items-center gap-3 h-full">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center text-white"
              style={{
                background: params.data.color || "#1677ff",
              }}
            >
              <FolderOpenOutlined />
            </div>

            <div>
              <div className="font-medium">{params.data.name}</div>

              <div className="text-xs text-gray-400">{params.data.slug}</div>
            </div>
          </div>
        );
      },
    },

    {
      headerName: "Mô tả",
      field: "description",
      flex: 2,
      minWidth: 220,
      valueFormatter: (params: any) => params.value || "Không có mô tả",
    },

    {
      headerName: "Màu",
      field: "color",
      flex: 1,
      minWidth: 100,
      cellClass: "ag-grid-cell-center",
      cellRenderer: (params: any) => (
        <div className="flex justify-center">
          <div
            className="w-6 h-6 rounded-full border"
            style={{
              background: params.value,
            }}
          />
        </div>
      ),
    },

    {
      headerName: "Số ghi chú",
      field: "noteCount",
      flex: 1,
      minWidth: 120,
      cellClass: "ag-grid-cell-center",
      valueFormatter: (params: any) => params.value ?? 0,
    },

    {
      headerName: "Trạng thái",
      field: "status",
      flex: 1,
      minWidth: 120,
      cellRenderer: (params: any) => {
        return (
          <Tag color={params.value === "active" ? "green" : "red"}>
            {params.value === "active" ? "Hoạt động" : "Đã ẩn"}
          </Tag>
        );
      },
    },

    {
      headerName: "Ngày tạo",
      field: "createdAt",
      flex: 1.3,
      minWidth: 150,
      cellRenderer: (params: any) =>
        new Date(params.value).toLocaleDateString("vi-VN"),
    },
  ];
  return (
    <>
      <TableCustom
        columnsCustom={columnsCustom}
        ModalMain={ModalMain}
        resource={""}
        onCreate={function (resource: string, data: string): void {
          throw new Error("Function not implemented.");
        }}
        onUpdate={function (resource: string, data: string, id: string): void {
          throw new Error("Function not implemented.");
        }}
      />
    </>
  );
};
export default Table;
