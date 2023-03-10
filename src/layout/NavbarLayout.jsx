import React, { useState } from "react";
import Modal from "../components/Modal";
import { useDispatch } from "react-redux";
import { createNewTodosApi } from "../slices/kanbanSlice";

const NavbarLayout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState({
    title: "",
    description: "",
  });

  const dispatch = useDispatch();

  const handleCreateNewTodos = () => {
    dispatch(createNewTodosApi(input));
    setIsOpen(false);
  };

  const handleInput = (e, field) => {
    setInput({ ...input, [field]: e.target.value });
  };

  const modalConfig = {
    title: "Add New Group",
    content: (
      <>
        <p className="text-xs leading-5 font-bold text-modalContent font-nunito mt-4">
          Add New Group
        </p>
        <input
          type="text"
          placeholder="Type your group"
          className="w-full border-2 border-[#E0E0E0] focus:outline-primary focus:caret-primary active:outline-borderPrimary rounded-lg px-4 py-2 mt-2 text-xs leading-5 opacity-50"
          onChange={(e) => handleInput(e, "title")}
          value={input.title}
        />
        <p className="text-xs leading-5 font-bold  text-modalContent font-nunito mt-4">
          Description
        </p>
        <textarea
          rows={3}
          type="text"
          placeholder="Type your description"
          className="w-full border-2 border-[#E0E0E0] focus:outline-primary focus:caret-primary active:outline-borderPrimary rounded-lg px-4 py-2 mt-2 text-xs leading-5 opacity-50 "
          onChange={(e) => handleInput(e, "description")}
          value={input.description}
        />
      </>
    ),
    actionButton: (
      <button
        type="button"
        className="flex flex-row justify-center ml-[5px] rounded-md shadow-sm border border-borderPrimary bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-borderPrimary focus:outline-none focus-visible:ring-2 focus-visible:ring-borderPrimary focus-visible:ring-offset-2"
        onClick={() => {
          handleCreateNewTodos();
        }}
      >
        <p className="font-nunito text-sm leading-6 text-white">Save Task</p>
      </button>
    ),
  };

  return (
    <div className="w-full">
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
