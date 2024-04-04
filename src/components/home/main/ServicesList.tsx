import image1 from "../../../../public/images/main/services_img/visual.jpg";
import image2 from "../../../../public/images/main/services_img/photographer.jpg";
import image3 from "../../../../public/images/main/services_img/collaboration.jpg";
import image4 from "../../../../public/images/main/services_img/presets.jpg";
import image5 from "../../../../public/images/main/services_img/photo_class.jpg";
import image6 from "../../../../public/images/main/services_img/plant.jpg";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export type ServiceType = {
  id: number;
  title: string;
  href: string;
  imageSrc: StaticImageData;
};

type ServicesType = ServiceType[];

const services: ServiceType[] = [
  {
    id: 1,
    title: "Консультирую по концепции ведения блога и визуала.",
    href: "/visual",
    imageSrc: image1,
  },
  {
    id: 2,
    title: "Фотографирую.",
    href: "#",
    imageSrc: image2,
  },
  {
    id: 3,
    title: "/   СОТРУДНИЧАЮ  /",
    href: "#",
    imageSrc: image3,
  },
  {
    id: 4,
    title: "/ PRESETS /",
    href: "#",
    imageSrc: image4,
  },
  {
    id: 5,
    title: "Обучаю съемке.",
    href: "#",
    imageSrc: image5,
  },
  {
    id: 6,
    title: "Консультирую по растительному питанию.",
    href: "#",
    imageSrc: image6,
  },
];

export default function ServicesList() {
  return (
    <section className="bg-zinc-800 w-full h-full text-white py-10">
      <div className="c_main_container px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-10">
        <div className="mb-10 ml-12">
          <h2 className="uppercase text-[3.45rem] ml-[-6px] text-fontGreen leading-8 text-left">
            Услуги
          </h2>
          <p>Чем я могу быть полезна?</p>
        </div>
        <ul className="grid grid-cols-2 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8  items-center justify-items-center ">
          {services.map((product) => (
            <li key={product.id} className=" w-[80%]">
              <Link href={product.href}>
                <Image
                  src={product.imageSrc}
                  alt={"alt text"}
                  className="h-full w-full object-cover object-center brightness-[.9] contrast-[.9]"
                />

                <h3 className="mt-3 h-10 text-sm text-white">
                  {product.title}
                </h3>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* <div className="container flex flex-col ">
        <ul className="border grid grid-cols-3 gap-6 h-[90vh] justify-items-center py-4">
          {services.map((service: ServiceType) => (
            <li key={service.id} className="border w-1/2 flex justify-center">
              <ServiceLink serviceItem={service as ServiceType} />
            </li>
          ))}
        </ul>
      </div> */}
      {/* test  */}
      <div></div>
    </section>
  );
}

{
  /* Heading of Services  */
}
{
  /* <div className="mb-10">
          <h2 className="uppercase text-[3.45rem] ml-[-6px] text-fontGreen leading-8 text-left">
            Услуги
          </h2>
          <p>Чем я могу быть полезна?</p>
        </div> */
}
