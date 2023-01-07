import React from "react";
import { ReactComponent as Checklist } from "../../svg/Checklist.svg";

const KanbanCard = ({ progress }) => {
  return (
    <div className="flex flex-col bg-[#FAFAFA] border-[#E0E0E0] border rounded px-4 mt-2 mb-3 min-w-[294px]">
      <div className="border-b border-dashed border-[#E0E0E0] pt-4 pb-2">
        <p className="font-nunito font-bold text-sm leading-6 text-[#404040] ">
          lore
        </p>
      </div>
      <div className="flex flex-row mt-3 mb-5 items-center justify-between">
        <div className="flex space-x-3">
          <div className="w-44 bg-[#EDEDED] rounded-full h-4 ">
            <div
              className="bg-[green] rounded-full h-4"
              style={{ width: progress === 100 ? "100%" : `${progress}%` }}
            ></div>
          </div>
          {progress === 100 ? (
            <Checklist />
          ) : (
            <p className="font-inter font-normal text-xs leading-4 text-[#757575]">
              {`${progress}%`}
            </p>
          )}
        </div>
        <button className="w-6 h-6 hover:bg-slate-300 rounded">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default KanbanCard;
