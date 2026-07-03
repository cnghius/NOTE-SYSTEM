import { AgGridReact, type AgGridReactProps } from "ag-grid-react";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface TableCustomAgProps extends AgGridReactProps {}
const TableCustomAg: React.FC<TableCustomAgProps> = ({
  defaultColDef,
  ...props
}) => {
  const ROW_HEIGHT = 42;
  const HEADER_HEIGHT = 42;

  return (
    <div
      className="ag-theme-quartz"
      style={{
        height: HEADER_HEIGHT + ROW_HEIGHT * 11,
      }}
    >
      <AgGridReact
        paginationPageSize={10}
        theme="legacy"
        defaultColDef={{
          ...defaultColDef,
        }}
        paginationPageSizeSelector={[10, 20, 50]}
        pagination
        {...props}
      />
    </div>
  );
};
export default TableCustomAg;
