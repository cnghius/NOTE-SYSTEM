import {
  createTrash,
  deleteTrash,
  getTrash,
  updateTrash,
} from "../../../../apis/trash.api";
import TableCustom from "../../../../components/tablePage/tableCustom";
import ModalMain from "./step/modalMain";

const Table = () => {
  const targetKey = "trashs";
  const columnsCustom = [
    {
      headerName: "Tiêu đề",
      field: "title",
      flex: 2,
    },

    {
      headerName: "Danh mục",
      field: "category.name",
      flex: 1,
    },

    {
      headerName: "Ngày xóa",
      field: "deletedAt",
      flex: 1.5,
    },

    {
      headerName: "Ngày tạo",
      field: "createdAt",
      flex: 1.5,
    },
  ];
  return (
    <>
      <TableCustom
        title="THÙNG RÁC"
        ModalMain={ModalMain}
        columnsCustom={columnsCustom}
        queryKey={[targetKey]}
        queryFn={() => getTrash(targetKey)}
        openModal={open}
        resource={targetKey}
        onCreate={(resource: string, data: string) =>
          createTrash(resource, data)
        }
        onUpdate={(resource: string, data: string, id: string) =>
          updateTrash(resource, data, id)
        }
        onDelete={(resource, id) => deleteTrash(resource, id)}
      />
    </>
  );
};
export default Table;
