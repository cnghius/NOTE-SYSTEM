/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, message, Modal } from "antd";
import { CollapseCustom } from "../collapse/collapse";
import { useTypeAction } from "@/hooks/useTypeAction";
import type { TypeAction } from "@/types/typeAction";
import type { CustomCellRendererProps } from "ag-grid-react";
import ButtonIconReact from "../buttonCus/iconButton";
import TableCustomAg from "./layout/tableCustomAg";
import type { ColDef } from "ag-grid-community";
import {
  useQuery,
  useQueryClient,
  type QueryFunction,
} from "@tanstack/react-query";
import api from "@/config/axiosConfig";
import CardLayout from "../card/card";
// import { usePermission } from "@/hooks/usePermission";
// import { useSelector } from "react-redux";
// import type { RootState } from "@/redux/app/store";
// import type { UserRole } from "@/types/type";
// import { useEffect, useState } from "react";
interface ModalMainProps {
  typeAction: TypeAction;
  dataModal?: any;
  close?: () => void;
  resource: string;
  onCreate: (resource: string, data: string) => void;
  onUpdate: (resource: string, data: string, id: string) => void;
}
interface PopTable {
  ModalMain: React.FC<ModalMainProps>;
  title?: string;
  openModal?: (type: TypeAction, data: any) => void;
  columnsCustom: ColDef[];
  queryKey?: string[];
  queryFn?: QueryFunction<any>;
  onDelete?: (resource: string, id: string) => void;
  resource: string;
  onCreate: (resource: string, data: string) => void;
  onUpdate: (resource: string, data: string, id: string) => void;
}

type OpenModal = (
  typeAction: TypeAction,
  data: {
    name: string;
  },
) => void;

interface IconButtonProps extends CustomCellRendererProps {
  OpenModal: OpenModal;
  handleIsView: () => void;
  handleIsDelete: () => void;
  hanleIsEdit: () => void;
  resource: string;
  onDelete?: (resource: string, id: string) => Promise<void>;
  onCreate: (resource: string, data: string) => void;
}

const TableCustom: React.FC<PopTable> = ({
  title,
  columnsCustom,
  openModal,
  ModalMain,
  queryKey,
  queryFn,
  resource,
  onDelete,
  onCreate,
  onUpdate,
}) => {
  const { open, isOpen, close, typeAction, dataModal } = useTypeAction();
  const queryClient = useQueryClient();
  const { data } = useQuery({
    //
    queryKey: queryKey ?? [resource],
    queryFn: queryFn,
  });
  // console.log("data", data);
  // console.log("data.data", data?.data);
  // console.log("first row", data?.data?.[0]);
  // console.log(data?.data?.[0].customerId.username);

  const ActionButton = (params: IconButtonProps) => {
    const handleView = () => {
      open("view", params.data);
    };
    const handleEdit = async () => {
      open("edit", params.data);
    };
    const handleDlete = async () => {
      const DocId = params.data._id;
      console.log("kiểm tra id của customer", DocId);

      // const resources = params.resource || resource;
      if (resource === undefined && DocId === null) {
        message.warning(`Kiểm tra lại tên: ${resource} và id: ${DocId}`);
        return;
      }
      if (params.onDelete === undefined || null) {
        message.error("Chưa có tồn tại Id truyền ");
      }
      // Chuyển hành động "Xóa" thành toggle trạng thái isActive
      const currrentStatus = params.data.status || "active";
      const isCurrentStatus = currrentStatus === "active";

      const actionLabel = isCurrentStatus ? "ngưng hoạt động" : "khôi phục";
      const actionSatus = isCurrentStatus ? "inactive" : "acitve";
      Modal.confirm({
        title: `Bạn có chắc muốn ${actionLabel} mục này?`,
        onOk: async () => {
          try {
            await api.patch(`/${resource}/${DocId}`, { status: actionSatus });
            await params.onDelete?.(resource, DocId);
            // Làm mới cache
            queryClient.invalidateQueries({ queryKey: queryKey ?? [resource] });
            message.success(`${actionLabel} thành công`);
          } catch (error) {
            console.log("lỗi ", error);
            message.error(`${actionLabel} thất bại`);
          }
        },
      });
    };
    // const { readPermission, updatePermission, deletePermision } = usePermission(
    //   {},
    // );
    // const cleanResource = resource.replace(/s$/, "");
    const cleanResource = resource.endsWith("s")
      ? resource.slice(0, -1)
      : resource;

    return (
      <>
        <ButtonIconReact
          // {readPermission && (handleDlete = {handleDlete})}
          moduleKey={cleanResource}
          handleIsDelete={handleDlete}
          handleIsView={handleView}
          hanleIsEdit={handleEdit}
        />
      </>
    );
  };

  const columnsDef: ColDef[] = [
    {
      headerName: "Tác Vụ",
      cellClass: "ag-grid-cell-center",
      headerClass: "header-center-ag-grid",
      sortable: false,
      width: 120,
      cellRenderer: ActionButton,
      cellRendererParams: {
        OpenModal: openModal,
        onDelete: onDelete,
      },
      // render: () => {
      //   return ActionButton;
      // },
    },
  ];
  // console.log("popscolimsn", columnsCustom);
  // console.log("columnsDef", columnsDef);
  // console.log("pops.dataSourc", pops.dataSource);
  // const [data, setData] = useState<any[]>() || undefined;
  // useEffect(() => {
  //   if (pops.dataSource)
  //     // eslint-disable-next-line @typescript-eslint/no-explicit-any
  //     setData(pops.dataSource as any);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [pops.dataSource]);
  // console.log("data", data);

  //const columns = columnsCustom.filter((i) => i.headerName);
  // const { loading, ...dataSource } = pops;
  // const getRowData = () => {
  //   if (!data?.data) {
  //     return;
  //   }
  //   //gom tất cả vô 1 mảng duy nhất
  //   if (data?.data?.[0]) {
  //     return data.map((i: any) => i.data?.data?.[0]);
  //   }
  //   return data?.data || [];
  // };
  // const user = useSelector((state: RootState) => state.auth.user);
  // const role = user?.role as UserRole | undefined;

  // if (role === "admin") {
  //   columnsDef;
  // }
  // if (role === "manager") {
  //   columnsCustom;
  // }

  const getCleanRowData = () => {
    if (!data) return [];

    // Nếu dữ liệu là một mảng (như trong ảnh tab Network: [{ data: [...] }])
    if (Array.isArray(data)) {
      return data.flatMap((item: any) => item.data || []);
    }

    return data?.data || [];
  };
  const handleAdd = () => {
    open("add");
  };
  return (
    <>
      <div className="mb-2 mt-2 flex justify-end items-end mr-5">
        <Button onClick={handleAdd}>Thêm mới</Button>
      </div>
      <CollapseCustom title={`THÔNG TIN CHI TIẾT ${title}`}>
        <TableCustomAg
          // rowData={pops.dataSource ? [...pops.dataSource] : data}
          rowData={getCleanRowData()}
          columnDefs={[...columnsCustom, ...columnsDef]}
          className="w-full"
        />
      </CollapseCustom>
      <CardLayout>
        {ModalMain && (
          <Modal width={1200} open={isOpen} footer={null} onCancel={close}>
            <ModalMain
              onCreate={onCreate}
              onUpdate={onUpdate}
              resource={resource}
              dataModal={dataModal}
              typeAction={typeAction}
              close={close}
            />
          </Modal>
        )}
      </CardLayout>
    </>
  );
};
export default TableCustom;
