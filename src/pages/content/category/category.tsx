import { LayoutContent } from "../../../components/tablePage/layout/layoutContent";
import Table from "./components/table";

const Category = () => {
  return <LayoutContent table={<Table />} filter={undefined}></LayoutContent>;
};

export default Category;
