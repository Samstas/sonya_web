import React from "react";

export function ImportantModal() {
  return (
    <section className="w-[700px]  px-[3rem]">
      <h1 className="text-c_red mb-6 text-4xl uppercase">/ Важно</h1>
      <ul className="flex list-decimal flex-col gap-2">
        <li>
          Услуга индивидуального создания контента действительна для этих
          городов: Valencia, Cullera и Gandía.
        </li>

        <li>
          Внесение залога ( 40% от стоимости всей услуги ) гарантирует резерв
          времени, даты для проведения консультации и индивидуального разбора
          вашего блога
          <ul className="ml-1 mt-3 list-disc">
            <li>
              При непредвиденных обстоятельствах, вы можете перенести
              консультацию, заранее об этом согласовавши ( Минимум за 3 дня )
            </li>
            <li>
              При отмене проведения консультации залог - не возвращается.
              Давайте ценить время друг- друга.{" "}
            </li>
            <li>
              В случае если я перенесу консультацию, вы можете согласиться и
              перенести консультацию на другую дату или вернуть внесенную
              предоплату.
            </li>
          </ul>
        </li>

        <li className="mt-3">
          Вторая часть оплаты ( 60% ) производится до съемки ( В день, когда мы
          начнем работать над созданием референсов для реализации идеи на съемке
          )
          <li className="ml-1 mt-3 list-disc">
            В случае отмены проведения съемки, вы можете вернуть только 30% от
            внесенных 60%
          </li>
        </li>

        <li>
          Готовые фотографии заливаются на файлообменник и вам отправляется
          ссылка, с открытым доступом только для меня и вас. Срок действия
          ссылки: 21 день. ( Пожалуйста, скачивайте материал заранее. )
        </li>

        <li>
          В тарифе с созданием контента указано, что входит в данную услугу.
          <ul className="ml-1 mt-3 list-disc">
            <li>
              Услуги визажиста, стилиста и т.д - не входит в услуги съемки. Если
              вы нуждаетесь в подобных услугах, вы можете сами найти
              специалистов.
            </li>
            <li>
              Реквизиты для съемки - не предоставляются фотографом. Я только
              помогаю составить список/референс необходимых реквизитов которые
              понадобятся для реализации идеи съемки.
            </li>
          </ul>
        </li>

        <li>
          Если вы хотите конфиденциальную съемку предупредите об этом заранее.
          Если же вы не поставили меня в известность до съемки, я имею право
          публиковать фотографии на сайте и в своих социальных сетях.
        </li>

        <li>
          Выбирая меня, вы соглашаетесь с моим стилем съемки и авторской
          обработкой отснятого материала.{" "}
        </li>
      </ul>
    </section>
  );
}
