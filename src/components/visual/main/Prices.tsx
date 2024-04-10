export function Prices() {
  return (
    <section className="c_main_container my_b_red w-full">
      <h2 className="my-[5rem] ml-[10rem] text-4xl uppercase  text-fontDark">
        / Тарифы
      </h2>
      {/* FIXME: переделть блоки горизонтально сделать  */}
      <ul className="  border-4 border-c_black">
        <li className="flex  border-b-4 border-c_black">
          <div className="h-[10rem] w-[10rem] border-r-4 border-c_black">
            <div className="border-b-4 border-c_black text-center">
              Tarif / 1 консультация
            </div>
            <div>space</div>
          </div>
          <div className="w-full">
            <ul className="c_flex_between  gap-10 border-b-4 border-c_black">
              <li>вы получите</li>
              <li>формат работы</li>
            </ul>

            <div className="c_flex_between">
              <div className="w-1/2 border-r-4 border-c_black">space</div>
              <div>/выбрать тариф/</div>
              <div className="w-[10rem] bg-fontGreen text-center text-white">
                60$
              </div>
            </div>
          </div>
        </li>

        <li>2</li>
      </ul>
    </section>
  );
}
