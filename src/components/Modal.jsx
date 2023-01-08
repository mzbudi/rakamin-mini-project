import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

function Modal({ isOpen, setIsOpen, modalConfig }) {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => {
            setIsOpen(false);
          }}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-[10px] bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title className="text-lg font-bold font-nunito leading-7 flex items-center text-modalTitle justify-between mb-2">
                    <div className="flex items-center">
                      {modalConfig.icon ? modalConfig.icon : null}
                      {modalConfig.title ? modalConfig.title : null}
                    </div>
                    <button
                      onClick={() => {
                        setIsOpen(false);
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6 hover:scale-110"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </Dialog.Title>
                  <div className="mt-2">{modalConfig.content ? modalConfig.content : null}</div>

                  <div className="mt-4 flex justify-end">
                    <button
                      type="button"
                      className="flex flex-row mr-[5px] justify-center items-center px-4 py-1 rounded-lg border shadow-sm border-[#E0E0E0] hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={() => {
                        setIsOpen(false);
                      }}
                    >
                      <p className="font-nunito text-sm leading-6 text-modalTitle">Cancel</p>
                    </button>
                    {modalConfig.actionButton ? modalConfig.actionButton : null}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default Modal;
