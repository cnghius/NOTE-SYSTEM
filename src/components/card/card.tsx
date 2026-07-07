import type React from "react";
import { cn } from "../../utils/merge";

interface CardPops {
  className?: string;
  children?: React.ReactNode;
  title?: React.ReactNode;
}
const CardLayout: React.FC<CardPops> = ({ className, children, title }) => {
  return (
    <div
      className={cn(
        // "w-full rounded-lg bg-white  border-gray-300 border-[1px]",
        className,
      )}
    >
      {title && (
        <h1 className="font-medium text-xl px-2 py-4 border-b-[1px] mb-4 border-purple-300">
          {title}
        </h1>
      )}
      <div>{children}</div>
    </div>
  );
};
export default CardLayout;
