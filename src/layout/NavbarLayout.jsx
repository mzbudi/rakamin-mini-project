import React, { useState } from "react";
import Modal from "../components/Modal";
import { ReactComponent as CloseSVG } from "../svg/Danger.svg";

const NavbarLayout = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [input, setInput] = useState("");

  // const handleInput = (e) => {
  //   setInput(e.target.value);
  // };

  const modalConfig = {
    title: "Delete Task",
    icon: <CloseSVG className="mr-[11px]" />,
    content: (
      <>
        <p className="text-sm leading-6 font-normal text-modalContent font-nunito">
          Are you sure you want to delete this task? Once a task is deleted,
          there is no going back.
        </p>
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
            className="inline-flex mx-2 rounded-md border border-transparent bg-danger px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            Delete
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
