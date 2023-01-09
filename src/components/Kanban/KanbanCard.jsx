import React, { useState } from "react";
import { ReactComponent as Checklist } from "../../svg/Checklist.svg";
import Dropdown from "../Dropdown/Dropdown";
import Modal from "../Modal";
import { useDispatch } from "react-redux";
import { updateItemApi } from "../../slices/kanbanSlice";

const KanbanCard = ({
  progress,
  item_id,
  todo_id,
  card_name,
  nextGroup,
  prevGroup,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState({
    taskName: card_name || "",
    progress: progress || "",
  });

  const dispatch = useDispatch();

  const handleUpdate = () => {
    const data = {
      id: item_id,
      todo_id,
      target_todo_id: todo_id,
      progress_percentage: input.progress === "" ? 0 : input.progress,
      name: input.taskName,
    };
    dispatch(updateItemApi(data));
    setIsOpen(false);
  };

  const handleInput = (e, field) => {
    setInput({ ...input, [field]: e.target.value });
  };

  const handleInputProgress = (e) => {
    const value = e.target.value;
    if (value.length > 3) {
      return;
    }
    if (value > 100) {
      setInput({ ...input, progress: 100 });
      return;
    }
    if (value < 0) {
      setInput({ ...input, progress: 0 });
      return;
    }
    if (value === "") {
      setInput({ ...input, progress: "" });
      return;
    }
    if (value.match(/^[0-9]*$/)) {
      setInput({ ...input, progress: value });
    }
  };

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
          onChange={(e) => handleInputProgress(e)}
          value={input.progress}
        />
      </>
    ),
    actionButton: (
      <button
        type="button"
        className="flex flex-row justify-center ml-[5px] rounded-md shadow-sm border border-borderPrimary bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-borderPrimary focus:outline-none focus-visible:ring-2 focus-visible:ring-borderPrimary focus-visible:ring-offset-2"
        onClick={() => {
          handleUpdate();
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
          {card_name}
        </p>
      </div>
      <div className="flex flex-row mt-3 mb-3 items-center justify-between">
        <div className="flex space-x-3">
          <div className="w-44 bg-[#EDEDED] rounded-full h-4 ">
            <div
              className={`${
                progress === 100 ? "bg-success" : "bg-primary"
              }  rounded-full h-4`}
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
        <Dropdown
          setIsOpen={setIsOpen}
          item_id={item_id}
          todo_id={todo_id}
          nextGroup={nextGroup}
          prevGroup={prevGroup}
          progress={progress}
          card_name={card_name}
        />
      </div>
    </div>
  );
};

export default KanbanCard;
