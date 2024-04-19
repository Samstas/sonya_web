import { ModalWindow } from "@/components/ModalWindow";
import FormTarif from "../../FormTarif";

export function TarifOne() {
  return (
    <li className="border-b-2 border-black">
      {/* ШИРОКИЙ блок Тариф и (вы получите + формат работы) */}
      <div className="flex border-b-2 border-black ">
        <div className="flex  min-w-[16rem] flex-col items-center justify-center border-r-2 border-black ">
          <p className="w-[8.1rem] font-serif text-2xl uppercase">Тариф / 1</p>
          <p className="w-[8.1rem] leading-[.2rem]">консультация</p>
        </div>

        <div className="flex p-12">
          {/* блок - ВЫ ПОЛУЧИТЕ  */}
          <div className="w-1/2 px-10 text-justify">
            <p className="-ml-3 mb-5 font-serif text-xl">Вы получите:</p>
            <ol className="list-decimal ">
              <li>Полный анализ и разбор по визуалу.</li>
              <li>Анализ и оформление акаунта: имя, аватар, шапка и био.</li>
              <li>
                Разбор базовых принципов составления эстетичной ленты и сторис.
              </li>
              <li>
                Составление ленты из 12-ти снимков на основе референсов - для
                реализации идеи.
              </li>
              <li>
                Советы для вдохновения создания контента и взаимодействия с
                аудиторией.
              </li>
            </ol>
          </div>

          {/* блок - ФОРМАТ РАБОТЫ  */}
          <div className="w-1/2 px-10 text-justify">
            <p className="mb-5 font-serif text-xl">Формат работы:</p>
            <ul className="flex flex-col gap-2">
              <li>
                День 1: После оплаты, мы перейдем в Telegram, где согласуем
                удобный день и время для проведения консультации. В течение
                первого дня вы поделитесь со мной пожеланиями, которые хотели бы
                применить в своем визуале.
              </li>
              <li>
                День 2: Мы проведем часовую консультацию в формате аудио/видео
                звонка, где проведу разбор вашего блога, укажу на ошибки и
                расскажу что и как можно улучшить.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* УЗКИЙ блок приобрести и цена  */}
      <div className="flex h-[5rem] w-full">
        <div className="min-w-[16rem] border-r-2  border-black py-5"></div>

        <div className="flex w-[890px] ">
          <div className="  w-1/2 "></div>

          <div className=" flex  w-1/2  items-center justify-between border-l-2 border-black">
            <div className=" flex w-[60%] justify-center">/ приобрести /</div>
            <div className=" flex h-full w-[40%] items-center  justify-center bg-fontGreen text-xl text-white">
              60€
            </div>
          </div>
        </div>
      </div>
      {/* <ModalWindow >
        <FormTarif />
      </ModalWindow> */}
    </li>
  );
}
