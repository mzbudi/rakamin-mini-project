import React, { useState } from "react";
import { ReactComponent as Checklist } from "../../svg/Checklist.svg";
import Dropdown from "../Dropdown/Dropdown";
import Modal from "../Modal";

const KanbanCard = ({ progress }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState({});

  //create handle input function to multiple inputs
  const handleInput = (e, field) => {
    setInput({ ...input, [field]: e.target.value });
  };

  console.log(input);

  const modalConfig = {
    title: "Edit Task",
    content: (
      <>
        <p className="text-xs leading-5 font-bold text-modalContent font-nunito mt-4">
          Task Name
        </p>
        <input
          type="text"
          placeholder="Type your task"
          className="w-full border-2 border-[#E0E0E0] focus:outline-primary focus:caret-primary active:outline-borderPrimary rounded-lg px-4 py-2 mt-2 text-xs leading-5 opacity-50"
          onChange={(e) => handleInput(e, "taskName")}
          value={input.taskName}
        />
        <p className="text-xs leading-5 font-bold text-modalContent font-nunito mt-4">
          Progress
        </p>
        <input
          type="text"
          placeholder="70%"
          className="border-2 border-[#E0E0E0] focus:outline-primary focus:caret-primary active:outline-borderPrimary rounded-lg px-4 py-2 mt-2 text-xs leading-5 opacity-50"
          onChange={(e) => handleInput(e, "progress")}
          value={input.progress}
        />
      </>
    ),
    actionButton: (
      <button
        type="button"
        className="flex flex-row justify-center ml-[5px] rounded-md shadow-sm border border-borderPrimary bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-borderPrimary focus:outline-none focus-visible:ring-2 focus-visible:ring-borderPrimary focus-visible:ring-offset-2"
        onClick={() => {
          setIsOpen(false);
        }}
      >
        <p className="font-nunito text-sm leading-6 text-white">Save Task</p>
      </button>
    ),
  };
  return (
    <div className="flex flex-col bg-[#FAFAFA] border-[#E0E0E0] border rounded px-4 mt-2 mb-3 min-w-[294px]">
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} modalConfig={modalConfig} />
      <div className="border-b border-dashed border-[#E0E0E0] pt-4 pb-2">
        <p className="font-nunito font-bold text-sm leading-6 text-[#404040] ">
          Register client.
        </p>
      </div>
      <div className="flex flex-row mt-3 mb-3 items-center justify-between">
        <div className="flex space-x-3">
          <div className="w-44 bg-[#EDEDED] rounded-full h-4 ">
            <div
              className={`${progress === 100 ? 'bg-success' : 'bg-primary'}  rounded-full h-4`}
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
        <Dropdown setIsOpen={setIsOpen} />
      </div>
    </div>
  );
};

export default KanbanCard;
