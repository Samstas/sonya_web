import Image from "next/image";
import mainImg from "../../../../public/images/sonya_greeting.jpg";

export default function Greeting() {
  return (
    <section className="flex items-center justify-center min-h-[70vh] py-[10rem] px-10">
      <div className=" flex justify-center items-center">
        <Image
          src={mainImg}
          alt="Sonya"
          className=" max-h-[540px] max-w-[430px]"
        />
      </div>
      <div className="max-w-[720px]  border-red-600 ml-20">
        <h1 className="text-4xl mb-4 ">
          Приветствую, я Соня. <br /> Content creator & photographer. Based in
          Spain.
        </h1>
        <p className="text-[1.2rem] text-justify">
          Я фотографирую с 2017 года. Специализируюсь на стилях сьемки таких
          как: lifestyle и предметной, создаю коммерческие проэкты для брендов.
          Также являюсь коучем в области съемки, здорового образа жизни и
          растительного питания.
          <br />
          <br />
          Моя цель не только делиться моими умениями и знаниями, но и помочь вам
          раскрыть свой потенциал и развить навыки, необходимые для личного
          роста.
          <br />
          <br />
          Мои последователи в ходе моего руководства замечают положительные
          изменения в тех сферах, за которыми ко мне обращаются: улучшения
          навыков фотографирования и ведения блога, улучшения питания, внешнего
          вида, физического и ментального состояния, благодаря моим знаниям и
          опыту, которые открывают для себя на консультации, познав что-то
          новое, получив в чем-то поддержку, мотивацию и взгляд на ту или иную
          вещь с совершенно другой стороны.
          <br />
          <br />
          здесь вы можете ознакомиться с моими услугами и предложить идеи для
          совместного сотрудничества.
        </p>
      </div>
    </section>
  );
}
