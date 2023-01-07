import React from "react";

const EmptyKanban = () => {
  return (
    <div className="flex flex-1 grow bg-[#FAFAFA] border-[#E0E0E0] border rounded px-4 mt-2 mb-3 min-w-[294px]">
      <div className="border-[#E0E0E0] pt-4 pb-2">
        <p className="font-nunito font-normal text-sm leading-6 text-[#757575] ">
          No Task
        </p>
      </div>
    </div>
  );
};

export default EmptyKanban;
