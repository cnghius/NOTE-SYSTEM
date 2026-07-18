/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQueryClient } from "@tanstack/react-query";
import {
  getTrashList,
  deleteTrashForever,
  restoreTrashItem,
} from "../../../../apis/trash.api";
import TableCustom from "../../../../components/tablePage/tableCustom";
import ModalMain from "./step/modalMain";

const Table = () => {
  const queryClient = useQueryClient();
  const targetKey = "trash";
  const columnsCustom = [
    {
      headerName: "Tiêu đề",
      field: "name",
      valueGetter: (params: any) => {
        if (params.data?.data?.name) {
          return params.data?.data?.name ?? "";
        }
        return params.data?.data?.content ?? "";
      },
      flex: 2,
    },

    {
      headerName: "Danh mục",
      field: "itemType",
      flex: 1,
    },

    {
      headerName: "Ngày xóa",
      valueFormatter: (params: any) => {
        if (!params.value) {
          return "";
        }
        return new Date(params.value).toLocaleDateString("vi-VN");
      },
      field: "deletedAt",
      flex: 1.5,
    },

    {
      headerName: "Ngày tạo",
      field: "createdAt",
      flex: 1.5,
      valueGetter: (params: any) => {
        return params.data?.data?.createdAt;
      },
      valueFormatter: (params: any) => {
        if (!params.value) {
          return "";
        }
        return new Date(params.value).toLocaleDateString("vi-VN");
      },
    },
  ];
  return (
    <>
      <TableCustom
        title="THÙNG RÁC"
        ModalMain={ModalMain}
        columnsCustom={columnsCustom}
        queryKey={[targetKey]}
        queryFn={() => getTrashList(targetKey)}
        openModal={open}
        resource={targetKey}
        onDelete={async (resource, id) => {
          deleteTrashForever(resource, id);
          await queryClient.invalidateQueries({ queryKey: [targetKey] });
        }}
        onCreate={async (resource, id) => {
          restoreTrashItem(resource, id);
          await queryClient.invalidateQueries({ queryKey: [targetKey] });
        }}
      />
    </>
  );
};
export default Table;
