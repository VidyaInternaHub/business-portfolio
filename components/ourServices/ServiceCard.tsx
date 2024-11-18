import React from "react";
import Image from "next/image";
const ServiceCard = ({ image, title, description }) => {
  return (
    <div className="rounded md:w-1/3 overflow-hidden shadow-lg bg-white hover:bg-blue-500  hover:text-white hover:cursor-pointer box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.06); ">
      <div className="h-20 w-20">
        <Image
          className="  ml-6 mt-3  "
          src={image}
          alt={title}
          height={75}
          width={75}
          objectFit="cover"
        />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="font-roboto text-base">{description}</p>
      </div>
      {/* <div className="px-6 pt-4 pb-2">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Learn More
        </button>
      </div> */}
    </div>
  );
};

export default ServiceCard;
