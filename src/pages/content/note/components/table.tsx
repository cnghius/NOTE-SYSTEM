import { Tag } from "antd";
import TableCustom from "../../../../components/tablePage/tableCustom";
import ModalMain from "./step/modalMain";
import {
  createNote,
  deleteNote,
  getNote,
  updateNote,
} from "../../../../apis/note.api";

/* eslint-disable @typescript-eslint/no-explicit-any */
const Table = () => {
  const targetKey = "notes";
  const columnsCustom = [
    {
      headerName: "Ghi chú",
      field: "title",
      flex: 2,
      minWidth: 250,
      cellRenderer: (params: any) => {
        const note = params.data;

        return (
          <div className="leading-tight py-2">
            <div className="font-semibold text-slate-700">{note.title}</div>

            <div className="text-xs text-gray-400 truncate">{note.content}</div>
          </div>
        );
      },
    },

    {
      headerName: "Danh mục",
      field: "category.name",
      flex: 1,
      minWidth: 150,
    },

    {
      headerName: "Độ ưu tiên",
      field: "priority",
      flex: 1,
      cellRenderer: (params: any) => {
        const priority = params.value;

        const color =
          priority === "high"
            ? "red"
            : priority === "medium"
              ? "orange"
              : "green";

        return <Tag color={color}>{priority}</Tag>;
      },
    },

    {
      headerName: "Ghim",
      field: "isPinned",
      width: 100,
      cellRenderer: (params: any) => (params.value ? "📌" : "-"),
    },

    {
      headerName: "Yêu thích",
      field: "isFavorite",
      width: 120,
      cellRenderer: (params: any) => (params.value ? "❤️" : "-"),
    },

    {
      headerName: "Ngày tạo",
      field: "createdAt",
      flex: 1.3,
      minWidth: 180,
      valueFormatter: (params: any) =>
        new Date(params.value).toLocaleDateString("vi-VN"),
    },
  ];
  return (
    <>
      <TableCustom
        title="GHI CHÚ"
        ModalMain={ModalMain}
        columnsCustom={columnsCustom}
        queryKey={[targetKey]}
        queryFn={() => getNote(targetKey)}
        openModal={open}
        resource={targetKey}
        onCreate={(resource: string, data: string) =>
          createNote(resource, data)
        }
        onUpdate={(resource: string, data: string, id: string) =>
          updateNote(resource, data, id)
        }
        onDelete={(resource, id) => deleteNote(resource, id)}
      />
    </>
  );
};
export default Table;
