import { TarifOne } from "./tarifs/TarifOne";
import { TarifTwo } from "./tarifs/TarifTwo";

export function Prices() {
  return (
    <section className="c_main_container  w-full">
      <h2 className="my-[5rem] ml-[10rem] text-4xl uppercase  text-fontDark">
        / Тарифы
      </h2>
      <ul className="mx-4 border-2 border-c_black">
        <TarifOne />
        <TarifTwo />
      </ul>
    </section>
  );
}
