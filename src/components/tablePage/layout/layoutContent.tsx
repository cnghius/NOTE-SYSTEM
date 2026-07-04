import CardLayout from "../../../components/card/card";
import { CollapseCustom } from "../../../components/collapse/collapse";
import type React from "react";

interface Pops {
  table: React.ReactNode;
  filter: React.ReactNode;
}
export const LayoutContent: React.FC<Pops> = ({ table, filter }) => {
  return (
    <>
      <CardLayout>
        <CollapseCustom defaultOpen={false} title="THÔNG TIN TÌM KIẾM">
          {filter}
        </CollapseCustom>
      </CardLayout>
      <div className="mt-3">{table}</div>
    </>
  );
};
