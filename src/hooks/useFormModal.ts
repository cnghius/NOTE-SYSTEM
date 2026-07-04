/* eslint-disable react-hooks/exhaustive-deps */
import dayjs from "dayjs";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import type { TypeAction } from "../types/typeAction";
import type { FormInstance } from "antd";

interface FormModalProps {
  form: FormInstance;
  typeAction: TypeAction;
  dataModal?: any;
  dataField: string[];
}
export const useFormModal: React.FC<FormModalProps> = ({
  form,
  typeAction,
  dataField = [],
  dataModal,
}) => {
  const isAdd = typeAction === "add";
  useEffect(() => {
    if (dataModal && !isAdd) {
      const formDataModal = { ...dataModal };
      //Ép kiểu cho ngày và tháng khi
      dataField.forEach((f) => {
        if (dataModal[f]) {
          formDataModal[f] = dayjs(dataModal[f]);
        }
      });
      form.setFieldsValue(formDataModal);
    } else {
      form.resetFields();
    }
  }, [form, typeAction, dataModal]);
};
