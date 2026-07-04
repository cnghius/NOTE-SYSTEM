import { useState } from "react";
import type { TypeAction } from "../types/typeAction";
export type Props<T> = (typeAction: TypeAction, data?: T) => void;
const useTypeAction = <T>() => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [typeAction, setTypeAction] = useState<TypeAction>("add");
  const [dataModal, setDataModal] = useState<T | undefined>();
  const open: Props<T> = (typeAction: TypeAction, data?: T) => {
    setDataModal(data);
    setTypeAction(typeAction);
    setIsOpen(true);
  };
  const close = () => {
    setIsOpen(false);
    setDataModal(undefined);
  };
  return {
    dataModal,
    isOpen,
    typeAction,
    setIsOpen,
    setTypeAction,
    open,
    close,
  };
};
export { useTypeAction };
