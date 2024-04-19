import { useModalWidow } from "@/contexts/ModalWindowContext";
import React from "react";
import { RxCross1 } from "react-icons/rx";

type TModalWindowProps = {
  isOpen: boolean;
  children: React.ReactNode;
};

export function ModalWindow({ isOpen, children }: TModalWindowProps) {
  const { closeModalWindow } = useModalWidow();

  if (!isOpen) return;

  function handleClose(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    // if (e.target.id === "modal_wrapper") onCloseModal();
    if (e.target.id === "modal_wrapper") closeModalWindow();
  }

  return (
    // Background Blur
    <div
      onClick={handleClose}
      id="modal_wrapper"
      className="c_flex_center fixed inset-0 bg-c_black bg-opacity-55 backdrop-blur-sm"
    >
      {/* Modal Window  */}
      <div className="relative rounded-xl bg-fontBeigeSec py-10 text-c_black">
        {/* Content  */}
        {children}

        {/* Close button  */}
        <span className="absolute right-4 top-4 cursor-pointer text-xl ">
          <RxCross1
            // onClick={onCloseModal}
            onClick={closeModalWindow}
            className="hover:text-c_red transition duration-500"
          />
        </span>
      </div>
    </div>
  );
}
