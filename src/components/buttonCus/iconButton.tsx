import { usePermission } from "../../hooks/usePermission";
import { FaEdit, FaRegEye } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { VscDiscard } from "react-icons/vsc";
import { PATH } from "../../path";
import { useLocation } from "react-router-dom";
interface PropsButton {
  handleIsView: () => void;
  handleIsDelete?: () => void;
  hanleIsEdit: () => void;
  handleDiscard?: () => void;
  moduleKey: string;
}

const ButtonIconReact: React.FC<PropsButton> = ({
  handleIsDelete,
  handleIsView,
  hanleIsEdit,
  handleDiscard,
  moduleKey,
}) => {
  const location = useLocation();
  const { readPermission, updatePermission, deletePermision } =
    usePermission(moduleKey);
  // console.log("moduleKey", moduleKey);
  // console.log(
  //   " readPermission, updatePermission, deletePermision",
  //   readPermission,
  //   updatePermission,
  //   deletePermision,
  // );
  return (
    <div className="flex gap-4 mt-2">
      {deletePermision && (
        <MdDeleteForever
          className="text-red-500 hover:opacity-50 cursor-pointer "
          onClick={handleIsDelete}
          size={20}
        />
      )}
      {readPermission && !location.pathname.includes(PATH.TRASH) && (
        <FaRegEye
          className="text-blue-500 hover:opacity-50 cursor-pointer"
          onClick={handleIsView}
          size={20}
        />
      )}
      {updatePermission && !location.pathname.includes(PATH.TRASH) && (
        <FaEdit
          className="text-green-500 hover:opacity-50 cursor-pointer"
          onClick={hanleIsEdit}
          size={20}
        />
      )}
      {location.pathname.includes(PATH.TRASH) && (
        <VscDiscard
          className="text-black hover:opacity-50 cursor-pointer  "
          size={20}
          onClick={handleDiscard}
        />
      )}
    </div>
  );
};
export default ButtonIconReact;
