import React from "react";
import KanbanCard from "./KanbanCard";

const KanbanGroup = ({ kanbanColor }) => {
  // DropDown Toggle
  // const dropDownToggle = () => {};

  return (
    <div className="my-6">
      <div
        className={`p-6 ${kanbanColor[0]} row-span-full border ${kanbanColor[1]} rounded-lg shadow-md`}
      >
        {/* Group Name */}
        <div
          className={`flex ${kanbanColor[1]} ${kanbanColor[1]} border rounded w-fit`}
        >
          <p
            className={`font-nunito font-normal text-xs leading-5 px-2 py-[2px] text-${kanbanColor[0]}`}
          >
            Group Task 1
          </p>
        </div>
        {/* Month */}
        <p className="font-nunito font-bold text-xs leading-5 text-[#404040] pt-2">
          January - March
        </p>
        {/* Card Kanban */}
        <KanbanCard progress={60} />
        <KanbanCard progress={100}/>
        <KanbanCard progress={10}/>

        {/* Button */}
        <div className="flex flex-col mt-2">
          <button className="flex items-center w-fit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mr-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="text-[#1D1F20] font-nunito font-normal text-xs leading-5">
              New Task
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default KanbanGroup;
