import React from "react";
import { ReactComponent as Checklist } from "../../svg/Checklist.svg";
import Dropdown from "../Dropdown/Dropdown";

const KanbanCard = ({ progress }) => {
  return (
    <div className="flex flex-col bg-[#FAFAFA] border-[#E0E0E0] border rounded px-4 mt-2 mb-3 min-w-[294px]">
      <div className="border-b border-dashed border-[#E0E0E0] pt-4 pb-2">
        <p className="font-nunito font-bold text-sm leading-6 text-[#404040] ">
          Register client.
        </p>
      </div>
      <div className="flex flex-row mt-3 mb-3 items-center justify-between">
        <div className="flex space-x-3">
          <div className="w-44 bg-[#EDEDED] rounded-full h-4 ">
            <div
              className="bg-success rounded-full h-4"
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
        <Dropdown />
      </div>
    </div>
  );
};

export default KanbanCard;
