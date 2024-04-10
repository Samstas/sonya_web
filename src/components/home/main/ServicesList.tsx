import { services } from "@/constants/global";
import type { TService } from "@/types/global";

import Image from "next/image";
import Link from "next/link";

export function ServicesList() {
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
          {services.map((product: TService) => (
            <li key={product.id} className="w-[80%]">
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
