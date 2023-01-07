import React from "react";
import { ReactComponent as Checklist } from "../svg/Checklist.svg";

const Dashboard = () => {
  return (
    <div className=" flex flex-col">
      <div className="mx-6 my-6 w-fit">
        <div className="p-6 bg-cardPrimary row-span-full border border-borderPrimary rounded-lg shadow-md">
          {/* Group Name */}
          <div className="flex bg-cardPrimary border-borderPrimary border rounded w-fit">
            <p className="font-nunito font-normal text-xs leading-5 px-2 py-[2px] text-borderPrimary">
              Group Task 1
            </p>
          </div>
          {/* Month */}
          <p className="font-nunito font-bold text-xs leading-5 text-[#404040] pt-2">
            January - March
          </p>
          {/* Card Kanban */}
          <div className="flex flex-col bg-[#FAFAFA] border-[#E0E0E0] border rounded px-4 mt-2 mb-3">
            <div className="border-b border-dashed border-[#E0E0E0] pt-4 pb-2">
              <p className="font-nunito font-bold text-sm leading-6 text-[#404040] ">
                Re-designed the zero-g doggie bags. No more spills!
              </p>
            </div>
            <div className="flex flex-row mt-3 mb-5 items-center justify-between">
              <div className="flex space-x-3">
                <div className="w-44 bg-[#EDEDED] rounded-full h-4 ">
                  <div className="bg-primary h-4 rounded-full w-[45%]"></div>
                </div>
                <p className="font-inter font-normal text-xs leading-4 text-[#757575]">
                  45%
                </p>
                <Checklist />
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
          <div className="flex flex-col bg-[#FAFAFA] border-[#E0E0E0] border rounded px-4 mt-2 mb-3">
            <div className="border-b border-dashed border-[#E0E0E0] pt-4 pb-2">
              <p className="font-nunito font-bold text-sm leading-6 text-[#404040] ">
                Re-designed the zero-g doggie bags. No more spills!
              </p>
            </div>
            <div className="flex flex-row mt-3 mb-5 items-center justify-between">
              <div className="flex space-x-3">
                <div className="w-44 bg-[#EDEDED] rounded-full h-4 ">
                  <div className="bg-primary h-4 rounded-full w-[45%]"></div>
                </div>
                <p className="font-inter font-normal text-xs leading-4 text-[#757575]">
                  45%
                </p>
                <Checklist />
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
    </div>
  );
};

export default Dashboard;
