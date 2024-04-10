import React from "react";

const suitableForOptions = [
  {
    id: 1,
    description:
      "Блогерам, брендам и инфлюенсерам стремящиеся к улучшению качества своего контента.",
  },
  {
    id: 2,
    description:
      "Тем,  хочет создавать визуал не по трендам,а отражающий вас и ваши ценности.",
  },
  {
    id: 3,
    description:
      "Тем, кто хочет научиться создавать горманичный визуал, не тратив на это время.",
  },
  {
    id: 4,
    description: "Тем, кто хочет повысить уровень знаний. ",
  },
  {
    id: 5,
    description:
      "Тем, кто хочет хочет создавать контент, который будет привлекать вашу ЦА и клиентов ",
  },
];

export function SuitableFor() {
  return (
    <section className="c_main_container w-full">
      <h2 className="text-4xl uppercase text-fontDark my-[5rem] ml-16">
        Для кого подойдет?
      </h2>
      <ul className="flex h-[10rem]">
        {suitableForOptions.map((option, i) => {
          const isLastChild = i === suitableForOptions.length - 1;

          return (
            <li key={option.id} className="mb-16">
              {/* <div className="border border-blue-600"> */}
              <p className="mb-2 pl-5">{option.id}.</p>
              <p
                className={`w-full h-[5.6rem]
                px-5
                text-justify 
                ${isLastChild ? "" : "border-r-2"}
                 border-fontBeigeSec `}
              >
                {option.description}
              </p>
              {/* </div> */}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
