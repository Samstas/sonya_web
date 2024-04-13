import { MdLocationOn } from "react-icons/md";
import { ImLocation2 } from "react-icons/im";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiLocationMarker } from "react-icons/hi";
import { ImLocation } from "react-icons/im";

export function TarifTwo() {
  return (
    <li className="border-b-2 border-black">
      {/* ШИРОКИЙ блок Тариф и (вы получите + формат работы) */}
      <div className="flex border-b-2 border-black ">
        <div className="flex  min-w-[16rem] flex-col items-center justify-center border-r-2 border-black ">
          <p className="w-[8.1rem] text-2xl uppercase font-serif">Тариф / 2</p>
          <p className="w-[8.1rem] leading-[.2rem]">под ключ</p>
        </div>

        <div className="flex p-12">
          {/* блок - ВЫ ПОЛУЧИТЕ  */}
          <div className="w-1/2 px-10 text-justify">
            <p className=" mb-5 text-xl font-serif">Вы получите:</p>
            <ol className="flex flex-col gap-4">
              <li>Тариф / 1 | консультация</li>
              <li>
                + создание контента для вашего личного блога / бренда -
                созданный лично мной:
              </li>
              <li>
                100 исходников и снимки обработаны авторской обработкой. <br />-
                3 видео 4К ( длительность 30-60 сек. )
              </li>
              <li>+ Помощь в построение маршрута/локаций и образов.</li>
              <li>
                + Составление сетки из 15 сделанных снимков, готовые к
                публикации
              </li>
            </ol>
          </div>

          {/* блок - ФОРМАТ РАБОТЫ  */}
          <div className="w-1/2 px-10 text-justify">
            <p className="mb-5 -ml-4 text-xl font-serif">Формат работы:</p>
            <ul className="flex list-decimal flex-col gap-2">
              <li>
                Внесение предоплаты 40%. После чего мы согласуем удобный день и
                время для проведения консультации и дальнейшей съемки.
              </li>
              <li>
                Проведение консультации: Полный разбор визуала, анализ и
                оформление.
              </li>
              <li> Внесение остатка 60%</li>
              <li> Проведение съемки.</li>
              <li>
                Полная упаковка блога после консультации и проведения съемки.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* УЗКИЙ блок приобрести и цена  */}
      <div className="flex h-[5rem] w-full">
        <div className="min-w-[16rem] border-r-2  border-black py-5"></div>

        <div className="flex w-[890px] ">
          <div className="  pl-22 flex w-1/2 items-center ml-[5.3rem]">
            <MdLocationOn className="-mt-1" />
            <span> &nbsp; Valencia - Cullera - Gandia</span>
          </div>

          <div className=" flex  w-[60%]  items-center justify-between border-l-2 border-black">
            <div className=" flex w-[59%] justify-center">/ приобрести /</div>
            <div className=" flex h-full w-[41%] items-center  justify-center bg-fontGreen text-xl text-white">
              300€
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}
