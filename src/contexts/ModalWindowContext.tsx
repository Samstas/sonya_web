"use client";

import { createContext, useContext, useState } from "react";

const ModalWindowContext = createContext<null>(null);

type TProps = {
  children: React.ReactNode;
};

function ModalWindowProvider({ children }: TProps) {
  const [showModal, setShowModal] = useState(false);

  function openModalWindow() {
    setShowModal(true);
  }

  function closeModalWindow() {
    setShowModal(false);
  }

  const contextValue = {
    showModal,
    setShowModal,
    openModalWindow,
    closeModalWindow,
  };

  return (
    <ModalWindowContext.Provider value={contextValue}>
      {children}
    </ModalWindowContext.Provider>
  );
}

function useModalWidow() {
  const context = useContext(ModalWindowContext);
  if (context === undefined)
    throw new Error(
      "ModalWindowContext was used outside of the Context Provider",
    );
  return context;
}

export { ModalWindowProvider, useModalWidow };
