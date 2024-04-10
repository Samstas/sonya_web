import { StaticImageData } from "next/image";

export type TService = {
  id: number;
  title: string;
  href: string;
  imageSrc: StaticImageData;
};

export type TServices = TService[];
