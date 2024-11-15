import React from "react";
import { servicecardData } from "@/data/data";
import ServiceCard from "./ServiceCard";
import Image from "next/image";
const Card = () => {
  return (
    <div className=" w-full  flex flex-col  md:flex-row   justify-center gap-8 mt-8 mb-5 p-2  ">
      {servicecardData.map((card, index) => (
        <ServiceCard
          key={index}
          image={card.image}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
  );
};

export default Card;
