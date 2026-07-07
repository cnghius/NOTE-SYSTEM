import { LayoutContent } from "../../components/tablePage/layout/layoutContent";
import Filter from "./components/filter";
import Table from "./components/table";

const Customer = () => {
  return (
    <>
      <LayoutContent filter={<Filter />} table={<Table />}></LayoutContent>
    </>
  );
};
export default Customer;
