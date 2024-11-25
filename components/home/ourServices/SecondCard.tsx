import React from "react";
import OurSecondCard from "./OurServiceCard";
import { servicecarddescriptionData } from "@/data/data";
export default function SecondCard() {
  return (
    <div className=" w-full  flex flex-col     justify-center gap-8 mt-8 mb-5 p-2  ">
      {servicecarddescriptionData.map((card, index) => (
        <OurSecondCard
          key={index}
          image={card.image}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
  );
}
