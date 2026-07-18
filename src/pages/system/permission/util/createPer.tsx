/* eslint-disable @typescript-eslint/no-explicit-any */
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
                {moduleData?.actions?.map((action: any) => (
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
