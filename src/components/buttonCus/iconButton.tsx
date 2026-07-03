import { usePermission } from "@/hooks/usePermission";
import { FaEdit, FaRegEye } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

interface PropsButton {
  handleIsView: () => void;
  handleIsDelete?: () => void;
  hanleIsEdit: () => void;
  moduleKey: string;
}

const ButtonIconReact: React.FC<PropsButton> = ({
  handleIsDelete,
  handleIsView,
  hanleIsEdit,
  moduleKey,
}) => {
  const { readPermission, updatePermission, deletePermision } =
    usePermission(moduleKey);
  console.log("moduleKey", moduleKey);
  console.log(
    " readPermission, updatePermission, deletePermision",
    readPermission,
    updatePermission,
    deletePermision,
  );

  return (
    <div className="flex gap-4 mt-2">
      {deletePermision && (
        <MdDeleteForever
          className="text-red-500 hover:opacity-50 cursor-pointer "
          onClick={handleIsDelete}
          size={20}
        />
      )}

      {readPermission && (
        <FaRegEye
          className="text-blue-500 hover:opacity-50 cursor-pointer"
          onClick={handleIsView}
          size={20}
        />
      )}

      {updatePermission && (
        <FaEdit
          className="text-green-500 hover:opacity-50 cursor-pointer"
          onClick={hanleIsEdit}
          size={20}
        />
      )}
    </div>
  );
};
export default ButtonIconReact;
