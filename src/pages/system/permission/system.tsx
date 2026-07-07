import { LayoutContent } from "../../../components/tablePage/layout/layoutContent";
import SystemManagement from "./component/table";

const SystemPermissions = () => {
  return (
    <>
      <LayoutContent
        table={<SystemManagement />}
        filter={undefined}
      ></LayoutContent>
    </>
  );
};
export default SystemPermissions;
