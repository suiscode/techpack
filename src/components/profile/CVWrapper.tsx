import React from "react";
import { BsPencil } from "react-icons/bs";

const CVWrapper = ({ children, label }: any) => {
  return (
    <div className="px-2">
      <h1 className="text-lg font-semibold text-[#AB0E66]">{label}</h1>
      <div className="rounded-3xl p-4 mx-2 relative bg-white w-full h-96">
        {children}
        <label className="absolute top-3 w-10 h-10 hover:bg-[#AB0E66] hover:text-white transition-all duration-200 ease-in items-center justify-center flex cursor-pointer right-3 z-10 bg-[#AB0E66]/10 text-[#AB0E66]/80 bg-opacity-50 rounded-full">
          <BsPencil className="w-6 h-6 text-inherit" />
        </label>
      </div>
    </div>
  );
};

export default CVWrapper;
