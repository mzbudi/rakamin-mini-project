import { Menu, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import {
  ActiveMoveLeft,
  ActiveMoveRight,
  InactiveMoveLeft,
  InactiveMoveRight,
  ActiveDelete,
  InactiveDelete,
  ActiveEdit,
  InactiveEdit,
  More,
} from "./DropdownIconList";
import { ReactComponent as CloseSVG } from "../../svg/Danger.svg";
import Modal from "../Modal";

export default function Dropdown({ setIsOpen }) {
  const [modalOpen, setModalOpen] = useState(false);

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
    actionButton: (
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
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <Modal
        modalConfig={modalConfig}
        isOpen={modalOpen}
        setIsOpen={setModalOpen}
      ></Modal>
      <div>
        <Menu.Button className="w-6 h-6 hover:bg-[#EDEDED] rounded z-0">
          <More />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
          <div className="px-1 py-1">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? " text-primary" : "text-[#333333]"
                  } group flex w-full items-center px-2 py-2 text-sm leading-6 font-nunito font-semibold`}
                >
                  {active ? (
                    <ActiveMoveRight className="mr-5 w-6 h-6" />
                  ) : (
                    <InactiveMoveRight className="mr-5 w-6 h-6" />
                  )}
                  Move Right
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? " text-primary" : "text-[#333333]"
                  }  group flex w-full items-center px-2 py-2 text-sm leading-6 font-nunito font-semibold`}
                >
                  {active ? (
                    <ActiveMoveLeft className="mr-5 h-6 w-6" />
                  ) : (
                    <InactiveMoveLeft className="mr-5 w-6 h-6" />
                  )}
                  Move Left
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? " text-primary" : "text-[#333333]"
                  }  group flex w-full items-center px-2 py-2 text-sm leading-6 font-nunito font-semibold`}
                  onClick={() => setIsOpen(true)}
                >
                  {active ? (
                    <ActiveEdit className="mr-6 h-5 w-5" />
                  ) : (
                    <InactiveEdit className="mr-6 w-5 h-5" />
                  )}
                  Edit
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? " text-danger" : "text-[#333333]"
                  }  group flex w-full items-center px-2 py-2 text-sm leading-6 font-nunito font-semibold`}
                  onClick={() => setModalOpen(true)}
                >
                  {active ? (
                    <ActiveDelete className="mr-6 h-5 w-5" />
                  ) : (
                    <InactiveDelete className="mr-6 w-5 h-5" />
                  )}
                  Delete
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
