import { MdLocationOn } from "react-icons/md";
import { AiFillExclamationCircle } from "react-icons/ai";
import { ModalWindow } from "@/components/ModalWindow";
import { FormTarif } from "../../FormTarif";
import { useModalWidow } from "@/contexts/ModalWindowContext";

export function TarifTwo() {
  const { openModalWindow, showModal } = useModalWidow();

  return (
    <li className="border-b-2 border-black">
      {/* ШИРОКИЙ блок Тариф и (вы получите + формат работы) */}
      <div className="flex border-b-2 border-black ">
        <div className="flex  min-w-[16rem] flex-col items-center justify-center border-r-2 border-black ">
          <p className="w-[8.1rem] font-serif text-2xl uppercase">Тариф / 2</p>
          <p className="w-[8.1rem] leading-[.2rem]">под ключ</p>
        </div>

        <div className="flex p-12">
          {/* блок - ВЫ ПОЛУЧИТЕ  */}
          <div className="w-1/2 px-10 text-justify">
            <p className=" mb-5 font-serif text-xl">Вы получите:</p>
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
            <p className="-ml-4 mb-5 font-serif text-xl">Формат работы:</p>
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
        <div
          onClick={openModalWindow}
          className="text-c_red flex min-w-[16rem] cursor-pointer items-center  justify-center border-r-2 border-black py-5 transition hover:bg-fontBeigeSec "
        >
          <AiFillExclamationCircle className="text-c_red size-5" />
          <span className="border-c_red border-b uppercase  ">
            &nbsp;/ Важно
          </span>
        </div>

        <div className="flex w-[890px] ">
          <div className="  pl-22 ml-[5.3rem] flex w-1/2 items-center">
            <MdLocationOn className="-mt-1" />
            <span>&nbsp;Spain: Valencia - Cullera - Gandia</span>
          </div>

          <div className=" flex  w-[60%]  items-center justify-between border-l-2 border-black">
            <div
              onClick={openModalWindow}
              className=" flex w-[59%] justify-center"
            >
              / приобрести /
            </div>
            <div className=" flex h-full w-[41%] items-center  justify-center bg-fontGreen text-xl text-white">
              300€
            </div>
          </div>
        </div>
      </div>
      <ModalWindow isOpen={showModal}>
        <FormTarif>
          <h1>Тариф 2</h1>
        </FormTarif>
      </ModalWindow>
    </li>
  );
}
