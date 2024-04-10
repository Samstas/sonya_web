import image1 from "../../public/images/main/services_img/visual.jpg";
import image2 from "../../public/images/main/services_img/photographer.jpg";
import image3 from "../../public/images/main/services_img/collaboration.jpg";
import image4 from "../../public/images/main/services_img/presets.jpg";
import image5 from "../../public/images/main/services_img/photo_class.jpg";
import image6 from "../../public/images/main/services_img/plant.jpg";

import { TService } from "@/types/global";

export const services: TService[] = [
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
