import Link from "next/link";
import { ServiceType } from "./ServicesList";
import Image from "next/image";

export default function ServiceLink({ serviceItem }: ServiceType) {
  //   console.log(service);

  const { imageSrc, title, href } = serviceItem;
  return (
    <Link href={href} className="flex flex-col justify-between">
      <div className="border border-red-800 h-[18rem] overflow-hidden">
        <Image src={imageSrc} alt={`image of ${title}`} className="w-full " />
      </div>
      <p>{title}</p>
    </Link>
  );
}
