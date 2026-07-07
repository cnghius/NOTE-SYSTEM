import { LayoutContent } from "../../../components/tablePage/layout/layoutContent";
import Table from "./components/table";

const Note = () => {
  return (
    <div>
      <LayoutContent filter={undefined} table={<Table />}></LayoutContent>
    </div>
  );
};

export default Note;
