import React from "react";
import { Collapse } from "antd";

interface PopsCollapse {
  title?: string;
  children?: React.ReactNode;
  defaultOpen?: boolean;
}

export const CollapseCustom: React.FC<PopsCollapse> = ({
  title,
  children,
  defaultOpen = true,
}) => {
  return (
    <Collapse
      // Khung ngoài cùng luôn chiếm hết chiều rộng của container cha
      className="w-full border-gray-200"
      defaultActiveKey={defaultOpen ? [1] : []} // Sửa lỗi [1] : [""] của Antd (key nên đồng nhất kiểu số)
      items={[
        {
          key: 1,
          label: <span className="font-medium text-base">{title}</span>,
          // Bọc nội dung bằng một div chuyên trách quản lý Scroll và Kéo giãn (Resize)
          children: (
            <div
              className="w-full overflow-x-auto custom-table-wrapper"
              // style={{
              //   overflowX: "auto",
              //   overflowY: "auto",
              //   maxHeight: "400px",
              // }}
            >
              {children}
            </div>
          ),
        },
      ]}
    />
  );
};
