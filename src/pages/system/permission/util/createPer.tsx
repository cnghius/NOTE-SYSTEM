/* eslint-disable @typescript-eslint/no-explicit-any */
// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { useState } from "react";
// import { INITIAL_ROLES, SYSTEM_PERMISSIONS } from "../types/systempermission";
// import {
//   Button,
//   Card,
//   Checkbox,
//   Input,
//   message,
//   Space,
//   Table,
//   Tag,
// } from "antd";
// import { PlusOutlined } from "@ant-design/icons";

// const PermissionTable = () => {
//   const [roles, setRoles] = useState<any[]>(INITIAL_ROLES);
//   const [selectionRoleId, setSelectionRoleId] = useState<string>("role_id");
//   const currentRole = roles.find((i) => i.id == selectionRoleId);
//   const [newRoleName, setNewRoleName] = useState<string>("");
//   const handlePermissionChange = (action: string, checked: boolean) => {
//     setRoles((prev) =>
//       prev.map((r) => {
//         if (r.id === selectionRoleId) {
//           const currentPermissions = r?.permissions ?? [];
//           const update = checked
//             ? [...currentPermissions, action]
//             : currentPermissions.filter((p: any) => p !== action);
//           return { ...r, permissions: update };
//         }
//         return r;
//       }),
//     );
//   };
//   const handleCreateRole = () => {
//     if (!newRoleName.trim()) return message.warning("vui lòng nhập tên quyền");
//     const newRole = {
//       id: `role_${Date.now}`,
//       roleName: newRoleName,
//       permissions: [],
//     };
//     setRoles([...roles, newRole]);
//     setSelectionRoleId(newRole.id);
//     setNewRoleName("");
//     message.success(`Thêm mới ${newRoleName} thành công `);
//   };
//   const columnsPermission: any = [
//     {
//       title: "Module Silder",
//       dataIndex: "module",
//       key: "module",
//       onCell: (_: any, i: any) => {
//         if (i === 0) return { rowSpan: 4 };
//         if (i === 4) return { rowSpan: 2 };
//         if (i === 6) return { rowSpan: 2 };
//         if (i === 8) return { rowSpan: 4 };
//         if (i > 0 && [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].includes(i))
//           return { rowSpan: 1 };
//         return { rowSpan: 0 };
//       },
//       render: (text: string) => {
//         return <span className="font-semibold text-slate-700">{text}</span>;
//       },
//     },
//     {
//       title: "Hành động được phép thực hiện trên giao diện",
//       dataIndex: "description",
//       key: "description",
//     },
//     {
//       title: "Mã kiểm tra hệ thống",
//       dataIndex: "action",
//       key: "action",
//       width: 180,
//       render: (action: any) => {
//         return <Tag color="blue">{action}</Tag>;
//       },
//     },
//     {
//       title: "Cấp quyền",
//       key: "grant",
//       width: 100,
//       align: "center" as const,
//       render: (_: any, record: any) => {
//         return (
//           <Checkbox
//             checked={!!currentRole?.permissions?.includes(record.action)}
//             disabled={selectionRoleId === "admin"}
//             onChange={(e) =>
//               handlePermissionChange(record.action, e.target.checked)
//             }
//           />
//         );
//       },
//     },
//   ];
//   return (
//     <div>
//       <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 mt-2">
//         <Card
//           title="Chọn nhóm chức vụ"
//           size="small"
//           className="shadow-none border-gray-200"
//         >
//           <div className="flex flex-col gap-2">
//             {roles.map((r) => (
//               <button
//                 key={r.id}
//                 onClick={() => setSelectionRoleId(r.id)}
//                 className={`p-3 text-left rounded-md border text-sm transition-all ${selectionRoleId === r.id ? "border-emerald-500 bg-emerald-50 text-emerald-700 font-medium" : "border-gray-200 hover:bg-gray-50"}`}
//               >
//                 <div>{r.roleName}</div>
//                 <div className="text-xs text-gray-400 mt-1">
//                   Đã cấp: {r.permissions.length} quyền
//                 </div>
//               </button>
//             ))}
//           </div>
//           <div className="mt-4 pt-3 border-t">
//             <span className="text-xs text-gray-400 block mb-2">
//               Thêm vai trò mới:
//             </span>
//             <Space.Compact className="w-full">
//               <Input
//                 placeholder="Ví dụ: Kế toán..."
//                 value={newRoleName}
//                 onChange={(e) => setNewRoleName(e.target.value)}
//               />
//               <Button
//                 type="primary"
//                 icon={<PlusOutlined />}
//                 onClick={handleCreateRole}
//               />
//             </Space.Compact>
//           </div>
//         </Card>

//         <Card
//           title={
//             <span>
//               Thiết lập ma trận quyền cho:{" "}
//               <strong className="text-emerald-600">
//                 {currentRole?.roleName}
//               </strong>
//             </span>
//           }
//           size="small"
//           className="lg:col-span-3 shadow-none border-gray-200"
//         >
//           {/* <Table
//             dataSource={SYSTEM_PERMISSIONS}
//             columns={permissionColumns}
//             rowKey="id"
//             pagination={false}
//             bordered
//             size="small" */}
//           <Table
//             rowKey="id"
//             dataSource={[SYSTEM_PERMISSIONS]}
//             columns={columnsPermission}
//             bordered
//             size="small"
//           ></Table>
//         </Card>
//       </div>
//     </div>
//   );
// };
// export default PermissionTable;
import { Checkbox, Card, Row, Col } from "antd";
import { SYSTEM_PERMISSIONS } from "../types/systempermission";
interface Pops {
  selectedPermissions: any;
  onChangePermissions: any;
}
const PermissionMatrix = ({
  selectedPermissions,
  onChangePermissions,
}: Pops) => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Cấu hình Ma trận quyền động</h2>
      {/* 
      {Object.entries(SYSTEM_PERMISSIONS).map(([moduleKey, moduleData]) => (
        <Card
          key={moduleKey}
          title={moduleData.label}
          style={{
            marginBottom: "16px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
          }}
        > */}
      <Card>
        {" "}
        <Checkbox.Group
          value={selectedPermissions}
          onChange={(checkedValues) =>
            onChangePermissions(checkedValues as string[])
          }
        >
          {Object.entries(SYSTEM_PERMISSIONS).map(([moduleKey, moduleData]) => (
            <Card
              key={moduleKey}
              title={moduleData.label}
              style={{
                marginBottom: "16px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                width: 900,
              }}
            >
              <Row gutter={[16, 16]}>
                {moduleData.actions.map((action) => (
                  <Col span={6} key={action.value}>
                    <Checkbox value={action.value}>{action.label}</Checkbox>
                  </Col>
                ))}
              </Row>
            </Card>
          ))}
          {/* <Row gutter={[16, 16]}>
              {moduleData.actions.map((action) => (
                <Col span={6} key={action.value}>
                  <Checkbox value={action.value}>{action.label}</Checkbox>
                </Col>
              ))}
            </Row> */}
        </Checkbox.Group>
      </Card>

      {/* </Card> */}
      {/* ))} */}
    </div>
  );
};

export default PermissionMatrix;
