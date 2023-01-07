import React, { useState } from "react";
import Modal from "../components/Modal";

const NavbarLayout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState({
    taskName: "",
    progress: "",
  });

  //create handle input function to multiple inputs
  const handleInput = (e, field) => {
    setInput({ ...input, [field]: e.target.value });
  };

  console.log(input);

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
          className="w-full border-2 border-[#EDEDED] rounded-lg px-4 py-2 mt-2 text-xs leading-5 opacity-50"
          onChange={(e) => handleInput(e, "taskName")}
          value={input.taskName}
        />
        <p className="text-xs leading-5 font-bold text-modalContent font-nunito mt-4">
          Progress
        </p>
        <input
          type="text"
          placeholder="70%"
          className="border-2 border-[#EDEDED] rounded-lg px-4 py-2 mt-2 text-xs leading-5 opacity-50"
          onChange={(e) => handleInput(e, "progress")}
          value={input.progress}
        />
      </>
    ),
    button: {
      cancel: {
        text: "Cancel",
        onClick: () => {
          setIsOpen(false);
        },
      },
      secondary: {
        button: (
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
        onClick: () => {
          setIsOpen(false);
        },
      },
    },
  };

  return (
    <div>
      <header>
        <nav className="w-full bg-[#FFFFFF] py-[18px] px-5 border-b border-[#E0E0E0]">
          <ul className="flex">
            <li>
              <span className="text-lg pr-[10px] font-bold font-nunito non-italic">
                Product Roadmap
              </span>
            </li>
            <li>
              <button
                className="bg-primary rounded-lg px-4 py-1 shadow-sm"
                onClick={() => {
                  setIsOpen(true);
                }}
              >
                <span className="text-white font-nunito"> + Add New Group</span>
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} modalConfig={modalConfig} />
    </div>
  );
};

export default NavbarLayout;
