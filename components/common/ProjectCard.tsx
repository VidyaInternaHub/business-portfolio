import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";
import { FaIndustry } from "react-icons/fa";

import Card from "./Card";
import { IconType } from "react-icons";

type techType = {
  icon: IconType,
  name: string
}

interface Props {
    img: string,
    title: string,
    description: string,
    techstack: techType[],
    industry: string,
    country: string
}

export default function ProjectCard({
    img,
    title,
    description,
    techstack,
    industry,
    country
}: Props) {
  return (
    <Card className="group flex flex-col justify-between bg-background border-slate-400 cursor-pointer overflow-hidden lg:flex-row">
      {/* Image */}
      <div>
        <Image
          src={`/images/${img}`}
          width={720}
          height={480}
          className="w-full h-full lg:w-[680px]"
          alt={img}
        />
      </div>
      {/* About Project */}
      <div className="basis-1/2 flex flex-col px-4 py-8 gap-4">
        <span className="text-2xl font-semibold md:text-3xl">
          {title}
        </span>
        <span className="text-lg text-justify md:text-xl">
          {description}
        </span>
        <div className="flex flex-wrap gap-4">
          {techstack.map((tech, i) => (
            <span
              key={i}
              className="bg-teal-100 px-2 py-1 rounded-md font-medium text-sm md:text-base"
            >
              {tech.name}
            </span>
          ))}
        </div>
        <div className="h-full flex mt-4 justify-between items-end text-lg md:text-xl">
          <div className="flex items-center gap-2">
            <FaIndustry className="text-secondary" />
            <span className="text-secondary font-medium">
              {industry}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <FaLocationDot className="text-secondary" />
            <span>{country}</span>
          </div>
        </div>
      </div>
    </Card>
  );
}
