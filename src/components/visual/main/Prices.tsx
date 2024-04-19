"use client";

import { useState } from "react";
import { TarifOne } from "./tarifs/TarifOne";
import { TarifTwo } from "./tarifs/TarifTwo";
import { ImportantModal } from "./ImportantModal";
import { ModalWindow } from "@/components/ModalWindow";
import { useModalWidow } from "@/contexts/ModalWindowContext";

export function Prices() {
  const { showModal, setShowModal } = useModalWidow();

  return (
    <section className="c_main_container  w-full">
      <h2 className="my-[5rem] ml-[10rem] text-4xl uppercase  text-fontDark">
        / Тарифы
      </h2>
      <ul className="mx-4 border-2 border-c_black">
        <TarifOne />
        <TarifTwo />
      </ul>
      <p className="mx-auto w-[60%] py-16 text-justify">
        После моей консультации и создания контента, вы приобретаете не только
        новые знания, которыми я лично руководствуюсь, но и теоретическую базу,
        которая позволит вам самостоятельно создавать визуальный контент и
        совершенствовать его.
      </p>

      {/* Modal Window  */}
      <ModalWindow isOpen={showModal}>
        <ImportantModal />
      </ModalWindow>
    </section>
  );
}
