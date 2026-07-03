import type React from "react";

interface Pops {
  children: React.ReactNode;
}

export const WrappedCard: React.FC<Pops> = ({ children }) => {
  return (
    <div className="transition-all duration-300 ease-ou hover:-translate-y-3 hover:scale-[1.01] hover:shadow-2x hover:border-violet-200  w-full bg-white/80 hover:bg-gray-100  shadow-sm rounded-xl p-3 ">
      {children}
    </div>
  );
};
