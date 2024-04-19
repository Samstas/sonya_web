import { useState } from "react";

export function useModal() {
  const [showModal, setShowModal] = useState(false);

  function onClose() {
    setShowModal(false);
  }

  function onOpen() {
    setShowModal(true);
  }

  return { showModal, setShowModal, onClose, onOpen };
}
