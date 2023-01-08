import React, { useState, useEffect } from "react";
import KanbanCard from "./KanbanCard";
import EmptyKanban from "./EmptyKanban";
import Modal from "../Modal";
import { useDispatch, useSelector } from "react-redux";
import { getItemsApi, selectKanban } from "../../slices/kanbanSlice";

const KanbanGroup = ({ kanbanColor, id, title, description }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState({
    taskName: "",
    progress: "",
  });

  const dispatch = useDispatch();
  const kanban = useSelector(selectKanban);

  useEffect(() => {
    dispatch(getItemsApi(id));
  }, [dispatch, id]);

  const handleInput = (e, field) => {
    setInput({ ...input, [field]: e.target.value });
  };

  const modalConfig = {
    title: "Create Task",
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
    <div className="my-6" key={id}>
      <div
        className={`p-6 ${kanbanColor[0]} border ${kanbanColor[1]} rounded-lg shadow-md`}
      >
        <div
          className={`flex border ${kanbanColor[1]} ${kanbanColor[0]} rounded w-fit`}
        >
          <p
            className={`font-nunito font-normal text-xs leading-5 px-2 py-[2px] ${kanbanColor[2]}`}
          >
            {title}
          </p>
        </div>

        <p className="font-nunito font-bold text-xs leading-5 text-[#404040] pt-2">
          {description}
        </p>

        {kanban.items[id] &&
          kanban.items[id].map((item) => {
            console.log(item);
            return (
              <KanbanCard
                key={item.id}
                id={item.id}
                progress={item.progress_percentage}
                card_name={item.name}
              />
            );
          })}

        {kanban.items[id] && kanban.items[id].length === 0 && (
          <EmptyKanban title="No Task" />
        )}

        <div className="flex flex-col mt-2">
          <button
            className="flex items-center w-fit"
            onClick={() => setIsOpen(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mr-1 text-[#333333]"
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
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} modalConfig={modalConfig} />
    </div>
  );
};

export default KanbanGroup;
