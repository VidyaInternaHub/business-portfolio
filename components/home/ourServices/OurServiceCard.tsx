import React from "react";
import Image from "next/image";
import Card from "@/components/common/Card";

export default function ({ image, title, description }) {
  return (
    <Card className="rounded   bg-accent hover:bg-red-50 shadow-lg bg-opacity-5 overflow-hidden  hover:shadow-xl     box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.06); ">
      <div className="md:h-32 md:w-32 h-24 w-24">
        <Image
          className="  ml-6 mt-3  "
          src={image}
          alt={title}
          height={100}
          width={100}
          objectFit="cover"
        />
      </div>
      <div className="px-6 py-4">
        <div className=" text-xl md:text-2xl font-semibold text-gray-800  font-inter mb-2">
          {title}
        </div>
        <p className="text-lg leading-relaxed  md:text-xl text-secondary">
          {description}
        </p>
      </div>
      {/* <div className="px-6 pt-4 pb-2">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Learn More
        </button>
      </div> */}
    </Card>
  );
}
